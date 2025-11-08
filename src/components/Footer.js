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
            <a href="#" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
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
