import React from 'react';
import { motion, easeOut, type Variants } from 'framer-motion';
import { Smartphone, Monitor, Palette, PenTool, Wrench, Search } from 'lucide-react';
import { Service } from '../types';
import './Services.css';

const services: Service[] = [
  {
    id: '1',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    id: '2',
    title: 'Web Development',
    description: 'High-performance websites and web apps built with modern frameworks.',
    icon: Monitor,
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'User-centric interfaces that are intuitive, accessible, and beautiful.',
    icon: Palette,
  },
  {
    id: '4',
    title: 'Graphic Design',
    description: 'Branding, logos, and visual assets that tell your unique story.',
    icon: PenTool,
  },
  {
    id: '5',
    title: 'Maintenance',
    description: '24/7 support and updates to keep your systems secure and running.',
    icon: Wrench,
  },
  {
    id: '6',
    title: 'SEO Strategy',
    description: 'Data-driven optimization to improve visibility and drive traffic.',
    icon: Search,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Our Expertise</p>
          <h3 className="services-title">
            <span className="gradient-text">Comprehensive</span> Services
          </h3>
          <p className="services-subtitle">
            From concept to launch, we cover every aspect of the digital product lifecycle.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`service-card ${service.title === 'Web Development' ? 'flagship' : ''}`}
              variants={itemVariants}
            >
              <div className="card-header">
                <div className="icon-container">
                  <service.icon size={22} strokeWidth={1.5} />
                </div>
                <span className="service-id">0{service.id}</span>
              </div>
              
              <h4 className="card-title">{service.title}</h4>
              <p className="card-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;