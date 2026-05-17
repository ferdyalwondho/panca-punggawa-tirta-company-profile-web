import type { Metadata } from 'next'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { PipingSection } from '@/components/sections/PipingSection'

export const metadata: Metadata = {
  title: 'Piping Solutions — PT Panca Punggawa Tirta',
  description: 'Distributor material perpipaan PVC & HDPE untuk proyek SPAM, irigasi, industri, dan infrastruktur publik.',
}

export default function PipingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PipingSection />
      </main>
      <Footer />
    </>
  )
}
