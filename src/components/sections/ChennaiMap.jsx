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
  const zoneEntries = Object.entries(zones)

  return (
    <div className="coverage-explorer">

      {/* Header */}
      <div className="coverage-header">

        <div>
          <span className="coverage-kicker">
            SOLARMILES CHENNAI
          </span>

          <h3>
            Solar power,
            <br />
            wherever you are in Chennai.
          </h3>

          <p>
            Explore our current service coverage by
            cluster. Select an area to see the
            neighbourhoods we serve.
          </p>
        </div>

        <div className="coverage-hq">
          <div className="coverage-hq-dot">
            <span />
          </div>

          <div>
            <strong>
              SolarMiles HQ
            </strong>

            <small>
              Ambattur, Chennai
            </small>
          </div>
        </div>

      </div>


      {/* Coverage visual */}
      <div className="coverage-visual">

        {/* Decorative centre */}
        <div className="coverage-core">

          <div className="coverage-core-ring">
            <div className="coverage-core-inner">
              <span>SM</span>
            </div>
          </div>

          <strong>
            Chennai
          </strong>

          <small>
            SolarMiles service coverage
          </small>

        </div>


        {/* Service clusters */}
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
                className={`coverage-cluster coverage-${zone.toLowerCase()} ${
                  isActive ? 'active' : ''
                }`}
                onClick={() => onSelect(zone)}
              >

                <div className="cluster-icon">
                  {meta.icon}
                </div>

                <div className="cluster-content">

                  <span className="cluster-eyebrow">
                    {meta.eyebrow}
                  </span>

                  <strong>
                    {zone}
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

      </div>


      {/* Bottom controls */}
      <div className="coverage-footer">

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

        <div className="coverage-note">
          <span>✓</span>

          <p>
            Service clusters are business coverage
            categories and are not official GCC
            administrative boundaries.
          </p>
        </div>

      </div>

    </div>
  )
}