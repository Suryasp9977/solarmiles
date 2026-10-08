import { useState } from 'react'
import { contact } from '../../data/site.js'
import './LeadForm.css'

export default function LeadForm({
  id,
  title,
  description,
  phonePlaceholder = 'Mobile (10 digits)',
  billOptions,
  showConsent = false,
  submitLabel,
  successMessage
}) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)

    const message = [
      'Hi SolarMiles, I would like a free solar assessment.',
      `Name: ${form.get('name')}`,
      `WhatsApp: ${form.get('phone')}`,
      `PIN code: ${form.get('pincode')}`,
      `Electricity bill: ${form.get('bill')}`,
    ].join('\n')

    window.open(
      `${contact.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )

    setSubmitted(true)
  }

  return (
    <form className="form" id={id} onSubmit={handleSubmit}>
      {title && <h3>{title}</h3>}

      {description && <p>{description}</p>}

      <input
        name="name"
        required
        placeholder="Full name"
        aria-label="Full name"
      />

      <input
        name="phone"
        required
        type="tel"
        inputMode="numeric"
        pattern="[0-9]{10}"
        placeholder={phonePlaceholder}
        aria-label={phonePlaceholder}
      />

      <input
        name="pincode"
        required
        inputMode="numeric"
        pattern="[0-9]{6}"
        placeholder="PIN code"
        aria-label="PIN code"
      />

      <select
        name="bill"
        required
        defaultValue=""
        aria-label="Monthly electricity bill"
      >
        <option value="">Monthly electricity bill</option>

        {billOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      {showConsent && (
        <label className="consent">
          <input
            type="checkbox"
            name="consent"
            required
          />

          I agree to be contacted about my solar enquiry.
        </label>
      )}

      <button className="btn block" type="submit">
        {submitLabel}
      </button>

      {submitted && (
        <div className="ok" role="status">
          {successMessage}
        </div>
      )}
    </form>
  )
}