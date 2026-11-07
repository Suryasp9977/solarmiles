// Saves a lead straight to Supabase from the browser (works on GitHub Pages, no server).
// Safe to expose: the anon key can only INSERT into "leads" (see supabase-schema.sql).
// Nothing can be read back with this key.

const URL = import.meta.env.VITE_SUPABASE_URL
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
const TABLE = 'leads'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PIN_RE = /^\d{6}$/

const text = (v, max) => String(v ?? '').trim().slice(0, max)
const num = (v) => {
  const n = Number(v)
  return Number.isFinite(n) && n > 0 ? n : null
}

// Turns the form payload into a table row. Throws a readable error for bad input.
function toRow(p) {
  const name = text(p.name, 120)
  const phone = String(p.phone || '').replace(/\D/g, '')
  const email = text(p.email, 160)
  const pin = String(p.pin || '').replace(/\D/g, '')

  if (name.length < 2) throw new Error('Enter your name.')
  if (phone.length !== 10) throw new Error('Enter a valid 10-digit mobile number.')
  if (email && !EMAIL_RE.test(email)) throw new Error('Enter a valid email or leave it blank.')
  if (pin && !PIN_RE.test(pin)) throw new Error('Enter a valid 6-digit PIN code.')

  return {
    name,
    phone,
    email: email || null,
    pincode: pin || null,
    bill: num(p.bill),
    bill_range: text(p.billRange, 40) || null,
    system_kw: num(p.systemKw),
    estimated_savings: num(p.estimatedSavings),
    area: num(p.area),
    location: text(p.location, 60) || null,
    roof: text(p.roof, 40) || null,
    property: text(p.property, 40) || null,
    source: text(p.source, 40) || 'website',
  }
}

export async function submitLead(payload) {
  if (!URL || !KEY) {
    throw new Error('Lead storage is not configured. Please message us on WhatsApp.')
  }
  const row = toRow(payload)

  const res = await fetch(`${URL}/rest/v1/${TABLE}`, {
    method: 'POST',
    headers: {
      apikey: KEY,
      ...(KEY.startsWith('sb_') ? {} : { Authorization: `Bearer ${KEY}` }),
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(row),
  })

  if (!res.ok) {
    throw new Error(`Your request could not be saved (error ${res.status}). Please try again or message us on WhatsApp.`)
  }
  return { ok: true }
}