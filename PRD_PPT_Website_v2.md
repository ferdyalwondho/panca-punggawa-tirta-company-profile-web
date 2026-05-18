# Product Requirements Document (PRD)
## PT Panca Punggawa Tirta — Company Profile Website
**Version:** 2.0 (Updated)
**Date:** May 2026
**Author:** Ferdy Alwondho (Chief Project Officer)
**Status:** Ready for Development
**Supersedes:** PRD v1.0

> **Catatan:** PRD ini merupakan update dari v1.0, mencerminkan seluruh perubahan konten, branding, dan struktur yang telah final di Company Profile 2026 v8.

---

## 1. Overview

### 1.1 Project Summary
Website company profile resmi PT Panca Punggawa Tirta — perusahaan infrastruktur terintegrasi dengan 3 divisi: Piping Solutions, Solar Energy, dan IT Solutions. Website ini menjadi digital presence utama dan landing destination dari QR code di business card.

### 1.2 Perubahan Major dari PRD v1.0

| Item | v1.0 (Lama) | v2.0 (Final) |
|------|-------------|--------------|
| Domain/email | pancapunggawatirta.co.id | **ppt.co.id** |
| Contact person | Ferdy Alwondho | **Reza Permana Putra** |
| Contact phone | +62 821 6276 0450 | **+62 821 1220 2282** |
| Jabatan Reza | CEO / Direktur Utama | **CEO & Chief Commercial Officer** |
| Jabatan Ferdy | Project Director | **Chief Project Officer** |
| Logo | Rekonstruksi SVG | **Logo PNG asli** |
| Klien | 20 klien (banyak) | **7 klien spesifik** |
| Divisi Piping — produk | JIS/SNI generic | **List spesifik (7 item)** |
| Mining section | Ada | **Dihapus** |
| Stat "20+ Klien" | Ada | **Dihapus** |

---

## 2. Tech Stack

> Identik dengan portfolio Ferdy: `github.com/ferdyalwondho/Personal-Portofolio-Website-Web`

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | ^16.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^3.4.1 |
| Animation | Framer Motion | ^12.38.0 |
| UI Components | shadcn/ui + @base-ui/react | latest |
| Form | React Hook Form + Zod | latest |
| Email | Resend | same as portfolio |
| Icons | Lucide React | ^1.14.0 |
| Font | Geist (Variable) | via next/font |
| Deployment | Vercel | — |

### 2.1 Project Initialization

```bash
npx create-next-app@latest ppt-company-profile \
  --typescript --tailwind --eslint --app \
  --src-dir=false --import-alias="@/*"

cd ppt-company-profile
npm install framer-motion lucide-react react-hook-form \
  @hookform/resolvers zod resend clsx tailwind-merge \
  class-variance-authority tw-animate-css
npx shadcn@latest init
```

### 2.2 Environment Variables

```env
# .env.local
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=info@ppt.co.id
NEXT_PUBLIC_SITE_URL=https://ppt-company-profile.vercel.app
```

---

## 3. Project Structure

```
ppt-company-profile/
├── app/
│   ├── api/contact/route.ts      # Contact form (Resend)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
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
│   │   └── ClientCard.tsx
│   └── ui/                       # shadcn/ui
├── data/
│   ├── company.ts
│   ├── divisions.ts
│   ├── projects.ts
│   └── clients.ts
├── lib/utils.ts
└── public/
    ├── logo/
    │   ├── ppt-logo.png          # Logo biru (light bg)
    │   └── ppt-logo-white.png    # Logo putih (dark bg)
    └── images/
        ├── piping/
        ├── solar/
        └── it/
```

---

## 4. Design System

### 4.1 Brand Colors

