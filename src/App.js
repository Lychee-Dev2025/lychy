// src/App.js
import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import './App.css';


import Navbar from './components/Navbar';
import Connect from './components/Connect';
import ParticlesBackground from './components/ParticlesBackground';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import './Header.css';
import Footer from './components/Footer';
import { ReactComponent as HeroImg } from './assets/hero_img.svg';
import AboutUs from './components/AboutUs';

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="App">
      {!showMain ? (
        <ProgressBar onComplete={() => setShowMain(true)} />
      ) : (
        <>
          <Navbar />
          <main>
            <header className="main-header">
              <div 
                style={{ 
                  maxWidth: '100%', 
                  margin: '0 auto', 
                  borderRadius: '2.5rem', 
                  overflow: 'hidden', 
                  position: 'relative', 
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'transparent'
                }}
              >
                <ParticlesBackground />
                <div style={{ position: 'relative', zIndex: 1, width: '60%', padding: '1rem' }}>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="main-header-title">
                      Your Trusted Freelance Software Development Partner.
                    </h1>
                    <p className="main-header-desc">
                      Transform your vision into reality with expert freelance development services. We build custom mobile apps, websites, and product designs that don’t just look good — they perform.
                    </p>
                    <div className='header-buttons'>
                      <a href="#connect" className='btn primary'>Get Free Consultation</a>
                      <a href="#services" className='btn secondary'>Explore Services</a>
                    </div>
                  </div>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1, marginTop: '1rem' }}>
                  <HeroImg 
                    className="hero-svg-img"
                    style={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '50%', paddingRight: '2rem', marginTop: '3rem' }}
                  />
                </div>
              </div>
              {/* The header text is now inside the styled container above the particles */}
            </header>
            <Services />
            <Stats />
            <Projects />
            <AboutUs />
            <Connect />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;

// Responsive style for hero image
const style = document.createElement('style');
style.innerHTML = `
  @media (max-width: 700px) {
    .hero-svg-img {
      display: none !important;
    }
  }
`;
document.head.appendChild(style);
