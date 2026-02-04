
import React, { useEffect, useState, useRef } from 'react';
import { Users, Code, Calendar } from 'lucide-react';
import { Stat } from '../types';

const stats: Stat[] = [
  {
    id: '1',
    value: '15+',
    label: 'Happy Customers',
    icon: Users,
  },
  {
    id: '2',
    value: '25+',
    label: 'Projects Completed',
    icon: Code,
  },
  {
    id: '3',
    value: '2+',
    label: 'Years Experience',
    icon: Calendar,
  },
];

const AnimatedCounter = ({ value, isTriggered }: { value: string; isTriggered: boolean }) => {
  const [count, setCount] = useState(0);

  // Parse value string (e.g., "20+" -> 20 and "+")
  const match = value.match(/^(\d+)(.*)$/);
  const endValue = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!isTriggered) return;

    let startTime: number | null = null;
    let animationFrame: number;
    const duration = 2000; // 2 seconds duration

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out expo function for smooth deceleration
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(endValue * ease));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isTriggered, endValue]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-lychy-900 to-lychy-700 py-16 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
            <pattern id="stats-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#stats-dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center group"
            >
              {/* Icon with staggered fade-in */}
              <div 
                className={`
                  mb-4 p-4 rounded-full bg-white/10 backdrop-blur-sm 
                  group-hover:bg-white/20 transition-all duration-500 transform 
                  group-hover:scale-110 group-hover:rotate-3
                  ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'}
                `}
                style={{ animationDelay: `${index * 200}ms`, transitionDelay: `${index * 200}ms` }}
              >
                <stat.icon size={32} className="text-white" />
              </div>
              
              {/* Value with count-up animation */}
              <div 
                 className={`
                   text-5xl font-extrabold mb-2 tracking-tight
                   ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'}
                 `}
                 style={{ animationDelay: `${index * 200 + 150}ms`, transitionDelay: `${index * 200 + 150}ms` }}
              >
                <AnimatedCounter value={stat.value} isTriggered={isVisible} />
              </div>

              {/* Label */}
              <div 
                className={`
                  text-lychy-100 font-medium text-lg uppercase tracking-wide
                  ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-4'}
                `}
                style={{ animationDelay: `${index * 200 + 300}ms`, transitionDelay: `${index * 200 + 300}ms` }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
