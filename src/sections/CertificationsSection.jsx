import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import Tilt3DCard from '../components/Tilt3DCard';
import {
  Award,
  PlusCircle,
  ExternalLink,
  Calendar,
  Building,
  Hash,
  Eye,
  ShieldCheck,
  Sparkles,
  Lock,
  Edit,
  Maximize2
} from 'lucide-react';

export default function CertificationsSection({ onOpenCertificateModal }) {
  const { certifications, isOwner, openDashboardModal, openAuthModal, toggleCertificatePublish } = usePortfolio();

  // Public visitors can only view published certificates
  const visibleCertificates = isOwner
    ? certifications
    : certifications.filter((c) => c.published);

  return (
    <section id="certifications" className="py-28 relative bg-brandDark/95 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-accentPurple/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accentPurple/10 border border-accentPurple/30 text-accentPurple text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-kanit font-black text-white tracking-tight">
            CERTIFICATE <span className="gradient-text-cyan-purple">GALLERY</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-3" />

          <p className="mt-4 text-brandSlate/80 text-sm sm:text-base max-w-2xl font-sans">
            Verified engineering credentials and certifications. Only authentic accredited certificates are published. Public visitors can view verified credentials; owner manages via secure dashboard.
          </p>

          {/* Owner Bar or Visitor Lock Indicator */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {isOwner ? (
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-brandSurface/90 border border-accentPurple/40 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Owner Mode: {certifications.length} Certificates in Database ({certifications.filter(c => c.published).length} Published)
                </span>
                <button
                  onClick={() => openDashboardModal('certificates')}
                  className="btn-gradient-glow flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-white"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Manage Certificates</span>
                </button>
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-brandMuted hover:text-white transition-colors"
              >
                <Lock className="w-3.5 h-3.5 text-accentPurple" />
                <span>Owner Login to Manage Certificates</span>
              </button>
            )}
          </div>
        </div>

        {/* Certificate Transparency Banner */}
        <div className="mb-10 p-4 rounded-2xl bg-brandSurface/90 border border-accentCyan/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-brandSlate">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-accentCyan shrink-0" />
            <span>
              Integrity policy: Only verified and completed certifications are published to public visitors. Never displaying unverified credentials.
            </span>
          </div>
          <span className="text-accentCyan font-bold shrink-0">
            {visibleCertificates.length} {visibleCertificates.length === 1 ? 'Credential' : 'Credentials'} Displayed
          </span>
        </div>

        {/* Certificates Grid */}
        {visibleCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleCertificates.map((cert) => (
              <Tilt3DCard
                key={cert.id}
                glowColor="purple"
                maxRotation={12}
                scale={1.02}
                className="p-6 flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Card Header & Preview Image */}
                  <div
                    onClick={() => onOpenCertificateModal(cert)}
                    className="relative rounded-2xl overflow-hidden bg-black/90 border border-white/10 mb-5 p-3 flex items-center justify-center group-hover:border-accentPurple/50 transition-all duration-300 cursor-pointer shadow-lg translate-z-30 h-48"
                  >
                    <img
                      src={cert.image || '/cert-placeholder.svg'}
                      alt={cert.title}
                      className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Holographic Inspect Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-xs font-mono gap-1.5 rounded-xl">
                      <Maximize2 className="w-4 h-4 text-accentPurple" />
                      <span>Click to view full credential</span>
                    </div>

                    {/* Draft Indicator if Owner is viewing unpublished cert */}
                    {!cert.published && (
                      <div className="absolute top-2 right-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Draft (Unpublished)
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Issuing Authority & Date */}
                  <div className="flex items-center justify-between text-xs font-mono text-brandMuted mb-2 translate-z-10">
                    <span className="text-accentPurple font-semibold flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-accentCyan" />
                      {cert.date}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-xl font-kanit font-bold text-white mb-2 tracking-wide group-hover:text-accentPurple transition-colors line-clamp-2 translate-z-20">
                    {cert.title}
                  </h3>

                  {/* Note / Description */}
                  {cert.note && (
                    <p className="text-xs text-brandSlate/80 leading-relaxed mb-4 font-sans line-clamp-3 translate-z-10">
                      {cert.note}
                    </p>
                  )}

                  {/* Credential ID */}
                  {cert.credentialId && cert.credentialId !== 'PENDING_INPUT' && (
                    <div className="p-2 rounded-xl bg-[#080B14] border border-white/5 flex items-center justify-between text-[11px] font-mono text-brandMuted mb-4 translate-z-20">
                      <span className="flex items-center gap-1">
                        <Hash className="w-3 h-3 text-accentCyan" />
                        <span>ID:</span>
                      </span>
                      <span className="text-white font-mono">{cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2 translate-z-30">
                  <button
                    onClick={() => onOpenCertificateModal(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-accentCyan hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  {isOwner && (
                    <button
                      onClick={() => openDashboardModal('certificates')}
                      className="p-1.5 rounded-lg bg-accentPurple/10 hover:bg-accentPurple/20 text-accentPurple text-xs font-mono flex items-center gap-1"
                    >
                      <Edit className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                  )}

                  {cert.verificationUrl && cert.verificationUrl.startsWith('http') && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-brandSlate hover:text-white flex items-center gap-1"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3 text-accentPurple" />
                    </a>
                  )}
                </div>
              </Tilt3DCard>
            ))}
          </div>
        ) : (
          /* Empty State for Visitors */
          <div className="p-12 rounded-3xl bg-brandSurface/80 border border-brandCardBorder text-center max-w-xl mx-auto">
            <ShieldCheck className="w-12 h-12 text-accentCyan mx-auto mb-4 opacity-80" />
            <h3 className="text-lg font-kanit font-bold text-white mb-2">
              Credentials Under Official Verification
            </h3>
            <p className="text-xs font-mono text-brandMuted leading-relaxed mb-6">
              Only officially certified course diplomas and verified internships are published in this gallery. Reach out directly for academic transcripts.
            </p>
            <a
              href="#contact"
              className="btn-gradient-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono text-white font-bold"
            >
              Request Verification Dossier
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
