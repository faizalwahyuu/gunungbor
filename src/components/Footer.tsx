import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Shield, Mountain } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070A09] border-t border-white/10 text-[#F4F5F1] pt-16 pb-12 overflow-hidden">
      {/* Background Topo & Grid Lines */}
      <div className="absolute inset-0 bg-topo-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Company Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#171D18] border-2 border-[#D8FF3E] flex items-center justify-center">
                <span className="font-heading font-extrabold text-[#D8FF3E] text-base">
                  TD
                </span>
              </div>
              <span className="font-heading font-extrabold text-xl tracking-wider text-[#F4F5F1]">
                {siteConfig.companyName}
              </span>
            </div>

            <p className="text-sm text-[#A7AEA5] leading-relaxed max-w-sm mb-6 font-normal">
              Spesialis rekayasa pengeboran gunung, formasi batuan keras, investigasi geoteknik, dan eksplorasi bawah permukaan pada medan berisiko tinggi di seluruh Indonesia.
            </p>

            <div className="inline-flex items-center gap-2 p-3 bg-[#111713] border border-white/10 text-xs font-mono-tech text-[#A7AEA5]">
              <Shield className="w-4 h-4 text-[#D8FF3E] shrink-0" />
              <span>Prioritas Keselamatan Kerja & Integritas Data Geologi</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-mono-tech text-xs tracking-widest text-[#D8FF3E] uppercase font-bold mb-4">
              [ NAVIGASI ]
            </h4>
            <ul className="space-y-2.5 text-sm font-mono-tech">
              <li>
                <a href="#home" className="text-[#A7AEA5] hover:text-[#F4F5F1] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#A7AEA5] hover:text-[#F4F5F1] transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#A7AEA5] hover:text-[#F4F5F1] transition-colors">
                  Layanan Pengeboran
                </a>
              </li>
              <li>
                <a href="#equipment" className="text-[#A7AEA5] hover:text-[#F4F5F1] transition-colors">
                  Peralatan Rig
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#A7AEA5] hover:text-[#F4F5F1] transition-colors">
                  Studi Kasus Proyek
                </a>
              </li>
              <li>
                <a href="#safety" className="text-[#A7AEA5] hover:text-[#F4F5F1] transition-colors">
                  Standar K3 & Keselamatan
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div>
            <h4 className="font-mono-tech text-xs tracking-widest text-[#D8FF3E] uppercase font-bold mb-4">
              [ LAYANAN ]
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A7AEA5]">
              <li>
                <a href="#services" className="hover:text-[#F4F5F1] transition-colors">
                  Drilling Batuan Keras
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F4F5F1] transition-colors">
                  Geotechnical Investigation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F4F5F1] transition-colors">
                  Exploration Wireline Coring
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F4F5F1] transition-colors">
                  Triple-Tube Core Sampling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F4F5F1] transition-colors">
                  Slope & Mountain Stabilizing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F4F5F1] transition-colors">
                  Custom Engineering Drilling
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div id="contact">
            <h4 className="font-mono-tech text-xs tracking-widest text-[#D8FF3E] uppercase font-bold mb-4">
              [ KANTOR & KONTAK ]
            </h4>
            <ul className="space-y-3 text-xs font-mono-tech text-[#A7AEA5]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D8FF3E] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 hover:text-[#D8FF3E] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D8FF3E] shrink-0" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-[#D8FF3E] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D8FF3E] shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="pt-2">
                <span className="text-[10px] text-[#A7AEA5]/70 block">
                  AREA OPERASIONAL:
                </span>
                <span className="text-white font-bold">
                  {siteConfig.operationalArea}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-[#A7AEA5]">
          <div>
            © 2026 {siteConfig.companyName}. All Rights Reserved. Built for Extreme Terrain.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#D8FF3E] transition-colors py-1.5 px-3 border border-white/15 bg-[#111713]"
            aria-label="Kembali ke atas halaman"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D8FF3E]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
