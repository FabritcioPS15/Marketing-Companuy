import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp, Target, Users, Award, Zap } from 'lucide-react';
import ParticleBackground from '../components/ui/ParticleBackground';
import FloatingShapes from '../components/ui/FloatingShapes';
import SectionTitle from '../components/ui/SectionTitle';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Nova Marketing | Agencia de Marketing Digital';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <ParticleBackground />
        <FloatingShapes />
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Potenciamos tu marca en el <span className="text-primary">mundo digital</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Estrategias de marketing digital personalizadas para emprendedores y pequeñas empresas.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link to="/portfolio" className="relative group">
                <motion.span 
                  className="absolute inset-0 rounded-lg bg-primary/20 dark:bg-primary/10 filter blur-md"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <button className="btn-primary relative z-10 flex items-center group">
                  Ver Portafolio
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact" className="btn-outline">
                Contáctanos
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Sobre Nosotros" 
            subtitle="Conoce más sobre nuestra agencia de marketing digital"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Nuestra Historia</h3>
              <p className="mb-4 text-light-text-secondary dark:text-dark-text-secondary">
                Fundada en 2018, Nova Marketing nació con la misión de ofrecer soluciones de marketing digital accesibles y efectivas para emprendedores y pequeñas empresas que buscan destacar en el mundo digital.
              </p>
              <p className="mb-4 text-light-text-secondary dark:text-dark-text-secondary">
                A lo largo de los años, hemos ayudado a cientos de negocios a transformar su presencia digital, incrementar su visibilidad y alcanzar sus objetivos comerciales mediante estrategias personalizadas.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <AboutCard 
                icon={<Target className="w-10 h-10 text-primary" />}
                title="Misión"
                description="Potenciar el crecimiento de nuestros clientes mediante estrategias de marketing digital efectivas y personalizadas."
              />
              <AboutCard 
                icon={<TrendingUp className="w-10 h-10 text-primary" />}
                title="Visión"
                description="Ser reconocidos como líderes en innovación y excelencia en marketing digital para pequeñas empresas."
              />
              <AboutCard 
                icon={<Award className="w-10 h-10 text-primary" />}
                title="Valores"
                description="Integridad, creatividad, innovación, compromiso y resultados tangibles."
              />
              <AboutCard 
                icon={<Users className="w-10 h-10 text-primary" />}
                title="Equipo"
                description="Profesionales apasionados y experimentados en marketing digital, diseño y desarrollo."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
            <path d="M0,50 L100,50" stroke="white" strokeWidth="0.5"></path>
            <path d="M50,0 L50,100" stroke="white" strokeWidth="0.5"></path>
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5"></circle>
            <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5"></circle>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para potenciar tu presencia digital?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              Agenda una consultoría gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-white/90 transition-colors">
              Consultoría Gratuita <Zap className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-light-text-secondary dark:text-dark-text-secondary">{description}</p>
    </motion.div>
  );
};

export default HomePage;