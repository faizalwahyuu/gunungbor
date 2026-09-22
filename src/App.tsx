import React, { useState } from 'react';
import { useScrollProgress } from './hooks/useScrollProgress';
import { projectsList } from './data/projects';
import { ServiceItem, ProjectItem } from './types';

// Components
import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ServiceModal } from './components/ServiceModal';
import { ProjectLightbox } from './components/ProjectLightbox';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

// Sections
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { WhyUs } from './sections/WhyUs';
import { Equipment } from './sections/Equipment';
import { Projects } from './sections/Projects';
import { Process } from './sections/Process';
import { Safety } from './sections/Safety';
import { CTA } from './sections/CTA';

export default function App() {
  const scrollProgress = useScrollProgress();

  // Modals state
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationPrefillService, setConsultationPrefillService] = useState<string>('');

  const handleOpenConsultation = (serviceName: string = '') => {
    setConsultationPrefillService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F0D] text-[#F4F5F1] selection:bg-[#D8FF3E] selection:text-[#0B0F0D] relative flex flex-col font-sans">
      {/* Top Scroll Progress Indicator (PRD Section 27) */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#D8FF3E] z-50 transition-all duration-75 ease-out shadow-[0_0_8px_#D8FF3E]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progres baca halaman"
      />

      {/* Sticky Header & Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Sections In Strict Order (PRD Section 8) */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Statistics Section */}
        <Stats />

        {/* 3. About Section */}
        <About onOpenConsultation={() => handleOpenConsultation()} />

        {/* 4. Services Section */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 5. Why Choose Us Section */}
        <WhyUs />

        {/* 6. Equipment Section */}
        <Equipment />

        {/* 7. Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 8. Work Process Section */}
        <Process />

        {/* 9. Safety Section */}
        <Safety />

        {/* 10. Final Call to Action Section */}
        <CTA onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultationForm={(prefill) => handleOpenConsultation(prefill)}
      />

      {/* Project Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        projects={projectsList}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* Quick Project Consultation Inquiry Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationPrefillService}
      />
    </div>
  );
}

