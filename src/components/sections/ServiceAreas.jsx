import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading.jsx'
import ChennaiMap from './ChennaiMap.jsx'
import { zones } from '../../data/zones.js'
import './ServiceAreas.css'

const ALL = 'All'
const zoneNames = Object.keys(zones)

export default function ServiceAreas() {
  const [active, setActive] = useState(ALL)

  const areas = active === ALL ? zoneNames.flatMap((z) => zones[z]) : zones[active]
  const countText = `${areas.length} areas ${active === ALL ? 'across Chennai' : `in ${active} Chennai`}`

  return (
    <section className="alt" id="areas">
      <div className="wrap">
        <SectionHeading
          center
          title="We install across Chennai"
          subtitle="Tap a zone on the map or pick a tab to see the neighbourhoods we serve. Not listed? Ask us."
        />
        <div className="am">
          <ChennaiMap active={active} onSelect={setActive} />
          <div>
            <div className="tabs" role="tablist">
              {[ALL, ...zoneNames].map((zone) => (
                <button
                  key={zone}
                  type="button"
                  role="tab"
                  aria-selected={active === zone}
                  className={active === zone ? 'tb on' : 'tb'}
                  onClick={() => setActive(zone)}
                >
                  {zone}
                </button>
              ))}
            </div>
            <div className="chips area-chips">
              {areas.map((area) => <span key={area}>{area}</span>)}
            </div>
            <p className="hint" aria-live="polite">{countText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
