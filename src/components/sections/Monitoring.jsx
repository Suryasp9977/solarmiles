import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { monitoringFeatures } from '../../data/content.js'

export default function Monitoring() {
  return (
    <section id="monitor">
      <div className="wrap two">
        <div>
          <SectionHeading
            title="Track every unit"
            subtitle="Monitor generation, savings and system health in real time, plus quarterly cleaning and annual health checks for 5 years."
          />
        </div>
        <div className="grid">
          {monitoringFeatures.map((item) => <Card key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  )
}
