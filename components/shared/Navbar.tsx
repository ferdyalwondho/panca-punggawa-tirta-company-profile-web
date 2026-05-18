'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/company'
import { useRouter, usePathname } from 'next/navigation'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const isScrolled = scrolled || pathname !== '/'

  useEffect(() => {
    if (pathname !== '/') return
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (window.scrollY < 200) setActiveSection('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    if (pathname !== '/') return

    // Reset activeSection on page load to avoid highlighting based on URL hash
    setActiveSection('')

    const sectionIds = navLinks
      .filter((l) => !l.children)
      .map((l) => l.href.replace('#', ''))
      .filter(Boolean)
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [pathname])

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setDropdownOpen(label)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(null), 150)
  }

  const handleNav = (href: string) => {
    setMobileOpen(false)
    setDropdownOpen(null)
    if (href.startsWith('#')) {
      if (pathname === '/') {
        document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/' + href)
      }
    } else {
      router.push(href)
    }
  }

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  const activeDropdown = navLinks.find((l) => l.label === dropdownOpen && l.children)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-surface-line' : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={handleLogoClick} className="flex items-center gap-3 shrink-0 cursor-pointer group">
          <Image
            src="/logo/ppt-logo.png"
            alt="PT Panca Punggawa Tirta"
            width={40}
            height={40}
            priority
            className={cn('h-10 w-10 object-contain transition-all duration-300 group-hover:scale-110', !isScrolled && 'brightness-0 invert')}
          />
          <div className="leading-tight text-left transition-opacity duration-300 group-hover:opacity-70">
            <p className={cn('text-[11px] font-extrabold tracking-widest uppercase transition-colors duration-300', isScrolled ? 'text-ink' : 'text-white')}>
              Panca Punggawa
            </p>
            <p className={cn('text-[11px] font-extrabold tracking-widest uppercase transition-colors duration-300', isScrolled ? 'text-brand-primary' : 'text-white/80')}>
              Tirta
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            if (link.children) {
              const isOpen = dropdownOpen === link.label
              return (
                <div
                  key={link.label}
                  onMouseEnter={() => openDropdown(link.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1',
                      isScrolled
                        ? 'text-ink-soft hover:text-ink hover:bg-surface-soft'
                        : 'text-white/80 hover:text-white hover:bg-white/10',
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn('w-3 h-3 transition-transform duration-200', isOpen && 'rotate-180')} />
                  </button>
                </div>
              )
            }

            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'text-brand-primary bg-brand-primary/8'
                    : isScrolled
                    ? 'text-ink-soft hover:text-ink hover:bg-surface-soft'
                    : 'text-white/80 hover:text-white hover:bg-white/10',
                )}
              >
                {link.label}
              </button>
            )
          })}
          <button
            onClick={() => handleNav('#contact')}
            className="ml-4 px-5 py-2 rounded-lg bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary/90 transition-colors"
          >
            Hubungi Kami
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={cn('md:hidden p-2 rounded-lg', isScrolled ? 'text-ink' : 'text-white')}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Full-width mega menu */}
      {activeDropdown && (
        <div
          className="hidden md:block absolute top-full left-0 right-0 bg-white border-t border-surface-line shadow-2xl"
          onMouseEnter={() => openDropdown(activeDropdown.label)}
          onMouseLeave={scheduleClose}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Left: items grid */}
              <div className="col-span-2">
                <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-5">
                  {activeDropdown.label}
                </p>
                <div
                  className={cn(
                    'grid gap-2',
                    activeDropdown.children!.length > 2 ? 'grid-cols-2' : 'grid-cols-1',
                  )}
                >
                  {activeDropdown.children!.map((child) => (
                    <button
                      key={child.href}
                      onClick={() => handleNav(child.href)}
                      className="group text-left flex items-start gap-3 p-4 rounded-xl hover:bg-surface-soft transition-colors"
                    >
                      <span
                        className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: child.color }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-ink group-hover:text-brand-primary transition-colors">
                          {child.label}
                        </p>
                        <p className="text-xs text-ink-muted mt-0.5">{child.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: featured CTA card */}
              <div className="col-span-1">
                <div className="h-full rounded-2xl bg-linear-to-br from-brand-dark to-brand-primary p-6 flex flex-col justify-between text-white">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Konsultasi</p>
                    <p className="text-lg font-bold leading-snug mb-2">
                      {activeDropdown.label === 'Products'
                        ? 'Butuh solusi infrastruktur terintegrasi?'
                        : 'Ingin tahu lebih lanjut tentang kami?'}
                    </p>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {activeDropdown.label === 'Products'
                        ? 'Tim kami siap membantu dari konsultasi hingga eksekusi proyek.'
                        : 'Kenali visi, misi, dan tim di balik PT Panca Punggawa Tirta.'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleNav('#contact')}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all duration-200"
                  >
                    Hubungi Kami
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-surface-line px-6 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label}>
                    <p className="px-4 pt-3 pb-1 text-xs font-bold uppercase tracking-widest text-ink-muted">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <button
                        key={child.href}
                        onClick={() => handleNav(child.href)}
                        className="w-full text-left pl-6 pr-4 py-2.5 rounded-lg text-sm font-medium text-ink-soft hover:text-ink hover:bg-surface-soft transition-colors flex items-center gap-2.5"
                      >
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: child.color }} />
                        {child.label}
                      </button>
                    ))}
                  </div>
                )
              }
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-sm font-medium text-ink-soft hover:text-ink hover:bg-surface-soft transition-colors"
                >
                  {link.label}
                </button>
              )
            })}
            <button
              onClick={() => handleNav('#contact')}
              className="mt-2 w-full px-4 py-3 rounded-lg bg-brand-primary text-white text-sm font-semibold"
            >
              Hubungi Kami
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
