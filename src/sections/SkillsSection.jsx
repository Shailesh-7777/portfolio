import React, { useState } from 'react';
import Tilt3DCard from '../components/Tilt3DCard';
import { skillCategories } from '../data/portfolioData';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cloud,
  Cpu,
  GitBranch,
  Github,
  Globe,
  Terminal,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck
} from 'lucide-react';

// Exact 13 technologies specified in the prompt:
// React.js, JavaScript, HTML, CSS, Node.js, Express.js, MongoDB, Java, Spring Boot, MySQL, Git, GitHub and AWS.
const coreTechnologies3D = [
  {
    name: "React.js",
    category: "Frontend Framework",
    icon: Code2,
    color: "text-cyan-400",
    border: "border-cyan-500/40",
    glow: "cyan",
    level: "Proficient",
    focus: "Hooks, Virtual DOM, Reusable Component Architecture & State Management"
  },
  {
    name: "JavaScript",
    category: "Core Language",
    icon: Zap,
    color: "text-yellow-400",
    border: "border-yellow-500/40",
    glow: "purple",
    level: "Proficient",
    focus: "ES6+, Async/Await, Event Loop, Closures & Modern Web APIs"
  },
  {
    name: "HTML",
    category: "Web Standards",
    icon: Globe,
    color: "text-orange-400",
    border: "border-orange-500/40",
    glow: "cyan",
    level: "Core Standard",
    focus: "Semantic Elements, ARIA Accessibility, DOM Tree Structure & SEO"
  },
  {
    name: "CSS",
    category: "Styling & Motion",
    icon: Layout,
    color: "text-blue-400",
    border: "border-blue-500/40",
    glow: "purple",
    level: "Core Standard",
    focus: "Flexbox, CSS Grid, 3D Transforms, Responsive Media Queries & Animations"
  },
  {
    name: "Node.js",
    category: "Backend Runtime",
    icon: Server,
    color: "text-emerald-400",
    border: "border-emerald-500/40",
    glow: "cyan",
    level: "Proficient",
    focus: "Non-blocking Event-driven I/O, REST Services & Modular Packages"
  },
  {
    name: "Express.js",
    category: "Server Framework",
    icon: Terminal,
    color: "text-purple-400",
    border: "border-purple-500/40",
    glow: "purple",
    level: "Proficient",
    focus: "Routing Pipelines, JWT Authentication Middleware & Error Handling"
  },
  {
    name: "MongoDB",
    category: "NoSQL Database",
    icon: Database,
    color: "text-green-400",
    border: "border-green-500/40",
    glow: "cyan",
    level: "Proficient",
    focus: "JSON Document Modeling, Mongoose Schemas, Aggregations & Indexes"
  },
  {
    name: "Java",
    category: "Object-Oriented Language",
    icon: Cpu,
    color: "text-amber-400",
    border: "border-amber-500/40",
    glow: "purple",
    level: "Core / Advanced",
    focus: "OOP Principles, Multithreading, Memory Model & Algorithmic Problem Solving"
  },
  {
    name: "Spring Boot",
    category: "Enterprise Backend",
    icon: Layers,
    color: "text-emerald-300",
    border: "border-emerald-400/40",
    glow: "cyan",
    level: "Working Knowledge",
    focus: "Dependency Injection, Spring MVC REST Endpoints & JPA Entities"
  },
  {
    name: "MySQL",
    category: "Relational Database",
    icon: Database,
    color: "text-sky-400",
    border: "border-sky-500/40",
    glow: "purple",
    level: "Working Knowledge",
    focus: "ACID Transactions, Relational Foreign Keys, Complex Joins & Normalization"
  },
  {
    name: "Git",
    category: "Version Control",
    icon: GitBranch,
    color: "text-rose-400",
    border: "border-rose-500/40",
    glow: "cyan",
    level: "Proficient",
    focus: "Branching Strategies, Merge Rebasing, Staging & Commit Integrity"
  },
  {
    name: "GitHub",
    category: "Collaboration & CI/CD",
    icon: Github,
    color: "text-slate-300",
    border: "border-slate-400/40",
    glow: "purple",
    level: "Proficient",
    focus: "Remote Repository Hosting, Pull Requests, Code Reviews & Actions Automation"
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    icon: Cloud,
    color: "text-orange-400",
    border: "border-orange-500/40",
    glow: "cyan",
    level: "Active Learning",
    focus: "EC2 Cloud Compute, S3 Bucket Storage, IAM Security Policies & VPC"
  }
];

