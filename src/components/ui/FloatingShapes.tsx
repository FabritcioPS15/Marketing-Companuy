import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Circle */}
      <motion.div
        className="absolute top-1/4 left-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-primary/10 dark:bg-primary/5"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Square */}
      <motion.div
        className="absolute top-1/3 right-10 md:right-20 w-16 h-16 md:w-32 md:h-32 rounded-lg bg-secondary/10 dark:bg-secondary/5"
        animate={{
          y: [0, 40, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Triangle */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-0 h-0 border-l-[50px] border-l-transparent border-b-[86.6px] border-b-accent/10 dark:border-b-accent/5 border-r-[50px] border-r-transparent"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Diamond */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-20 h-20 md:w-32 md:h-32 bg-success/10 dark:bg-success/5"
        style={{
          transform: "rotate(45deg)"
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Small dot pattern */}
      <div className="absolute top-2/3 left-1/3 grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary/20 dark:bg-primary/10"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingShapes;