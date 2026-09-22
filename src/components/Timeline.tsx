import React, { useState } from 'react';
import { Check, Compass, Cpu, FileText, Mountain, ShieldCheck } from 'lucide-react';
import { WorkProcessStep } from '../types';

export const processSteps: WorkProcessStep[] = [
  {
    number: "01",
    title: "Site Survey & Reconnaissance",
    subtitle: "Inspeksi Lapangan & Geologi Awal",
    description: "Evaluasi topografi, akses jalan/lereng, sumber air teknis, serta identifikasi formasi singkapan batuan dan potensi bahaya geologi.",
    deliverables: [
      "Laporan aksesibilitas alat berat & rig modular",
      "Pemetaan sumber daya air pendingin & logistik",
      "Penilaian awal Job Safety Analysis (JSA)"
    ]
  },
  {
    number: "02",
    title: "Technical Analysis & Rig Matching",
    subtitle: "Analisis Rekayasa & Pemilihan Rig",
    description: "Menghitung kebutuhan torsi pemboran, kedalaman target, pemilihan bit intan/DTH hammer, serta perhitungan sistem anchoring penahan rig.",
    deliverables: [
      "Spesifikasi rig & auxiliary equipment sesuai medan",
      "Kalkulasi fluida bor & kompresor tekanan tinggi",
      "Jadwal mobilisasi & rencana kontingensi cuaca"
    ]
  },
  {
    number: "03",
    title: "Drilling Plan & Safety Brief",
    subtitle: "Prosedur Eksekusi & K3 Khusus",
    description: "Penyusunan Standard Operating Procedure (SOP) spesifik lereng terjal, penentuan koordinat titik bor presisi, dan safety briefing seluruh kru.",
    deliverables: [
      "Rig platform scaffolding & anchorage blueprint",
      "Protokol tanggap darurat lereng (Rope & Evacuation)",
      "Verifikasi perijinan & koordinasi wilayah setempat"
    ]
  },
  {
    number: "04",
    title: "Field Execution & Quality Monitoring",
    subtitle: "Pengeboran Aktif & Logging Kontinu",
    description: "Operasional pengeboran dengan pengawasan kontinu terhadap laju penetrasi (ROP), recovery sampel inti, serta stabilitas lubang bor.",
    deliverables: [
      "Pengeboran terkontrol 24 jam dengan shift terpadu",
      "Daily Drilling Report (DDR) & Core logging insitu",
      "Pengujian permeabilitas (Lugeon/Packer) & SPT berkala"
    ]
  },
  {
    number: "05",
    title: "Report & Sample Handover",
    subtitle: "Dokumentasi Lengkap & Demobilisasi",
    description: "Penataan core box berstandar geologi, penutupan lubang (grouting) jika disyaratkan, serta serah terima laporan teknis komprehensif.",
    deliverables: [
      "Buku laporan geoteknik / eksplorasi final",
      "Core boxes rapi berlabel kedalaman & foto resolusi tinggi",
      "Demobilisasi alat & restorasi lingkungan kerja"
    ]
  }
];

const stepIcons = [Compass, Cpu, ShieldCheck, Mountain, FileText];

export const Timeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="relative">
      {/* Desktop Horizontal Stepper (Hidden on mobile) */}
      <div className="hidden lg:block mb-10">
        <div className="grid grid-cols-5 gap-2 relative">
          {/* Background Connecting Line */}
          <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-white/10 z-0" />
          {/* Active Progress Line */}
          <div
            className="absolute top-6 left-[10%] h-0.5 bg-[#D8FF3E] z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (processSteps.length - 1)) * 80}%` }}
          />

          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center text-center group cursor-pointer focus:outline-none"
              >
                {/* Step indicator node */}
                <div
                  className={`w-12 h-12 flex items-center justify-center font-mono-tech text-xs font-bold transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#D8FF3E] text-[#0B0F0D] border-[#D8FF3E] shadow-[0_0_15px_rgba(216,255,62,0.4)] scale-110'
                      : isCompleted
                      ? 'bg-[#171D18] text-[#D8FF3E] border-[#D8FF3E]/50'
                      : 'bg-[#111713] text-[#A7AEA5] border-white/15 group-hover:border-white/40'
                  }`}
                >
                  {isCompleted ? <Check className="w-5 h-5 stroke-[3]" /> : step.number}
                </div>

                {/* Step title label */}
                <div className="mt-3">
                  <span
                    className={`font-heading text-xs font-bold uppercase tracking-wider block transition-colors ${
                      isActive ? 'text-[#D8FF3E]' : 'text-[#A7AEA5] group-hover:text-[#F4F5F1]'
                    }`}
                  >
                    {step.title.split('&')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Highlight Card (Desktop view detail) */}
      <div className="hidden lg:block p-8 bg-[#111713] border border-[#D8FF3E]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D8FF3E]/10 to-transparent pointer-events-none" />
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="font-mono-tech text-xs font-bold text-[#D8FF3E] uppercase tracking-widest">
              [TAHAP {processSteps[activeStep].number} DARI 05]
            </span>
            <h3 className="font-heading text-2xl font-extrabold uppercase text-[#F4F5F1] mt-1">
              {processSteps[activeStep].title}
            </h3>
            <p className="font-mono-tech text-xs text-[#A7AEA5] mt-0.5">
              {processSteps[activeStep].subtitle}
            </p>
          </div>

          <div className="px-3 py-1 border border-white/10 bg-[#171D18] text-xs font-mono-tech text-[#A7AEA5]">
            STANDARD OPERATING PROCEDURE
          </div>
        </div>

        <p className="text-base text-[#A7AEA5] leading-relaxed mb-6 max-w-4xl">
          {processSteps[activeStep].description}
        </p>

        <div className="p-5 bg-[#171D18] border border-white/10">
          <h4 className="font-mono-tech text-xs tracking-wider uppercase text-[#D8FF3E] mb-3">
            Output & Deliverables Tahap Ini:
          </h4>
          <div className="grid grid-cols-3 gap-4">
            {processSteps[activeStep].deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#F4F5F1]">
                <span className="text-[#D8FF3E] font-mono-tech">▶</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Vertical Timeline (Shown on sm/md screens) */}
      <div className="lg:hidden space-y-4">
        {processSteps.map((step, idx) => {
          const isActive = activeStep === idx;

          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-5 border transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#171D18] border-[#D8FF3E]'
                  : 'bg-[#111713] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`font-mono-tech text-xs font-bold px-2 py-0.5 border ${
                      isActive
                        ? 'bg-[#D8FF3E] text-[#0B0F0D] border-[#D8FF3E]'
                        : 'bg-[#171D18] text-[#A7AEA5] border-white/15'
                    }`}
                  >
                    {step.number}
                  </span>
                  <h3 className="font-heading text-base font-bold uppercase text-[#F4F5F1]">
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#A7AEA5] leading-relaxed mb-3">
                {step.description}
              </p>

              {isActive && (
                <div className="pt-3 border-t border-white/10 space-y-1.5 animate-fadeIn">
                  <span className="font-mono-tech text-[10px] uppercase text-[#D8FF3E] block mb-1">
                    Deliverables:
                  </span>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#F4F5F1]">
                      <span className="text-[#D8FF3E]">▶</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
