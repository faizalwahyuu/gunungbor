import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Wrench, Mountain, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';
import { SafeImage } from './SafeImage';
import { Button } from './Button';
import { openWhatsApp } from '../utils/whatsapp';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  projects,
  onClose,
  onSelectProject,
}) => {
  const currentIndex = project ? projects.findIndex((p) => p.id === project.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectProject(projects[currentIndex - 1]);
    } else {
      onSelectProject(projects[projects.length - 1]);
    }
  }, [currentIndex, projects, onSelectProject]);

  const handleNext = useCallback(() => {
    if (currentIndex < projects.length - 1) {
      onSelectProject(projects[currentIndex + 1]);
    } else {
      onSelectProject(projects[0]);
    }
  }, [currentIndex, projects, onSelectProject]);

  useEffect(() => {
    if (!project) return;

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Keyboard handlers (ESC, ArrowLeft, ArrowRight)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, handlePrev, handleNext]);

  if (!project) return null;

  const handleConsultSimilar = () => {
    const message = `Halo TERRADRILL, saya melihat studi kasus ${project.title} (${project.location}, ${project.province}). Kami memiliki proyek dengan tantangan serupa. Mohon diskusi kelayakan teknis.`;
    openWhatsApp(message);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-project-title"
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#111713] border border-[#D8FF3E]/40 shadow-2xl p-5 sm:p-8 text-[#F4F5F1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar: Nav & Close */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-[#D8FF3E] font-bold">
              [PROJECT {project.number} OF {String(projects.length).padStart(2, '0')}]
            </span>
            <span className="hidden sm:inline-block font-mono-tech text-[11px] text-[#A7AEA5] uppercase px-2 py-0.5 border border-white/10">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 border border-white/20 bg-[#171D18] hover:bg-[#D8FF3E] hover:text-[#0B0F0D] flex items-center justify-center transition-colors text-white"
              aria-label="Proyek sebelumnya (Panah Kiri)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 border border-white/20 bg-[#171D18] hover:bg-[#D8FF3E] hover:text-[#0B0F0D] flex items-center justify-center transition-colors text-white"
              aria-label="Proyek berikutnya (Panah Kanan)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 border border-white/20 bg-[#171D18] hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors text-white ml-2"
              aria-label="Tutup lightbox (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Large Media Display */}
        <div className="relative mb-6 border border-white/15 overflow-hidden">
          <SafeImage
            src={project.image}
            fallbackSrc={project.fallbackImage}
            alt={project.title}
            aspectRatio="16 / 9"
            className="w-full max-h-[460px] object-cover"
          />

          {/* Location watermark */}
          <div className="absolute bottom-3 left-3 bg-[#0B0F0D]/85 border border-white/10 px-3 py-1.5 flex items-center gap-1.5 text-xs font-mono-tech text-[#F4F5F1]">
            <MapPin className="w-3.5 h-3.5 text-[#D8FF3E]" />
            {project.location}, {project.province}
          </div>
        </div>

        {/* Metadata Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <h3
              id="lightbox-project-title"
              className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-[#F4F5F1] mb-3"
            >
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-[#A7AEA5] leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="p-4 bg-[#171D18] border border-white/10">
              <h4 className="font-mono-tech text-xs uppercase text-[#E3A83B] mb-1.5 flex items-center gap-1.5">
                <Mountain className="w-4 h-4" /> Tantangan Medan Lapangan
              </h4>
              <p className="text-xs sm:text-sm text-[#F4F5F1]/90 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* Technical Specs Sidebar */}
          <div className="p-5 bg-[#171D18] border border-white/10 space-y-4 font-mono-tech text-xs">
            <div>
              <div className="text-[#A7AEA5] text-[10px] uppercase tracking-wider mb-1">
                KEDALAMAN PENGEBORAN
              </div>
              <div className="text-xl font-bold text-[#D8FF3E]">
                {project.depthMeters} Meter
              </div>
            </div>

            <div>
              <div className="text-[#A7AEA5] text-[10px] uppercase tracking-wider mb-1">
                EQUIPMENT DIKERAHKAN
              </div>
              <div className="text-sm font-semibold text-[#F4F5F1] flex items-start gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[#D8FF3E] shrink-0 mt-0.5" />
                <span>{project.equipmentUsed}</span>
              </div>
            </div>

            <div>
              <div className="text-[#A7AEA5] text-[10px] uppercase tracking-wider mb-1">
                PROVINSI / WILAYAH
              </div>
              <div className="text-sm text-[#F4F5F1]">
                {project.province}
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <div className="text-[10px] text-[#A7AEA5] mb-3">
                Memiliki tantangan medan serupa? Tim kami siap melakukan review data geologi awal.
              </div>
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={handleConsultSimilar}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Diskusikan Proyek Serupa
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Pagination Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono-tech text-[#A7AEA5]">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 hover:text-[#D8FF3E] transition-colors py-2 px-3 border border-white/10 bg-[#171D18]"
          >
            <ChevronLeft className="w-4 h-4" /> SEBELUMNYA
          </button>
          <span className="hidden sm:inline-block">
            Gunakan tombol panah [←] [→] keyboard untuk navigasi
          </span>
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 hover:text-[#D8FF3E] transition-colors py-2 px-3 border border-white/10 bg-[#171D18]"
          >
            BERIKUTNYA <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
