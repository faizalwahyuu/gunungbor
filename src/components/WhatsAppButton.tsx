import React from 'react';
import { MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    openWhatsApp('Halo TERRADRILL, saya ingin berkonsultasi mengenai kebutuhan jasa pengeboran untuk proyek saya.');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleClick}
        aria-label="Konsultasi cepat via WhatsApp"
        className="group relative flex items-center gap-3 p-3 sm:px-5 sm:py-3.5 bg-[#171D18] hover:bg-[#D8FF3E] border-2 border-[#D8FF3E] text-[#F4F5F1] hover:text-[#0B0F0D] shadow-[0_4px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(216,255,62,0.4)] transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D8FF3E]"
      >
        {/* Pulsing indicator dot */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8FF3E] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D8FF3E]" />
        </span>

        {/* WhatsApp Icon */}
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          <MessageSquare className="w-5 h-5 fill-current" />
        </div>

        {/* Label for Desktop */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-mono-tech text-[10px] tracking-widest uppercase opacity-70 group-hover:opacity-100">
            WHATSAPP
          </span>
          <span className="font-heading text-xs font-extrabold uppercase tracking-wide">
            Konsultasi Proyek
          </span>
        </div>
      </button>
    </div>
  );
};
