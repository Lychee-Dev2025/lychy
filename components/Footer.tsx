import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Mail, MapPin } from 'lucide-react';
import logoImage from './assets/logos/newlychy.png';
import './Footer.css';

interface FooterProps {
  onOpenContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <motion.div
          className="footer-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImage} alt="Lychy Logo" className="footer-logo-image" />
              <span className="footer-logo-text">LYCHY</span>
            </div>
            <p className="footer-tagline">
              Architecting digital excellence from concept to cloud. We are a team of passionate developers and designers creating bespoke software solutions that drive results.
            </p>
            <div className="footer-social">
              <motion.a href="https://github.com/Lychee-Dev2025" target="_blank" rel="noopener noreferrer" className="footer-social-link" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <FaGithub size={18} />
              </motion.a>
              <motion.a href="https://www.linkedin.com/company/lychy-inc/" target="_blank" rel="noopener noreferrer" className="footer-social-link" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a href="https://www.instagram.com/lychy_dev?igsh=eGt1MWc1NmRicjFh" target="_blank" rel="noopener noreferrer" className="footer-social-link" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <FaInstagram size={18} />
              </motion.a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <a className="footer-link" href="#services">Services</a>
            <a className="footer-link" href="#projects">Projects</a>
            <a className="footer-link" href="#about">About</a>
            <a 
              className="footer-link" 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
            >
              Start a Project
            </a>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="footer-contact-row">
              <Mail size={16} />
              <span>hello@lychy.dev</span>
            </div>
            <div className="footer-contact-row">
              <MapPin size={16} />
              <span>Islamabad, Pakistan</span>
            </div>
            <div className="footer-availability">
              <span className="availability-dot"></span>
              <span className="availability-text">Available for new projects</span>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <span>© {year} Lychy. All Rights Reserved.</span>
          <span>Designed & Built by Lychy.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
