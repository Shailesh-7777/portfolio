import React from 'react';
import { X, ExternalLink, Github, Terminal, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LiveDemoModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="relative w-full max-w-xl glass-card rounded-2xl border border-brandSlate/20 p-6 sm:p-8 shadow-2xl bg-[#0E121E]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-brandMuted hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close Demo Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-accentCyan/20 border border-accentCyan/40 flex items-center justify-center text-accentCyan shrink-0">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 id="demo-modal-title" className="text-xl font-kanit font-bold text-white tracking-wide">
                {project.title}
              </h3>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-accentPurple/20 border border-accentPurple/40 text-accentPurple">
                {project.badge}
              </span>
            </div>
            <p className="text-xs font-mono text-brandMuted mt-0.5">
              {project.category}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-sm text-brandSlate/90 leading-relaxed mb-6">
          <p>
            {project.statusNotice}
          </p>

          <div className="p-4 rounded-xl bg-brandDark/90 border border-brandCardBorder space-y-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-accentCyan block font-semibold">
              Deployment & Execution Status:
            </span>

            {project.id === 'ai-interview-system' && (
              <div className="text-xs font-mono text-brandMuted space-y-2">
                <div className="flex items-start gap-2 text-brandSlate">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Verified repository available on GitHub with frontend (React 19 + Tailwind), backend (Spring Boot 3.3.5), and SQL schema.</span>
                </div>
                <div className="flex items-start gap-2 text-brandSlate">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Includes 1-click demo login credentials for Student and Admin evaluation roles.</span>
                </div>
              </div>
            )}

            {project.id === 'wedding-wagon' && (
              <div className="text-xs font-mono text-brandMuted space-y-2">
                <div className="flex items-start gap-2 text-brandSlate">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Full three-sided marketplace concept with Customer, Vendor, and Admin inquiry pipelines.</span>
                </div>
                <div className="flex items-start gap-2 text-brandSlate">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Public cloud deployment is prepared and can be run locally using Docker or Node.js.</span>
                </div>
              </div>
            )}

            {project.id === 'business-ordering-app' && (
              <div className="text-xs font-mono text-brandMuted space-y-2">
                <div className="flex items-start gap-2 text-brandSlate">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Multi-role ordering and inventory management system with active development on distributor dashboards and payment logs.</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-gradient-glow py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Explore Code on GitHub</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="flex-1 btn-outline-sleek py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-brandSlate hover:text-white flex items-center justify-center gap-2"
          >
            <span>Close Notice</span>
          </button>
        </div>

      </div>
    </div>
  );
}
