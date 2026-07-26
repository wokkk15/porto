import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t-4 border-black dark:border-white bg-[#FFD93D] text-black py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left font-heading font-bold">
        {/* Left Side: Attribution */}
        <div>
          <h3 className="font-black text-2xl uppercase tracking-tight">
            MUHAMMAD RIVALDI JEFRI
          </h3>
          <p className="font-mono text-sm mt-1 flex items-center justify-center md:justify-start gap-1">
            Dirancang & Dikembangkan dengan <Heart className="w-4 h-4 text-[#FF6B6B] fill-current" /> oleh Muhammad Rivaldi Jefri
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white neo-border neo-shadow-sm rounded-xl hover:rotate-6 transition-transform"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5 text-black" />
          </a>
          <a
            href={PERSONAL_INFO.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white neo-border neo-shadow-sm rounded-xl hover:rotate-[-6deg] transition-transform"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5 text-black" />
          </a>
          <a
            href={PERSONAL_INFO.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white neo-border neo-shadow-sm rounded-xl hover:rotate-6 transition-transform"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5 text-black" />
          </a>
        </div>

        {/* Right Side: Back To Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black neo-border neo-shadow-sm rounded-xl hover:bg-[#4D96FF] transition-colors cursor-pointer"
          >
            Kembali ke Atas <ArrowUp className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t-2 border-black/20 text-center font-mono text-xs font-bold opacity-80">
        © {new Date().getFullYear()} Muhammad Rivaldi Jefri. Hak cipta dilindungi undang-undang. Sistem Desain Neubrutalism.
      </div>
    </footer>
  );
};
