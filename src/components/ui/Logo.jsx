import './Logo.css'

export default function Logo({ href }) {
  const content = <>Solar<b>Miles</b></>
  return href ? <a className="logo" href={href}>{content}</a> : <div className="logo">{content}</div>
}
