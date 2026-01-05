
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 120; // Increased offset to account for floating nav height + padding
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

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 flex justify-center pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          w-full max-w-7xl
          bg-slate-900/70 backdrop-blur-xl backdrop-saturate-150 border border-slate-700/50
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isOpen ? 'rounded-[2.5rem] shadow-2xl shadow-black/30 bg-slate-900/80' : 'rounded-full shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30'}
          ${isScrolled ? 'py-3 border-slate-700/50 bg-slate-900/75' : 'py-4 border-slate-800/50'}
          px-6 sm:px-8
        `}
        style={{
          backdropFilter: 'blur(20px) saturate(150%)',
          WebkitBackdropFilter: 'blur(20px) saturate(150%)'
        }}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center space-x-2 group relative z-10"
            >
              <Logo variant="light" className="h-8 md:h-9" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center rounded-full px-2 py-1.5  mr-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-slate-300 hover:text-lychy-400 hover:bg-slate-800/50 font-medium transition-all px-5 py-2 rounded-full text-sm uppercase tracking-wide cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-6 py-3 rounded-full bg-lychy-600 text-white font-semibold hover:bg-lychy-700 transition-all shadow-md shadow-lychy-600/20 hover:shadow-lg hover:shadow-lychy-600/30 cursor-pointer transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Start Project
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 text-slate-300 hover:text-lychy-400 focus:outline-none bg-slate-800/50 rounded-full hover:bg-slate-800 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[80vh] opacity-100 mt-6 border-t border-slate-700/50 pt-6' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col items-center space-y-2 pb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg text-white hover:text-lychy-400 font-medium w-full text-center py-3 rounded-2xl hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="w-full pt-4">
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="block w-full text-center px-8 py-4 rounded-2xl bg-lychy-600 text-white font-bold shadow-lg shadow-lychy-600/20 cursor-pointer active:scale-95 transition-transform"
                  >
                    Start Project
                  </a>
                </div>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
