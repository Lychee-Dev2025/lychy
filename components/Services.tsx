import React from 'react';
import { Smartphone, Monitor, Palette, PenTool, Wrench, Search } from 'lucide-react';
import { Service } from '../types';

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

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lychy-400 font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Comprehensive Services</h3>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">
            From concept to launch, we cover every aspect of the digital product lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 hover:border-lychy-400/50 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-lychy-400/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-slate-700/50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-lychy-600 group-hover:text-white transition-colors duration-300">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-slate-600 font-mono text-xs group-hover:text-lychy-300 transition-colors">0{service.id}</span>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-lychy-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-white/80 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;