import LeadForm from '../ui/LeadForm.jsx'
import { heroPills } from '../../data/content.js'
import './Hero.css'

export default function Hero() {
  return (
    <div id="top" className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <h1>Cut your electricity bill by up to <span>90%</span> with rooftop solar</h1>
          <p>End-to-end solar for homes, housing societies and businesses: free site visit, design, installation, subsidy paperwork and 5-year maintenance.</p>
          <div className="hero-actions">
            <a className="btn" href="#quote">Book a Free Home Visit</a>
            <a className="btn o" href="#calc">Calculate Savings</a>
          </div>
          <div className="pills">
            {heroPills.map((pill) => <span key={pill}>✔ {pill}</span>)}
          </div>
        </div>
        <LeadForm
          id="quote"
          title="Get your free solar quote"
          description="We’ll call you back to schedule a free rooftop survey."
          billOptions={['Less than ₹1,500', '₹1,500 – ₹4,000', '₹4,000 – ₹8,000', 'More than ₹8,000']}
          submitLabel="Request Callback"
          successMessage="Thanks! Our team will contact you shortly."
        />
      </div>
    </div>
  )
}
