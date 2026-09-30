import SectionHeading from '../ui/SectionHeading.jsx'
import { faqs } from '../../data/faqs.js'
import './Faq.css'

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <SectionHeading title="Frequently asked questions" subtitle="Quick answers to common questions." />
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
