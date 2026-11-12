/**
 * Konfigurasi global website.
 * Edit nilai-nilai di sini untuk update seluruh site (meta tags, schema, footer, dll).
 */

export const SITE = {
  // Brand display — "AZZURACODE" ditampilkan dengan font Conversi (pixel/bitmap)
  name: 'AZZURACODE',
  // Nama lengkap perusahaan untuk footer & schema.org
  fullName: 'Rahmadi Digital Creatives',
  tagline: 'Jasa pembuatan website profesional untuk UMKM & bisnis lokal Indonesia',
  description:
    'AZZURACODE melayani pembuatan landing page, company profile, toko online, blog, web app custom, SEO optimization, serta maintenance dan hosting untuk UMKM dan bisnis lokal di Indonesia.',
  url: 'https://stephanieknaturals.com',
  author: 'Rahmadi',
  email: 'arterix.id@gmail.com',
  whatsapp: '+6285213772274',
  whatsappDisplay: '+62 852 1377 2274',
  whatsappLink: 'https://wa.me/6285213772274',
  instagram: 'https://instagram.com/rxhmadi',
  telegram: 'https://t.me/gandamekar',
  inLanguage: 'id-ID',
  ogImage: '/og-image.jpg',
  social: {
    instagram: 'https://instagram.com/rxhmadi',
    telegram: 'https://t.me/gandamekar',
    whatsapp: 'https://wa.me/6285213772274',
  },
} as const;

/** Layanan yang ditawarkan — dipakai di homepage, schema.org, llms.txt
 *
 * Field `image` mengacu ke file di `public/images/services/{slug}.jpg`.
 * Kalau file belum ada, card tetap tampil dengan fallback gradient background.
 * Disarankan ukuran gambar: 600x400px, format JPG/WebP, file size < 100KB.
 */
export const SERVICES = [
  {
    slug: 'landing-page',
    name: 'Landing Page',
    description: 'Satu halaman fokus konversi untuk produk, event, atau kampanye pemasaran.',
    icon: 'square-equal',
    image: '/images/services/landing-page.jpg',
  },
  {
    slug: 'company-profile',
    name: 'Company Profile',
    description: 'Website korporat untuk membangun kredibilitas bisnis profesional Anda.',
    icon: 'file-text',
    image: '/images/services/company-profile.jpg',
  },
  {
    slug: 'toko-online',
    name: 'Toko Online',
    description: 'E-commerce lengkap dengan keranjang, payment gateway, dan manajemen produk.',
    icon: 'cart',
    image: '/images/services/toko-online.jpg',
  },
  {
    slug: 'blog-news',
    name: 'Blog / News Site',
    description: 'Website artikel dengan CMS sederhana untuk SEO content marketing.',
    icon: 'book-open',
    image: '/images/services/blog-news.jpg',
  },
  {
    slug: 'web-app-custom',
    name: 'Web App Custom',
    description: 'Aplikasi web custom sesuai kebutuhan bisnis: dashboard, portal, sistem internal.',
    icon: 'code',
    image: '/images/services/web-app-custom.jpg',
  },
  {
    slug: 'seo-optimization',
    name: 'SEO Optimization',
    description: 'Optimasi mesin pencari agar website Anda mudah ditemukan calon pelanggan.',
    icon: 'search',
    image: '/images/services/seo-optimization.jpg',
  },
  {
    slug: 'maintenance-hosting',
    name: 'Maintenance & Hosting',
    description: 'Pemeliharaan berkala, update keamanan, dan hosting andal untuk website Anda.',
    icon: 'server',
    image: '/images/services/maintenance-hosting.jpg',
  },
] as const;

/** Topik utama untuk schema.org knowsAbout & llms.txt */
export const TOPICS = [
  'Jasa pembuatan website UMKM',
  'Pengembangan landing page & company profile',
  'Toko online & e-commerce',
  'SEO optimization untuk bisnis lokal',
  'Maintenance & hosting website',
] as const;

/** Navigasi utama (urutan tampil di header). */
export const NAV_LINKS = [
  { label: 'Beranda', href: '/', icon: 'panda' },
  { label: 'Artikel', href: '/blog', icon: 'square-equal' },
  { label: 'Tentang', href: '/about', icon: 'paw-print' },
  { label: 'Kontak', href: '/contact', icon: 'headset' },
] as const;

/**
 * Review/ulasan pelanggan.
 * Avatar pakai initials berwarna (lebih clean, tidak butuh stock photo).
 * `color` dipilih dari palette yang sudah harmonis dengan style.
 */
export const REVIEWS = [
  {
    name: 'Andi Pratama',
    initials: 'AP',
    color: '#0f0f0f',
    product: 'Landing Page',
    city: 'Jakarta',
    rating: 5,
    text: 'Hasilnya rapi banget, loading cepat, dan timnya responsif. Landing page-nya langsung naik konversi setelah diluncurkan.',
  },
  {
    name: 'Siti Nurhayati',
    initials: 'SN',
    color: '#7c3aed',
    product: 'Toko Online',
    city: 'Bandung',
    rating: 5,
    text: 'Toko online saya jadi profesional banget. Payment gateway langsung jalan, dan saya bisa kelola produk sendiri tanpa ribet.',
  },
  {
    name: 'Budi Santoso',
    initials: 'BS',
    color: '#0891b2',
    product: 'Company Profile',
    city: 'Surabaya',
    rating: 5,
    text: 'Klien korporat saya langsung percaya setelah lihat website. Desainnya clean, kontennya terstruktur, dan SEO-nya udah on point.',
  },
  {
    name: 'Dewi Lestari',
    initials: 'DL',
    color: '#db2777',
    product: 'Web App Custom',
    city: 'Yogyakarta',
    rating: 5,
    text: 'Sistem booking yang dibuat sesuai kebutuhan homestay saya. Tinggal pakai, tamu juga gampang pesan langsung dari website.',
  },
  {
    name: 'Rizki Hidayat',
    initials: 'RH',
    color: '#16a34a',
    product: 'SEO Optimization',
    city: 'Jakarta',
    rating: 4,
    text: 'Website saya yang dulunya susah ketemu di Google, sekarang muncul di halaman pertama untuk keyword target. Worth it banget.',
  },
  {
    name: 'Maya Sari',
    initials: 'MS',
    color: '#ea580c',
    product: 'Landing Page',
    city: 'Semarang',
    rating: 5,
    text: 'Proses kerjanya transparan, dari brief sampai launch selalu dikabari. Hasilnya sesuai ekspektasi, bahkan lebih cepat dari jadwal.',
  },
  {
    name: 'Fajar Nugroho',
    initials: 'FN',
    color: '#1d4ed8',
    product: 'Toko Online',
    city: 'Malang',
    rating: 5,
    text: 'Dulu saya cuma jualan di marketplace, margin tipis. Sekarang punya toko sendiri, brand makin dikenal, dan margin naik signifikan.',
  },
  {
    name: 'Indah Permata',
    initials: 'IP',
    color: '#9333ea',
    product: 'Company Profile',
    city: 'Bali',
    rating: 5,
    text: 'Timnya paham banget kebutuhan bisnis kreatif. Portofolio yang dibuat terlihat profesional, klien langsung percaya pas lihat.',
  },
] as const;