import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Steps from '@/components/Steps'
import Benefits from '@/components/Benefits'
import About from '@/components/About'
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
        <Steps />
        <Benefits />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
