import { stats } from '../../data/content.js'
import './Stats.css'

export default function Stats() {
  return (
    <div className="stats">
      <div className="wrap grid">
        {stats.map((stat) => (
          <div key={stat.label}><b>{stat.value}</b><span>{stat.label}</span></div>
        ))}
      </div>
    </div>
  )
}
