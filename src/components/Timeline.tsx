import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { TIMELINE } from '@/data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16 sm:py-24 max-w-5xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <Badge color="#6BCB77" size="md" className="mb-3 text-black">
          REKAM JEJAK
        </Badge>
        <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight">
          RIWAYAT <span className="bg-[#FF6B6B] text-white px-3 py-0.5 neo-border">PENGALAMAN</span>
        </h2>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l-4 border-black dark:border-white ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
        {TIMELINE.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative"
          >
            {/* Timeline Circle Node */}
            <div
              className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-xl neo-border neo-shadow-sm flex items-center justify-center text-black font-bold z-10"
              style={{ backgroundColor: item.color }}
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>

            {/* Date Badge on Desktop Left */}
            <div className="hidden sm:block absolute -left-44 top-3 font-mono font-black text-sm text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-800 px-3 py-1 neo-border-sm neo-shadow-sm rounded-lg text-center w-28">
              {item.period}
            </div>

            {/* Content Card */}
            <Card className="bg-white dark:bg-[#1E1E24]">
              {/* Mobile Period Tag */}
              <div className="sm:hidden inline-flex items-center gap-1 font-mono text-xs font-bold bg-[#FFD93D] text-black px-2.5 py-0.5 rounded-md neo-border-sm mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {item.period}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-heading font-black text-2xl uppercase tracking-tight">
                  {item.role}
                </h3>
                <Badge color={item.color} size="sm">
                  {item.category}
                </Badge>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-4">
                <Building2 className="w-4 h-4 text-[#4D96FF]" />
                {item.institution}
              </div>

              <p className="font-sans text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 font-mono font-bold text-xs rounded-lg neo-border-sm"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#6BCB77]" />
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
