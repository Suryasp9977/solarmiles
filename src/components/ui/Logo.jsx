import './Logo.css'
import solarmilesLogo from 'public/solarmiles_logo.png'

export default function Logo({ href }) {
  const content = solarmilesLogo
  return href ? <a className="logo" href={href}>{content}</a> : <div className="logo">{content}</div>
}
