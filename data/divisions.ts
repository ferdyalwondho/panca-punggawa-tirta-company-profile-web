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
    items: [
      'PVC Pipe SNI Standard',
      'PVC AW, D, C Standard',
      'Sewerage Pipes',
      'HDPE Pipes',
      'Fiber Optics Pipes',
      'Valve and Flange',
      'Home Connection for Water Supply',
    ],
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
]

export const pipingSpecLeft = {
  title: 'PVC Pipes — Standards',
  items: ['JIS: AW, D, C', 'SNI S-16 s/d S-8', 'Klas A, B'],
}

export const pipingSpecRight = {
  title: 'FITTINGS & HDPE',
  items: ['HDPE Pipes PE-100 & PE-80', 'Water Supply', 'Gas Pipes', 'Fiber Optics'],
}

export const pipingBrands = ['SUPRALON', 'EXCELLON']

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
