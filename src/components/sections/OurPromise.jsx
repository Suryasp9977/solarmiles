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
            title="Solar that delivers on its promise"
            subtitle="Guaranteed savings, end-to-end care and complete peace of mind. Edit the terms below to match your real offer."
          />
          <a className="btn" href="#quote">Get a Free Consultation</a>
        </div>
        <div className="grid">
          {promises.map((item) => <Card key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  )
}
