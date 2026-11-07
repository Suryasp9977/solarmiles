import { pathToFileURL } from 'node:url'

// Safety-net sync: sends leads that have not reached the Google Sheet yet.
// Runs in GitHub Actions every 15 minutes (see .github/workflows/sync-sheet.yml).
// Uses the Supabase SERVICE ROLE key, which only exists in GitHub Actions secrets.

const DATA_COLUMNS = (lead) =>
  Object.fromEntries(Object.entries(lead).filter(([k]) => !k.startsWith('sheet_')))

export async function syncOnce({ fetchFn = fetch, env = process.env, log = console.log } = {}) {
  const supaUrl = env.SUPABASE_URL
  const supaKey = env.SUPABASE_SERVICE_ROLE_KEY
  const sheetUrl = env.SHEET_WEBHOOK_URL
  const sheetKey = env.SHEET_WEBHOOK_KEY
  for (const [name, v] of Object.entries({
    SUPABASE_URL: supaUrl,
    SUPABASE_SERVICE_ROLE_KEY: supaKey,
    SHEET_WEBHOOK_URL: sheetUrl,
    SHEET_WEBHOOK_KEY: sheetKey,
  })) {
    if (!v) throw new Error(`Missing ${name}`)
  }

  const supaHeaders = {
    apikey: supaKey,
    ...(supaKey.startsWith('sb_') ? {} : { Authorization: `Bearer ${supaKey}` }),
    'Content-Type': 'application/json',
  }
  // 1. Find leads that have not reached the sheet.
  const q = 'sheet_synced_at=is.null&order=created_at.asc&limit=200&select=*'
  const listRes = await fetchFn(`${supaUrl}/rest/v1/leads?${q}`, { headers: supaHeaders })
  if (!listRes.ok) throw new Error(`Supabase query failed: ${listRes.status}`)
  const leads = await listRes.json()

  let synced = 0
  let failed = 0
  for (const lead of leads) {
    try {
      // 2. Send to the sheet. The sheet skips ids it already has, so retries are safe.
      const sheetRes = await fetchFn(`${sheetUrl}?key=${encodeURIComponent(sheetKey)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ record: DATA_COLUMNS(lead) }),
        redirect: 'follow',
      })
      const data = await sheetRes.json().catch(() => ({}))
      if (!sheetRes.ok || !data.ok) {
        throw new Error(`Sheet rejected lead ${lead.id}: ${sheetRes.status} ${data.error || ''}`.trim())
      }

      // 3. Mark as synced in Supabase.
      const patchRes = await fetchFn(`${supaUrl}/rest/v1/leads?id=eq.${lead.id}`, {
        method: 'PATCH',
        headers: { ...supaHeaders, Prefer: 'return=minimal' },
        body: JSON.stringify({ sheet_synced_at: new Date().toISOString(), sheet_last_error: null }),
      })
      if (!patchRes.ok) throw new Error(`Could not mark lead ${lead.id} as synced: ${patchRes.status}`)
      synced++
    } catch (err) {
      failed++
      log(`lead ${lead.id} not synced: ${err.message}`)
      await fetchFn(`${supaUrl}/rest/v1/leads?id=eq.${lead.id}`, {
        method: 'PATCH',
        headers: { ...supaHeaders, Prefer: 'return=minimal' },
        body: JSON.stringify({ sheet_last_error: String(err.message).slice(0, 500) }),
      }).catch(() => {})
    }
  }
  return { pending: leads.length, synced, failed }
}

// Runs when started directly by GitHub Actions.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  syncOnce()
    .then((r) => {
      console.log(JSON.stringify(r))
      if (r.failed > 0) process.exitCode = 1
    })
    .catch((err) => {
      console.error(err.message)
      process.exitCode = 1
    })
}