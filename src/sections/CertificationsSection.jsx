import React, { useState, useMemo } from 'react';
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
  Maximize2,
  FileText,
  Copy,
  Check,
  Filter,
  CheckCircle2,
  Tag
} from 'lucide-react';

export default function CertificationsSection({ onOpenCertificateModal }) {
  const {
    certifications,
    publicCertifications,
    isOwner,
    openDashboardModal,
    openAuthModal,
    categories
  } = usePortfolio();

  const [activeCategory, setActiveCategory] = useState('All');
  const [copiedId, setCopiedId] = useState(null);

  // Public visitors only see published certificates; owner sees all
  const displayedCertificates = useMemo(() => {
    const list = isOwner ? [...certifications] : [...publicCertifications];
    // Sort by order
    list.sort((a, b) => (a.order || 0) - (b.order || 0));

    if (activeCategory === 'All') {
      return list;
    }
    return list.filter((c) => c.category === activeCategory);
  }, [isOwner, certifications, publicCertifications, activeCategory]);

  // Extract categories that currently have certificates
  const availableCategories = useMemo(() => {
    const baseList = isOwner ? certifications : publicCertifications;
    const catCounts = {};
    baseList.forEach((c) => {
      const cat = c.category || 'Other Achievements';
      catCounts[cat] = (catCounts[cat] || 0) + 1;
    });

    const categoryList = ['All', ...Object.keys(catCounts)];
    return categoryList.map((cat) => ({
      name: cat,
      count: cat === 'All' ? baseList.length : (catCounts[cat] || 0)
    }));
  }, [isOwner, certifications, publicCertifications]);

  const handleCopyCredentialId = (e, id) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="py-28 relative bg-brandDark/95 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accentPurple/15 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accentCyan/15 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accentPurple/10 border border-accentPurple/30 text-accentPurple text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-accentCyan" />
            <span>Verified Credentials & Honors</span>
          </div>

          {/* EXACT USER SPECIFIED TITLE */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-kanit font-black text-white tracking-tight">
            CERTIFICATIONS & <span className="gradient-text-cyan-purple">ACHIEVEMENTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accentCyan via-accentPurple to-accentMagenta rounded-full mt-3" />

          <p className="mt-4 text-brandSlate/80 text-sm sm:text-base max-w-2xl font-sans">
            Accredited engineering diplomas, cloud certifications, and technical job simulations. Every listed credential is independently verifiable.
          </p>

          {/* Owner Bar or Visitor Lock Indicator */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {isOwner ? (
              <div className="flex flex-wrap items-center gap-3 p-3 rounded-2xl bg-brandSurface/90 border border-accentPurple/40 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-xl">
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Owner Mode: {certifications.length} Credentials ({certifications.filter(c => c.published).length} Published)
                </span>
                <button
                  onClick={() => openDashboardModal('certificates')}
                  className="btn-gradient-glow flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-white font-bold"
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
                <span>Owner Dashboard Login</span>
              </button>
            )}
          </div>
        </div>

        {/* Certificate Transparency Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-brandSurface/90 border border-accentCyan/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-brandSlate backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-accentCyan shrink-0" />
            <span>
              Integrity policy: Only verified and completed certifications are published to public visitors. Never displaying unverified credentials.
            </span>
          </div>
          <span className="text-accentCyan font-bold shrink-0">
            {displayedCertificates.length} {displayedCertificates.length === 1 ? 'Credential' : 'Credentials'} Listed
          </span>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10">
          <div className="flex items-center gap-1.5 text-xs font-mono text-brandMuted mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-accentPurple" />
            <span className="hidden sm:inline">Filter:</span>
          </div>
          {availableCategories.map(({ name, count }) => {
            const isActive = activeCategory === name;
            return (
              <button
                key={name}
                onClick={() => setActiveCategory(name)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wide transition-all shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-accentCyan/20 to-accentPurple/25 border border-accentCyan text-white shadow-[0_0_15px_rgba(0,245,255,0.25)] font-bold'
                    : 'bg-white/5 border border-white/10 text-brandSlate hover:text-white hover:border-white/20'
                }`}
              >
                <span>{name}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    isActive
                      ? 'bg-accentCyan/20 text-accentCyan'
                      : 'bg-white/10 text-brandMuted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        {displayedCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedCertificates.map((cert) => {
              const isPdf = cert.fileType === 'pdf' || (cert.fileUrl && cert.fileUrl.endsWith('.pdf'));
              const isCopied = copiedId === cert.credentialId;

              return (
                <Tilt3DCard
                  key={cert.id}
                  glowColor="combo"
                  maxRotation={10}
                  scale={1.02}
                  className="p-6 flex flex-col justify-between group cursor-default relative overflow-hidden"
                >
                  <div>
                    {/* Top Category Badge & Published Status */}
                    <div className="flex items-center justify-between mb-4 text-[11px] font-mono">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accentPurple/15 border border-accentPurple/30 text-accentPurple font-semibold">
                        <Tag className="w-3 h-3 text-accentCyan" />
                        <span>{cert.category || 'Certification'}</span>
                      </span>

                      {!cert.published && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px]">
                          Draft (Unpublished)
                        </span>
                      )}
                    </div>

                    {/* Preview Thumbnail Container */}
                    <div
                      onClick={() => onOpenCertificateModal(cert)}
                      className="relative rounded-2xl overflow-hidden bg-black/90 border border-white/10 mb-5 p-3 flex items-center justify-center group-hover:border-accentCyan/60 transition-all duration-300 cursor-pointer shadow-xl h-52 group/preview"
                    >
                      {isPdf ? (
                        /* Futuristic PDF Certificate Card representation */
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#0F1424] to-[#0A0D18] rounded-xl border border-rose-500/30 text-center relative overflow-hidden">
                          <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/40 text-rose-400 font-mono text-[10px] font-bold">
                            PDF DOC
                          </div>
                          <FileText className="w-12 h-12 text-rose-400 mb-2 drop-shadow-[0_0_12px_rgba(244,63,94,0.4)]" />
                          <span className="text-xs font-kanit font-bold text-white line-clamp-2 px-2">
                            {cert.title}
                          </span>
                          <span className="text-[10px] font-mono text-accentCyan mt-1">
                            Click to View / Read PDF
                          </span>
                        </div>
                      ) : (
                        /* Image Preview */
                        <img
                          src={cert.image || cert.fileUrl || '/cert-placeholder.svg'}
                          alt={`Certificate: ${cert.title} - ${cert.issuer}`}
                          onError={(e) => {
                            e.currentTarget.src = '/cert-placeholder.svg';
                          }}
                          className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}

                      {/* Holographic Inspect Overlay */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-xs font-mono gap-2 rounded-xl backdrop-blur-sm">
                        <Maximize2 className="w-4 h-4 text-accentCyan animate-pulse" />
                        <span className="font-semibold">Full Screen Inspection</span>
                      </div>
                    </div>

                    {/* Issuing Authority & Date */}
                    <div className="flex items-center justify-between text-xs font-mono text-brandMuted mb-2">
                      <span className="text-accentCyan font-semibold flex items-center gap-1.5 truncate pr-2">
                        <Building className="w-3.5 h-3.5 text-accentPurple shrink-0" />
                        <span className="truncate">{cert.issuer}</span>
                      </span>
                      <span className="flex items-center gap-1.5 shrink-0 text-brandSlate">
                        <Calendar className="w-3.5 h-3.5 text-accentCyan" />
                        <span>{cert.date}</span>
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-xl font-kanit font-bold text-white mb-2 tracking-wide group-hover:text-accentCyan transition-colors line-clamp-2">
                      {cert.title}
                    </h3>

                    {/* Description / Verified Note */}
                    {(cert.note || cert.description) && (
                      <p className="text-xs text-brandSlate/80 leading-relaxed mb-4 font-sans line-clamp-3">
                        {cert.note || cert.description}
                      </p>
                    )}

                    {/* Credential ID with Copy Action */}
                    {cert.credentialId && cert.credentialId !== 'PENDING_INPUT' && (
                      <div className="p-2.5 rounded-xl bg-[#080B14] border border-white/5 flex items-center justify-between text-[11px] font-mono text-brandMuted mb-4">
                        <div className="flex items-center gap-1.5 truncate">
                          <Hash className="w-3.5 h-3.5 text-accentCyan shrink-0" />
                          <span className="text-brandMuted">ID:</span>
                          <span className="text-white font-mono font-semibold truncate">
                            {cert.credentialId}
                          </span>
                        </div>
                        <button
                          onClick={(e) => handleCopyCredentialId(e, cert.credentialId)}
                          className="p-1 rounded hover:bg-white/10 text-brandSlate hover:text-white transition-colors shrink-0 ml-2"
                          title="Copy Credential ID"
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenCertificateModal(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accentCyan hover:text-white transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-accentPurple" />
                      <span>View Certificate</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {cert.verificationUrl && cert.verificationUrl.startsWith('http') && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-brandSlate hover:text-white flex items-center gap-1 transition-all"
                          title="Verify at official credential authority"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3 h-3 text-accentPurple" />
                        </a>
                      )}

                      {isOwner && (
                        <button
                          onClick={() => openDashboardModal('certificates')}
                          className="p-1.5 rounded-lg bg-accentPurple/15 hover:bg-accentPurple/25 text-accentPurple border border-accentPurple/30 text-xs font-mono flex items-center gap-1"
                          title="Edit in Owner Dashboard"
                        >
                          <Edit className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </Tilt3DCard>
              );
            })}
          </div>
        ) : (
          /* Empty State for Visitors */
          <div className="p-12 rounded-3xl bg-brandSurface/80 border border-brandCardBorder text-center max-w-xl mx-auto shadow-2xl">
            <ShieldCheck className="w-12 h-12 text-accentCyan mx-auto mb-4 opacity-80" />
            <h3 className="text-lg font-kanit font-bold text-white mb-2">
              No Credentials in Selected Category
            </h3>
            <p className="text-xs font-mono text-brandMuted leading-relaxed mb-6">
              There are currently no published credentials in "{activeCategory}". Click "All" to browse all verified certificates.
            </p>
            <button
              onClick={() => setActiveCategory('All')}
              className="btn-gradient-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono text-white font-bold"
            >
              Show All Credentials
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
