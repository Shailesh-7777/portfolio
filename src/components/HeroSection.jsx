import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  Send,
  MapPin,
  CheckCircle2,
  Github,
  Linkedin,
  Code2,
  Mail,
  Terminal,
  FileCode,
  Layers,
  Copy,
  Check
} from 'lucide-react';

const codeSnippets = {
  react: {
    filename: "App.jsx",
    language: "JavaScript / React",
    code: `import React, { useState } from 'react';
import { Navbar, Projects, Skills } from './components';

export default function App() {
  const [developer] = useState({
    name: "Shailesh Kumar",
    role: "Full Stack Developer",
    location: "Bettiah, Bihar, India",
    focus: ["React.js", "Node.js", "Java", "REST APIs"],
    availableForHire: true
  });

  return (
    <main className="min-h-screen bg-brandDark text-brandSlate">
      <Navbar brand="SK" />
      <Hero greeting="Hi, I'm Shailesh Kumar" />
      <Projects filter="production-ready" />
      <Skills stack={developer.focus} />
    </main>
  );
}`
  },
  node: {
    filename: "api.routes.js",
    language: "Node.js / Express",
    code: `import express from 'express';
import { authenticateUser } from '../middleware/auth.js';
import { getInquiries, createInquiry } from '../controllers/inquiry.js';

const router = express.Router();

// Wedding Wagon & B2B Ordering API Routes
router.route('/inquiries')
  .get(authenticateUser, getInquiries)
  .post(authenticateUser, createInquiry);

router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

export default router;`
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
        // AI Interview Evaluation logic with multi-criteria rubric
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

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-accentPurple/15 via-accentCyan/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accentCyan/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Hero Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability & Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brandSurface/80 border border-brandCardBorder text-xs text-brandSlate mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-emerald-300">{personalInfo.status}</span>
              <span className="text-brandMuted">|</span>
              <span className="inline-flex items-center gap-1 text-brandMuted">
                <MapPin className="w-3 h-3 text-accentCyan" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-kanit font-extrabold tracking-tight leading-[1.1] mb-4">
              Hi, I'm{" "}
              <span className="gradient-text-hero">
                {personalInfo.name}
              </span>
            </h1>

            {/* Subtitle / Role */}
            <div className="inline-block mb-6">
              <span className="text-xl sm:text-2xl font-kanit font-medium gradient-text-cyan-purple tracking-wide">
                {personalInfo.subTitle}
              </span>
            </div>

            {/* Summary */}
            <p className="text-base sm:text-lg text-brandMuted leading-relaxed max-w-2xl mb-8 font-sans">
              {personalInfo.heroSummary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="btn-gradient-glow inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide text-white uppercase shadow-lg group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="btn-outline-sleek inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide"
              >
                <Send className="w-4 h-4 text-accentCyan" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Highlights */}
            <div className="flex items-center gap-4 pt-4 border-t border-brandCardBorder/80 w-full max-w-lg">
              <span className="text-xs uppercase tracking-wider text-brandMuted font-mono">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-brandSurface hover:bg-accentPurple/20 border border-brandCardBorder hover:border-accentPurple/40 text-brandSlate hover:text-white transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-brandSurface hover:bg-accentCyan/20 border border-brandCardBorder hover:border-accentCyan/40 text-brandSlate hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-brandSurface hover:bg-amber-500/20 border border-brandCardBorder hover:border-amber-500/40 text-brandSlate hover:text-white transition-all"
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-brandSurface hover:bg-emerald-500/20 border border-brandCardBorder hover:border-emerald-500/40 text-brandSlate hover:text-white transition-all"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Original Interactive Code-Editor Illustration */}
          <div className="lg:col-span-5 w-full">
            <div className="code-window rounded-2xl overflow-hidden border border-brandCardBorder shadow-2xl relative group">
              
              {/* Window Title Bar */}
              <div className="bg-[#121622] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs font-mono text-brandMuted flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-accentCyan" />
                    shailesh@dev-env: ~
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] font-mono text-brandMuted hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Copy snippet"
                  title="Copy snippet"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* IDE Editor Tabs */}
              <div className="bg-[#0B0D14] flex border-b border-white/5 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('react')}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono border-r border-white/5 transition-all whitespace-nowrap ${
                    activeTab === 'react'
                      ? 'bg-brandDark text-accentCyan border-t-2 border-t-accentCyan'
                      : 'text-brandMuted hover:text-brandSlate hover:bg-white/5'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-accentCyan" />
                  <span>App.jsx</span>
                </button>

                <button
                  onClick={() => setActiveTab('node')}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono border-r border-white/5 transition-all whitespace-nowrap ${
                    activeTab === 'node'
                      ? 'bg-brandDark text-accentPurple border-t-2 border-t-accentPurple'
                      : 'text-brandMuted hover:text-brandSlate hover:bg-white/5'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-accentPurple" />
                  <span>api.routes.js</span>
                </button>

                <button
                  onClick={() => setActiveTab('java')}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono border-r border-white/5 transition-all whitespace-nowrap ${
                    activeTab === 'java'
                      ? 'bg-brandDark text-amber-400 border-t-2 border-t-amber-400'
                      : 'text-brandMuted hover:text-brandSlate hover:bg-white/5'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>InterviewService.java</span>
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 bg-[#0A0C13] overflow-x-auto text-[12px] sm:text-[13px] font-mono leading-relaxed h-[320px]">
                <pre className="text-brandSlate/90">
                  <code>{codeSnippets[activeTab].code}</code>
                </pre>
              </div>

              {/* IDE Status Footer */}
              <div className="bg-[#0E121C] px-3.5 py-1.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-brandMuted">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" /> Ready
                  </span>
                  <span>git: main*</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>{codeSnippets[activeTab].language}</span>
                  <span className="text-accentCyan">UTF-8</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
