import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SectionTitle from '../components/ui/SectionTitle';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  
  useEffect(() => {
    document.title = 'Contacto | Nova Marketing';
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo lo antes posible.');
  };

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Contáctanos" 
            subtitle="Estamos aquí para ayudarte a potenciar tu negocio"
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-dark-bg-secondary rounded-xl shadow-lg p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  label="Nombre completo"
                  error={errors.name}
                >
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name 
                        ? 'border-error focus:border-error focus:ring-error/30' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary/30'
                    } dark:bg-dark-bg focus:ring focus:outline-none transition-all`}
                    placeholder="Tu nombre"
                    {...register('name', { required: 'El nombre es obligatorio' })}
                  />
                </FormField>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    label="Email"
                    error={errors.email}
                  >
                    <input
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email 
                          ? 'border-error focus:border-error focus:ring-error/30' 
                          : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary/30'
                      } dark:bg-dark-bg focus:ring focus:outline-none transition-all`}
                      placeholder="tu@email.com"
                      {...register('email', { 
                        required: 'El email es obligatorio',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Email inválido'
                        }
                      })}
                    />
                  </FormField>
                  
                  <FormField
                    label="Teléfono"
                    error={errors.phone}
                  >
                    <input
                      type="tel"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.phone 
                          ? 'border-error focus:border-error focus:ring-error/30' 
                          : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary/30'
                      } dark:bg-dark-bg focus:ring focus:outline-none transition-all`}
                      placeholder="Tu teléfono"
                      {...register('phone')}
                    />
                  </FormField>
                </div>
                
                <FormField
                  label="Servicio de interés"
                  error={errors.service}
                >
                  <select
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.service 
                        ? 'border-error focus:border-error focus:ring-error/30' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary/30'
                    } dark:bg-dark-bg focus:ring focus:outline-none transition-all`}
                    {...register('service', { required: 'Selecciona un servicio' })}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="branding">Branding</option>
                    <option value="social-media">Social Media</option>
                    <option value="ads">Publicidad Digital</option>
                    <option value="seo">SEO/SEM</option>
                    <option value="consultoria">Asesoría Estratégica</option>
                    <option value="otro">Otro</option>
                  </select>
                </FormField>
                
                <FormField
                  label="Mensaje"
                  error={errors.message}
                >
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message 
                        ? 'border-error focus:border-error focus:ring-error/30' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary/30'
                    } dark:bg-dark-bg focus:ring focus:outline-none transition-all resize-none`}
                    placeholder="¿Cómo podemos ayudarte?"
                    {...register('message', { required: 'El mensaje es obligatorio' })}
                  />
                </FormField>
                
                <motion.button
                  type="submit"
                  className="btn-primary w-full group relative overflow-hidden"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-primary/80"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <ContactInfo 
                    icon={<Mail className="w-6 h-6 text-primary" />}
                    title="Email"
                    info="info@novamarketing.com"
                    link="mailto:info@novamarketing.com"
                  />
                  
                  <ContactInfo 
                    icon={<Phone className="w-6 h-6 text-primary" />}
                    title="Teléfono"
                    info="+51 999 999 999"
                    link="tel:+51999999999"
                  />
                  
                  <ContactInfo 
                    icon={<MapPin className="w-6 h-6 text-primary" />}
                    title="Dirección"
                    info="Av. Principal 123, Ciudad"
                    link="https://maps.google.com"
                  />
                  
                  <ContactInfo 
                    icon={<MessageCircle className="w-6 h-6 text-primary" />}
                    title="WhatsApp"
                    info="+51 999 999 999"
                    link="https://wa.me/51999999999"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Síguenos en Redes Sociales</h3>
                
                <div className="flex space-x-4">
                  <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
                  <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                  <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
                  <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábados: 10:00 - 14:00<br />
                  Domingos: Cerrado
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-dark-bg-secondary rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-[16/9] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6640466545383!2d-77.03135492394606!3d-12.045896791233422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662c7%3A0x15f0bea474a7cf66!2sMiraflores%2C%20Lima%2C%20Peru!5e0!3m2!1sen!2sus!4v1686761753909!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Nova Marketing"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  error?: { message?: string };
}

const FormField: React.FC<FormFieldProps> = ({ label, children, error }) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      {children}
      {error && (
        <p className="text-error text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  link: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, info, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-start space-x-4 group"
    >
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-medium text-light-text dark:text-dark-text">{title}</h4>
        <p className="text-light-text-secondary dark:text-dark-text-secondary group-hover:text-primary transition-colors">
          {info}
        </p>
      </div>
    </a>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-dark-bg hover:bg-primary dark:hover:bg-primary text-light-text-secondary dark:text-dark-text-secondary hover:text-white dark:hover:text-white transition-colors shadow-sm"
    >
      {icon}
    </a>
  );
};

export default ContactPage;