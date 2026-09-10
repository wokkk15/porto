export interface SkillCategory {
  title: string;
  color: string;
  skills: { name: string; icon?: string; badgeColor: string }[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Internet of Things' | 'Sistem Informasi Pemerintah' | 'Pengembangan Web' | 'Machine Learning';
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  color: string;
}

export interface TimelineItem {
  id: string;
  role: string;
  category: string;
  period: string;
  institution: string;
  description: string;
  skills: string[];
  color: string;
}

export interface OrganizationItem {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  color: string;
  badge: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl: string;
  color: string;
}

export const PERSONAL_INFO = {
  name: 'MUHAMMAD RIVALDI JEFRI',
  shortName: 'Rivaldi',
  titles: [
    'Pengembang IoT',
    'Pengembang Full Stack',
    'Antusias Computer Vision'
  ],
  bio: 'Freshgraduates S1 Ilmu Komputer dengan predikat memuaskan (IPK 3.86) yang memiliki keahlian kuat dalam pengembangan Internet of Things (IoT) dan Fullstack Web Development. Berpengalaman pengelolaan data melalui kegiatan verifikasi penerima bantuan pangan di Perum BULOG serta membangun sistem integrasi perangkat keras dan lunak menggunakan ESP32, MQTT, ThingsBoard, serta framework Laravel dan Vue.js/Inertia.js untuk proyek pemerintahan dan akademik. Aktif sebagai asisten dosen dengan kemampuan komunikasi serta manajemen proyek yang teruji.',
  location: 'Parepare, Sulawesi Selatan',
  education: 'S1 Ilmu Komputer (IPK 3.86)',
  university: 'Institut Teknologi Bacharuddin Jusuf Habibie',
  gpa: '3.86',
  interests: [
    'Internet of Things (IoT)',
    'Kecerdasan Buatan (AI)',
    'Computer Vision',
    'Pengembangan Full Stack',
    'Riset & Penelitian'
  ],
  contact: {
    email: 'rivalrivaldi572@gmail.com',
    phone: '+62 81244904571',
    whatsapp: 'https://wa.me/6281244904571?text=Halo%20Rivaldi!%20Saya%20melihat%20portfolio%20website%20Anda.',
    linkedin: 'https://linkedin.com/in/muhammad-rivaldi-jefri',
    github: 'https://github.com/rivaldijefri',
    instagram: 'https://instagram.com/rivaldijefri_'
  },
  resumeUrl: 'https://drive.google.com/file/d/12HtuvATjjlhrFUXWWRZMdJm7ySJcclgi/view?usp=sharing'
};


export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Bahasa Pemrograman',
    color: '#FFD93D', // Yellow
    skills: [
      { name: 'Python', badgeColor: '#3776AB' },
      { name: 'PHP', badgeColor: '#777BB4' },
      { name: 'JavaScript', badgeColor: '#F7DF1E' },
      { name: 'SQL', badgeColor: '#4479A1' },
      { name: 'C++', badgeColor: '#00599C' }
    ]
  },
  {
    title: 'Framework Web',
    color: '#4D96FF', // Blue
    skills: [
      { name: 'Laravel', badgeColor: '#FF2D20' },
      { name: 'Vue.js', badgeColor: '#4FC08D' },
      { name: 'React', badgeColor: '#61DAFB' },
      { name: 'CodeIgniter 3', badgeColor: '#EF4223' },
      { name: 'Bootstrap', badgeColor: '#7952B3' },
      { name: 'Inertia.js', badgeColor: '#9553E9' }
    ]
  },
  {
    title: 'Basis Data (Database)',
    color: '#FF6B6B', // Red
    skills: [
      { name: 'MySQL', badgeColor: '#00758F' },
      { name: 'PostgreSQL', badgeColor: '#336791' }
    ]
  },
  {
    title: 'Internet of Things (IoT)',
    color: '#6BCB77', // Green
    skills: [
      { name: 'ESP32', badgeColor: '#E7352C' },
      { name: 'Protokol MQTT', badgeColor: '#660066' },
      { name: 'ThingsBoard', badgeColor: '#1A56B0' },
      { name: 'Arduino IDE', badgeColor: '#00979D' }
    ]
  },
  {
    title: 'Kecerdasan Buatan (AI)',
    color: '#9B51E0', // Purple
    skills: [
      { name: 'Machine Learning', badgeColor: '#FF6F00' },
      { name: 'Computer Vision', badgeColor: '#00C7B7' },
      { name: 'OpenCV', badgeColor: '#5C3EE8' }
    ]
  },
  {
    title: 'Alat & Workflow',
    color: '#FF8AAE', // Pink
    skills: [
      { name: 'Git', badgeColor: '#F05032' },
      { name: 'GitHub', badgeColor: '#181717' },
      { name: 'VS Code', badgeColor: '#007ACC' },
      { name: 'Figma', badgeColor: '#F24E1E' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-trash-bin',
    title: 'Smart Trash Bin IoT',
    category: 'Internet of Things',
    description: 'Merancang dan mengembangkan sistem tempat sampah pintar berbasis mikrokontroler ESP32 untuk klasifikasi dan pemilahan otomatis sampah kering, basah, dan logam menggunakan integrasi sensor ultrasonik, rain sensor, dan inductive proximity sensor.',
    longDescription: 'Solusi perangkat keras & lunak cerdas end-to-end. Memiliki mekanisme pemilahan otomatis dengan sensor ultrasonik, rain sensor, dan proximity induktif, kontrol mekanik aktuator motor servo dan stepper, serta integrasi protokol komunikasi MQTT dengan platform ThingsBoard untuk pemantauan kapasitas kompartemen secara real-time.',
    technologies: ['ESP32', 'MQTT', 'ThingsBoard', 'Arduino', 'Sensor Ultrasonik', 'Servo & Stepper'],
    image: '',
    githubUrl: 'https://github.com/rivaldijefri/smart-trash-bin-iot',
    demoUrl: 'https://thingsboard.cloud/dashboard/smart-trash',
    featured: true,
    color: '#FFD93D'
  },
  {
    id: 'e-monev-bappeda',
    title: 'Proyek Sistem E-Monev Bappeda',
    category: 'Sistem Informasi Pemerintah',
    description: 'Front-End Developer: Mengembangkan antarmuka pengguna (UI/UX) yang responsif dan interaktif pada aplikasi E-Monev (Elektronik Monitoring dan Evaluasi) untuk mendukung digitalisasi monitoring program kerja pemerintahan Bappeda.',
    longDescription: 'Membangun arsitektur frontend menggunakan framework Vue.js dan Inertia.js yang terintegrasi secara seamless dengan backend Laravel. Mengimplementasikan pengelolaan data di sisi klien (state management), validasi form dinamis, serta optimalisasi integrasi data dari API backend.',
    technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'State Management', 'Form Validation'],
    image: '',
    githubUrl: 'https://github.com/AldiAlfatih/BAPPEDA',
    demoUrl: 'https://bappedaskripsi.space/',
    featured: true,
    color: '#4D96FF'
  },
  {
    id: 'repository-website',
    title: 'Repository Website Kampus',
    category: 'Pengembangan Web',
    description: 'Full Stack Web Developer: Membangun website repositori dokumen akademik kampus menggunakan CodeIgniter 3, Bootstrap, dan MySQL berbasis arsitektur Model-View-Controller (MVC).',
    longDescription: 'Mengembangkan fitur keamanan autentikasi pengguna, manajemen hak akses, modul unggah/unduh file, pencarian cepat (query optimization), dan dashboard admin yang intuitif. Mendesain struktur database relasional dan mengoptimalkan manajemen file.',
    technologies: ['CodeIgniter 3', 'Bootstrap', 'MySQL', 'PHP Native', 'MVC Architecture'],
    image: '',
    githubUrl: 'https://github.com/wokkk15/repository',
    demoUrl: 'https://github.com/wokkk15/repository',
    featured: true,
    color: '#FF6B6B'
  },
  {
    id: 'web-terminal',
    title: 'Sistem Informasi Terminal Induk Parepare',
    category: 'Sistem Informasi Pemerintah',
    description: 'Sistem Informasi Web Terpadu Jadwal Keberangkatan, Kedatangan, dan Pelacakan Bus Real-Time untuk Terminal Induk Parepare berbasis Laravel 12, React 19, Tailwind CSS v4, Laravel Reverb (WebSockets), dan Leaflet.js / OpenStreetMap.',
    longDescription: 'Platform terpadu monitoring & pelacakan bus real-time. Memiliki Public Schedule Board, Real-Time Live Map Tracking berbasis WebSocket & Leaflet.js, Portal Mobile Supir dengan pelacakan GPS & Telemetri live (Kecepatan, Kompas), Admin Management Panel, serta Cetak Laporan PDF resmi Dishub Kota Parepare.',
    technologies: ['Laravel 12', 'React 19', 'Inertia.js', 'Tailwind CSS', 'Laravel Reverb', 'Leaflet.js', 'OpenStreetMap'],
    image: '',
    githubUrl: 'https://github.com/AldiAlfatih/web_terminal',
    demoUrl: 'https://github.com/AldiAlfatih/web_terminal',
    featured: true,
    color: '#9B51E0'
  },
  {
    id: 'web-kecantikan',
    title: 'Web E-Commerce Produk Kecantikan',
    category: 'Pengembangan Web',
    description: 'Platform e-commerce web terpadu untuk produk kecantikan dan kosmetik berbasis Laravel, mendukung manajemen stok produk & varian shade otomatis, serta alur checkout dan pengisian alamat otomatis.',
    longDescription: 'Pengembang Full Stack pada aplikasi e-commerce kosmetik. Mengembangkan sistem manajemen produk dengan varian shade dinamis, sinkronisasi stok otomatis untuk mencegah double-decrement, sistem alur checkout dengan pengisian alamat otomatis, serta integrasi Docker & Nginx.',
    technologies: ['Laravel', 'MySQL', 'Docker', 'Nginx', 'Tailwind CSS', 'Bootstrap', 'JavaScript'],
    image: '',
    githubUrl: 'https://github.com/AldiAlfatih/web-kecantikan',
    demoUrl: 'https://github.com/AldiAlfatih/web-kecantikan',
    featured: true,
    color: '#FF8AAE'
  },
  {
    id: 'langgo-learning',
    title: 'LangGo! - Pembelajaran Bahasa Interaktif',
    category: 'Pengembangan Web',
    description: 'Platform e-learning pembelajaran bahasa interaktif berjenjang yang menghubungkan Guru dan Siswa, dilengkapi fitur kuis kode unik, sistem nyawa (gamifikasi), dan forum diskusi kelas real-time.',
    longDescription: 'Mengembangkan platform pembelajaran bahasa berbasis PHP Native OOP dan MySQL. Memiliki Panel Guru untuk pembuatan & monitoring kuis interaktif, Panel Siswa dengan dashboard statistik & sistem nyawa (gamifikasi), forum obrolan kelas real-time (AJAX/Fetch API), serta keamanan autentikasi Bcrypt & Anti-SQLi.',
    technologies: ['PHP Native', 'MySQL', 'JavaScript (ES6+)', 'AJAX', 'Gamifikasi', 'HTML5/CSS3'],
    image: '',
    githubUrl: 'https://github.com/wokkk15/LangGO',
    demoUrl: 'https://github.com/wokkk15/LangGO',
    featured: true,
    color: '#6BCB77'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 't-bulog',
    role: 'Administrasi Data Bantuan Pangan',
    category: 'Pengalaman Kerja',
    period: 'April 2026 – Agustus 2026',
    institution: 'Perum BULOG',
    description: 'Melakukan pemeriksaan dokumen secara langsung, mengelola administrasi data, penyusunan pelaporan kelancaran distribusi bantuan pangan, serta verifikasi dan validasi data penerima bantuan pangan melalui sistem BULOG.',
    skills: ['Pengelolaan Data', 'Verifikasi & Validasi Data', 'Penyusunan Laporan', 'Sistem BULOG'],
    color: '#FFD93D'
  },
  {
    id: 't-iot',
    role: 'Pengembang IoT (Smart Trash Bin)',
    category: 'Pengalaman Projek',
    period: 'Agustus 2025 – April 2026',
    institution: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    description: 'Merancang dan mengembangkan sistem tempat sampah pintar berbasis mikrokontroler ESP32 untuk klasifikasi dan pemilahan otomatis sampah kering, basah, dan logam. Integrasi protokol MQTT dengan ThingsBoard dan kontrol mekanik servo & stepper.',
    skills: ['ESP32', 'MQTT', 'ThingsBoard', 'Sensor Ultrasonik', 'Servo & Stepper'],
    color: '#6BCB77'
  },
  {
    id: 't-db-asdos',
    role: 'Asisten Dosen - Basis Data',
    category: 'Pengajaran Akademik',
    period: 'Oktober 2025 – Januari 2026',
    institution: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    description: 'Mendampingi dosen pengampu dan membimbing mahasiswa dalam memahami konsep fundamental basis data, perancangan Entity Relationship Diagram (ERD), normalisasi tabel, dan penulisan query SQL yang efisien.',
    skills: ['SQL', 'MySQL', 'ERD', 'Normalisasi Tabel', 'Optimasi Query'],
    color: '#4D96FF'
  },
  {
    id: 't-emonev',
    role: 'Front-End Developer (Proyek E-Monev Bappeda)',
    category: 'Pengalaman Projek',
    period: 'Maret 2025 – Oktober 2025',
    institution: 'Bappeda',
    description: 'Mengembangkan antarmuka pengguna (UI/UX) yang responsif dan interaktif pada aplikasi E-Monev Bappeda berbasis Vue.js dan Inertia.js terintegrasi backend Laravel, state management, dan validasi form dinamis.',
    skills: ['Laravel', 'Vue.js', 'Inertia.js', 'State Management', 'UI/UX'],
    color: '#FF6B6B'
  },
  {
    id: 't-web-asdos',
    role: 'Asisten Dosen - Pemrograman Web',
    category: 'Pengajaran Akademik',
    period: 'April 2025 – Juni 2025',
    institution: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    description: 'Memberikan bimbingan teknis, pemecahan masalah (troubleshooting), dan evaluasi kode kepada mahasiswa dalam pengembangan proyek akhir aplikasi web berbasis Laravel, CodeIgniter, dan PHP Native.',
    skills: ['Laravel', 'CodeIgniter 3', 'PHP Native', 'Troubleshooting', 'Evaluasi Kode'],
    color: '#9B51E0'
  },
  {
    id: 't-legal-nlp',
    role: 'Asisten Peneliti - Ekstraksi Entitas Hukum (NLP)',
    category: 'Riset Akademik',
    period: '2024',
    institution: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    description: 'Berkontribusi dalam penelitian Natural Language Processing (NLP) ekstraksi entitas hukum dari dokumen putusan pengadilan Indonesia serta merancang skema anotasi dan penandaan NER.',
    skills: ['Python', 'NLP', 'Named Entity Recognition (NER)', 'Dataset Annotation'],
    color: '#FF8AAE'
  },
  {
    id: 't-repo-kampus',
    role: 'Full Stack Web Developer (Repository Kampus)',
    category: 'Pengalaman Projek',
    period: '2024',
    institution: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    description: 'Membangun website repositori dokumen akademik kampus menggunakan CodeIgniter 3, Bootstrap, dan MySQL berbasis arsitektur MVC, fitur keamanan autentikasi, modul unggah/unduh, dan optimasi query.',
    skills: ['CodeIgniter 3', 'Bootstrap', 'MySQL', 'PHP Native', 'MVC Architecture'],
    color: '#4D96FF'
  },
  {
    id: 't-pengabdian',
    role: 'Pengabdian Masyarakat (Pelatihan Modul Interaktif SMAN 5)',
    category: 'Pengabdian Masyarakat',
    period: '2023',
    institution: 'SMAN 5 Parepare',
    description: 'Menyusun buku panduan teknis yang terstruktur dan memberikan bimbingan teknis pembuatan modul pembelajaran digital interaktif berbasis aplikasi Quizizz dan Google Slides bagi guru SMAN 5 Parepare.',
    skills: ['Quizizz', 'Google Slides', 'Modul Digital', 'Pendampingan Teknis'],
    color: '#6BCB77'
  },
  {
    id: 't-coral-cv',
    role: 'Asisten Peneliti - Klasifikasi Terumbu Karang (CV)',
    category: 'Riset Akademik',
    period: '2023',
    institution: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    description: 'Melakukan pengumpulan, pengorganisasian, dan studi literatur kritis terhadap jurnal ilmiah internasional terkait arsitektur Deep Learning, Residual Networks (ResNet), dan Multi-Head Attention untuk klasifikasi terumbu karang.',
    skills: ['Deep Learning', 'ResNet', 'Multi-Head Attention', 'Computer Vision', 'Studi Literatur'],
    color: '#FF6B6B'
  }
];

