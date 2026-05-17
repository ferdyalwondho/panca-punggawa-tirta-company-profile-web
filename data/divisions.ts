export type Division = {
  number: string
  slug: string
  title: string
  colorFrom: string
  colorTo: string
  accentColor: string
  desc: string
  items: string[]
}

export const divisions: Division[] = [
  {
    number: '01',
    slug: 'piping',
    title: 'Piping Solutions',
    colorFrom: 'from-brand-primary',
    colorTo: 'to-brand-accent',
    accentColor: '#00B4D8',
    desc: 'PVC & HDPE pipe, fittings, dan aksesoris untuk jaringan air bersih, irigasi, dan infrastruktur industri.',
    items: ['JIS AW, D, C', 'SNI S-16 s/d S-8', 'HDPE PN 12.5 & 16', 'Fittings TS & DV', 'Flange, socket, reducer'],
  },
  {
    number: '02',
    slug: 'solar',
    title: 'Solar Energy',
    colorFrom: 'from-brand-solar-dark',
    colorTo: 'to-brand-solar',
    accentColor: '#FFB627',
    desc: 'Solusi energi terbarukan end-to-end — dari site survey hingga instalasi dan operasi & maintenance.',
    items: ['On-grid solar', 'Off-grid & hybrid', 'Rooftop solar industri', 'PJU tenaga surya', 'Site survey & sizing'],
  },
  {
    number: '03',
    slug: 'it',
    title: 'IT Solutions',
    colorFrom: 'from-brand-it-dark',
    colorTo: 'to-brand-it',
    accentColor: '#7B61FF',
    desc: 'Layanan pengembangan digital dan integrasi sistem untuk operasi infrastruktur yang lebih efisien.',
    items: [
      'Website development',
      'IoT monitoring',
      'System integration',
      'Dashboard & reporting',
      'Custom enterprise solutions',
    ],
  },
  {
    number: '04',
    slug: 'mining',
    title: 'Mining Supply',
    colorFrom: 'from-yellow-600',
    colorTo: 'to-amber-400',
    accentColor: '#F59E0B',
    desc: 'Supply batubara thermal dan material tambang untuk industri energi nasional — dari Palu, Sulawesi Tengah.',
    items: [
      'Thermal Coal GAR 4200–5800',
      'Grade A, B, C, D',
      'Partner: ADARO, BAYAN, BUKIT ASAM',
      'KIDECO, BERAU COAL',
      'Spot & kontrak jangka panjang',
    ],
  },
]

export const pipingServices = [
  {
    title: 'PVC Pipes — JIS Standard',
    desc: 'Pipa PVC standar JIS AW, D, dan C untuk berbagai kebutuhan distribusi air dan konstruksi.',
    specs: ['JIS AW (tekanan tinggi)', 'JIS D (standar)', 'JIS C (ringan)'],
  },
  {
    title: 'PVC Pipes — SNI Standard',
    desc: 'Pipa PVC berstandar SNI untuk proyek pemerintah dan infrastruktur publik nasional.',
    specs: ['SNI S-16', 'SNI S-12.5', 'SNI S-10', 'SNI S-8'],
  },
  {
    title: 'HDPE Pipes',
    desc: 'Pipa HDPE tekanan tinggi untuk instalasi yang membutuhkan fleksibilitas dan ketahanan kimia.',
    specs: ['PN 12.5', 'PN 16', 'Diameter 20mm – 630mm'],
  },
  {
    title: 'Fittings & Accessories',
    desc: 'Kelengkapan sistem perpipaan untuk koneksi yang andal dan bebas bocor.',
    specs: ['Fittings TS & DV', 'Flange & socket', 'Reducer & elbow', 'Valve & clamp'],
  },
]

export const pipingBrands = ['SUPRALON', 'PROVILON', 'SKYLON', 'EXCELLON']

export const solarServices = [
  {
    title: 'On-Grid Solar',
    desc: 'Sistem solar terhubung jaringan PLN — hemat listrik dan jual kelebihan daya ke grid.',
    icon: 'zap',
  },
  {
    title: 'Off-Grid & Hybrid',
    desc: 'Solusi mandiri untuk area yang belum terjangkau jaringan PLN, dengan battery backup.',
    icon: 'battery',
  },
  {
    title: 'Rooftop Solar Industri',
    desc: 'Instalasi solar skala besar untuk pabrik, gudang, dan fasilitas industri.',
    icon: 'building',
  },
  {
    title: 'PJU Tenaga Surya',
    desc: 'Penerangan jalan umum bertenaga surya untuk kawasan perkotaan dan pedesaan.',
    icon: 'sun',
  },
  {
    title: 'Site Survey & Sizing',
    desc: 'Analisis lokasi, perhitungan kebutuhan daya, dan desain sistem yang optimal.',
    icon: 'map-pin',
  },
  {
    title: 'O&M Service',
    desc: 'Layanan operasi dan pemeliharaan sistem solar untuk performa optimal jangka panjang.',
    icon: 'settings',
  },
]

export const itServices = [
  {
    title: 'Website Development',
    desc: 'Company profile, web app, dan sistem berbasis web yang modern dan performa tinggi.',
    icon: 'monitor',
  },
  {
    title: 'IoT Monitoring',
    desc: 'Sistem monitoring real-time untuk jaringan pipa, instalasi solar, dan aset infrastruktur.',
    icon: 'activity',
  },
  {
    title: 'System Integration',
    desc: 'Integrasi sistem dari berbagai vendor menjadi satu platform yang terpadu dan efisien.',
    icon: 'git-merge',
  },
]
