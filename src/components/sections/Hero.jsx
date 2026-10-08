import LeadForm from '../ui/LeadForm.jsx'
import { heroPills } from '../../data/content.js'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">

        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Chennai's rooftop solar specialists
          </div>

          <h1>
            Turn your rooftop into{' '}
            <span>your own power plant.</span>
          </h1>

          <p className="hero-lead">
            Cut your electricity costs with a solar system designed for your
            home, installed end-to-end and supported long after the panels go
            up.
          </p>

          <div className="hero-actions">
            <a className="btn btn-lg" href="#quote">
              Get My Free Solar Assessment
            </a>

            <a className="btn o btn-lg" href="#calc">
              Calculate My Savings
            </a>
          </div>

          <div className="pills">
            {heroPills.map((pill) => (
              <span key={pill}>✓ {pill}</span>
            ))}
          </div>

          <div className="hero-trust">
            <div>
              <b>Free</b>
              <span>Rooftop survey</span>
            </div>

            <div>
              <b>3D</b>
              <span>Custom roof design</span>
            </div>

            <div>
              <b>5 yrs</b>
              <span>Care & maintenance*</span>
            </div>
          </div>

          <p className="microcopy">
            *Subject to the final SolarMiles service plan and written
            quotation. We do not use made-up customer counts or testimonials.
          </p>
        </div>

        <div
          className="hero-visual"
          aria-label="SolarMiles rooftop solar assessment"
        >
          <div className="sun-glow" />

          <div className="roof-card">
            <div className="roof-topline">
              <span>YOUR ROOFTOP</span>
              <span className="live-dot">● LIVE ASSESSMENT</span>
            </div>

            <div className="roof-art">
              <div className="house">
                <div className="house-roof" />
                <div className="house-body">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="panel-grid">
                {Array.from({ length: 12 }).map((_, i) => (
                  <i key={i} />
                ))}
              </div>

              <div className="sun">☀</div>
            </div>

            <div className="roof-metrics">
              <div>
                <small>DESIGN</small>
                <b>Custom</b>
                <span>for your roof</span>
              </div>

              <div>
                <small>GOAL</small>
                <b>Lower bills</b>
                <span>with clean power</span>
              </div>

              <div>
                <small>SUPPORT</small>
                <b>End-to-end</b>
                <span>from survey to service</span>
              </div>
            </div>
          </div>

          <div className="floating-badge">
            <span>₹</span>
            <div>
              <b>Save smarter</b>
              <small>Subsidy + financing guidance</small>
            </div>
          </div>
        </div>

        <LeadForm
          id="quote"
          title="Get your free solar assessment"
          description="Tell us your bill and PIN code. We'll prepare the next step over WhatsApp."
          billOptions={[
            'Less than ₹1,500',
            '₹1,500 – ₹4,000',
            '₹4,000 – ₹8,000',
            'More than ₹8,000'
          ]}
          submitLabel="Continue on WhatsApp"
          successMessage="WhatsApp opened with your enquiry. Send the message to start your assessment."
        />

      </div>
    </section>
  )
}