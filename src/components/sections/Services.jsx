import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { services } from '../../data/content.js'

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHeading title="Solar solutions for every roof" subtitle="Choose the segment that fits you." />
        <div className="grid g3">
          {services.map((item) => <Card key={item.tag} {...item} />)}
        </div>
      </div>
    </section>
  )
}