export const ORGANIZATIONS: OrganizationItem[] = [
  {
    id: 'hero',
    name: 'Habibie Engineering Robotic Organization (HERO)',
    role: 'Anggota Bidang Riset dan Pengembangan',
    period: 'September 2023 – Desember 2024',
    description: 'Berperan aktif dalam riset dan perancangan purwarupa (prototype) proyek berbasis Internet of Things (IoT), robotika, dan sistem embedded.',
    achievements: [
      'Riset dan perancangan purwarupa proyek berbasis IoT, robotika, dan sistem embedded',
      'Berkolaborasi lintas tim dalam pengujian perangkat keras (hardware debugging) dan pemrograman mikrokontroler',
      'Mengadakan serta memfasilitasi lokakarya pelatihan teknis untuk meningkatkan kompetensi robotika & programming'
    ],
    color: '#FFD93D',
    badge: 'HERO Robotics'
  },
  {
    id: 'bem',
    name: 'Badan Eksekutif Mahasiswa (BEM) ITH',
    role: 'Anggota Divisi Penalaran',
    period: 'Januari 2024 – Desember 2024',
    description: 'Menginisiasi dan mengorganisasi pelaksanaan program kerja pengembangan akademik, termasuk seminar teknologi, workshop, dan kompetisi mahasiswa tingkat kampus.',
    achievements: [
      'Menginisiasi dan mengorganisasi program kerja pengembangan akademik (seminar teknologi & workshop)',
      'Mengkoordinasikan kompetisi mahasiswa tingkat kampus',
      'Berkoordinasi antar-divisi dan pemangku kepentingan kampus untuk kelancaran kegiatan ilmiah'
    ],
    color: '#4D96FF',
    badge: 'BEM ITH'
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Elektronika Prototipe Dan Pemrograman',
    issuer: 'BNSP',
    date: '2025',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/15U8zOOLuH14E6biw4MQ_WcNkrOO8bC-p/view?usp=sharing',
    color: '#FFD93D'
  },
  {
    id: 'cert-2',
    title: 'Belajar Back-End Pemula dengan Python',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/1owNyZ-d3mZTFigaeJ6BYUupJlvcezUOM/view?usp=sharing',
    color: '#4D96FF'
  },
  {
    id: 'cert-3',
    title: 'Belajar Fundamental Deep Learning',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/1E_sVrrc_6NSdTgCoNPV2rg53RMuzHxEk/view?usp=sharing',
    color: '#9B51E0'
  },
  {
    id: 'cert-4',
    title: 'Belajar Membuat Aplikasi Back-End Pemula dengan Google Cloud',
    issuer: 'Dicoding Indonesia & Google Cloud',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/148GbxZ-2sEBfq88ykM0eXK5xuq2evt0I/view?usp=sharing',
    color: '#6BCB77'
  },
  {
    id: 'cert-5',
    title: 'Belajar Penerapan AI di Aplikasi Web',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/1R2YSZACRyRhqiQsdv-VcbPxAUyiK0tmr/view?usp=sharing',
    color: '#FF6B6B'
  },
  {
    id: 'cert-6',
    title: 'Membangun Sistem Machine Learning',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/1BEmJhdnqa8REbGcJUqLKdIYA-pJ-UPcO/view?usp=sharing',
    color: '#FF8AAE'
  },
  {
    id: 'cert-7',
    title: 'Essential Training DIGDAYA x HACKATHON',
    issuer: 'DIGDAYA x HACKATHON',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/1x5h_q9jaifGJER2-EQa_1g8SuLEASCBq/view?usp=sharing',
    color: '#FFD93D'
  },
  {
    id: 'cert-8',
    title: 'Practitioner Training DIGDAYA x HACKATHON',
    issuer: 'DIGDAYA x HACKATHON',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/1ffR6EKHdb_2V13-addk8-t4yem-uNMBK/view?usp=sharing',
    color: '#4D96FF'
  },
  {
    id: 'cert-9',
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/1Ajdp_KDNskAjYhJ-v9vAAl0NvjsHGa00/view?usp=sharing',
    color: '#9B51E0'
  },
  {
    id: 'cert-10',
    title: 'Belajar Dasar Google Cloud',
    issuer: 'Dicoding Indonesia & Google Cloud',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/1e7PAxQ5MuNLztS8r3TWJkzMF_azdHqcn/view?usp=sharing',
    color: '#6BCB77'
  },
  {
    id: 'cert-11',
    title: 'Belajar Dasar Manajemen Proyek',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/12y1tVX7WBoPccoycl80Hk0f-PJW2cOJA/view?usp=sharing',
    color: '#FF6B6B'
  },
  {
    id: 'cert-12',
    title: 'Belajar Dasar UX Design',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/1vZDbI49bQBwGqHkm-lqTGwU2xzny7i8X/view?usp=sharing',
    color: '#FF8AAE'
  },
  {
    id: 'cert-13',
    title: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/1gY0mr0wZwrQwCQ8CfxthIzvPanCoF5NR/view?usp=sharing',
    color: '#4D96FF'
  },
  {
    id: 'cert-14',
    title: 'Prompt Engineering untuk Software Developer',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '',
    credentialUrl: 'https://drive.google.com/file/d/1rAtV0jV9h2tnkeAhDVfZC353intvGT8W/view?usp=sharing',
    color: '#9B51E0'
  }
];


