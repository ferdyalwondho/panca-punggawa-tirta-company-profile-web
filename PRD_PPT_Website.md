# Product Requirements Document (PRD)
## PT Panca Punggawa Tirta — Company Profile Website
**Version:** 1.0  
**Date:** May 2026  
**Author:** Ferdy Alwondho (Chief Project Officer)  
**Status:** Ready for Development

---

## 1. Overview

### 1.1 Project Summary
Website company profile resmi untuk PT Panca Punggawa Tirta (PT PPT), perusahaan infrastruktur terintegrasi yang bergerak di 3 divisi: Piping Solutions, Solar Energy, dan IT Solutions. Website ini menjadi digital presence utama perusahaan, menggantikan kebutuhan fisik company profile untuk presentasi ke klien B2B (BUMN, kontraktor besar, pemerintah daerah).

### 1.2 Business Goal
- Memberikan kesan profesional dan modern kepada calon klien sebelum atau sesudah pertemuan
- Menjadi landing destination dari QR code di business card
- Menjadi referensi digital yang bisa di-share lewat WhatsApp/email ke procurement BUMN
- Scalable untuk dikembangkan menjadi full SSR + CMS di fase berikutnya

### 1.3 Target Audience
**Primary:** Procurement officer, project manager, dan decision maker di BUMN (Pertamina, PLN, PUPR, Waskita, dll) dan kontraktor besar  
**Secondary:** Kontraktor menengah swasta, pemerintah daerah (untuk PJU Solar), dan referral dari klien existing

---

## 2. Tech Stack

> **Referensi:** Samakan persis dengan repo portfolio Ferdy di `github.com/ferdyalwondho/Personal-Portofolio-Website-Web`

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | ^16.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^3.4.1 |
| Animation | Framer Motion | ^12.38.0 |
| UI Components | shadcn/ui + @base-ui/react | latest |
| Form | React Hook Form + Zod | latest |
| Email (contact form) | Resend | same as portfolio |
| Icons | Lucide React | ^1.14.0 |
| Font | Geist (Variable) | via next/font |
| Deployment | Vercel | — |
| Package Manager | npm | — |

### 2.1 Project Initialization

```bash
npx create-next-app@latest ppt-company-profile \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd ppt-company-profile
npm install framer-motion lucide-react react-hook-form @hookform/resolvers zod resend clsx tailwind-merge class-variance-authority tw-animate-css
npx shadcn@latest init
```

### 2.2 Environment Variables

```env
# .env.local
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=info@pancapunggawatirta.co.id
NEXT_PUBLIC_SITE_URL=https://ppt-company-profile.vercel.app
```

---

## 3. Project Structure

