import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PT Panca Punggawa Tirta — Piping, Solar & IT Solutions',
  icons: {
    icon: '/logo/ppt-logo.svg',
    shortcut: '/logo/ppt-logo.png',
  },
  description:
    'Solusi infrastruktur terintegrasi: pipa PVC/HDPE, solar energy, dan IT solutions untuk BUMN dan proyek konstruksi nasional.',
  keywords: ['pipa PVC', 'HDPE', 'solar panel', 'IoT monitoring', 'infrastruktur', 'BUMN', 'kontraktor'],
  openGraph: {
    title: 'PT Panca Punggawa Tirta',
    description: "Pipes, Solar & Code — Infrastructure for what's next.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'PT Panca Punggawa Tirta',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased bg-surface text-ink">
        {/* Remove URL hash on homepage load before browser auto-scrolls */}
        <script dangerouslySetInnerHTML={{ __html: `
          if (window.location.pathname === '/' && window.location.hash) {
            history.replaceState(null, '', '/');
          }
        ` }} />
        {children}
      </body>
    </html>
  )
}
