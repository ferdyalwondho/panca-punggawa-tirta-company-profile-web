'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { useRef } from 'react'
import { Zap, Battery, Building2, Sun, MapPin, Settings } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { solarServices } from '@/data/divisions'
import { solarProjects } from '@/data/projects'

const ACCENT = '#FFB627'
const ACCENT_DARK = '#FF7A18'

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
            parent.style.background = `linear-gradient(135deg, ${ACCENT}15, ${ACCENT}05)`
            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-3xl font-black opacity-10" style="color:${ACCENT}">PPT</span></div>`
          }
        }}
      />
    </div>
  )
}

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  battery: Battery,
  building: Building2,
  sun: Sun,
  'map-pin': MapPin,
  settings: Settings,
}

export function SolarSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="solar" className="py-24 bg-white">
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
            <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3 block">02 — Solar Energy</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-xl">
              Energi Surya untuk Industri & Publik.
            </h2>
            <p className="text-white/75 max-w-2xl leading-relaxed mb-2">
              Solusi energi terbarukan end-to-end — dari site survey & system sizing, hingga instalasi, monitoring, dan operasi & maintenance jangka panjang.
            </p>
            <p className="text-white/50 text-sm italic">
              End-to-end renewable energy solutions — from site survey to long-term O&M.
            </p>
          </div>
        </motion.div>

        {/* Service grid 3×2 */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10"
        >
          {solarServices.map((svc) => {
            const Icon = iconMap[svc.icon] ?? Zap
            return (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                className="rounded-2xl border border-surface-line bg-surface-soft p-6 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${ACCENT}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: ACCENT_DARK }} />
                </div>
                <h4 className="font-bold text-ink mb-2">{svc.title}</h4>
                <p className="text-ink-muted text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Sinergi callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="rounded-2xl bg-surface-soft border border-surface-line p-6 mb-16 flex items-start gap-4"
        >
          <span className="text-2xl shrink-0">⚡</span>
          <div>
            <p className="font-bold text-ink mb-1">Sinergi dengan Piping</p>
            <p className="text-ink-muted text-sm leading-relaxed">
              Solar dapat menggerakkan pompa air di daerah yang tidak terjangkau jaringan PLN — menjadikan instalasi
              pipa air bersih di daerah terpencil menjadi mungkin dan berkelanjutan. Satu paket, satu mitra.
            </p>
          </div>
        </motion.div>

        {/* Product Gallery */}
        <div className="mb-16">
          <SectionHeader eyebrow="Gallery" heading="Foto Instalasi Solar" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/solar/solar_install_residential.jpg', alt: '3 Teknisi Instalasi Atap Genteng' },
              { src: '/images/solar/solar_install_rooftop.jpg',     alt: '2 Teknisi Atap Seng' },
              { src: '/images/solar/solar_inverter_battery.jpg',    alt: 'SunSynk Inverter + Freedom Battery' },
              { src: '/images/solar/solar_install_panel.jpg',       alt: '2 Teknisi Helm Kuning' },
            ].map((photo) => (
              <GalleryPhoto key={photo.src} src={photo.src} alt={photo.alt} />
            ))}
          </div>
        </div>

        {/* Selected works */}
        <SectionHeader eyebrow="Selected Works" heading="Proyek Solar Kami" />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {solarProjects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <ProjectCard project={project} accentColor={ACCENT} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
