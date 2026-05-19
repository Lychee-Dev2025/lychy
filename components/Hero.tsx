import React from 'react';
import { motion, easeOut, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaReact, FaNodeJs, FaAws, FaFigma } from 'react-icons/fa';
import { SiFlutter, SiNextdotjs } from 'react-icons/si';
import './Hero.css';

const techStack = [
  { name: 'React Native', icon: <FaReact /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Figma', icon: <FaFigma /> },
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

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>
      <motion.div 
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-headline" variants={itemVariants}>
          We Build Your <span className="gradient-text">Digital Reality</span>
        </motion.h1>

        <motion.p className="hero-subtext" variants={itemVariants}>
          High-performance software solutions that scale. From sleek mobile apps to robust backends, we bring your vision to life with cutting-edge technology and pixel-perfect design.
        </motion.p>

        <motion.div className="hero-cta-buttons" variants={itemVariants}>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
            }}
            className="btn btn-primary"
          >
            Let's Build It
            <ArrowRight className="arrow-icon" size={20} />
          </a>
          <a href="#projects" className="btn btn-secondary">
            View Work
          </a>
        </motion.div>

        <hr className="hero-divider" />

        <motion.div className="tech-stack" variants={containerVariants}>
          <motion.span className="tech-stack-label" variants={itemVariants}>
            Built With
          </motion.span>
          <motion.div className="tech-pills" variants={containerVariants}>
            {techStack.map((tech, index) => (
              <motion.div key={index} className="tech-pill" variants={itemVariants}>
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