```ts
// tailwind.config.ts
colors: {
  brand: {
    primary:      '#1B4F8F',
    dark:         '#0A2540',
    accent:       '#00B4D8',
    solar:        '#FFB627',
    'solar-dark': '#FF7A18',
    it:           '#7B61FF',
    'it-dark':    '#4F46E5',
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

---

## 5. Data Layer

### 5.1 `data/company.ts`

```ts
export const company = {
  name: 'PT Panca Punggawa Tirta',
  tagline: 'Powering Infrastructure with Pipes, Solar & Code.',
  established: 2022,
  address: 'Jl. Tanah Medeka No. 4A, RT 11 RW 04, Rambutan, Ciracas, Jakarta Timur',
  phone: '(021) 29843074',
  email: {
    general: 'info@ppt.co.id',
    project: 'project@ppt.co.id',
    sales:   'sales@ppt.co.id',
  },
  website: 'ppt.co.id',
  instagram: '@pancapunggawatirta',
  linkedin: 'PT Panca Punggawa Tirta',
}
```

### 5.2 `data/divisions.ts`

```ts
// Piping list (FINAL — sesuai compro v8)
const pipingItems = [
  'PVC Pipe SNI Standard',
  'PVC AW, D, C Standard',
  'Sewerage Pipes',
  'HDPE Pipes',
  'Fiber Optics Pipes',
  'Valve and Flange',
  'Home Connection for Water Supply',
]

// Piping FITTINGS & HDPE
const pipingFittings = [
  'HDPE Pipes PE-100 & PE-80',
  'Water Supply',
  'Gas Pipes',
  'Fiber Optics',
]

// Brand lineup (FINAL — Provilon & Skylon dihapus)
const pipingBrands = ['SUPRALON', 'EXCELLON']

// Solar services (6 items)
const solarItems = [
  'On-Grid Solar',
  'Off-Grid & Hybrid',
  'Rooftop Solar Industri',
  'PJU Tenaga Surya',
  'Site Survey & Sizing',
  'O&M Service',
]

// IT services
const itItems = [
  'Website Development',
  'IoT Monitoring',
  'System Integration',
]
```

### 5.3 `data/projects.ts`

```ts
// PIPING PROJECTS (3 proyek nyata)
const pipingProjects = [
  {
    badge: 'Government • PUPR',
    title: 'Proyek PUPR Kota Jambi',
    location: 'Jambi, Sumatera',
    type: 'Pipeline installation',
    desc: 'Pengadaan dan instalasi jaringan pipa air bersih untuk infrastruktur publik Kota Jambi sebagai bagian dari program Kementerian PUPR.',
    image: '/images/piping/proj_pupr.jpg',
  },
  {
    badge: 'Aquaculture',
    title: 'Proyek Keramba Ikan Tuna — Biak, Papua',
    location: 'Biak, Papua',
    type: 'Floating HDPE infrastructure',
    desc: 'Pasokan pipa HDPE untuk struktur keramba apung ikan tuna. Material tahan korosi air laut dengan umur pakai panjang di kondisi lingkungan ekstrem.',
    image: '/images/piping/proj_biak.jpg',
  },
  {
    badge: 'Infrastructure • JICA Loan',
    title: 'Railway Double Tracking — Java South Line',
    location: 'Kroya – Kutoarjo (III)',
    type: 'JICA Loan No. IP-548',
    desc: 'Pasokan material pipa untuk pembangunan jalur ganda kereta api Lintas Selatan Jawa, dibiayai oleh pinjaman JICA.',
    image: '/images/piping/proj_railway.jpg',
  },
]

// SOLAR PROJECTS (1 proyek nyata)
const solarProjects = [
  {
    badge: 'Hybrid Solar System',
    title: 'Residential Hybrid Solar — Rumah Tinggal',
    location: 'Jakarta Selatan',
    type: 'On-grid + battery backup (SunSynk + Freedom)',
    desc: 'Instalasi sistem solar hybrid untuk hunian pribadi. Panel surya rooftop terhubung jaringan PLN (on-grid) dengan battery backup SunSynk dan Freedom battery storage.',
    image: '/images/solar/solar_install_residential.jpg',
    isReal: true,
  },
]

