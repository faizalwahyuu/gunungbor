import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Button } from './Button';

interface NavbarProps {
  onOpenConsultation: () => void;
}

const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Peralatan', href: '#equipment' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Proses', href: '#process' },
  { label: 'Kontak', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'services', 'equipment', 'projects', 'process', 'safety', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0F0D]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5'
            : 'bg-transparent py-5 md:py-6 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Kembali ke beranda TERRADRILL"
          >
            {/* Geometric industrial drill rig glyph */}
            <div className="w-10 h-10 bg-[#171D18] border-2 border-[#D8FF3E] flex items-center justify-center relative overflow-hidden group-hover:bg-[#D8FF3E] transition-colors duration-300">
              <span className="font-heading font-extrabold text-[#D8FF3E] group-hover:text-[#0B0F0D] text-lg tracking-tighter">
                TD
              </span>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#D8FF3E] group-hover:bg-[#0B0F0D]" />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-[#F4F5F1] leading-none">
                TERRADRILL
              </span>
              <span className="font-mono-tech text-[9px] sm:text-[10px] tracking-[0.25em] text-[#D8FF3E] uppercase font-bold mt-1">
                MOUNTAIN & ROCK DRILLING
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 font-mono-tech text-xs tracking-wider uppercase">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3.5 py-2 transition-colors duration-200 relative ${
                    isActive
                      ? 'text-[#D8FF3E] font-bold'
                      : 'text-[#A7AEA5] hover:text-[#F4F5F1]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#D8FF3E]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden lg:flex items-center gap-2 text-xs font-mono-tech text-[#A7AEA5] hover:text-[#D8FF3E] transition-colors px-2 py-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#D8FF3E]" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={onOpenConsultation}
            >
              Konsultasi Proyek
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="p-2 border border-[#D8FF3E] bg-[#D8FF3E]/10 text-[#D8FF3E] text-xs font-mono-tech font-bold"
              aria-label="Konsultasi cepat"
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 border border-white/20 bg-[#171D18] flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-[#D8FF3E]"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#D8FF3E]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Fullscreen) */}
      <div
        className={`fixed inset-0 z-30 bg-[#0B0F0D] flex flex-col justify-between p-6 sm:p-8 pt-24 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="space-y-4">
          <div className="font-mono-tech text-xs tracking-widest text-[#D8FF3E] uppercase pb-2 border-b border-white/10">
            [ MENU NAVIGASI ]
          </div>
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F4F5F1] hover:text-[#D8FF3E] py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="font-mono-tech text-xs text-[#A7AEA5]">→</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-4">
          <div className="font-mono-tech text-xs text-[#A7AEA5] space-y-1">
            <div>HOTLINE: {siteConfig.phoneDisplay}</div>
            <div>EMAIL: {siteConfig.email}</div>
          </div>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenConsultation();
            }}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Konsultasi Proyek Sekarang
          </Button>
        </div>
      </div>
    </>
  );
};
