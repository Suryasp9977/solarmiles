import SectionHeading from '../ui/SectionHeading.jsx'
import { subsidyNotes, subsidyRows } from '../../data/content.js'

export default function Subsidy() {
  return (
    <section id="subsidy">
      <div className="wrap">
        <SectionHeading
          tag="TAMIL NADU · 2026"
          title="Rooftop solar subsidy in Tamil Nadu"
          subtitle="Central PM Surya Ghar subsidy plus the new Tamil Nadu state top-up (G.O. 102, 19 Sept 2026): up to ₹1,00,000 for systems of 3 kW and above."
        />
        <div className="two">
          <div className="scroll">
            <table>
              <thead>
                <tr><th>System size</th><th>Central</th><th>TN top-up</th><th>Total</th></tr>
              </thead>
              <tbody>
                {subsidyRows.map((row) => (
                  <tr key={row.size}>
                    <td>{row.size}</td><td>{row.central}</td><td>{row.state}</td><td><b>{row.total}</b></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <ul>
              {subsidyNotes.map((note) => <li key={note}>{note}</li>)}
            </ul>
            <a className="btn" href="#quote">Check my eligibility</a>
          </div>
        </div>
        <p className="hint note">Figures compiled from public reports; rules can change. Confirm on pmsuryaghar.gov.in and with TEDA/TANGEDCO before purchase.</p>
      </div>
    </section>
  )
}
