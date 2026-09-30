export default function SectionHeading({ tag, title, subtitle, center = false }) {
  return (
    <>
      {tag && <span className="tag">{tag}</span>}
      <h2 className={center ? 'center' : undefined}>{title}</h2>
      {subtitle && <p className={center ? 'sub center' : 'sub'}>{subtitle}</p>}
    </>
  )
}
