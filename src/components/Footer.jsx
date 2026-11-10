import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import {
  Github,
  Linkedin,
  Code2,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#06080D] border-t border-brandCardBorder pt-16 pb-12 overflow-hidden text-brandSlate">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-accentPurple/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brandCardBorder/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accentCyan/20 to-accentPurple/20 border border-accentCyan/40 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <span className="font-kanit font-bold text-lg gradient-text-cyan-purple tracking-wider">
                  {personalInfo.monogram}
                </span>
              </div>
              <div>
                <span className="font-kanit font-bold text-white text-lg tracking-wide block">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-mono text-accentCyan">
                  {personalInfo.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-brandMuted leading-relaxed max-w-sm">
              Developing scalable, secure, and user-friendly applications using modern web technologies and algorithmic problem solving.
            </p>

            <div className="space-y-1.5 text-xs font-mono text-brandMuted">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accentCyan shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accentPurple shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Explore Portfolio
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brandMuted hover:text-accentCyan transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-accentPurple text-[10px]">›</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Status */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
                Connect &amp; Profiles
              </h4>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-brandSurface hover:bg-accentCyan/20 text-brandMuted hover:text-white border border-brandCardBorder hover:border-accentCyan/40 transition-all shadow-sm"
                  aria-label="GitHub"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-brandSurface hover:bg-accentPurple/20 text-brandMuted hover:text-white border border-brandCardBorder hover:border-accentPurple/40 transition-all shadow-sm"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-brandSurface hover:bg-amber-500/20 text-brandMuted hover:text-white border border-brandCardBorder hover:border-amber-500/40 transition-all shadow-sm"
                  aria-label="LeetCode"
                  title="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-brandSurface hover:bg-emerald-500/20 text-brandMuted hover:text-white border border-brandCardBorder hover:border-emerald-500/40 transition-all shadow-sm"
                  aria-label="Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brandCardBorder/60">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{personalInfo.status}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brandMuted">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Shailesh Kumar. All rights reserved.</span>
            <span className="text-brandCardBorder">•</span>
            <button
              onClick={() => {
                const el = document.querySelector('[title*="Owner"]');
                if (el) el.click();
              }}
              className="text-accentCyan/80 hover:text-accentCyan hover:underline flex items-center gap-1"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Owner Portal</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-brandMuted/80">
              Futuristic 3D Portfolio • 60FPS
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brandSurface hover:bg-white/10 text-brandSlate hover:text-white border border-brandCardBorder transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-accentCyan" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
