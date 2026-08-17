import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import TechStack from '@/components/sections/TechStack'
import Process from '@/components/sections/Process'
import FitFilter from '@/components/sections/FitFilter'
import CaseStudies from '@/components/sections/CaseStudies'
import Testimonials from '@/components/sections/Testimonials'
import GlobalReach from '@/components/sections/GlobalReach'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Process />
        <FitFilter />
        <CaseStudies />
        <Testimonials />
        <GlobalReach />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
