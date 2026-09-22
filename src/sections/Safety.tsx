import React from 'react';
import { ShieldAlert, CheckCircle2, AlertOctagon, HeartHandshake, HardHat, FileCheck } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';

const safetyChecklist = [
  {
    title: "Site Risk Assessment",
    icon: AlertOctagon,
    desc: "Identifikasi bahaya geologi, rekahan tebing aktif, potensi longsor, dan arah hembusan gas sebelum mobilisasi rig."
  },
  {
    title: "Equipment Inspection",
    icon: FileCheck,
    desc: "Pemeriksaan harian tekanan hidraulik, kelurusan mast rig, kondisi sling baja winch, dan katup darurat kompresor."
  },
  {
    title: "Operator Safety",
    icon: HardHat,
    desc: "Kru bersertifikasi keahlian teknis pemboran, pemahaman rope access lereng, dan rotasi jam kerja yang aman."
  },
  {
    title: "Work Area Control",
    icon: ShieldAlert,
    desc: "Pemasangan perimeter isolasi area kerja berbahaya, jaring penahan serpihan batu (rockfall barrier), dan rambu peringatan."
  },
  {
    title: "PPE Compliance",
    icon: CheckCircle2,
    desc: "Kepatuhan tanpa kompromi pemakaian helm industri tali dagu 4 titik, full body harness, kacamata safety, dan sepatu safety boots."
  },
  {
    title: "Emergency Procedure",
    icon: HeartHandshake,
    desc: "Jalur evakuasi darurat lereng terpasang, ketersediaan kotak P3K trauma lapangan, dan koordinasi cepat dengan fasilitas medis terdekat."
  }
];

export const Safety: React.FC = () => {
  return (
    <section id="safety" className="relative py-20 lg:py-28 bg-[#111713] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="[ 07 // STANDAR K3 LAPANGAN ]"
          title="SAFETY IS NOT AN OPTION."
          description="Setiap pekerjaan direncanakan dengan mempertimbangkan kondisi medan, risiko pekerjaan, peralatan, prosedur operasional, dan keselamatan personel."
        />

        {/* Safety Protocol Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyChecklist.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#171D18] border border-white/10 hover:border-[#D8FF3E]/50 transition-colors"
              >
                <div className="w-10 h-10 border border-[#D8FF3E]/30 bg-[#111713] flex items-center justify-center text-[#D8FF3E] mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-heading text-lg font-bold uppercase text-[#F4F5F1] mb-2 flex items-center gap-2">
                  <span className="text-[#D8FF3E] font-mono-tech text-xs">✓</span>
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A7AEA5] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Safety Philosophy Strip */}
        <div className="mt-12 p-6 bg-[#0B0F0D] border-l-4 border-[#D8FF3E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-mono-tech text-xs text-[#D8FF3E] uppercase font-bold tracking-wider mb-1">
              KOMITMEN NOL KECELAKAAN (ZERO HARM)
            </div>
            <p className="text-sm text-[#A7AEA5]">
              Setiap anggota tim lapangan berhak menghentikan pekerjaan (Stop Work Authority) jika teridentifikasi kondisi medan yang tidak aman.
            </p>
          </div>
          <div className="shrink-0 font-mono-tech text-xs text-[#F4F5F1] px-3 py-1.5 border border-white/20 bg-[#171D18]">
            SAFETY PROTOCOL ACTIVE
          </div>
        </div>
      </div>
    </section>
  );
};
