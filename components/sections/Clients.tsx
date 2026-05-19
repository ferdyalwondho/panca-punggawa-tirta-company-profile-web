'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { clients } from '@/data/clients'
import { fadeUp, stagger } from '@/lib/animations'

function ClientCard({ client, className = '' }: { client: (typeof clients)[number]; className?: string }) {
  const logoClass =
    'logoSize' in client
      ? client.logoSize === 'xl'
        ? 'max-w-full sm:max-w-52 max-h-12 sm:max-h-16'
        : client.logoSize === 'tall'
          ? 'max-w-full sm:max-w-28 max-h-20 sm:max-h-24'
          : 'max-w-full sm:max-w-44 max-h-12 sm:max-h-16'
      : 'max-w-full sm:max-w-32 max-h-10 sm:max-h-12'

  return (
    <div className={`bg-white rounded-2xl border border-surface-line p-4 md:p-6 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow duration-200 min-h-36 ${className}`}>
      <div className="flex items-center justify-center w-full">
        <Image
          src={client.logo}
          alt={client.name}
          width={300}
          height={200}
          style={{ width: 'auto', height: 'auto' }}
          className={`${logoClass} object-contain`}
        />
      </div>
      <div className="text-center">
        <p className="text-xs font-semibold text-ink leading-snug">{client.name}</p>
        {'subtitle' in client && client.subtitle && (
          <p className="text-xs text-ink-muted">{client.subtitle}</p>
        )}
        <p className="text-[10px] text-ink-muted mt-0.5">{client.sector}</p>
      </div>
    </div>
  )
}

export function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const row1 = clients.slice(0, 4)
  const row2 = clients.slice(4, 7)

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
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="space-y-5"
        >
          {/* Row 1 — 4 clients */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {row1.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </motion.div>

          {/* Row 2 — 3 clients, 2-col on mobile / 3-col on desktop */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {row2.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
