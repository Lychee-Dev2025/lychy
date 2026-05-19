import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code, Rocket } from 'lucide-react';
import './Process.css';

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We deep-dive into your goals, users, and technical requirements.',
    icon: Lightbulb,
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes, UI mockups, and prototypes you review and approve.',
    icon: PenTool,
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile sprints with weekly demos so you\'re never in the dark.',
    icon: Code,
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Deploy, QA, and ongoing maintenance post-launch.',
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Process: React.FC = () => {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Our Process</p>
          <h3 className="process-title">From Idea to Launch, Step by Step</h3>
          <p className="process-subtitle">
            A structured, transparent process that keeps you informed at every stage.
          </p>
        </motion.div>

        <motion.div 
          className="process-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((item, index) => (
            <motion.div key={index} className="process-step-wrapper" variants={itemVariants}>
              <div className="process-card">
                <span className="step-number">{item.step}</span>
                <div className="icon-container">
                  <item.icon size={20} />
                </div>
                <h4 className="step-title">{item.title}</h4>
                <p className="step-description">{item.description}</p>
              </div>
              {index < processSteps.length - 1 && <div className="connector-line"></div>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
