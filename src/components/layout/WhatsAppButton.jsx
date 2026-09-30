import { contact } from '../../data/site.js'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a className="wa" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
  )
}
