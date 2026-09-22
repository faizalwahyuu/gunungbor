import React from 'react';
import { Mountain, Users, Wrench, Shield, Zap, Target } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';

const whyUsPoints = [
  {
    number: "01",
    title: "MEDAN EKSTREM",
    icon: Mountain,
    description: "Kemampuan bekerja pada lokasi dengan akses terbatas, lereng curam bersudut ekstrem, dan kawasan hutan pegunungan tanpa jalan logistik konvensional."
  },
  {
    number: "02",
    title: "TIM BERPENGALAMAN",
    icon: Users,
    description: "Operator rig, mekanik lapangan, dan teknisi geologi yang memahami dinamika batuan serta troubleshooting mekanik langsung di medan terbuka."
  },
  {
    number: "03",
    title: "PERALATAN SESUAI KEBUTUHAN",
    icon: Wrench,
    description: "Pemilihan metode dan alat bor—mulai dari crawler hidraulik, wireline coring, hingga rig modular man-portable—disesuaikan spesifik dengan kondisi geologi."
  },
  {
    number: "04",
    title: "SAFETY FIRST",
    icon: Shield,
    description: "Keselamatan menjadi fondasi mutlak setiap tahap pekerjaan melalui Job Safety Analysis (JSA), anchoring bersertifikasi, dan pengawasan ketat K3."
  },
  {
    number: "05",
    title: "RESPONSIF",
    icon: Zap,
    description: "Komunikasi teknis transparan, koordinasi lapangan tanggap, serta pelaporan harian (Daily Drilling Report) yang dapat dipantau langsung pemilik proyek."
  },
  {
    number: "06",
    title: "PROJECT ORIENTED",
    icon: Target,
    description: "Fokus pada target perolehan sampel geologi berkualitas tinggi, kepatuhan jadwal kerja, dan efisiensi biaya secara realistis."
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#111713] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="[ 03 // KEUNGGULAN OPERASIONAL ]"
          title="BUILT FOR DIFFICULT TERRAIN."
          description="Medan sulit membutuhkan perencanaan rekayasa yang presisi, peralatan yang adaptif, dan kru lapangan yang terbiasa dengan tantangan fisik ekstrem."
        />

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUsPoints.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-[#171D18] border border-white/10 hover:border-[#D8FF3E]/70 transition-all duration-300 relative group"
              >
                {/* Header row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-tech text-xs font-bold text-[#D8FF3E] px-2 py-0.5 border border-[#D8FF3E]/30 bg-[#111713]">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 border border-white/15 bg-[#111713] flex items-center justify-center text-[#A7AEA5] group-hover:text-[#D8FF3E] group-hover:border-[#D8FF3E] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-extrabold uppercase text-[#F4F5F1] group-hover:text-[#D8FF3E] transition-colors mb-3 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A7AEA5] leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom line accent */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-[#A7AEA5]/50">
                  <span>TERRADRILL STANDARD</span>
                  <span className="group-hover:text-[#D8FF3E] transition-colors">● READY</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
