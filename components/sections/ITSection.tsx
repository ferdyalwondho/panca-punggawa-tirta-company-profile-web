'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { useRef } from 'react'
import { Monitor, Activity, GitMerge } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { itServices } from '@/data/divisions'
import { itProjects } from '@/data/projects'

const ACCENT = '#7B61FF'
const ACCENT_DARK = '#4F46E5'

function GalleryPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-4/3 rounded-2xl overflow-hidden bg-white border border-surface-line relative group">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          const el = e.currentTarget
          el.style.display = 'none'
          const parent = el.parentElement
          if (parent) {
            parent.style.background = `linear-gradient(135deg, ${ACCENT}10, ${ACCENT}03)`
            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-3xl font-black opacity-10" style="color:${ACCENT}">PPT</span></div>`
          }
        }}
      />
    </div>
  )
}

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  activity: Activity,
  'git-merge': GitMerge,
}

export function ITSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="it" className="py-24 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-10 md:p-14 text-white mb-12 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${ACCENT_DARK}, ${ACCENT})` }}
        >
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3 block">03 — IT Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-xl">
              Sistem Digital, Terhubung & Terukur.
            </h2>
            <p className="text-white/75 max-w-2xl leading-relaxed mb-2">
              Pengembangan sistem digital dan integrasi IoT untuk memonitor, mengelola, dan mengoptimalkan aset infrastruktur secara real-time.
            </p>
            <p className="text-white/50 text-sm italic">
              Digital system development and IoT integration to monitor and optimize infrastructure assets in real-time.
            </p>
          </div>
        </motion.div>

        {/* Service grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
        >
          {itServices.map((svc) => {
            const Icon = iconMap[svc.icon] ?? Monitor
            return (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                className="rounded-2xl border border-surface-line bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${ACCENT}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: ACCENT_DARK }} />
                </div>
                <h4 className="font-bold text-ink mb-2">{svc.title}</h4>
                <p className="text-ink-muted text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Use case callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl bg-ink text-white p-8 mb-16"
        >
          <div className="flex items-start gap-3 mb-6">
            <span className="text-2xl">🔗</span>
            <div>
              <p className="font-bold text-lg mb-1">Use Case: Smart Pipeline + Solar</p>
              <p className="text-white/60 text-sm">Infrastruktur terintegrasi dalam satu ekosistem digital</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'PIPING LAYER', desc: 'Jaringan pipa HDPE terpasang dengan sensor flow & pressure di titik kritis', color: '#00B4D8' },
              { label: 'ENERGY LAYER', desc: 'Solar panel menggerakkan pompa & sensor — zero grid dependency', color: '#FFB627' },
              { label: 'DIGITAL LAYER', desc: 'Dashboard real-time memantau debit, tekanan, dan performa solar 24/7', color: ACCENT },
            ].map((layer) => (
              <div key={layer.label} className="rounded-xl p-4 bg-white/5 border border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: layer.color }}>
                  {layer.label}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Gallery */}
        <div className="mb-16">
          <SectionHeader eyebrow="Gallery" heading="Screenshot Sistem Digital" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/it/it_web_ppt.jpg',      alt: 'Website PT PPT' },
              { src: '/images/it/it_app_alita.jpg',     alt: 'Alita Partner Onboarding Dashboard' },
              { src: '/images/it/it_app_aviat1.jpg',    alt: 'Aviat Networks Project Dashboard' },
              { src: '/images/it/it_app_aviat2.jpg',    alt: 'Aviat Networks Project Detail' },
            ].map((photo) => (
              <GalleryPhoto key={photo.src} src={photo.src} alt={photo.alt} />
            ))}
          </div>
        </div>

        {/* Selected works */}
        <SectionHeader eyebrow="Selected Works" heading="Proyek IT Kami" />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {itProjects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <ProjectCard project={project} accentColor={ACCENT} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
