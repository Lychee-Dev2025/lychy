import React, { useEffect, useState } from 'react';

import '../styles/ProgressBar.css';
import BorderBeamButton from './BorderBeamButton';

const logo = process.env.PUBLIC_URL + '/lychy_logo.svg'; // Updated to use logo from public folder

const COMPANY_NAME = "LYCHY";

const ProgressBar = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [logoMoved, setLogoMoved] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setReady(true);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // After initial pop up (0.6s), move logo left (0.5s)
    const moveLogoTimer = setTimeout(() => {
      setLogoMoved(true);
    }, 600);

    return () => clearTimeout(moveLogoTimer);
  }, []);

  useEffect(() => {
    if (logoMoved) {
      // Start typing effect when logo moved left
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        setTypedText((prev) => {
          if (currentIndex >= COMPANY_NAME.length+1) {
            clearInterval(typingInterval);
            return prev;
          }
          currentIndex++;
          return COMPANY_NAME.slice(0, currentIndex);
        });
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [logoMoved]);

  return (
    <div className="loader">
      <div className={`logo-container ${logoMoved ? 'moved' : ''}`}>
        <img src={logo} alt="Logo" className="logo" />
        {logoMoved && (
          <span className="company-name">{typedText}</span>
        )}
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      {/* {ready && (
        <button className="get-started-btn" onClick={onComplete} style={{
          marginTop: 24,
          padding: '0.75rem 2rem',
          borderRadius: 8,
          background: '#ab0d26',
          color: '#fff',
          fontWeight: 700,
          fontFamily: 'Sora, sans-serif',
          fontSize: '1.1rem',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 2px 8px #eee',
          transition: 'background 0.2s',
        }}>
          Get Started
        </button>
      )} */}
      {ready && (
        <BorderBeamButton onClick={onComplete}>
          Get Started
        </BorderBeamButton>
      )}
    </div>
  );
};

export default ProgressBar;
