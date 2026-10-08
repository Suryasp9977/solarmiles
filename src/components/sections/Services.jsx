import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { services } from '../../data/content.js'

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHeading
          tag="SOLAR FOR REAL LIFE"
          title="One platform. Different rooftops."
          subtitle="Start with the system you need today. We can size and design the solution around your consumption, roof and backup requirements."
        />

        <div className="grid g3">
          {services.map((item) => (
            <Card key={item.tag} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}