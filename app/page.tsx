import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Divisions } from '@/components/sections/Divisions'
import { Clients } from '@/components/sections/Clients'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divisions />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
