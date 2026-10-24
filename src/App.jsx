import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeTicker from './components/MarqueeTicker';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import JourneySection from './components/JourneySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import LiveDemoModal from './components/LiveDemoModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeDemoProject, setActiveDemoProject] = useState(null);

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

  return (
    <div className="min-h-screen bg-brandDark text-brandSlate selection:bg-accentPurple/30 selection:text-white relative bg-grid-pattern">
      {/* Top Navbar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Marquee Stack Ticker */}
        <MarqueeTicker />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection onOpenDemoNotice={handleOpenDemoNotice} />

        {/* Journey Section */}
        <JourneySection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResume} />
      <LiveDemoModal project={activeDemoProject} onClose={handleCloseDemoNotice} />
    </div>
  );
}
