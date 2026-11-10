import React, { useState } from 'react';
import { interestsList, futureRoadmap as initialRoadmap } from '../data/portfolioData';
import {
  Compass,
  Layers,
  Brain,
  Cloud,
  Cpu,
  Code,
  Server,
  Terminal,
  GitBranch,
  Target,
  CheckCircle2,
  Clock,
  Sparkles,
  TrendingUp,
  Sliders,
  Check
} from 'lucide-react';

const interestIcons = {
  Layers: Layers,
  Brain: Brain,
  Cloud: Cloud,
  Cpu: Cpu,
  Code: Code,
  Server: Server,
  Terminal: Terminal,
  GitBranch: GitBranch
};

export default function InterestsRoadmapSection() {
  const [roadmap, setRoadmap] = useState(initialRoadmap);
  const [isEditingId, setIsEditingId] = useState(null);

  const handleToggleComplete = (id) => {
    setRoadmap((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const isDone = item.status === 'Completed';
          return {
            ...item,
            status: isDone ? 'In Active Progress' : 'Completed',
            progress: isDone ? 70 : 100
          };
        }
        return item;
      })
    );
  };

  const handleProgressChange = (id, newProgress) => {
    setRoadmap((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const val = Number(newProgress);
          return {
            ...item,
            progress: val,
            status: val === 100 ? 'Completed' : val > 0 ? 'In Active Progress' : 'Planned'
          };
        }
        return item;
      })
    );
  };

  return (
    <section id="roadmap" className="py-24 relative bg-brandDark/95">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accentPurple/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accentCyan/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SUBSECTION 1: My Interests & What I'm Exploring */}
        <div>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-mono uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Technical Passions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit font-bold text-white tracking-tight">
              My Interests &amp; <span className="gradient-text-cyan-purple">What I'm Exploring</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-3" />
            <p className="mt-4 text-brandMuted text-sm sm:text-base max-w-2xl">
              Key domains driving my technical curiosity, hands-on experimentation, and engineering dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {interestsList.map((interest, idx) => {
              const Icon = interestIcons[interest.icon] || Code;

              return (
                <div
                  key={interest.title}
                  className="glass-card p-6 rounded-2xl border border-brandCardBorder hover:border-accentCyan/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accentCyan/15 via-accentPurple/15 to-brandDark border border-brandCardBorder flex items-center justify-center text-accentCyan mb-4 group-hover:scale-110 group-hover:border-accentCyan/50 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-kanit font-bold text-white mb-2 tracking-wide">
                      {interest.title}
                    </h3>
                    <p className="text-xs text-brandMuted leading-relaxed">
                      {interest.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-brandCardBorder/60 flex items-center justify-between text-[11px] font-mono text-brandMuted">
                    <span>Active Domain</span>
                    <span className="text-accentCyan font-semibold">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUBSECTION 2: My Future Roadmap */}
        <div>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accentPurple/10 border border-accentPurple/30 text-accentPurple text-xs font-mono uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Strategic Progression</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit font-bold text-white tracking-tight">
              My Future <span className="gradient-text-hero">Roadmap</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accentPurple to-accentCyan rounded-full mt-3" />
            <p className="mt-4 text-brandMuted text-sm sm:text-base max-w-2xl">
              Concrete milestones I am actively pursuing. Click any goal to adjust its progress percentage or mark it complete as achievements unlock!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmap.map((item, index) => {
              const isCompleted = item.status === 'Completed';

              return (
                <div
                  key={item.id}
                  className={`glass-card p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-xl ${
                    isCompleted
                      ? 'border-emerald-500/40 bg-emerald-950/10'
                      : 'border-brandCardBorder hover:border-accentCyan/30'
                  }`}
                >
                  <div>
                    {/* Goal Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-accentPurple/15 border border-accentPurple/30 text-accentPurple font-semibold">
                        {item.category}
                      </span>

                      <button
                        onClick={() => handleToggleComplete(item.id)}
                        className={`text-xs font-mono px-3 py-0.5 rounded-full border transition-all flex items-center gap-1.5 ${
                          isCompleted
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400 font-semibold'
                            : 'bg-brandSurface border-brandCardBorder text-brandMuted hover:text-white'
                        }`}
                      >
                        {isCompleted ? <Check className="w-3 h-3 text-emerald-400" /> : <Clock className="w-3 h-3" />}
                        <span>{item.status}</span>
                      </button>
                    </div>

                    {/* Goal Title */}
                    <h3 className="text-lg sm:text-xl font-kanit font-bold text-white mb-2 tracking-wide">
                      {item.goal}
                    </h3>

                    {/* Target & Details */}
                    <div className="text-xs font-mono text-accentCyan mb-2">
                      Target: <span className="text-white font-medium">{item.target}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-brandSlate/90 leading-relaxed mb-6 font-sans">
                      {item.details}
                    </p>
                  </div>

                  {/* Interactive Progress Meter */}
                  <div className="space-y-2 pt-4 border-t border-brandCardBorder/80">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-brandMuted flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-accentCyan" />
                        Progress Level:
                      </span>
                      <span className="text-white font-bold">{item.progress}%</span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-brandDark border border-white/5 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          isCompleted
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                            : 'bg-gradient-to-r from-accentCyan to-accentPurple shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                        }`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>

                    {/* Progress Slider (Editable) */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={item.progress}
                      onChange={(e) => handleProgressChange(item.id, e.target.value)}
                      className="w-full accent-cyan-400 h-1 bg-transparent cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                      title="Slide to update your progress percentage"
                    />
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
