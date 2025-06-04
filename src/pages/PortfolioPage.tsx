import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Eye, X, ArrowLeft, ArrowRight, BookOpen, Bookmark } from 'lucide-react';

type Category = 'all' | 'branding' | 'social-media' | 'web-design' | 'seo';

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  client: string;
  services: string[];
  results: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Renacer Café",
    category: "branding",
    image: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Rediseño completo de marca para una cadena de cafeterías locales, incluyendo logotipo, paleta de colores, tipografía y aplicaciones en packaging. El enfoque fue crear una identidad que reflejara la tradición cafetera colombiana con un toque moderno.",
    client: "Renacer Café",
    services: ["Identidad de marca", "Diseño de logotipo", "Packaging", "Guía de estilo"],
    results: "Incremento del 45% en reconocimiento de marca y 30% en ventas durante los primeros 3 meses tras el relanzamiento.",
    year: "2023"
  },
  {
    id: 2,
    title: "TechSolutions",
    category: "web-design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Desarrollo de sitio web corporativo responsive con integración de blog, sistema de citas y panel de administración personalizado. Implementamos un diseño minimalista que destaca la innovación tecnológica de la empresa.",
    client: "TechSolutions Inc.",
    services: ["Diseño UX/UI", "Desarrollo web", "Optimización SEO", "Sistema de reservas"],
    results: "Aumento del 120% en leads generados a través del sitio web y reducción del 30% en el tiempo de gestión de citas.",
    year: "2022"
  },
  {
    id: 3,
    title: "EcoVida",
    category: "social-media",
    image: "https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Estrategia de redes sociales para marca de productos ecológicos, incluyendo creación de contenido, gestión de comunidad y campañas de influencers. Creamos una identidad visual coherente que comunica sostenibilidad y bienestar.",
    client: "EcoVida Natural",
    services: ["Estrategia de contenido", "Gestión de redes sociales", "Marketing de influencers", "Análisis de rendimiento"],
    results: "Crecimiento del 200% en seguidores en Instagram y 150% en engagement durante los primeros 6 meses.",
    year: "2023"
  },
  {
    id: 4,
    title: "Clínica Bienestar",
    category: "seo",
    image: "https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Estrategia SEO completa para clínica médica, incluyendo optimización on-page, creación de contenido y linkbuilding. Implementamos una estructura de contenido enfocada en educar al paciente y posicionar a los especialistas como autoridades en su campo.",
    client: "Clínica Bienestar",
    services: ["Auditoría SEO", "Optimización on-page", "Contenido SEO", "Linkbuilding"],
    results: "Posicionamiento #1 en Google para 15 palabras clave principales y aumento del 80% en tráfico orgánico.",
    year: "2022"
  },
  {
    id: 5,
    title: "FitLife",
    category: "social-media",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Campaña de redes sociales para lanzamiento de app de fitness, incluyendo estrategia de contenido, anuncios pagados y colaboraciones. Desarrollamos una identidad visual dinámica que refleja energía y progreso.",
    client: "FitLife App",
    services: ["Estrategia de lanzamiento", "Publicidad en redes sociales", "Creación de contenido", "Análisis de competencia"],
    results: "10,000 descargas en la primera semana y ROI de 300% en la inversión publicitaria.",
    year: "2023"
  },
  {
    id: 6,
    title: "Sabores Gourmet",
    category: "branding",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Desarrollo de identidad de marca para tienda de productos gourmet, incluyendo naming, logotipo, packaging y material promocional. Creamos una identidad elegante que transmite exclusividad y calidad artesanal.",
    client: "Sabores Gourmet",
    services: ["Naming", "Identidad visual", "Packaging", "Material POP"],
    results: "Reconocimiento instantáneo de marca en el mercado local y apertura exitosa con ventas un 40% por encima de lo proyectado.",
    year: "2022"
  }
];

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Colecciones | Nova Marketing';
    
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categoryLabels: Record<Category, string> = {
    'all': 'Todas las Colecciones',
    'branding': 'Branding',
    'social-media': 'Social Media',
    'web-design': 'Diseño Web',
    'seo': 'SEO'
  };

  return (
    <>
      <section 
        className="pt-32 pb-16 bg-light-bg-secondary dark:bg-dark-bg-secondary relative overflow-hidden"
        ref={containerRef}
      >
        {/* Textura de fondo sutil */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/light-wool.png')] opacity-10 dark:opacity-5 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Nuestro Libro de Colecciones" 
            subtitle="Descubre nuestras creaciones más destacadas"
            center
          />
          
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            {/* Panel lateral de categorías */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="sticky top-32 bg-white dark:bg-dark-bg-secondary rounded-xl p-6 shadow-md border border-gray-100 dark:border-dark-bg">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Bookmark className="w-5 h-5 mr-2 text-primary" /> Categorías
                </h3>
                <div className="space-y-2">
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <button
                      key={key}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        selectedCategory === key
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-light-bg dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-dark-bg-secondary text-light-text dark:text-dark-text'
                      }`}
                      onClick={() => setSelectedCategory(key as Category)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-dark-bg">
                  <h3 className="text-lg font-bold mb-3">Colecciones destacadas</h3>
                  <div className="space-y-3">
                    {projects.slice(0, 3).map(project => (
                      <div 
                        key={project.id} 
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-bg cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="w-12 h-12 rounded-md overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{project.title}</p>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{project.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Grid de proyectos */}
            <div className="flex-1">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <AnimatePresence>
                  {filteredProjects.map((project) => (
                    <PortfolioItem 
                      key={project.id} 
                      project={project} 
                      onClick={() => setSelectedProject(project)} 
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-16">
                  <div className="bg-gray-100 dark:bg-dark-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No se encontraron proyectos</h3>
                  <p className="text-gray-500 dark:text-gray-400">Intenta seleccionar otra categoría</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal compacto */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            projects={filteredProjects}
            setSelectedProject={setSelectedProject}
          />
        )}
      </AnimatePresence>
    </>
  );
};

interface PortfolioItemProps {
  project: Project;
  onClick: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-dark-bg-secondary border border-gray-100 dark:border-dark-bg hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Etiqueta de categoría */}
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
          {categoryLabels[project.category]}
        </div>
        
        {/* Año */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded">
          {project.year}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold mb-2 text-light-text dark:text-dark-text group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-2 text-sm">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {project.services.slice(0, 2).map((service, index) => (
              <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                {service}
              </span>
            ))}
            {project.services.length > 2 && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                +{project.services.length - 2}
              </span>
            )}
          </div>
          
          <button 
            onClick={onClick}
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white py-2 px-3 rounded-lg transition-all text-sm"
          >
            <Eye className="w-4 h-4 mr-1" /> Ver
          </button>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  projects: Project[];
  setSelectedProject: (project: Project) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, projects, setSelectedProject }) => {
  const currentIndex = projects.findIndex(p => p.id === project.id);
  
  const goToNextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };
  
  const goToPrevProject = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNextProject();
      if (e.key === 'ArrowLeft') goToPrevProject();
      if (e.key === 'Escape') onClose();
    };
    
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, projects]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-white dark:bg-dark-bg-secondary rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botones de navegación */}
        <button 
          onClick={(e) => { e.stopPropagation(); goToPrevProject(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); goToNextProject(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 shadow-lg"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
        
        {/* Contenido del modal compacto */}
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-52 object-cover rounded-t-xl"
          />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
            <h2 className="text-xl font-bold text-white">{project.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-block px-2 py-0.5 bg-primary text-white text-xs rounded-full">
                {categoryLabels[project.category]}
              </span>
              <span className="text-gray-300 text-xs">{project.year}</span>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="mb-5">
            <h3 className="text-lg font-semibold mb-2 text-primary">Descripción del Proyecto</h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
              {project.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Resultados</h3>
              <div className="bg-primary/5 p-3 rounded-lg">
                <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
                  {project.results}
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Detalles</h3>
              
              <div className="mb-3">
                <h4 className="font-medium text-sm mb-1">Cliente:</h4>
                <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">{project.client}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-1">Servicios:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.services.map((service, index) => (
                    <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicador de progreso */}
        <div className="px-5 pb-4">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Proyecto {currentIndex + 1} de {projects.length}</span>
            <div className="flex items-center gap-3">
              <button 
                onClick={(e) => { e.stopPropagation(); goToPrevProject(); }}
                className="flex items-center text-light-text dark:text-dark-text hover:text-primary text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-1" /> Anterior
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); goToNextProject(); }}
                className="flex items-center text-light-text dark:text-dark-text hover:text-primary text-sm"
              >
                Siguiente <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-2">
            <motion.div 
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const categoryLabels: Record<Category, string> = {
  'all': 'Todas las Colecciones',
  'branding': 'Branding',
  'social-media': 'Social Media',
  'web-design': 'Diseño Web',
  'seo': 'SEO'
};

export default PortfolioPage;