import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Menu,
  X,
  FileText,
  Lock,
  Unlock,
  ShieldCheck,
  Sparkles,
  ChevronRight
} from 'lucide-react';

// Exact navigation items specified in the prompt:
// Home, About, Projects, Skills, Education, Certificates, Contact
const mainNavItems = [
  { name: 'Home', href: '#hero', targetId: 'hero' },
  { name: 'About', href: '#about', targetId: 'about' },
  { name: 'Projects', href: '#projects', targetId: 'projects' },
  { name: 'Skills', href: '#skills', targetId: 'skills' },
  { name: 'Education', href: '#education', targetId: 'education' },
  { name: 'Certificates', href: '#certifications', targetId: 'certifications' },
  { name: 'Contact', href: '#contact', targetId: 'contact' },
];

export default function Navbar({ onOpenResume }) {
  const { isOwner, openAuthModal, openDashboardModal } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll spy for active section
      const scrollPos = window.scrollY + 140;
      for (let i = mainNavItems.length - 1; i >= 0; i--) {
        const item = mainNavItems[i];
        const el = document.getElementById(item.targetId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 sm:py-5 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Monogram Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Shailesh Kumar Developer Portfolio"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#090D18]/90 border border-accentCyan/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.25)] group-hover:border-accentCyan transition-all duration-300 group-hover:scale-105">
            <span className="font-kanit font-black text-lg gradient-text-cyan-purple tracking-wider">
              {personalInfo.monogram}
            </span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-kanit font-bold text-white text-base tracking-wide group-hover:text-accentCyan transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-accentCyan uppercase tracking-widest">
              Full Stack 3D Portfolio
            </span>
          </div>
        </a>

        {/* Floating Glass Navigation Panel (EXACT USER SPECIFICATION) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#090D18]/85 backdrop-blur-2xl px-4 py-2 rounded-full border border-accentCyan/25 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(0,245,255,0.15)]">
          {mainNavItems.map((item) => {
            const isActive = activeSection === item.targetId;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-white font-bold bg-gradient-to-r from-accentCyan/25 via-accentPurple/25 to-accentCyan/25 border border-accentCyan/40 shadow-[0_0_15px_rgba(0,245,255,0.3)]'
                    : 'text-brandSlate/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Resume CTA & Owner Portal Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Owner Portal Button */}
          {isOwner ? (
            <button
              onClick={() => openDashboardModal('projects')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:scale-105 transition-all"
              title="Open Owner Management Console"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline font-bold">Owner Mode</span>
            </button>
          ) : (
            <button
              onClick={openAuthModal}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-mono text-brandMuted hover:text-accentCyan bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-1.5"
              title="Owner Authentication Portal"
            >
              <Lock className="w-3.5 h-3.5 text-accentCyan" />
              <span className="hidden sm:inline text-[11px]">Owner</span>
            </button>
          )}

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            className="btn-gradient-glow flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white shadow-md"
            aria-label="View and Download Resume"
          >
            <FileText className="w-3.5 h-3.5 text-accentCyan" />
            <span className="hidden xs:inline">Resume</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-brandSurface/90 border border-brandCardBorder text-brandSlate hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-accentCyan" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Floating Drawer HUD */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto rounded-3xl bg-[#080B14]/98 border border-accentCyan/30 p-5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,245,255,0.2)] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2 mb-4">
            {mainNavItems.map((item) => {
              const isActive = activeSection === item.targetId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-accentCyan/20 to-accentPurple/20 text-accentCyan border border-accentCyan/30 font-bold'
                      : 'text-brandSlate/90 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            {isOwner ? (
              <button
                onClick={() => { setMobileMenuOpen(false); openDashboardModal('projects'); }}
                className="text-xs font-mono text-emerald-400 flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Owner Dashboard</span>
              </button>
            ) : (
              <button
                onClick={() => { setMobileMenuOpen(false); openAuthModal(); }}
                className="text-xs font-mono text-accentCyan flex items-center gap-1.5"
              >
                <Lock className="w-4 h-4" />
                <span>Owner Passcode Access</span>
              </button>
            )}

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="text-xs font-mono text-white flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-accentPurple" />
              <span>Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
