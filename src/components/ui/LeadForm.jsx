import { useState } from 'react'
import './LeadForm.css'

export default function LeadForm({
  id,
  title,
  description,
  phonePlaceholder = 'Mobile (10 digits)',
  billOptions,
  showConsent = false,
  submitLabel,
  successMessage,
}) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <form className="form" id={id} onSubmit={handleSubmit}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      <input name="name" required placeholder="Full name" aria-label="Full name" />
      <input name="phone" required type="tel" pattern="[0-9]{10}" placeholder={phonePlaceholder} aria-label={phonePlaceholder} />
      <input name="pincode" required pattern="[0-9]{6}" placeholder="PIN code" aria-label="PIN code" />
      <select name="bill" required defaultValue="" aria-label="Monthly electricity bill">
        <option value="">Monthly electricity bill</option>
        {billOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {showConsent && (
        <label className="consent">
          <input type="checkbox" name="consent" required />
          I agree to the terms of use and privacy policy.
        </label>
      )}
      <button className="btn block" type="submit">{submitLabel}</button>
      {submitted && <div className="ok" role="status">{successMessage}</div>}
    </form>
  )
}
