# PT Panca Punggawa Tirta — Company Profile Website

Situs company profile modern untuk **PT Panca Punggawa Tirta (PPT)** — solusi infrastruktur terintegrasi: Piping, Solar Energy, IT Solutions, dan Mining Supply.

🔗 **Live:** https://pancapunggawatirta.co.id

---

## 📋 Stack Teknologi

- **Framework:** Next.js 16.2.6 (App Router)
- **Styling:** Tailwind CSS 4 + CSS Variables
- **Animation:** Framer Motion
- **Form:** React Hook Form + Zod (validation)
- **Email:** Resend API
- **Icons:** Lucide React

---

## 🌐 Struktur Halaman

### Halaman Utama (`/`)
- **Hero** — Banner pembuka dengan CTA
- **About** — Cerita perusahaan, visi, misi
- **Divisions** — 4 produk utama (Piping, Solar, IT, Mining)
- **Clients** — Logo & kategori klien
- **Contact** — Form kontak & informasi

### Halaman Produk
- `/products/piping` — Solusi Piping
- `/products/solar` — Solusi Solar Energy
- `/products/it` — Solusi IT
- `/products/mining` — Supply Batubara & Material Tambang

### Halaman About
- `/about` — Company Profile lengkap
- `/about/leadership` — Tim pemimpin perusahaan

### Fitur Navbar
- **Desktop:** Mega menu full-width on hover (Products & About)
- **Mobile:** Hamburger menu dengan sub-items
- **Responsive:** Logo & navigasi otomatis menyesuaikan scroll state

---

## 🚀 Setup Lokal

### Prerequisites
- Node.js 18+ dan npm/yarn/pnpm
- Git

### Langkah-Langkah

```bash
# 1. Clone repository
git clone https://github.com/ferdyalwondho/panca-punggawa-tirta-company-profile-web.git
cd panca-punggawa-tirta-company-profile-web

# 2. Install dependencies
npm install

# 3. Setup environment variables
# Buat file .env.local di root project
echo "NEXT_PUBLIC_RESEND_API_KEY=your_resend_api_key_here" > .env.local

# 4. Run development server
npm run dev

# Server akan jalan di http://localhost:3000
```

---

