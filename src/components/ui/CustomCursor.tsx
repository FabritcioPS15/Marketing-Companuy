import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../contexts/CursorContext';

const CustomCursor: React.FC = () => {
  const { cursorType } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseenter', () => setIsVisible(true));
    window.addEventListener('mouseleave', () => setIsVisible(false));

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseenter', () => setIsVisible(true));
      window.removeEventListener('mouseleave', () => setIsVisible(false));
    };
  }, [isVisible]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary z-[9999] pointer-events-none"
        style={{ mixBlendMode: 'difference' }}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          opacity: isVisible ? 1 : 0,
          scale: cursorType === 'hover' ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 500,
          restDelta: 0.001,
        }}
      />

      {/* Secondary cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-primary z-[9998] pointer-events-none"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          opacity: isVisible ? 0.6 : 0,
          scale: cursorType === 'hover' ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 200,
          restDelta: 0.001,
        }}
      />
    </>
  );
};

export default CustomCursor;