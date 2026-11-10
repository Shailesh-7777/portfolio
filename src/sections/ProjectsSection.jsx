import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import Tilt3DCard from '../components/Tilt3DCard';
import {
  ExternalLink,
  Github,
  Code,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
  Maximize2,
  Globe,
  Edit,
  Plus
} from 'lucide-react';

export default function ProjectsSection({ onSelectProject, onOpenDemoNotice }) {
  const { projects, isOwner, openDashboardModal } = usePortfolio();
  const [filter, setFilter] = useState('All');

  // Filter tabs
  const filterTabs = ['All', 'Full Stack MERN', 'Java & Spring Boot', 'AI & Concepts'];

  // Only display published projects to public; owner sees all
  const displayedProjects = projects.filter((p) => {
    if (!isOwner && !p.published) return false;
    if (filter === 'All') return true;
    if (filter === 'Full Stack MERN') return p.category.includes('MERN');
    if (filter === 'Java & Spring Boot') return p.tags.includes('Java');
    if (filter === 'AI & Concepts') return p.category.includes('AI') || p.category.includes('Concept');
    return true;
  });

  const handleLiveDemoClick = (project, e) => {
    e.stopPropagation();
    if (project.liveUrl && project.liveUrl.trim().length > 0) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpenDemoNotice(project);
    }
  };

  return (
    <section id="projects" className="py-28 relative bg-brandDark/95 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accentPurple/15 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-10 w-[550px] h-[550px] bg-accentCyan/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
            <Layers className="w-3.5 h-3.5" />
            <span>Futuristic 3D Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-kanit font-black text-white tracking-tight">
            FLOATING <span className="gradient-text-hero">PROJECTS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-3" />
          
          <p className="mt-4 text-brandSlate/80 text-sm sm:text-base max-w-2xl font-sans">
            Interactive 3D project cards showcasing full-stack applications, distributed Spring Boot services, and AI architectures. Hover to inspect 3D perspective depth.
          </p>

          {/* Owner Dashboard Quick Add Button if logged in */}
          {isOwner && (
            <div className="mt-6 flex items-center gap-3 p-3 rounded-2xl bg-brandSurface/90 border border-accentCyan/40 shadow-[0_0_20px_rgba(0,245,255,0.2)]">
              <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Owner Mode Active
              </span>
              <button
                onClick={() => openDashboardModal('projects')}
                className="btn-gradient-glow flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-white"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Manage & Add Projects</span>
              </button>
            </div>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                filter === tab
                  ? 'bg-gradient-to-r from-accentCyan/30 via-accentPurple/30 to-accentCyan/30 text-white font-bold border border-accentCyan shadow-[0_0_20px_rgba(0,245,255,0.3)]'
                  : 'bg-brandSurface/80 hover:bg-white/5 text-brandMuted hover:text-white border border-brandCardBorder'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Floating 3D Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {displayedProjects.map((project, index) => {
            const glowTheme = index % 2 === 0 ? 'cyan' : 'purple';

            return (
              <Tilt3DCard
                key={project.id}
                glowColor={glowTheme}
                maxRotation={12}
                scale={1.02}
                className="p-6 sm:p-7 flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Card Header & Status Badges */}
                  <div className="flex items-center justify-between mb-4 translate-z-20">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-accentCyan/15 border border-accentCyan/30 text-accentCyan font-semibold">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-medium">
                        {project.badge}
                      </span>
                    </div>

                    {!project.published && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Draft (Owner View)
                      </span>
                    )}
                  </div>

                  {/* Actual Project Screenshot with Holographic Border */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative rounded-2xl overflow-hidden bg-black/90 border border-white/10 mb-5 group-hover:border-accentCyan/50 transition-all duration-300 cursor-pointer shadow-lg translate-z-30"
                  >
                    <img
                      src={project.image || '/project-wedding-wagon.svg'}
                      alt={project.title}
                      className="w-full h-56 sm:h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Holographic HUD Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                      <span className="text-xs font-mono text-accentCyan flex items-center gap-1.5">
                        <Maximize2 className="w-4 h-4" />
                        <span>Inspect Architecture & Details</span>
                      </span>
                      <span className="text-[10px] font-mono text-brandMuted uppercase tracking-wider">
                        3D Hologram
                      </span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-kanit font-bold text-white mb-2.5 tracking-wide group-hover:text-accentCyan transition-colors translate-z-20">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-brandSlate/85 leading-relaxed mb-5 font-sans translate-z-10">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6 translate-z-20">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#090D18] border border-brandCardBorder text-brandSlate group-hover:border-accentCyan/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions: GitHub, Live Demo, View Details (EXACT USER SPECIFICATION) */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 translate-z-30">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {/* Live Demo Button (opens actual link in new tab or notice) */}
                    <button
                      onClick={(e) => handleLiveDemoClick(project, e)}
                      className="btn-gradient-glow inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white shadow-md"
                    >
                      <Globe className="w-3.5 h-3.5 text-accentCyan" />
                      <span>Live Demo</span>
                    </button>

                    {/* GitHub Button (opens actual repository) */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-sleek inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium text-brandSlate hover:text-white"
                        aria-label={`GitHub Repository for ${project.title}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-accentCyan hover:text-white transition-colors group/btn py-2"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
