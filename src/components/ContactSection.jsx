import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Github,
  Linkedin,
  Code2,
  Clock,
  Sparkles
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // { type: 'info' | 'error', message: string }

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Prepare reliable mailto string
    const subjectLine = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const bodyContent = encodeURIComponent(
      `Hello Shailesh,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\nSent from your portfolio website.`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;

    // Provide honest feedback and dispatch mail client
    setSubmissionStatus({
      type: 'info',
      message: `Opening your email application to send directly to ${personalInfo.email}. If your mail client does not open automatically, you can also use the Copy Email button below!`
    });

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative bg-brandDark">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-accentCyan/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit font-bold text-white tracking-tight">
            Contact <span className="gradient-text-hero">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentPurple to-accentCyan rounded-full mt-3" />
          <p className="mt-4 text-brandMuted text-sm sm:text-base max-w-xl">
            Interested in discussing full-stack roles, collaborating on a project, or exploring code? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Quick Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Email Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-brandCardBorder space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-accentCyan/15 border border-accentCyan/30 flex items-center justify-center text-accentCyan">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-brandSlate border border-white/5 transition-all"
                  aria-label="Copy Email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-brandMuted block">Direct Email Address:</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg sm:text-xl font-kanit font-semibold text-white hover:text-accentCyan transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="pt-3 border-t border-brandCardBorder/60 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Typically responds within 24 hours</span>
              </div>
            </div>

            {/* Location & Relocation Card */}
            <div className="glass-card p-6 rounded-2xl border border-brandCardBorder space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accentPurple/15 border border-accentPurple/30 flex items-center justify-center text-accentPurple">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-brandMuted block">Location</span>
                  <span className="text-sm font-semibold text-white">{personalInfo.location}</span>
                </div>
              </div>
              <p className="text-xs text-brandMuted pt-2">
                Available for remote opportunities and on-site roles.
              </p>
            </div>

            {/* Social Network Links */}
            <div className="glass-card p-6 rounded-2xl border border-brandCardBorder">
              <span className="text-xs font-mono text-brandMuted uppercase tracking-wider block mb-3">
                Profiles & Repositories
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-brandSurface hover:bg-white/5 border border-brandCardBorder text-brandSlate hover:text-white transition-all group"
                >
                  <Github className="w-5 h-5 text-accentCyan group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono">GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-brandSurface hover:bg-white/5 border border-brandCardBorder text-brandSlate hover:text-white transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-accentPurple group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-brandSurface hover:bg-white/5 border border-brandCardBorder text-brandSlate hover:text-white transition-all group"
                >
                  <Code2 className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono">LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-brandCardBorder">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-kanit font-bold text-white tracking-wide">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-brandMuted mt-1">
                  Fill in the details below. This form validates your message and pre-populates your email client for verified delivery.
                </p>
              </div>

              {/* Feedback Alert if triggered */}
              {submissionStatus && (
                <div className="mb-6 p-4 rounded-xl bg-accentCyan/10 border border-accentCyan/30 text-xs text-accentCyan flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-accentCyan" />
                  <span>{submissionStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-brandSlate mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-brandDark/80 border text-brandSlate placeholder-brandMuted/50 text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-brandCardBorder focus:border-accentCyan'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-brandSlate mb-1.5">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-brandDark/80 border text-brandSlate placeholder-brandMuted/50 text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-brandCardBorder focus:border-accentCyan'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-brandSlate mb-1.5">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full Stack Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-brandDark/80 border border-brandCardBorder text-brandSlate placeholder-brandMuted/50 text-sm focus:outline-none focus:border-accentCyan transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-brandSlate mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, role opportunity, or question..."
                    className={`w-full px-4 py-3 rounded-xl bg-brandDark/80 border text-brandSlate placeholder-brandMuted/50 text-sm focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-brandCardBorder focus:border-accentCyan'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-gradient-glow py-3.5 px-6 rounded-xl text-sm font-semibold tracking-wider uppercase text-white flex items-center justify-center gap-2 shadow-lg group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message via Email</span>
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] font-mono text-brandMuted">
                    Honest delivery: Dispatches through standard mailto protocol to guarantee delivery directly into Shailesh's inbox without unverified third-party capture.
                  </span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
