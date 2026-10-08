import Logo from '../ui/Logo.jsx'
import { navLinks } from '../../data/site.js'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <nav>
          <Logo href="#top" />

          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a className="btn header-cta" href="#quote">
            Get Free Assessment
          </a>
        </nav>
      </div>
    </header>
  )
}