## 📝 Environment Variables

Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_RESEND_API_KEY=your_resend_api_key_from_dashboard
```

**Cara mendapatkan Resend API Key:**
1. Buka https://resend.com
2. Daftar atau login
3. Dashboard → **API Keys** → Copy Key
4. Paste ke `.env.local`

---

## 🚀 Deploy ke Vercel — Step by Step

### **Step 1: Siapkan Repository di GitHub**

✅ Repository sudah push ke: https://github.com/ferdyalwondho/panca-punggawa-tirta-company-profile-web

---

### **Step 2: Buat Akun Vercel**

1. Buka https://vercel.com
2. Klik **"Sign Up"**
3. Pilih **"Continue with GitHub"**
4. Authorize Vercel untuk akses GitHub
5. Selesai!

---

### **Step 3: Import Project ke Vercel**

1. Buka https://vercel.com/dashboard
2. Klik **"Add New..."** → **"Project"**
3. Di sebelah kanan akan muncul list repository GitHub Anda
4. Cari `panca-punggawa-tirta-company-profile-web`
5. Klik repository tersebut → **"Import"**

![Vercel Import](https://imgur.com/placeholder.png)

---

### **Step 4: Configure Project**

Setelah klik Import, akan muncul halaman konfigurasi:

#### **Project Name**
- Default: `panca-punggawa-tirta-company-profile-web`
- Bisa diubah jika mau, tapi biarkan saja

#### **Framework Preset**
- Pilih: **Next.js** ✓ (sudah auto-detected)

#### **Root Directory**
- Biarkan kosong (atau `.`)

#### **Build & Output Settings**
- Biarkan default
- Vercel auto-detect `npm run build`

#### **Environment Variables** ⚠️ **PENTING**

Scroll ke bawah, ada bagian **"Environment Variables"**

Tambahkan:
```
Name:  NEXT_PUBLIC_RESEND_API_KEY
Value: your_actual_resend_api_key_here
```

Klik **"Add"**

---

### **Step 5: Deploy!**

Setelah configure semua, klik **"Deploy"** (tombol besar di bawah)

Tunggu status berubah dari **"Building..."** → **"Ready"** ✅

Waktu deploy: ~2-3 menit

---

### **Step 6: Akses Website**

Setelah "Ready", Vercel beri Anda URL:

```
https://panca-punggawa-tirta-company-profile-web.vercel.app
```

Klik link atau buka di browser. Selesai! 🎉

---

## 🌐 Setup Custom Domain (Optional)

Jika mau pakai domain sendiri (misal: `pancapunggawatirta.co.id`):

### Di Vercel Dashboard:

1. Buka project Anda
2. Tab **"Settings"** → **"Domains"**
3. Klik **"Add Domain"**
4. Input: `pancapunggawatirta.co.id`
5. Klik **"Add"**

Vercel beri Anda **nameserver** atau **CNAME record**:

### Di Registrar Domain Anda (Namecheap, GoDaddy, etc):

1. Login ke akun registrar
2. Cari **"Manage DNS"** atau **"DNS Settings"**
3. Update dengan nameserver/CNAME dari Vercel
4. Save & tunggu 24-48 jam untuk propagate

Setelah DNS propagate, domain Anda akan langsung ke Vercel!

---

## 🔄 Auto-Deploy Workflow

Setelah setup di Vercel:

### Setiap kali push ke GitHub:

```bash
# Edit file di lokal
git add .
git commit -m "update konten"
git push origin main
```

↓ **GitHub akan notify Vercel**

↓ **Vercel auto-build & deploy**

↓ **Website update otomatis di live URL**

Tidak perlu manual deploy lagi! 🚀

---

## 🧪 Preview Deployment (Pull Requests)

Setiap PR ke `main` branch:

1. Vercel auto-create **preview deployment**
2. Preview URL muncul di PR comments
3. Tim bisa review perubahan di preview URL
4. Merge PR → auto-deploy ke production

---

## 📊 Monitoring & Logs

### Di Vercel Dashboard:

- **Deployments Tab:** Lihat history semua deploy
- **Logs:** Error logs dari build/runtime
- **Analytics:** Traffic, performance metrics
- **Settings:** Env variables, domains, etc

---

## 🐛 Troubleshooting

### Build Gagal di Vercel?

1. Check **"Deployments"** tab → lihat error message
2. Common issues:
   - Missing env variables → add di Vercel Settings
   - TypeScript error → fix lokal, push lagi
   - Missing dependencies → check `package.json`

### Domain tidak working?

1. Check DNS propagation: https://www.whatsmydns.net
2. Pastikan DNS record sudah update di registrar
3. Wait 24-48 hours untuk propagate
4. Clear browser cache (Ctrl+Shift+Delete)

### Contact form tidak kirim?

1. Pastikan `NEXT_PUBLIC_RESEND_API_KEY` valid
2. Verify Resend account aktif & tidak exceed limit
3. Check browser console untuk error message

---

## 📝 Update Content

Contoh: Update deskripsi produk Piping

```bash
# 1. Edit di lokal
nano data/divisions.ts
# Update deskripsi piping

# 2. Test lokal
npm run dev
# Verify di http://localhost:3000

# 3. Commit & push
git add data/divisions.ts
git commit -m "chore: update piping description"
git push origin main

# 4. Vercel auto-deploy! 🚀
```

---

## 📧 Contact Form Email Setup

Form di halaman Contact mengirim ke email via Resend.

### Configure recipient email:

Edit `/app/api/contact/route.ts`:

Cari line:
```typescript
to: 'email@pancapunggawatirta.co.id', // Ubah ke email Anda
```

---

## 🗂️ File Structure

```
project/
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage (/)
│   ├── products/          # Product pages
│   ├── about/             # About pages
│   └── api/contact        # Contact API
├── components/            # React components
├── data/                  # Content (divisions, company, etc)
├── lib/                   # Utilities
├── public/                # Static assets
└── README.md              # This file
```

---

## 🔗 Links

- **GitHub:** https://github.com/ferdyalwondho/panca-punggawa-tirta-company-profile-web
- **Vercel:** https://vercel.com
- **Next.js Docs:** https://nextjs.org/docs
- **Resend Docs:** https://resend.com/docs

---

## 📞 Support

- **Email:** info@pancapunggawatirta.co.id
- **Phone:** (021) 29843074

---

**Status:** ✅ Live & Auto-Deploying
