import type { Metadata } from 'next'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { SolarSection } from '@/components/sections/SolarSection'

export const metadata: Metadata = {
  title: 'Solar Energy — PT Panca Punggawa Tirta',
  description: 'Solusi energi surya end-to-end untuk industri & publik — dari site survey hingga O&M jangka panjang.',
}

export default function SolarPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <SolarSection />
      </main>
      <Footer />
    </>
  )
}
