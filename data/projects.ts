export type Project = {
  badge: string
  title: string
  location?: string
  sector?: string
  type?: string
  desc: string
  image: string | null
  tags?: string[]
  cta?: string
  ctaHref?: string
}

export const pipingProjects: Project[] = [
  {
    badge: 'Government • PUPR',
    title: 'Proyek PUPR Kota Jambi',
    location: 'Jambi, Sumatera',
    type: 'Pipeline installation',
    desc: 'Pengadaan dan instalasi jaringan pipa air bersih untuk program SPAM (Sistem Penyediaan Air Minum) Kota Jambi. Material: PVC SNI diameter 63–200mm.',
    image: null,
  },
  {
    badge: 'Aquaculture',
    title: 'Proyek Keramba Ikan Tuna — Biak, Papua',
    location: 'Biak, Papua',
    type: 'Floating HDPE infrastructure',
    desc: 'Pasokan pipa HDPE untuk struktur keramba apung budidaya ikan tuna di perairan Biak. HDPE PN 12.5 diameter besar untuk struktur yang tahan terhadap kondisi laut.',
    image: null,
  },
  {
    badge: 'Infrastructure • JICA Loan',
    title: 'Railway Double Tracking — Java South Line',
    location: 'Kroya – Kutoarjo (III)',
    type: 'JICA Loan No. IP-548',
    desc: 'Pasokan material pipa untuk pembangunan jalur ganda kereta api lintas selatan Jawa. Bagian dari proyek infrastruktur berbiaya pinjaman JICA senilai ratusan miliar rupiah.',
    image: null,
  },
]

export const solarProjects: Project[] = [
  {
    badge: 'Hybrid Solar System',
    title: 'Residential Hybrid Solar — Rumah Tinggal',
    location: 'Jakarta Selatan',
    type: 'On-grid + battery backup',
    desc: 'Instalasi sistem solar hybrid untuk hunian pribadi. Panel surya rooftop terhubung jaringan PLN dengan battery backup — memastikan pasokan listrik tetap tersedia saat pemadaman sekaligus menekan tagihan listrik bulanan.',
    image: null,
  },
]

export const itProjects: Project[] = [
  {
    badge: 'Enterprise Web App',
    title: 'ERP Platform — PT Alita Praya Mitra',
    location: 'Jakarta',
    sector: 'Telekomunikasi',
    desc: 'Platform ERP terintegrasi mencakup Sales Pipeline, Project Management, e-Procurement, dan Asset Management (booking ruang meeting & kendaraan). Proven di lingkungan korporat — applicable untuk sektor konstruksi & infrastruktur.',
    image: null,
    tags: ['Sales Pipeline', 'Project Management', 'e-Procurement', 'Asset Management'],
  },
  {
    badge: 'IoT Monitoring',
    title: 'Tailored Solution',
    desc: 'Solusi IoT monitoring kami dirancang custom sesuai topologi jaringan pipa & instalasi solar klien. Hubungi kami untuk konsultasi awal — tanpa biaya.',
    image: null,
    cta: 'Konsultasi Gratis →',
    ctaHref: '#contact',
  },
]

export const coachSpecData = {
  parameters: [
    'Total Moisture (ARB)',
    'Inherent Moisture (ADB)',
    'Ash Content (ADB)',
    'Volatile Matter (ADB)',
    'Fixed Carbon (ADB)',
    'Total Sulphur (ADB)',
    'Calorific Value (GAR)',
    'Calorific Value (NAR)',
    'HGI',
    'Size',
  ],
  grades: [
    {
      name: 'Grade A',
      gar: 'GAR 5,400',
      values: ['18% max', '12% max', '8% max', '38% max', '45% min', '0.8% max', '5,400 kcal/kg min', '4,900 kcal/kg min', '45 min', '0–50 mm'],
    },
    {
      name: 'Grade B',
      gar: 'GAR 5,082',
      values: ['20% max', '14% max', '10% max', '38% max', '43% min', '1.0% max', '5,082 kcal/kg min', '4,600 kcal/kg min', '44 min', '0–50 mm'],
    },
    {
      name: 'Grade C',
      gar: 'GAR 4,800',
      values: ['22% max', '16% max', '12% max', '40% max', '40% min', '1.2% max', '4,800 kcal/kg min', '4,300 kcal/kg min', '43 min', '0–50 mm'],
    },
  ],
  rejection: ['28% max', '18% max', '15% max', '—', '—', '1.5% max', 'Below 4,800 kcal/kg', '—', '—', '—'],
}
