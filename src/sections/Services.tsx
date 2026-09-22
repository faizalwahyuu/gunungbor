import React from 'react';
import { services } from '../data/services';
import { ServiceItem } from '../types';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#0B0F0D]">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-topo-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="[ 02 // LAYANAN UTAMA ]"
          title="SOLUSI PENGEBORAN UNTUK MEDAN SULIT."
          description="Didukung kapabilitas rekayasa lapangan tinggi, kami menghadirkan serangkaian metode pemboran presisi untuk formasi batuan keras, tebing pegunungan, dan lokasi dengan kendala akses logistik berat."
          badge="6 LAYANAN SPESIALIS"
        />

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
            />
          ))}
        </div>

        {/* Technical bottom note */}
        <div className="mt-12 p-4 bg-[#111713] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-tech text-[#A7AEA5]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D8FF3E]" />
            <span>Semua pekerjaan pemboran didampingi Daily Drilling Report (DDR) & Core Logging resmi.</span>
          </div>
          <span className="text-[#D8FF3E]">
            Klik kartu untuk rincian lingkup & kondisi lapangan
          </span>
        </div>
      </div>
    </section>
  );
};
