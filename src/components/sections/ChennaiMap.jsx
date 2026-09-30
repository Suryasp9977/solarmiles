import { zoneShapes } from '../../data/zones.js'

export default function ChennaiMap({ active, onSelect }) {
  return (
    <div className="mapbox">
      <svg viewBox="0 0 400 440" role="img" aria-label="Schematic map of Chennai zones">
        <rect width="400" height="440" fill="#dcecfa" />
        <path d="M300 0H400V440H330L345 300L320 150Z" fill="#a9cdf0" opacity=".7" />
        <text x="368" y="230" fill="#2b3990" fontSize="12" fontWeight="600" transform="rotate(90 368 230)">Bay of Bengal</text>

        {zoneShapes.map(({ zone, points }) => (
          <polygon
            key={zone}
            className={active === zone ? 'z on' : 'z'}
            points={points}
            onClick={() => onSelect(zone)}
          >
            <title>{zone} Chennai</title>
          </polygon>
        ))}
        {zoneShapes.map(({ zone, label }) => (
          <text key={zone} className="zt" x={label.x} y={label.y} textAnchor="middle">{zone}</text>
        ))}

        <circle cx="75" cy="175" r="8" fill="#f59e0b" stroke="#fff" strokeWidth="3" />
        <text x="88" y="179" fontSize="11" fontWeight="700" fill="#fff" style={{ pointerEvents: 'none' }}>HQ Ambattur</text>
      </svg>
    </div>
  )
}
