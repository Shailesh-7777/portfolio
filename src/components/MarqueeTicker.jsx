import React from 'react';
import { marqueeTechnologies } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [...marqueeTechnologies, ...marqueeTechnologies];

  return (
    <div className="relative w-full overflow-hidden border-y border-brandCardBorder bg-brandSurface/40 py-4 backdrop-blur-sm">
      {/* Edge Gradients for smooth fade out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brandDark to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brandDark to-transparent z-10" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-6">
        {items.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-brandDark/80 border border-brandCardBorder text-brandSlate text-xs sm:text-sm font-mono tracking-wide shadow-sm hover:border-accentCyan/50 hover:text-white transition-all cursor-default"
          >
            <Sparkles className="w-3 h-3 text-accentCyan" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
