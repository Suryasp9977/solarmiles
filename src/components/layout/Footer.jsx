import Logo from '../ui/Logo.jsx'
import { contact, footerLinks } from '../../data/site.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="grid">
          <div>
            <Logo />
            <p>Rooftop solar for homes, societies and businesses.</p>
          </div>
          <div>
            <h4>Quick links</h4>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>
          <div>
            <h4>Contact</h4>
            <a href={contact.phoneHref}>📞 {contact.phone}</a>
            <a href={`mailto:${contact.email}`}>✉️ {contact.email}</a>
            <a>📍 {contact.address}</a>
          </div>
          <div>
            <h4>Service areas</h4>
            <p>All zones of Chennai: Central, South, West and North.</p>
          </div>
        </div>
        <p className="copy">© 2026 SolarMiles. *Placeholder figures: replace with your own data.</p>
      </div>
    </footer>
  )
}
