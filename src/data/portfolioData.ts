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
  bio: 'Freshgraduates S1 Ilmu Komputer dengan predikat memuaskan (IPK 3.86) yang memiliki keahlian kuat dalam pengembangan Internet of Things (IoT) dan Fullstack Web Development. Berpengalaman membangun sistem integrasi perangkat keras dan lunak menggunakan ESP32, MQTT, ThingsBoard, serta framework Laravel dan Vue.js/Inertia.js.',
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
  resumeUrl: 'https://drive.google.com/file/d/1hgtA8JgJQ0NSBQwQq5_5VCkkSlAq9Ijm/view?usp=sharing'
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
    image: '/smart_trash_bin.png',
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
    image: '/bappeda.png',
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
    image: '/repo_kampus.png',
    githubUrl: 'https://github.com/wokkk15/repository',
    demoUrl: 'https://github.com/wokkk15/repository',
    featured: true,
    color: '#FF6B6B'
  },
  {
    id: 'legal-entity-extraction',
    title: 'Ekstraksi Entitas Hukum Indonesia',
    category: 'Machine Learning',
    description: 'Asisten Peneliti: Berkontribusi dalam penelitian Natural Language Processing (NLP) untuk melakukan ekstraksi entitas hukum (nama pihak, pasal, dan amar putusan) dari dokumen putusan pengadilan berbahasa Indonesia.',
    longDescription: 'Merancang skema anotasi dan melakukan penandaan entitas hukum (Named Entity Recognition/NER) pada dataset berbasis teks untuk proses pelatihan dan validasi model Machine Learning.',
    technologies: ['Python', 'NLP', 'NER', 'Machine Learning', 'Dataset Annotation'],
    image: '/legal_ner_ai.png',
    githubUrl: 'https://github.com/rivaldijefri/legal-entity-extraction-nlp',
    demoUrl: 'https://huggingface.co/spaces/rivaldijefri/indonesian-legal-ner',
    featured: true,
    color: '#9B51E0'
  },
  {
    id: 'coral-reef-attention',
    title: 'Klasifikasi Terumbu Karang (ResNet & Attention)',
    category: 'Machine Learning',
    description: 'Asisten Peneliti: Melakukan pengumpulan, pengorganisasian, dan studi literatur kritis terhadap jurnal ilmiah internasional terkait arsitektur Deep Learning, Residual Networks (ResNet), dan Multi-Head Attention.',
    longDescription: 'Menganalisis metodologi penelitian terbaru dari berbagai database ilmiah sebagai dasar pengembangan kerangka model riset pemrosesan citra (Computer Vision) untuk klasifikasi struktur terumbu karang.',
    technologies: ['Deep Learning', 'ResNet', 'Multi-Head Attention', 'Computer Vision', 'Python'],
    image: '/legal_ner_ai.png',
    githubUrl: 'https://github.com/rivaldijefri',
    demoUrl: '#',
    featured: false,
    color: '#FF8AAE'
  },
  {
    id: 'pengabdian-masyarakat-sman5',
    title: 'Pelatihan Modul Interaktif SMAN 5 Parepare',
    category: 'Pengembangan Web',
    description: 'Pengabdian Masyarakat: Menyusun buku panduan teknis dan memberikan bimbingan teknis pembuatan modul pembelajaran digital interaktif berbasis aplikasi Quizizz dan Google Slides bagi guru SMAN 5 Parepare.',
    longDescription: 'Menyusun buku panduan teknis yang terstruktur untuk membantu guru SMAN 5 Parepare menguasai pembuatan modul pembelajaran digital secara mandiri serta memberikan pendampingan langsung penggunaan Quizizz dan Google Slides.',
    technologies: ['Quizizz', 'Google Slides', 'Modul Digital', 'Pengabdian Masyarakat'],
    image: '/repo_kampus.png',
    githubUrl: 'https://github.com/rivaldijefri',
    demoUrl: '#',
    featured: false,
    color: '#6BCB77'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 't5',
    role: 'Pengembang IoT (Smart Trash Bin)',
    category: 'Pengalaman Projek',
    period: 'Agustus 2025 – April 2026',
    institution: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    description: 'Merancang dan mengembangkan sistem tempat sampah pintar berbasis ESP32, sensor ultrasonik, rain sensor, proximity induktif, MQTT, ThingsBoard, serta aktuator motor servo & stepper.',
    skills: ['ESP32', 'MQTT', 'ThingsBoard', 'Sensor Ultrasonik', 'Servo & Stepper'],
    color: '#FFD93D'
  },
  {
    id: 't4',
    role: 'Asisten Dosen - Basis Data',
    category: 'Pengajaran Akademik',
    period: 'Oktober 2025 – Januari 2026',
    institution: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    description: 'Mendampingi dosen pengampu dan membimbing mahasiswa dalam memahami konsep fundamental basis data, perancangan Entity Relationship Diagram (ERD), normalisasi tabel, dan penulisan query SQL yang efisien.',
    skills: ['SQL', 'MySQL', 'ERD', 'Normalisasi Tabel', 'Optimasi Query'],
    color: '#6BCB77'
  },
  {
    id: 't3',
    role: 'Asisten Dosen - Pemrograman Web',
    category: 'Pengajaran Akademik',
    period: 'April 2025 – Juni 2025',
    institution: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    description: 'Memberikan bimbingan teknis, pemecahan masalah (troubleshooting), dan evaluasi kode kepada mahasiswa dalam pengembangan proyek akhir aplikasi web berbasis Laravel, CodeIgniter, dan PHP Native.',
    skills: ['Laravel', 'CodeIgniter 3', 'PHP Native', 'Troubleshooting', 'Evaluasi Kode'],
    color: '#4D96FF'
  },
  {
    id: 't2',
    role: 'Asisten Peneliti - Ekstraksi Entitas Hukum (NLP)',
    category: 'Riset Akademik',
    period: '2024',
    institution: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    description: 'Berkontribusi dalam penelitian Natural Language Processing (NLP) ekstraksi entitas hukum dari dokumen putusan pengadilan Indonesia serta merancang skema anotasi dan penandaan NER.',
    skills: ['Python', 'NLP', 'Named Entity Recognition (NER)', 'Dataset Annotation'],
    color: '#9B51E0'
  },
  {
    id: 't1',
    role: 'Asisten Peneliti - Klasifikasi Terumbu Karang (CV)',
    category: 'Riset Akademik',
    period: '2023',
    institution: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    description: 'Melakukan pengumpulan, pengorganisasian, dan studi literatur kritis terhadap jurnal ilmiah internasional terkait arsitektur Deep Learning, ResNet, dan Multi-Head Attention untuk klasifikasi terumbu karang.',
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
    image: '/bnsp.jpeg',
    credentialUrl: 'https://drive.google.com/file/d/15U8zOOLuH14E6biw4MQ_WcNkrOO8bC-p/view?usp=sharing',
    color: '#FFD93D'
  },
  {
    id: 'cert-2',
    title: 'Belajar Back-End Pemula dengan Python',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '/back-end_pemula dengan pyhton.png',
    credentialUrl: 'https://drive.google.com/file/d/1owNyZ-d3mZTFigaeJ6BYUupJlvcezUOM/view?usp=sharing',
    color: '#4D96FF'
  },
  {
    id: 'cert-3',
    title: 'Belajar Fundamental Deep Learning',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '/fundamental deep learning.png',
    credentialUrl: 'https://drive.google.com/file/d/1E_sVrrc_6NSdTgCoNPV2rg53RMuzHxEk/view?usp=sharing',
    color: '#9B51E0'
  },
  {
    id: 'cert-4',
    title: 'Belajar Membuat Aplikasi Back-End Pemula dengan Google Cloud',
    issuer: 'Dicoding Indonesia & Google Cloud',
    date: '2026',
    image: '/aplikasi back-end dengan google cloud.png',
    credentialUrl: 'https://drive.google.com/file/d/148GbxZ-2sEBfq88ykM0eXK5xuq2evt0I/view?usp=sharing',
    color: '#6BCB77'
  },
  {
    id: 'cert-5',
    title: 'Belajar Penerapan AI di Aplikasi Web',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '/penerapan ai di web.png',
    credentialUrl: 'https://drive.google.com/file/d/1R2YSZACRyRhqiQsdv-VcbPxAUyiK0tmr/view?usp=sharing',
    color: '#FF6B6B'
  },
  {
    id: 'cert-6',
    title: 'Membangun Sistem Machine Learning',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    image: '/sistem ML.png',
    credentialUrl: 'https://drive.google.com/file/d/1BEmJhdnqa8REbGcJUqLKdIYA-pJ-UPcO/view?usp=sharing',
    color: '#FF8AAE'
  }
];


