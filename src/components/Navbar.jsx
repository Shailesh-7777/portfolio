import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { Menu, X, FileText, ExternalLink, Github, Linkedin, Code } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brandDark/85 backdrop-blur-md border-b border-brandCardBorder shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Shailesh Kumar Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accentCyan/20 via-accentPurple/20 to-brandDark border border-accentCyan/40 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:border-accentCyan transition-all duration-300 group-hover:scale-105">
              <span className="font-kanit font-bold text-lg gradient-text-cyan-purple tracking-wider">
                {personalInfo.monogram}
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-kanit font-semibold text-brandSlate text-base tracking-wide group-hover:text-white transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-brandMuted tracking-tight">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-brandSurface/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-brandCardBorder shadow-inner">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-accentCyan/20 to-accentPurple/20 text-white border border-accentCyan/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                      : 'text-brandMuted hover:text-brandSlate hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Resume Button & Social Quick Links */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-accentPurple/20 to-accentCyan/20 text-brandSlate border border-accentPurple/40 hover:border-accentCyan hover:text-white transition-all duration-200 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
              aria-label="View Resume Status"
            >
              <FileText className="w-3.5 h-3.5 text-accentCyan" />
              <span>Resume</span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brandSurface text-brandMuted hover:text-white hover:bg-white/5 border border-brandCardBorder transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brandSurface text-brandMuted hover:text-white hover:bg-white/5 border border-brandCardBorder transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-brandSlate hover:text-white"
              aria-label="Resume"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-brandSurface text-brandSlate hover:text-white border border-brandCardBorder focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-accentCyan" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brandDark/95 backdrop-blur-xl border-b border-brandCardBorder px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-accentCyan/15 text-accentCyan font-semibold border-l-2 border-accentCyan'
                      : 'text-brandMuted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-brandCardBorder flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-brandSurface text-brandMuted hover:text-white border border-brandCardBorder"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-brandSurface text-brandMuted hover:text-white border border-brandCardBorder"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-brandSurface text-brandMuted hover:text-white border border-brandCardBorder"
                aria-label="LeetCode"
              >
                <Code className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-accentPurple to-accentCyan text-white shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
