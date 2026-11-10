import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Compass,
  Sparkles,
  MapPin,
  CheckCircle,
  GraduationCap,
  Layers,
  Cpu,
  Server,
  Bug,
  Brain,
  Cloud,
  Rocket,
  Target,
  Award,
  BookOpen
} from 'lucide-react';

export default function AboutSection() {
  const pillarCards = [
    {
      icon: Layers,
      title: "Full-Stack Development",
      description: "Designing end-to-end web architectures with React.js on the client and Node.js / Express or Spring Boot on the server, emphasizing clean state flow, modular components, and RESTful principles.",
      accent: "text-accentCyan",
      border: "hover:border-accentCyan/40"
    },
    {
      icon: Cpu,
      title: "Java & Algorithmic Logic",
      description: "Strengthening core programming logic through Java and daily Data Structures and Algorithms practice. Focused on space-time efficiency, recursion, and object-oriented architecture.",
      accent: "text-accentPurple",
      border: "hover:border-accentPurple/40"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps (In Progress)",
      description: "Actively mastering AWS cloud architecture (EC2, S3, IAM) and containerization with Docker to deploy production-ready applications with continuous integration and deployment.",
      accent: "text-accentBlue",
      border: "hover:border-accentBlue/40"
    },
    {
      icon: Bug,
      title: "Systematic Engineering",
      description: "Thriving on diagnosing complex logic bugs, writing unit tests, enforcing JWT security, validating API payloads, and delivering reliable software that runs predictably.",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/40"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-brandDark">
      {/* Ambient background accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accentPurple/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accentPurple/10 border border-accentPurple/30 text-accentPurple text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile &amp; Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit font-bold text-white tracking-tight">
            About <span className="gradient-text-cyan-purple">Shailesh Kumar</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-3" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Introduction & Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Main Narrative Card with Prompt Exact Text */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-brandCardBorder space-y-4 text-brandSlate text-base leading-relaxed">
              <div className="flex items-center gap-2 text-xs font-mono text-accentCyan uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Introduction</span>
              </div>
              
              {/* Exact paragraph 1 from prompt */}
              <p className="text-white font-medium">
                "{personalInfo.aboutParagraphs[0]}"
              </p>

              {/* Exact paragraph 2 from prompt */}
              <p className="text-brandMuted">
                "{personalInfo.aboutParagraphs[1]}"
              </p>

              {/* Exact paragraph 3 from prompt */}
              <p className="text-brandMuted">
                "{personalInfo.aboutParagraphs[2]}"
              </p>

              {/* Exact paragraph 4 from prompt */}
              <p className="text-brandSlate font-semibold">
                "{personalInfo.aboutParagraphs[3]}"
              </p>

              {/* Location & Quick Meta Box */}
              <div className="pt-4 mt-2 border-t border-brandCardBorder/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-brandMuted">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accentCyan shrink-0" />
                  <span>Bettiah, West Champaran, Bihar, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accentPurple shrink-0" />
                  <span>B.Tech CSE (2024–2028)</span>
                </div>
              </div>
            </div>

            {/* My Journey Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-brandCardBorder space-y-3">
              <h3 className="text-base font-kanit font-bold text-white flex items-center gap-2 tracking-wide">
                <Rocket className="w-4 h-4 text-accentCyan" />
                <span>My Journey</span>
              </h3>
              <p className="text-xs sm:text-sm text-brandSlate/90 leading-relaxed font-sans">
                {personalInfo.journey}
              </p>
            </div>

            {/* Career Objectives & Development Goals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Career Objectives */}
              <div className="p-5 rounded-2xl bg-brandSurface/80 border border-brandCardBorder space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-accentCyan uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>Career Objective</span>
                </div>
                <p className="text-xs text-brandSlate/90 leading-relaxed">
                  {personalInfo.careerObjectives}
                </p>
              </div>

              {/* Personal Development Goals */}
              <div className="p-5 rounded-2xl bg-brandSurface/80 border border-brandCardBorder space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-accentPurple uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>Development Goals</span>
                </div>
                <ul className="space-y-1 text-xs text-brandSlate/90 font-mono">
                  {personalInfo.developmentGoals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-accentCyan">▸</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column: Strengths & Technical Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Professional Portrait Card with Descriptive Alt Text */}
            <div className="glass-card p-5 rounded-2xl border border-brandCardBorder flex flex-col sm:flex-row items-center gap-5 group hover:border-accentCyan/40 transition-all shadow-xl">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-black/80 border-2 border-accentCyan/50 shadow-[0_0_25px_rgba(0,245,255,0.3)] shrink-0">
                <picture>
                  <source srcSet="/profile.webp" type="image/webp" />
                  <img
                    src="/profile.jpg"
                    alt="Shailesh Kumar - Full Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="128"
                    height="128"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accentCyan flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Software Developer</span>
                </span>
                <h3 className="text-xl font-kanit font-bold text-white mb-0.5">
                  Shailesh Kumar
                </h3>
                <p className="text-xs font-mono text-brandMuted mb-2">
                  B.Tech CSE • MMU Mullana (2024–2028)
                </p>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Available for Hire</span>
                </div>
              </div>
            </div>

            {/* Core Strengths Card */}
            <div className="glass-card p-6 rounded-2xl border border-brandCardBorder space-y-4">
              <h3 className="text-base font-kanit font-bold text-white flex items-center gap-2 tracking-wide">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Core Engineering Strengths</span>
              </h3>
              <div className="space-y-2.5">
                {personalInfo.strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-brandDark/80 border border-brandCardBorder text-xs text-brandSlate"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{str}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Technical Interest Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {pillarCards.map((card, cIdx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={cIdx}
                    className={`glass-card p-5 rounded-2xl border border-brandCardBorder transition-all duration-300 ${card.border} group`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${card.accent}`} />
                    </div>
                    <h4 className="text-sm font-kanit font-semibold text-white mb-1.5">
                      {card.title}
                    </h4>
                    <p className="text-[11px] text-brandMuted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
