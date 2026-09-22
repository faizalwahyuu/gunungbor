import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertTriangle, ArrowRight, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';
import { SafeImage } from './SafeImage';
import { Button } from './Button';
import { openWhatsApp } from '../utils/whatsapp';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultationForm: (prefillService?: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onOpenConsultationForm,
}) => {
  useEffect(() => {
    if (!service) return;

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Keyboard ESC handler
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleWhatsAppDirect = () => {
    const message = `Halo TERRADRILL, saya ingin konsultasi mengenai layanan ${service.title} (${service.number}) untuk proyek kami. Mohon estimasi metode dan peralatan.`;
    openWhatsApp(message);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#171D18] border border-[#D8FF3E]/40 shadow-2xl p-6 sm:p-8 md:p-10 text-[#F4F5F1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D8FF3E]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D8FF3E]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D8FF3E]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D8FF3E]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 border border-white/20 bg-[#111713] hover:bg-[#D8FF3E] hover:text-[#0B0F0D] flex items-center justify-center transition-colors text-white focus:outline-none focus:ring-2 focus:ring-[#D8FF3E]"
          aria-label="Tutup modal spesifikasi"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono-tech text-sm text-[#D8FF3E] font-bold">
            [{service.number} // SPECIFICATION]
          </span>
          <span className="font-mono-tech text-xs uppercase px-2 py-0.5 border border-[#D8FF3E]/30 text-[#A7AEA5] bg-[#111713]">
            {service.tag}
          </span>
        </div>

        <h3
          id="service-modal-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase font-heading text-[#F4F5F1] mb-6"
        >
          {service.title}
        </h3>

        {/* Image preview */}
        <div className="mb-6 border border-white/10 overflow-hidden">
          <SafeImage
            src={service.image}
            fallbackSrc={service.fallbackImage}
            alt={service.title}
            aspectRatio="21 / 9"
            className="w-full max-h-64 object-cover"
          />
        </div>

        {/* Description */}
        <div className="mb-8">
          <h4 className="font-mono-tech text-xs tracking-widest uppercase text-[#D8FF3E] mb-2">
            DESKRIPSI TEKNIS & METODOLOGI
          </h4>
          <p className="text-base text-[#A7AEA5] leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Two column breakdown: Scope & Field Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Scope */}
          <div className="p-5 bg-[#111713] border border-white/10">
            <h4 className="font-mono-tech text-xs tracking-wider uppercase text-[#F4F5F1] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D8FF3E]" />
              Lingkup Pekerjaan Utama
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A7AEA5]">
              {service.scope.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#D8FF3E] font-mono-tech text-xs mt-0.5">▶</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Field Conditions */}
          <div className="p-5 bg-[#111713] border border-white/10">
            <h4 className="font-mono-tech text-xs tracking-wider uppercase text-[#F4F5F1] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#E3A83B]" />
              Karakteristik Medan & Lapangan
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A7AEA5]">
              {service.fieldConditions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#E3A83B] font-mono-tech text-xs mt-0.5">■</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono-tech text-[#A7AEA5] text-center sm:text-left">
            Siap mobilisasi ke seluruh wilayah pegunungan & terpencil Indonesia.
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                onClose();
                onOpenConsultationForm(service.title);
              }}
              className="w-full sm:w-auto"
            >
              Isi Form Brief Proyek
            </Button>
            <Button
              variant="primary"
              size="md"
              icon={<MessageSquare className="w-4 h-4" />}
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto"
            >
              Konsultasi WhatsApp →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
