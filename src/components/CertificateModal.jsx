import React, { useState, useEffect } from 'react';
import {
  X,
  Award,
  ExternalLink,
  Download,
  Calendar,
  Building,
  Hash,
  ShieldCheck,
  Tag,
  Copy,
  Check,
  FileText,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  const [copiedId, setCopiedId] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  const fileUrl = certificate.fileUrl || certificate.image || '/cert-placeholder.svg';
  const isPdf = certificate.fileType === 'pdf' || (typeof fileUrl === 'string' && fileUrl.endsWith('.pdf'));

  const handleCopyId = () => {
    if (certificate.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-brandSurface/98 rounded-3xl border border-accentCyan/40 shadow-[0_0_60px_rgba(0,245,255,0.25)] my-6 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Holographic Glowing Header Accent */}
        <div className="h-1 bg-gradient-to-r from-accentCyan via-accentPurple to-accentCyan" />

        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-brandCardBorder bg-[#080B14] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accentPurple/20 border border-accentPurple/40 flex items-center justify-center text-accentPurple shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              {isPdf ? <FileText className="w-5 h-5 text-rose-400" /> : <Award className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accentCyan bg-accentCyan/10 px-2 py-0.5 rounded-full border border-accentCyan/30">
                  {certificate.category || 'Official Credential'}
                </span>
                {isPdf && (
                  <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/30 font-bold">
                    PDF Document
                  </span>
                )}
              </div>
              <h3 id="cert-modal-title" className="text-base sm:text-lg font-kanit font-bold text-white tracking-wide">
                {certificate.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-brandMuted hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Certificate Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[75vh]">
          
          {/* Certificate Media Viewer (PDF or Image) */}
          <div className="relative rounded-2xl bg-[#050811] border border-white/10 overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
            {isPdf ? (
              <div className="w-full flex flex-col items-center">
                {/* Embedded PDF iframe */}
                <iframe
                  src={fileUrl}
                  title={`Certificate PDF: ${certificate.title}`}
                  className="w-full h-[55vh] rounded-t-xl bg-white border-0"
                />
                {/* PDF Action Toolbar */}
                <div className="w-full px-4 py-3 bg-[#0B0F1E] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-brandMuted flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-rose-400" />
                    <span>Interactive PDF Document</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-brandSlate hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-accentCyan" />
                      <span>Open in New Tab</span>
                    </a>
                    <a
                      href={fileUrl}
                      download={`${certificate.title.replace(/\s+/g, '_')}.pdf`}
                      className="btn-gradient-glow px-3 py-1.5 rounded-lg text-white font-bold flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5 text-accentCyan" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* Image Certificate Viewer */
              <div className="relative w-full flex flex-col items-center justify-center p-4">
                <img
                  src={fileUrl}
                  alt={certificate.title}
                  onError={(e) => {
                    e.currentTarget.src = '/cert-placeholder.svg';
                  }}
                  className={`max-h-[55vh] w-auto object-contain rounded-xl transition-all duration-300 shadow-2xl ${
                    isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />

                {/* Floating zoom control button */}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-4 right-4 p-2 rounded-xl bg-black/70 hover:bg-black/90 border border-white/20 text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-md shadow-lg"
                  title={isZoomed ? 'Zoom Out' : 'Zoom In'}
                >
                  {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                  <span>{isZoomed ? 'Zoom Out' : 'Zoom In'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Certificate Metadata Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Column: Issuer, Date, Credential ID, Verification Link */}
            <div className="md:col-span-6 space-y-4">
              <div className="p-4 rounded-2xl bg-[#090D18] border border-brandCardBorder space-y-3">
                <div className="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2">
                  <span className="text-brandMuted flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-accentPurple" />
                    <span>Issuing Organization</span>
                  </span>
                  <span className="text-white font-semibold">{certificate.issuer}</span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2">
                  <span className="text-brandMuted flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-accentCyan" />
                    <span>Date of Issue</span>
                  </span>
                  <span className="text-white font-semibold">{certificate.date}</span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2">
                  <span className="text-brandMuted flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-accentCyan" />
                    <span>Domain Category</span>
                  </span>
                  <span className="text-accentCyan font-semibold">{certificate.category || 'Engineering'}</span>
                </div>

                {certificate.credentialId && (
                  <div className="flex items-center justify-between text-xs font-mono pt-1">
                    <span className="text-brandMuted flex items-center gap-1.5">
                      <Hash className="w-4 h-4 text-accentCyan" />
                      <span>Credential ID</span>
                    </span>
                    <button
                      onClick={handleCopyId}
                      className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono flex items-center gap-1.5 border border-white/10 transition-colors"
                      title="Click to copy credential ID"
                    >
                      <span>{certificate.credentialId}</span>
                      {copiedId ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-brandMuted" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Official Verification Button */}
              {certificate.verificationUrl && certificate.verificationUrl.startsWith('http') && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-outline-sleek py-3 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-accentCyan flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verify with Official Issuer</span>
                  <ExternalLink className="w-3.5 h-3.5 text-accentPurple" />
                </a>
              )}
            </div>

            {/* Right Column: Verified Scope & Description */}
            <div className="md:col-span-6 flex flex-col justify-between p-4 rounded-2xl bg-[#090D18] border border-brandCardBorder">
              <div>
                <h4 className="text-xs font-mono text-accentCyan uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Competencies & Description</span>
                </h4>
                <p className="text-xs sm:text-sm text-brandSlate/90 leading-relaxed font-sans">
                  {certificate.note || certificate.description || 'Verified course completion and hands-on laboratory exercises accredited by the issuing organization.'}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-brandMuted">
                <span>Verification Status:</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Accredited & Published
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#080B14] border-t border-brandCardBorder flex items-center justify-between text-xs font-mono text-brandMuted">
          <span>Candidate: Shailesh Kumar</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
