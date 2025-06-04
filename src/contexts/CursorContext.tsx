import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CursorContextType {
  cursorType: string;
  setCursorType: (type: string) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    // Hide cursor when leaving window
    // Hide cursor when leaving window
    const handleMouseLeave = () => {};
    const handleMouseEnter = () => {};

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    // Add event listeners to interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('btn') || 
          target.closest('a') || 
          target.closest('button') ||
          target.closest('.btn')) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = (): CursorContextType => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};