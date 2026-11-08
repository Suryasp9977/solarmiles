import { useState } from 'react'
import { contact } from '../../data/site.js'
import { BILL_RANGES } from '../../data/billRanges.js'
import { submitLead } from '../../lib/leads.js'
import './LeadForm.css'

// Contact-page form. Saves the lead to Supabase first, then opens WhatsApp with the same details.
export default function LeadForm({
  id,
  title,
  description,
  phonePlaceholder = 'WhatsApp number',
  showConsent = false,
  submitLabel = 'Start My Solar Assessment',
  successMessage = 'Thank you. Your enquiry is saved, and our team will contact you on WhatsApp.',
  source = 'contact-form',
}) {
  const [status, setStatus] = useState('idle') // idle | saving | done | error
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const formEl = event.currentTarget
    const form = new FormData(formEl)
    const range = BILL_RANGES.find((r) => r.id === form.get('bill'))

    // Open the WhatsApp tab during the click, so browsers don't block it. It is filled in after saving.
    const whatsappTab = window.open('', '_blank')

    setStatus('saving')
    setError('')
    try {
      await submitLead({
        name: form.get('name'),
        phone: form.get('phone'),
        pin: form.get('pincode'),
        bill: range?.value,
        billRange: range?.label,
        source,
      })
    } catch (err) {
      whatsappTab?.close()
      setError(err.message)
      setStatus('error')
      return
    }

    const message = [
      'Hi SolarMiles, I would like a free solar assessment.',
      `Name: ${form.get('name')}`,
      `WhatsApp: ${form.get('phone')}`,
      `PIN code: ${form.get('pincode')}`,
      `Electricity bill: ${range?.label ?? ''}`,
    ].join('\n')
    if (whatsappTab) whatsappTab.location.href = `${contact.whatsapp}?text=${encodeURIComponent(message)}`

    setStatus('done')
    formEl.reset()
  }

  return (
    <form className="form" id={id} onSubmit={handleSubmit}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}

      <input name="name" required minLength={2} placeholder="Full name" aria-label="Full name" autoComplete="name" />

      <input
        name="phone"
        required
        type="tel"
        inputMode="numeric"
        pattern="[6-9][0-9]{9}"
        placeholder={phonePlaceholder}
        aria-label={phonePlaceholder}
        autoComplete="tel"
      />

      <input
        name="pincode"
        required
        inputMode="numeric"
        pattern="[0-9]{6}"
        placeholder="PIN code"
        aria-label="PIN code"
        autoComplete="postal-code"
      />

      <select name="bill" required defaultValue="" aria-label="Monthly electricity bill">
        <option value="" disabled>Monthly electricity bill</option>
        {BILL_RANGES.map((r) => (
          <option key={r.id} value={r.id}>{r.label}</option>
        ))}
      </select>

      {showConsent && (
        <label className="consent">
          <input type="checkbox" name="consent" required />
          I agree to SolarMiles Terms of use & Privacy Policy and to be contacted about my solar enquiry.
        </label>
      )}

      <button className="btn block" type="submit" disabled={status === 'saving'}>
        {status === 'saving' ? 'Saving…' : submitLabel}
      </button>

      {status === 'done' && <div className="ok" role="status">{successMessage}</div>}
      {status === 'error' && <div className="form-error" role="alert">{error}</div>}
    </form>
  )
}