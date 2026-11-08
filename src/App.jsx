import { useCallback, useEffect, useState } from 'react'
import TopBar from './components/layout/TopBar.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import WhatsAppButton from './components/layout/WhatsAppButton.jsx'
import Hero from './components/sections/Hero.jsx'
import Stats from './components/sections/Stats.jsx'
import WhyUs from './components/sections/WhyUs.jsx'
// import Services from './components/sections/Services.jsx'
import Calculator from './components/sections/Calculator.jsx'
import Subsidy from './components/sections/Subsidy.jsx'
import Finance from './components/sections/Finance.jsx'
import Monitoring from './components/sections/Monitoring.jsx'
import OurPromise from './components/sections/OurPromise.jsx'
import Survey from './components/sections/Survey.jsx'
import ServiceAreas from './components/sections/ServiceAreas.jsx'
import Faq from './components/sections/Faq.jsx'
import Contact from './components/sections/Contact.jsx'
import Founding from './components/sections/Founding.jsx'
import QuoteModal from './components/sections/QuoteModal.jsx'

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [quoteBill, setQuoteBill] = useState(null) // bill amount from the calculator, if any

  const openQuote = useCallback((bill = null) => {
    setQuoteBill(bill)
    setQuoteOpen(true)
  }, [])
  const closeQuote = useCallback(() => setQuoteOpen(false), [])

  // Any link to #quote, or any element with data-open-quote, opens the popup.
  useEffect(() => {
    const onClick = (e) => {
      const trigger = e.target.closest?.('a[href="#quote"], [data-open-quote]')
      if (!trigger) return
      e.preventDefault()
      openQuote()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [openQuote])

  // The calculator opens the popup with the bill it calculated.
  useEffect(() => {
    const onCalculatorQuote = (e) => openQuote(e.detail?.bill ?? null)
    window.addEventListener('solarmiles:open-quote', onCalculatorQuote)
    return () => window.removeEventListener('solarmiles:open-quote', onCalculatorQuote)
  }, [openQuote])

  return (
    <>
      <TopBar />
      <Header />

      <main>
        <Hero />
        <Stats />
        <WhyUs />
        <Calculator />
        {/* <Services /> */}
        <Subsidy />
        <Finance />
        <Monitoring />
        <Founding />
        <OurPromise />
        <Survey />
        <ServiceAreas />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <QuoteModal open={quoteOpen} onClose={closeQuote} source="website" prefillBill={quoteBill} />
    </>
  )
}