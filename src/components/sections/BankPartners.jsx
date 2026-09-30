import SectionHeading from '../ui/SectionHeading.jsx'
import { bankPartners } from '../../data/content.js'

export default function BankPartners() {
  return (
    <section className="alt" id="partners">
      <div className="wrap">
        <SectionHeading
          title="Bank & finance partners"
          subtitle="Loans and EMI through leading banks. Update this list with your actual partners."
        />
        <div className="chips">
          {bankPartners.map((bank) => <span key={bank}>{bank}</span>)}
        </div>
      </div>
    </section>
  )
}
