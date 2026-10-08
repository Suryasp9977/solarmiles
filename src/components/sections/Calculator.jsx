import { useState } from 'react'
import { estimateSavings, formatINR, MAX_BILL, MIN_BILL } from '../../utils/savings.js'
import './Calculator.css'

const DEFAULT_BILL = 5000

export default function Calculator() {
  const [input, setInput] = useState(String(DEFAULT_BILL))
  const [bill, setBill] = useState(DEFAULT_BILL)
  const [error, setError] = useState(false)
  const result = estimateSavings(bill)

  const calculate = () => {
    const value = Number(input)
    if (!(value >= MIN_BILL && value <= MAX_BILL)) {
      setError(true)
      return
    }
    setError(false)
    setBill(value)
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
            />
            <small>/ month</small>
          </div>

          <button
            className="btn btn-lg"
            type="button"
            onClick={calculate}
          >
            Calculate my savings
          </button>
        </div>

        {error && (
          <p className="hint err">
            Enter a monthly bill between {formatINR(MIN_BILL)} and{' '}
            {formatINR(MAX_BILL)}.
          </p>
        )}

        <div className="result-grid">
          <div className="result-main">
            <div className="result-kicker">INDICATIVE SYSTEM</div>

            <b className="big-number">{result.kw} kW</b>

            <span>recommended starting size</span>

            <div className="result-divider" />

            <div className="result-pair">
              <div>
                <small>Potential annual savings</small>
                <b>{formatINR(result.annualSavings)}</b>
              </div>

              <div>
                <small>Indicative remaining bill</small>
                <b>~{formatINR(result.indicativeNetBill)}/mo</b>
              </div>
            </div>
          </div>

          <div className="result-side">
            <h3>What the estimate assumes</h3>

            <div className="assumption">
              <span>Average tariff</span>
              <b>₹{result.assumptions.tariff}/unit</b>
            </div>

            <div className="assumption">
              <span>Solar yield</span>
              <b>
                ~{result.assumptions.generation} units/kW/mo
              </b>
            </div>

            <div className="assumption">
              <span>Bill offset</span>
              <b>
                ~{Math.round(result.assumptions.offset * 100)}%
              </b>
            </div>

            <p>
              Tariffs, export rules, roof shade, system design and actual
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

          <a className="btn" href="#quote">
            Get my exact estimate
          </a>
        </div>
      </div>
    </section>
  )
}