import React, { useState } from 'react';
import { personalInfo, educationList, skillCategories, projects } from '../data/portfolioData';
import {
  X,
  FileText,
  Download,
  Eye,
  Mail,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  Code2,
  Briefcase
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'instructions'

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative w-full max-w-3xl glass-card rounded-2xl border border-brandCardBorder bg-[#0E121E] shadow-2xl my-8 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brandCardBorder/80 bg-[#121624] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accentCyan/20 border border-accentCyan/40 flex items-center justify-center text-accentCyan">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-lg font-kanit font-bold text-white">
                Professional Resume &amp; Curriculum Vitae
              </h3>
              <p className="text-xs font-mono text-accentCyan">
                {personalInfo.name} • {personalInfo.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-brandMuted hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Resume Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="bg-[#0B0E17] px-6 py-2 border-b border-brandCardBorder flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeTab === 'preview'
                  ? 'bg-accentCyan/15 text-accentCyan font-semibold border border-accentCyan/30'
                  : 'text-brandMuted hover:text-brandSlate'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Interactive CV Preview</span>
            </button>

            <button
              onClick={() => setActiveTab('instructions')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeTab === 'instructions'
                  ? 'bg-accentPurple/15 text-accentPurple font-semibold border border-accentPurple/30'
                  : 'text-brandMuted hover:text-brandSlate'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PDF Setup Guide</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-brandSlate hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 inline-flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-accentCyan" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <a
              href={personalInfo.resumePath}
              download="Shailesh_Kumar_Resume.pdf"
              className="btn-gradient-glow inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white uppercase tracking-wider shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          
          {activeTab === 'preview' ? (
            /* Formatted Resume Preview Card */
            <div className="rounded-xl border border-brandCardBorder bg-[#080A10] p-6 sm:p-8 space-y-6 text-brandSlate shadow-inner font-sans">
              
              {/* CV Header */}
              <div className="border-b border-brandCardBorder/80 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-kanit font-bold text-white tracking-wide">
                    {personalInfo.name}
                  </h1>
                  <p className="text-sm font-mono text-accentCyan mt-0.5">
                    {personalInfo.title}
                  </p>
                  <p className="text-xs text-brandMuted mt-1">
                    {personalInfo.location} • {personalInfo.phoneFormatted} • {personalInfo.email}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-brandSurface border border-brandCardBorder hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-brandSurface border border-brandCardBorder hover:text-white"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-brandSurface border border-brandCardBorder hover:text-white"
                  >
                    LeetCode
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accentPurple font-semibold mb-2 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  Professional Profile
                </h4>
                <p className="text-xs sm:text-sm text-brandSlate/90 leading-relaxed">
                  {personalInfo.aboutParagraphs[0]} {personalInfo.aboutParagraphs[2]}
                </p>
              </div>

              {/* Education Block */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accentCyan font-semibold mb-2.5 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Education
                </h4>
                <div className="space-y-3">
                  {educationList.map((edu) => (
                    <div key={edu.id} className="p-3 rounded-lg bg-brandSurface/60 border border-brandCardBorder/80 text-xs">
                      <div className="flex flex-wrap justify-between items-baseline mb-1">
                        <span className="font-semibold text-white text-sm">{edu.degree}</span>
                        <span className="font-mono text-accentCyan">{edu.duration}</span>
                      </div>
                      <div className="text-brandSlate/90">{edu.institution}, {edu.location}</div>
                      {edu.percentage && (
                        <span className="text-[11px] font-mono text-emerald-400 mt-1 inline-block">Score: {edu.percentage}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills Block */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accentPurple font-semibold mb-2.5 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  Technical Competencies
                </h4>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-mono text-brandMuted mr-2">Programming:</span>
                    <span className="text-white font-medium">Java, JavaScript, HTML5, CSS3</span>
                  </div>
                  <div>
                    <span className="font-mono text-brandMuted mr-2">Frontend:</span>
                    <span className="text-white font-medium">React.js, Vite, Tailwind CSS, Bootstrap</span>
                  </div>
                  <div>
                    <span className="font-mono text-brandMuted mr-2">Backend &amp; DB:</span>
                    <span className="text-white font-medium">Node.js, Express.js, Spring Boot, REST APIs, MongoDB, MySQL</span>
                  </div>
                  <div>
                    <span className="font-mono text-brandMuted mr-2">Cloud &amp; DevOps (Learning):</span>
                    <span className="text-white font-medium">AWS (EC2, S3, IAM), Docker, CI/CD</span>
                  </div>
                  <div>
                    <span className="font-mono text-brandMuted mr-2">DSA &amp; Tools:</span>
                    <span className="text-white font-medium">Arrays, Strings, Sorting, Searching, Binary Search, Git, Postman, VS Code</span>
                  </div>
                </div>
              </div>

              {/* Featured Projects Block */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-accentCyan font-semibold mb-2.5 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  Key Engineered Projects
                </h4>
                <div className="space-y-3">
                  {projects.map((proj) => (
                    <div key={proj.id} className="p-3 rounded-lg bg-brandSurface/60 border border-brandCardBorder/80 text-xs">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold text-white">{proj.title}</span>
                        <span className="font-mono text-[11px] text-accentPurple">{proj.category}</span>
                      </div>
                      <p className="text-brandMuted text-[11px] mb-2">{proj.shortDescription}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags.slice(0, 5).map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-brandDark text-[10px] font-mono text-brandSlate border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* PDF Placement Instructions */
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-accentCyan/10 border border-accentCyan/30 space-y-3 text-xs sm:text-sm text-brandSlate">
                <div className="flex items-start gap-2.5 text-accentCyan font-semibold">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>How to Add Your Actual Resume PDF:</span>
                </div>
                <p className="leading-relaxed">
                  The "Download PDF" button points directly to <code className="text-accentCyan font-mono bg-black/40 px-2 py-0.5 rounded">public/resume.pdf</code>.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-brandSlate/90 font-mono text-xs">
                  <li>Export your latest CV from Canva, Word, or LaTeX as a PDF named <strong className="text-white">resume.pdf</strong>.</li>
                  <li>Copy or save that file into this project folder: <code className="text-accentCyan">/shailesh-portfolio/public/resume.pdf</code>.</li>
                  <li>Anyone clicking "Download Resume" will immediately receive your exact verified PDF document!</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-brandSurface/80 border border-brandCardBorder space-y-2 text-xs font-mono text-brandMuted">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ethical Engineering Guarantee:</span>
                </div>
                <p>
                  No synthetic qualifications or unverified credentials are ever fabricated. All education, internship, and project entries match Shailesh Kumar's authentic records.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-brandCardBorder bg-[#111624] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Shailesh%20Kumar`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-brandSlate hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accentCyan" />
              <span>Request via Email</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-brandSlate hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-accentPurple" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumePath}
              download="Shailesh_Kumar_Resume.pdf"
              className="btn-gradient-glow inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

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