// IT PROJECTS (1 nyata + 1 tailored)
const itProjects = [
  {
    badge: 'Enterprise Web App',
    title: 'ERP Platform — PT Alita Praya Mitra',
    location: 'Jakarta',
    sector: 'Telekomunikasi',
    desc: 'Platform ERP terintegrasi mencakup Sales Pipeline, Project Management, e-Procurement, dan Asset Management (booking ruang meeting & kendaraan).',
    tags: ['Sales Pipeline', 'Project Management', 'e-Procurement', 'Asset Management'],
    image: '/images/it/it_app_alita.jpg',
    isReal: true,
  },
  {
    badge: 'IoT Monitoring',
    title: 'Tailored Solution',
    desc: 'Solusi IoT monitoring dirancang custom sesuai topologi jaringan pipa & instalasi solar klien. Hubungi kami untuk konsultasi awal — tanpa biaya.',
    cta: 'Konsultasi Gratis →',
    ctaHref: '#contact',
    isReal: false,
  },
]
```

### 5.4 `data/clients.ts`

```ts
// FINAL: hanya 7 klien (TIDAK LEBIH)
export const clients = [
  {
    name: 'Kementerian PUPR',
    logo: '/images/clients/logo_pupr.png',
    sector: 'Government',
  },
  {
    name: 'Perumda Tirta Patriot',
    subtitle: 'Kota Bekasi',
    logo: '/images/clients/logo_tirta_patriot.png',
    sector: 'Water Utility',
  },
  {
    name: 'PT LEN Rekaprima Semesta',
    logo: '/images/clients/logo_len_rekaprima.png',
    sector: 'Engineering',
  },
  {
    name: 'PT Wijaya Karya (Persero) Tbk',
    logo: '/images/clients/logo_wika.png',
    sector: 'Construction',
  },
  {
    name: 'PT PP (Persero) Tbk',
    logo: '/images/clients/logo_pp.png',
    sector: 'Construction',
  },
  {
    name: 'PT Alita Praya Mitra',
    logo: '/images/clients/logo_alita.png',
    sector: 'Telecommunications',
  },
  {
    name: 'PT Anugerah Mahameru Nusantara',
    logo: '/images/clients/logo_mahameru.png',
    sector: 'Infrastructure',
  },
]
```

### 5.5 `data/leadership.ts`

```ts
export const leaders = [
  {
    initials: 'RP',
    name: 'Reza Permana Putra',
    title: 'Chief Executive Officer & Chief Commercial Officer',
    phone: '+62 821 1220 2282',
    bio: 'Memimpin strategi commercial dan operasi perusahaan sejak pendirian di 2022. Membangun jaringan kemitraan dengan BUMN dan kontraktor besar di sektor konstruksi, energi, dan infrastruktur publik di Indonesia.',
    gradient: 'from-brand-primary to-brand-accent',
  },
  {
    initials: 'FA',
    name: 'Ferdy Alwondho',
    title: 'Chief Project Officer',
    phone: '+62 821 6276 0450',
    bio: 'Memimpin eksekusi proyek dan pengembangan divisi Solar Energy & IT Solutions. Latar belakang teknis di solar panel installation dan teknologi informasi.',
    gradient: 'from-brand-accent to-brand-it',
  },
]
```

---

## 6. Sections Specification

### 6.1 Navbar

```ts
navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Divisions', href: '#divisions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]
```

- Logo: `ppt-logo-white.png` pada dark bg, `ppt-logo.png` pada light bg
- CTA button: "Hubungi Kami" → `#contact`
- Fixed top, backdrop blur on scroll, hamburger pada mobile

---

### 6.2 Hero Section

```
[Tag] COMPANY PROFILE 2026
[H1] Powering Infrastructure with
     Pipes, Solar & Code.
[Subtitle] Dari pipa PVC/HDPE untuk jaringan air bersih...
[CTA] [Lihat Layanan Kami →]  [Hubungi Kami]
[3 Pillars] 01 Piping Solutions | 02 Solar Energy | 03 IT Solutions
```

---

### 6.3 About Section

**Stat cards:** (⚠️ HANYA 3 stat — "20+ Klien" DIHAPUS)
```
2022        / Tahun Didirikan / Established
3           / Divisi Layanan / Service Divisions
Nasional    / Jangkauan Proyek / Project Coverage
```

**Teks narasi:** Bahasa Indonesia saja (tanpa blok EN di body)

**Kalimat spesifik:**
> "...kami memperluas layanan ke **Solar Energy** serta **IT Solutions** dan tetap berakar pada komitmen awal..."

**Visi & Misi:** Bilingual (ID utama, EN italic di bawah)

---

### 6.4 Divisions Overview

3 kartu dengan list per divisi:

**Piping (biru):** 7 item → PVC SNI, PVC AW/D/C, Sewerage, HDPE, Fiber Optics, Valve & Flange, Home Connection
**Solar (oranye):** 5 item → On-grid, Off-grid, Rooftop, PJU, Site Survey
**IT (ungu):** 5 item → Website, IoT, System Integration, Dashboard, Custom Enterprise

