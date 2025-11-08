import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const scrollToSection = (e, id) => {
  e.preventDefault();
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="footer-brand">
        <span className="footer-logo">Lychy</span>
        <p className="footer-desc">Building modern, beautiful, and functional web and mobile experiences.</p>
      </div>
      <div className="footer-links">
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#services" onClick={e => scrollToSection(e, '#services')}>Services</a>
          <a href="#projects" onClick={e => scrollToSection(e, '#projects')}>Projects</a>
          <a href="#about" onClick={e => scrollToSection(e, '#about')}>About</a>
          <a href="#connect" onClick={e => scrollToSection(e, '#connect')}>Contact</a>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <button
              type="button"
              className="social-link"
              aria-label="GitHub"
              onClick={() => window.open('https://github.com/Lychee-Dev2025', '_blank', 'noopener')}
            >
              <FontAwesomeIcon icon={faGithub} />
            </button>
            <button
              type="button"
              className="social-link"
              aria-label="LinkedIn"
              onClick={() => window.open('https://www.linkedin.com', '_blank', 'noopener')}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </button>
            <button
              type="button"
              className="social-link"
              aria-label="Instagram"
              onClick={() => window.open('https://www.instagram.com', '_blank', 'noopener')}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Lychy. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
