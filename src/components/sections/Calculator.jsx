import { useState } from 'react'
import {
  calculatePlan,
  DEFAULT_BILL,
  formatINR,
  formatNumber,
  GEN_PER_KW_MONTH,
  isValidBill,
  MAX_BILL,
  MIN_BILL,
  TARIFF_PER_UNIT,
} from '../../lib/solar.js'
import './Calculator.css'

const range = (a, b) => `₹${formatNumber(a)}–${formatNumber(b)}`

export default function Calculator() {
  const [input, setInput] = useState(String(DEFAULT_BILL))
  const [bill, setBill] = useState(DEFAULT_BILL)
  const [error, setError] = useState(false)

  // Area is not known yet, so it is not capped here. The rooftop survey sets the final size.
  const plan = calculatePlan({ bill, area: 5000 })

  const calculate = () => {
    const value = Number(input)
    if (!isValidBill(value)) {
      setError(true)
      return
    }
    setError(false)
    setBill(value)
  }

  // Opens the quote popup with this bill pre-selected.
  const openQuote = () => {
    window.dispatchEvent(new CustomEvent('solarmiles:open-quote', { detail: { bill } }))
  }

  return (
    <section className="alt" id="calc">
      <div className="wrap calc center">
        <span className="tag">YOUR ROOFTOP, YOUR NUMBERS</span>
        <h2>See what solar could do to your electricity bill.</h2>
        <p className="sub center">
          Start with your average <strong>monthly</strong> bill. This is an
          indicative planning tool — your final system size and savings come
          after the rooftop survey.
        </p>

        <div className="cin">
          <div className="bill-input">
            <span>₹</span>
            <input
              type="number"
              inputMode="numeric"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && calculate()}
              aria-label="Average monthly electricity bill"
              aria-describedby={error ? 'calc-hint' : undefined}
            />
            <small>/ month</small>
          </div>

          <button className="btn btn-lg" type="button" onClick={calculate}>
            Calculate my savings
          </button>
        </div>

        {error && (
          <p className="hint err" id="calc-hint" role="alert">
            Enter a monthly bill between {formatINR(MIN_BILL)} and {formatINR(MAX_BILL)}.
          </p>
        )}

        <div className="result-grid">
          <div className="result-main">
            <div className="result-kicker">INDICATIVE SYSTEM</div>

            <b className="big-number">{plan.kwLabel} kW</b>

            <span>recommended starting size</span>

            <div className="result-divider" />

            <div className="result-pair">
              <div>
                <small>Potential annual savings</small>
                <b>{range(plan.annualSavingsLow, plan.annualSavingsHigh)}</b>
              </div>

              <div>
                <small>Indicative bill after solar</small>
                <b>~{range(plan.billAfterLow, plan.billAfterHigh)}/mo</b>
              </div>
            </div>
          </div>

          <div className="result-side">
            <h3>What the estimate assumes</h3>

            <div className="assumption">
              <span>Average tariff</span>
              <b>₹{TARIFF_PER_UNIT}/unit</b>
            </div>

            <div className="assumption">
              <span>Solar yield</span>
              <b>~{GEN_PER_KW_MONTH} units/kW/mo</b>
            </div>

            <div className="assumption">
              <span>Estimated subsidy</span>
              <b>up to {formatINR(plan.totalSubsidy)}</b>
            </div>

            <div className="assumption">
              <span>Central + TN top-up</span>
              <b>{formatINR(plan.subsidy)} + {formatINR(plan.stateSubsidy)}</b>
            </div>

            <div className="assumption">
              <span>Payback</span>
              <b>{plan.paybackLow}–{plan.paybackHigh} yrs</b>
            </div>

            <p>
              Tariffs, subsidy eligibility, export rules, roof shade, system design and actual
              generation can change the result.
            </p>
          </div>
        </div>

        <div className="calculator-cta">
          <div>
            <b>Want the number for your actual rooftop?</b>
            <span>
              Get a free assessment and a project-specific proposal.
            </span>
          </div>

          <button className="btn" type="button" onClick={openQuote}>
            Get my exact estimate
          </button>
        </div>
      </div>
    </section>
  )
}