**"Why Integrated?" callout** tetap ada di bawah 3 cards.

---

### 6.5 Piping Section (Detail)

**Hero:** Gradient biru, heading "PVC & HDPE Pipes, Fittings & Accessories."
**Brand:** SUPRALON & EXCELLON saja (Provilon & Skylon tidak ada)

**Spec table (2 kolom):**
- Kiri: PVC Pipes — Standards (JIS: AW, D, C | SNI S-16 s/d S-8 | Klas A, B)
- Kanan: FITTINGS & HDPE (HDPE Pipes PE-100 & PE-80 | Water Supply | Gas Pipes | Fiber Optics)

**Product Gallery (6 foto):**
- Kiri besar: `fittings_collection.jpg`
- Atas kanan: `truck_trailer_pipes.jpg` ← (G3, pipa di atas truck trailer)
- Tengah kanan atas: `gate_valve_kitz.jpg`
- Tengah kanan bawah: `meter_install.jpg`
- Bawah kiri: `purple_pipes.jpg`
- Bawah kanan: `flange_stacks.jpg` ← (pindah dari atas-kanan)

**Selected Works (3 project cards):**
- Proyek PUPR Kota Jambi
- Keramba Ikan Tuna — Biak, Papua
- Railway Double Tracking — Java South Line (JICA)

---

### 6.6 Solar Energy Section (Detail)

**Hero:** Gradient oranye `#FF7A18 → #FFB627`

**6 Service Cards (3×2):**
On-Grid Solar | Off-Grid & Hybrid | Rooftop Solar Industri
PJU Tenaga Surya | Site Survey & Sizing | O&M Service

**Sinergi callout:**
> "⚡ Sinergi dengan Piping — Solar dapat menggerakkan pompa air di daerah yang tidak terjangkau jaringan PLN..."

**Gallery + Project Card:**

Gallery (4 foto real):
- `solar_install_residential.jpg` (G6 — 3 teknisi di atap rumah)
- `solar_install_rooftop.jpg` (G7 — 2 teknisi atap seng)
- `solar_inverter_battery.jpg` (G8 — SunSynk + Freedom inverter/battery)
- `solar_install_panel.jpg` (G9 — 2 teknisi helm kuning)

Project Card (1 nyata):
```
Badge: Hybrid Solar System
Title: Residential Hybrid Solar — Rumah Tinggal
Location: Jakarta Selatan
Type: On-grid + battery backup (SunSynk + Freedom)
Desc: Instalasi sistem solar hybrid untuk hunian pribadi...
Photo: solar_install_residential.jpg
```

---

### 6.7 IT Solutions Section (Detail)

**Hero:** Gradient ungu `#4F46E5 → #7B61FF`

**3 Service Cards:**
Website Development | IoT Monitoring | System Integration

**Use Case callout — Smart Pipeline + Solar:**
```
PIPING LAYER  |  ENERGY LAYER  |  DIGITAL LAYER
Sensor pipa      Solar + battery   Dashboard real-time
```

**Gallery + Project Cards:**

Gallery (4 screenshot real):
- `it_web_ppt.jpg` (G10 — website PPT)
- `it_app_alita.jpg` (G11 — Alita Partner Onboarding dashboard)
- `it_app_aviat1.jpg` (G12 — Aviat Networks project dashboard)
- `it_app_aviat2.jpg` (G13 — Aviat Networks project detail)

Project Card 1 (nyata):
```
Badge: Enterprise Web App
Title: ERP Platform — PT Alita Praya Mitra
Location: Jakarta • Sektor Telekomunikasi
Tags: Sales Pipeline | Project Management | e-Procurement | Asset Management
Photo: it_app_alita.jpg
```

Project Card 2 (tailored):
```
Badge: IoT Monitoring
Title: Tailored Solution
Desc: Solusi IoT monitoring dirancang custom...
CTA: Konsultasi Gratis → #contact
```

---

### 6.8 Clients Section

⚠️ **HANYA 7 KLIEN — TIDAK LEBIH**

**Layout:** 4 kartu baris 1, 3 kartu baris 2 (centered)

