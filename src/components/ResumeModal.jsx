import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { X, FileText, Mail, Linkedin, ExternalLink, CheckCircle } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative w-full max-w-lg glass-card rounded-2xl border border-brandSlate/20 p-6 sm:p-8 shadow-2xl bg-[#0E121E]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-brandMuted hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close Resume Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-accentPurple/20 border border-accentPurple/40 flex items-center justify-center text-accentPurple">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-xl font-kanit font-bold text-white tracking-wide">
              Resume Status
            </h3>
            <span className="text-xs font-mono text-accentCyan">
              {personalInfo.name} • {personalInfo.title}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-4 text-sm text-brandSlate/90 leading-relaxed mb-6">
          <p>
            Thank you for your interest! My comprehensive resume is currently being updated to reflect my latest full-stack projects and algorithmic milestones.
          </p>

          <div className="p-3.5 rounded-xl bg-brandDark/80 border border-brandCardBorder text-xs font-mono text-brandMuted space-y-2">
            <div className="flex items-start gap-2 text-brandSlate">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Direct PDF download will be automatically enabled as soon as <code className="text-accentCyan">resume.pdf</code> is placed in the public directory.</span>
            </div>
            <div className="flex items-start gap-2 text-brandSlate">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>In the meantime, feel free to request my latest CV document directly via email or LinkedIn.</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Shailesh%20Kumar&body=Hi%20Shailesh,%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20latest%20resume.%0A%0AThanks!`}
            className="flex-1 btn-gradient-glow py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white flex items-center justify-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email for Resume</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-outline-sleek py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-brandSlate hover:text-white flex items-center justify-center gap-2"
          >
            <Linkedin className="w-3.5 h-3.5 text-accentCyan" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

      </div>
    </div>
  );
}
