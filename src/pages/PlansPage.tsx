import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Check, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlanFeature {
  name: string;
  basic: boolean | string;
  intermediate: boolean | string;
  premium: boolean | string;
}

const planFeatures: PlanFeature[] = [
  {
    name: 'Análisis de mercado y competencia',
    basic: true,
    intermediate: true,
    premium: true,
  },
  {
    name: 'Estrategia de marketing digital',
    basic: 'Básica',
    intermediate: 'Avanzada',
    premium: 'Personalizada',
  },
  {
    name: 'Gestión de redes sociales',
    basic: '2 redes',
    intermediate: '4 redes',
    premium: 'Todas las necesarias',
  },
  {
    name: 'Publicaciones mensuales',
    basic: '12',
    intermediate: '20',
    premium: '30+',
  },
  {
    name: 'Diseño de gráficas para redes',
    basic: true,
    intermediate: true,
    premium: true,
  },
  {
    name: 'Estrategia de contenido',
    basic: false,
    intermediate: true,
    premium: true,
  },
  {
    name: 'Campañas de publicidad pagada',
    basic: false,
    intermediate: '1 campaña',
    premium: '3 campañas',
  },
  {
    name: 'SEO básico',
    basic: false,
    intermediate: true,
    premium: true,
  },
  {
    name: 'SEO avanzado + SEM',
    basic: false,
    intermediate: false,
    premium: true,
  },
  {
    name: 'Informes de resultados',
    basic: 'Mensual',
    intermediate: 'Quincenal',
    premium: 'Semanal',
  },
  {
    name: 'Asesoramiento estratégico',
    basic: false,
    intermediate: 'Mensual',
    premium: 'Semanal',
  },
];

const PlansPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'annual'>('monthly');
  
  useEffect(() => {
    document.title = 'Planes | Nova Marketing';
  }, []);

  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nuestros Planes" 
          subtitle="Soluciones adaptadas a cada etapa de crecimiento de tu negocio"
          center
        />
        
        {/* Pricing Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-1 rounded-lg inline-flex">
            <button
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'monthly'
                  ? 'bg-white dark:bg-dark-bg shadow-sm'
                  : 'text-light-text-secondary dark:text-dark-text-secondary'
              }`}
              onClick={() => setActiveTab('monthly')}
            >
              Mensual
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-all relative ${
                activeTab === 'annual'
                  ? 'bg-white dark:bg-dark-bg shadow-sm'
                  : 'text-light-text-secondary dark:text-dark-text-secondary'
              }`}
              onClick={() => setActiveTab('annual')}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-0.5 rounded-full">
                20% dto.
              </span>
            </button>
          </div>
        </div>
        
        {/* Desktop Pricing Table */}
        <div className="hidden lg:block mb-16">
          <div className="bg-white dark:bg-dark-bg-secondary rounded-xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 text-center">
              <div className="p-6 bg-light-bg-secondary dark:bg-dark-bg border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold">Planes</h3>
              </div>
              <PlanHeader 
                title="Básico" 
                price={activeTab === 'monthly' ? 299 : 239}
                color="primary"
                description="Ideal para emprendedores"
              />
              <PlanHeader 
                title="Intermedio" 
                price={activeTab === 'monthly' ? 499 : 399}
                color="secondary"
                description="Para pequeñas empresas"
                recommended
              />
              <PlanHeader 
                title="Premium" 
                price={activeTab === 'monthly' ? 899 : 719}
                color="accent"
                description="Para negocios en crecimiento"
              />
            </div>
            
            {/* Features */}
            {planFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-4 border-b border-gray-200 dark:border-gray-700 ${
                  index % 2 === 0 ? 'bg-gray-50 dark:bg-dark-bg-secondary/50' : 'bg-white dark:bg-dark-bg-secondary'
                }`}
              >
                <div className="p-4 flex items-center">
                  <span>{feature.name}</span>
                </div>
                <FeatureCell value={feature.basic} />
                <FeatureCell value={feature.intermediate} />
                <FeatureCell value={feature.premium} />
              </div>
            ))}
            
            {/* CTA */}
            <div className="grid grid-cols-4 text-center">
              <div className="p-6"></div>
              <div className="p-6">
                <Link 
                  to="/contact" 
                  className="btn btn-outline w-full"
                >
                  Empezar Ahora
                </Link>
              </div>
              <div className="p-6">
                <Link 
                  to="/contact" 
                  className="btn btn-secondary w-full"
                >
                  Empezar Ahora
                </Link>
              </div>
              <div className="p-6">
                <Link 
                  to="/contact" 
                  className="btn btn-accent w-full"
                >
                  Empezar Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Pricing Cards */}
        <div className="lg:hidden space-y-8">
          <PlanCard
            title="Básico"
            price={activeTab === 'monthly' ? 299 : 239}
            color="primary"
            description="Ideal para emprendedores"
            features={planFeatures.map(f => ({ name: f.name, value: f.basic }))}
          />
          
          <PlanCard
            title="Intermedio"
            price={activeTab === 'monthly' ? 499 : 399}
            color="secondary"
            description="Para pequeñas empresas"
            recommended
            features={planFeatures.map(f => ({ name: f.name, value: f.intermediate }))}
          />
          
          <PlanCard
            title="Premium"
            price={activeTab === 'monthly' ? 899 : 719}
            color="accent"
            description="Para negocios en crecimiento"
            features={planFeatures.map(f => ({ name: f.name, value: f.premium }))}
          />
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <SectionTitle 
            title="Preguntas Frecuentes" 
            subtitle="Resolvemos tus dudas sobre nuestros planes"
            center
          />
          
          <div className="max-w-3xl mx-auto">
            <FAQ 
              question="¿Puedo cambiar de plan en cualquier momento?" 
              answer="Sí, puedes actualizar o cambiar tu plan en cualquier momento. Si actualizas a un plan superior, se te cobrará la diferencia proporcional al tiempo restante. Si cambias a un plan inferior, el cambio se aplicará en el siguiente ciclo de facturación."
            />
            <FAQ 
              question="¿Qué incluye exactamente la estrategia de marketing digital?" 
              answer="La estrategia de marketing digital incluye un análisis de tu negocio, competencia y mercado, definición de objetivos, identificación de canales óptimos, planificación de contenidos y acciones, y establecimiento de KPIs. La profundidad y alcance dependen del plan seleccionado."
            />
            <FAQ 
              question="¿Cómo se gestionan las campañas de publicidad pagada?" 
              answer="Nos encargamos de la creación, configuración, monitorización y optimización de tus campañas en plataformas como Google Ads, Facebook Ads e Instagram Ads. El presupuesto para estas campañas no está incluido en el precio del plan."
            />
            <FAQ 
              question="¿Cuánto tiempo tarda en verse resultados?" 
              answer="Los resultados varían según los objetivos, el sector y la competencia. Generalmente, las primeras mejoras en engagement y visibilidad se notan en 1-2 meses, mientras que resultados más significativos como aumento de ventas o leads cualificados suelen verse a partir de 3-6 meses de trabajo consistente."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface PlanHeaderProps {
  title: string;
  price: number;
  color: string;
  description: string;
  recommended?: boolean;
}

const PlanHeader: React.FC<PlanHeaderProps> = ({ 
  title, 
  price, 
  color, 
  description, 
  recommended = false 
}) => {
  return (
    <div className={`p-6 text-center relative ${recommended ? `bg-${color}/10 dark:bg-${color}/5 border-t-4 border-${color}` : 'border-b border-gray-200 dark:border-gray-700'}`}>
      {recommended && (
        <span className={`absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-${color} text-white text-xs px-2 py-1 rounded-lg`}>
          Recomendado
        </span>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-center justify-center">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-light-text-secondary dark:text-dark-text-secondary ml-1">/mes</span>
      </div>
      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-2">
        {description}
      </p>
    </div>
  );
};

interface FeatureCellProps {
  value: boolean | string;
}

const FeatureCell: React.FC<FeatureCellProps> = ({ value }) => {
  return (
    <div className="p-4 text-center">
      {typeof value === 'boolean' ? (
        value ? (
          <Check className="mx-auto text-success w-5 h-5" />
        ) : (
          <X className="mx-auto text-error w-5 h-5" />
        )
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

interface PlanCardProps {
  title: string;
  price: number;
  color: string;
  description: string;
  features: { name: string; value: boolean | string }[];
  recommended?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ 
  title, 
  price, 
  color, 
  description, 
  features, 
  recommended = false 
}) => {
  return (
    <motion.div 
      className={`bg-white dark:bg-dark-bg-secondary rounded-xl shadow-lg overflow-hidden ${
        recommended ? `border-t-4 border-${color}` : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`p-6 ${recommended ? `bg-${color}/10 dark:bg-${color}/5` : ''} relative`}>
        {recommended && (
          <span className={`absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-${color} text-white text-xs px-2 py-1 rounded-lg`}>
            Recomendado
          </span>
        )}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline mb-1">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-light-text-secondary dark:text-dark-text-secondary ml-1">/mes</span>
        </div>
        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
          {description}
        </p>
      </div>
      
      <div className="p-6 border-t border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold mb-4">Características:</h4>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {typeof feature.value === 'boolean' ? (
                feature.value ? (
                  <Check className="text-success w-5 h-5 mr-2 shrink-0 mt-0.5" />
                ) : (
                  <X className="text-error w-5 h-5 mr-2 shrink-0 mt-0.5" />
                )
              ) : (
                <Check className="text-success w-5 h-5 mr-2 shrink-0 mt-0.5" />
              )}
              <span>
                {feature.name}
                {typeof feature.value !== 'boolean' && feature.value && (
                  <span className="font-semibold text-primary"> ({feature.value})</span>
                )}
              </span>
            </li>
          ))}
        </ul>
        
        <Link 
          to="/contact" 
          className={`btn btn-${color} w-full justify-center`}
        >
          Empezar Ahora <ChevronRight className="ml-1 w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
};

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pt-4 pb-2 text-light-text-secondary dark:text-dark-text-secondary">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export default PlansPage;