| Baris | Klien | Logo |
|-------|-------|------|
| 1 | Kementerian PUPR | `logo_pupr.png` (G19 — kuning-biru) |
| 1 | Perumda Tirta Patriot Bekasi | `logo_tirta_patriot.png` (G15) |
| 1 | PT LEN Rekaprima Semesta | `logo_len_rekaprima.png` (G16) |
| 1 | PT Wijaya Karya (Persero) Tbk | `logo_wika.png` (G17) |
| 2 | PT PP (Persero) Tbk | `logo_pp.png` (G18) |
| 2 | PT Alita Praya Mitra | `logo_alita.png` (G4) |
| 2 | PT Anugerah Mahameru Nusantara | `logo_mahameru.png` (G5) |

---

### 6.9 Leadership Section

```
[Reza Permana Putra]          [Ferdy Alwondho]
Chief Executive Officer &     Chief Project Officer
Chief Commercial Officer
```

**Mission quote:**
> "Through leadership, innovation, focus, and teamwork — we enhance value for our customers, employees, and shareholders."

---

### 6.10 Contact Section

**Info blocks:**
```ts
office:  'Jl. Tanah Medeka No. 4A, RT 11 RW 04, Rambutan, Ciracas, Jakarta Timur'
phone:   {
  company: '(021) 29843074',
  contact: 'Reza Permana Putra — CEO & CCO',  // ← bukan Ferdy
  mobile:  '+62 821 1220 2282',               // ← nomor Reza
}
email:   {
  general: 'info@ppt.co.id',      // ← bukan @pancapunggawatirta
  project: 'project@ppt.co.id',
  sales:   'sales@ppt.co.id',
}
web: {
  url:       'ppt.co.id',         // ← bukan pancapunggawatirta.co.id
  linkedin:  'PT Panca Punggawa Tirta',
  instagram: '@pancapunggawatirta',
}
```

**Contact Form schema:**
```ts
const contactSchema = z.object({
  name:     z.string().min(2),
  company:  z.string().optional(),
  email:    z.string().email(),
  phone:    z.string().optional(),
  interest: z.enum(['piping', 'solar', 'it', 'general']),
  message:  z.string().min(10),
})
```

**API Route:** `app/api/contact/route.ts` — kirim ke `CONTACT_TO_EMAIL` via Resend.

---

### 6.11 Footer

```
[Logo ppt.co.id]  Pipes, Solar & Code — Infrastructure for what's next.
Quick links: About | Divisions | Projects | Clients | Contact
© 2026 PT Panca Punggawa Tirta. All rights reserved.
```

⚠️ Footer brand text: **ppt.co.id** (bukan pancapunggawatirta.co.id)

---

## 7. Assets

### 7.1 Logo

| File | Usage |
|------|-------|
| `ppt-logo.png` | Header pada light background |
| `ppt-logo-white.png` | Header pada dark background (Hero, Contact) |

Logo asli: motif anyaman 4-panel biru. File PNG siap pakai dari compro.

### 7.2 Foto Piping

| File | Keterangan |
|------|-----------|
| `fittings_collection.jpg` | PVC fittings collection (dari compro lama) |
| `truck_trailer_pipes.jpg` | Pipa hitam di atas truck trailer (G3) |
| `gate_valve_kitz.jpg` | Gate valve KITZ 6" (foto upload) |
| `meter_install.jpg` | Water meter assembly di lantai (foto upload) |
| `flange_stacks.jpg` | Tumpukan flange galvanis (foto upload) |
| `purple_pipes.jpg` | PVC purple + grey pipes (dari compro lama) |
| `proj_pupr.jpg` | Project PUPR Jambi |
| `proj_biak.jpg` | Project Keramba Biak |
| `proj_railway.jpg` | Project Railway Java South |

### 7.3 Foto Solar

| File | Keterangan | Source |
|------|-----------|--------|
| `solar_install_residential.jpg` | 3 teknisi instalasi di atap genteng | G6 |
| `solar_install_rooftop.jpg` | 2 teknisi atap seng | G7 |
| `solar_inverter_battery.jpg` | SunSynk inverter + Freedom battery | G8 |
| `solar_install_panel.jpg` | 2 teknisi helm kuning | G9 |

### 7.4 Foto IT

| File | Keterangan | Source |
|------|-----------|--------|
| `it_web_ppt.jpg` | Screenshot website PPT | G10 |
| `it_app_alita.jpg` | Alita Partner Onboarding dashboard | G11 |
| `it_app_aviat1.jpg` | Aviat Networks project management | G12 |
| `it_app_aviat2.jpg` | Aviat Networks project detail | G13 |

