import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye } from 'lucide-react';
import { CERTIFICATES } from '@/data/portfolioData';
import type { CertificateItem } from '@/data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';

export const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-16 sm:py-24 max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge color="#FFD93D" size="md" className="mb-3 text-black">
          SERTIFIKASI & APRESIASI
        </Badge>
        <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight">
          PENGHARGAAN <span className="bg-[#6BCB77] text-black px-3 py-0.5 neo-border">SERTIFIKAT</span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATES.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
          >
            <Card className="h-full bg-white dark:bg-[#1E1E24] flex flex-col justify-between overflow-hidden">
              <div>
                {/* Thumbnail Image with Neubrutalist Frame */}
                <div className="relative w-full h-44 rounded-xl neo-border overflow-hidden mb-4 bg-zinc-100 group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge color={cert.color} size="sm">
                      {cert.date}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#FF6B6B] mb-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                <h3 className="font-heading font-black text-lg uppercase tracking-tight leading-snug mb-4">
                  {cert.title}
                </h3>
              </div>

              {/* View Certificate Button */}
              <div className="pt-3 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800">
                <Button
                  variant="yellow"
                  size="sm"
                  fullWidth
                  onClick={() => setSelectedCertificate(cert)}
                  icon={<Eye className="w-4 h-4" />}
                >
                  Lihat Sertifikat
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Preview Modal */}
      {selectedCertificate && (
        <Modal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          title={selectedCertificate.title}
        >
          <div className="space-y-4 text-center">
            <div className="relative w-full h-72 sm:h-96 rounded-xl neo-border overflow-hidden bg-zinc-100">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between font-mono text-sm font-bold bg-zinc-100 dark:bg-zinc-800 p-3 rounded-xl neo-border-sm">
              <span>Penerbit: {selectedCertificate.issuer}</span>
              <span className="text-[#FF6B6B]">Tahun: {selectedCertificate.date}</span>
            </div>
            <p className="font-sans text-xs text-zinc-500 font-medium">
              Kredensial digital terverifikasi yang diberikan kepada Muhammad Rivaldi Jefri atas pencapaian keahlian.
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
};
