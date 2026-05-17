'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { useRef } from 'react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { pipingProjects, solarProjects, itProjects } from '@/data/projects'

const featured = [
  { project: pipingProjects[1], accent: '#00B4D8', divLabel: 'Piping' },
  { project: pipingProjects[2], accent: '#00B4D8', divLabel: 'Piping' },
  { project: solarProjects[0], accent: '#FFB627', divLabel: 'Solar' },
  { project: itProjects[0], accent: '#7B61FF', divLabel: 'IT' },
]

export function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Selected Works"
          heading="Proyek yang Telah Kami Kerjakan"
          subheading="Dari jaringan air bersih pelosok Papua hingga ERP korporat Jakarta — setiap proyek adalah bukti komitmen kami."
          centered
        />

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featured.map(({ project, accent, divLabel }) => (
            <motion.div key={project.title + divLabel} variants={fadeUp} className="relative">
              <div className="absolute -top-3 left-5 z-10">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: accent }}
                >
                  {divLabel}
                </span>
              </div>
              <ProjectCard project={project} accentColor={accent} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-ink-muted mb-4">Tertarik bekerja sama dengan kami?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-primary text-white font-semibold text-sm hover:bg-brand-primary/90 transition-colors"
          >
            Mulai Diskusi →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
