'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { useRef } from 'react'
import { Check, Package, Clock } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { pipingSpecLeft, pipingSpecRight, pipingBrands } from '@/data/divisions'
import { pipingProjects } from '@/data/projects'

const ACCENT = '#00B4D8'

function GalleryPhoto({ src, alt, accent }: { src: string; alt: string; accent: string }) {
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
            parent.style.background = `linear-gradient(135deg, ${accent}15, ${accent}05)`
            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-3xl font-black opacity-10" style="color:${accent}">PPT</span></div>`
          }
        }}
      />
    </div>
  )
}

export function PipingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="piping" className="py-24 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-linear-to-br from-brand-primary to-brand-accent p-10 md:p-14 text-white mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3 block">01 — Piping Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-xl">
              PVC & HDPE Pipes, Fittings & Accessories.
            </h2>
            <p className="text-white/75 max-w-2xl leading-relaxed mb-2">
              Distributor material perpipaan lengkap untuk proyek SPAM, irigasi, industri, dan infrastruktur publik — berstandar JIS, SNI, dan internasional.
            </p>
            <p className="text-white/50 text-sm italic">
              Complete pipe material distributor for water supply, irrigation, industrial, and public infrastructure projects.
            </p>
          </div>
        </motion.div>

        {/* Spec table — 2 columns */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[pipingSpecLeft, pipingSpecRight].map((spec) => (
            <motion.div key={spec.title} variants={fadeUp} className="bg-white rounded-2xl p-6 border border-surface-line">
              <h4 className="font-bold text-ink mb-4">{spec.title}</h4>
              <ul className="space-y-2">
                {spec.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                    <Check className="w-3.5 h-3.5 shrink-0" style={{ color: ACCENT }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand lineup */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-6 border border-surface-line mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">Brand Partner</p>
          <div className="flex flex-wrap gap-3">
            {pipingBrands.map((brand) => (
              <span key={brand} className="px-4 py-2 rounded-lg bg-surface-soft border border-surface-line text-sm font-bold text-ink-soft tracking-wide">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Value props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {[
            { icon: Package, title: 'Komplit Sesuai Standar', desc: 'Material tersertifikasi JIS, SNI, dan standar internasional — siap untuk audit proyek pemerintah.' },
            { icon: Clock, title: 'Pengiriman Tepat Waktu', desc: 'Stok tersedia dan jaringan logistik yang andal untuk mendukung timeline proyek Anda.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-brand-dark rounded-2xl p-6 text-white flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-accent/20 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <p className="font-bold mb-1">{title}</p>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Gallery */}
        <div className="mb-16">
          <SectionHeader eyebrow="Product Gallery" heading="Foto Produk" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/piping/fittings_collection.jpg', alt: 'PVC Fittings Collection' },
              { src: '/images/piping/truck_trailer_pipes.jpg', alt: 'Pipa di atas Truck Trailer' },
              { src: '/images/piping/gate_valve_kitz.jpg',     alt: 'Gate Valve KITZ' },
              { src: '/images/piping/meter_install.jpg',        alt: 'Water Meter Assembly' },
              { src: '/images/piping/purple_pipes.jpg',         alt: 'PVC Purple & Grey Pipes' },
              { src: '/images/piping/flange_stacks.jpg',        alt: 'Tumpukan Flange Galvanis' },
            ].map((photo) => (
              <GalleryPhoto key={photo.src} src={photo.src} alt={photo.alt} accent={ACCENT} />
            ))}
          </div>
        </div>

        {/* Selected works */}
        <SectionHeader eyebrow="Selected Works" heading="Proyek Piping Kami" />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pipingProjects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <ProjectCard project={project} accentColor={ACCENT} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
