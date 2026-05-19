import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Calendar } from 'lucide-react';
import { Stat } from '../types';
import './Stats.css';

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

const AnimatedCounter = ({ value, isVisible }: { value: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  const endValue = parseInt(value.replace('+', ''), 10);
  const suffix = value.includes('+') ? '+' : '';

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1500; // 1.5s
    const range = endValue - start;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      
      setCount(Math.floor(easeOut * range + start));

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, endValue]);

  return (
    <span className="stat-value">
      {count}{suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-grid-pattern"></div>
      <div ref={ref} className="container stats-container">
        {stats.map((stat) => (
          <motion.div 
            key={stat.id} 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (parseInt(stat.id) - 1) * 0.2 }}
          >
            <div className="stat-icon-container">
              <stat.icon size={28} />
            </div>
            <AnimatedCounter value={stat.value} isVisible={isVisible} />
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
