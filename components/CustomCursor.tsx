import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-lychy-400 transition-all duration-150 ${
            isPointer ? 'w-3 h-3' : 'w-2 h-2'
          }`}
          style={{
            boxShadow: '0 0 15px rgba(106, 227, 255, 0.8), 0 0 30px rgba(106, 227, 255, 0.5), 0 0 45px rgba(106, 227, 255, 0.3)',
          }}
        />
      </div>

      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease-out, height 0.2s ease-out',
        }}
      >
        <div
          className={`rounded-full border-2 border-lychy-400/50 transition-all duration-200 ${
            isPointer ? 'w-14 h-14 border-lychy-400/70' : 'w-10 h-10'
          }`}
          style={{
            boxShadow: '0 0 20px rgba(106, 227, 255, 0.3), inset 0 0 10px rgba(106, 227, 255, 0.1)',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
