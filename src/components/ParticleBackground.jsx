import React, { useEffect, useRef } from 'react';

/**
 * ParticleBackground - High-performance 3D Particle Universe & Neural Mesh.
 * Renders an interactive 3D particle constellation with mouse-responsive
 * camera parallax, glowing cyber connections, and a futuristic cyber-grid floor.
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with smooth interpolation
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX - width / 2) / (width / 2);
      targetMouseY = (e.clientY - height / 2) / (height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 3D Particles setup
    const isMobile = width < 768;
    const particleCount = isMobile ? 40 : 85;
    const particles = [];
    const FOV = 450;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 - 400,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2.2 + 0.8,
        colorType: i % 3, // 0: cyan, 1: purple, 2: electric blue
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const colors = [
      { r: 0, g: 245, b: 255 },   // Neon Cyan
      { r: 168, g: 85, b: 247 },  // Neon Purple
      { r: 56, g: 189, b: 248 }   // Electric Blue
    ];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let lastTime = performance.now();

    const render = (time) => {
      // Smooth camera interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep space atmospheric background gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2 + currentMouseX * 50,
        height / 3 + currentMouseY * 50,
        100,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.85
      );
      bgGrad.addColorStop(0, 'rgba(11, 15, 30, 0.4)');
      bgGrad.addColorStop(0.5, 'rgba(5, 8, 22, 0.2)');
      bgGrad.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const rotY = currentMouseX * 0.35;
      const rotX = currentMouseY * -0.25;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Projected particles cache
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move 3D particle
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        p.pulsePhase += 0.025;

        // Wrap around boundaries
        const boundX = (width * 1.5) / 2;
        const boundY = (height * 1.5) / 2;
        if (p.x < -boundX) p.x = boundX;
        if (p.x > boundX) p.x = -boundX;
        if (p.y < -boundY) p.y = boundY;
        if (p.y > boundY) p.y = -boundY;
        if (p.z < -400) p.z = 400;
        if (p.z > 400) p.z = -400;

        // 3D Rotation matrix application
        // Rotate around Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Depth perspective projection
        const depth = z2 + 600;
        if (depth <= 10) continue;

        const scale = FOV / depth;
        const projX = width / 2 + x1 * scale;
        const projY = height / 2 + y2 * scale;

        const c = colors[p.colorType];
        const pulse = 0.75 + Math.sin(p.pulsePhase) * 0.25;
        const alpha = Math.max(0.1, Math.min(0.9, (1 - z2 / 450) * 0.6 * pulse));

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          scale,
          radius: p.radius * scale,
          color: c,
          alpha,
        });

        // Draw particle node with neon glow
        ctx.beginPath();
        ctx.arc(projX, projY, Math.max(0.5, p.radius * scale), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
        ctx.fill();

        // Extra halo for closer particles
        if (scale > 0.9) {
          ctx.beginPath();
          ctx.arc(projX, projY, p.radius * scale * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha * 0.25})`;
          ctx.fill();
        }
      }

      // 3D Neural Constellation Connections
      const maxConnectDist = isMobile ? 90 : 135;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * Math.min(p1.alpha, p2.alpha) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            // Neon line gradient
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, `rgba(${p1.color.r}, ${p1.color.g}, ${p1.color.b}, ${lineAlpha})`);
            grad.addColorStop(1, `rgba(${p2.color.r}, ${p2.color.g}, ${p2.color.b}, ${lineAlpha})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = Math.max(0.4, (p1.scale + p2.scale) * 0.45);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* 3D Particle & Neural Mesh Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Futuristic Cyber-Grid Horizon Floor */}
      <div className="fixed inset-x-0 bottom-0 h-64 pointer-events-none z-0 overflow-hidden opacity-35">
        <div className="cyber-grid-floor" />
      </div>

      {/* Cyberpunk Scanline Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 scanline-overlay opacity-30" />
    </>
  );
}
