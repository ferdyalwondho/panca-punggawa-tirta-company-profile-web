import type { Metadata } from 'next'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { MiningSection } from '@/components/sections/MiningSection'

export const metadata: Metadata = {
  title: 'Mining Supply — PT Panca Punggawa Tirta',
  description: 'Supply batubara thermal dan material tambang untuk industri energi nasional dari Palu, Sulawesi Tengah.',
}

export default function MiningPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <MiningSection />
      </main>
      <Footer />
    </>
  )
}
