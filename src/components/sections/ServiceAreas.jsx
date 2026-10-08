import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading.jsx'
import ChennaiMap from './ChennaiMap.jsx'
import { zones } from '../../data/zones.js'
import './ServiceAreas.css'

const ALL = 'All'

const zoneNames = Object.keys(zones)

export default function ServiceAreas() {
  const [active, setActive] = useState(ALL)

  const areas =
    active === ALL
      ? zoneNames.flatMap((zone) => zones[zone])
      : zones[active] || []

  const totalAreas = zoneNames.reduce(
    (total, zone) => total + zones[zone].length,
    0
  )

  const selectedLabel =
    active === ALL
      ? 'All Chennai'
      : `${active} Chennai`

  return (
    <section className="alt service-areas-section" id="areas">
      <div className="wrap">

        <SectionHeading
          center
          title="We install across Chennai"
          subtitle="Explore our current service coverage and find your neighbourhood."
        />

        <div className="service-coverage-layout">

          {/* =====================================================
              LEFT — CHENNAI SERVICE COVERAGE
              ===================================================== */}

          <div className="service-coverage-main">

            <ChennaiMap
              active={active}
              onSelect={setActive}
            />

          </div>


          {/* =====================================================
              RIGHT — AREAS WE SERVE
              ===================================================== */}

          <div className="service-areas-directory">

            {/* Header */}

            <div className="directory-header">

              <div className="directory-heading">

                <span className="directory-kicker">
                  AREAS WE SERVE
                </span>

                <h3>
                  Find your area
                </h3>

                <p>
                  Select a service cluster on the left
                  to explore the neighbourhoods covered
                  by SolarMiles.
                </p>

              </div>


              <div className="directory-count">

                <strong>
                  {areas.length}
                </strong>

                <span>
                  areas
                </span>

              </div>

            </div>


            {/* Selected cluster */}

            <div className="selected-area-label">

              <span className="selected-area-dot" />

              <strong>
                {selectedLabel}
              </strong>

              <span className="selected-area-total">
                {active === ALL
                  ? `${totalAreas} total service areas`
                  : `${areas.length} service areas`}
              </span>

            </div>


            {/* Area chips */}

            <div
              className="area-chips-directory"
              aria-label={`${selectedLabel} service areas`}
            >

              {areas.map((area) => (

                <span
                  key={area}
                  className="area-chip"
                >
                  {area}
                </span>

              ))}

            </div>


            {/* Bottom CTA */}

            <div className="directory-cta">

              <div className="directory-cta-copy">

                <strong>
                  Don't see your area?
                </strong>

                <span>
                  We're expanding our coverage.
                  Ask us about your location.
                </span>

              </div>


              <a
                href="#contact"
                className="directory-cta-button"
              >
                Check my area
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}