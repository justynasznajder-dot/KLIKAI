import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Steps from '@/components/Steps'
import Benefits from '@/components/Benefits'
import About from '@/components/About'
import UseCases from '@/components/UseCases'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Pricing />
        <Benefits />
        <About />
        <Steps />
        <UseCases />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
