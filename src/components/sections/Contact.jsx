import LeadForm from '../ui/LeadForm.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { contact } from '../../data/site.js'

export default function Contact() {
  return (
    <section className="alt" id="contact">
      <div className="wrap two">
        <div>
          <SectionHeading
            title="Talk to a solar expert"
            subtitle="Save up to 90% on your electricity bill. Tell us about your home and we’ll call you back."
          />
          <p>
            📞 <a href={contact.phoneHref}>{contact.phone}</a><br />
            ✉️ <a href={`mailto:${contact.email}`}>{contact.email}</a><br />
            📍 {contact.address}
          </p>
        </div>
        <LeadForm
          phonePlaceholder="WhatsApp number"
          billOptions={['Less than ₹1,500', '₹1,500 – ₹2,500', '₹2,500 – ₹4,000', '₹4,000 – ₹8,000', 'More than ₹8,000']}
          showConsent
          submitLabel="Submit Details"
          successMessage="Thanks! We’ll be in touch shortly."
        />
      </div>
    </section>
  )
}
