import React, { useState, useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Code2,
  Copy,
  Check,
  Layers,
  Terminal,
  ShieldCheck,
  Image as ImageIcon
} from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-4xl glass-card rounded-2xl border border-brandCardBorder bg-[#0E121E] shadow-2xl my-8 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brandCardBorder/80 bg-[#121624] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accentCyan/15 border border-accentCyan/30 flex items-center justify-center text-accentCyan">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="modal-project-title" className="text-lg sm:text-xl font-kanit font-bold text-white">
                  {project.title}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan">
                  {project.badge}
                </span>
              </div>
              <p className="text-xs font-mono text-brandMuted">
                {project.category}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-brandMuted hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Project Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Main Screenshot / Mockup Preview */}
          <div className="rounded-xl overflow-hidden border border-brandCardBorder bg-[#080A10] p-2 sm:p-4 shadow-inner">
            <div className="flex items-center justify-between pb-3 px-2 border-b border-white/5 text-xs font-mono text-brandMuted">
              <span className="flex items-center gap-1.5 text-accentCyan">
                <ImageIcon className="w-3.5 h-3.5" />
                Preview: {project.screenshots ? project.screenshots[activeScreenshotIdx]?.title : project.title}
              </span>
              <span>Vector Architectural Mockup</span>
            </div>

            {project.image && (
              <div className="mt-3 rounded-lg overflow-hidden border border-white/5 flex items-center justify-center bg-[#07090F]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[340px] object-contain"
                  loading="lazy"
                />
              </div>
            )}

            {/* Screenshots Gallery Tabs */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {project.screenshots.map((shot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScreenshotIdx(idx)}
                    className={`p-2 rounded-lg border text-left text-xs font-mono transition-all ${
                      activeScreenshotIdx === idx
                        ? 'bg-accentCyan/15 border-accentCyan/40 text-accentCyan'
                        : 'bg-brandSurface/80 border-brandCardBorder text-brandMuted hover:text-brandSlate hover:bg-white/5'
                    }`}
                  >
                    <span className="block font-semibold truncate">{shot.title}</span>
                    <span className="text-[10px] text-brandMuted/80 line-clamp-1">{shot.caption}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Detailed Overview */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-accentCyan mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Comprehensive Architecture Overview
            </h4>
            <p className="text-sm sm:text-base text-brandSlate leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-accentPurple mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Verified Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-brandSurface/70 border border-brandCardBorder text-xs sm:text-sm text-brandSlate"
                >
                  <CheckCircle2 className="w-4 h-4 text-accentCyan shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && (
            <div className="p-4 rounded-xl bg-accentPurple/10 border border-accentPurple/20 space-y-2">
              <h5 className="text-xs font-mono uppercase tracking-wider text-accentPurple font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Security &amp; Engineering Decisions
              </h5>
              <ul className="space-y-1.5 text-xs text-brandSlate/90 font-mono">
                {project.architectureHighlights.map((hl, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-accentCyan">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Badges */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-brandMuted block mb-2">
              Tech Stack &amp; Libraries:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-brandDark border border-brandCardBorder text-brandSlate shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Code Implementation Snippet */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-accentCyan flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" />
                  Core Architecture Code Snippet
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] font-mono text-brandMuted hover:text-white px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>
              <div className="rounded-xl bg-[#080A10] border border-white/10 p-4 overflow-x-auto text-xs font-mono text-brandSlate/90 leading-relaxed shadow-inner">
                <pre>
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-brandCardBorder bg-[#111624] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-brandMuted">
            Status: <span className="text-emerald-400 font-semibold">{project.badge}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient-glow inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="btn-outline-sleek px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
