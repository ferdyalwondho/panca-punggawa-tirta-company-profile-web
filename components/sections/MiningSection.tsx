'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { coachSpecData } from '@/data/projects'

const ACCENT = '#F59E0B'

const miningPartners = ['ADARO', 'BAYAN RESOURCES', 'BUKIT ASAM', 'KIDECO', 'BERAU COAL']

export function MiningSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="mining" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-ink text-white p-10 md:p-14 mb-12 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 70% 50%, #F59E0B 0%, transparent 60%)',
            }}
          />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3 block">04 — Mining</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-xl">
              Batubara Thermal Berkualitas untuk Industri & Ekspor.
            </h2>
            <p className="text-white/65 max-w-2xl leading-relaxed mb-2">
              Pasokan batubara thermal dari tambang Palu, Sulawesi Tengah. Tersedia dalam tiga grade kualitas dengan spesifikasi kalori sesuai kebutuhan pembangkit dan industri.
            </p>
            <p className="text-white/40 text-sm italic">
              Thermal coal supply from Palu, Central Sulawesi — three quality grades available for power plants and industry.
            </p>
          </div>
        </motion.div>

        {/* Coal spec table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <SectionHeader eyebrow="Spesifikasi" heading="Coal Quality Specification" />
          <div className="overflow-x-auto rounded-2xl border border-surface-line">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Parameter</th>
                  {coachSpecData.grades.map((g) => (
                    <th key={g.name} className="text-center px-5 py-4 font-semibold">
                      <div>{g.name}</div>
                      <div className="text-xs text-white/50 font-normal">{g.gar}</div>
                    </th>
                  ))}
                  <th className="text-center px-5 py-4 font-semibold rounded-tr-2xl text-red-400">Rejection</th>
                </tr>
              </thead>
              <tbody>
                {coachSpecData.parameters.map((param, i) => (
                  <tr
                    key={param}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-surface-soft'}
                  >
                    <td className="px-5 py-3.5 font-medium text-ink-soft">{param}</td>
                    {coachSpecData.grades.map((g) => (
                      <td key={g.name} className="px-5 py-3.5 text-center text-ink">
                        {g.values[i]}
                      </td>
                    ))}
                    <td className="px-5 py-3.5 text-center text-red-500 font-medium">
                      {coachSpecData.rejection[i]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ink-muted mt-3">
            * Analisis berdasarkan basis ADB (Air Dried Basis) kecuali dinyatakan lain. Spesifikasi dapat disesuaikan berdasarkan permintaan.
          </p>
        </motion.div>

        {/* Gallery placeholder */}
        <div className="mb-12">
          <SectionHeader eyebrow="Gallery" heading="Operasi Tambang — Palu, Sulawesi" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-4/3 rounded-2xl flex items-center justify-center border border-surface-line"
                style={{ background: `linear-gradient(135deg, ${ACCENT}12, ${ACCENT}04)` }}
              >
                <div className="text-center">
                  <div className="text-3xl font-black opacity-10 mb-1" style={{ color: ACCENT }}>⛏</div>
                  <p className="text-xs text-ink-muted">Foto Operasi {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mining Partners */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl bg-surface-soft border border-surface-line p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-5">Mining Partners & Buyers</p>
          <div className="flex flex-wrap gap-3">
            {miningPartners.map((partner) => (
              <span key={partner} className="px-4 py-2 rounded-lg bg-white border border-surface-line text-sm font-bold text-ink-soft tracking-wide">
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
