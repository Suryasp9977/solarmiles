import './Logo.css'
import solarmilesLogo from '../../../public/solarmiles_logo.png'

export default function Logo({ href }) {
  const content = <img src={solarmilesLogo} alt="Company Logo" width="150" />
  return href ? <a className="logo" href={href}>{content}</a> : <div className="logo">{content}</div>
}