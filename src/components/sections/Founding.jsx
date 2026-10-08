import SectionHeading from '../ui/SectionHeading.jsx'

export default function Founding() {
  return (
    <section className="founding" id="founding">
      <div className="wrap founding-grid">
        <div>
          <span className="tag">
            WE ARE NEW — AND WE'RE HONEST ABOUT IT
          </span>

          <h2>Building SolarMiles one rooftop at a time.</h2>

          <p>
            We are a new solar business, so we won't fill this website with
            invented installation counts, stock testimonials or borrowed
            project photos.
          </p>

          <p>
            Instead, our early customers get something valuable: direct
            attention, transparent proposals, careful site assessment and a
            team that is accountable for the complete journey.
          </p>

          <a className="btn" href="#quote">
            Become an early SolarMiles customer
          </a>
        </div>

        <div className="founder-proof">
          <div>
            <strong>01</strong>
            <span>Free rooftop assessment</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Personalised system proposal</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Clear subsidy & finance guidance</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Post-installation support plan</span>
          </div>
        </div>
      </div>
    </section>
  )
}