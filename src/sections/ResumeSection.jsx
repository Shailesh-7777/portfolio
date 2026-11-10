import React from 'react';
import Tilt3DCard from '../components/Tilt3DCard';
import { personalInfo } from '../data/portfolioData';
import {
  FileText,
  Download,
  Eye,
  Send,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  FileCode,
  FileCheck
} from 'lucide-react';

export default function ResumeSection({ onOpenResumeModal }) {
  const resumePdfUrl = personalInfo.resumePath || '/resume/Shailesh_Kumar_Resume.pdf';
  const resumeDocxUrl = personalInfo.resumeDocxPath || '/resume/Shailesh_Kumar_Resume.docx';

  const atsFeatures = [
    "ATS-Friendly Single-Column Layout & Standard Headings",
    "100% Selectable Vector Text (Zero Rasterized Artifacts)",
    "Clickable Contact, Portfolio, GitHub, and LinkedIn Links",
    "Verified Education (B.Tech CSE), CodeSoft Internship & AWS Badge",
    "Production Full-Stack Projects (Wedding Wagon, AI Interview, StyleSense)",
    "Available in Both High-Res PDF and Editable Word DOCX Formats"
  ];

  return (
    <section id="resume" className="py-28 relative bg-brandDark/95 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accentCyan/15 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accentPurple/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-kanit font-black text-white tracking-tight">
            PROFESSIONAL <span className="gradient-text-hero">RESUME</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-3" />

          <p className="mt-4 text-brandSlate/80 text-sm sm:text-base max-w-xl font-sans">
            ATS-optimized curriculum vitae engineered for engineering recruiters, HR managers, and tech startups.
          </p>
        </div>

        {/* 3D Holographic Resume Presentation Card */}
        <Tilt3DCard
          glowColor="combo"
          maxRotation={10}
          scale={1.015}
          className="p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Required exact text & identity */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
                <FileCheck className="w-3.5 h-3.5" />
                <span>ATS Formatted & Verified</span>
              </div>

              {/* EXACT USER SPECIFICATION: Display Name, Title, and Tagline */}
              <h3 className="text-3xl sm:text-4xl font-kanit font-extrabold text-white tracking-wide mb-1">
                SHAILESH KUMAR
              </h3>
              <div className="text-base sm:text-lg font-mono font-semibold text-accentCyan mb-3">
                Full Stack Developer
              </div>
              <blockquote className="text-sm sm:text-base text-brandSlate/90 italic font-sans mb-6 border-l-2 border-accentCyan/40 pl-3">
                "Building modern, scalable and user-friendly applications."
              </blockquote>

              {/* ATS Checklist features */}
              <div className="space-y-2 mb-8 w-full">
                {atsFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-mono text-brandSlate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accentCyan shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* 3 REQUIRED ACTION BUTTONS: DOWNLOAD RESUME, VIEW RESUME, CONTACT ME */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                
                {/* 1. DOWNLOAD RESUME */}
                <a
                  href={resumePdfUrl}
                  download="Shailesh_Kumar_Resume.pdf"
                  className="btn-gradient-glow inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg w-full sm:w-auto"
                >
                  <Download className="w-4 h-4 text-accentCyan" />
                  <span>Download Resume</span>
                </a>

                {/* 2. VIEW RESUME */}
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-sleek inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-brandSlate hover:text-white shadow-sm w-full sm:w-auto"
                >
                  <Eye className="w-4 h-4 text-accentPurple" />
                  <span>View Resume</span>
                </a>

                {/* 3. CONTACT ME */}
                <a
                  href="#contact"
                  className="btn-outline-sleek inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-brandSlate hover:text-white shadow-sm w-full sm:w-auto"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Contact Me</span>
                </a>
              </div>

              {/* Additional DOCX Download option */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-4 text-xs font-mono text-brandMuted">
                <span>Also available:</span>
                <a
                  href={resumeDocxUrl}
                  download="Shailesh_Kumar_Resume.docx"
                  className="text-accentCyan hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Editable Word (.DOCX)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Holographic Preview Document */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div
                onClick={() => window.open(resumePdfUrl, '_blank', 'noopener,noreferrer')}
                className="relative w-full max-w-sm rounded-2xl bg-[#080B14] border border-accentCyan/30 p-5 shadow-[0_0_30px_rgba(0,245,255,0.2)] cursor-pointer group/doc hover:border-accentCyan transition-all duration-300"
              >
                {/* Header ribbon */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[10px] font-mono text-brandMuted">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accentCyan"></span>
                    <span>PDF / ATS-V2.0</span>
                  </div>
                  <span className="text-accentCyan group-hover/doc:underline flex items-center gap-1">
                    <span>Preview Full PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>

                {/* Mini Resume Typography representation */}
                <div className="space-y-2 text-left font-mono">
                  <div className="text-sm font-bold text-white tracking-wider">
                    SHAILESH KUMAR
                  </div>
                  <div className="text-[10px] text-accentCyan">
                    Full Stack Developer | Java • React • Node • AWS
                  </div>
                  <div className="text-[9px] text-brandMuted border-b border-white/5 pb-2">
                    Bettiah, Bihar • kumsailesh784@gmail.com • +91 9972505004
                  </div>

                  <div className="text-[9px] text-brandSlate/90 pt-1">
                    <strong className="text-white">EDUCATION:</strong> B.Tech CSE, MMU (2024–2028)
                  </div>
                  <div className="text-[9px] text-brandSlate/90">
                    <strong className="text-white">EXPERIENCE:</strong> CodeSoft Web Dev Virtual Intern
                  </div>
                  <div className="text-[9px] text-brandSlate/90">
                    <strong className="text-white">PROJECTS:</strong> Wedding Wagon, AI Interview, StyleSense
                  </div>
                  <div className="text-[9px] text-brandSlate/90">
                    <strong className="text-white">CERTS:</strong> AWS Cloud Foundations, SIDH Web Dev
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accentCyan/10 opacity-0 group-hover/doc:opacity-100 transition-opacity rounded-2xl flex items-center justify-center backdrop-blur-[2px]">
                  <span className="btn-gradient-glow px-4 py-2 rounded-xl text-xs font-mono font-bold text-white shadow-lg flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Interactive PDF</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </Tilt3DCard>

      </div>
    </section>
  );
}
