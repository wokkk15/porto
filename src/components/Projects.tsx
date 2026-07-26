import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Filter } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS } from '@/data/portfolioData';
import type { Project } from '@/data/portfolioData';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['Semua', 'Internet of Things', 'Sistem Informasi Pemerintah', 'Pengembangan Web', 'Machine Learning'];

  const filteredProjects = selectedCategory === 'Semua'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge color="#4D96FF" size="md" className="mb-3">
          SHOWCASE PORTFOLIO
        </Badge>
        <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight">
          PROYEK <span className="bg-[#FFD93D] text-black px-3 py-0.5 neo-border">UNGGULAN</span>
        </h2>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`
              inline-flex items-center gap-1.5 px-4 py-2 font-heading font-bold text-xs sm:text-sm rounded-xl neo-border neo-shadow-sm transition-all cursor-pointer
              ${selectedCategory === cat ? 'bg-[#FFD93D] text-black scale-105 shadow-[4px_4px_0px_0px_#000]' : 'bg-white dark:bg-[#1E1E24] hover:bg-gray-100'}
            `}
          >
            <Filter className="w-3.5 h-3.5" />
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <Card
                className="h-full bg-white dark:bg-[#1E1E24] flex flex-col justify-between overflow-hidden group cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                <div>
                  {/* Image Container with Category Badge */}
                  <div className="relative w-full h-56 sm:h-64 rounded-xl neo-border overflow-hidden mb-6 bg-zinc-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge color={project.color} size="sm">
                        {project.category}
                      </Badge>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white text-black p-2 rounded-xl neo-border neo-shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-heading font-black text-2xl uppercase tracking-tight mb-3 group-hover:text-[#4D96FF] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 font-mono font-bold text-xs rounded-lg neo-border-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div
                  className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-zinc-300 dark:border-zinc-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="dark" size="sm" fullWidth icon={<GithubIcon className="w-4 h-4" />}>
                      Kode Sumber
                    </Button>
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="yellow" size="sm" fullWidth icon={<ExternalLink className="w-4 h-4" />}>
                      Demo Langsung
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
