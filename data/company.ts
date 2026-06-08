export const company = {
  name: 'PT Panca Punggawa Tirta',
  shortName: 'PT PPT',
  tagline: 'Powering Infrastructure with Pipes, Solar & Code.',
  footerTagline: 'Pipes, Solar & Code — Infrastructure for what\'s next.',
  established: 2022,
  address: 'Jl. Tanah Medeka No. 4A, RT 11 RW 04, Rambutan, Ciracas, Jakarta Timur',
  phone: '(021) 29843074',
  mobile: '+62 821 1220 2282',
  mobileLabel: 'Reza Permana Putra — CEO & Chief Commercial Officer',
  email: {
    general: 'info@ppt.co.id',
    project: 'project@ppt.co.id',
    sales: 'sales@ppt.co.id',
  },
  website: 'ppt.co.id',
  instagram: '@pancapunggawatirta',
  linkedin: 'PT Panca Punggawa Tirta',
  vision:
    'Berorientasi pada kepuasan pelanggan dengan memberikan solusi infrastruktur terintegrasi yang inovatif, andal, dan berkelanjutan.',
  visionEn:
    'Customer-centric in delivering innovative, reliable, and sustainable integrated infrastructure solutions.',
  mission:
    'Melalui kepemimpinan, inovasi, fokus, dan kerja sama tim — kami meningkatkan nilai bagi pelanggan, karyawan, dan pemegang saham.',
  missionEn:
    'Through leadership, innovation, focus, and teamwork — we enhance value for our customers, employees, and shareholders.',
}

export const leaders = [
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

export type NavChild = { label: string; href: string; color: string; desc: string }
export type NavLink = { label: string; href: string; children?: NavChild[] }

export const navLinks: NavLink[] = [
  {
    label: 'About',
    href: '/#about',
    children: [
      { label: 'Company Profile', desc: 'Visi, misi & profil perusahaan', href: '/about', color: '#00B4D8' },
      // { label: 'Our Leadership', desc: 'Tim di balik PT PPT', href: '/about/leadership', color: '#7B61FF' },
    ],
  },
  {
    label: 'Products',
    href: '/#divisions',
    children: [
      { label: 'Piping Solutions', desc: 'PVC & HDPE untuk infrastruktur air', href: '/products/piping', color: '#00B4D8' },
      { label: 'Solar Energy', desc: 'Energi surya end-to-end', href: '/products/solar', color: '#FFB627' },
      { label: 'IT Solutions', desc: 'Digital & IoT integration', href: '/products/it', color: '#7B61FF' },
    ],
  },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]
