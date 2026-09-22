import React, { useState } from 'react';
import { projectsList } from '../data/projects';
import { ProjectItem } from '../types';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Geotechnical', 'Rock Drilling', 'Slope Drilling', 'Exploration Drilling'];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsList
    : projectsList.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[#111713] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <SectionTitle
            eyebrow="[ 05 // STUDI KASUS LAPANGAN ]"
            title="PROJECTS IN THE FIELD."
            description="Dokumentasi rekayasa pengeboran pada berbagai formasi geologi dan elevasi ekstrem di wilayah Indonesia."
            className="mb-0"
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 font-mono-tech text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 border transition-colors cursor-pointer uppercase ${
                  activeFilter === cat
                    ? 'bg-[#D8FF3E] text-[#0B0F0D] border-[#D8FF3E] font-bold'
                    : 'bg-[#171D18] text-[#A7AEA5] border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Projects Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* Subtle disclaimer per PRD Section 19 & 43 */}
        <div className="mt-8 text-center">
          <span className="font-mono-tech text-[11px] text-[#A7AEA5]/60 uppercase">
            * Studi kasus di atas merupakan representasi kapabilitas teknis metodologi & penanganan medan lapangan.
          </span>
        </div>
      </div>
    </section>
  );
};
