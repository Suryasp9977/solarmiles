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
          tag="ONE TEAM. ONE JOURNEY."
          title="We handle the complicated parts. You enjoy the savings."
          subtitle="A clear process from first conversation to a commissioned rooftop system."
        />

        <div className="road">
          <div className="stop">
            01 · Tell us about your bill
          </div>

          {roadmapSteps.map((step, index) => (
            <div
              key={step.title}
              className={`rd ${index % 2 ? 'R' : 'L'}`}
            >
              <i>{String(index + 1).padStart(2, '0')}</i>

              <Card
                title={step.title}
                text={step.text}
              />
            </div>
          ))}

          <div className="stop end">
            ☀️ Solar on. Savings begin.
          </div>
        </div>
      </div>
    </section>
  )
}