import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { SafeImage } from './SafeImage';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(service)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(service);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Lihat detail layanan ${service.title}`}
      className="group relative flex flex-col justify-between p-6 sm:p-8 bg-[#171D18] border border-white/10 hover:border-[#D8FF3E] transition-all duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D8FF3E]"
    >
      {/* Background Subtle Image Reveal on Hover */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <SafeImage
          src={service.image}
          fallbackSrc={service.fallbackImage}
          alt={service.title}
          aspectRatio="auto"
          className="w-full h-full object-cover grayscale scale-100 group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Top row: Number and Tag */}
      <div className="relative z-10 flex items-start justify-between mb-8">
        <span className="font-mono-tech text-2xl sm:text-3xl font-bold text-[#A7AEA5] group-hover:text-[#D8FF3E] transition-colors duration-200">
          {service.number}
        </span>
        <span className="font-mono-tech text-[10px] tracking-widest uppercase px-2.5 py-1 border border-white/10 bg-[#111713]/80 text-[#A7AEA5] group-hover:border-[#D8FF3E]/40 group-hover:text-[#F4F5F1] transition-colors">
          {service.tag}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mb-8">
        <h3 className="font-heading text-xl sm:text-2xl font-extrabold uppercase text-[#F4F5F1] group-hover:text-[#D8FF3E] transition-colors duration-200 mb-3 leading-tight">
          {service.title}
        </h3>
        <p className="text-sm text-[#A7AEA5] leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      {/* Bottom row: Explore link & arrow indicator */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech uppercase">
        <span className="text-[#A7AEA5] group-hover:text-[#F4F5F1] transition-colors">
          Spesifikasi Teknis
        </span>
        <div className="w-8 h-8 rounded-none border border-white/15 group-hover:border-[#D8FF3E] group-hover:bg-[#D8FF3E] flex items-center justify-center text-[#A7AEA5] group-hover:text-[#0B0F0D] transition-all duration-200">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
};
