import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/ui/SectionTitle';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Share2, 
  BarChart2, 
  Search, 
  LineChart, 
  ChevronRight 
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Branding',
    description: 'Desarrollamos la identidad visual y verbal de tu marca para diferenciarte en el mercado y conectar con tu audiencia.',
    icon: <Palette className="w-12 h-12" />,
    benefits: [
      'Diseño de logotipo y sistema de identidad visual',
      'Guía de estilo y manual de marca',
      'Estrategia de naming y posicionamiento',
      'Diseño de packaging y material promocional'
    ],
    color: 'primary'
  },
  {
    id: 2,
    title: 'Social Media',
    description: 'Gestionamos tus redes sociales con contenido estratégico que impulsa la interacción y el crecimiento de tu comunidad.',
    icon: <Share2 className="w-12 h-12" />,
    benefits: [
      'Estrategia de contenido y calendario editorial',
      'Creación y diseño de contenido para todas las plataformas',
      'Gestión de comunidad y respuesta a comentarios',
      'Análisis de métricas y optimización continua'
    ],
    color: 'secondary'
  },
  {
    id: 3,
    title: 'Publicidad Digital',
    description: 'Creamos y optimizamos campañas publicitarias en plataformas digitales para maximizar tu inversión y alcanzar tus objetivos.',
    icon: <BarChart2 className="w-12 h-12" />,
    benefits: [
      'Campañas de Google Ads y Facebook Ads',
      'Segmentación precisa de audiencias',
      'Diseño de creatividades impactantes',
      'Monitoreo, análisis y optimización de resultados'
    ],
    color: 'accent'
  },
  {
    id: 4,
    title: 'SEO/SEM',
    description: 'Mejoramos tu visibilidad en buscadores para atraer tráfico cualificado a tu sitio web y convertirlo en clientes.',
    icon: <Search className="w-12 h-12" />,
    benefits: [
      'Auditoría SEO completa y plan de acción',
      'Optimización on-page y contenidos SEO',
      'Estrategia de link building',
      'Monitoreo de posiciones y análisis de competencia'
    ],
    color: 'success'
  },
  {
    id: 5,
    title: 'Asesoría Estratégica',
    description: 'Te guiamos en la definición e implementación de estrategias de marketing digital personalizadas para tu negocio.',
    icon: <LineChart className="w-12 h-12" />,
    benefits: [
      'Diagnóstico de situación actual',
      'Definición de objetivos y KPIs',
      'Plan de marketing digital integral',
      'Consultoría y seguimiento periódico'
    ],
    color: 'warning'
  }
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Servicios | Nova Marketing';
  }, []);
  
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="Nuestros Servicios" 
              subtitle="Soluciones personalizadas para impulsar tu presencia digital"
              center
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nuestro Proceso" 
            subtitle="Así trabajamos para asegurar el éxito de tu proyecto"
          />
          
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-1 bg-primary/20 -ml-[0.5px] md:-translate-x-[0.5px]"></div>
            
            <div className="space-y-12">
              <ProcessStep 
                number={1} 
                title="Diagnóstico y Estrategia" 
                description="Analizamos tu situación actual, competencia y objetivos para definir la estrategia más adecuada para tu negocio." 
              />
              <ProcessStep 
                number={2} 
                title="Planificación" 
                description="Desarrollamos un plan de acción detallado con calendario, recursos necesarios y KPIs para medir el éxito."
                right 
              />
              <ProcessStep 
                number={3} 
                title="Implementación" 
                description="Ejecutamos las acciones planificadas con un enfoque metódico y adaptable a los cambios del mercado." 
              />
              <ProcessStep 
                number={4} 
                title="Medición y Optimización" 
                description="Monitorizamos constantemente los resultados para optimizar las estrategias y maximizar el retorno de inversión."
                right 
              />
            </div>
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
              ¿Listo para impulsar tu negocio?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              Conoce nuestros planes diseñados para cada etapa de crecimiento.
            </p>
            <Link to="/plans" className="btn bg-white text-primary hover:bg-white/90 transition-colors inline-flex items-center">
              Ver Planes <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-white dark:bg-dark-bg-secondary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}
    >
      <div className={`p-6 bg-${service.color}/10 dark:bg-${service.color}/5 border-b-2 border-${service.color}`}>
        <div className={`w-16 h-16 rounded-lg bg-${service.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-light-text-secondary dark:text-dark-text-secondary">{service.description}</p>
      </div>
      
      <div className="p-6">
        <h4 className="font-semibold mb-3">Beneficios:</h4>
        <ul className="space-y-2">
          {service.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start">
              <span className={`text-${service.color} mr-2`}>•</span>
              <span className="text-light-text-secondary dark:text-dark-text-secondary">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  right?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, right = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative">
      {/* Circle on timeline */}
      <div className="absolute top-0 left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold -ml-4 md:-translate-x-1/2 z-10">
        {number}
      </div>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: right ? 30 : -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`ml-12 md:ml-0 ${right ? 'md:ml-auto' : 'md:mr-auto'} md:w-[calc(50%-40px)]`}
      >
        <div className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;