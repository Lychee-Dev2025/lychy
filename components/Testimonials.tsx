import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

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
    content: `Working with Lychy was a great experience. The communication remained consistent throughout the project, and the team had a strong grasp of the requirements. The project was delivered on schedule, with solid quality and a well designed user interface. Overall, Lychy is highly recommended for dependable and professional digital services.`,
    rating: 4,
  },
  {
    id: '3',
    name: 'Wajid Ahmed',
    role: 'Research Student',
    company: 'COMSATS University',
    content: `The Nova Prep project was handled with great professionalism by Lychy. Communication remained clear throughout the process, and the team showed a strong understanding of the requirements. Delivery was on time, the quality of the final output was strong, and the user interface reflected creativity and care. Overall, the experience was reliable and highly recommended.`,
    rating: 4,
  },
  {
    id: '4',
    name: 'Laiba Ahmar',
    role: 'Student',
    company: 'Air University',
    content: `Lychy delivered an excellent outcome for the Pet Care Companion project. The process felt well organized, with consistent updates and clear coordination at every stage. Requirements were understood without repeated clarification, timelines were respected, and the final result reflected strong attention to quality and usability. The overall execution showed skill, creativity, and professionalism, making Lychy an easy choice to recommend.`,
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Responsive items per page calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate maximum starting index to prevent empty whitespace at the end
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    // Ensure we don't go out of bounds
    const safeIndex = Math.min(index, maxIndex);
    setCurrentIndex(safeIndex);
  };

  // Optional: Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
       // Only autoplay if user isn't interacting (hover logic could be added here, keeping it simple for now)
       // nextSlide(); 
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);


  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-slate-800 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-lychy-900/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-lychy-400 font-bold tracking-wide uppercase text-sm mb-3">Client Stories</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Trusted by Visionaries</h3>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
            {/* Navigation Buttons */}
            <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 p-3 rounded-full bg-slate-800/70 border border-slate-700 text-slate-300 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-lychy-600/40 hover:bg-slate-800 hover:text-lychy-400 transition-all focus:outline-none hidden md:flex items-center justify-center backdrop-blur-sm"
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 p-3 rounded-full bg-slate-800/70 border border-slate-700 text-slate-300 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-lychy-600/40 hover:bg-slate-800 hover:text-lychy-400 transition-all focus:outline-none hidden md:flex items-center justify-center backdrop-blur-sm"
                aria-label="Next testimonial"
            >
                <ChevronRight size={24} />
            </button>

            {/* Carousel Viewport */}
            <div className="overflow-hidden px-1 py-4"> {/* Added padding to prevent shadow clipping */}
                <div 
                    className="flex transition-transform duration-500 ease-out will-change-transform"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={testimonial.id}
                            className="flex-shrink-0 px-4"
                            style={{ width: `${100 / itemsPerPage}%` }}
                        >
                             <div className="flex flex-col h-full p-8 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-lychy-400/25 hover:border-lychy-400/50 transition-all duration-300 relative group/card h-full">
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 text-slate-700 group-hover/card:text-lychy-900/20 transition-colors">
                                    <Quote size={48} strokeWidth={0} fill="currentColor" />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6 text-yellow-400">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-white/90 leading-relaxed italic mb-8 flex-grow relative z-10">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-md select-none
                                    ${index % 3 === 0 ? 'bg-gradient-to-br from-blue-500 to-indigo-600' : 
                                        index % 3 === 1 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 
                                        'bg-gradient-to-br from-orange-500 to-red-600'}`}
                                    >
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                    <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                                    <p className="text-xs font-semibold text-lychy-400 uppercase tracking-wide">
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
             {/* Pagination Dots */}
             <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            currentIndex === idx 
                            ? 'bg-lychy-500 w-6' 
                            : 'bg-slate-600 hover:bg-slate-500'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
             </div>
             
             {/* Mobile Navigation controls (visible below card on small screens) */}
             <div className="flex md:hidden justify-center gap-4 mt-6">
                 <button 
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-white border border-gray-200 text-slate-700 shadow-sm"
                 >
                     <ChevronLeft size={20} />
                 </button>
                  <button 
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-white border border-gray-200 text-slate-700 shadow-sm"
                 >
                     <ChevronRight size={20} />
                 </button>
             </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;