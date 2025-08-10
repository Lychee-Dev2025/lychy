// src/App.js
import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import './App.css';

import Navbar from './components/Navbar';
import Connect from './components/Connect';
import BlurredBlobsBackground from './components/BlurredBlobsBackground';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import './Header.css';
import Footer from './components/Footer';

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
              <div style={{ maxWidth: '1100px', margin: '0 auto', borderRadius: '2.5rem', overflow: 'hidden', boxShadow: '0 8px 40px 0 rgba(171,13,38,0.10), 0 2px 8px 0 rgba(0,0,0,0.04)', position: 'relative', background: '#fff' }}>
                <BlurredBlobsBackground />
              </div>
              <h1 className="main-header-title">
                Launch Faster. Scale Smarter.
              </h1>
              <p className="main-header-desc">
                We build custom mobile apps, websites, and product designs that don’t just look good — they perform.
              </p>
            </header>
            <Services />
            <Stats />
            <Projects />
            <Connect />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
