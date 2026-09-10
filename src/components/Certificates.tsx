import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Eye, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { CERTIFICATES } from '@/data/portfolioData';
import type { CertificateItem } from '@/data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';

export const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const INITIAL_COUNT = 6; // 2 baris x 3 kolom = 6 sertifikat
  const displayedCertificates = showAll ? CERTIFICATES : CERTIFICATES.slice(0, INITIAL_COUNT);

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedCertificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <Card className="h-full bg-white dark:bg-[#1E1E24] flex flex-col justify-between overflow-hidden p-6">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge color={cert.color} size="sm" className="text-black font-extrabold">
                      {cert.issuer}
                    </Badge>
                    <span className="font-mono text-xs font-bold text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded neo-border-sm">
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#FF6B6B] mb-2">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>

                  <h3 className="font-heading font-black text-lg uppercase tracking-tight leading-snug mb-4">
                    {cert.title}
                  </h3>
                </div>

                {/* View Certificate Buttons */}
                <div className="pt-3 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="dark"
                    size="sm"
                    fullWidth
                    onClick={() => setSelectedCertificate(cert)}
                    icon={<Eye className="w-4 h-4" />}
                  >
                    Detail
                  </Button>
                  {cert.credentialUrl && cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant="yellow"
                        size="sm"
                        fullWidth
                        icon={<ExternalLink className="w-4 h-4" />}
                      >
                        Buka Drive
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show All / Show Less Button */}
      {CERTIFICATES.length > INITIAL_COUNT && (
        <div className="mt-10 text-center">
          <Button
            variant="yellow"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            icon={showAll ? <ChevronUp className="w-5 h-5 stroke-[2.5]" /> : <ChevronDown className="w-5 h-5 stroke-[2.5]" />}
          >
            {showAll
              ? 'Tampilkan Lebih Sedikit'
              : `Lihat Semua Sertifikat (${CERTIFICATES.length})`}
          </Button>
        </div>
      )}

      {/* Lightbox Preview Modal */}
      {selectedCertificate && (
        <Modal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          title={selectedCertificate.title}
        >
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-between font-mono text-sm font-bold bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl neo-border-sm">
              <span>Penerbit: {selectedCertificate.issuer}</span>
              <span className="text-[#FF6B6B]">Tahun: {selectedCertificate.date}</span>
            </div>
            <p className="font-sans text-xs text-zinc-500 font-medium">
              Kredensial digital terverifikasi yang diberikan kepada Muhammad Rivaldi Jefri atas pencapaian keahlian.
            </p>
            {selectedCertificate.credentialUrl && selectedCertificate.credentialUrl !== '#' && (
              <div className="pt-2">
                <a
                  href={selectedCertificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button variant="yellow" size="md" fullWidth icon={<ExternalLink className="w-4 h-4" />}>
                    Buka Sertifikat di Google Drive
                  </Button>
                </a>
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
};

