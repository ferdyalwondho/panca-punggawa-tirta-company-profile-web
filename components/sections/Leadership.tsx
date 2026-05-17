'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { useRef } from 'react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { leaders, company } from '@/data/company'

export function Leadership() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Leadership"
          heading="Tim yang Memimpin."
          centered
        />

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14"
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              variants={fadeUp}
              className="rounded-2xl border border-surface-line bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-linear-to-r ${leader.gradient}`} />
              <div className="p-8">
                <div className="flex items-start gap-5">
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${leader.gradient} flex items-center justify-center shrink-0`}>
                    <span className="text-xl font-black text-white">{leader.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{leader.name}</h3>
                    <p className="text-sm text-ink-muted leading-snug mt-0.5">{leader.title}</p>
                  </div>
                </div>
                <p className="mt-5 text-ink-soft text-sm leading-relaxed">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl bg-brand-dark text-white p-10 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold leading-relaxed max-w-2xl mx-auto mb-4">
            &ldquo;{company.missionEn}&rdquo;
          </p>
          <p className="text-brand-accent text-xs font-bold uppercase tracking-widest">— Our Mission</p>
        </motion.div>
      </div>
    </section>
  )
}
