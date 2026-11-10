import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  X,
  Layers,
  Award,
  Settings,
  Plus,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  Check,
  ExternalLink,
  Upload,
  Globe,
  Github,
  Key,
  LogOut,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function OwnerDashboardModal() {
  const {
    isDashboardModalOpen,
    closeDashboardModal,
    dashboardTab,
    setDashboardTab,
    projects,
    addProject,
    updateProject,
    deleteProject,
    toggleProjectPublish,
    certifications,
    addCertificate,
    updateCertificate,
    deleteCertificate,
    toggleCertificatePublish,
    logoutOwner,
    updateOwnerPasscode,
    resetToDefaultData
  } = usePortfolio();

  // Project Editor State
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: '',
    badge: 'Engineered System',
    shortDescription: '',
    detailedOverview: '',
    tags: '',
    githubUrl: '',
    liveUrl: '',
    image: '/project-wedding-wagon.svg',
    features: '',
    published: true,
  });

  // Certificate Editor State
  const [editingCert, setEditingCert] = useState(null);
  const [certForm, setCertForm] = useState({
    title: '',
    issuer: '',
    date: '2024',
    credentialId: '',
    verificationUrl: '',
    image: '/cert-placeholder.svg',
    note: '',
    published: true,
  });

  // Passcode update state
  const [newPasscode, setNewPasscode] = useState('');
  const [passcodeSuccess, setPasscodeSuccess] = useState('');
  const [passcodeError, setPasscodeError] = useState('');

  if (!isDashboardModalOpen) return null;

  // Handlers for Project
  const handleOpenAddProject = () => {
    setEditingProject('new');
    setProjectForm({
      title: '',
      category: 'Full Stack MERN Application',
      badge: 'Production Ready',
      shortDescription: '',
      detailedOverview: '',
      tags: 'React.js, Node.js, Express.js, MongoDB',
      githubUrl: 'https://github.com/Shailesh-7777',
      liveUrl: '',
      image: '/project-wedding-wagon.svg',
      features: 'Full user authentication\nDynamic dashboard management\nREST API integration',
      published: true,
    });
  };

  const handleOpenEditProject = (proj) => {
    setEditingProject(proj.id);
    setProjectForm({
      title: proj.title,
      category: proj.category,
      badge: proj.badge,
      shortDescription: proj.shortDescription,
      detailedOverview: proj.detailedOverview || '',
      tags: Array.isArray(proj.tags) ? proj.tags.join(', ') : proj.tags,
      githubUrl: proj.githubUrl || '',
      liveUrl: proj.liveUrl || '',
      image: proj.image || '/project-wedding-wagon.svg',
      features: Array.isArray(proj.features) ? proj.features.join('\n') : proj.features,
      published: proj.published !== false,
    });
  };

  const handleSaveProject = (e) => {
    e.preventDefault();
    if (editingProject === 'new') {
      addProject(projectForm);
    } else {
      updateProject(editingProject, projectForm);
    }
    setEditingProject(null);
  };

  const handleProjectImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectForm(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handlers for Certificate
  const handleOpenAddCert = () => {
    setEditingCert('new');
    setCertForm({
      title: '',
      issuer: 'CodeSoft / Coursera / Oracle',
      date: '2024',
      credentialId: '',
      verificationUrl: '',
      image: '/cert-placeholder.svg',
      note: 'Verified achievement in software engineering.',
      published: true,
    });
  };

  const handleOpenEditCert = (cert) => {
    setEditingCert(cert.id);
    setCertForm({
      title: cert.title,
      issuer: cert.issuer,
      date: cert.date,
      credentialId: cert.credentialId || '',
      verificationUrl: cert.verificationUrl || '',
      image: cert.image || '/cert-placeholder.svg',
      note: cert.note || '',
      published: cert.published !== false,
    });
  };

  const handleSaveCert = (e) => {
    e.preventDefault();
    if (editingCert === 'new') {
      addCertificate(certForm);
    } else {
      updateCertificate(editingCert, certForm);
    }
    setEditingCert(null);
  };

  const handleCertImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCertForm(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdatePasscode = (e) => {
    e.preventDefault();
    const res = updateOwnerPasscode(newPasscode);
    if (res.success) {
      setPasscodeSuccess('Owner passcode updated successfully!');
      setPasscodeError('');
      setNewPasscode('');
      setTimeout(() => setPasscodeSuccess(''), 3000);
    } else {
      setPasscodeError(res.error || 'Failed to update passcode.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[90vh] bg-brandSurface/98 border border-accentCyan/40 rounded-3xl shadow-[0_0_60px_rgba(0,245,255,0.2)] flex flex-col overflow-hidden">
        
        {/* Holographic Top Bar */}
        <div className="h-1 bg-gradient-to-r from-accentCyan via-accentPurple to-accentCyan" />

        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-brandCardBorder flex items-center justify-between bg-[#080B14]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accentCyan/10 border border-accentCyan/40 flex items-center justify-center text-accentCyan shadow-[0_0_15px_rgba(0,245,255,0.25)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Owner Authenticated
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-kanit font-bold text-white tracking-wide">
                Owner Management Console
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={logoutOwner}
              className="p-2 rounded-xl text-rose-400 hover:bg-rose-500/10 border border-rose-500/20 text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Lock / Logout Owner"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>

            <button
              onClick={closeDashboardModal}
              className="p-2 rounded-xl text-brandMuted hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close dashboard"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-brandCardBorder bg-[#0A0E1A] overflow-x-auto">
          <button
            onClick={() => { setDashboardTab('projects'); setEditingProject(null); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all shrink-0 ${
              dashboardTab === 'projects'
                ? 'bg-gradient-to-r from-accentCyan/20 to-accentPurple/20 text-white font-semibold border border-accentCyan/40 shadow-[0_0_15px_rgba(0,245,255,0.2)]'
                : 'text-brandMuted hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4 text-accentCyan" />
            <span>Projects ({projects.length})</span>
          </button>

          <button
            onClick={() => { setDashboardTab('certificates'); setEditingCert(null); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all shrink-0 ${
              dashboardTab === 'certificates'
                ? 'bg-gradient-to-r from-accentCyan/20 to-accentPurple/20 text-white font-semibold border border-accentCyan/40 shadow-[0_0_15px_rgba(0,245,255,0.2)]'
                : 'text-brandMuted hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-4 h-4 text-accentPurple" />
            <span>Certificates ({certifications.length})</span>
          </button>

          <button
            onClick={() => setDashboardTab('settings')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all shrink-0 ${
              dashboardTab === 'settings'
                ? 'bg-gradient-to-r from-accentCyan/20 to-accentPurple/20 text-white font-semibold border border-accentCyan/40 shadow-[0_0_15px_rgba(0,245,255,0.2)]'
                : 'text-brandMuted hover:text-white hover:bg-white/5'
            }`}
          >
            <Settings className="w-4 h-4 text-brandSlate" />
            <span>Security & Passkey</span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#07090F]">
          
          {/* TAB 1: PROJECTS MANAGEMENT */}
          {dashboardTab === 'projects' && (
            <div>
              {!editingProject ? (
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-base font-kanit font-bold text-white tracking-wide">
                        Engineered Projects Portfolio
                      </h3>
                      <p className="text-xs font-mono text-brandMuted">
                        Add, edit, upload screenshots, add Live Demo & GitHub links, or publish/unpublish projects.
                      </p>
                    </div>

                    <button
                      onClick={handleOpenAddProject}
                      className="btn-gradient-glow flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-white shadow-md"
                    >
                      <Plus className="w-4 h-4 text-accentCyan" />
                      <span>Add New Project</span>
                    </button>
                  </div>

                  {/* Projects List */}
                  <div className="space-y-4">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-4 rounded-2xl bg-brandSurface/90 border border-brandCardBorder hover:border-accentCyan/30 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={proj.image || '/project-wedding-wagon.svg'}
                            alt={proj.title}
                            className="w-20 h-14 object-cover rounded-xl bg-black border border-white/5 shrink-0"
                          />
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-sm font-kanit font-bold text-white">
                                {proj.title}
                              </h4>
                              <button
                                onClick={() => toggleProjectPublish(proj.id)}
                                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-all ${
                                  proj.published
                                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                                    : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                                }`}
                              >
                                {proj.published ? 'Published' : 'Draft / Hidden'}
                              </button>
                            </div>
                            <div className="text-xs font-mono text-brandMuted flex flex-wrap items-center gap-x-3 gap-y-1">
                              <span>{proj.category}</span>
                              {proj.liveUrl && (
                                <a
                                  href={proj.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-accentCyan hover:underline flex items-center gap-1"
                                >
                                  <Globe className="w-3 h-3" />
                                  <span>Live Demo</span>
                                </a>
                              )}
                              {proj.githubUrl && (
                                <a
                                  href={proj.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-brandSlate hover:underline flex items-center gap-1"
                                >
                                  <Github className="w-3 h-3" />
                                  <span>Repository</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-2 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                          <button
                            onClick={() => toggleProjectPublish(proj.id)}
                            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-brandSlate text-xs font-mono flex items-center gap-1.5 transition-colors"
                            title="Toggle public visibility"
                          >
                            {proj.published ? <EyeOff className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5 text-emerald-400" />}
                            <span className="hidden sm:inline">{proj.published ? 'Unpublish' : 'Publish'}</span>
                          </button>

                          <button
                            onClick={() => handleOpenEditProject(proj)}
                            className="p-2 rounded-xl bg-accentCyan/10 hover:bg-accentCyan/20 text-accentCyan border border-accentCyan/30 text-xs font-mono flex items-center gap-1.5 transition-colors"
                          >
                            <Edit className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>

                          <button
                            onClick={() => {
                              if (window.confirm(`Delete project "${proj.title}"?`)) {
                                deleteProject(proj.id);
                              }
                            }}
                            className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 transition-colors"
                            title="Delete Project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* EDIT / ADD PROJECT FORM */
                <form onSubmit={handleSaveProject} className="space-y-4 max-w-3xl mx-auto">
                  <div className="flex items-center justify-between pb-3 border-b border-brandCardBorder">
                    <h3 className="text-base font-kanit font-bold text-white">
                      {editingProject === 'new' ? 'Add New Project' : 'Edit Project Details'}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setEditingProject(null)}
                      className="text-xs font-mono text-brandMuted hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Project Title</label>
                      <input
                        type="text"
                        required
                        value={projectForm.title}
                        onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentCyan"
                        placeholder="e.g. Wedding Wagon"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Category</label>
                      <input
                        type="text"
                        required
                        value={projectForm.category}
                        onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentCyan"
                        placeholder="e.g. Full Stack MERN Application"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Short Description</label>
                    <textarea
                      rows={2}
                      required
                      value={projectForm.shortDescription}
                      onChange={(e) => setProjectForm({ ...projectForm, shortDescription: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentCyan"
                      placeholder="Brief 1-2 sentence overview for the card"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">GitHub URL</label>
                      <input
                        type="url"
                        value={projectForm.githubUrl}
                        onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentCyan"
                        placeholder="https://github.com/Shailesh-7777/..."
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Live Demo URL</label>
                      <input
                        type="url"
                        value={projectForm.liveUrl}
                        onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentCyan"
                        placeholder="https://project-demo.vercel.app (or leave empty for status notice)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Technologies (comma separated)</label>
                    <input
                      type="text"
                      value={projectForm.tags}
                      onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentCyan"
                      placeholder="React.js, Node.js, Express.js, MongoDB, JWT"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Key Features (one per line)</label>
                    <textarea
                      rows={3}
                      value={projectForm.features}
                      onChange={(e) => setProjectForm({ ...projectForm, features: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentCyan"
                      placeholder="Customer, Vendor and Admin dashboards&#10;Service listings and availability&#10;Advance payment workflow"
                    />
                  </div>

                  {/* Screenshot Upload / URL */}
                  <div>
                    <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Project Screenshot</label>
                    <div className="flex items-center gap-3">
                      <img
                        src={projectForm.image || '/project-wedding-wagon.svg'}
                        alt="Screenshot Preview"
                        className="w-24 h-16 object-cover rounded-xl bg-black border border-white/10"
                      />
                      <div className="flex-1 space-y-2">
                        <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-accentCyan">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload Image File</span>
                          <input type="file" accept="image/*" onChange={handleProjectImageUpload} className="hidden" />
                        </label>
                        <input
                          type="text"
                          value={projectForm.image}
                          onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                          className="w-full px-3 py-1.5 rounded-xl bg-[#090D18] border border-brandCardBorder text-xs font-mono text-brandSlate"
                          placeholder="Or paste image URL / public path"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="publishProjCheck"
                      checked={projectForm.published}
                      onChange={(e) => setProjectForm({ ...projectForm, published: e.target.checked })}
                      className="rounded accent-accentCyan"
                    />
                    <label htmlFor="publishProjCheck" className="text-xs font-mono text-brandSlate cursor-pointer">
                      Publish immediately (visible to all public visitors)
                    </label>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-brandCardBorder">
                    <button
                      type="button"
                      onClick={() => setEditingProject(null)}
                      className="px-4 py-2 rounded-xl bg-white/5 text-xs font-mono text-brandSlate hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-gradient-glow px-6 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg"
                    >
                      Save Project
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: CERTIFICATES MANAGEMENT */}
          {dashboardTab === 'certificates' && (
            <div>
              {!editingCert ? (
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-base font-kanit font-bold text-white tracking-wide">
                        Verified Certificates Manager
                      </h3>
                      <p className="text-xs font-mono text-brandMuted">
                        Upload certificates, edit credentials, and control what public visitors can see.
                      </p>
                    </div>

                    <button
                      onClick={handleOpenAddCert}
                      className="btn-gradient-glow flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-white shadow-md"
                    >
                      <Plus className="w-4 h-4 text-accentPurple" />
                      <span>Add New Certificate</span>
                    </button>
                  </div>

                  {/* Certificates List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications.map((cert) => (
                      <div
                        key={cert.id}
                        className="p-4 rounded-2xl bg-brandSurface/90 border border-brandCardBorder hover:border-accentPurple/40 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative rounded-xl overflow-hidden bg-black mb-3 border border-white/5 flex items-center justify-center h-32">
                            <img
                              src={cert.image || '/cert-placeholder.svg'}
                              alt={cert.title}
                              className="w-full h-full object-contain"
                            />
                            <div className="absolute top-2 right-2">
                              <span
                                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                                  cert.published
                                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                                    : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                                }`}
                              >
                                {cert.published ? 'Public' : 'Draft'}
                              </span>
                            </div>
                          </div>

                          <h4 className="text-sm font-kanit font-bold text-white mb-1 line-clamp-1">
                            {cert.title}
                          </h4>
                          <p className="text-xs font-mono text-accentPurple mb-1">
                            {cert.issuer} ({cert.date})
                          </p>
                          {cert.credentialId && (
                            <p className="text-[11px] font-mono text-brandMuted mb-2">
                              ID: {cert.credentialId}
                            </p>
                          )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-mono">
                          <button
                            onClick={() => toggleCertificatePublish(cert.id)}
                            className="text-brandSlate hover:text-white flex items-center gap-1"
                          >
                            {cert.published ? <EyeOff className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5 text-emerald-400" />}
                            <span>{cert.published ? 'Hide' : 'Publish'}</span>
                          </button>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOpenEditCert(cert)}
                              className="p-1.5 rounded-lg bg-accentPurple/10 hover:bg-accentPurple/20 text-accentPurple"
                              title="Edit"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Delete certificate "${cert.title}"?`)) {
                                  deleteCertificate(cert.id);
                                }
                              }}
                              className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"
                              title="Delete"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* EDIT / ADD CERTIFICATE FORM */
                <form onSubmit={handleSaveCert} className="space-y-4 max-w-2xl mx-auto">
                  <div className="flex items-center justify-between pb-3 border-b border-brandCardBorder">
                    <h3 className="text-base font-kanit font-bold text-white">
                      {editingCert === 'new' ? 'Add New Certificate' : 'Edit Certificate Credentials'}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setEditingCert(null)}
                      className="text-xs font-mono text-brandMuted hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Certificate Title</label>
                    <input
                      type="text"
                      required
                      value={certForm.title}
                      onChange={(e) => setCertForm({ ...certForm, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                      placeholder="e.g. Web Development Internship Certificate"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Issuing Organization</label>
                      <input
                        type="text"
                        required
                        value={certForm.issuer}
                        onChange={(e) => setCertForm({ ...certForm, issuer: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                        placeholder="e.g. CodeSoft, Oracle, AWS, MMU"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Issue Date / Year</label>
                      <input
                        type="text"
                        required
                        value={certForm.date}
                        onChange={(e) => setCertForm({ ...certForm, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                        placeholder="e.g. 2024"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Credential ID</label>
                      <input
                        type="text"
                        value={certForm.credentialId}
                        onChange={(e) => setCertForm({ ...certForm, credentialId: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                        placeholder="e.g. CS-WD-2024-SK"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Verification URL</label>
                      <input
                        type="url"
                        value={certForm.verificationUrl}
                        onChange={(e) => setCertForm({ ...certForm, verificationUrl: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                        placeholder="https://verify.example.com/..."
                      />
                    </div>
                  </div>

                  {/* Certificate Image Upload */}
                  <div>
                    <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Certificate Image / Proof</label>
                    <div className="flex items-center gap-3">
                      <img
                        src={certForm.image || '/cert-placeholder.svg'}
                        alt="Preview"
                        className="w-24 h-16 object-contain rounded-xl bg-black border border-white/10"
                      />
                      <div className="flex-1 space-y-2">
                        <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-accentPurple">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload Certificate File</span>
                          <input type="file" accept="image/*" onChange={handleCertImageUpload} className="hidden" />
                        </label>
                        <input
                          type="text"
                          value={certForm.image}
                          onChange={(e) => setCertForm({ ...certForm, image: e.target.value })}
                          className="w-full px-3 py-1.5 rounded-xl bg-[#090D18] border border-brandCardBorder text-xs font-mono text-brandSlate"
                          placeholder="Or paste image path"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-brandSlate uppercase mb-1">Summary / Note</label>
                    <textarea
                      rows={2}
                      value={certForm.note}
                      onChange={(e) => setCertForm({ ...certForm, note: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                      placeholder="Brief note on what was verified"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="publishCertCheck"
                      checked={certForm.published}
                      onChange={(e) => setCertForm({ ...certForm, published: e.target.checked })}
                      className="rounded accent-accentPurple"
                    />
                    <label htmlFor="publishCertCheck" className="text-xs font-mono text-brandSlate cursor-pointer">
                      Publish immediately in public gallery
                    </label>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-brandCardBorder">
                    <button
                      type="button"
                      onClick={() => setEditingCert(null)}
                      className="px-4 py-2 rounded-xl bg-white/5 text-xs font-mono text-brandSlate hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-gradient-glow px-6 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg"
                    >
                      Save Certificate
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: SECURITY & PASSKEY */}
          {dashboardTab === 'settings' && (
            <div className="max-w-xl mx-auto space-y-8 py-4">
              <div>
                <h3 className="text-base font-kanit font-bold text-white tracking-wide mb-1">
                  Owner Authentication Security
                </h3>
                <p className="text-xs font-mono text-brandMuted">
                  Customize the owner passcode used to access this management dashboard.
                </p>
              </div>

              {passcodeSuccess && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{passcodeSuccess}</span>
                </div>
              )}

              {passcodeError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-xs font-mono text-rose-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{passcodeError}</span>
                </div>
              )}

              <form onSubmit={handleUpdatePasscode} className="space-y-4 p-5 rounded-2xl bg-brandSurface/80 border border-brandCardBorder">
                <div>
                  <label className="block text-xs font-mono text-brandSlate uppercase mb-1">New Master Passcode</label>
                  <div className="relative">
                    <Key className="w-4 h-4 absolute left-3 top-3 text-accentCyan" />
                    <input
                      type="password"
                      required
                      value={newPasscode}
                      onChange={(e) => setNewPasscode(e.target.value)}
                      placeholder="Enter new strong passcode"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentCyan"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-gradient-glow w-full py-2.5 rounded-xl text-xs font-mono font-bold text-white shadow-md uppercase tracking-wider"
                >
                  Update Passcode
                </button>
              </form>

              {/* Factory Reset */}
              <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase mb-2">
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset To Default Portfolio Data</span>
                </div>
                <p className="text-xs font-sans text-brandMuted mb-4">
                  Restore all initial 4 engineered projects and certifications to their default states. This clears any local edits.
                </p>
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to restore default portfolio data?")) {
                      resetToDefaultData();
                      alert("Restored to default verified portfolio data!");
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-mono font-semibold transition-colors"
                >
                  Restore Defaults
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
