import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageSquare, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge color="#FF6B6B" size="md" className="mb-3 text-white">
          KONTAK & KOLABORASI
        </Badge>
        <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight">
          MARI <span className="bg-[#FFD93D] text-black px-3 py-0.5 neo-border">TERHUBUNG</span>
        </h2>
      </div>

      {/* Large Neubrutalist Contact Box Container */}
      <div className="relative">
        {/* Background Decorative Accent Box */}
        <div className="absolute -inset-3 bg-[#FFD93D] neo-border rounded-3xl rotate-1 hidden sm:block" />

        <Card className="relative z-10 bg-white dark:bg-[#1E1E24] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Contact Details & WhatsApp Button */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="font-heading font-black text-3xl uppercase tracking-tight mb-3">
                  TETAP TERHUBUNG
                </h3>
                <p className="font-sans text-base text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                  Punya proyek menarik, riset kolaborasi, atau peluang kerja IoT/Full Stack? Jangan ragu untuk menghubungi saya melalui email, media sosial, atau WhatsApp!
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 font-mono font-bold text-sm">
                {/* Email Box */}
                <div className="flex items-center justify-between p-3.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl neo-border-sm neo-shadow-sm">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 bg-[#FF6B6B] text-white neo-border-sm rounded-lg shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="truncate text-xs sm:text-sm">{PERSONAL_INFO.contact.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 hover:bg-[#FFD93D] hover:text-black rounded-lg neo-border-sm transition-colors shrink-0 ml-2 cursor-pointer"
                    title="Salin Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center gap-3 p-3.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl neo-border-sm neo-shadow-sm">
                  <div className="p-2 bg-[#4D96FF] text-black neo-border-sm rounded-lg shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>{PERSONAL_INFO.contact.phone}</span>
                </div>
              </div>

              {/* Social Media Buttons */}
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-zinc-500 mb-3">
                  Saluran Media Sosial
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={PERSONAL_INFO.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black text-white rounded-xl neo-border neo-shadow-sm hover:translate-y-[-2px] transition-transform"
                    title="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0A66C2] text-white rounded-xl neo-border neo-shadow-sm hover:translate-y-[-2px] transition-transform"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#E4405F] text-white rounded-xl neo-border neo-shadow-sm hover:translate-y-[-2px] transition-transform"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Button CTA */}
              <div className="pt-2">
                <a href={PERSONAL_INFO.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="green"
                    size="lg"
                    fullWidth
                    icon={<MessageSquare className="w-5 h-5" />}
                  >
                    Chat via WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-[#FFFDF7] dark:bg-[#18181B] p-6 sm:p-8 rounded-2xl neo-border neo-shadow">
              <h4 className="font-heading font-black text-2xl uppercase tracking-tight mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-[#FF6B6B]" /> Kirimkan Saya Pesan
              </h4>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-[#6BCB77] text-black neo-border rounded-xl text-center space-y-3"
                >
                  <Sparkles className="w-12 h-12 mx-auto" />
                  <h5 className="font-heading font-black text-2xl uppercase">PESAN TERKIRIM!</h5>
                  <p className="font-sans font-bold text-sm">
                    Terima kasih, {formData.name || 'Teman'}! Saya akan membalas pesan Anda secepatnya.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono font-bold text-xs uppercase mb-1">Nama Anda</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-[#1E1E24] neo-border rounded-xl font-sans font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD93D]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono font-bold text-xs uppercase mb-1">Email Anda</label>
                    <input
                      type="email"
                      required
                      placeholder="Contoh: budi@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-[#1E1E24] neo-border rounded-xl font-sans font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD93D]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono font-bold text-xs uppercase mb-1">Pesan Anda</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tuliskan pesan atau ide proyek Anda di sini..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-[#1E1E24] neo-border rounded-xl font-sans font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD93D]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="yellow"
                    size="lg"
                    fullWidth
                    icon={<Send className="w-5 h-5" />}
                  >
                    Kirim Pesan
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
