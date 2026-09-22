import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Timeline } from '../components/Timeline';

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-20 lg:py-28 bg-[#0B0F0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="[ 06 // METODOLOGI EKSEKUSI ]"
          title="FROM TERRAIN TO RESULT."
          description="Alur kerja terstruktur dari survei awal hingga serah terima laporan geologi resmi. Meminimalkan risiko downtime alat dan memaksimalkan keselamatan kru."
          align="left"
        />

        <Timeline />
      </div>
    </section>
  );
};
