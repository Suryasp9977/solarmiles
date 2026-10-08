import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { reasons } from '../../data/content.js'

export default function WhyUs() {
  return (
    <section id="why">
      <div className="wrap">
        <SectionHeading
          tag="THE SOLARMILES STANDARD"
          title="Solar is a 25-year decision. We build for the whole journey."
          subtitle="The cheapest quote is not always the cheapest solar. Design quality, structure, installation, paperwork and after-sales service all affect what your rooftop actually delivers."
        />

        <div className="grid g4">
          {reasons.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>

        <div className="trust-strip">
          <span>✓ Transparent proposal</span>
          <span>✓ Rooftop-first design</span>
          <span>✓ Subsidy guidance</span>
          <span>✓ Direct service support</span>
        </div>
      </div>
    </section>
  )
}