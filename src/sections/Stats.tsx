import React from 'react';
import { StatCounter } from '../components/StatCounter';

export const Stats: React.FC = () => {
  return (
    <section className="relative bg-[#0B0F0D] py-12 md:py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCounter
            value={10}
            suffix="+"
            label="Tahun Pengalaman"
            sublabel="Konsistensi di Medan Sulit"
          />

          <StatCounter
            value={50}
            suffix="+"
            label="Proyek Ditangani"
            sublabel="Investigasi & Pengeboran Batuan"
          />

          <StatCounter
            value={15}
            suffix="+"
            label="Wilayah Operasional"
            sublabel="Jawa, Sumatera, Kalimantan, Sulawesi"
          />

          <StatCounter
            value={0}
            customDisplay="24/7"
            label="Dukungan Proyek"
            sublabel="Respon & Koordinasi Lapangan"
          />
        </div>
      </div>
    </section>
  );
};
