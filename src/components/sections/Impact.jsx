import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { impactPoints } from '../../data/content.js'

export default function Impact() {
  return (
    <section id="impact">
      <div className="wrap two">
        <div>
          <SectionHeading
            title="Good for your wallet and the planet"
            subtitle="A 1 kW rooftop system can avoid about one tonne of CO₂ every year, roughly the effect of planting 15 trees. Payback is typically 2 to 4 years, with savings for 25 years."
          />
        </div>
        <div className="grid">
          {impactPoints.map((item) => <Card key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  )
}
