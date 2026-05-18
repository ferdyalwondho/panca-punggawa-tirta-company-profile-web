'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { useRef } from 'react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { company } from '@/data/company'

const stats = [
  { value: '2022', label: 'Tahun Didirikan' },
  { value: '3', label: 'Divisi Layanan' },
  { value: 'Nasional', label: 'Jangkauan Proyek' },
]

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — narrative */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <motion.div variants={fadeUp}>
              <SectionHeader
                eyebrow="Our Story"
                heading="Membangun Jaringan, Mengalirkan Kehidupan."
              />
            </motion.div>
            <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed mb-6">
              PT Panca Punggawa Tirta memulai usahanya pada awal tahun 2022 dengan visi menjadi mitra infrastruktur
              terintegrasi yang terpercaya. Dimulai dari distribusi material perpipaan untuk proyek BUMN dan pemerintah
              daerah, kami berkembang ke solusi energi terbarukan dan sistem digital.
            </motion.p>
            <motion.p variants={fadeUp} className="text-ink-soft leading-relaxed mb-10">
              Dengan tiga divisi yang saling bersinergi — Piping Solutions, Solar Energy, dan IT Solutions — PT PPT
              mampu menjadi satu mitra untuk kebutuhan infrastruktur fisik, energi, dan digital klien. Koordinasi lebih
              cepat, akuntabilitas lebih jelas.
            </motion.p>

            {/* Stat grid */}
            <motion.div variants={stagger} className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp} className="bg-white rounded-2xl p-5 border border-surface-line">
                  <p className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">{s.value}</p>
                  <p className="text-xs text-ink-muted font-medium">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — vision & mission */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'} className="space-y-4">
            {/* Vision card — dark */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-brand-dark p-8 text-white"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-3">Visi</p>
              <p className="font-semibold leading-relaxed mb-3">{company.vision}</p>
              <p className="text-white/50 text-sm italic">{company.visionEn}</p>
            </motion.div>

            {/* Mission card — light */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-white p-8 border border-surface-line"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-3">Misi</p>
              <p className="text-ink font-semibold leading-relaxed mb-3">{company.mission}</p>
              <p className="text-ink-muted text-sm italic">{company.missionEn}</p>
            </motion.div>

            {/* Established badge */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-linear-to-r from-brand-primary to-brand-accent p-6 text-white flex items-center gap-4"
            >
              <div className="text-4xl font-black opacity-30">2022</div>
              <div>
                <p className="font-bold">Didirikan di Jakarta</p>
                <p className="text-white/70 text-sm">Melayani klien BUMN, kontraktor, & pemerintah daerah</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
