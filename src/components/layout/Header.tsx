import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Menu, X, Moon, Sun, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl py-3 border-b border-white/20 dark:border-gray-800/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="text-primary w-8 h-8" />
          </motion.div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Nova Marketing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLinks />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm"
            aria-label="Toggle Menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              transition: { type: 'spring', damping: 25 }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { duration: 0.3 }
            }}
            className="md:hidden bg-gray-900/95 backdrop-blur-2xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-3 flex flex-col gap-2">
              <MobileNavLinks closeMobileMenu={() => setIsMobileMenuOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLinks: React.FC = () => {
  return (
    <>
      {['/', '/portfolio', '/services', '/plans', '/testimonials', '/contact'].map((path) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `relative px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive
                ? 'text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.span
                  layoutId="activeNavItem"
                  className="absolute inset-0 bg-primary rounded-lg shadow-glow"
                  style={{
                    boxShadow: '0 0 15px 3px rgba(59, 130, 246, 0.7)'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {path === '/' ? 'Inicio' : 
                 path === '/portfolio' ? 'Portafolio' :
                 path === '/services' ? 'Servicios' :
                 path === '/plans' ? 'Planes' :
                 path === '/testimonials' ? 'Testimonios' : 'Contacto'}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </>
  );
};

const MobileNavLinks: React.FC<{ closeMobileMenu: () => void }> = ({ closeMobileMenu }) => {
  return (
    <>
      {['/', '/portfolio', '/services', '/plans', '/testimonials', '/contact'].map((path) => (
        <NavLink
          key={path}
          to={path}
          onClick={closeMobileMenu}
          className={({ isActive }) =>
            `relative px-5 py-3 rounded-lg transition-all duration-300 ${
              isActive
                ? 'text-white font-semibold'
                : 'text-gray-300 font-medium hover:bg-gray-800/50'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.span
                  layoutId="activeMobileNavItem"
                  className="absolute inset-0 bg-primary rounded-lg shadow-glow"
                  style={{
                    boxShadow: '0 0 15px 3px rgba(59, 130, 246, 0.7)'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {path === '/' ? 'Inicio' : 
                 path === '/portfolio' ? 'Portafolio' :
                 path === '/services' ? 'Servicios' :
                 path === '/plans' ? 'Planes' :
                 path === '/testimonials' ? 'Testimonios' : 'Contacto'}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </>
  );
};

const ThemeToggle: React.FC<{ theme: string; toggleTheme: () => void }> = ({
  theme,
  toggleTheme,
}) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm transition-colors"
      aria-label="Toggle Theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-700" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-300" />
      )}
    </motion.button>
  );
};

export default Header;