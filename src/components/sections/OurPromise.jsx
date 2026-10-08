import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { promises } from '../../data/content.js'

export default function OurPromise() {
  return (
    <section id="promise">
      <div className="wrap two">
        <div>
          <SectionHeading
            tag="THE SOLARMILES PROMISE"
            title="No mystery after you pay."
            subtitle="We want your proposal to be clear about what is included, what is optional and what is covered after commissioning."
          />

          <a className="btn" href="#quote">
            Get a transparent proposal
          </a>
        </div>

        <div className="grid">
          {promises.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}