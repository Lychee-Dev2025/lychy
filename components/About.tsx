import React from 'react';
import { motion, easeOut, type Variants } from 'framer-motion';
import { Target, Zap, Users, ShieldCheck, Heart, Globe } from 'lucide-react';
import './About.css';

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "We adhere to strict coding standards. Every pixel is placed with purpose, and every line of code is optimized for performance."
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Time is money. Our agile workflow ensures that we deliver high-quality MVPs and full-scale products on schedule."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "We believe in transparent communication. You are involved at every stage, ensuring the final product matches your vision perfectly."
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description: "We build with security in mind from day one, protecting your data and your users with industry-standard practices."
  },
  {
    icon: Heart,
    title: "Passionate Team",
    description: "We love what we do. That passion translates into products that feel alive, polished, and enjoyable to use."
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Our solutions are built to scale and perform worldwide."
  }
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

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Who We Are</p>
          <h3 className="about-title">
            More Than Just Code. We Are Your <span className="gradient-text">Digital Partners</span>.
          </h3>
          <p className="about-description">
            At Lychy, we bridge the gap between complex technology and human experience. 
            We don't just write code; we architect solutions that drive growth, efficiency, and user satisfaction.
          </p>
        </motion.div>

        <motion.div 
          className="values-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((item, index) => {
            const isLarge = (index % 4 === 0) || (index % 4 === 3);
            return (
              <motion.div
                key={index}
                className={`value-card ${isLarge ? 'large' : ''}`}
                variants={itemVariants}
              >
                <div className="icon-container">
                  <item.icon size={24} />
                </div>
                <h4 className="value-title">{item.title}</h4>
                <p className="value-description">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;