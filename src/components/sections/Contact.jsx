import LeadForm from '../ui/LeadForm.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { contact } from '../../data/site.js'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="wrap two contact-grid">
        <div>
          <span className="tag">READY WHEN YOU ARE</span>

          <SectionHeading
            title="Let's see what your rooftop can do."
            subtitle="Share your electricity bill and PIN code. We'll start with the numbers — not a sales pitch."
          />

          <div className="contact-points">
            <p>
              📞{' '}
              <a href={contact.phoneHref}>
                {contact.phoneDisplay}
              </a>
            </p>

            <p>
              💬{' '}
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us
              </a>
            </p>

            <p>
              ✉️{' '}
              <a href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>

            <p>
              📍 {contact.address}
            </p>
          </div>

          <p className="hint">
            We currently focus our installation and service efforts on Chennai
            and nearby areas.
          </p>
        </div>

        <LeadForm
          phonePlaceholder="WhatsApp number"
          billOptions={[
            'Less than ₹1,500',
            '₹1,500 – ₹2,500',
            '₹2,500 – ₹4,000',
            '₹4,000 – ₹8,000',
            'More than ₹8,000'
          ]}
          showConsent
          submitLabel="Start My Solar Assessment"
          successMessage="WhatsApp opened with your enquiry. Send the message to start your assessment."
        />
      </div>
    </section>
  )
}