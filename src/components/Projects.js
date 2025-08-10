import React, { useState, useRef, useEffect } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Sustain Tip',
    subtitle: '',
    desc: 'AI-powered mobile app that helps users build sustainable habits through daily personalized tips.',
    image: require('../assets/sustaintip.jpg'),
    knowMore: '#',
    preview: '#'
  },
  {
    title: 'Pet Care Companions',
    subtitle: '',
    desc: 'One-stop mobile solution for all pet care needs.',
    image: require('../assets/petcare.jpg'),
    knowMore: '#',
    preview: '#'
  },
  {
    title: 'Al-Mehdi Online School',
    subtitle: '',
    desc: 'A cross-platform tutoring app connecting students and teachers with live classes, progress tracking, and real-time communication.',
    image: require('../assets/almehdi.jpg'),
    knowMore: '#',
    preview: '#'
  }
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  // Arrow navigation handlers
  const handlePrev = () => {
    setActive((a) => Math.max(a - 1, 0));
  };
  const handleNext = () => {
    setActive((a) => Math.min(a + 1, projects.length - 1));
  };

  const [animating, setAnimating] = useState(false);
  const prevActive = useRef(active);

  useEffect(() => {
    if (prevActive.current !== active) {
      setAnimating(true);
      const timeout = setTimeout(() => setAnimating(false), 400);
      prevActive.current = active;
      return () => clearTimeout(timeout);
    }
  }, [active]);

  const project = projects[active];

  return (
    <section id="projects" className="projects-section" ref={sectionRef} tabIndex={0}>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-arrow-nav">
        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className={"projects-arrow-btn" + (active === 0 ? " disabled" : "")}
          tabIndex={active === 0 ? -1 : 0}
          disabled={false}
        >
          &#8592;
        </button>
        <div className={"project-glass-row" + (animating ? " project-glass-row-anim" : "")} key={active}>
          <div className="project-glass-img-wrap">
            <img src={project.image} alt="project visual" className="project-glass-img" />
          </div>
          <div className="project-glass-card">
            <h3 className="project-glass-title">{project.title}</h3>
            <div className="project-glass-subtitle">{project.subtitle}</div>
            <div className="project-glass-desc">{project.desc}</div>
          </div>
        </div>
        <button
          onClick={handleNext}
          aria-label="Next project"
          className={"projects-arrow-btn" + (active === projects.length - 1 ? " disabled" : "")}
          tabIndex={active === projects.length - 1 ? -1 : 0}
          disabled={false}
        >
          &#8594;
        </button>
      </div>
      {/* Dots indicator */}
      <div className="projects-dots">
        {projects.map((_, idx) => (
          <span
            key={idx}
            className={"projects-dot" + (idx === active ? " active" : "")}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