```
ppt-company-profile/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API (Resend)
│   ├── globals.css
│   ├── layout.tsx                # Root layout, metadata, fonts
│   └── page.tsx                  # Single page, compose all sections
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Divisions.tsx
│   │   ├── PipingSection.tsx
│   │   ├── SolarSection.tsx
│   │   ├── ITSection.tsx
│   │   ├── Projects.tsx
│   │   ├── Clients.tsx
│   │   ├── Leadership.tsx
│   │   └── Contact.tsx
│   ├── shared/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── DivisionCard.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ClientMarquee.tsx
│   └── ui/                       # shadcn/ui components
├── data/
│   ├── company.ts                # Info perusahaan, kontak, sosmed
│   ├── divisions.ts              # 3 divisi + layanan masing-masing
│   ├── projects.ts               # Selected works per divisi
│   └── clients.ts                # Daftar klien BUMN
├── lib/
│   └── utils.ts                  # cn() utility, shared helpers
├── public/
│   ├── logo/
│   │   └── ppt-logo.svg          # Logo PT PPT (motif anyaman 5 elemen)
│   └── images/
│       ├── piping/               # Foto produk & project piping
│       ├── solar/                # Foto/ilustrasi solar
│       └── it/                   # Ilustrasi IT
├── .env.example
├── .env.local                    # gitignore
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. Design System

### 4.1 Brand Colors

```ts
// tailwind.config.ts — extend colors
colors: {
  brand: {
    primary:  '#1B4F8F',   // Deep corporate blue (logo)
    dark:     '#0A2540',   // Cover/hero navy
    accent:   '#00B4D8',   // Cyan accent (tech / water / IT)
    solar:    '#FFB627',   // Solar amber
    'solar-dark': '#FF7A18',
    it:       '#7B61FF',   // IT purple
    'it-dark': '#4F46E5',
  },
  ink: {
    DEFAULT: '#0F1B2D',
    soft:    '#3A4A60',
    muted:   '#6B7A90',
  },
  surface: {
    DEFAULT: '#FFFFFF',
    soft:    '#F4F7FB',
    line:    '#E3E8EF',
  }
}
```

### 4.2 Typography

```ts
// app/layout.tsx
import { Geist, Geist_Mono } from 'next/font/google'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
```

- **Display/Hero:** Geist, weight 800, tracking tight
- **Heading:** Geist, weight 700
- **Body:** Geist, weight 400–500
- **Eyebrow:** uppercase, tracking widest, weight 600, color `brand.accent`

### 4.3 Animation

Gunakan Framer Motion sama persis dengan portfolio Ferdy:
- `fadeInUp` untuk section entry (viewport trigger, once: true)
- `staggerChildren` untuk card grids
- Smooth scroll antar section
- Hover effects pada cards (subtle scale + shadow)

---

## 5. Pages & Routing

Website ini **single page** (`app/page.tsx`) dengan anchor-based navigation. Tidak ada multi-page routing di fase 1.

```
/               → Full page dengan semua sections
/#about         → About & Visi Misi
/#divisions     → Overview 3 divisi
/#piping        → Piping detail + gallery
/#solar         → Solar detail + gallery
/#it            → IT detail + gallery
/#projects      → Selected works
/#clients       → Klien
/#leadership    → Tim
/#contact       → Kontak + form
```

> **Scalability note:** Struktur folder sudah didesain untuk migrasi ke multi-page route (`/divisions/piping`, `/divisions/solar`, dll) saat CMS diintegrasikan. Data sudah dipisahkan di `/data/*.ts` agar mudah diganti dengan API call ke CMS nantinya.

---

## 6. Sections Specification

### 6.1 Navbar

**Behavior:**
- Fixed top, backdrop blur saat scroll
- Logo PT PPT (SVG, motif anyaman 5 elemen) di kiri
- Nav links: About | Divisions | Projects | Clients | Contact
- Hamburger menu di mobile
- Active link highlight berdasarkan scroll position (IntersectionObserver)

**Content:**
```ts
navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Divisions', href: '#divisions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]
```

---

### 6.2 Hero Section

**Layout:** Full viewport height, dark gradient background (`brand.dark` → `brand.primary`), grid dots overlay (opacity 0.04)

**Content:**
```
[Tag pill] COMPANY PROFILE 2026
[H1 Display] Powering Infrastructure with
             Pipes, Solar & Code.
[Subtitle] Dari pipa PVC/HDPE untuk jaringan air bersih, ke energi
           terbarukan dan sistem digital terintegrasi — kami membangun
           fondasi infrastruktur Indonesia yang lebih berkelanjutan.
[CTA Buttons] [Lihat Layanan Kami →]  [Hubungi Kami]
[3 Pillar Cards] 01 Piping | 02 Solar | 03 IT
```

**Animation:** Stagger fade-in dari atas ke bawah

---

### 6.3 About Section

**Layout:** 2 kolom — kiri narasi + kanan stat cards

**Content:**
```
[Eyebrow] OUR STORY
[H2] Membangun Jaringan, Mengalirkan Kehidupan.
[Body ID] PT Panca Punggawa Tirta memulai usahanya pada awal tahun 2022...
          (teks dari compro, tanpa versi EN di body)

[Stat Cards]
  2022 / Tahun Didirikan
  3    / Divisi Layanan
  20+  / Klien BUMN & Korporat
  Nasional / Jangkauan Proyek

[Vision Card — dark]
  Visi: Berorientasi pada kepuasan pelanggan...
  (EN italic di bawah)

[Mission Card — light]
  Misi: Melalui kepemimpinan, inovasi, fokus...
  (EN italic di bawah)
```

---

### 6.4 Divisions Overview Section

**Layout:** 3 cards horizontal, accent bar top per divisi

**Content per card:**
```ts
divisions = [
  {
    number: '01',
    slug: 'piping',
    title: 'Piping Solutions',
    color: 'brand.primary / brand.accent',
    desc: 'PVC & HDPE pipe, fittings, dan aksesoris...',
    items: ['JIS AW, D, C', 'SNI S-16 s/d S-8', 'HDPE PN 12.5 & 16', 'Fittings TS & DV', 'Flange, socket, reducer'],
  },
  {
    number: '02',
    slug: 'solar',
    title: 'Solar Energy',
    color: 'brand.solar-dark / brand.solar',
    desc: 'Solusi energi terbarukan end-to-end...',
    items: ['On-grid solar', 'Off-grid & hybrid', 'Rooftop solar industri', 'PJU tenaga surya', 'Site survey & sizing'],
  },
  {
    number: '03',
    slug: 'it',
    title: 'IT Solutions',
    color: 'brand.it-dark / brand.it',
    desc: 'Layanan pengembangan digital dan integrasi sistem...',
    items: ['Website development', 'IoT monitoring', 'System integration', 'Dashboard & reporting', 'Custom enterprise solutions'],
  },
]
```

**"Why Integrated" callout** di bawah cards:
```
⚡ Mengapa Terintegrasi?
Sebuah jaringan distribusi air modern butuh pipa, sumber daya (solar bisa menggerakkan
pompa di daerah terpencil), dan sistem monitoring real-time. Dengan satu mitra,
koordinasi lebih cepat dan akuntabilitas lebih jelas.
```

---

### 6.5 Division Detail Sections

Setiap divisi punya **section detail sendiri** (inline di halaman, diakses via scroll/anchor).

#### 6.5.1 Piping Solutions

**Hero card:** Gradient biru, heading "PVC & HDPE Pipes, Fittings & Accessories.", deskripsi bilingual

**Service grid (2 kolom):**
- PVC Pipes — Standards (JIS, SNI)
- Fittings & HDPE
- Brand lineup: SUPRALON · PROVILON · SKYLON · EXCELLON

**Value props (2 cards):**
- Komplit Sesuai Standar
- Pengiriman Tepat Waktu

**Product Gallery:** Grid foto produk (6 foto — dari foto aktual perusahaan, placeholder dulu)

**Selected Works (3 cards):**
```ts
pipingProjects = [
  {
    badge: 'Government • PUPR',
    title: 'Proyek PUPR Kota Jambi',
    location: 'Jambi, Sumatera',
    type: 'Pipeline installation',
    desc: 'Pengadaan dan instalasi jaringan pipa air bersih...',
    image: '/images/piping/proj_pupr.jpg',
  },
  {
    badge: 'Aquaculture',
    title: 'Proyek Keramba Ikan Tuna — Biak, Papua',
    location: 'Biak, Papua',
    type: 'Floating HDPE infrastructure',
    desc: 'Pasokan pipa HDPE untuk struktur keramba apung...',
    image: '/images/piping/proj_biak.jpg',
  },
  {
    badge: 'Infrastructure • JICA Loan',
    title: 'Railway Double Tracking — Java South Line',
    location: 'Kroya – Kutoarjo (III)',
    type: 'JICA Loan No. IP-548',
    desc: 'Pasokan material pipa untuk pembangunan jalur ganda...',
    image: '/images/piping/proj_railway.jpg',
  },
]
```

#### 6.5.2 Solar Energy

**Hero card:** Gradient oranye, heading "Energi Surya untuk Industri & Publik.", bilingual

**Service grid (3×2 = 6 cards):**
- On-Grid Solar
- Off-Grid & Hybrid
- Rooftop Solar Industri
- PJU Tenaga Surya
- Site Survey & Sizing
- O&M Service

**Sinergi callout:**
```
⚡ Sinergi dengan Piping
Solar dapat menggerakkan pompa air di daerah yang tidak terjangkau jaringan PLN...
```

**Gallery + Project Card:**
- Gallery: 4 ilustrasi (rooftop, on-grid factory, PJU malam, off-grid dengan battery)
- 1 Project card:
```ts
{
  badge: 'Hybrid Solar System',
  title: 'Residential Hybrid Solar — Rumah Tinggal',
  location: 'Jakarta Selatan',
  type: 'On-grid + battery backup',
  desc: 'Instalasi sistem solar hybrid untuk hunian pribadi. Panel surya rooftop terhubung jaringan PLN dengan battery backup — memastikan pasokan listrik tetap tersedia saat pemadaman sekaligus menekan tagihan listrik bulanan.',
  image: null, // placeholder, foto menyusul
}
```

#### 6.5.3 IT Solutions

**Hero card:** Gradient ungu, heading "Sistem Digital, Terhubung & Terukur.", bilingual

**Service grid (3 cards):**
- Website Development
- IoT Monitoring
- System Integration

**Use Case callout:**
```
🔗 Use Case: Smart Pipeline + Solar
PIPING LAYER | ENERGY LAYER | DIGITAL LAYER
```

**Gallery + Project Cards:**
- Gallery: 4 ilustrasi (website mockup, IoT network, dashboard, system integration)
- Project card 1 (real):
```ts
{
  badge: 'Enterprise Web App',
  title: 'ERP Platform — PT Alita Praya Mitra',
  location: 'Jakarta',
  sector: 'Telekomunikasi',
  desc: 'Platform ERP terintegrasi mencakup Sales Pipeline, Project Management, e-Procurement, dan Asset Management (booking ruang meeting & kendaraan). Proven di lingkungan korporat — applicable untuk sektor konstruksi & infrastruktur.',
  image: null,
  tags: ['Sales Pipeline', 'Project Management', 'e-Procurement', 'Asset Management'],
}
```
- Project card 2 (IoT — tailored):
```ts
{
  badge: 'IoT Monitoring',
  title: 'Tailored Solution',
  desc: 'Solusi IoT monitoring kami dirancang custom sesuai topologi jaringan pipa & instalasi solar klien. Hubungi kami untuk konsultasi awal — tanpa biaya.',
  cta: 'Konsultasi Gratis →',
  ctaHref: '#contact',
}
```

---

### 6.6 Mining Section

**Layout:** Dark hero card + spesifikasi batubara (table) + Mining Partners

**Coal Spec Table:**
```
Parameter | Grade A (GAR 5,400) | Grade B (GAR 5,082) | Grade C (GAR 4,800) | Rejection
[data dari compro...]
```

**Gallery:** 6 foto operasi tambang Palu, Sulawesi (placeholder dulu)

---

### 6.7 Clients Section

**Layout:** Animated marquee (logo/nama klien) — pakai pola sama dengan portfolio Ferdy (ClientMarquee)

**Clients:**
```ts
clients = [
  'PERTAMINA', 'PLN', 'PGN', 'PUPR',
  'WASKITA', 'WIKA', 'PP', 'ADHI',
  'HUTAMA KARYA', 'NINDYA', 'ABIPRAYA', 'REKIND',
  'KRAKATAU STEEL', 'INDONESIA POWER', 'PAL INDONESIA', 'HAKAASTON',
  'WASKITA PRECAST', 'HK INFRASTRUKTUR', 'HK REALTINDO', 'BANK BRI & BNI',
]
```

---

### 6.8 Leadership Section

**Layout:** 2 cards side by side

```ts
leaders = [
  {
    initials: 'RP',
    name: 'Reza Permana Putra',
    title: 'Chief Executive Officer & Chief Commercial Officer',
    bio: 'Memimpin strategi commercial dan operasi perusahaan sejak pendirian di 2022. Membangun jaringan kemitraan dengan BUMN dan kontraktor besar di sektor konstruksi, energi, dan infrastruktur publik di Indonesia.',
    gradient: 'from-brand-primary to-brand-accent',
  },
  {
    initials: 'FA',
    name: 'Ferdy Alwondho',
    title: 'Chief Project Officer',
    bio: 'Memimpin eksekusi proyek dan pengembangan divisi Solar Energy & IT Solutions. Latar belakang teknis di solar panel installation dan teknologi informasi — menjembatani infrastruktur fisik dengan sistem digital terintegrasi.',
    gradient: 'from-brand-accent to-brand-it',
  },
]
```

**Mission quote:**
```
"Through leadership, innovation, focus, and teamwork — we enhance value 
for our customers, employees, and shareholders."
— OUR MISSION
```

---

### 6.9 Contact Section

**Layout:** Dark background, 4 info blocks + contact form

**Info blocks:**
```ts
contactInfo = {
  office: 'Jl. Tanah Medeka No. 4A, RT 11 RW 04, Rambutan, Ciracas, Jakarta Timur',
  phone: {
    company: '(021) 29843074',
    ferdy: '+62 821 6276 0450',
    label: 'Ferdy Alwondho — Chief Project Officer',
  },
  email: {
    general: 'info@pancapunggawatirta.co.id',
    project: 'project@pancapunggawatirta.co.id',
    sales: 'sales@pancapunggawatirta.co.id',
  },
  web: {
    url: 'pancapunggawatirta.co.id',
    linkedin: 'PT Panca Punggawa Tirta',
    instagram: '@pancapunggawatirta',
  },
}
```

**Contact Form (React Hook Form + Zod + Resend):**
```ts
// Schema
const contactSchema = z.object({
  name:    z.string().min(2, 'Nama minimal 2 karakter'),
  company: z.string().optional(),
  email:   z.string().email('Email tidak valid'),
  phone:   z.string().optional(),
  interest: z.enum(['piping', 'solar', 'it', 'mining', 'general']),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
})
```

Fields: Nama*, Perusahaan, Email*, No. HP, Minat Layanan (dropdown), Pesan*

**API Route (`app/api/contact/route.ts`):** Kirim ke `CONTACT_TO_EMAIL` via Resend, sama persis pola dari portfolio Ferdy.

---

### 6.10 Footer

**Content:**
- Logo + tagline: *"Pipes, Solar & Code — Infrastructure for what's next."*
- Quick links: About | Divisions | Projects | Contact
- Info kontak singkat
- Copyright: `© 2026 PT Panca Punggawa Tirta. All rights reserved.`

---

## 7. Data Layer (`/data/*.ts`)

Semua konten dipisahkan dari komponen untuk memudahkan migrasi ke CMS nantinya.

```ts
// data/company.ts
export const company = {
  name: 'PT Panca Punggawa Tirta',
  tagline: 'Powering Infrastructure with Pipes, Solar & Code.',
  established: 2022,
  address: 'Jl. Tanah Medeka No. 4A, RT 11 RW 04, Rambutan, Ciracas, Jakarta Timur',
  phone: '(021) 29843074',
  email: 'info@pancapunggawatirta.co.id',
  website: 'pancapunggawatirta.co.id',
  instagram: '@pancapunggawatirta',
  linkedin: 'PT Panca Punggawa Tirta',
}

// data/divisions.ts  → array of Division objects
// data/projects.ts   → Record<divisionSlug, Project[]>
// data/clients.ts    → string[] atau Client[]
```

> **Scalability:** Di fase CMS, ganti `import` dari `/data/*.ts` menjadi `fetch()` ke Sanity/Contentful di Server Component. Struktur type sudah identik.

---

## 8. SEO & Metadata

```ts
// app/layout.tsx
export const metadata: Metadata = {
  title: 'PT Panca Punggawa Tirta — Piping, Solar & IT Solutions',
  description: 'Solusi infrastruktur terintegrasi: pipa PVC/HDPE, solar energy, dan IT solutions untuk BUMN dan proyek konstruksi nasional.',
  keywords: ['pipa PVC', 'HDPE', 'solar panel', 'IoT monitoring', 'infrastruktur', 'BUMN', 'kontraktor'],
  openGraph: {
    title: 'PT Panca Punggawa Tirta',
    description: 'Pipes, Solar & Code — Infrastructure for what\'s next.',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'PT Panca Punggawa Tirta',
    locale: 'id_ID',
    type: 'website',
  },
}
```

---

## 9. Responsive Design

| Breakpoint | Layout |
|-----------|--------|
| Mobile (<768px) | Single column, hamburger nav |
| Tablet (768–1024px) | 2-column grids, condensed hero |
| Desktop (>1024px) | Full layout sesuai spec |

---

## 10. Performance & Quality

- **Image:** Semua gambar pakai `next/image` dengan `priority` di hero
- **Font:** Geist via `next/font` (zero layout shift)
- **Animation:** Gunakan `will-change: transform` + viewport trigger (`once: true`) agar tidak animasi ulang
- **Lighthouse target:** Performance ≥90, Accessibility ≥90, SEO ≥95

---

## 11. Scalability Roadmap (Fase Berikutnya)

| Fase | Fitur | Estimasi |
|------|-------|----------|
| 1 (sekarang) | Static site, Vercel domain, contact form via Resend | ✅ Scope PRD ini |
| 2 | Custom domain `pancapunggawatirta.co.id`, Google Analytics | +1 sprint |
| 3 | CMS (Sanity.io recommended) untuk update konten tanpa kode | +2–3 sprint |
| 4 | Multi-page routing per divisi, blog/artikel, downloadable compro PDF | +2 sprint |
| 5 | Bahasa bilingual ID/EN dengan next-intl | +1 sprint |

---

## 12. Development Checklist

```
SETUP
[ ] Init Next.js project dengan config di atas
[ ] Install semua dependencies
[ ] Setup Tailwind config (brand colors, typography)
[ ] Setup shadcn/ui
[ ] Buat struktur folder sesuai PRD
[ ] Setup .env.local

DATA LAYER
[ ] data/company.ts
[ ] data/divisions.ts
[ ] data/projects.ts
[ ] data/clients.ts

COMPONENTS
[ ] Navbar (dengan smooth scroll + active state)
[ ] Footer
[ ] SectionHeader (reusable eyebrow + heading)
[ ] DivisionCard
[ ] ProjectCard
[ ] ClientMarquee (animated)

SECTIONS
[ ] Hero
[ ] About (dengan stat cards + visi misi)
[ ] Divisions Overview
[ ] Piping Detail + Gallery + Projects
[ ] Solar Detail + Gallery + Project
[ ] IT Detail + Gallery + Projects
[ ] Mining (table spec)
[ ] Clients (marquee)
[ ] Leadership
[ ] Contact (form + info)

API
[ ] app/api/contact/route.ts (Resend)

DEPLOY
[ ] Push ke GitHub
[ ] Import ke Vercel
[ ] Set environment variables di Vercel
[ ] Test contact form di production
[ ] Verifikasi mobile responsive
```

---

## 13. Reference Assets

| Asset | Source | Status |
|-------|--------|--------|
| Logo PT PPT (SVG) | Rekonstruksi dari compro | Perlu dibuat / minta file asli dari Reza |
| Foto piping | Extract dari compro PDF | Tersedia (resolusi terbatas) |
| Foto project piping | Extract dari compro PDF | Tersedia |
| Ilustrasi solar (SVG) | Dibuat custom | Tersedia di compro HTML |
| Ilustrasi IT (SVG) | Dibuat custom | Tersedia di compro HTML |
| Foto project solar | Rumah tinggal Jaksel | **Perlu diambil / minta ke klien** |
| Foto ERP PT Alita | Screenshot app | **Perlu screenshot dari Ferdy** |
| Foto mining | Extract dari compro PDF | Tersedia (kualitas bervariasi) |

---

*Dokumen ini adalah acuan utama untuk development. Semua perubahan scope harus diupdate di sini sebelum diimplementasikan.*
