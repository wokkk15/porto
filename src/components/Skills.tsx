import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Database, Cpu, Brain, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Bahasa Pemrograman': <Code className="w-6 h-6 stroke-[2.5]" />,
    'Framework Web': <Layers className="w-6 h-6 stroke-[2.5]" />,
    'Basis Data (Database)': <Database className="w-6 h-6 stroke-[2.5]" />,
    'Internet of Things (IoT)': <Cpu className="w-6 h-6 stroke-[2.5]" />,
    'AI & Machine Learning': <Brain className="w-6 h-6 stroke-[2.5]" />,
    'Alat & Workflow': <Wrench className="w-6 h-6 stroke-[2.5]" />
  };

  const filteredCategories = activeCategory === 'Semua'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.title === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge color="#FF6B6B" size="md" className="mb-3 text-white">
          TEKNOLOGI SAYA
        </Badge>
        <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight">
          KEAHLIAN <span className="bg-[#6BCB77] text-black px-3 py-0.5 neo-border">TEKNIS</span>
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        <button
          onClick={() => setActiveCategory('Semua')}
          className={`
            px-4 py-2 font-heading font-bold text-sm rounded-xl neo-border neo-shadow-sm transition-all cursor-pointer
            ${activeCategory === 'Semua' ? 'bg-[#FFD93D] text-black scale-105' : 'bg-white dark:bg-[#1E1E24] hover:bg-gray-100'}
          `}
        >
          ⚡ Semua Keahlian
        </button>
        {SKILL_CATEGORIES.map(cat => (
          <button
            key={cat.title}
            onClick={() => setActiveCategory(cat.title)}
            className={`
              px-4 py-2 font-heading font-bold text-sm rounded-xl neo-border neo-shadow-sm transition-all cursor-pointer
              ${activeCategory === cat.title ? 'bg-[#FFD93D] text-black scale-105' : 'bg-white dark:bg-[#1E1E24] hover:bg-gray-100'}
            `}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full bg-white dark:bg-[#1E1E24] flex flex-col justify-between">
              <div>
                {/* Category Card Header */}
                <div
                  className="flex items-center gap-3 p-3.5 neo-border rounded-xl mb-6 shadow-[3px_3px_0px_0px_#000]"
                  style={{ backgroundColor: category.color }}
                >
                  <div className="p-2 bg-white text-black neo-border-sm rounded-lg">
                    {categoryIcons[category.title] || <Code className="w-5 h-5" />}
                  </div>
                  <h3 className="font-heading font-black text-xl text-black uppercase tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08, rotate: -2 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-mono font-bold text-xs sm:text-sm rounded-xl neo-border-sm neo-shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#6BCB77]" />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Count Pill */}
              <div className="mt-6 pt-4 border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 flex justify-between items-center text-xs font-mono font-bold text-zinc-500">
                <span>{category.skills.length} TEKNOLOGI</span>
                <span className="text-[#FF6B6B]">KEMAHIRAN TINGGI</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
