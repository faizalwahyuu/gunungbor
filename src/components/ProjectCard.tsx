import React from 'react';
import { MapPin, ArrowUpRight, Mountain } from 'lucide-react';
import { ProjectItem } from '../types';
import { SafeImage } from './SafeImage';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Buka studi kasus proyek ${project.title}`}
      className="group relative flex flex-col bg-[#171D18] border border-white/10 hover:border-[#D8FF3E] transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D8FF3E]"
    >
      {/* Visual Image container with aspect-ratio 16/10 */}
      <div className="relative overflow-hidden w-full aspect-[16/10]">
        <SafeImage
          src={project.image}
          fallbackSrc={project.fallbackImage}
          alt={project.title}
          aspectRatio="16 / 10"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Project Number badge */}
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#0B0F0D]/85 border border-white/15 font-mono-tech text-xs font-bold text-[#D8FF3E]">
          {project.number}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-[#0B0F0D]/85 border border-white/15 font-mono-tech text-[10px] uppercase text-[#F4F5F1]">
          {project.category}
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-[#0B0F0D]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="px-3 py-1.5 bg-[#D8FF3E] text-[#0B0F0D] font-mono-tech text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            Buka Lightbox <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Info Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Location tag */}
          <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#A7AEA5] mb-2 uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#D8FF3E] shrink-0" />
            <span>{project.location}, {project.province}</span>
          </div>

          <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-[#F4F5F1] group-hover:text-[#D8FF3E] transition-colors mb-2.5 leading-snug">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#A7AEA5] line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Technical specs footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-[#A7AEA5]">
          <span className="flex items-center gap-1">
            <Mountain className="w-3 h-3 text-[#D8FF3E]" /> Kedalaman: <strong className="text-[#F4F5F1]">{project.depthMeters}m</strong>
          </span>
          <span className="text-[#D8FF3E] uppercase font-bold">
            Tahun {project.year}
          </span>
        </div>
      </div>
    </div>
  );
};
