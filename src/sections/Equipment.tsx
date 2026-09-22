import React, { useState } from 'react';
import { ChevronRight, Wrench, Shield, Zap, Mountain } from 'lucide-react';
import { equipmentList } from '../data/equipment';
import { SectionTitle } from '../components/SectionTitle';
import { SafeImage } from '../components/SafeImage';

export const Equipment: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(equipmentList[0]);

  return (
    <section id="equipment" className="relative py-20 lg:py-28 bg-[#0B0F0D]">
      {/* Background Topo & Grid Lines */}
      <div className="absolute inset-0 bg-topo-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="[ 04 // ARMADA & PERALATAN ]"
          title="MACHINES THAT GET THE JOB DONE."
          description="Investasi pada armada rig berdaya tahan tinggi, kompresor udara bertekanan tinggi, dan rangkaian mata bor intan khusus untuk memastikan penetrasi batuan tanpa hambatan."
          badge="ARMADA SPESIALIS"
        />

        {/* Equipment Selector + Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Equipment List Selector Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <div className="font-mono-tech text-xs tracking-widest text-[#D8FF3E] uppercase mb-3 px-1">
              PILIH UNIT PERALATAN:
            </div>

            {equipmentList.map((item) => {
              const isSelected = selectedEquipment.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedEquipment(item)}
                  className={`w-full text-left p-4 border transition-all duration-200 flex items-center justify-between group cursor-pointer focus:outline-none ${
                    isSelected
                      ? 'bg-[#171D18] border-[#D8FF3E] shadow-lg'
                      : 'bg-[#111713] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono-tech text-xs font-bold px-2 py-0.5 border ${
                        isSelected
                          ? 'bg-[#D8FF3E] text-[#0B0F0D] border-[#D8FF3E]'
                          : 'bg-[#171D18] text-[#A7AEA5] border-white/15'
                      }`}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h4
                        className={`font-heading text-sm font-bold uppercase tracking-wide transition-colors ${
                          isSelected ? 'text-[#D8FF3E]' : 'text-[#F4F5F1] group-hover:text-white'
                        }`}
                      >
                        {item.name.split('(')[0]}
                      </h4>
                      <span className="font-mono-tech text-[10px] text-[#A7AEA5] uppercase block mt-0.5">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'text-[#D8FF3E] translate-x-1'
                        : 'text-[#A7AEA5] group-hover:text-white'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Large Equipment Image & Technical Data Overlay */}
          <div className="lg:col-span-8">
            <div className="bg-[#171D18] border border-white/15 p-5 sm:p-7 relative corner-bracket">
              {/* Header inside display card */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-tech text-xs text-[#D8FF3E] font-bold">
                      [UNIT {selectedEquipment.number} // TELEMETRY DATA]
                    </span>
                    <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#111713] border border-white/10 text-[#A7AEA5]">
                      {selectedEquipment.powerSource}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase font-heading text-[#F4F5F1] mt-1">
                    {selectedEquipment.name}
                  </h3>
                </div>

                <div className="px-3 py-1 bg-[#0B0F0D] border border-white/15 text-xs font-mono-tech text-[#D8FF3E]">
                  KAPASITAS: {selectedEquipment.maxDepth}
                </div>
              </div>

              {/* Large Image Showcase with Technical Data Overlay */}
              <div className="relative overflow-hidden aspect-[16/9] border border-white/10 mb-6">
                <SafeImage
                  src={selectedEquipment.image}
                  fallbackSrc={selectedEquipment.fallbackImage}
                  alt={selectedEquipment.name}
                  aspectRatio="16 / 9"
                  className="w-full h-full object-cover"
                />

                {/* Industrial Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D]/90 via-transparent to-black/30 pointer-events-none" />

                {/* Technical Overlay Badges (Section 18 requirement) */}
                <div className="absolute top-3 left-3 p-3 bg-[#0B0F0D]/90 backdrop-blur-sm border border-white/15 font-mono-tech text-[11px] grid grid-cols-2 gap-x-4 gap-y-1">
                  <div>
                    <span className="text-[#A7AEA5] text-[9px] uppercase block">RIG TYPE</span>
                    <span className="text-white font-bold">{selectedEquipment.type}</span>
                  </div>
                  <div>
                    <span className="text-[#A7AEA5] text-[9px] uppercase block">APPLICATION</span>
                    <span className="text-[#D8FF3E] font-bold">{selectedEquipment.application}</span>
                  </div>
                  <div>
                    <span className="text-[#A7AEA5] text-[9px] uppercase block">MOBILITY</span>
                    <span className="text-white font-bold">{selectedEquipment.mobility}</span>
                  </div>
                  <div>
                    <span className="text-[#A7AEA5] text-[9px] uppercase block">TERRAIN</span>
                    <span className="text-[#E3A83B] font-bold">{selectedEquipment.terrainRating}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#A7AEA5] leading-relaxed mb-6 font-normal">
                {selectedEquipment.description}
              </p>

              {/* 4 Technical Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                {selectedEquipment.specs.map((spec, idx) => (
                  <div key={idx} className="p-3 bg-[#111713] border border-white/10 font-mono-tech">
                    <span className="text-[#A7AEA5] text-[10px] uppercase block tracking-wider mb-0.5">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#F4F5F1]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
