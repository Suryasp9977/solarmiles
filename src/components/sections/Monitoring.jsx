import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { monitoringFeatures } from '../../data/content.js'

export default function Monitoring() {
  return (
    <section id="monitor">
      <div className="wrap two monitor-layout">
        <div>
          <SectionHeading
            tag="AFTER INSTALLATION"
            title="Installation day is not the finish line."
            subtitle="Your system should keep performing long after the commissioning ceremony. Monitoring and planned service help you see what is happening on your roof."
          />

          <div className="monitor-dashboard">
            <div>
              <span>Today's generation</span>
              <b>Track live*</b>
            </div>

            <div>
              <span>System health</span>
              <b>Visible*</b>
            </div>

            <div>
              <span>Service</span>
              <b>Scheduled</b>
            </div>
          </div>

          <p className="hint">
            *Monitoring features depend on the inverter/system selected and
            final service package.
          </p>
        </div>

        <div className="grid">
          {monitoringFeatures.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}