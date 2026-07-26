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
  bio: 'Lulusan baru (Fresh Graduate) S1 Ilmu Komputer yang berdedikasi dalam bidang Internet of Things (IoT), Pengembangan Web, dan Kecerdasan Buatan (AI). Saya membangun aplikasi scalable yang menghubungkan perangkat keras dan perangkat lunak menjadi solusi digital berdampak tinggi.',
  location: 'Parepare, Indonesia',
  education: 'Sarjana Komputer (S.Kom)',
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
    email: 'rivaldijefri.dev@gmail.com',
    phone: '+62 822-9111-8842',
    whatsapp: 'https://wa.me/6282291118842?text=Halo%20Rivaldi!%20Saya%20melihat%20portfolio%20website%20Anda.',
    linkedin: 'https://linkedin.com/in/muhammad-rivaldi-jefri',
    github: 'https://github.com/rivaldijefri',
    instagram: 'https://instagram.com/rivaldijefri_'
  }
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
      { name: 'CodeIgniter', badgeColor: '#EF4223' },
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
    description: 'Merancang dan mengembangkan sistem manajemen sampah pintar berbasis IoT menggunakan ESP32, MQTT, sensor ultrasonik, sensor hujan, sensor proximity induktif, motor servo, dan motor stepper. Terintegrasi dengan dashboard ThingsBoard untuk pemantauan real-time.',
    longDescription: 'Solusi perangkat keras & lunak cerdas end-to-end. Memiliki mekanisme penutup otomatis yang digerakkan oleh sensor jarak ultrasonik dan sensor logam/non-logam proximity induktif, perlindungan otomatis saat hujan, kompaksi sampah otomatis menggunakan motor stepper, serta sinksronisasi telemetry cloud langsung ke dashboard ThingsBoard IoT.',
    technologies: ['ESP32', 'MQTT', 'ThingsBoard', 'Arduino', 'Laravel', 'MySQL'],
    image: '/smart_trash_bin.png',
    githubUrl: 'https://github.com/rivaldijefri/smart-trash-bin-iot',
    demoUrl: 'https://thingsboard.cloud/dashboard/smart-trash',
    featured: true,
    color: '#FFD93D'
  },
  {
    id: 'e-monev-bappeda',
    title: 'E-Monev Bappeda',
    category: 'Sistem Informasi Pemerintah',
    description: 'Membangun aplikasi frontend responsif untuk sistem monitoring dan evaluasi pembangunan daerah menggunakan Vue.js, Laravel, dan Inertia.js.',
    longDescription: 'Portal pemerintah daerah yang dibangun khusus untuk Bappeda dalam memantau program pembangunan daerah multi-tahun, alokasi anggaran, persentase kemajuan fisik real-time, pembuatan laporan PDF otomatis, dan visualisasi data interaktif bagi pemangku kebijakan.',
    technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
    image: '/emonev_bappeda.png',
    githubUrl: 'https://github.com/rivaldijefri/e-monev-bappeda',
    demoUrl: 'https://emonev.bappeda.go.id',
    featured: true,
    color: '#4D96FF'
  },
  {
    id: 'repository-website',
    title: 'Website Repositori Kampus',
    category: 'Pengembangan Web',
    description: 'Mengembangkan sistem repositori akademik kampus lengkap dengan autentikasi pengguna, manajemen berkas, pencarian cepat, dan dashboard admin menggunakan CodeIgniter dan MySQL.',
    longDescription: 'Brankas dokumen akademik aman yang memungkinkan mahasiswa dan dosen mengunggah, mengindeks, mencari, dan meninjau naskah skripsi, publikasi riset, dan berkas data penelitian dengan kontrol hak akses berbasis peran.',
    technologies: ['CodeIgniter', 'MySQL', 'Bootstrap', 'JavaScript', 'PHP'],
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
    description: 'Asisten peneliti dalam pengenalan entitas bernama (NER) teks hukum Indonesia menggunakan Pemrosesan Bahasa Alami (NLP) dan Machine Learning.',
    longDescription: 'Mengembangkan model Named Entity Recognition (NER) yang disesuaikan khusus untuk berkas putusan Mahkamah Agung dan regulasi hukum Indonesia. Berhasil mengekstrak nomor undang-undang, lembaga hukum, sanksi, dan amar putusan dengan akurasi F1-score tinggi.',
    technologies: ['Python', 'Machine Learning', 'Computer Vision', 'OpenCV', 'SpaCy', 'PyTorch'],
    image: '/legal_ner_ai.png',
    githubUrl: 'https://github.com/rivaldijefri/legal-entity-extraction-nlp',
    demoUrl: 'https://huggingface.co/spaces/rivaldijefri/indonesian-legal-ner',
    featured: true,
    color: '#9B51E0'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 't5',
    role: 'Pengembang IoT (IoT Developer)',
    category: 'Pengalaman Profesional',
    period: '2023 - Sekarang',
    institution: 'Laboratorium Teknologi Terintegrasi & Embedded',
    description: 'Merancang sirkuit perangkat keras, mikrokontroler (ESP32/Arduino), bridge telemetri MQTT, dan mengintegrasikan jaringan sensor IoT dengan dashboard pemantauan cloud.',
    skills: ['ESP32', 'MQTT', 'C++', 'ThingsBoard', 'Desain Sirkuit'],
    color: '#FFD93D'
  },
  {
    id: 't4',
    role: 'Asisten Peneliti - NLP',
    category: 'Riset Akademik',
    period: '2023 - 2024',
    institution: 'Laboratorium AI & Data Science',
    description: 'Peneliti utama dalam Pengenalan Entitas Bernama (NER) Dokumen Hukum Indonesia. Memproses korpus hukum, melakukan anotasi data, dan mengevaluasi model NLP berbasis Transformer.',
    skills: ['Python', 'NLP', 'Transformers', 'SpaCy', 'Data Mining'],
    color: '#9B51E0'
  },
  {
    id: 't3',
    role: 'Asisten Peneliti - Computer Vision',
    category: 'Riset Akademik',
    period: '2023',
    institution: 'Pusat Riset Computer Vision & Robotika',
    description: 'Mengembangkan alur klasifikasi citra dan deteksi objek menggunakan OpenCV dan jaringan saraf tiruan (deep neural networks) untuk sistem inspeksi otomatis.',
    skills: ['OpenCV', 'Python', 'CNNs', 'Object Detection', 'PyTorch'],
    color: '#FF6B6B'
  },
  {
    id: 't2',
    role: 'Asisten Dosen - Pemrograman Web',
    category: 'Pengajaran Akademik',
    period: '2022 - 2023',
    institution: 'Program Studi Ilmu Komputer',
    description: 'Membimbing lebih dari 120 mahasiswa dalam praktikum rekayasa web full-stack, mencakup HTML/CSS, JavaScript, PHP, arsitektur MVC, dan API web modern.',
    skills: ['JavaScript', 'PHP', 'Laravel', 'Arsitektur Web', 'Mentoring'],
    color: '#4D96FF'
  },
  {
    id: 't1',
    role: 'Asisten Dosen - Basis Data',
    category: 'Pengajaran Akademik',
    period: '2022',
    institution: 'Program Studi Ilmu Komputer',
    description: 'Mengampu sesi praktikum laboratorium basis data yang mencakup perancangan basis data relasional, pemodelan E-R, pengindeksan SQL, normalisasi, dan stored procedure MySQL.',
    skills: ['SQL', 'MySQL', 'Pemodelan Relasional', 'Optimasi Kueri'],
    color: '#6BCB77'
  }
];

