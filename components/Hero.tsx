
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const createParticles = () => {
      const count = Math.min(Math.floor(width * height / 8000), 150); // Increased count
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: Math.random() * 2.5 + 1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#6AE3FF';
      ctx.strokeStyle = 'rgba(106, 227, 255, 0.3)';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.globalAlpha = (1 - dist / 140) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    };

    createParticles();
    draw();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 120; // Match Navbar offset for consistent positioning
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Particle Network */}
        <ParticleBackground />
        
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-lychy-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-slate-800/50 via-transparent to-transparent"></div>
        
        {/* Geometric accent */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-lychy-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-lychy-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/30 backdrop-blur-xl border border-lychy-400/50 text-lychy-400 text-sm font-semibold mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default"
              style={{ 
                animationFillMode: 'both',
                boxShadow: '0 0 20px rgba(106, 227, 255, 0.4), 0 0 40px rgba(106, 227, 255, 0.2), inset 0 0 15px rgba(106, 227, 255, 0.1)'
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lychy-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lychy-500" style={{ boxShadow: '0 0 8px rgba(106, 227, 255, 0.8)' }}></span>
              </span>
              Open for new collaborations
            </div>
            
            <h1 
              className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-lychy-600 to-lychy-500">Digital Reality</span> From Code.
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              Your vision deserves pixel-perfect execution. We transform complex requirements into seamless, high-performance software solutions.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-lychy-600 text-white font-bold text-lg hover:bg-lychy-700 transition-all shadow-lg shadow-lychy-600/40 hover:shadow-xl hover:shadow-lychy-600/50 flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                Let's Build It
                <ArrowRight size={20} />
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-slate-800/50 text-white border border-slate-700 font-bold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                View Work
              </a>
            </div>
      </div>
    </section>
  );
};

export default Hero;
