import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award, Heart, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <Badge color="#4D96FF" size="md" className="mb-3">
          PROFIL PROFIL
        </Badge>
        <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight">
          TENTANG <span className="bg-[#FFD93D] text-black px-3 py-0.5 neo-border">SAYA</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Avatar & Profile Card */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="relative w-full max-w-md"
          >
            {/* Background Accent Box */}
            <div className="absolute -inset-4 bg-[#FFD93D] neo-border rounded-3xl -rotate-2" />

            {/* Main Avatar Card */}
            <Card className="relative z-10 bg-white dark:bg-[#1E1E24] text-center overflow-hidden">
              <div className="relative mb-6 mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl neo-border overflow-hidden bg-[#4D96FF]">
                <img
                  src="/profile_avatar.png"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-heading font-black text-2xl uppercase tracking-tight mb-1">
                {PERSONAL_INFO.name}
              </h3>
              <p className="font-mono text-sm font-bold text-[#FF6B6B] dark:text-[#FFD93D] mb-4">
                Insinyur & Ilmuwan Komputer
              </p>

              <div className="flex items-center justify-center gap-2 font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 p-2.5 rounded-xl neo-border-sm">
                <MapPin className="w-4 h-4 text-[#FF6B6B]" />
                {PERSONAL_INFO.location}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Right Column: Key Details & Metrics */}
        <div className="lg:col-span-7 space-y-6">
          {/* Detailed Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Education Card */}
            <Card bgColor="bg-[#FFD93D] text-black">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white neo-border rounded-xl">
                  <GraduationCap className="w-7 h-7 text-black stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider opacity-80">
                    Pendidikan
                  </span>
                  <h4 className="font-heading font-black text-lg leading-tight mt-1">
                    {PERSONAL_INFO.education}
                  </h4>
                  <p className="font-sans text-xs font-bold opacity-90 mt-1">
                    {PERSONAL_INFO.university}
                  </p>
                </div>
              </div>
            </Card>

            {/* GPA Card */}
            <Card bgColor="bg-[#FF6B6B] text-white">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black text-white neo-border rounded-xl">
                  <Award className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider opacity-80">
                    IPK Kumulatif
                  </span>
                  <div className="font-heading font-black text-4xl mt-1 tracking-tight">
                    {PERSONAL_INFO.gpa} <span className="text-xl opacity-80">/ 4.00</span>
                  </div>
                  <span className="inline-block mt-1 font-mono text-xs font-bold bg-white text-black px-2 py-0.5 rounded neo-border-sm">
                    Predikat Cum Laude
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Bio Overview Card */}
          <Card className="bg-white dark:bg-[#1E1E24]">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-6 h-6 text-[#4D96FF] stroke-[2.5]" />
              <h4 className="font-heading font-black text-xl uppercase">Latar Belakang & Visi</h4>
            </div>
            <p className="font-sans text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
              Didorong oleh ketertarikan mendalam untuk mengintegrasikan perangkat fisik dengan ekosistem cloud, saya menguasai arsitektur IoT end-to-end, platform web full-stack, serta algoritma Computer Vision otomatis. Tujuan saya adalah membangun infrastruktur digital yang tangguh, efisien, dan menjawab tantangan industri nyata.
            </p>
          </Card>

          {/* Interests Badges Card */}
          <Card bgColor="bg-[#6BCB77] text-black">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-black fill-current" />
              <h4 className="font-heading font-black text-lg uppercase">Fokus Keahlian Utama</h4>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {PERSONAL_INFO.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 bg-white text-black font-heading font-bold text-sm rounded-xl neo-border neo-shadow-sm hover:scale-105 transition-transform"
                >
                  ✨ {interest}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
