import { zones } from '../../data/zones.js'

const clusterMeta = {
  North: {
    eyebrow: 'Northern Chennai',
    description:
      'Serving homes and businesses across the northern Chennai corridor.',
    icon: '↗',
  },

  Central: {
    eyebrow: 'Central Chennai',
    description:
      'Rooftop solar solutions across established residential and commercial neighbourhoods.',
    icon: '✦',
  },

  South: {
    eyebrow: 'Southern Chennai',
    description:
      'Coverage across the rapidly growing southern residential and business corridors.',
    icon: '↘',
  },

  West: {
    eyebrow: 'Western Chennai',
    description:
      'Serving established residential areas and growing suburbs across western Chennai.',
    icon: '←',
  },
}

export default function ChennaiMap({
  active,
  onSelect,
}) {
  // const zoneEntries = Object.entries(zones)

  return (
    <div className="coverage-explorer">
           <div className="map-bg" aria-hidden="true">
        <img src="/images/chennai-locations.webp" alt="" width="2400" height="1100" fetchPriority="high" />
      </div>
      
      {/* Bottom controls */}
      {/* <div className="coverage-footer">
        {zoneEntries.map(
          ([zone, areas]) => {

            const meta =
              clusterMeta[zone] || {
                eyebrow: `${zone} Chennai`,
                description:
                  'SolarMiles rooftop solar service coverage.',
                icon: '•',
              }

            const isActive =
              active === zone

            return (
              <button
                key={zone}
                type="button"
          className={
            active === 'All'
              ? 'coverage-all active'
              : 'coverage-all'
          }
                onClick={() => onSelect(zone)}
              >
          <span className="coverage-all-icon">
            ◉
          </span>

                <div className="cluster-content">
                  <strong>
                    {meta.eyebrow}
                  </strong>

                  <span className="cluster-count">
                    {areas.length} service areas
                  </span>

                </div>

                <span className="cluster-arrow">
                  →
                </span>

              </button>
            )
          }
        )}
        <button
          type="button"
          className={
            active === 'All'
              ? 'coverage-all active'
              : 'coverage-all'
          }
          onClick={() => onSelect('All')}
        >
          <span className="coverage-all-icon">
            ◉
          </span>

          <span>
            <strong>
              View all Chennai
            </strong>

            <small>
              {zoneEntries.reduce(
                (total, [, areas]) =>
                  total + areas.length,
                0
              )}{' '}
              service areas
            </small>
          </span>

          <span>
            →
          </span>
        </button>

      </div> */}

    </div>
  )
}