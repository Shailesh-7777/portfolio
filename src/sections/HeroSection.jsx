import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, heroTypewriterPhrases } from '../data/portfolioData';
import {
  ArrowRight,
  Send,
  FileText,
  MapPin,
  CheckCircle2,
  Github,
  Linkedin,
  Code2,
  Mail,
  Phone,
  Terminal,
  FileCode,
  Layers,
  Copy,
  Check,
  Sparkles,
  Camera,
  Cpu,
  Database,
  Cloud,
  Server
} from 'lucide-react';

const codeSnippets = {
  react: {
    filename: "App.jsx",
    language: "JavaScript / React",
    code: `import React, { useState } from 'react';
import { Hero, Projects, Skills } from './sections';

export default function App() {
  const [developer] = useState({
    name: "Shailesh Kumar",
    title: "Full Stack Developer | Software Developer",
    coreStack: ["React.js", "Node.js", "Java", "MongoDB", "AWS"],
    status: "Available for Software Engineering Roles"
  });

  return (
    <main className="bg-brandDark text-brandSlate selection:bg-accentCyan/30">
      <Hero dev={developer} />
      <Projects filter="all" />
      <Skills stack={developer.coreStack} />
    </main>
  );
}`
  },
  node: {
    filename: "server.js",
    language: "Node.js / Express",
    code: `import express from 'express';
import { authenticateUser } from './middleware/auth.js';

const app = express();
app.use(express.json());

// Wedding Wagon & Microservices API Gateway
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    developer: 'Shailesh Kumar',
    system: 'Full-Stack Architecture Online',
    timestamp: new Date().toISOString()
  });
});

export default app;`
  },
  java: {
    filename: "InterviewService.java",
    language: "Java 21 / Spring Boot",
    code: `package com.prep.ai.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class InterviewService {

    @Transactional(readOnly = true)
    public EvaluationResult evaluateCandidate(SessionSubmission submission) {
        // Multi-criteria technical rubric evaluation
        int technicalScore = calculateScore(submission.getAnswers());
        String feedback = generateFeedback(technicalScore);
        
        return new EvaluationResult(
            submission.getSessionId(),
            technicalScore,
            feedback,
            EvaluationStatus.COMPLETED
        );
    }
}`
  }
};

// Orbiting Tech Badges config
const floatingTechBadges = [
  { name: 'React.js', icon: Code2, color: 'text-cyan-400', border: 'border-cyan-500/40', pos: 'top-2 -left-6', depth: 'translate-z-40' },
  { name: 'Node.js', icon: Server, color: 'text-emerald-400', border: 'border-emerald-500/40', pos: 'bottom-8 -left-8', depth: 'translate-z-30' },
  { name: 'Java', icon: Cpu, color: 'text-amber-400', border: 'border-amber-500/40', pos: '-top-6 right-8', depth: 'translate-z-40' },
  { name: 'MongoDB', icon: Database, color: 'text-green-400', border: 'border-green-500/40', pos: 'bottom-2 -right-8', depth: 'translate-z-30' },
  { name: 'AWS', icon: Cloud, color: 'text-orange-400', border: 'border-orange-500/40', pos: 'top-1/2 -right-12', depth: 'translate-z-20' },
];

