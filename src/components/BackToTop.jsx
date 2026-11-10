import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-brandSurface/90 hover:bg-accentCyan/20 text-brandSlate hover:text-white border border-brandCardBorder hover:border-accentCyan/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-accentCyan"
    >
      <ArrowUp className="w-5 h-5 text-accentCyan group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
