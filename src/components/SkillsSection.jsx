import React from 'react';
import { skillCategories } from '../data/portfolioData';
import {
  Layout,
  Server,
  Database,
  Wrench,
  CheckCircle2,
  Code2,
  Terminal,
  Cpu,
  ShieldCheck
} from 'lucide-react';

const categoryIcons = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-brandDark/90">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accentCyan/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit font-bold text-white tracking-tight">
            Skills & <span className="gradient-text-cyan-purple">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentPurple to-accentCyan rounded-full mt-3" />
          <p className="mt-4 text-brandMuted text-sm sm:text-base max-w-xl">
            A verified inventory of technologies I work with daily across full-stack web applications, backend APIs, and algorithmic problem solving.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.icon] || Code2;

            return (
              <div
                key={cat.category}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-brandCardBorder relative group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accentPurple/20 to-accentCyan/20 border border-brandCardBorder flex items-center justify-center text-accentCyan group-hover:border-accentCyan/50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-kanit font-semibold text-white tracking-wide">
                          {cat.category}
                        </h3>
                        <span className="text-[11px] font-mono text-brandMuted">
                          {cat.skills.length} core technologies
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-brandMuted border border-white/5">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs sm:text-sm text-brandMuted mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 px-3.5 py-2 rounded-xl bg-brandDark/80 border border-brandCardBorder hover:border-accentCyan/40 hover:bg-brandSurface transition-all group/skill shadow-sm"
                      >
                        <span className="text-xs sm:text-sm font-medium text-brandSlate group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-brandMuted px-1.5 py-0.5 rounded bg-white/5 border border-white/5">
                          {skill.highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer validation tag */}
                <div className="mt-6 pt-4 border-t border-brandCardBorder/60 flex items-center gap-2 text-[11px] font-mono text-brandMuted">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accentCyan shrink-0" />
                  <span>Hands-on experience in personal & collaborative codebases</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Note */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-mono text-brandMuted bg-brandSurface/60 px-4 py-2 rounded-full border border-brandCardBorder">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Honest representation: Showing only technologies I actively write code in. No arbitrary percentage bars.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
