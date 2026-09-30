import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { roadmapSteps } from '../../data/content.js'
import './Roadmap.css'

export default function Roadmap() {
  return (
    <section className="alt" id="process">
      <div className="wrap">
        <SectionHeading
          center
          title="Your solar roadmap"
          subtitle="Six stops from your first call to your first zero-bill month."
        />
        <div className="road">
          <div className="stop">🏁 Start here</div>
          {roadmapSteps.map((step, index) => (
            <div key={step.title} className={`rd ${index % 2 ? 'R' : 'L'}`}>
              <i>{index + 1}</i>
              <Card title={step.title} text={step.text} />
            </div>
          ))}
          <div className="stop end">☀️ Saving from day one</div>
        </div>
      </div>
    </section>
  )
}
