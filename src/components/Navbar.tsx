import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Volume2, VolumeX, Menu, X, Terminal } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, soundEnabled, toggleSound } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Tentang', href: '#about' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Pengalaman', href: '#timeline' },
    { label: 'Organisasi', href: '#organizations' },
    { label: 'Sertifikat', href: '#certificates' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <header className="sticky top-4 z-40 px-4 max-w-7xl mx-auto mb-6">
      <nav className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white dark:bg-[#1E1E24] neo-border neo-shadow rounded-2xl">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-heading font-black text-xl tracking-tight hover:rotate-[-2deg] transition-transform"
        >
          <div className="w-10 h-10 rounded-xl bg-[#FFD93D] neo-border flex items-center justify-center font-mono font-bold text-black shadow-[2px_2px_0px_0px_#000]">
            <Terminal className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="hidden sm:inline-block">RIVALDI<span className="text-[#FF6B6B]">.DEV</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 font-heading font-bold text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-lg hover:bg-[#FFD93D] hover:text-black dark:hover:bg-[#FFD93D] dark:hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls (Theme, Sound, Mobile Menu) */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <Button
            variant="white"
            size="sm"
            onClick={toggleSound}
            aria-label="Atur Suara"
            title={soundEnabled ? 'Matikan Suara UI' : 'Aktifkan Suara UI'}
            className="!p-2"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#6BCB77]" />
            ) : (
              <VolumeX className="w-4 h-4 text-gray-400" />
            )}
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="yellow"
            size="sm"
            onClick={toggleTheme}
            aria-label="Atur Tema"
            title={theme === 'dark' ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
            className="!p-2"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-black" />
            ) : (
              <Moon className="w-4 h-4 text-black" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="blue"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden !p-2"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-black" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-2 p-4 bg-[#FFD93D] text-black neo-border neo-shadow rounded-2xl flex flex-col gap-2 font-heading font-bold"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 bg-white rounded-xl neo-border neo-shadow-sm hover:bg-[#4D96FF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
