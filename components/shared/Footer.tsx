import Image from 'next/image'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { company, navLinks } from '@/data/company'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/logo/ppt-logo.svg"
              alt="PT Panca Punggawa Tirta"
              width={160}
              height={48}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {company.footerTagline}
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={`https://instagram.com/${company.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Navigasi</h3>
            <ul className="space-y-3">
              {navLinks.flatMap((link) =>
                link.children
                  ? link.children.map((child) => (
                      <li key={child.href}>
                        <a href={child.href} className="text-sm text-white/70 hover:text-white transition-colors">
                          {child.label}
                        </a>
                      </li>
                    ))
                  : [
                      <li key={link.href}>
                        <a href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                          {link.label}
                        </a>
                      </li>,
                    ]
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-accent" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 shrink-0 text-brand-accent" />
                <span>{company.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="w-4 h-4 shrink-0 text-brand-accent" />
                <span>{company.email.general}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Globe className="w-4 h-4 shrink-0 text-brand-accent" />
                <span>{company.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {year} PT Panca Punggawa Tirta. All rights reserved.
          </p>
          <p className="text-xs text-white/30">Piping · Solar · IT</p>
        </div>
      </div>
    </footer>
  )
}
