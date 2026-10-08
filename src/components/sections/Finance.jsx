import Card from '../ui/Card.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { financeOptions } from '../../data/content.js'

export default function Finance() {
  return (
    <section className="alt" id="finance">
      <div className="wrap">
        <SectionHeading
          tag="MAKE THE NUMBERS WORK"
          title="Move from paying an electricity bill to owning your power source."
          subtitle="We can help you evaluate upfront purchase, eligible loan and EMI routes. Your exact finance terms depend on the lender and your profile."
        />

        <div className="grid g3">
          {financeOptions.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>

        <div className="finance-note">
          <b>Important:</b> SolarMiles does not promise a particular interest
          rate, zero-cost EMI or loan approval until a lender confirms the
          offer.
        </div>
      </div>
    </section>
  )
}