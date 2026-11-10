import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ShieldCheck, Lock, Key, AlertCircle, X, Terminal, Eye, EyeOff } from 'lucide-react';

export default function OwnerAuthModal() {
  const { isAuthModalOpen, closeAuthModal, authenticateOwner } = usePortfolio();
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      const res = authenticateOwner(passcode);
      setIsSubmitting(false);
      if (!res.success) {
        setError(res.error || 'Invalid passcode.');
      } else {
        setPasscode('');
      }
    }, 350);
  };

  const handleQuickDemoFill = () => {
    setPasscode('shailesh@2026');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-brandSurface/95 border border-accentCyan/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,245,255,0.25)] overflow-hidden">
        
        {/* Holographic Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accentCyan via-accentPurple to-accentCyan animate-pulse" />

        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-2 rounded-xl text-brandMuted hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accentCyan/20 to-accentPurple/20 border border-accentCyan/50 flex items-center justify-center text-accentCyan shadow-[0_0_20px_rgba(0,245,255,0.3)]">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accentCyan uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>Owner Access Terminal</span>
            </div>
            <h3 className="text-xl font-kanit font-bold text-white tracking-wide">
              Portfolio Management Console
            </h3>
          </div>
        </div>

        <p className="text-sm text-brandSlate/80 mb-6 font-sans leading-relaxed">
          Authenticate to manage projects, upload screenshots, publish/unpublish live links, and manage your verified certificate gallery.
        </p>

        {error && (
          <div className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-xs font-mono text-rose-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-brandSlate uppercase tracking-wider mb-2">
              Owner Passcode / Master Key
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-accentCyan">
                <Key className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter owner passcode"
                autoFocus
                required
                className="w-full pl-10 pr-11 py-3 rounded-xl bg-[#07090F] border border-brandCardBorder focus:border-accentCyan focus:ring-1 focus:ring-accentCyan text-white text-sm font-mono placeholder:text-brandMuted/50 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-brandMuted hover:text-accentCyan transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <span className="text-brandMuted">Default Passcode:</span>
            <button
              type="button"
              onClick={handleQuickDemoFill}
              className="text-accentCyan hover:underline font-semibold"
            >
              Fill: shailesh@2026
            </button>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-gradient-glow py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-accentCyan" />
              <span>{isSubmitting ? 'Verifying Key...' : 'Unlock Owner Dashboard'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
