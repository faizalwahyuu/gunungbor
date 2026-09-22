import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Mountain, Activity } from 'lucide-react';
import { Button } from '../components/Button';
import { SafeImage } from '../components/SafeImage';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-24 bg-[#0B0F0D] overflow-hidden"
    >
      {/* Background Topo & Grid Lines */}
      <div className="absolute inset-0 bg-topo-pattern opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      {/* Decorative Technical Coordinate Badges */}
      <div className="hidden xl:flex absolute top-28 left-8 flex-col text-[10px] font-mono-tech text-[#A7AEA5]/40 space-y-1 select-none pointer-events-none">
        <span>LOC: -07°15'32"S 110°24'18"E</span>
        <span>ELEV: 1,840M ASL // MOUNTAIN GRID</span>
        <span>STATUS: ACTIVE RIG TELEMETRY</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Headline & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#171D18] border border-white/15 w-fit mb-6">
              <span className="w-2 h-2 bg-[#D8FF3E] inline-block animate-pulse" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-[#D8FF3E] uppercase font-bold">
                SPECIALIST DRILLING
              </span>
            </div>

            {/* Massive Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight text-[#F4F5F1] leading-[0.98] font-heading mb-6">
              MENEMBUS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F5F1] via-[#D8FF3E] to-[#F4F5F1]">
                MEDAN EKSTREM.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-[#A7AEA5] leading-relaxed max-w-2xl mb-8 font-normal">
              Spesialis pengeboran untuk gunung, batuan keras, area terpencil, dan proyek dengan tingkat kompleksitas tinggi. Didukung rig modular, kru berdaya adaptasi tebing, dan komitmen keselamatan tanpa kompromi.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenConsultation}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Konsultasi Proyek
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onExploreServices}
                className="w-full sm:w-auto"
              >
                Lihat Layanan
              </Button>
            </div>

            {/* Quick Assurance Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 font-mono-tech text-xs text-[#A7AEA5]">
              <div className="flex items-center gap-2">
                <Mountain className="w-4 h-4 text-[#D8FF3E] shrink-0" />
                <span>Medan Kritis & Terjal</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D8FF3E] shrink-0" />
                <span>Zero Accident Mindset</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#D8FF3E] shrink-0" />
                <span>Jangkauan Nasional</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Rig Visual with Engineering Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-2 bg-[#111713] border border-white/15 corner-bracket">
              {/* Rig Main Image */}
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <SafeImage
                  src="/images/hero-drilling.webp"
                  fallbackSrc="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial Drilling Rig di Tebing Gunung"
                  aspectRatio="auto"
                  loading="eager"
                  className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] via-transparent to-black/30 pointer-events-none" />

                {/* Top Status Stamp */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0B0F0D]/90 border border-white/15 font-mono-tech text-[10px] text-[#D8FF3E] flex items-center gap-1.5">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>RIG DEPLOYMENT READY</span>
                </div>

                {/* Elevation & Rig Spec Card Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 bg-[#0B0F0D]/90 backdrop-blur-sm border border-white/10 font-mono-tech">
                  <div className="flex items-center justify-between text-xs text-[#F4F5F1] mb-1">
                    <span className="text-[#D8FF3E] font-bold">TERRADRILL H-350 RIG</span>
                    <span className="text-[#A7AEA5]">TERRAIN GRADE: 45°</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#A7AEA5]">
                    <span>Kapasitas Kedalaman: 350m</span>
                    <span className="text-white">Formasi: Andesit / Basalt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Sub-strip under the image */}
            <div className="mt-3 flex items-center justify-between px-2 text-[10px] font-mono-tech text-[#A7AEA5]/70">
              <span>PROJECT CODE: TD-OPS-2026</span>
              <span>GEO-TECH & EXPLORATION STANDARD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
