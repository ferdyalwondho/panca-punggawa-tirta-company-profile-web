'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { divisions } from '@/data/divisions'
import { useRouter } from 'next/navigation'

export function Divisions() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const router = useRouter()

  return (
    <section id="divisions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Products"
          heading="Empat Pilar Infrastruktur Terintegrasi"
          subheading="Satu mitra untuk kebutuhan piping, energi, digital, dan material tambang Anda."
          centered
        />

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {divisions.map((div) => (
            <motion.div
              key={div.slug}
              variants={fadeUp}
              className="group rounded-2xl border border-surface-line bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Accent bar */}
              <div className={`h-1.5 w-full bg-linear-to-r ${div.colorFrom} ${div.colorTo}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-black text-surface-line group-hover:text-surface-soft transition-colors">
                    {div.number}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center opacity-80"
                    style={{ backgroundColor: `${div.accentColor}20` }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: div.accentColor }} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-ink mb-3">{div.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-6">{div.desc}</p>

                <ul className="space-y-2 mb-8">
                  {div.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: div.accentColor }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => router.push(`/products/${div.slug}`)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                  style={{ color: div.accentColor }}
                >
                  Lihat Detail
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* "Why Integrated" callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl bg-brand-dark text-white p-8 md:p-10"
        >
          <div className="flex items-start gap-4 max-w-3xl">
            <span className="text-2xl shrink-0">⚡</span>
            <div>
              <p className="font-bold text-lg mb-2">Mengapa Terintegrasi?</p>
              <p className="text-white/70 leading-relaxed">
                Sebuah jaringan distribusi air modern butuh pipa, sumber daya — solar bisa menggerakkan pompa di daerah
                terpencil — dan sistem monitoring real-time. Dengan satu mitra, koordinasi lebih cepat dan akuntabilitas
                lebih jelas. Itulah PT Panca Punggawa Tirta.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
