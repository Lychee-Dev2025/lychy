
import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Adjusts for the fixed header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-lychy-900 text-white border-t border-lychy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 group cursor-default">
              <Logo variant="dark" />
            </div>
            <p className="text-lychy-200 text-sm font-medium leading-relaxed mb-4">
              Turning bold ideas into powerful digital experiences that people love to use
            </p>
            
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-lychy-200 text-sm">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => scrollToSection(e, '#services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

           {/* Contact Info (Replaces Services List) */}
           <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-lychy-200 text-sm">
              <li className="flex items-start space-x-3 group">
                <Mail size={18} className="mt-0.5 shrink-0 text-lychy-400 group-hover:text-white transition-colors" />
                <a href="mailto:lychydev@gmail.com" className="hover:text-white transition-colors break-all">hello@lychy.co</a>
              </li>
              <li className="flex items-start space-x-3 group">
                <Phone size={18} className="mt-0.5 shrink-0 text-lychy-400 group-hover:text-white transition-colors" />
                <a href="tel:+351928343141" className="hover:text-white transition-colors">+351 928 343 141</a>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin size={18} className="mt-0.5 shrink-0 text-lychy-400 group-hover:text-white transition-colors" />
                <span>Global / Remote First</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="https://github.com/Lychee-Dev2025" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-white flex items-center justify-center hover:bg-lychy-400/10 hover:border-lychy-400/50 hover:text-lychy-400 hover:scale-110 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/company/lychy-inc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-white flex items-center justify-center hover:bg-lychy-400/10 hover:border-lychy-400/50 hover:text-lychy-400 hover:scale-110 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/lychy_dev?igsh=eGt1MWc1NmRicjFh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-white flex items-center justify-center hover:bg-lychy-400/10 hover:border-lychy-400/50 hover:text-lychy-400 hover:scale-110 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-lychy-800 mt-12 pt-8 text-center text-lychy-300 text-sm">
          <p>© {new Date().getFullYear()} Lychy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
