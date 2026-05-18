'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Phone, Mail, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { company } from '@/data/company'

const contactSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  company: z.string().optional(),
  email: z.string().email('Email tidak valid'),
  phone: z.string().optional(),
  interest: z.enum(['piping', 'solar', 'it', 'general']),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
})

type ContactForm = z.infer<typeof contactSchema>

const interestOptions = [
  { value: 'piping', label: 'Piping Solutions' },
  { value: 'solar', label: 'Solar Energy' },
  { value: 'it', label: 'IT Solutions' },
  { value: 'general', label: 'Umum / Lainnya' },
]

const contactInfo = [
  {
    icon: MapPin,
    label: 'Kantor',
    lines: [company.address],
  },
  {
    icon: Phone,
    label: 'Telepon',
    lines: [company.phone, `${company.mobile} (${company.mobileLabel})`],
  },
  {
    icon: Mail,
    label: 'Email',
    lines: [company.email.general, company.email.project, company.email.sales],
  },
  {
    icon: Globe,
    label: 'Web & Media',
    lines: [company.website, company.instagram, company.linkedin],
  },
]

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { interest: 'general' },
  })

  const onSubmit = async (data: ContactForm) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact Us"
          heading="Mari Mulai Diskusi."
          subheading="Hubungi kami untuk konsultasi, penawaran, atau sekadar bertanya — tim kami siap membantu."
          light
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info blocks */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map(({ icon: Icon, label, lines }) => (
              <motion.div key={label} variants={fadeUp} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">{label}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-sm text-white/70 leading-relaxed">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="rounded-2xl bg-green-500/10 border border-green-500/20 p-10 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Pesan Terkirim!</h3>
                <p className="text-white/60">Tim kami akan segera menghubungi Anda. Terima kasih telah menghubungi PT Panca Punggawa Tirta.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-brand-accent hover:underline">
                  Kirim pesan lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                      Nama *
                    </label>
                    <input
                      {...register('name')}
                      placeholder="Nama lengkap Anda"
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                      Perusahaan
                    </label>
                    <input
                      {...register('company')}
                      placeholder="Nama perusahaan (opsional)"
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="email@perusahaan.com"
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                      No. HP
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+62 8xx xxxx xxxx"
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                    Minat Layanan *
                  </label>
                  <select
                    {...register('interest')}
                    className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-ink text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
                    className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    Gagal mengirim pesan. Silakan coba lagi atau hubungi kami langsung.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-brand-accent text-white font-semibold text-sm hover:bg-brand-accent/90 disabled:opacity-60 transition-colors"
                >
                  {status === 'loading' ? (
                    <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
