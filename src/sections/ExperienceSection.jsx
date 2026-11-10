import React, { useState } from 'react';
import { experienceList as initialExperience } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  Building,
  CheckCircle2,
  Check,
  Award,
  Sparkles,
  Edit3,
  Save,
  Clock
} from 'lucide-react';

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState(initialExperience);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleStartEdit = (exp) => {
    setEditingId(exp.id);
    setEditForm({
      organization: exp.organization,
      role: exp.role,
      duration: exp.duration,
      responsibilities: exp.responsibilities.join('\n'),
      skillsLearned: exp.skillsLearned.join(', ')
    });
  };

  const handleSaveEdit = (id) => {
    setExperiences((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            organization: editForm.organization,
            role: editForm.role,
            duration: editForm.duration,
            responsibilities: editForm.responsibilities.split('\n').filter((s) => s.trim().length > 0),
            skillsLearned: editForm.skillsLearned.split(',').map((s) => s.trim()).filter((s) => s.length > 0)
          };
        }
        return item;
      })
    );
    setEditingId(null);
  };

  return (
    <section id="experience" className="py-24 relative bg-brandDark">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accentCyan/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit font-bold text-white tracking-tight">
            Work Experience &amp; <span className="gradient-text-hero">Internships</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentPurple to-accentCyan rounded-full mt-3" />
          <p className="mt-4 text-brandMuted text-sm sm:text-base max-w-xl">
            Authentic industry experience focused on responsive client interfaces, DOM architectures, and developer workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-brandCardBorder space-y-12">
          {experiences.map((exp, index) => {
            const isEditing = editingId === exp.id;

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Node */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-10 h-10 rounded-xl bg-brandDark border border-accentCyan/40 flex items-center justify-center text-accentCyan shadow-[0_0_20px_rgba(6,182,212,0.25)] group-hover:border-accentCyan group-hover:scale-110 transition-all duration-300">
                  <Briefcase className="w-5 h-5" />
                </div>

                {/* Experience Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-brandCardBorder hover:border-brandSlate/30 transition-all duration-300 shadow-xl">
                  
                  {isEditing ? (
                    /* Inline Editing Mode */
                    <div className="space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-brandCardBorder">
                        <span className="text-accentCyan font-bold uppercase">
                          Editing Experience Record
                        </span>
                        <button
                          onClick={() => handleSaveEdit(exp.id)}
                          className="btn-gradient-glow flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white font-semibold"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Save Changes</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-brandMuted block mb-1">Organization:</label>
                          <input
                            type="text"
                            value={editForm.organization}
                            onChange={(e) => setEditForm({ ...editForm, organization: e.target.value })}
                            className="w-full px-3 py-2 rounded bg-brandDark border border-brandCardBorder text-white"
                          />
                        </div>

                        <div>
                          <label className="text-brandMuted block mb-1">Role Title:</label>
                          <input
                            type="text"
                            value={editForm.role}
                            onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                            className="w-full px-3 py-2 rounded bg-brandDark border border-brandCardBorder text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-brandMuted block mb-1">Duration &amp; Timeline:</label>
                        <input
                          type="text"
                          value={editForm.duration}
                          onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
                          className="w-full px-3 py-2 rounded bg-brandDark border border-brandCardBorder text-white"
                        />
                      </div>

                      <div>
                        <label className="text-brandMuted block mb-1">Responsibilities (one per line):</label>
                        <textarea
                          rows={4}
                          value={editForm.responsibilities}
                          onChange={(e) => setEditForm({ ...editForm, responsibilities: e.target.value })}
                          className="w-full px-3 py-2 rounded bg-brandDark border border-brandCardBorder text-white resize-none"
                        />
                      </div>

                      <div>
                        <label className="text-brandMuted block mb-1">Skills Learned (comma separated):</label>
                        <input
                          type="text"
                          value={editForm.skillsLearned}
                          onChange={(e) => setEditForm({ ...editForm, skillsLearned: e.target.value })}
                          className="w-full px-3 py-2 rounded bg-brandDark border border-brandCardBorder text-white"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Display Mode */
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono px-3 py-1 rounded-full bg-accentCyan/10 border border-accentCyan/30 text-accentCyan font-semibold">
                            {exp.timelineBadge}
                          </span>
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                            {exp.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-brandMuted flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-accentCyan" />
                            {exp.duration}
                          </span>

                          <button
                            onClick={() => handleStartEdit(exp)}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-brandMuted hover:text-white transition-colors"
                            title="Edit experience fields"
                            aria-label="Edit Experience"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Role & Organization */}
                      <h3 className="text-xl sm:text-2xl font-kanit font-bold text-white mb-1 tracking-wide">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-semibold text-accentPurple mb-4 font-mono">
                        <Building className="w-4 h-4" />
                        <span>{exp.organization}</span>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-2 mb-6">
                        <span className="text-xs font-mono uppercase tracking-wider text-accentCyan block font-semibold">
                          Key Responsibilities &amp; Deliverables:
                        </span>
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brandSlate/90 font-sans">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accentCyan shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Learned Badges */}
                      <div className="mb-6">
                        <span className="text-xs font-mono uppercase tracking-wider text-brandMuted block mb-2 font-semibold">
                          Skills &amp; Competencies Acquired:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {exp.skillsLearned.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-mono px-3 py-1 rounded-lg bg-brandSurface border border-brandCardBorder text-brandSlate"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Certificate / Proof Callout */}
                      {exp.certificateProof && (
                        <div className="pt-4 border-t border-brandCardBorder/70 flex items-center justify-between text-xs font-mono text-emerald-400">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span>{exp.certificateProof.status}: {exp.certificateProof.note}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
