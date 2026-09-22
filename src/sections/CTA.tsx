import React from 'react';
import { ArrowRight, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Button } from '../components/Button';
import { openWhatsApp } from '../utils/whatsapp';

interface CTAProps {
  onOpenConsultation: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenConsultation }) => {
  const handleDirectWhatsApp = () => {
    openWhatsApp('Halo TERRADRILL, kami memiliki kebutuhan pengeboran di medan sulit dan ingin berdiskusi teknis dengan tim enjiniring Anda.');
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#0B0F0D] overflow-hidden border-t border-white/10">
      {/* Background Mountain/Drilling with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 filter grayscale contrast-125 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=80')`
        }}
      />
      {/* Dark overlay & Topo patterns */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] via-[#0B0F0D]/90 to-[#0B0F0D]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-topo-pattern opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171D18] border border-white/15 mb-6">
          <span className="w-2 h-2 bg-[#D8FF3E] animate-pulse" />
          <span className="font-mono-tech text-xs tracking-[0.25em] text-[#D8FF3E] uppercase font-bold">
            [ READY FOR DEPLOYMENT ]
          </span>
        </div>

        {/* Big Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-[#F4F5F1] leading-tight font-heading mb-6">
          PUNYA MEDAN YANG <br />
          <span className="text-[#D8FF3E]">SULIT?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#A7AEA5] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Mari diskusikan kebutuhan pengeboran proyek Anda. Tim rekayasa kami siap menganalisis data geologi awal, aksesibilitas rig, dan memberikan metodologi paling efisien.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenConsultation}
            icon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto px-8"
          >
            KONSULTASI PROYEK →
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={handleDirectWhatsApp}
            icon={<MessageSquare className="w-5 h-5 text-[#D8FF3E]" />}
            className="w-full sm:w-auto px-8"
          >
            WHATSAPP LANGSUNG
          </Button>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/10 font-mono-tech text-xs">
          <a
            href={`tel:${siteConfig.phone}`}
            className="p-4 bg-[#111713]/80 border border-white/10 hover:border-[#D8FF3E]/50 transition-colors flex flex-col items-center gap-1.5"
          >
            <Phone className="w-4 h-4 text-[#D8FF3E]" />
            <span className="text-[#A7AEA5] uppercase text-[10px]">TELEPON LANGSUNG</span>
            <span className="text-[#F4F5F1] font-bold">{siteConfig.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="p-4 bg-[#111713]/80 border border-white/10 hover:border-[#D8FF3E]/50 transition-colors flex flex-col items-center gap-1.5"
          >
            <Mail className="w-4 h-4 text-[#D8FF3E]" />
            <span className="text-[#A7AEA5] uppercase text-[10px]">EMAIL PROYEK</span>
            <span className="text-[#F4F5F1] font-bold">{siteConfig.email}</span>
          </a>

          <div className="p-4 bg-[#111713]/80 border border-white/10 flex flex-col items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#D8FF3E]" />
            <span className="text-[#A7AEA5] uppercase text-[10px]">JANGKAUAN LOGISTIK</span>
            <span className="text-[#F4F5F1] font-bold">Seluruh Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
