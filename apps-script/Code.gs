// Google Apps Script: receives a lead and appends it to the "Leads" sheet.
// Used by the Supabase webhook (immediate) and the GitHub Actions sync (safety net).
// Setup: Project Settings → Script properties → add KEY. Deploy as a web app (Execute as: Me, Anyone).

const SHEET_NAME = 'Leads'

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.waitLock(20000)
  try {
    const expected = PropertiesService.getScriptProperties().getProperty('KEY')
    if (!expected || (e.parameter.key || '') !== expected) return json_({ ok: false, error: 'unauthorized' })

    const body = JSON.parse(e.postData.contents)
    const record = body.record
    if (!record || record.id === undefined) return json_({ ok: false, error: 'no record' })

    const sheet = getSheet_()
    const headers = ensureHeaders_(sheet, Object.keys(record))

    // Duplicate protection: skip a lead whose id is already in the sheet.
    const n = sheet.getLastRow() - 1
    if (n > 0) {
      const idCol = headers.indexOf('id') + 1
      const ids = sheet.getRange(2, idCol, n, 1).getValues().flat().map(String)
      if (ids.includes(String(record.id))) return json_({ ok: true, duplicate: true })
    }

    sheet.appendRow(headers.map((h) => (record[h] === null || record[h] === undefined ? '' : record[h])))
    return json_({ ok: true })
  } catch (err) {
    return json_({ ok: false, error: String(err) })
  } finally {
    lock.releaseLock()
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME)
}

// Creates the header row on first use, and adds a column when a new field appears later.
function ensureHeaders_(sheet, keys) {
  let headers = sheet.getLastRow() > 0 ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : []
  headers = headers.filter((h) => h !== '')
  keys.forEach((k) => { if (!headers.includes(k)) headers.push(k) })
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold')
  sheet.setFrozenRows(1)
  return headers
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}