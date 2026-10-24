import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Code,
  Server,
  Cpu,
  Bug,
  Compass,
  MapPin,
  CheckCircle,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Layers,
      title: "Full-Stack Development",
      description: "Designing end-to-end web applications with React on the frontend and Node.js / Express on the backend, emphasizing modular component design and clean state flow.",
      gradient: "from-cyan-500/20 to-blue-500/10",
      accent: "text-accentCyan"
    },
    {
      icon: Cpu,
      title: "Java & Problem Solving",
      description: "Strengthening core programming concepts through Java and active Data Structures and Algorithms practice. Focused on algorithmic efficiency and clean OOP architecture.",
      gradient: "from-purple-500/20 to-pink-500/10",
      accent: "text-accentPurple"
    },
    {
      icon: Server,
      title: "REST APIs & Security",
      description: "Engineering structured REST endpoints, JWT authentication middleware, input validation, and validating request/response lifecycles rigorously with Postman.",
      gradient: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400"
    },
    {
      icon: Bug,
      title: "Systematic Debugging",
      description: "Thriving on diagnosing complex logic bugs, resolving edge cases, optimizing queries, and delivering reliable software that runs predictably in production.",
      gradient: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-brandDark">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accentPurple/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentPurple/10 border border-accentPurple/30 text-accentPurple text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit font-bold text-white tracking-tight">
            About <span className="gradient-text-cyan-purple">Shailesh</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-3" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-brandCardBorder space-y-4 text-brandSlate text-base leading-relaxed">
              <div className="flex items-center gap-2 text-xs font-mono text-accentCyan uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Developer Journey</span>
              </div>
              
              <p>
                I am a dedicated <strong className="text-white font-semibold">Full Stack Developer</strong> located in{' '}
                <span className="text-accentCyan font-medium">Bettiah, Bihar, India</span>. My passion centers on building practical, dependable software products that bridge responsive user interfaces with well-architected backend services.
              </p>

              <p className="text-brandMuted">
                Whether creating a three-sided luxury wedding marketplace (<span className="text-brandSlate font-medium">Wedding Wagon</span>), an intelligent mock interview platform with Java and React (<span className="text-brandSlate font-medium">AI Interview System</span>), or an enterprise ordering system with strict role-based controls, I focus on clean code, maintainable structure, and intuitive user experiences.
              </p>

              <p className="text-brandMuted">
                Alongside full-stack web technologies like <strong className="text-brandSlate">React.js, Node.js, Express, and MongoDB</strong>, I place significant emphasis on core <strong className="text-brandSlate">Java</strong> programming and <strong className="text-brandSlate">Data Structures and Algorithms</strong> to sharpen my algorithmic problem-solving abilities.
              </p>

              <p className="text-brandMuted">
                I believe in continuous learning, deliberate practice, and honest engineering—delivering real functionality rather than superficial mockups.
              </p>

              {/* Location & Quick Meta Box */}
              <div className="pt-4 mt-2 border-t border-brandCardBorder/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-brandMuted">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accentCyan shrink-0" />
                  <span>Location: Bettiah, Bihar, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Focus: Full-Stack Web & Java</span>
                </div>
              </div>
            </div>

            {/* Quick Principles Banner */}
            <div className="p-4 rounded-xl bg-brandSurface/60 border border-brandCardBorder flex items-center justify-between text-xs font-mono text-brandMuted">
              <span>Clean Code</span>
              <span className="text-accentPurple">•</span>
              <span>RESTful Architecture</span>
              <span className="text-accentCyan">•</span>
              <span>Problem Solving</span>
              <span className="text-accentPurple">•</span>
              <span>Continuous Growth</span>
            </div>
          </div>

          {/* Right Column: Visual Pillar Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-brandCardBorder flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} border border-white/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                      <Icon className={`w-6 h-6 ${item.accent}`} />
                    </div>
                    <h3 className="text-base font-kanit font-semibold text-white mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brandMuted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-brandCardBorder/50 flex items-center gap-1.5 text-[11px] font-mono text-brandMuted">
                    <CheckCircle className={`w-3.5 h-3.5 ${item.accent}`} />
                    <span>Applied in practical projects</span>
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
