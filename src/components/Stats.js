import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCode, faCalendar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Stats.css';

const stats = [
  { icon: faUsers, value: 10, label: 'Happy Customers', suffix: '+' },
  { icon: faCode, value: 6, label: 'Projects Completed', suffix: '+' },
  { icon: faCalendar, value: 2, label: 'Year Experience', suffix: '+' },
];



const Stats = () => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    let startTime = null;
    const ends = stats.map(s => s.value);
    const duration = 800;
    function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const newCounts = ends.map((end, i) => Math.floor(progress * (end - start) + start));
      setCounts(newCounts);
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCounts(ends);
      }
    }
    requestAnimationFrame(animateCount);
  }, [visible]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-glass-bg">
        <div className="stats-list">
          {stats.map((stat, idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-icon">
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className="stat-value">{counts[idx]}{visible ? stat.suffix : ''}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Stats;
