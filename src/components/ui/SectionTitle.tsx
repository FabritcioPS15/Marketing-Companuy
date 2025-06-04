import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false 
}) => {
  return (
    <motion.div 
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-300' : 'text-light-text-secondary dark:text-dark-text-secondary'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 bg-primary mt-4 ${center ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;