import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Stats from './components/Stats';
import Projects from './components/Projects';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AiChat from './components/AiChat';
import LychyContactFormModal from './components/LychyContactFormModal';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <>
      <Navbar onOpenContact={handleOpenContact} />
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <Services />
        <Process />
        <Stats />
        <Projects />
        <About />
        <Testimonials />
        <CTA onOpenContact={handleOpenContact} />
      </main>
      <Footer onOpenContact={handleOpenContact} />
      <AiChat />
      <LychyContactFormModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </>
  );
};

export default App;