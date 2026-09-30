export default function Card({ icon, tag, title, text, children }) {
  return (
    <div className="card">
      {icon && <div className="ic">{icon}</div>}
      {tag && <span className="tag">{tag}</span>}
      {title && <h3>{title}</h3>}
      {text && <p>{text}</p>}
      {children}
    </div>
  )
}
