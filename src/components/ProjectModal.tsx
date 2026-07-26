import React from 'react';
import { ExternalLink, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import type { Project } from '@/data/portfolioData';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        {/* Project Image Banner */}
        <div className="relative w-full h-64 sm:h-72 rounded-xl neo-border overflow-hidden bg-zinc-200">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3">
            <Badge color={project.color} size="md">
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <h4 className="font-heading font-black text-xl uppercase mb-2">Gambaran Proyek</h4>
          <p className="font-sans text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Technologies Used */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-5 h-5 text-[#4D96FF]" />
            <h4 className="font-heading font-black text-lg uppercase">Teknologi & Infrastruktur</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-zinc-800 text-black dark:text-white font-mono font-bold text-xs rounded-lg neo-border-sm neo-shadow-sm"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#6BCB77]" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 border-t-2 border-dashed border-zinc-300 dark:border-zinc-700">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="dark" fullWidth icon={<GithubIcon className="w-5 h-5" />}>
              Kode Sumber
            </Button>
          </a>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="yellow" fullWidth icon={<ExternalLink className="w-5 h-5" />}>
              Demo Langsung
            </Button>
          </a>
        </div>
      </div>
    </Modal>
  );
};
