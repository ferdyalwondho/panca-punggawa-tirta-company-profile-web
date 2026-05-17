'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ClientMarquee } from '@/components/shared/ClientMarquee'

export function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="clients" className="py-24 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Our Clients"
            heading="Dipercaya oleh BUMN & Korporat Terkemuka"
            subheading="Mitra strategis di sektor konstruksi, energi, dan infrastruktur nasional."
            centered
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl border border-surface-line py-10 overflow-hidden"
        >
          <ClientMarquee />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {[
            { label: 'BUMN', desc: 'Pertamina, PLN, PGN, PUPR, WIKA, Waskita, Adhi, dan lebih banyak lagi.' },
            { label: 'Kontraktor Besar', desc: 'HK Infrastruktur, Hutama Karya, Nindya Karya, Abipraya, Rekind.' },
            { label: 'Industri & Perbankan', desc: 'Krakatau Steel, Indonesia Power, PAL Indonesia, Bank BRI & BNI.' },
          ].map((cat) => (
            <div key={cat.label} className="bg-white rounded-2xl p-6 border border-surface-line">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-2">{cat.label}</p>
              <p className="text-sm text-ink-muted leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
