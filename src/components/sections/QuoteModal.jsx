import { useEffect, useId, useRef, useState } from 'react'
import Icon from '../ui/Icons'
import { submitLead } from '../../lib/leads'
import './modal.css'

// Monthly bill ranges shown as choices. `value` is a representative amount for the lead record.
export const BILL_RANGES = [
  { id: 'lt1500', label: 'Less than ₹1500', value: 1000 },
  { id: '1500-2500', label: '₹1500 - ₹2500', value: 2000 },
  { id: '2500-4000', label: '₹2500 - ₹4000', value: 3250 },
  { id: '4000-8000', label: '₹4000 - ₹8000', value: 6000 },
  { id: 'gt8000', label: 'More than ₹8000', value: 9000 },
]

const EMPTY = { name: '', phone: '', bill: '', pin: '', terms: false }

function validate(f) {
  const e = {}
  if (f.name.trim().length < 2) e.name = 'Enter your full name.'
  if (!/^[6-9]\d{9}$/.test(f.phone)) e.phone = 'Enter a valid 10-digit WhatsApp number.'
  if (!f.bill) e.bill = 'Choose your monthly electricity bill range.'
  if (!/^\d{6}$/.test(f.pin)) e.pin = 'Enter a valid 6-digit PIN code.'
  if (!f.terms) e.terms = 'Please accept the terms to continue.'
  return e
}

// "Get Free Quote" popup. Opened from any button that links to #book.
export default function QuoteModal({ open, onClose, source = 'website' }) {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | saving | done | error
  const [serverError, setServerError] = useState('')
  const firstFieldRef = useRef(null)
  const titleId = useId()

  // Reset each time the popup opens, then focus the first field.
  useEffect(() => {
    if (!open) return
    setForm(EMPTY)
    setErrors({})
    setStatus('idle')
    setServerError('')
    const t = setTimeout(() => firstFieldRef.current?.focus(), 60)
    return () => clearTimeout(t)
  }, [open])

  // Escape closes, and the page behind does not scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  async function onSubmit(e) {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const range = BILL_RANGES.find((r) => r.id === form.bill)
    setStatus('saving')
    setServerError('')
    try {
      await submitLead({
        name: form.name.trim(),
        phone: form.phone,
        bill: range.value,
        billRange: range.label,
        pin: form.pin,
        source,
      })
      setStatus('done')
    } catch (err) {
      setServerError(err.message)
      setStatus('error')
    }
  }

  return (
    <div
      className="quote-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="quote-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <span className="quote-handle" aria-hidden="true" />
        <button type="button" className="quote-close" aria-label="Close" onClick={onClose}>
          <Icon name="close" size={18} />
        </button>

        {status === 'done' ? (
          <div className="quote-success">
            <span className="quote-success-icon"><Icon name="check" size={26} /></span>
            <h2 id={titleId}>Thank you, {form.name.trim().split(' ')[0]}!</h2>
            <p>Our team will WhatsApp you on {form.phone} within 24 hours to confirm your free rooftop assessment.</p>
            <button type="button" className="quote-submit" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form className="quote-form" onSubmit={onSubmit} noValidate>
            <h2 id={titleId}>Get Free Quote</h2>
            <p className="quote-sub">Save up to 90% on electricity bills by switching to solar now.</p>

            <div className="quote-field">
              <input
                ref={firstFieldRef}
                className="quote-input"
                placeholder="Full Name"
                aria-label="Full name"
                autoComplete="name"
                value={form.name}
                onChange={set('name')}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="quote-error">{errors.name}</span>}
            </div>

            <div className="quote-field">
              <input
                className="quote-input"
                placeholder="WhatsApp Number"
                aria-label="WhatsApp number"
                inputMode="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <span className="quote-error">{errors.phone}</span>}
            </div>

            <div className="quote-field">
              <span className="quote-label" id={`${titleId}-bill`}>
                Monthly Electricity Bill
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 16v-5M12 8h.01" strokeLinecap="round" />
                </svg>
              </span>
              <div className="quote-chips" role="radiogroup" aria-labelledby={`${titleId}-bill`}>
                {BILL_RANGES.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    role="radio"
                    aria-checked={form.bill === r.id}
                    className="quote-chip"
                    onClick={() => setForm((f) => ({ ...f, bill: r.id }))}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
              {errors.bill && <span className="quote-error">{errors.bill}</span>}
            </div>

            <div className="quote-field">
              <input
                className="quote-input"
                placeholder="PIN Code"
                aria-label="PIN code"
                inputMode="numeric"
                autoComplete="postal-code"
                value={form.pin}
                onChange={(e) => setForm((f) => ({ ...f, pin: e.target.value.replace(/\D/g, '').slice(0, 6) }))}
                aria-invalid={!!errors.pin}
              />
              {errors.pin && <span className="quote-error">{errors.pin}</span>}
            </div>

            <div className="quote-field">
              <label className="quote-check">
                <input
                  type="checkbox"
                  checked={form.terms}
                  onChange={(e) => setForm((f) => ({ ...f, terms: e.target.checked }))}
                />
                <span>
                  I agree to SolarMiles <a href="/terms" target="_blank" rel="noreferrer">Terms of use</a> and{' '}
                  <a href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.
                </span>
              </label>
              {errors.terms && <span className="quote-error">{errors.terms}</span>}
            </div>

            {status === 'error' && <p className="quote-error quote-server-error" role="alert">{serverError}</p>}

            <button type="submit" className="quote-submit" disabled={status === 'saving'}>
              {status === 'saving' ? 'Submitting…' : 'Submit Details'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}