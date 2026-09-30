import SectionHeading from '../ui/SectionHeading.jsx'
import { systemTypes } from '../../data/content.js'

export default function SystemTypes() {
  return (
    <section id="system-types">
      <div className="wrap">
        <SectionHeading title="Choose the right type of system" subtitle="Pick based on your grid reliability and backup needs." />
        <div className="scroll">
          <table>
            <thead>
              <tr><th>Type</th><th>Grid</th><th>Battery</th><th>Best for</th></tr>
            </thead>
            <tbody>
              {systemTypes.map((row) => (
                <tr key={row.type}>
                  <td>{row.type}</td><td>{row.grid}</td><td>{row.battery}</td><td>{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
