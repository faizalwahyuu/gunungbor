import React from 'react';
import { ArrowRight, ShieldCheck, Target, Award } from 'lucide-react';
import { Button } from '../components/Button';
import { SafeImage } from '../components/SafeImage';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#111713] overflow-hidden">
      {/* Topographic Background */}
      <div className="absolute inset-0 bg-topo-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#D8FF3E] inline-block animate-pulse" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#D8FF3E] uppercase font-bold">
                [ 01 // TENTANG PERUSAHAAN ]
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#F4F5F1] leading-[1.05] font-heading mb-6">
              ENGINEERING <br />
              <span className="text-[#D8FF3E]">BEYOND LIMITS.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A7AEA5] leading-relaxed mb-6 font-normal">
              Kami adalah perusahaan spesialis pengeboran yang mengutamakan ketepatan pekerjaan, keselamatan, efisiensi, dan kemampuan beradaptasi terhadap kondisi medan.
            </p>

            <p className="text-sm sm:text-base text-[#A7AEA5] leading-relaxed mb-8">
              Bagi kami, medan pegunungan yang terisolir dan batuan keras berdensitas tinggi bukanlah rintangan, melainkan parameter rekayasa yang dipecahkan melalui seleksi rig presisi, metodologi sirkulasi fluida bor yang matang, serta keahlian kru lapangan berpengalaman.
            </p>

            {/* Core Values: 01 PRECISION, 02 SAFETY, 03 RELIABILITY */}
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-[#171D18] border border-white/10 flex items-start gap-4">
                <div className="w-9 h-9 border border-[#D8FF3E]/40 bg-[#111713] flex items-center justify-center text-[#D8FF3E] font-mono-tech text-xs font-bold shrink-0">
                  01
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#F4F5F1] uppercase tracking-wide flex items-center gap-2">
                    <Target className="w-3.5 h-3.5 text-[#D8FF3E]" /> PRECISION
                  </h3>
                  <p className="text-xs text-[#A7AEA5] mt-0.5 leading-relaxed">
                    Akurasi sudut kemiringan pemboran, kedalaman target, dan perolehan recovery inti batuan (core recovery) di atas standar industri.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#171D18] border border-white/10 flex items-start gap-4">
                <div className="w-9 h-9 border border-[#D8FF3E]/40 bg-[#111713] flex items-center justify-center text-[#D8FF3E] font-mono-tech text-xs font-bold shrink-0">
                  02
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#F4F5F1] uppercase tracking-wide flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D8FF3E]" /> SAFETY FIRST
                  </h3>
                  <p className="text-xs text-[#A7AEA5] mt-0.5 leading-relaxed">
                    Sistem penambatan ganda di tebing curam, kepatuhan APD ketat, dan inspeksi integritas peralatan sebelum setiap giliran kerja.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#171D18] border border-white/10 flex items-start gap-4">
                <div className="w-9 h-9 border border-[#D8FF3E]/40 bg-[#111713] flex items-center justify-center text-[#D8FF3E] font-mono-tech text-xs font-bold shrink-0">
                  03
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#F4F5F1] uppercase tracking-wide flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#D8FF3E]" /> RELIABILITY
                  </h3>
                  <p className="text-xs text-[#A7AEA5] mt-0.5 leading-relaxed">
                    Komitmen menyelesaikan target pengeboran sesuai kesepakatan timeline proyek dan pelaporan geologi yang transparan.
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={onOpenConsultation}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Konsultasi Dengan Tim Teknis
            </Button>
          </div>

          {/* Right Image & Technical Overlay Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-2 bg-[#171D18] border border-white/15 corner-bracket">
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <SafeImage
                  src="/images/about-drilling.webp"
                  fallbackSrc="https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?auto=format&fit=crop&w=1200&q=80"
                  alt="Kru dan Rig Pengeboran di Medan Tebing Batuan"
                  aspectRatio="auto"
                  className="w-full h-full object-cover"
                />

                {/* Technical Overlay Badges */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#0B0F0D]/90 border border-white/15 font-mono-tech text-[10px] text-[#F4F5F1]">
                  TERRAIN ADAPTATION PROTOCOL
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-4 bg-[#0B0F0D]/90 border border-white/15">
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono-tech">
                    <div>
                      <span className="text-[#A7AEA5] text-[10px] block uppercase">Tingkat Kemiringan</span>
                      <span className="text-[#D8FF3E] font-bold">Hingga 80° Tebing Curam</span>
                    </div>
                    <div>
                      <span className="text-[#A7AEA5] text-[10px] block uppercase">Metode Sirkulasi</span>
                      <span className="text-white font-bold">Dual Air Flush & Polymer Mud</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom coordinate annotation */}
            <div className="mt-3 flex items-center justify-between text-[10px] font-mono-tech text-[#A7AEA5]/60 px-2">
              <span>FIELD REF: TD-COR-IDN</span>
              <span>ENGINEERING STANDARDS COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
