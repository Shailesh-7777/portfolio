import React from 'react';
import { journeyMilestones } from '../data/portfolioData';
import {
  Milestone,
  CheckCircle2,
  Code2,
  GitBranch,
  Terminal,
  ShieldCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';

const milestoneIcons = [
  Code2,
  Cpu,
  Terminal,
  ShieldCheck
];

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 relative bg-brandDark/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accentPurple/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-mono uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Continuous Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit font-bold text-white tracking-tight">
            Learning <span className="gradient-text-cyan-purple">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentPurple to-accentCyan rounded-full mt-3" />
          <p className="mt-4 text-brandMuted text-sm sm:text-base max-w-xl">
            A transparent overview of my ongoing technical progression, deliberate coding practice, and software engineering milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-brandCardBorder space-y-12">
          
          {journeyMilestones.map((item, index) => {
            const Icon = milestoneIcons[index] || Milestone;

            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Node Icon Indicator */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-10 h-10 rounded-xl bg-brandDark border border-accentCyan/40 flex items-center justify-center text-accentCyan shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:border-accentCyan group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Milestone Card */}
                <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-brandCardBorder">
                  
                  {/* Tag & Stage */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-accentCyan/10 border border-accentCyan/20 text-accentCyan font-medium">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-brandMuted">
                      Focus Area 0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-kanit font-semibold text-white mb-3 tracking-wide">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-brandMuted leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Key Competencies Acquired */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-brandCardBorder/60">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-mono text-brandSlate bg-brandSurface/70 px-3 py-2 rounded-lg border border-brandCardBorder">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{point}</span>
                      </div>
                    ))}
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
