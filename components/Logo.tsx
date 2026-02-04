
import React, { useState, useId } from 'react';
import logoImage from './assets/logos/newlychy.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-14", variant = 'light' }) => {
  const [imageError, setImageError] = useState(false);
  // Generate unique ID for gradients to avoid conflicts between multiple instances
  const uniqueId = useId(); 
  const redGradientId = `logoRed-${uniqueId}`;
  const darkGradientId = `logoDark-${uniqueId}`;

  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className={`${className} aspect-square relative flex-shrink-0`}>
        {!imageError ? (
          <img 
            src={logoImage} 
            alt="Lychy Logo" 
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-sm"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id={redGradientId} x1="20" y1="180" x2="180" y2="20" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#be123c" />
                <stop offset="0.5" stopColor="#e11d48" />
                <stop offset="1" stopColor="#fb7185" />
              </linearGradient>
              <linearGradient id={darkGradientId} x1="50" y1="0" x2="150" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#450a0a" />
                <stop offset="1" stopColor="#7f1d1d" />
              </linearGradient>
            </defs>
            
            {/* Dark Top Crest */}
            <path 
              d="M 60 40
                 C 70 10, 110 10, 130 50
                 C 135 65, 125 75, 115 70
                 C 95 60, 80 55, 60 40 Z" 
              fill={`url(#${darkGradientId})`} 
            />
            
            {/* Main Red Wave */}
            <path 
              d="M 30 100
                 C 15 50, 70 50, 110 70
                 C 150 90, 180 120, 170 150
                 C 160 180, 130 170, 115 160
                 C 140 160, 150 140, 140 120
                 C 125 90, 70 90, 60 120
                 C 55 135, 65 150, 80 155
                 C 40 150, 20 130, 30 100 Z"
              fill={`url(#${redGradientId})`}
            />
          </svg>
        )}
      </div>
      <span className={`
        text-2xl font-extrabold tracking-tight
        ${variant === 'dark' ? 'text-white' : 'text-white'}
      `}>
        LYCHY
      </span>
    </div>
  );
};

export default Logo;
