import type { Metadata } from 'next'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { ITSection } from '@/components/sections/ITSection'

export const metadata: Metadata = {
  title: 'IT Solutions — PT Panca Punggawa Tirta',
  description: 'Pengembangan sistem digital dan integrasi IoT untuk monitoring dan optimasi aset infrastruktur secara real-time.',
}

export default function ITPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ITSection />
      </main>
      <Footer />
    </>
  )
}
