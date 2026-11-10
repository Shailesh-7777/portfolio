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
  AlertCircle,
  AlertTriangle,
  ChevronUp,
  ChevronDown,
  FileText,
  Tag
} from 'lucide-react';
import { validateCertificateFile, readFileAsDataUrl } from '../utils/certificateStorage';

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
    moveCertificate,
    categories,
    addCategory,
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
    date: '2026',
    category: 'Web Development',
    isCustomCategory: false,
    customCategory: '',
    credentialId: '',
    verificationUrl: '',
    image: '/cert-placeholder.svg',
    fileUrl: '',
    fileType: 'image',
    note: '',
    published: true,
  });
  const [certUploadError, setCertUploadError] = useState('');

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
    setCertUploadError('');
    setCertForm({
      title: '',
      issuer: '',
      date: '2026',
      category: categories[0] || 'Web Development',
      isCustomCategory: false,
      customCategory: '',
      credentialId: '',
      verificationUrl: '',
      image: '/cert-placeholder.svg',
      fileUrl: '',
      fileType: 'image',
      note: '',
      published: true,
    });
  };

  const handleOpenEditCert = (cert) => {
    setEditingCert(cert.id);
    setCertUploadError('');
    const isCustom = cert.category && !categories.includes(cert.category);
    setCertForm({
      title: cert.title || '',
      issuer: cert.issuer || '',
      date: cert.date || '',
      category: cert.category || (categories[0] || 'Web Development'),
      isCustomCategory: isCustom,
      customCategory: isCustom ? cert.category : '',
      credentialId: cert.credentialId || '',
      verificationUrl: cert.verificationUrl || '',
      image: cert.image || '/cert-placeholder.svg',
      fileUrl: cert.fileUrl || cert.image || '',
      fileType: cert.fileType || (cert.fileUrl?.endsWith('.pdf') ? 'pdf' : 'image'),
      note: cert.note || cert.description || '',
      published: cert.published !== false,
    });
  };

  const handleCertFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validation = validateCertificateFile(file);
    if (!validation.valid) {
      setCertUploadError(validation.error);
      return;
    }

    try {
      setCertUploadError('');
      const dataUrl = await readFileAsDataUrl(file);
      setCertForm(prev => ({
        ...prev,
        fileUrl: dataUrl,
        fileType: validation.fileType,
        image: validation.fileType === 'pdf' ? '/cert-placeholder.svg' : dataUrl
      }));
    } catch (err) {
      console.error('File read error:', err);
      setCertUploadError('Failed to read the file. Please try another file.');
    }
  };

  const handleSaveCert = (e) => {
    e.preventDefault();
    const finalCategory = (certForm.isCustomCategory && certForm.customCategory.trim())
      ? certForm.customCategory.trim()
      : (certForm.category || 'Web Development');

    if (finalCategory) {
      addCategory(finalCategory);
    }

    const payload = {
      ...certForm,
      category: finalCategory,
      title: certForm.title.trim(),
      issuer: certForm.issuer.trim(),
      date: certForm.date.trim(),
      credentialId: certForm.credentialId.trim(),
      verificationUrl: certForm.verificationUrl.trim(),
      note: certForm.note.trim(),
    };

    if (editingCert === 'new') {
      addCertificate(payload);
    } else {
      updateCertificate(editingCert, payload);
    }
    setEditingCert(null);
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
                      <h3 className="text-base font-kanit font-bold text-white tracking-wide flex items-center gap-2">
                        <Award className="w-4 h-4 text-accentPurple" />
                        <span>Certifications & Achievements Manager</span>
                      </h3>
                      <p className="text-xs font-mono text-brandMuted">
                        Upload certificates (PDF or Image), edit metadata, reorder display sequence, and control public visibility.
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

                  {/* Certificates List with Reordering */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications
                      .slice()
                      .sort((a, b) => (a.order || 0) - (b.order || 0))
                      .map((cert, index, sortedList) => {
                        const isPdf = cert.fileType === 'pdf' || (cert.fileUrl && cert.fileUrl.endsWith('.pdf'));

                        return (
                          <div
                            key={cert.id}
                            className="p-4 rounded-2xl bg-brandSurface/90 border border-brandCardBorder hover:border-accentPurple/40 transition-all flex flex-col justify-between group"
                          >
                            <div>
                              {/* Preview Area */}
                              <div className="relative rounded-xl overflow-hidden bg-black mb-3 border border-white/5 flex items-center justify-center h-36">
                                {isPdf ? (
                                  <div className="w-full h-full flex flex-col items-center justify-center p-3 bg-gradient-to-b from-[#0F1424] to-[#0A0D18] text-center">
                                    <FileText className="w-8 h-8 text-rose-400 mb-1" />
                                    <span className="text-xs font-mono text-white font-bold truncate max-w-[90%]">
                                      {cert.title}
                                    </span>
                                    <span className="text-[10px] font-mono text-rose-400 mt-0.5">
                                      PDF Document
                                    </span>
                                  </div>
                                ) : (
                                  <img
                                    src={cert.image || cert.fileUrl || '/cert-placeholder.svg'}
                                    alt={cert.title}
                                    onError={(e) => {
                                      e.currentTarget.src = '/cert-placeholder.svg';
                                    }}
                                    className="w-full h-full object-contain"
                                  />
                                )}

                                {/* Top Badges: Published Status & Type */}
                                <div className="absolute top-2 right-2 flex items-center gap-1.5">
                                  <span
                                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                                      cert.published
                                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                                        : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                                    }`}
                                  >
                                    {cert.published ? 'Public' : 'Draft'}
                                  </span>
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-black/60 border border-white/20 text-brandSlate">
                                    #{index + 1}
                                  </span>
                                </div>
                              </div>

                              {/* Category Pill */}
                              <div className="mb-2">
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accentPurple/15 border border-accentPurple/30 text-accentPurple text-[10px] font-mono font-semibold">
                                  <Tag className="w-2.5 h-2.5" />
                                  <span>{cert.category || 'General'}</span>
                                </span>
                              </div>

                              {/* Title & Issuer */}
                              <h4 className="text-sm font-kanit font-bold text-white mb-1 line-clamp-1">
                                {cert.title}
                              </h4>
                              <p className="text-xs font-mono text-accentPurple mb-1">
                                {cert.issuer} ({cert.date})
                              </p>
                              {cert.credentialId && (
                                <p className="text-[11px] font-mono text-brandMuted mb-2 truncate">
                                  ID: {cert.credentialId}
                                </p>
                              )}
                            </div>

                            {/* Action Buttons & Reorder Controls */}
                            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                              {/* Left: Reorder up / down */}
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  disabled={index === 0}
                                  onClick={() => moveCertificate(cert.id, 'up')}
                                  className={`p-1 rounded-lg border border-white/10 ${
                                    index === 0
                                      ? 'opacity-30 cursor-not-allowed text-brandMuted'
                                      : 'hover:bg-white/10 text-white'
                                  }`}
                                  title="Move Up in Display Order"
                                >
                                  <ChevronUp className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  disabled={index === sortedList.length - 1}
                                  onClick={() => moveCertificate(cert.id, 'down')}
                                  className={`p-1 rounded-lg border border-white/10 ${
                                    index === sortedList.length - 1
                                      ? 'opacity-30 cursor-not-allowed text-brandMuted'
                                      : 'hover:bg-white/10 text-white'
                                  }`}
                                  title="Move Down in Display Order"
                                >
                                  <ChevronDown className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              {/* Middle: Visibility toggle */}
                              <button
                                onClick={() => toggleCertificatePublish(cert.id)}
                                className="text-brandSlate hover:text-white flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-white/5"
                                title={cert.published ? 'Hide from public view' : 'Publish to public gallery'}
                              >
                                {cert.published ? (
                                  <EyeOff className="w-3.5 h-3.5 text-amber-400" />
                                ) : (
                                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                                )}
                                <span>{cert.published ? 'Hide' : 'Publish'}</span>
                              </button>

                              {/* Right: Edit & Delete */}
                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => handleOpenEditCert(cert)}
                                  className="p-1.5 rounded-lg bg-accentPurple/15 hover:bg-accentPurple/25 text-accentPurple border border-accentPurple/30"
                                  title="Edit Certificate"
                                >
                                  <Edit className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => {
                                    if (window.confirm(`Delete certificate "${cert.title}"?`)) {
                                      deleteCertificate(cert.id);
                                    }
                                  }}
                                  className="p-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-400 border border-rose-500/30"
                                  title="Delete Certificate"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ) : (
                /* EDIT / ADD CERTIFICATE FORM */
                <form onSubmit={handleSaveCert} className="space-y-4 max-w-2xl mx-auto">
                  <div className="flex items-center justify-between pb-3 border-b border-brandCardBorder">
                    <div>
                      <h3 className="text-base font-kanit font-bold text-white flex items-center gap-2">
                        <Award className="w-4 h-4 text-accentPurple" />
                        <span>{editingCert === 'new' ? 'Add New Certificate' : 'Edit Certificate Credentials'}</span>
                      </h3>
                      <p className="text-xs font-mono text-brandMuted">
                        Upload PDF or Image certificate with credential metadata.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setEditingCert(null)}
                      className="text-xs font-mono text-brandMuted hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>

                  {certUploadError && (
                    <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-start gap-2 text-xs font-mono text-rose-400">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{certUploadError}</span>
                    </div>
                  )}

                  {/* Title */}
                  <div>
                    <label className="block text-xs font-mono text-brandSlate uppercase mb-1">
                      Certificate Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={certForm.title}
                      onChange={(e) => setCertForm({ ...certForm, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                      placeholder="e.g. AWS Academy Graduate – Cloud Foundations"
                    />
                  </div>

                  {/* Category Selection with Custom Option */}
                  <div className="p-3 rounded-xl bg-brandDark/80 border border-brandCardBorder space-y-2">
                    <label className="block text-xs font-mono text-brandSlate uppercase">
                      Certificate Category *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <select
                        value={certForm.isCustomCategory ? '__CUSTOM__' : certForm.category}
                        onChange={(e) => {
                          if (e.target.value === '__CUSTOM__') {
                            setCertForm({ ...certForm, isCustomCategory: true });
                          } else {
                            setCertForm({ ...certForm, isCustomCategory: false, category: e.target.value });
                          }
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-xs font-mono focus:border-accentPurple"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                        <option value="__CUSTOM__">+ Create New Category...</option>
                      </select>

                      {certForm.isCustomCategory && (
                        <input
                          type="text"
                          required
                          value={certForm.customCategory}
                          onChange={(e) => setCertForm({ ...certForm, customCategory: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-accentPurple text-white text-xs font-mono focus:border-accentCyan"
                          placeholder="Type new category name..."
                          autoFocus
                        />
                      )}
                    </div>
                  </div>

                  {/* Issuer and Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">
                        Issuing Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={certForm.issuer}
                        onChange={(e) => setCertForm({ ...certForm, issuer: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                        placeholder="e.g. AWS Academy, CodSoft, TATA & Forage, NSDC"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">
                        Issue Date / Year *
                      </label>
                      <input
                        type="text"
                        required
                        value={certForm.date}
                        onChange={(e) => setCertForm({ ...certForm, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                        placeholder="e.g. 11/10/2026 or May 2026"
                      />
                    </div>
                  </div>

                  {/* Credential ID and Verification URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">
                        Credential ID (Optional)
                      </label>
                      <input
                        type="text"
                        value={certForm.credentialId}
                        onChange={(e) => setCertForm({ ...certForm, credentialId: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                        placeholder="e.g. uuzQvcvn or 7072c87"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-brandSlate uppercase mb-1">
                        Verification URL (Optional)
                      </label>
                      <input
                        type="url"
                        value={certForm.verificationUrl}
                        onChange={(e) => setCertForm({ ...certForm, verificationUrl: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                        placeholder="https://www.credly.com/go/..."
                      />
                    </div>
                  </div>

                  {/* Certificate File Upload (PDF, PNG, JPG, WebP) */}
                  <div>
                    <label className="block text-xs font-mono text-brandSlate uppercase mb-1">
                      Certificate File / Document Proof (PDF, PNG, JPG, WebP - Max 10MB)
                    </label>
                    <div className="p-4 rounded-xl bg-[#090D18] border border-brandCardBorder flex flex-col sm:flex-row items-center gap-4">
                      {/* Media Preview Box */}
                      <div className="w-28 h-20 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                        {certForm.fileType === 'pdf' ? (
                          <div className="text-center p-2">
                            <FileText className="w-8 h-8 text-rose-400 mx-auto" />
                            <span className="text-[10px] font-mono text-rose-300">PDF Document</span>
                          </div>
                        ) : (
                          <img
                            src={certForm.image || '/cert-placeholder.svg'}
                            alt="Preview"
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>

                      {/* File Pickers */}
                      <div className="flex-1 space-y-2 w-full">
                        <div className="flex flex-wrap items-center gap-3">
                          <label className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-accentPurple/20 hover:bg-accentPurple/30 border border-accentPurple/40 text-xs font-mono text-white transition-all font-semibold">
                            <Upload className="w-3.5 h-3.5 text-accentCyan" />
                            <span>Upload File (PDF or Image)</span>
                            <input
                              type="file"
                              accept="application/pdf,image/png,image/jpeg,image/jpg,image/webp"
                              onChange={handleCertFileUpload}
                              className="hidden"
                            />
                          </label>
                          {certForm.fileUrl && (
                            <span className="text-[11px] font-mono text-emerald-400">
                              ✓ File loaded ({certForm.fileType.toUpperCase()})
                            </span>
                          )}
                        </div>
                        <input
                          type="text"
                          value={certForm.fileUrl || certForm.image}
                          onChange={(e) => {
                            const val = e.target.value;
                            const isValPdf = val.endsWith('.pdf');
                            setCertForm({
                              ...certForm,
                              fileUrl: val,
                              image: isValPdf ? '/cert-placeholder.svg' : val,
                              fileType: isValPdf ? 'pdf' : 'image'
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-xl bg-brandDark border border-brandCardBorder text-xs font-mono text-brandSlate"
                          placeholder="Or paste public file URL / path (e.g. /certificates/cert-aws.png)"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Summary / Note */}
                  <div>
                    <label className="block text-xs font-mono text-brandSlate uppercase mb-1">
                      Certificate Description / Verified Skills
                    </label>
                    <textarea
                      rows={3}
                      value={certForm.note}
                      onChange={(e) => setCertForm({ ...certForm, note: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#090D18] border border-brandCardBorder text-white text-sm font-mono focus:border-accentPurple"
                      placeholder="Outline competencies, coursework hours, or project deliverables verified by this credential."
                    />
                  </div>

                  {/* Publish Checkbox */}
                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="publishCertCheck"
                      checked={certForm.published}
                      onChange={(e) => setCertForm({ ...certForm, published: e.target.checked })}
                      className="rounded accent-accentPurple w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="publishCertCheck" className="text-xs font-mono text-brandSlate cursor-pointer">
                      Publish immediately in public gallery (visible to all recruiters and visitors)
                    </label>
                  </div>

                  {/* Form Action Buttons */}
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
