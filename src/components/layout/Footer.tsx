import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Facebook, Instagram, Linkedin, Twitter, Mail, PhoneCall, MapPin, Send, ArrowUpRight, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const serviceIcons = {
    'Branding': '🖋️',
    'Social Media': '📱',
    'Publicidad Digital': '📢',
    'SEO/SEM': '🔍',
    'Asesoría Estratégica': '💡'
  };

  return (
    <div className="relative overflow-hidden">
      {/* Partícula decorativas */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
            style={{
              width: Math.random() * 30 + 5,
              height: Math.random() * 30 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <motion.footer 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-light-bg-secondary dark:bg-dark-bg-secondary/90 dark:backdrop-blur-lg pt-20 pb-10 border-t border-gray-100 dark:border-gray-800/50 relative z-10"
      >
        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 mb-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 dark:from-primary/20 dark:to-blue-600/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 dark:border-gray-800/50 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    Mantente Actualizado
                  </motion.h3>
                  <motion.p 
                    className="text-light-text-secondary dark:text-dark-text-secondary max-w-lg"
                    whileHover={{ x: 5 }}
                  >
                    Suscríbete a nuestro newsletter para recibir las últimas noticias, estrategias y ofertas exclusivas.
                  </motion.p>
                </div>
                
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <motion.div 
                    className="relative flex-grow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu correo electrónico"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all ${
                      subscribed 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg shadow-primary/30 hover:shadow-primary/40'
                    }`}
                  >
                    {subscribed ? (
                      <>
                        <Check size={18} />
                        ¡Suscrito!
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Suscribirse
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
          >
            {/* Logo y Redes Sociales */}
            <motion.div variants={itemVariants}>
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                >
                  <Zap className="text-primary w-6 h-6" />
                </motion.div>
                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Nova Marketing
                </span>
              </Link>
              <motion.p 
                variants={itemVariants}
                className="text-light-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed"
              >
                Potenciamos tu marca con estrategias de marketing digital innovadoras y personalizadas.
              </motion.p>
              <motion.div variants={itemVariants} className="flex space-x-3">
  <SocialLink 
    href="#" 
    icon={<Facebook />} 
    label="Facebook" 
    bgColor="bg-blue-700 dark:bg-blue-200/10"
    hoverBgColor="bg-blue-600 dark:bg-blue-600"
  />
  <SocialLink 
    href="#" 
    icon={<Instagram />} 
    label="Instagram" 
    bgColor="bg-pink dark:bg-pink"
    hoverBgColor="bg-orange-500 dark:bg-pink-600"
  />
  <SocialLink 
    href="#" 
    icon={<Twitter />} 
    label="Twitter" 
    bgColor="bg-sky-400 dark:bg-sky-400/20"
    hoverBgColor="bg-sky-400 dark:bg-sky-500"
  />
  <SocialLink 
    href="#" 
    icon={<Linkedin />} 
    label="LinkedIn" 
    bgColor="bg-blue-500 dark:bg-blue-700/20"
    hoverBgColor="bg-blue-700 dark:bg-blue-800"
  />
              </motion.div>
            </motion.div>

            {/* Enlaces Rápidos */}
            <motion.div variants={itemVariants}>
              <motion.h4 
                whileHover={{ x: 5 }}
                className="text-lg font-semibold mb-6 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Enlaces Rápidos
              </motion.h4>
              <ul className="space-y-3">
                {['/', '/portfolio', '/services', '/plans', '/testimonials', '/contact'].map((path) => (
                  <motion.li 
                    key={path} 
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <FooterLink to={path}>
                      {path === '/' ? 'Inicio' : 
                      path === '/portfolio' ? 'Portafolio' :
                      path === '/services' ? 'Servicios' :
                      path === '/plans' ? 'Planes' :
                      path === '/testimonials' ? 'Testimonios' : 'Contacto'}
                    </FooterLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Servicios */}
            <motion.div variants={itemVariants}>
              <motion.h4 
                whileHover={{ x: 5 }}
                className="text-lg font-semibold mb-6 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Servicios
              </motion.h4>
              <ul className="space-y-3">
                {['Branding', 'Social Media', 'Publicidad Digital', 'SEO/SEM', 'Asesoría Estratégica'].map((service) => (
                  <motion.li 
                    key={service}
                    variants={itemVariants}
                    whileHover={{ 
                      x: 5,
                      backgroundColor: hoveredService === service ? 'rgba(59, 130, 246, 0.1)' : 'transparent'
                    }}
                    className="p-2 rounded-lg transition-colors"
                    onHoverStart={() => setHoveredService(service)}
                    onHoverEnd={() => setHoveredService(null)}
                  >
                    <a 
                      href="#"
                      className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-3 group"
                    >
                      <span className="text-xl">{serviceIcons[service as keyof typeof serviceIcons]}</span>
                      <span className="flex-1">{service}</span>
                      <motion.span
                        animate={{ 
                          x: hoveredService === service ? 3 : 0,
                          opacity: hoveredService === service ? 1 : 0
                        }}
                        className="text-primary"
                      >
                        <ArrowUpRight size={16} />
                      </motion.span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contacto */}
            <motion.div variants={itemVariants}>
              <motion.h4 
                whileHover={{ x: 5 }}
                className="text-lg font-semibold mb-6 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Contáctanos
              </motion.h4>
              <ul className="space-y-4">
                <motion.li 
                  variants={itemVariants}
                  className="flex items-start gap-3 text-light-text-secondary dark:text-dark-text-secondary group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                  </motion.div>
                  <span>Av. Principal 123, Ciudad</span>
                </motion.li>
                <motion.li 
                  variants={itemVariants}
                  className="flex items-center gap-3 text-light-text-secondary dark:text-dark-text-secondary group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                  >
                    <PhoneCall className="w-5 h-5 text-primary shrink-0" />
                  </motion.div>
                  <span>+51 999 999 999</span>
                </motion.li>
                <motion.li 
                  variants={itemVariants}
                  className="flex items-center gap-3 text-light-text-secondary dark:text-dark-text-secondary group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                  </motion.div>
                  <span>info@novamarketing.com</span>
                </motion.li>
                <motion.li 
                  variants={itemVariants}
                  className="mt-6"
                >
                  <motion.a
                    href="#"
                    whileHover={{ 
                      backgroundColor: '#3b82f6',
                      boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-primary/10 hover:bg-primary text-primary hover:text-white px-5 py-2.5 rounded-xl font-medium transition-all"
                  >
                    Enviar Mensaje
                  </motion.a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border-t border-gray-200 dark:border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Nova Marketing. Todos los derechos reservados.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a 
                  whileHover={{ y: -3, color: '#3b82f6' }}
                  href="#" 
                  className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Política de Privacidad
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, color: '#3b82f6' }}
                  href="#" 
                  className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Términos de Servicio
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, color: '#3b82f6' }}
                  href="#" 
                  className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Política de Cookies
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 transition-colors group ${
        isActive
          ? 'text-primary font-medium'
          : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary'
      }`
    }
  >
    {({ isActive }) => (
      <>
        <motion.span 
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            isActive 
              ? 'bg-primary' 
              : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-primary'
          }`}
          animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.3 }}
        ></motion.span>
        {children}
      </>
    )}
  </NavLink>
);

const SocialLink: React.FC<{ 
  href: string; 
  icon: React.ReactNode; 
  label: string;
  bgColor?: string;
  hoverBgColor?: string;
}> = ({
  href,
  icon,
  label,
  bgColor = 'bg-gray-100 dark:bg-gray-800',
  hoverBgColor = 'bg-primary'
}) => (
  <motion.a
    href={href}
    aria-label={label}
    whileHover={{ 
      y: -5, 
      scale: 1.1,
      backgroundColor: hoverBgColor.startsWith('#') ? hoverBgColor : undefined,
      color: 'white'
    }}
    whileTap={{ scale: 0.9 }}
    className={`w-10 h-10 flex items-center justify-center rounded-full ${bgColor} text-gray-600 dark:text-gray-300 hover:text-white transition-colors shadow-sm hover:shadow-glow hover:shadow-primary/30 ${hoverBgColor.startsWith('#') ? '' : `hover:${hoverBgColor} dark:hover:${hoverBgColor}`}`}
    style={hoverBgColor.startsWith('#') ? { '--tw-shadow-color': hoverBgColor } as React.CSSProperties : undefined}
  >
    {icon}
  </motion.a>
);

export default Footer;