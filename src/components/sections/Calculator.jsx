import { useEffect, useState } from 'react'
import { estimateSavings, formatINR, MAX_BILL, MIN_BILL, SOLAR_BILL } from '../../utils/savings.js'
import './Calculator.css'

const DEFAULT_BILL = 6000
const RANGE_TEXT = `Please enter amount between ${formatINR(MIN_BILL)} and ${formatINR(MAX_BILL)}`

export default function Calculator() {
  const [input, setInput] = useState(String(DEFAULT_BILL))
  const [bill, setBill] = useState(DEFAULT_BILL)
  const [error, setError] = useState(false)
  const [bars, setBars] = useState({ regular: 0, solar: 0 })

  const result = estimateSavings(bill)

  // Animate the bars from zero every time a new estimate is calculated
  useEffect(() => {
    setBars({ regular: 0, solar: 0 })
    const timer = setTimeout(() => {
      setBars({ regular: 85, solar: Math.max(3, (SOLAR_BILL / bill) * 85) })
    }, 60)
    return () => clearTimeout(timer)
  }, [bill])

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
        <h2>Calculate your Solar savings now!</h2>
        <div className="cin">
          <input
            type="number"
            inputMode="numeric"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && calculate()}
            aria-label="Bimonthly electricity bill"
          />
          <button className="btn" type="button" onClick={calculate}>Calculate</button>
        </div>
        <p className={error ? 'hint err' : 'hint'}>{error ? RANGE_TEXT : `${RANGE_TEXT} (bimonthly bill)`}</p>

        <div className="cg">
          <div className="lp">
            <div className="row">
              <div><span>Annual Savings</span><b>{formatINR(result.annualSavings)}</b></div>
              <div><span>Lifetime Savings</span><b>{formatINR(result.lifetimeSavings)}</b></div>
            </div>
            <div className="row2">
              <div><b>{result.kw} kW</b><span>Recommended Solar</span></div>
              <div><b>{result.payback} yrs</b><span>Recover your investment</span></div>
              <div><b>{result.roi}% p.a</b><span>Return on Investment</span></div>
            </div>
          </div>

          <div className="rp">
            <h3>Bimonthly Bill Comparison</h3>
            <div className="bars">
              <div><span>{formatINR(bill)}</span><i style={{ height: `${bars.regular}%` }} /></div>
              <div><span>{formatINR(SOLAR_BILL)}</span><i style={{ height: `${bars.solar}%` }} /></div>
            </div>
            <div className="bl"><span>Regular Electricity Bill</span><span>SolarMiles Electricity Bill</span></div>
          </div>
        </div>

        <p className="hint note">Estimate only, including central and Tamil Nadu subsidy; the final quote comes after your free site survey.</p>
        <a className="btn note" href="#quote">Book a free consultation</a>
      </div>
    </section>
  )
}
