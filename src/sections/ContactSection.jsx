import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Github,
  Linkedin,
  Code2,
  Clock,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '' // Honeypot spam prevention
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // { type: 'success' | 'error' | 'info', message: string }
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message with at least 10 characters.';
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

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam bot check
    if (formData.botField) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare mailto link as guaranteed fallback
      const subjectLine = encodeURIComponent(
        formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
      );
      const bodyContent = encodeURIComponent(
        `Hello Shailesh,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\nSent from your portfolio website.`
      );

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;

      // Open email client
      window.location.href = mailtoUrl;

      setSubmissionStatus({
        type: 'success',
        message: `Thank you, ${formData.name.trim()}! Your message draft has been dispatched to ${personalInfo.email}. I will respond within 24 hours.`
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        botField: ''
      });
    } catch (err) {
      setSubmissionStatus({
        type: 'error',
        message: 'Could not automatically trigger email. Please copy the email address directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-brandDark">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-accentCyan/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accentPurple/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit font-bold text-white tracking-tight">
            Contact <span className="gradient-text-hero">Shailesh Kumar</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentPurple to-accentCyan rounded-full mt-3" />
          <p className="mt-4 text-brandMuted text-sm sm:text-base max-w-xl">
            Interested in full-stack engineering roles, software internships, or architectural collaboration? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Email Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-brandCardBorder space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-accentCyan/15 border border-accentCyan/30 flex items-center justify-center text-accentCyan">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-brandSlate border border-white/5 transition-all"
                  aria-label="Copy Email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied Email!' : 'Copy Email'}</span>
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-brandMuted block mb-0.5">Direct Email (Click to Mail):</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg sm:text-xl font-kanit font-bold text-white hover:text-accentCyan transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="pt-3 border-t border-brandCardBorder/60 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Typically responds within 24 hours</span>
              </div>
            </div>

            {/* Phone & Mobile Card */}
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-brandCardBorder space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-accentPurple/15 border border-accentPurple/30 flex items-center justify-center text-accentPurple">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-brandSlate border border-white/5 transition-all"
                  aria-label="Copy Phone number"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied Phone!' : 'Copy Phone'}</span>
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-brandMuted block mb-0.5">Mobile Phone (Click to Call):</span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-lg sm:text-xl font-kanit font-bold text-white hover:text-accentPurple transition-colors"
                >
                  {personalInfo.phoneFormatted}
                </a>
              </div>

              <div className="pt-3 border-t border-brandCardBorder/60 flex items-center gap-2 text-xs font-mono text-accentCyan">
                <span>Available for phone calls &amp; WhatsApp communication</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-2xl border border-brandCardBorder space-y-2 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-accentCyan">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-brandMuted block">Location</span>
                  <span className="text-sm font-semibold text-white">{personalInfo.location}</span>
                </div>
              </div>
              <p className="text-xs text-brandMuted pt-2">
                Available for on-site roles, hybrid configurations, and full-time remote developer opportunities worldwide.
              </p>
            </div>

            {/* Social Network Links */}
            <div className="glass-card p-6 rounded-2xl border border-brandCardBorder shadow-xl">
              <span className="text-xs font-mono text-brandMuted uppercase tracking-wider block mb-3">
                Professional Social Links
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

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-brandCardBorder shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-kanit font-bold text-white tracking-wide">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-brandMuted mt-1">
                  Fill in the details below. This form validates your message and dispatches it directly to Shailesh's inbox.
                </p>
              </div>

              {/* Feedback Alert */}
              {submissionStatus && (
                <div
                  className={`mb-6 p-4 rounded-xl border text-xs flex items-start gap-3 ${
                    submissionStatus.type === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : submissionStatus.type === 'error'
                      ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                      : 'bg-accentCyan/10 border-accentCyan/30 text-accentCyan'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{submissionStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Honeypot Spam Protection (Hidden from legitimate users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="botField">Do not fill this</label>
                  <input
                    type="text"
                    id="botField"
                    name="botField"
                    value={formData.botField}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-brandSlate mb-1.5">
                    Your Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma or Jane Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-brandDark/85 border text-brandSlate placeholder-brandMuted/50 text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-brandCardBorder focus:border-accentCyan'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-brandSlate mb-1.5">
                    Your Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-brandDark/85 border text-brandSlate placeholder-brandMuted/50 text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-brandCardBorder focus:border-accentCyan'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-brandSlate mb-1.5">
                    Subject / Discussion Topic (Optional)
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Developer Opening / Technical Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-brandDark/85 border border-brandCardBorder text-brandSlate placeholder-brandMuted/50 text-sm focus:outline-none focus:border-accentCyan transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-brandSlate mb-1.5">
                    Message Details <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    className={`w-full px-4 py-3 rounded-xl bg-brandDark/85 border text-brandSlate placeholder-brandMuted/50 text-sm focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-brandCardBorder focus:border-accentCyan'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gradient-glow py-3.5 px-6 rounded-xl text-sm font-semibold tracking-wider uppercase text-white flex items-center justify-center gap-2 shadow-xl group disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{isSubmitting ? 'Dispatching Message...' : 'Send Message'}</span>
                  </button>
                </div>

                <div className="pt-2 text-center flex items-center justify-center gap-1.5 text-[11px] font-mono text-brandMuted">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Spam protected • Direct delivery to kumsailesh784@gmail.com</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