export default function HeroSection({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);
  
  // Typewriter effect state
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Photo state
  const [photoSrc, setPhotoSrc] = useState(personalInfo.profileImage || '/profile.jpg');

  // 3D Tilt for Hero Avatar Card
  const profileCardRef = useRef(null);
  const [profileTilt, setProfileTilt] = useState('');

  useEffect(() => {
    const fullPhrase = heroTypewriterPhrases[phraseIdx];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullPhrase) {
        setTimeout(() => setIsDeleting(true), 1700);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % heroTypewriterPhrases.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullPhrase.substring(0, currentText.length - 1)
            : fullPhrase.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIdx]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePhotoError = () => {
    setPhotoSrc('/profile-placeholder.svg');
  };

  const handleCustomPhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Mouse 3D tilt tracking for Profile Card
  const handleProfileMouseMove = (e) => {
    if (!profileCardRef.current) return;
    const rect = profileCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -16;
    const rotY = ((x - centerX) / centerX) * 16;
    setProfileTilt(`perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`);
  };

  const handleProfileMouseLeave = () => {
    setProfileTilt('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-accentPurple/25 via-accentCyan/20 to-transparent blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-accentCyan/20 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accentPurple/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bio & Hero Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. TOP OVERLINE: EXACT USER SPECIFICATION */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brandSurface/90 border border-accentCyan/30 text-xs font-mono text-brandSlate mb-6 shadow-[0_0_20px_rgba(0,245,255,0.2)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentCyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accentCyan"></span>
              </span>
              <span className="font-bold text-accentCyan uppercase tracking-widest">
                SHAILESH KUMAR | FULL STACK DEVELOPER
              </span>
            </div>

            {/* 2. MAIN HEADING: EXACT USER SPECIFICATION */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-kanit font-black tracking-tight leading-[1.08] text-white mb-4">
              BUILDING DIGITAL{' '}
              <span className="gradient-text-hero drop-shadow-[0_0_35px_rgba(0,245,255,0.35)]">
                EXPERIENCES
              </span>
            </h1>

            {/* 3. SUBTITLE: EXACT USER SPECIFICATION */}
            <div className="mb-5 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-lg sm:text-2xl font-kanit font-semibold text-brandSlate tracking-wide">
                Full Stack Developer | React | Node.js | Java | MongoDB | AWS
              </span>
            </div>

            {/* Dynamic Typewriter Role */}
            <div className="h-7 mb-6 flex items-center text-sm sm:text-base font-mono text-accentCyan">
              <span className="text-brandMuted mr-2">&gt; specialization:</span>
              <span className="text-white font-semibold">"{currentText}"</span>
              <span className="animate-pulse ml-0.5 font-bold">|</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-brandSlate/90 leading-relaxed max-w-2xl mb-8 font-sans">
              I am passionate about developing scalable, secure and user-friendly applications using modern web technologies.
            </p>

            {/* Availability Pill & Location */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brandMuted mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Available for Software Engineering Roles & Internships
              </span>
              <span className="inline-flex items-center gap-1.5 text-brandSlate">
                <MapPin className="w-3.5 h-3.5 text-accentCyan" />
                {personalInfo.location}
              </span>
            </div>

            {/* 3 Action Buttons: EXACT USER SPECIFICATION */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              {/* View Projects Button */}
              <a
                href="#projects"
                className="btn-gradient-glow inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg w-full sm:w-auto"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-accentCyan" />
              </a>

              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                className="btn-outline-sleek inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-brandSlate hover:text-white shadow-sm w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 text-accentPurple" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="btn-outline-sleek inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-brandSlate hover:text-white shadow-sm w-full sm:w-auto"
              >
                <Send className="w-4 h-4 text-accentCyan" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-brandMuted uppercase tracking-wider mr-2">
                Network:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-brandCardBorder flex items-center justify-center text-brandSlate hover:text-white hover:border-accentCyan hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-brandCardBorder flex items-center justify-center text-brandSlate hover:text-white hover:border-accentCyan hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-brandCardBorder flex items-center justify-center text-brandSlate hover:text-white hover:border-accentCyan hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all font-mono text-xs font-bold"
                aria-label="LeetCode Profile"
                title="LeetCode Problem Solving"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-brandCardBorder flex items-center justify-center text-brandSlate hover:text-white hover:border-accentCyan hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all"
                aria-label="Email Shailesh"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-brandCardBorder flex items-center justify-center text-brandSlate hover:text-white hover:border-accentCyan hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all"
                aria-label="Phone Shailesh"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Interactive Profile Presentation & Holographic Code Window */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* 3D PROFILE PRESENTATION WITH GLOWING NEON FRAME & ORBITING TECH */}
            <div
              ref={profileCardRef}
              onMouseMove={handleProfileMouseMove}
              onMouseLeave={handleProfileMouseLeave}
              style={{
                transform: profileTilt,
                transition: profileTilt ? 'transform 0.12s ease-out' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transformStyle: 'preserve-3d',
              }}
              className="relative w-72 sm:w-80 h-84 sm:h-96 rounded-3xl bg-brandSurface/85 border border-accentCyan/40 p-4 shadow-[0_0_40px_rgba(0,245,255,0.25)] flex flex-col items-center justify-center group mb-8 backdrop-blur-xl"
            >
              {/* Outer Animated Glowing Dual Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accentCyan via-accentPurple to-accentMagenta opacity-40 blur-md group-hover:opacity-80 transition-opacity duration-500 animate-spin-slow" />

              {/* Floating Orbiting Tech Badges in 3D Depth */}
              {floatingTechBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={badge.name}
                    className={`absolute ${badge.pos} ${badge.depth} px-3 py-1.5 rounded-xl bg-[#0B0F1E]/95 border ${badge.border} shadow-[0_0_15px_rgba(0,245,255,0.2)] flex items-center gap-1.5 text-xs font-mono text-white pointer-events-none transition-transform duration-300 group-hover:scale-110 z-30 animate-float-slow`}
                    style={{ animationDelay: `${idx * 0.8}s` }}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${badge.color}`} />
                    <span className="font-semibold">{badge.name}</span>
                  </div>
                );
              })}

              {/* Holographic Avatar Photo Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-black/90 border-2 border-accentCyan/50 shadow-[0_0_30px_rgba(0,245,255,0.35)] translate-z-20">
                <img
                  src={photoSrc}
                  alt={personalInfo.name}
                  onError={handlePhotoError}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Scanline hologram effect over photo */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accentCyan/10 to-accentPurple/20 pointer-events-none mix-blend-overlay" />
                <div className="scanline-overlay absolute inset-0 opacity-40 pointer-events-none" />

                {/* Photo upload trigger */}
                <label
                  title="Upload custom photo"
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity text-white text-xs font-mono p-2 text-center"
                >
                  <Camera className="w-5 h-5 mb-1 text-accentCyan" />
                  <span>Update Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCustomPhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Bottom Holographic HUD Label */}
              <div className="mt-4 flex items-center justify-between w-full px-4 text-xs font-mono text-brandMuted translate-z-30">
                <div className="flex items-center gap-1.5 text-accentCyan">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-bold">SYSTEM ACTIVE</span>
                </div>
                <span className="text-[11px] text-brandMuted">3D PERSPECTIVE // 60FPS</span>
              </div>
            </div>

            {/* Interactive Architecture Code Snippet Peek */}
            <div className="w-full max-w-md rounded-2xl bg-[#080B14] border border-brandCardBorder overflow-hidden shadow-2xl">
              {/* Code Window Header */}
              <div className="px-4 py-2.5 bg-[#0C101C] border-b border-brandCardBorder flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-xs font-mono text-brandMuted ml-2">
                    {codeSnippets[activeTab].filename}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {Object.keys(codeSnippets).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase transition-colors ${
                        activeTab === tab
                          ? 'bg-accentCyan/20 text-accentCyan border border-accentCyan/30 font-bold'
                          : 'text-brandMuted hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded text-brandMuted hover:text-white ml-1"
                    title="Copy snippet"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Pre Body */}
              <pre className="p-4 text-xs font-mono text-brandSlate/90 overflow-x-auto leading-relaxed bg-[#07090F]">
                <code>{codeSnippets[activeTab].code}</code>
              </pre>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
