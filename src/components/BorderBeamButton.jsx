import React from 'react';
import { BorderBeam } from '@stianlarsen/border-beam';

const BorderBeamButton = ({ onClick, children }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust beam size dynamically based on window width
  // let beamSize;
  // if (windowWidth < 480) {
  //   beamSize = Math.min(Math.max(windowWidth * 0.5, 150), 200); // Small screens (e.g., mobile)
  // } else if (windowWidth < 768) {
  //   beamSize = Math.min(Math.max(windowWidth * 0.4, 200), 280); // Medium screens (tablets)
  // } else {
  //   beamSize = Math.min(Math.max(windowWidth * 0.3, 250), 320); // Large screens (desktops)
  // }

  // Dynamically adjust font size based on window width
  let fontSize;
  if (windowWidth < 480) {
    fontSize = '1rem'; // Small screens
  } else if (windowWidth < 768) {
    fontSize = '1.2rem'; // Medium screens
  } else {
    fontSize = '1.3rem'; // Large screens
  }

  return (
    <div
      style={{
        marginTop: '50px', // <-- bump this to move button+beam down
        position: 'relative',
        display: 'inline-block',
        maxWidth: '100%',
        width: 'auto',
        borderRadius: '30px',
        justifyContent: 'center',     // Center horizontally
        alignItems: 'center',
      }}
    >
      <BorderBeam
        size={100}
        duration={3}
        colorFrom={hovered ? '#ab0d26' : '#ec2f55'}
        colorTo={hovered ? '#ab0d26' : '#ec2f55'}
        borderWidth={2}
        borderRadius={16}
      />
      <button
        onClick={onClick}
        className="rounded-2xl relative font-semibold border-beam-btn"
        style={{
          backgroundColor: 'transparent',
          color: '#64240c',
          padding: '0.75rem 2.5rem',
          minWidth: '100px',
          maxWidth: '100%',
          minHeight: '3.5rem',
          fontSize: fontSize,
          cursor: 'pointer',
          boxSizing: 'border-box',
          borderRadius: '30px',
          borderColor: hovered ? '#ffb3c1' : '#ab0d26',
          borderStyle: 'solid',
          borderWidth: '2px',
          transition: 'background 0.3s, color 0.3s, border-color 0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1.2,
          fontFamily: 'Sora, sans-serif',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          style={{
            display: 'inline-block',
            transition: 'transform 0.3s',
            transform: hovered ? 'translateX(-10px)' : 'translateX(0)',
          }}
        >
          {children}
        </span>
        {hovered && (
          <span
            style={{
              display: 'inline-block',
              opacity: 1,
              transform: 'translateX(6px) rotate(-30deg)',
              transition: 'opacity 0.3s, transform 0.3s',
              marginLeft: '8px',
            }}
          >
            →
          </span>
        )}
        <style>{`
          .border-beam-btn:hover {
            background: rgba(171, 13, 38, 0.85) !important;
            color: #fff !important;
          }
        `}</style>
      </button>
    </div>
  );
};

export default BorderBeamButton;
