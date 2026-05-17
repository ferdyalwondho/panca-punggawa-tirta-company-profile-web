'use client'

import { clients } from '@/data/clients'

export function ClientMarquee() {
  const doubled = [...clients, ...clients]

  return (
    <div className="relative overflow-hidden py-4">
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-10" />
      <div
        className="flex gap-12 w-max"
        style={{ animation: 'marquee 40s linear infinite' }}
      >
        {doubled.map((client, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <div className="w-2 h-2 rounded-full bg-brand-accent opacity-60" />
            <span className="text-sm font-semibold text-ink-soft whitespace-nowrap tracking-wide">
              {client}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
