import SectionHeading from '../ui/SectionHeading.jsx'
import { subsidyNotes, subsidyRows } from '../../data/content.js'

export default function Subsidy() {
  return (
    <section id="subsidy" className="subsidy-section">
      <div className="wrap">
        <div className="subsidy-head">
          <div>
            <SectionHeading
              tag="GOVERNMENT SUBSIDY"
              title="Make solar more affordable with eligible subsidies."
              subtitle="For eligible residential installations in Tamil Nadu, central and state incentives can materially reduce the net cost. We help you understand the process and paperwork."
            />
          </div>

          <div className="subsidy-callout">
            <span>Potential combined benefit</span>

            <strong>Up to ₹1,00,000*</strong>

            <small>
              for eligible 3 kW+ systems under the figures currently used by
              SolarMiles
            </small>
          </div>
        </div>

        <div className="two">
          <div className="scroll">
            <table>
              <thead>
                <tr>
                  <th>System size</th>
                  <th>Central</th>
                  <th>TN top-up</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {subsidyRows.map((row) => (
                  <tr key={row.size}>
                    <td>{row.size}</td>
                    <td>{row.central}</td>
                    <td>{row.state}</td>
                    <td>
                      <b>{row.total}</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="subsidy-notes">
            <h3>We help with the paperwork</h3>

            <ul>
              {subsidyNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>

            <a className="btn" href="#quote">
              Check my eligibility
            </a>
          </div>
        </div>

        <p className="hint note">
          *Incentive rules, eligibility, caps and portal processes can change.
          Treat these figures as indicative and confirm eligibility before
          purchase with the applicable government portals and authorities.
        </p>
      </div>
    </section>
  )
}