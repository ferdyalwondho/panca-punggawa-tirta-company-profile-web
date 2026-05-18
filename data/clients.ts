export const clients = [
  {
    name: 'Kementerian PUPR',
    logo: '/images/clients/logo_pupr.png',
    sector: 'Government',
    logoSize: 'lg',
  },
  {
    name: 'Perumda Tirta Patriot',
    subtitle: 'Kota Bekasi',
    logo: '/images/clients/logo_tirta_patriot.png',
    sector: 'Water Utility',
    logoSize: 'tall',
  },
  {
    name: 'PT LEN Rekaprima Semesta',
    logo: '/images/clients/logo_len_rekaprima.png',
    sector: 'Engineering',
    logoSize: 'tall',
  },
  {
    name: 'PT Wijaya Karya (Persero) Tbk',
    logo: '/images/clients/logo_wika.png',
    sector: 'Construction',
    logoSize: 'tall',
  },
  {
    name: 'PT PP (Persero) Tbk',
    logo: '/images/clients/logo_pp.png',
    sector: 'Construction',
    logoSize: 'tall',
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
    logoSize: 'lg',
  },
]

export type Client = (typeof clients)[number]
