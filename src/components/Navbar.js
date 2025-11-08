import { useState } from 'react';
import '../styles/NavBar.css';

const logo = process.env.PUBLIC_URL + '/lychy_logo.svg';

const scrollToSection = (e, id) => {
  e.preventDefault();
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="LychyDev Logo" className="navbar-logo" />
        <span className="navbar-company">LYCHY</span>
      </div>

      <div
        className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={handleToggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter') handleToggleMenu(); }}
      >
        <div></div>
        <div></div>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#services" className="navbar-link" onClick={e => scrollToSection(e, '#services')}>Services</a></li>
        <li><a href="#projects" className="navbar-link" onClick={e => scrollToSection(e, '#projects')}>Projects</a></li>
        <li><a href="#about" className="navbar-link" onClick={e => scrollToSection(e, '#about')}>About</a></li>
        <li><a href="#connect" className="navbar-link" onClick={e => scrollToSection(e, '#connect')}>Connect</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