export const ORGANIZATIONS: OrganizationItem[] = [
  {
    id: 'hero',
    name: 'Habibie Engineering Robotic Organization',
    role: 'Anggota Inti Divisi Hardware & Embedded Systems',
    period: '2021 - 2024',
    description: 'Insinyur utama dalam pembuatan prototipe robotika kompetitif, navigasi rover otonom, dan modul kontrol embedded.',
    achievements: [
      'Pengembang utama perangkat keras untuk kompetisi robotika tingkat regional',
      'Meningkatkan partisipasi dengan mengoperasikan 5+ workshop IoT & robotika',
      'Merancang sirkuit PCB kustom untuk node sensor mikrokontroler'
    ],
    color: '#FFD93D',
    badge: 'HERO Robotics'
  },
  {
    id: 'bem',
    name: 'BEM Institut Teknologi Bacharuddin Jusuf Habibie',
    role: 'Ketua Departemen Teknologi & Informasi',
    period: '2022 - 2023',
    description: 'Memimpin inisiatif transformasi digital, pengembanan portal web kampus, dan kegiatan teknologi mahasiswa.',
    achievements: [
      'Mengarahkan pengembangan portal web digital kemahasiswaan kampus',
      'Mengordinasikan Hackathon kampus yang diikuti oleh lebih dari 200 peserta',
      'Mengelola infrastruktur TI untuk sistem pemilu mahasiswa digital'
    ],
    color: '#4D96FF',
    badge: 'BEM ITH'
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'c1',
    title: 'Pengembang Sistem IoT Tersertifikasi',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    date: '2024',
    image: '/smart_trash_bin.png',
    credentialUrl: '#',
    color: '#FFD93D'
  },
  {
    id: 'c2',
    title: 'Spesialis Rekayasa Web Full Stack',
    issuer: 'Dicoding Academy',
    date: '2023',
    image: '/emonev_bappeda.png',
    credentialUrl: '#',
    color: '#4D96FF'
  },
  {
    id: 'c3',
    title: 'Praktisi Computer Vision & Deep Learning',
    issuer: 'Lembaga Riset AI',
    date: '2023',
    image: '/legal_ner_ai.png',
    credentialUrl: '#',
    color: '#FF6B6B'
  },
  {
    id: 'c4',
    title: 'Penghargaan Kelulusan & IPK Tinggi (3.86)',
    issuer: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    date: '2024',
    image: '/campus_repository.png',
    credentialUrl: '#',
    color: '#6BCB77'
  }
];
