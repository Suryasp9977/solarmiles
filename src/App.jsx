import TopBar from './components/layout/TopBar.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import WhatsAppButton from './components/layout/WhatsAppButton.jsx'
import Hero from './components/sections/Hero.jsx'
import Stats from './components/sections/Stats.jsx'
import WhyUs from './components/sections/WhyUs.jsx'
import Roadmap from './components/sections/Roadmap.jsx'
import Services from './components/sections/Services.jsx'
import Calculator from './components/sections/Calculator.jsx'
import Subsidy from './components/sections/Subsidy.jsx'
import Finance from './components/sections/Finance.jsx'
import Monitoring from './components/sections/Monitoring.jsx'
import OurPromise from './components/sections/OurPromise.jsx'
import SeeSolar from './components/sections/SeeSolar.jsx'
import SystemTypes from './components/sections/SystemTypes.jsx'
import Survey from './components/sections/Survey.jsx'
import Impact from './components/sections/Impact.jsx'
import BankPartners from './components/sections/BankPartners.jsx'
import ServiceAreas from './components/sections/ServiceAreas.jsx'
import Faq from './components/sections/Faq.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhyUs />
        <Roadmap />
        <Services />
        <Calculator />
        <Subsidy />
        <Finance />
        <Monitoring />
        <OurPromise />
        <SeeSolar />
        <SystemTypes />
        <Survey />
        <Impact />
        <BankPartners />
        <ServiceAreas />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
