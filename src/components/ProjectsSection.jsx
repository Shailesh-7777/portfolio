import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import {
  ExternalLink,
  Github,
  Code,
  CheckCircle,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
  ChevronDown,
  Info,
  Laptop
} from 'lucide-react';

export default function ProjectsSection({ onOpenDemoNotice }) {
  const [expandedCodeId, setExpandedCodeId] = useState(null);

  const toggleCode = (id) => {
    setExpandedCodeId(expandedCodeId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative bg-brandDark">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accentPurple/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentPurple/10 border border-accentPurple/30 text-accentPurple text-xs font-mono uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Practical Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit font-bold text-white tracking-tight">
            Featured <span className="gradient-text-hero">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-3" />
          <p className="mt-4 text-brandMuted text-sm sm:text-base max-w-2xl">
            Real software systems engineered with modern full-stack architectures, strict data models, and problem-solving focus.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isCodeExpanded = expandedCodeId === project.id;
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl border border-brandCardBorder overflow-hidden shadow-xl transition-all duration-300 hover:border-brandSlate/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  
                  {/* Left (or alternating) Visual UI Preview Illustration */}
                  <div className={`lg:col-span-5 bg-[#0A0D15] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 ${isEven ? 'lg:border-r border-brandCardBorder' : 'lg:order-2 lg:border-l border-brandCardBorder'}`}>
                    
                    {/* Visual Preview Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block"></span>
                        <span className="text-[11px] font-mono text-brandMuted ml-1">
                          preview://{project.id}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-brandMuted">
                        Mockup
                      </span>
                    </div>

                    {/* Original Project Visual Preview Mockup Graphics */}
                    <div className="my-auto py-4">
                      {project.id === 'wedding-wagon' && (
                        <div className="rounded-xl bg-[#0F1320] border border-white/10 p-4 space-y-3 shadow-inner">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <span className="text-xs font-kanit font-semibold text-rose-300">Wedding Wagon Portal</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">3-Sided RBAC</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                            <div className="p-2 rounded bg-white/5 border border-white/5">
                              <span className="text-brandMuted block">Couples</span>
                              <span className="text-white font-semibold">Inquiries</span>
                            </div>
                            <div className="p-2 rounded bg-white/5 border border-white/5">
                              <span className="text-brandMuted block">Vendors</span>
                              <span className="text-accentCyan font-semibold">Bookings</span>
                            </div>
                            <div className="p-2 rounded bg-white/5 border border-white/5">
                              <span className="text-brandMuted block">Admin</span>
                              <span className="text-accentPurple font-semibold">Audit</span>
                            </div>
                          </div>
                          <div className="p-2.5 rounded bg-white/[0.03] border border-white/5 text-[11px] font-mono text-brandMuted space-y-1">
                            <div className="flex justify-between">
                              <span>Service Pricing Engine:</span>
                              <span className="text-emerald-400 font-medium">Dynamic Tiers</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Customer Flow:</span>
                              <span className="text-brandSlate">Quotes & Inquiries</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === 'ai-interview-system' && (
                        <div className="rounded-xl bg-[#0F1320] border border-white/10 p-4 space-y-3 shadow-inner">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                              <span className="text-xs font-kanit font-semibold text-accentCyan">AI Interview Session</span>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accentCyan/10 text-accentCyan border border-accentCyan/20">Timer: 02:45</span>
                          </div>
                          <div className="p-2.5 rounded bg-brandDark/80 border border-white/5 text-[11px] font-mono text-brandSlate">
                            <span className="text-accentPurple font-medium block text-[10px]">CURRENT QUESTION:</span>
                            Explain difference between HashMap and ConcurrentHashMap in Java.
                          </div>
                          <div className="flex items-center justify-between text-[10px] font-mono px-2 py-1.5 rounded bg-white/5">
                            <span className="text-brandMuted">Spring Boot 3.3 REST API</span>
                            <span className="text-emerald-400">JWT Authenticated</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'business-ordering-app' && (
                        <div className="rounded-xl bg-[#0F1320] border border-white/10 p-4 space-y-3 shadow-inner">
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <span className="text-xs font-kanit font-semibold text-amber-300">Enterprise B2B Distribution</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">RBAC Active</span>
                          </div>
                          <div className="space-y-1.5 text-[10px] font-mono">
                            <div className="flex justify-between p-1.5 rounded bg-white/5">
                              <span className="text-brandMuted">Distributor Inventory:</span>
                              <span className="text-white font-medium">Real-time Sync</span>
                            </div>
                            <div className="flex justify-between p-1.5 rounded bg-white/5">
                              <span className="text-brandMuted">Vendor Purchase Orders:</span>
                              <span className="text-accentCyan font-medium">Auto-deduction</span>
                            </div>
                            <div className="flex justify-between p-1.5 rounded bg-white/5">
                              <span className="text-brandMuted">Payment Settlements:</span>
                              <span className="text-emerald-400 font-medium">Ledger Log</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Visual Preview Footer */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-brandMuted">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-accentCyan" /> Status: {project.badge}
                      </span>
                      <span>Full Stack</span>
                    </div>

                  </div>

                  {/* Right (or alternating) Content Info Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between ${isEven ? '' : 'lg:order-1'}`}>
                    <div>
                      {/* Category & Status Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-accentPurple/10 border border-accentPurple/30 text-accentPurple font-medium">
                          {project.category}
                        </span>

                        <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border font-medium ${
                          project.badge === 'Active Repository'
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                            : project.badge === 'In Development'
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                            : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                        }`}>
                          {project.badge}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-kanit font-bold text-white mb-3 tracking-wide">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-brandMuted leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <p className="text-xs sm:text-sm text-brandSlate/80 leading-relaxed mb-6">
                        {project.detailedOverview}
                      </p>

                      {/* Key Features Bullet List */}
                      <div className="mb-6 space-y-1.5">
                        <span className="text-xs font-mono uppercase tracking-wider text-accentCyan block mb-1">
                          Key Architectural Highlights:
                        </span>
                        {project.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-brandSlate">
                            <CheckCircle className="w-3.5 h-3.5 text-accentCyan shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-brandSurface border border-brandCardBorder text-brandSlate"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions and Code Peek */}
                    <div className="pt-4 border-t border-brandCardBorder/80 flex flex-col gap-3">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-brandSurface hover:bg-white/10 border border-brandCardBorder text-white transition-all shadow-sm"
                            >
                              <Github className="w-3.5 h-3.5 text-accentCyan" />
                              <span>View Repository</span>
                            </a>
                          )}

                          <button
                            onClick={() => onOpenDemoNotice(project)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-accentCyan/10 hover:bg-accentCyan/20 border border-accentCyan/30 text-accentCyan transition-all shadow-sm"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo Info</span>
                          </button>
                        </div>

                        {/* Code Toggle Button */}
                        <button
                          onClick={() => toggleCode(project.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-brandMuted hover:text-white transition-colors py-1 px-2 rounded hover:bg-white/5"
                        >
                          <Code className="w-3.5 h-3.5 text-accentPurple" />
                          <span>{isCodeExpanded ? "Hide Code Snippet" : "Inspect Code Snippet"}</span>
                          {isCodeExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {/* Expandable Code Snippet */}
                      {isCodeExpanded && (
                        <div className="mt-2 rounded-xl bg-[#090B11] border border-white/10 p-3.5 overflow-x-auto text-[11px] sm:text-xs font-mono leading-relaxed text-brandSlate/90 animate-fadeIn">
                          <div className="flex items-center justify-between text-brandMuted pb-2 mb-2 border-b border-white/5 text-[10px]">
                            <span>ARCHITECTURAL IMPLEMENTATION SNIPPET</span>
                            <span>{project.title}</span>
                          </div>
                          <pre>
                            <code>{project.codePreviewSnippet}</code>
                          </pre>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
