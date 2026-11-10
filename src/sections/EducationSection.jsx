import React from 'react';
import Tilt3DCard from '../components/Tilt3DCard';
import { educationList } from '../data/portfolioData';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-28 relative bg-brandDark/95 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accentCyan/15 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accentPurple/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Futuristic Education Timeline</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-kanit font-black text-white tracking-tight">
            ACADEMIC <span className="gradient-text-cyan-purple">TIMELINE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-3" />

          <p className="mt-4 text-brandSlate/80 text-sm sm:text-base max-w-xl font-sans">
            Verified academic milestones connected through glowing cyberpunk circuit nodes, tracking achievements from high school to B.Tech in CSE.
          </p>
        </div>

        {/* Futuristic Timeline with Neon Circuit Connections */}
        <div className="relative pl-8 sm:pl-12 space-y-12 before:absolute before:left-3.5 sm:before:left-5 before:top-4 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-accentCyan before:via-accentPurple before:to-accentCyan before:shadow-[0_0_15px_rgba(0,245,255,0.5)]">
          {educationList.map((edu, index) => {
            const isBTech = edu.id === 'btech';
            const isClass12 = edu.id === 'class12';
            const isClass10 = edu.id === 'class10';

            return (
              <div key={edu.id} className="relative group">
                
                {/* Glowing Neon Node on the Circuit Conduit */}
                <div
                  className={`absolute -left-[37px] sm:-left-[45px] top-4 w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#090D18] border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg z-20 ${
                    edu.isCurrent
                      ? 'border-accentCyan text-accentCyan shadow-[0_0_25px_rgba(0,245,255,0.5)]'
                      : 'border-accentPurple/60 text-accentPurple shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                  }`}
                >
                  <GraduationCap className="w-5 h-5" />
                  {edu.isCurrent && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  )}
                </div>

                {/* 3D Education Card */}
                <Tilt3DCard
                  glowColor={edu.isCurrent ? 'cyan' : 'purple'}
                  maxRotation={10}
                  scale={1.015}
                  className="p-6 sm:p-8"
                >
                  {/* Top Badges and Score Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 translate-z-20">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-accentPurple/20 border border-accentPurple/40 text-accentPurple font-bold">
                        {edu.badge}
                      </span>

                      {edu.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          2024–2028 | Currently Pursuing
                        </span>
                      )}

                      {edu.percentage && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-accentCyan/15 border border-accentCyan/40 text-accentCyan font-bold shadow-[0_0_10px_rgba(0,245,255,0.25)]">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Percentage: {edu.percentage}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-accentCyan">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-2xl sm:text-3xl font-kanit font-bold text-white mb-1.5 tracking-wide group-hover:text-accentCyan transition-colors translate-z-30">
                    {edu.degree}
                  </h3>

                  {/* Branch & Specialization */}
                  <div className="text-sm font-semibold text-accentPurple mb-2 translate-z-20">
                    {edu.branch}
                  </div>

                  {/* Institution & Location */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-brandMuted mb-5 translate-z-10">
                    <span className="text-white font-medium text-sm">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accentCyan" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="pt-4 border-t border-white/5 space-y-2 translate-z-20">
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brandSlate/90 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accentCyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Futuristic Status Footer */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-brandMuted translate-z-10">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Academic Record</span>
                    </span>
                    <span>Status: {edu.status}</span>
                  </div>
                </Tilt3DCard>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
