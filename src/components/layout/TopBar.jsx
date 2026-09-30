import { contact } from '../../data/site.js'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      ☀️ Free home visit & 3D solar design · Call <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
    </div>
  )
}
