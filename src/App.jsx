import React, { useState } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';

import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MarqueeTicker from './components/MarqueeTicker';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificationsSection from './sections/CertificationsSection';
import ExperienceSection from './sections/ExperienceSection';
import InterestsRoadmapSection from './sections/InterestsRoadmapSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';

import ResumeModal from './components/ResumeModal';
import LiveDemoModal from './components/LiveDemoModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import CertificateModal from './components/CertificateModal';
import OwnerAuthModal from './components/OwnerAuthModal';
import OwnerDashboardModal from './components/OwnerDashboardModal';

function PortfolioApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeDemoProject, setActiveDemoProject] = useState(null);
  const [selectedDetailProject, setSelectedDetailProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const { updateCertificate } = usePortfolio();

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  const handleOpenDemoNotice = (project) => {
    setActiveDemoProject(project);
  };

  const handleCloseDemoNotice = () => {
    setActiveDemoProject(null);
  };

  const handleOpenProjectDetail = (project) => {
    setSelectedDetailProject(project);
  };

  const handleCloseProjectDetail = () => {
    setSelectedDetailProject(null);
  };

  const handleOpenCertificateModal = (cert) => {
    setSelectedCertificate(cert);
  };

  const handleCloseCertificateModal = () => {
    setSelectedCertificate(null);
  };

  const handleSaveCertificate = (updatedCert) => {
    if (updatedCert && updatedCert.id) {
      updateCertificate(updatedCert.id, updatedCert);
    }
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-brandDark text-brandSlate selection:bg-accentCyan/30 selection:text-white relative bg-grid-pattern overflow-x-hidden">
      {/* Initial Cyberpunk HUD Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 3D Particle Universe, Neural Mesh & Cyber-Grid Floor */}
      <ParticleBackground />

      {/* Floating Glass Navbar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection onOpenResume={handleOpenResume} />

        {/* Marquee Technology Stack Ticker */}
        <MarqueeTicker />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Education Timeline Section */}
        <EducationSection />

        {/* 4. Technical Skills Section */}
        <SkillsSection />

        {/* 5. Floating 3D Projects Showcase Section */}
        <ProjectsSection
          onSelectProject={handleOpenProjectDetail}
          onOpenDemoNotice={handleOpenDemoNotice}
        />

        {/* 6. Certifications Gallery Section */}
        <CertificationsSection
          onOpenCertificateModal={handleOpenCertificateModal}
        />

        {/* 7. Experience & Internships Section */}
        <ExperienceSection />

        {/* 8. Interests & Future Roadmap Section */}
        <InterestsRoadmapSection />

        {/* 9. Professional Resume Section */}
        <ResumeSection onOpenResumeModal={handleOpenResume} />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back To Top Button */}
      <BackToTop />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />

      <LiveDemoModal
        project={activeDemoProject}
        onClose={handleCloseDemoNotice}
      />

      <ProjectDetailModal
        project={selectedDetailProject}
        onClose={handleCloseProjectDetail}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onSave={handleSaveCertificate}
        onClose={handleCloseCertificateModal}
      />

      {/* Owner Authentication & Management Modals */}
      <OwnerAuthModal />
      <OwnerDashboardModal />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}
