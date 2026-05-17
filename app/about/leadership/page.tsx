import type { Metadata } from 'next'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { Leadership } from '@/components/sections/Leadership'

export const metadata: Metadata = {
  title: 'Our Leadership — PT Panca Punggawa Tirta',
  description: 'Kenali tim pemimpin di balik PT Panca Punggawa Tirta.',
}

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Leadership />
      </main>
      <Footer />
    </>
  )
}
