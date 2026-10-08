import Logo from '../ui/Logo.jsx'
import { contact, footerLinks } from '../../data/site.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="grid footer-grid">
          <div>
            <Logo />
            <p>
              Rooftop solar designed around your bill, your roof and your
              long-term savings.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <h4>Talk to us</h4>
            <a href={contact.phoneHref}>📞 {contact.phoneDisplay}</a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp
            </a>
            <a href={`mailto:${contact.email}`}>
              ✉️ {contact.email}
            </a>
          </div>

          <div>
            <h4>Chennai</h4>
            <p>{contact.address}</p>
            <p>
              New business. Direct accountability. No invented customer
              numbers.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SolarMiles Energy Private Limited</span>
          <span>Rooftop solar · Chennai · Tamil Nadu</span>
        </div>
      </div>
    </footer>
  )
}