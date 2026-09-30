import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { financeOptions } from '../../data/content.js'

export default function Finance() {
  return (
    <section className="alt" id="finance">
      <div className="wrap">
        <SectionHeading title="Easy financing" subtitle="Go solar without a big upfront payment." />
        <div className="grid g3">
          {financeOptions.map((item) => <Card key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  )
}
