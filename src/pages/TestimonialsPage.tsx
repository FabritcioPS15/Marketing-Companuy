import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import SectionTitle from '../components/ui/SectionTitle';
import { Star, Quote } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María Rodríguez",
    position: "Fundadora",
    company: "Renacer Café",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    text: "Nova Marketing transformó por completo nuestra presencia digital. El nuevo branding y estrategia de redes sociales aumentaron nuestras ventas en un 45% en solo tres meses. Su equipo es altamente profesional, creativo y siempre disponible para resolver cualquier duda."
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    position: "Director de Marketing",
    company: "TechSolutions Inc.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    text: "Llevamos trabajando con Nova Marketing más de un año y los resultados han superado todas nuestras expectativas. Su enfoque estratégico en SEO y SEM ha multiplicado nuestros leads cualificados y mejorado significativamente nuestro ROI en publicidad digital."
  },
  {
    id: 3,
    name: "Laura Sánchez",
    position: "CEO",
    company: "EcoVida Natural",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4,
    text: "Gracias a Nova Marketing, nuestra marca ha conseguido conectar con una audiencia más amplia y comprometida. Su estrategia de contenidos y gestión de redes sociales ha sido clave para posicionarnos como referentes en el sector de productos ecológicos."
  },
  {
    id: 4,
    name: "Roberto Gómez",
    position: "Director General",
    company: "Clínica Bienestar",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    text: "La estrategia SEO implementada por Nova Marketing ha sido un antes y un después para nuestra clínica. Hemos conseguido posicionarnos para términos clave en nuestro sector y el tráfico orgánico se ha disparado, generando un flujo constante de nuevos pacientes."
  },
  {
    id: 5,
    name: "Ana Torres",
    position: "Fundadora",
    company: "FitLife App",
    image: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    text: "El lanzamiento de nuestra app fue un éxito rotundo gracias a la estrategia de Nova Marketing. Su capacidad para entender nuestro público objetivo y crear mensajes que realmente conectan marcó la diferencia. Totalmente recomendables para cualquier startup."
  },
  {
    id: 6,
    name: "Miguel Ángel Pérez",
    position: "Propietario",
    company: "Sabores Gourmet",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4,
    text: "Contratar a Nova Marketing fue una de las mejores decisiones para mi negocio. El branding que desarrollaron captura perfectamente la esencia de nuestra tienda gourmet y ha mejorado significativamente nuestra imagen de marca y reconocimiento en el mercado."
  }
];

// Stats
const stats = [
  { value: '50+', label: 'Clientes satisfechos' },
  { value: '200+', label: 'Proyectos completados' },
  { value: '90%', label: 'Tasa de retención' },
  { value: '35%', label: 'ROI promedio mejorado' }
];

const TestimonialsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Testimonios | Nova Marketing';
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const featuredSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-light-bg-secondary dark:bg-dark-bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Lo que dicen nuestros clientes" 
            subtitle="Descubre las experiencias de quienes ya confiaron en nosotros"
            center
          />
          
          {/* Featured Testimonial Slider */}
          <div className="max-w-4xl mx-auto mb-16">
            <Slider {...featuredSettings}>
              {testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="px-4">
                  <FeaturedTestimonial testimonial={testimonial} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      
      {/* All Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Todos los testimonios" 
            subtitle="Más historias de éxito de nuestros clientes"
            center
          />
          
          <div className="mb-16">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros resultados hablan por sí mismos</h2>
            <p className="text-lg text-white/80">
              Cifras que demuestran nuestro compromiso con el éxito de nuestros clientes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-dark-bg-secondary rounded-xl shadow-lg p-6 h-full flex flex-col"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
            />
          ))}
        </div>
      </div>
      
      <p className="text-light-text-secondary dark:text-dark-text-secondary italic mb-4 flex-grow">
        "{testimonial.text}"
      </p>
    </motion.div>
  );
};

const FeaturedTestimonial: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-dark-bg-secondary rounded-xl shadow-xl p-8 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Quote className="absolute -top-5 -left-5 w-12 h-12 text-primary/20 dark:text-primary/10" />
      
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="text-xl font-semibold">{testimonial.name}</h4>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              {testimonial.position}, {testimonial.company}
            </p>
            <div className="flex mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary italic">
        "{testimonial.text}"
      </p>
    </motion.div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, index }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-4xl md:text-5xl font-bold mb-2">{value}</div>
      <p className="text-white/80">{label}</p>
    </motion.div>
  );
};

export default TestimonialsPage;