import React, { useState, useEffect } from 'react';
import { ExternalLink, Smartphone, Layout, ShoppingCart, X, Globe, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import almehdiImage from './assets/logos/almehdi2.png';
import novaImage from './assets/logos/nova1.png';
import freightImage from './assets/logos/freightpower.png';
import enentouryImage from './assets/logos/eventoury.png';
import pccImage from './assets/logos/pc.png';
import karakImage from './assets/logos/karakchai.png';

const projects: Project[] = [
  {
    id: '1',
    title: 'Al Mehdi Online School',
    category: 'Mobile Application',
    description: 'Al Mehdi Online School is a complete digital learning platform offering live classes, recorded lectures, assignments, and progress tracking for students—anytime, anywhere.',
    longDescription: 'Al Mehdi Online School is a complete digital learning platform offering live classes, recorded lectures, assignments, and progress tracking for students anytime, anywhere.',
    imageUrl: almehdiImage,
    technologies: ['Flutter', 'Firebase', 'Jitsi Meet', 'Node.js'],
    demoUrl: '#',
  },
  {
    id: '2',
    title: 'Nova Prep',
    category: 'Mobile Application',
    description: 'Nova Prep is an intelligent practice app that helps users prepare for technical and behavioral interviews. ',
    longDescription: 'Nova Prep is an intelligent practice app that helps users prepare for technical and behavioral interviews. It simulates real interview sessions, evaluates spoken or written answers using AI, and provides instant feedback on accuracy, clarity, and confidence to help users improve their performance.',
    imageUrl: novaImage,
    technologies: ['Flutter', 'Firebase', 'Python', 'Deep Face'],
    demoUrl: '#',
  },
  {
    id: '3',
    title: 'FreightPower',
    category: 'AI logistics SaaS platform',
    description: 'FreightPower is an AI based platform that connects drivers, carriers, and shippers with live tracking, smart onboarding, and load matching.',
    longDescription: 'FreightPower is an AI based freight management platform that connects drivers, carriers, and shippers in one system. It offers smart onboarding, live GPS tracking, compliance management, and load matching to keep freight moving smoothly.',
    imageUrl: freightImage,
    technologies: ['React', 'Node.Js', 'Python', 'Grok', 'Firebase', 'AWS'],
    demoUrl: '#',
  },
];

const allProjects: Project[] = [
  ...projects,
  {
    id: '4',
    title: 'Eventoury',
    category: 'Smart tourism management platform',
    description: 'Eventoury is a smart all in one tourism platform that lets users discover destinations, book travel services, and plan complete trips easily from one app.',
    longDescription: 'Eventoury is a smart tourism platform that helps users explore destinations, discover events, and book complete travel plans from one simple app. It lets travelers browse tours, hotels, transport, and special deals, plan trips in a few taps, and enjoy secure bookings with real time updates, making travel planning easy, fast, and stress free.',
    imageUrl: enentouryImage,
    technologies: ['Flutter', 'Firebase', 'Node.js', 'Geolocation API', 'Stripe'],
    demoUrl: '#',
  },
  {
    id: '5',
    title: 'Pet Care Companion',
    category: 'Pet Care and Animal Services Platform',
    description: 'Pet Care Companion is an all in one mobile app that helps pet owners manage health records, book grooming, shop pet products, and arrange safe pet transport.',
    longDescription: '  Pet Care Companion is an all in one mobile app that helps pet owners manage health records, book grooming, shop pet products, and arrange safe pet transport. It offers a convenient platform to keep pets healthy and happy with easy access to essential services and products.',
    imageUrl: pccImage,
    technologies: ['Flutter', 'Firebase', 'Stripe'],
    demoUrl: '#',
  },
  {
    id: '6',
    title: 'Chai Karak',
    category: 'UI/UX Design',
    description: 'Chai Karak is a modern chai café brand serving premium chai blends in warm, community focused spaces that bring people together through comfort and tradition.',
    longDescription: 'Chai Karak is a modern chai café brand inspired by South Asian chai culture, it serves premium chai blends crafted for rich aroma and balanced taste, the brand focuses on creating warm spaces where people connect and relax, and each cup is prepared with care to deliver comfort in every sip.',
    imageUrl: karakImage,
    technologies: ['Figma', 'Adobe Illustrator', ],
    demoUrl: '#',
  }
];

const ProjectMockup = ({ type }: { type: string }) => {
    if (type.includes('Mobile')) {
        return (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center p-6 transition-colors duration-500">
                {/* Phone Mockup */}
                <div className="w-32 h-56 border-4 border-slate-800 rounded-[2rem] bg-white overflow-hidden shadow-xl relative transform transition-transform hover:scale-105 duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-b-lg"></div>
                    <div className="p-3 mt-4 space-y-2">
                         <div className="w-full h-8 bg-lychy-100 rounded-lg"></div>
                         <div className="flex gap-1">
                             <div className="w-1/2 h-20 bg-gray-100 rounded-lg"></div>
                             <div className="w-1/2 h-20 bg-gray-100 rounded-lg"></div>
                         </div>
                         <div className="w-full h-12 bg-gray-50 rounded-lg border border-dashed border-gray-200"></div>
                    </div>
                    {/* Floating Icon */}
                    <div className="absolute bottom-2 right-2 bg-lychy-600 p-1.5 rounded-full text-white">
                        <Smartphone size={12} />
                    </div>
                </div>
            </div>
        );
    } else if (type.includes('Dashboard')) {
        return (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center p-6 transition-colors duration-500">
                {/* Dashboard Mockup */}
                <div className="w-full max-w-[240px] aspect-video bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden flex flex-col transform transition-transform hover:scale-105 duration-500">
                    <div className="h-4 bg-slate-800 flex items-center px-2 space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    </div>
                    <div className="flex-1 flex">
                        <div className="w-10 bg-slate-50 border-r border-gray-100 p-1 flex flex-col gap-1 items-center pt-2">
                             <div className="w-4 h-4 rounded bg-gray-200"></div>
                             <div className="w-4 h-4 rounded bg-gray-200"></div>
                        </div>
                        <div className="flex-1 p-2 space-y-2">
                             <div className="flex gap-2">
                                <div className="w-1/2 h-8 bg-lychy-50 rounded"></div>
                                <div className="w-1/2 h-8 bg-gray-50 rounded"></div>
                             </div>
                             <div className="w-full h-10 bg-gray-50 rounded border border-gray-100"></div>
                        </div>
                    </div>
                     <div className="absolute bottom-6 right-8 bg-white p-1.5 rounded shadow-lg border border-gray-100 text-lychy-600">
                        <Layout size={16} />
                    </div>
                </div>
            </div>
        );
    } else {
         return (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center p-6 transition-colors duration-500">
                {/* Browser E-com Mockup */}
                <div className="w-full max-w-[240px] aspect-[4/3] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden flex flex-col transform transition-transform hover:scale-105 duration-500">
                    <div className="h-6 bg-gray-50 border-b border-gray-200 flex items-center px-2 space-x-2">
                         <div className="w-20 h-3 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex-1 p-3 grid grid-cols-2 gap-2">
                        <div className="bg-gray-50 rounded border border-gray-100 flex flex-col gap-1 p-1">
                             <div className="w-full h-8 bg-gray-200 rounded-sm"></div>
                             <div className="w-1/2 h-2 bg-lychy-200 rounded-full"></div>
                        </div>
                        <div className="bg-gray-50 rounded border border-gray-100 flex flex-col gap-1 p-1">
                             <div className="w-full h-8 bg-gray-200 rounded-sm"></div>
                             <div className="w-1/2 h-2 bg-lychy-200 rounded-full"></div>
                        </div>
                        <div className="col-span-2 h-8 bg-lychy-50 rounded mt-1"></div>
                    </div>
                    <div className="absolute bottom-6 right-8 bg-white p-1.5 rounded shadow-lg border border-gray-100 text-lychy-600">
                        <ShoppingCart size={16} />
                    </div>
                </div>
            </div>
        );
    }
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    if (selectedProject || showAllProjects) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, showAllProjects]);

  return (
    <section id="projects" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-lychy-400 font-bold tracking-wide uppercase text-sm mb-3">Our Work</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">Featured Projects</h3>
            </div>
            <button
                onClick={() => setShowAllProjects(true)}
                className="group px-6 py-3 rounded-xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 text-white/90 font-bold hover:bg-slate-800/50 hover:border-lychy-400/50 hover:text-white transition-all shadow-sm flex items-center gap-2"
            >
                View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl border border-slate-700/50 overflow-hidden bg-slate-800/30 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-lychy-400/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
                {/* Visual Header */}
                <div className="h-48 overflow-hidden relative border-b border-slate-700/50">
                     <img 
                       src={project.imageUrl} 
                       alt={project.title}
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                    <div className="text-xs font-bold text-white/90 group-hover:text-lychy-400 uppercase tracking-wider mb-2 transition-colors">
                        {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lychy-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-white/90 group-hover:text-lychy-400 group-hover:translate-x-1 transition-all">
                        View Details <ArrowRight size={14} className="ml-2" />
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Projects Overlay */}
      {showAllProjects && (
        <div className="fixed inset-0 z-[70] bg-slate-950 overflow-y-auto animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-between items-center mb-12 border-b border-slate-700/50 pb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">All Projects</h2>
                        <p className="text-white/70 mt-2 text-lg">A complete collection of our finest work.</p>
                    </div>
                    <button
                        onClick={() => setShowAllProjects(false)}
                        className="p-3 bg-slate-800/50 backdrop-blur-xl rounded-full hover:bg-slate-800 text-lychy-400 hover:text-lychy-300 transition-colors border border-slate-700/50"
                    >
                        <X size={28} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                    {allProjects.map((project) => (
                         <div 
                            key={project.id} 
                            onClick={() => setSelectedProject(project)}
                            className="group rounded-2xl border border-slate-700/50 overflow-hidden bg-slate-800/30 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-lychy-400/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="h-48 overflow-hidden relative border-b border-slate-700/50">
                                    <img 
                                      src={project.imageUrl} 
                                      alt={project.title}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-lychy-400 uppercase tracking-wider mb-2">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lychy-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center text-sm font-semibold text-white/90 group-hover:text-lychy-400 group-hover:translate-x-1 transition-all">
                                        View Details <ArrowRight size={14} className="ml-2" />
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative w-full max-w-4xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden animate-fade-in-up flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]">
             <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-4 right-4 z-10 p-2 bg-slate-800/50 backdrop-blur-xl rounded-full hover:bg-slate-800 text-lychy-400 hover:text-lychy-300 transition-colors shadow-sm border border-slate-700/50"
              >
               <X size={20}/>
             </button>
             
             {/* Visual Side */}
             <div className="w-full md:w-2/5 bg-slate-800/50 relative min-h-[200px] border-b md:border-b-0 md:border-r border-slate-700/50 overflow-hidden">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/40"></div>
             </div>

             {/* Content Side */}
             <div className="w-full md:w-3/5 p-8 overflow-y-auto">
                <span className="inline-block px-3 py-1 bg-lychy-400/10 text-lychy-400 border border-lychy-400/30 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    {selectedProject.category}
                </span>
                
                <h3 className="text-3xl font-extrabold text-white mb-4">{selectedProject.title}</h3>
                
                <div className="prose prose-slate mb-8">
                    <p className="text-white/80 leading-relaxed text-lg">
                        {selectedProject.longDescription || selectedProject.description}
                    </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies?.map(tech => (
                       <span key={tech} className="px-3 py-1.5 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-white/90 rounded-lg text-sm font-medium shadow-sm hover:border-lychy-400/50 hover:text-lychy-400 transition-colors">
                        {tech}
                       </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-700/50">
                  {selectedProject.demoUrl && (
                      <a 
                        href={selectedProject.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-6 py-3 bg-lychy-600 text-white rounded-xl font-bold hover:bg-lychy-700 transition-all shadow-md shadow-lychy-600/20 hover:shadow-lg hover:shadow-lychy-600/30 flex items-center justify-center gap-2"
                      >
                        Visit Live Demo <Globe size={18} />
                      </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)} 
                    className="px-6 py-3 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-white/90 rounded-xl font-bold hover:bg-slate-800 hover:text-lychy-400 transition-all flex items-center justify-center"
                  >
                    Close Details
                  </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;