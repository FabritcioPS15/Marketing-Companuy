import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/51958077827"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-40 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-[#128C7E] transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 200, 
        damping: 10,
        delay: 1 
      }}
    >
      <div className="relative">
        <FaWhatsapp className="w-7 h-7" />
        <motion.span 
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            repeatType: "loop"
          }}
        />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;