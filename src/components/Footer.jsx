import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Code2, Heart, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-brandCardBorder bg-[#06070B] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accentCyan/20 to-accentPurple/20 border border-brandCardBorder flex items-center justify-center font-kanit font-bold text-accentCyan text-sm">
              {personalInfo.monogram}
            </div>
            <div>
              <p className="text-sm font-kanit text-brandSlate">
                &copy; {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-xs font-mono text-brandMuted">
                Full Stack Developer • Bettiah, Bihar, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brandSurface hover:bg-white/5 border border-brandCardBorder text-brandMuted hover:text-white transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brandSurface hover:bg-white/5 border border-brandCardBorder text-brandMuted hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brandSurface hover:bg-white/5 border border-brandCardBorder text-brandMuted hover:text-white transition-colors"
              aria-label="LeetCode Profile"
              title="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-accentCyan/15 border border-white/10 hover:border-accentCyan/40 text-brandSlate hover:text-white transition-all text-xs font-mono ml-2"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-accentCyan" />
              <span>Top</span>
            </button>
          </div>

        </div>

        {/* Privacy & Transparency Footnote */}
        <div className="mt-8 pt-6 border-t border-brandCardBorder/50 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-brandMuted gap-3">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Privacy Notice: No tracking cookies or personal data stored on this site.</span>
          </div>
          <div>
            Built with React, Vite, & Tailwind CSS • Production Ready
          </div>
        </div>

      </div>
    </footer>
  );
}
