import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { reasons } from '../../data/content.js'

export default function WhyUs() {
  return (
    <section id="why">
      <div className="wrap">
        <SectionHeading
          title="Why families choose SolarMiles"
          subtitle="Solar is more than panels. Design, mounting and service decide your savings for 25 years."
        />
        <div className="grid g4">
          {reasons.map((item) => <Card key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  )
}
