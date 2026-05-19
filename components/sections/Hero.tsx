'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HeroIllustration } from './HeroIllustration'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease },
  }),
}

const pillars = [
  { num: '01', label: 'Piping Solutions', desc: 'PVC & HDPE Infrastructure', href: '#piping', color: '#00B4D8' },
  { num: '02', label: 'Solar Energy', desc: 'Renewable Power Systems', href: '#solar', color: '#FFB627' },
  { num: '03', label: 'IT Solutions', desc: 'Digital & IoT Integration', href: '#it', color: '#7B61FF' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-dark">
      {/* Square grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Gradient mesh */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-dark via-brand-primary/60 to-brand-dark pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        {/* Top area: illustration (mobile first) + text side by side on lg */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

          {/* Illustration — top on mobile, right on desktop */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="w-full lg:w-1/2 lg:order-2 mb-8 lg:mb-0"
          >
            <HeroIllustration />
          </motion.div>

          {/* Text content — bottom on mobile, left on desktop */}
          <div className="w-full lg:w-1/2 lg:order-1">
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            >
              Powering Infrastructure
              <br />
              <span className="text-brand-accent">with Pipes, Solar</span>
              <br />
              <span className="text-white/90">& Code.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-white/65 text-lg md:text-xl leading-relaxed mb-10"
            >
              Dari pipa PVC/HDPE untuk jaringan air bersih, ke energi terbarukan dan sistem digital terintegrasi —
              kami membangun fondasi infrastruktur Indonesia yang lebih berkelanjutan.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-semibold text-sm hover:bg-brand-accent/90 transition-colors"
              >
                Lihat Layanan Kami
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Hubungi Kami
              </button>
            </motion.div>
          </div>
        </div>

        {/* 3 pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {pillars.map((p, i) => (
            <motion.button
              key={p.num}
              custom={4 + i}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              onClick={() => document.getElementById(p.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
              className="group text-left p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl font-black text-white/20 group-hover:text-white/30 transition-colors">{p.num}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" style={{ color: p.color }} />
              </div>
              <h3 className="text-white font-bold text-base mb-1">{p.label}</h3>
              <p className="text-white/50 text-xs">{p.desc}</p>
              <div className="mt-4 h-0.5 w-8 rounded-full group-hover:w-full transition-all duration-500" style={{ backgroundColor: p.color, opacity: 0.6 }} />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  )
}
