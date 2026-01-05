import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Stats />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;