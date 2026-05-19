import React from 'react';
import { motion, easeOut, type Variants } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import './Testimonials.css';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Hasnain Ali',
    role: 'CEO',
    company: 'Chai Karak',
    content: `The experience with Lychy was excellent. Communication was clear and consistent, and the team understood the requirements from the start. The project was delivered on time with high quality, and the design and user interface were handled professionally. Lychy is highly recommended for dependable and professional development services.`,
    rating: 5,
  },
  {
    id: '2',
    name: 'Muhammad Qais Abbas',
    role: 'CEO',
    company: 'Abbas Digital Agency',
    content: `Working with Lychy was a great experience. The communication remained consistent throughout the project, and the team had a strong grasp of the requirements. The project was delivered on schedule, with solid quality and a well designed user interface.`,
    rating: 4,
  },
  {
    id: '3',
    name: 'Wajid Ahmed',
    role: 'Research Student',
    company: 'COMSATS University',
    content: `The Nova Prep project was handled with great professionalism by Lychy. Communication remained clear throughout the process, and the team showed a strong understanding of the requirements. Delivery was on time, the quality of the final output was strong.`,
    rating: 4,
  },
  {
    id: '4',
    name: 'Laiba Ahmar',
    role: 'Student',
    company: 'Air University',
    content: `Lychy delivered an excellent outcome for the Pet Care Companion project. The process felt well organized, with consistent updates and clear coordination at every stage. Requirements were understood without repeated clarification, timelines were respected.`,
    rating: 5,
  },
];

const featuredTestimonial = testimonials[0];
const otherTestimonials = testimonials.slice(1);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill={i < rating ? 'currentColor' : 'none'} />
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-bg"></div>
      <div className="container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Client Stories</p>
          <h3 className="testimonials-title">
            Trusted by <span className="gradient-text">Visionaries</span>
          </h3>
        </motion.div>

        <motion.div 
          className="featured-testimonial"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Quote size={40} className="quote-icon" />
          <div className="featured-content">
            <StarRating rating={featuredTestimonial.rating} />
            <p>"{featuredTestimonial.content}"</p>
            <div className="featured-author">
              <div className="featured-author-avatar">{featuredTestimonial.name.charAt(0)}</div>
              <div className="featured-author-info">
                <h5>{featuredTestimonial.name}</h5>
                <p>{featuredTestimonial.role}, {featuredTestimonial.company}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="testimonial-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {otherTestimonials.map((testimonial) => (
            <motion.div key={testimonial.id} className="testimonial-card" variants={itemVariants}>
              <StarRating rating={testimonial.rating} />
              <p className="testimonial-card-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="testimonial-author-avatar">{testimonial.name.charAt(0)}</div>
                <div className="testimonial-author-info">
                  <h6>{testimonial.name}</h6>
                  <p>{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;