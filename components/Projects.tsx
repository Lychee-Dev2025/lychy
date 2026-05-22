import React, { useState } from 'react';
import { motion, easeOut, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
import almehdiImage from './assets/logos/almehdi2.png';
import novaImage from './assets/logos/nova1.png';
import freightImage from './assets/logos/freightpower.png';
import AllProjectsModal from './AllProjectsModal';
import './Projects.css';

const projects: Project[] = [
  {
    id: '1',
    title: 'Al Mehdi Online School',
    category: 'Mobile Application',
    description: 'A complete digital learning platform offering live classes, recorded lectures, and progress tracking.',
    imageUrl: almehdiImage,
    demoUrl: 'https://www.behance.net/gallery/241663619/Al-Mehdi-Online-School',
  },
  {
    id: '2',
    title: 'Nova Prep',
    category: 'SaaS Platform',
    description: 'An intelligent practice app that helps users prepare for technical and behavioral interviews using AI.',
    imageUrl: novaImage,
    demoUrl: 'https://www.behance.net/gallery/241725761/NovaPrep',
  },
  {
    id: '3',
    title: 'FreightPower',
    category: 'AI Logistics SaaS Platform',
    description: 'An AI based platform that connects drivers, carriers, and shippers with live tracking and load matching.',
    imageUrl: freightImage,
    demoUrl: 'https://www.behance.net/gallery/241794539/Freight-Power',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const Projects: React.FC = () => {
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Our Work</p>
          <h3 className="projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h3>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              variants={itemVariants}
            >
              <div className="image-container">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <span className="category-pill">{project.category
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join(' ')}
                </span>
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="case-study-link">
                  View Case Study <ArrowRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="view-all-btn-container">
          <button onClick={() => setIsAllProjectsOpen(true)} className="btn btn-secondary">
            View All Projects
          </button>
        </div>
      </div>
      
      <AllProjectsModal 
        isOpen={isAllProjectsOpen} 
        onClose={() => setIsAllProjectsOpen(false)} 
      />
    </section>
  );
};

export default Projects;