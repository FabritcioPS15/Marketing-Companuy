import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = '404 - Página no encontrada | Nova Marketing';
  }, []);

  // Glitch effect animation variants
  const glitchText = {
    animate: {
      textShadow: [
        '0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), -0.025em 0.05em 0 rgba(0,0,255,0.75)',
        '0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), -0.025em 0.05em 0 rgba(0,0,255,0.75)',
        '-0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75)',
        '-0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75)',
        '0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75)',
        '0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75)',
      ],
      skew: ['0deg', '-0.5deg', '0.5deg', '0deg'],
    },
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-blue-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleX: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`square-${i}`}
              className="absolute w-8 h-8 border border-purple-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-8xl md:text-9xl font-bold mb-6"
          animate={{ 
            x: [0, -3, 5, -5, 4, 0],
            y: [0, 4, -6, 8, -4, 0] 
          }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity, 
            repeatType: "mirror", 
            repeatDelay: 5 
          }}
        >
          <motion.span
            {...glitchText}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          >
            404
          </motion.span>
        </motion.h1>
        
        <motion.div
          animate={{
            opacity: [1, 0.5, 0.8, 0.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          <motion.h2 
            className="text-2xl md:text-4xl font-bold mb-4"
            {...glitchText}
          >
            Llegaste al final...
          </motion.h2>
          <p className="text-xl md:text-2xl mb-8">
            O tal vez... nuestra imaginación se desbordó
          </p>
        </motion.div>
        
        <Link to="/">
          <motion.button
            className="btn bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 8px rgb(255,255,255)",
              boxShadow: "0 0 15px rgba(255,0,255,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              borderColor: ["rgba(255,0,255,0.5)", "rgba(0,255,255,0.5)", "rgba(255,255,0,0.5)", "rgba(255,0,255,0.5)"],
              textShadow: [
                "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff",
                "0 0 4px #fff, 0 0 10px #ff00de, 0 0 19px #ff00de",
                "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff",
                "0 0 4px #fff, 0 0 10px #00ffff, 0 0 19px #00ffff",
                "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff",
              ],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "mirror"
            }}
          >
            <Home className="mr-2" /> 
            <span className="relative z-10">Volver al inicio</span>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;