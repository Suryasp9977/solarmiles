import SectionHeading from '../ui/SectionHeading.jsx'
import { visitBenefits } from '../../data/content.js'

export default function SeeSolar() {
  return (
    <section className="alt" id="how-it-works">
      <div className="wrap two">
        <div>
          <SectionHeading
            title="See solar before you buy"
            subtitle="Visit us or book a home visit to clear every doubt in one meeting."
          />
          <ul>
            {visitBenefits.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a className="btn" href="#quote">Book My Visit</a>
        </div>
        <div>
          <SectionHeading
            title="How solar works"
            subtitle="Panels convert sunlight into DC power. The inverter converts it to AC for your home. Extra power goes to the grid through a bidirectional meter, and you draw from the grid when you need more."
          />
          <p><b>System parts:</b> solar panels, inverter, mounting structure, AC/DC cables, combiner boxes, earthing and MC4 connectors.</p>
        </div>
      </div>
    </section>
  )
}