export default function SkillsSection() {
  const [viewMode, setViewMode] = useState('3d-cards'); // '3d-cards' | 'categorized'

  return (
    <section id="skills" className="py-28 relative bg-brandDark">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accentPurple/15 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accentCyan/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
            <Cpu className="w-3.5 h-3.5" />
            <span>3D Interactive Engineering Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-kanit font-black text-white tracking-tight">
            3D <span className="gradient-text-cyan-purple">SKILLS MATRIX</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-3" />

          <p className="mt-4 text-brandSlate/80 text-sm sm:text-base max-w-2xl font-sans">
            Interactive 3D technology cards showcasing core production stacks. Includes real-world engineering proficiencies without arbitrary percentage bars.
          </p>

          {/* View Mode Toggle */}
          <div className="mt-8 flex items-center p-1 rounded-2xl bg-brandSurface/80 border border-brandCardBorder">
            <button
              onClick={() => setViewMode('3d-cards')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                viewMode === '3d-cards'
                  ? 'bg-gradient-to-r from-accentCyan/20 to-accentPurple/20 text-white font-bold border border-accentCyan/40 shadow-md'
                  : 'text-brandMuted hover:text-white'
              }`}
            >
              3D Hologram Cards (13 Technologies)
            </button>
            <button
              onClick={() => setViewMode('categorized')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                viewMode === 'categorized'
                  ? 'bg-gradient-to-r from-accentCyan/20 to-accentPurple/20 text-white font-bold border border-accentCyan/40 shadow-md'
                  : 'text-brandMuted hover:text-white'
              }`}
            >
              Categorized Breakdown
            </button>
          </div>
        </div>

        {/* 1. 3D HOLOGRAM TECH CARDS (EXACT USER SPECIFICATION) */}
        {viewMode === '3d-cards' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {coreTechnologies3D.map((tech) => {
              const IconComp = tech.icon;

              return (
                <Tilt3DCard
                  key={tech.name}
                  glowColor={tech.glow}
                  maxRotation={16}
                  scale={1.03}
                  className="p-6 flex flex-col justify-between group cursor-default"
                >
                  <div>
                    {/* Top Icon & Level Badge */}
                    <div className="flex items-center justify-between mb-5 translate-z-20">
                      <div className={`w-12 h-12 rounded-2xl bg-black/60 border ${tech.border} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className={`w-6 h-6 ${tech.color}`} />
                      </div>

                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-brandSlate group-hover:border-accentCyan/40 group-hover:text-accentCyan transition-colors">
                        {tech.level}
                      </span>
                    </div>

                    {/* Tech Name */}
                    <h3 className="text-xl font-kanit font-bold text-white mb-1 tracking-wide group-hover:text-accentCyan transition-colors translate-z-30">
                      {tech.name}
                    </h3>

                    {/* Category */}
                    <span className="text-xs font-mono text-brandMuted block mb-3 translate-z-10">
                      {tech.category}
                    </span>

                    {/* Practical Focus */}
                    <p className="text-xs text-brandSlate/80 leading-relaxed font-sans translate-z-10">
                      {tech.focus}
                    </p>
                  </div>

                  {/* Cyber Bottom Accent */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-brandMuted translate-z-20">
                    <span className="flex items-center gap-1 text-accentCyan">
                      <Sparkles className="w-3 h-3" />
                      <span>Verified Usage</span>
                    </span>
                    <span>3D Holo</span>
                  </div>
                </Tilt3DCard>
              );
            })}
          </div>
        )}

        {/* 2. CATEGORIZED BREAKDOWN (DETAILED SYLLABUS) */}
        {viewMode === 'categorized' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="glass-card p-6 rounded-2xl border border-brandCardBorder hover:border-accentCyan/40 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accentCyan/10 border border-accentCyan/30 flex items-center justify-center text-accentCyan">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-kanit font-bold text-white">
                        {cat.category}
                      </h4>
                      <p className="text-xs font-mono text-brandMuted">
                        {cat.skills.length} core proficiencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-sans text-brandSlate/75 mb-4">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-[#090D18] border border-brandCardBorder flex items-center justify-between"
                      >
                        <div>
                          <span className="text-xs font-kanit font-bold text-white block">
                            {skill.name}
                          </span>
                          <span className="text-[11px] font-sans text-brandMuted">
                            {skill.focus}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-accentCyan border border-accentCyan/20">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
