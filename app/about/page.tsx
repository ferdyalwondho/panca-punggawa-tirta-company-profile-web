import type { Metadata } from 'next'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { About } from '@/components/sections/About'

export const metadata: Metadata = {
  title: 'Company Profile — PT Panca Punggawa Tirta',
  description: 'Visi, misi, dan profil PT Panca Punggawa Tirta — solusi infrastruktur terintegrasi sejak 2022.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </>
  )
}