### 7.5 Logo Klien

| File | Klien | Source |
|------|-------|--------|
| `logo_pupr.png` | Kementerian PUPR | G19 (kuning-biru, "Sigap Membangun Negeri") |
| `logo_tirta_patriot.png` | Perumda Tirta Patriot | G15 |
| `logo_len_rekaprima.png` | PT LEN Rekaprima Semesta | G16 |
| `logo_wika.png` | PT Wijaya Karya | G17 |
| `logo_pp.png` | PT PP (Persero) Tbk | G18 |
| `logo_alita.png` | PT Alita Praya Mitra | G4 |
| `logo_mahameru.png` | PT Anugerah Mahameru Nusantara | G5 |

---

## 8. SEO & Metadata

```ts
export const metadata: Metadata = {
  title: 'PT Panca Punggawa Tirta — Piping, Solar & IT Solutions',
  description: 'Solusi infrastruktur terintegrasi: pipa PVC/HDPE, solar energy, dan IT solutions untuk BUMN dan proyek konstruksi nasional.',
  keywords: ['pipa PVC', 'HDPE', 'solar panel', 'IoT monitoring', 'infrastruktur', 'BUMN', 'ppt.co.id'],
  openGraph: {
    title: 'PT Panca Punggawa Tirta',
    description: "Pipes, Solar & Code — Infrastructure for what's next.",
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

## 10. Development Checklist

```
SETUP
[ ] Init Next.js + dependencies
[ ] Tailwind config (brand colors)
[ ] shadcn/ui init
[ ] Folder structure + env

DATA LAYER
[ ] data/company.ts          ← email @ppt.co.id, website ppt.co.id
[ ] data/divisions.ts        ← piping 7 item, brands 2 saja
[ ] data/projects.ts         ← 3 piping + 1 solar + 2 IT
[ ] data/clients.ts          ← HANYA 7 klien
[ ] data/leadership.ts       ← Reza CEO&CCO + Ferdy CPO

ASSETS
[ ] Copy semua foto dari compro ke /public/images/
[ ] Copy semua logo klien ke /public/images/clients/
[ ] Logo ppt-logo.png & ppt-logo-white.png

COMPONENTS
[ ] Navbar (logo + links + CTA)
[ ] Footer (ppt.co.id branding)
[ ] SectionHeader
[ ] DivisionCard (3 warna: biru/oranye/ungu)
[ ] ProjectCard (foto + badge + desc)
[ ] ClientCard (logo + nama)

SECTIONS
[ ] Hero (gradient dark, 3 pillars)
[ ] About (3 stat cards saja, narasi ID, visi misi bilingual)
[ ] Divisions Overview (3 cards + Why Integrated callout)
[ ] Piping (hero biru + spec + 6 foto gallery + 3 projects)
[ ] Solar (hero oranye + 6 cards + sinergi + 4 foto + 1 project)
[ ] IT (hero ungu + 3 cards + use case + 4 screenshots + 2 projects)
[ ] Clients (4+3 grid, 7 logo)
[ ] Leadership (2 cards: Reza CEO&CCO + Ferdy CPO)
[ ] Contact (4 info blocks + form + Reza sebagai contact person)

API & FORM
[ ] app/api/contact/route.ts (Resend → info@ppt.co.id)
[ ] Form validation (React Hook Form + Zod)

DEPLOY
[ ] Push ke GitHub
[ ] Import ke Vercel
[ ] Set env vars (RESEND_API_KEY, CONTACT_TO_EMAIL=info@ppt.co.id)
[ ] Test contact form production
[ ] Test mobile responsive
[ ] Lighthouse audit (target: Performance ≥90)
```

---

## 11. Scalability Roadmap

| Fase | Fitur |
|------|-------|
| 1 ✅ | Static site, Vercel domain, contact form Resend |
| 2 | Custom domain `ppt.co.id`, Google Analytics |
| 3 | CMS (Sanity.io) — update konten tanpa kode |
| 4 | Multi-page routing per divisi, downloadable compro PDF |
| 5 | Bilingual ID/EN dengan next-intl |

---

*PRD v2.0 — final, mencerminkan compro v8. Semua perubahan dari v1.0 sudah diintegrasikan.*
