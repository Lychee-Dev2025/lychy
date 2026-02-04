
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Cpu, Cloud, Zap } from 'lucide-react';

const DigitalParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const createParticles = () => {
      const count = 80;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = '#6AE3FF';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#6AE3FF';
        ctx.fill();
        ctx.shadowBlur = 0;
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-30" />;
};

const GridBackground = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(106, 227, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(106, 227, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
        }}
      />
    </div>
  );
};

const AIEnergyBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft glowing electric blue energy cloud in center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
        <div 
          className="absolute inset-0 rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(106, 227, 255, 0.6), rgba(106, 227, 255, 0.3) 40%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'breathe 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute inset-8 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(106, 227, 255, 0.8), transparent 60%)',
            filter: 'blur(40px)',
            animation: 'breathe 4s ease-in-out infinite 1s'
          }}
        />
      </div>

      {/* Flowing digital mist particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={`mist-${i}`}
            className="absolute w-1 h-1 bg-lychy-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Thin neon blue data lines growing outward */}
      <svg className="absolute inset-0 w-full h-full opacity-60">
        <defs>
          <linearGradient id="lineGrad1" x1="50%" y1="50%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#6AE3FF', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#6AE3FF', stopOpacity: 0 }} />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="50%" y1="50%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6AE3FF', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#6AE3FF', stopOpacity: 0 }} />
          </linearGradient>
          <linearGradient id="lineGrad3" x1="50%" y1="50%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#6AE3FF', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#6AE3FF', stopOpacity: 0 }} />
          </linearGradient>
          <linearGradient id="lineGrad4" x1="50%" y1="50%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6AE3FF', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#6AE3FF', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        
        {/* Animated data lines */}
        <path d="M50%,50% Q65%,30% 85%,15%" stroke="url(#lineGrad1)" strokeWidth="1" fill="none">
          <animate attributeName="stroke-opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
        </path>
        <path d="M50%,50% Q70%,65% 90%,80%" stroke="url(#lineGrad2)" strokeWidth="1" fill="none">
          <animate attributeName="stroke-opacity" values="0;1;0" dur="6s" repeatCount="indefinite" begin="1s" />
        </path>
        <path d="M50%,50% Q35%,35% 15%,20%" stroke="url(#lineGrad3)" strokeWidth="1" fill="none">
          <animate attributeName="stroke-opacity" values="0;1;0" dur="5.5s" repeatCount="indefinite" begin="2s" />
        </path>
        <path d="M50%,50% Q30%,70% 10%,85%" stroke="url(#lineGrad4)" strokeWidth="1" fill="none">
          <animate attributeName="stroke-opacity" values="0;1;0" dur="6.5s" repeatCount="indefinite" begin="3s" />
        </path>
        <path d="M50%,50% Q50%,25% 50%,5%" stroke="url(#lineGrad1)" strokeWidth="1" fill="none">
          <animate attributeName="stroke-opacity" values="0;1;0" dur="5s" repeatCount="indefinite" begin="1.5s" />
        </path>
        <path d="M50%,50% Q75%,50% 95%,50%" stroke="url(#lineGrad2)" strokeWidth="1" fill="none">
          <animate attributeName="stroke-opacity" values="0;1;0" dur="6s" repeatCount="indefinite" begin="2.5s" />
        </path>
      </svg>

      {/* Floating glass squares and rectangles at different depths */}
      {/* Large background squares */}
      <div className="absolute top-[10%] right-[15%] w-32 h-32 opacity-10">
        <div 
          className="w-full h-full border border-lychy-400/30 backdrop-blur-sm"
          style={{
            animation: 'float 25s ease-in-out infinite, spin 60s linear infinite',
            transformStyle: 'preserve-3d'
          }}
        />
      </div>
      <div className="absolute bottom-[20%] left-[10%] w-40 h-24 opacity-10">
        <div 
          className="w-full h-full border border-lychy-400/30 backdrop-blur-sm"
          style={{
            animation: 'float 30s ease-in-out infinite 2s, spin 70s linear infinite reverse',
            transformStyle: 'preserve-3d'
          }}
        />
      </div>
      <div className="absolute top-[60%] right-[25%] w-28 h-28 opacity-10">
        <div 
          className="w-full h-full border border-lychy-400/30 backdrop-blur-sm"
          style={{
            animation: 'float 28s ease-in-out infinite 4s, spin 80s linear infinite',
            transformStyle: 'preserve-3d'
          }}
        />
      </div>

      {/* Medium depth rectangles */}
      <div className="absolute top-[25%] left-[20%] w-24 h-36 opacity-15">
        <div 
          className="w-full h-full border border-lychy-400/40 backdrop-blur-sm"
          style={{
            animation: 'float 22s ease-in-out infinite 1s, spin 50s linear infinite',
            transformStyle: 'preserve-3d'
          }}
        />
      </div>
      <div className="absolute bottom-[30%] right-[30%] w-36 h-20 opacity-15">
        <div 
          className="w-full h-full border border-lychy-400/40 backdrop-blur-sm"
          style={{
            animation: 'float 26s ease-in-out infinite 3s, spin 65s linear infinite reverse',
            transformStyle: 'preserve-3d'
          }}
        />
      </div>

      {/* Small foreground squares */}
      <div className="absolute top-[40%] left-[35%] w-16 h-16 opacity-20">
        <div 
          className="w-full h-full border border-lychy-400/50 backdrop-blur-sm"
          style={{
            animation: 'float 20s ease-in-out infinite 2.5s, spin 45s linear infinite',
            transformStyle: 'preserve-3d'
          }}
        />
      </div>
      <div className="absolute top-[70%] right-[40%] w-20 h-20 opacity-20">
        <div 
          className="w-full h-full border border-lychy-400/50 backdrop-blur-sm"
          style={{
            animation: 'float 24s ease-in-out infinite 1.5s, spin 55s linear infinite reverse',
            transformStyle: 'preserve-3d'
          }}
        />
      </div>

      {/* Star-like particles drifting */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-0.5 h-0.5 bg-lychy-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.2,
            animation: `drift ${15 + Math.random() * 15}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
            boxShadow: '0 0 4px rgba(106, 227, 255, 0.8)'
          }}
        />
      ))}

      {/* Horizontal wave ripples */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-[30%] left-0 w-full h-px opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(106, 227, 255, 0.6), transparent)',
            animation: 'wave 8s ease-in-out infinite',
            filter: 'blur(2px)'
          }}
        />
        <div 
          className="absolute top-[60%] left-0 w-full h-px opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(106, 227, 255, 0.6), transparent)',
            animation: 'wave 10s ease-in-out infinite 3s',
            filter: 'blur(2px)'
          }}
        />
        <div 
          className="absolute top-[45%] left-0 w-full h-px opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(106, 227, 255, 0.4), transparent)',
            animation: 'wave 12s ease-in-out infinite 1.5s',
            filter: 'blur(2px)'
          }}
        />
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 120;
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
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Deep Dark Blue Background with Electric Blue Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black">
        {/* Soft glowing grid lines */}
        <GridBackground />
        
        {/* Digital particles */}
        <DigitalParticles />
        
        {/* Electric blue ambient light effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lychy-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        
        {/* Minimal clean UI shapes - hidden on mobile */}
        <div className="hidden md:block absolute top-20 right-20 w-32 h-32 border border-lychy-400/10 rounded-lg backdrop-blur-sm" />
        <div className="hidden md:block absolute bottom-32 left-32 w-24 h-24 border border-lychy-400/10 rounded-full backdrop-blur-sm" />
        
        {/* AI Energy Background - centered */}
        <AIEnergyBackground />
      </div>

      {/* Content - Centered on mobile, left-aligned on desktop */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10 text-center">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/30 backdrop-blur-xl border border-lychy-400/50 text-lychy-400 text-xs sm:text-sm md:text-base font-semibold mb-6 sm:mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default"
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
              className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8 md:mb-9 tracking-tight animate-fade-in-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-lychy-600 to-lychy-500">Digital Reality</span> From Code.
            </h1>
            
            <p 
              className="text-base sm:text-lg md:text-2xl text-slate-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto px-2 animate-fade-in-up"
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
                className="w-full sm:w-auto px-7 sm:px-9 md:px-11 py-2.5 sm:py-3 md:py-4 rounded-xl bg-lychy-600 text-white font-bold text-sm sm:text-base md:text-xl hover:bg-lychy-700 transition-all shadow-lg shadow-lychy-600/40 hover:shadow-xl hover:shadow-lychy-600/50 flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                Let's Build It
                <ArrowRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="w-full sm:w-auto px-7 sm:px-9 md:px-11 py-2.5 sm:py-3 md:py-4 rounded-xl bg-slate-800/50 text-white border border-slate-700 font-bold text-sm sm:text-base md:text-xl hover:bg-slate-800 hover:border-slate-600 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                View Work
              </a>
            </div>
      </div>
    </section>
  );
};

export default Hero;
