import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Cpu, Code2, Eye, Sparkles, Star } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetTitle = PERSONAL_INFO.titles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetTitle.substring(0, currentText.length + 1));
        if (currentText.length + 1 === targetTitle.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(targetTitle.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD93D', '#4D96FF', '#FF6B6B', '#6BCB77', '#9B51E0']
    });
  };

  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      {/* Background Neubrutalist Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] opacity-10 dark:opacity-20 pointer-events-none" />

      {/* Floating Geometric Decorations */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 left-4 lg:left-12 hidden md:flex items-center gap-2 p-3 bg-[#FFD93D] text-black neo-border neo-shadow rounded-xl z-10"
      >
        <Cpu className="w-6 h-6 stroke-[2.5]" />
        <span className="font-mono font-bold text-xs uppercase">ESP32 & Sensor</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-24 right-4 lg:right-16 hidden md:flex items-center gap-2 p-3 bg-[#4D96FF] text-black neo-border neo-shadow rounded-xl z-10"
      >
        <Code2 className="w-6 h-6 stroke-[2.5]" />
        <span className="font-mono font-bold text-xs uppercase">Laravel & Vue</span>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-12 right-12 lg:right-28 hidden lg:flex items-center gap-2 p-3 bg-[#9B51E0] text-white neo-border neo-shadow rounded-xl z-10"
      >
        <Eye className="w-6 h-6 stroke-[2.5]" />
        <span className="font-mono font-bold text-xs uppercase">Computer Vision AI</span>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-20">
        {/* Status Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <Badge color="#6BCB77" size="md" className="gap-2 py-1.5 px-4 shadow-[3px_3px_0px_0px_#000]">
            <span className="w-2.5 h-2.5 rounded-full bg-green-900 animate-ping inline-block" />
            <Sparkles className="w-4 h-4 inline" /> Tersedia untuk Peluang Kerja
          </Badge>
        </motion.div>

        {/* Large Neubrutalist Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6 uppercase"
        >
          MUHAMMAD <br className="hidden sm:inline" />
          <span className="bg-[#FFD93D] text-black px-4 py-1 neo-border inline-block rotate-[-1deg] shadow-[6px_6px_0px_0px_#000] mt-2">
            RIVALDI JEFRI
          </span>
        </motion.h1>

        {/* Typing Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-16 sm:h-20 flex items-center justify-center mb-6"
        >
          <div className="inline-flex items-center px-6 py-3 bg-white dark:bg-[#1E1E24] neo-border neo-shadow rounded-2xl">
            <span className="font-mono font-extrabold text-xl sm:text-2xl md:text-3xl text-[#4D96FF] dark:text-[#FFD93D]">
              &gt; {currentText}
            </span>
            <span className="w-3 h-7 bg-black dark:bg-white ml-2 animate-pulse inline-block" />
          </div>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto font-sans text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-10"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <a href="#projects">
            <Button variant="yellow" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Lihat Proyek
            </Button>
          </a>

          <a href="#contact">
            <Button variant="red" size="lg" icon={<Mail className="w-5 h-5" />}>
              Hubungi Saya
            </Button>
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download="CV_MUHAMMAD_RIVALDI_JEFRI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={triggerConfetti}
          >
            <Button
              variant="blue"
              size="lg"
              icon={<Download className="w-5 h-5" />}
            >
              Unduh CV
            </Button>
          </a>

        </motion.div>

        {/* Floating Star Icon */}
        <div className="mt-12 flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-12 h-12 bg-[#FF8AAE] neo-border neo-shadow-sm rounded-full flex items-center justify-center text-black"
          >
            <Star className="w-6 h-6 fill-current" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
