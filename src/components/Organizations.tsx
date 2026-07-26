import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, CheckCircle2, Award } from 'lucide-react';
import { ORGANIZATIONS } from '@/data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export const Organizations: React.FC = () => {
  return (
    <section id="organizations" className="py-16 sm:py-24 max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge color="#9B51E0" size="md" className="mb-3 text-white">
          KEPEMIMPINAN & KETERLIBATAN
        </Badge>
        <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight">
          PERAN <span className="bg-[#4D96FF] text-black px-3 py-0.5 neo-border">ORGANISASI</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ORGANIZATIONS.map((org, idx) => (
          <motion.div
            key={org.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="h-full bg-white dark:bg-[#1E1E24] flex flex-col justify-between">
              <div>
                {/* Header Badge & Name */}
                <div className="flex items-center justify-between mb-4">
                  <Badge color={org.color} size="md">
                    {org.badge}
                  </Badge>
                  <span className="font-mono font-bold text-xs bg-zinc-100 dark:bg-zinc-800 px-3 py-1 neo-border-sm rounded-lg">
                    {org.period}
                  </span>
                </div>

                <h3 className="font-heading font-black text-2xl uppercase tracking-tight mb-2">
                  {org.name}
                </h3>

                <div className="flex items-center gap-2 font-mono text-sm font-bold text-[#FF6B6B] dark:text-[#FFD93D] mb-4">
                  <Users className="w-4 h-4" />
                  {org.role}
                </div>

                <p className="font-sans text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-6">
                  {org.description}
                </p>

                {/* Key Achievements List */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-[#FFD93D]" /> Pencapaian & Kontribusi Utama
                  </h4>
                  {org.achievements.map((achievement, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 font-sans text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#6BCB77] shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800 flex justify-between items-center text-xs font-mono font-bold text-zinc-500">
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-[#4D96FF]" /> KONTRIBUSI AKTIF
                </span>
                <span className="text-[#9B51E0]">KEPEMIMPINAN</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
