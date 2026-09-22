import React, { useState, useEffect } from 'react';
import { X, Send, Phone, Mail, MapPin, CheckCircle2, Shield } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ConsultationFormData, generateConsultationMessage, openWhatsApp } from '../utils/whatsapp';
import { Button } from './Button';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    company: '',
    location: '',
    serviceType: defaultService || 'Drilling Batuan & Gunung',
    terrainType: 'Lereng Terjal / Batuan Keras',
    estimatedDepthOrVolume: '',
    notes: '',
  });

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceType: defaultService }));
    }
  }, [defaultService]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateConsultationMessage(formData);
    openWhatsApp(message);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#171D18] border border-[#D8FF3E]/50 shadow-2xl p-6 sm:p-8 md:p-10 text-[#F4F5F1]"
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
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 border border-white/20 bg-[#111713] hover:bg-[#D8FF3E] hover:text-[#0B0F0D] flex items-center justify-center transition-colors text-white"
          aria-label="Tutup form konsultasi"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[#D8FF3E] animate-pulse" />
            <span className="font-mono-tech text-xs tracking-[0.2em] text-[#D8FF3E] uppercase">
              [ INQUIRY // ESTIMASI TEKNIS ]
            </span>
          </div>
          <h3
            id="consultation-modal-title"
            className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-[#F4F5F1] leading-tight"
          >
            Konsultasi Teknis Proyek
          </h3>
          <p className="text-xs sm:text-sm text-[#A7AEA5] mt-1.5 leading-relaxed">
            Kirimkan rincian kebutuhan Anda untuk estimasi kesesuaian rig, logistik medan, dan jadwal operasional. Pesan akan langsung diteruskan ke Tim Enjiniring TERRADRILL via WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 font-mono-tech text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#A7AEA5] uppercase mb-1.5">
                Nama Lengkap / PIC *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Contoh: Ir. Bambang / Hendra"
                className="w-full px-3.5 py-2.5 bg-[#111713] border border-white/15 focus:border-[#D8FF3E] text-[#F4F5F1] placeholder-white/25 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#A7AEA5] uppercase mb-1.5">
                Perusahaan / Instansi *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Contoh: PT Bangun Nusantara / Konsultan"
                className="w-full px-3.5 py-2.5 bg-[#111713] border border-white/15 focus:border-[#D8FF3E] text-[#F4F5F1] placeholder-white/25 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#A7AEA5] uppercase mb-1.5">
                Lokasi Proyek (Kabupaten / Wilayah) *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Contoh: Wonosobo, Jawa Tengah"
                className="w-full px-3.5 py-2.5 bg-[#111713] border border-white/15 focus:border-[#D8FF3E] text-[#F4F5F1] placeholder-white/25 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#A7AEA5] uppercase mb-1.5">
                Jenis Layanan Pengeboran
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#111713] border border-white/15 focus:border-[#D8FF3E] text-[#F4F5F1] focus:outline-none transition-colors"
              >
                <option value="Drilling Batuan">01 — Drilling Batuan</option>
                <option value="Geotechnical Drilling">02 — Geotechnical Drilling</option>
                <option value="Exploration Drilling">03 — Exploration Drilling</option>
                <option value="Core Drilling (High Recovery)">04 — Core Drilling</option>
                <option value="Slope & Mountain Drilling">05 — Slope & Mountain Drilling</option>
                <option value="Custom Drilling">06 — Custom Drilling</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#A7AEA5] uppercase mb-1.5">
                Kondisi Akses / Karakter Medan
              </label>
              <select
                value={formData.terrainType}
                onChange={(e) => setFormData({ ...formData, terrainType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#111713] border border-white/15 focus:border-[#D8FF3E] text-[#F4F5F1] focus:outline-none transition-colors"
              >
                <option value="Lereng Curam / Tebing Terjal">Lereng Curam / Tebing Terjal</option>
                <option value="Pegunungan & Hutan Terisolir">Pegunungan & Hutan Terisolir</option>
                <option value="Batuan Andesit / Batuan Keras Masif">Batuan Andesit / Batuan Keras Masif</option>
                <option value="Akses Terbatas / Membutuhkan Rig Modular">Akses Terbatas (Perlu Rig Modular)</option>
                <option value="Area Infrastruktur / Perkotaan Padat">Area Infrastruktur / Ruang Terbatas</option>
              </select>
            </div>

            <div>
              <label className="block text-[#A7AEA5] uppercase mb-1.5">
                Perkiraan Titik / Kedalaman Bor
              </label>
              <input
                type="text"
                value={formData.estimatedDepthOrVolume}
                onChange={(e) => setFormData({ ...formData, estimatedDepthOrVolume: e.target.value })}
                placeholder="Contoh: 4 titik @ 60 meter / 250m total"
                className="w-full px-3.5 py-2.5 bg-[#111713] border border-white/15 focus:border-[#D8FF3E] text-[#F4F5F1] placeholder-white/25 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#A7AEA5] uppercase mb-1.5">
              Catatan Teknis / Target Waktu (Opsional)
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Jelaskan kebutuhan pengujian (misal: SPT per 2m, Packer test, atau perkuatan anchor tebing)..."
              className="w-full px-3.5 py-2 bg-[#111713] border border-white/15 focus:border-[#D8FF3E] text-[#F4F5F1] placeholder-white/25 focus:outline-none transition-colors"
            />
          </div>

          {/* Quick Direct Contacts */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#A7AEA5]">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 hover:text-[#D8FF3E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D8FF3E]" />
              Direct Call: {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:text-[#D8FF3E] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D8FF3E]" />
              {siteConfig.email}
            </a>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
            <Button
              type="button"
              variant="ghost"
              size="md"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Batal
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={<Send className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Kirim ke WhatsApp Enjiniring →
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
