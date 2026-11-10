import React, { useState, useEffect } from 'react';
import {
  X,
  Award,
  ExternalLink,
  Upload,
  Check,
  Copy,
  Calendar,
  Building,
  Hash,
  AlertCircle
} from 'lucide-react';

export default function CertificateModal({ certificate, onSave, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    date: '',
    credentialId: '',
    verificationUrl: '',
    image: '',
    note: ''
  });
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  useEffect(() => {
    if (certificate) {
      setFormData({
        title: certificate.title || '',
        issuer: certificate.issuer || '',
        date: certificate.date || '',
        credentialId: certificate.credentialId || '',
        verificationUrl: certificate.verificationUrl || '',
        image: certificate.image || '/cert-placeholder.svg',
        note: certificate.note || ''
      });
      setIsEditing(certificate.isPlaceholder || false);
    }
  }, [certificate]);

  if (!certificate) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave({
        ...certificate,
        ...formData,
        isPlaceholder: false
      });
    }
    setIsEditing(false);
  };

  const handleCopyJson = () => {
    const exportData = JSON.stringify(formData, null, 2);
    navigator.clipboard.writeText(exportData);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div className="relative w-full max-w-2xl glass-card rounded-2xl border border-brandCardBorder bg-[#0E121E] shadow-2xl my-8 overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brandCardBorder/80 bg-[#121624]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accentPurple/20 border border-accentPurple/40 flex items-center justify-center text-accentPurple">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cert-modal-title" className="text-lg font-kanit font-bold text-white">
                {isEditing ? 'Edit Certificate Slot' : certificate.title}
              </h3>
              <p className="text-xs font-mono text-accentCyan">
                {certificate.isPlaceholder ? 'Editable Certification Slot' : certificate.issuer}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-brandMuted hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Certificate Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {isEditing ? (
            /* Edit Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-accentCyan/10 border border-accentCyan/20 text-xs text-accentCyan flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Update this certificate's title, issuer, date, credential ID, and upload the image. Changes will update live on your screen.
                </span>
              </div>

              <div>
                <label className="block text-xs font-mono text-brandSlate mb-1">
                  Certificate Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Meta Front-End Developer Professional Certificate"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brandDark border border-brandCardBorder text-brandSlate text-sm focus:outline-none focus:border-accentCyan"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-brandSlate mb-1">
                    Issuing Organization
                  </label>
                  <input
                    type="text"
                    name="issuer"
                    value={formData.issuer}
                    onChange={handleChange}
                    placeholder="e.g. Coursera, AWS, HackerRank"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brandDark border border-brandCardBorder text-brandSlate text-sm focus:outline-none focus:border-accentCyan"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-brandSlate mb-1">
                    Issue Date / Year
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="e.g. Oct 2024"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brandDark border border-brandCardBorder text-brandSlate text-sm focus:outline-none focus:border-accentCyan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-brandSlate mb-1">
                    Credential ID (Optional)
                  </label>
                  <input
                    type="text"
                    name="credentialId"
                    value={formData.credentialId}
                    onChange={handleChange}
                    placeholder="e.g. CERT-98234-XYZ"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brandDark border border-brandCardBorder text-brandSlate text-sm focus:outline-none focus:border-accentCyan"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-brandSlate mb-1">
                    Verification URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="verificationUrl"
                    value={formData.verificationUrl}
                    onChange={handleChange}
                    placeholder="https://coursera.org/verify/..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brandDark border border-brandCardBorder text-brandSlate text-sm focus:outline-none focus:border-accentCyan"
                  />
                </div>
              </div>

              {/* Upload Certificate Image */}
              <div>
                <label className="block text-xs font-mono text-brandSlate mb-1.5">
                  Certificate Image / Proof File
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex-1 cursor-pointer flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-dashed border-brandCardBorder hover:border-accentCyan/50 bg-brandDark/80 hover:bg-brandDark text-brandSlate text-xs font-mono transition-all">
                    <Upload className="w-4 h-4 text-accentCyan" />
                    <span>Upload Image from Device</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>

                  {formData.image && (
                    <div className="w-16 h-12 rounded-lg border border-brandCardBorder overflow-hidden bg-black shrink-0">
                      <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between gap-3 border-t border-brandCardBorder/80">
                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-brandSlate border border-white/5 transition-colors"
                >
                  {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSnippet ? 'Copied JSON!' : 'Copy JSON'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="btn-outline-sleek px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-gradient-glow px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white"
                  >
                    Save Certificate
                  </button>
                </div>
              </div>

            </form>
          ) : (
            /* View Mode */
            <div className="space-y-6">
              {/* Certificate Image Frame */}
              <div className="rounded-xl overflow-hidden border border-brandCardBorder bg-[#080A10] p-3 flex items-center justify-center shadow-inner">
                <img
                  src={formData.image || '/cert-placeholder.svg'}
                  alt={formData.title}
                  className="max-h-[300px] w-auto object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Certificate Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-brandSurface/80 border border-brandCardBorder flex items-center gap-2.5">
                  <Building className="w-4 h-4 text-accentCyan shrink-0" />
                  <div>
                    <span className="text-brandMuted block text-[10px]">ISSUER:</span>
                    <span className="text-white font-semibold">{formData.issuer}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-brandSurface/80 border border-brandCardBorder flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-accentPurple shrink-0" />
                  <div>
                    <span className="text-brandMuted block text-[10px]">ISSUE DATE:</span>
                    <span className="text-white font-semibold">{formData.date || 'Not specified'}</span>
                  </div>
                </div>

                {formData.credentialId && (
                  <div className="p-3 rounded-xl bg-brandSurface/80 border border-brandCardBorder flex items-center gap-2.5 sm:col-span-2">
                    <Hash className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-brandMuted block text-[10px]">CREDENTIAL ID:</span>
                      <span className="text-white font-semibold">{formData.credentialId}</span>
                    </div>
                  </div>
                )}
              </div>

              {formData.note && (
                <p className="text-xs text-brandMuted italic">
                  Note: {formData.note}
                </p>
              )}

              {/* View/Edit Actions */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-brandCardBorder/80">
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn-outline-sleek px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-accentCyan border-accentCyan/30"
                >
                  Edit Certificate Details
                </button>

                <div className="flex items-center gap-3">
                  {formData.verificationUrl ? (
                    <a
                      href={formData.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient-glow inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Verify Credential</span>
                    </a>
                  ) : null}

                  <button
                    onClick={onClose}
                    className="btn-outline-sleek px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
