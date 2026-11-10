import React, { useState, useEffect } from 'react';
import { Terminal, Sparkles, Cpu } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [statusText, setStatusText] = useState('BOOTING QUANTUM CORE...');

  useEffect(() => {
    const statuses = [
      'INITIALIZING 3D SPACE UNIVERSE...',
      'CALIBRATING NEURAL MESH...',
      'CONNECTING REACT & SPRING BOOT...',
      'LOADING CYBERPUNK ASSETS...',
      'READY.'
    ];

    const interval = setInterval(() => {
      setLoadingPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFading(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 450);
          return 100;
        }

        const next = Math.min(prev + Math.floor(Math.random() * 20) + 12, 100);
        const idx = Math.min(Math.floor((next / 100) * statuses.length), statuses.length - 1);
        setStatusText(statuses[idx]);
        return next;
      });
    }, 55);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] transition-opacity duration-500 overflow-hidden ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading portfolio"
    >
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />
      <div className="absolute w-[500px] h-[500px] bg-accentCyan/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-sm text-center px-6 z-10">
        
        {/* Holographic Glowing 3D Monogram Cube Frame */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-2xl bg-[#090D18] border-2 border-accentCyan flex items-center justify-center shadow-[0_0_35px_rgba(0,245,255,0.4)] animate-pulse">
            <span className="font-kanit font-black text-3xl gradient-text-cyan-purple tracking-widest">
              SK
            </span>
          </div>

          {/* Orbiting Neon Pulse Ring */}
          <div className="absolute -inset-2 rounded-3xl border border-accentPurple/50 animate-spin-slow pointer-events-none" />
        </div>

        {/* Identity Title */}
        <h2 className="text-xl sm:text-2xl font-kanit font-extrabold text-white tracking-wide mb-1">
          SHAILESH KUMAR
        </h2>
        <p className="text-xs font-mono text-accentCyan mb-6 uppercase tracking-widest flex items-center justify-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" />
          <span>Full Stack Developer // 3D HUD</span>
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 h-2 bg-[#090D18] rounded-full overflow-hidden mb-3 border border-brandCardBorder shadow-inner p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-accentCyan via-accentPurple to-accentMagenta rounded-full transition-all duration-100 ease-out shadow-[0_0_15px_rgba(0,245,255,0.6)]"
            style={{ width: `${loadingPercent}%` }}
          />
        </div>

        {/* Diagnostic Status Terminal Output */}
        <div className="flex items-center justify-between w-64 text-[10px] font-mono text-brandMuted">
          <span className="text-accentCyan font-bold truncate max-w-[190px]">
            &gt; {statusText}
          </span>
          <span className="text-white font-bold">{loadingPercent}%</span>
        </div>
      </div>
    </div>
  );
}
