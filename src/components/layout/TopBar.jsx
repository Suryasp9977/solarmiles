import { contact } from '../../data/site.js'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
      ☀️ <strong>Free rooftop assessment</strong> + personalised solar estimate ·{' '}
      <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
    </div>
  )
}