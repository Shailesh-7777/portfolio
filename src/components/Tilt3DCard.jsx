import React, { useRef, useState, useEffect } from 'react';

/**
 * Tilt3DCard - High-performance interactive 3D perspective card.
 * Provides real-time 3D tilt tracking with cursor, holographic neon glare,
 * and multi-depth stereoscopic pop-out.
 */
export default function Tilt3DCard({
  children,
  className = '',
  maxRotation = 14,
  scale = 1.02,
  glowColor = 'cyan', // 'cyan' | 'purple' | 'combo'
  glare = true,
  onClick
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 0.35,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.45) 0%, rgba(0, 245, 255, 0.15) 40%, transparent 80%)`,
      });
    }
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({ opacity: 0, transition: 'opacity 0.4s ease' });
  };

  const glowBorderClass =
    glowColor === 'cyan'
      ? 'hover:border-accentCyan/60 hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]'
      : glowColor === 'purple'
      ? 'hover:border-accentPurple/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]'
      : 'hover:border-accentCyan/60 hover:shadow-[0_0_35px_rgba(0,245,255,0.25),0_0_40px_rgba(168,85,247,0.25)]';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transformStyle,
        transition: transformStyle ? 'transform 0.12s ease-out' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-2xl border border-brandCardBorder bg-brandSurface/80 backdrop-blur-xl transition-shadow duration-300 ${glowBorderClass} ${className}`}
    >
      {/* Specular Holographic Glare Layer */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl z-20 overflow-hidden mix-blend-overlay transition-opacity duration-200"
          style={glareStyle}
          aria-hidden="true"
        />
      )}

      {/* Cyber Neon Edge Accent */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-r from-accentCyan/30 via-accentPurple/30 to-accentCyan/30 blur-sm"
        aria-hidden="true"
      />

      {children}
    </div>
  );
}
