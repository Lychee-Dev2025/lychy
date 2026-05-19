import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

interface CTAProps {
  onOpenContact: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenContact }) => {
  return (
    <motion.section 
      className="cta-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="cta-content">
        <h2 className="cta-title">
          Have a project in mind?
        </h2>
        <p className="cta-description">
          Let's build something amazing together. We're ready to turn your vision into a reality.
        </p>
        <motion.button 
          onClick={onOpenContact}
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ border: 'none', outline: 'none', cursor: 'pointer' }}
        >
          Start a Project
        </motion.button>
      </div>
      <div className="cta-glow"></div>
    </motion.section>
  );
};

export default CTA;
