import { stats } from '../../data/content.js'
import './Stats.css'

export default function Stats() {
  return (
    <section
      className="stats"
      aria-label="SolarMiles customer promise"
    >
      <div className="wrap stats-grid">
        {stats.map((stat) => (
          <div key={stat.label}>
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}