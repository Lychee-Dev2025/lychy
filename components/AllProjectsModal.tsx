import React, { useEffect } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import './AllProjectsModal.css';

import almehdiImage from './assets/logos/almehdi2.png';
import novaImage from './assets/logos/nova1.png';
import freightImage from './assets/logos/freightpower.png';
import eventouryImage from './assets/logos/eventoury.png';
import pcImage from './assets/logos/pc.png';
import karakChaiImage from './assets/logos/karakchai.png';

const allProjects: Project[] = [
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
  {
    id: '4',
    title: 'Eventoury',
    category: 'Mobile Application',
    description: 'A comprehensive travel and event management application for seamless trip planning and booking experiences.',
    imageUrl: eventouryImage,
    demoUrl: 'https://www.behance.net/gallery/241990671/Eventoury',
  },
  {
    id: '5',
    title: 'Pet Care Companions',
    category: 'Mobile Application',
    description: 'A dedicated platform for pet owners providing pet care services, tracking, and companion matching.',
    imageUrl: pcImage,
    demoUrl: 'https://www.behance.net/gallery/241979209/Pet-Care-Companions',
  },
  {
    id: '6',
    title: 'Karak Chai',
    category: 'Web Application',
    description: 'An elegant digital presence and ordering system for an authentic tea and cafe franchise.',
    imageUrl: karakChaiImage,
    demoUrl: 'https://www.behance.net/lychy',
  }
];

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AllProjectsModal: React.FC<AllProjectsModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="projects-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="projects-modal-content"
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100vh', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="projects-modal-header">
              <h2>All <span className="gradient-text">Projects</span></h2>
              <button className="close-modal-btn" onClick={onClose} aria-label="Close modal">
                <X size={24} />
              </button>
            </div>
            
            <div className="projects-modal-body">
              <div className="projects-grid modal-grid">
                {allProjects.map((project, index) => (
                  <motion.a
                    key={project.id}
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4, ease: easeOut }}
                  >
                    <div className="image-container">
                      <img src={project.imageUrl} alt={project.title} className="project-image" />
                      <div className="image-overlay"></div>
                    </div>
                    <div className="card-content">
                      <span className="category-pill">
                        {project.category
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AllProjectsModal;