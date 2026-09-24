import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'view' | 'explore'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered elements
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorType(target.getAttribute('data-cursor'));
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailer animation
  useEffect(() => {
    let animId;
    const followCursor = () => {
      setTrailerPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(followCursor);
    };
    animId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="custom-cursor-dot pointer-events-none hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          opacity: cursorType === 'default' ? 1 : 0,
        }}
      />
      <div
        className={`custom-cursor-ring pointer-events-none hidden md:flex ${
          cursorType === 'view' ? 'hover-view' : cursorType === 'explore' ? 'hover-explore' : ''
        }`}
        style={{
          transform: `translate3d(${trailerPos.x}px, ${trailerPos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorType === 'view' && <span className="cursor-text">VIEW</span>}
        {cursorType === 'explore' && <span className="cursor-text">EXPLORE</span>}
      </div>
    </>
  );
}
