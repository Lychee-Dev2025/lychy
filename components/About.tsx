import React from 'react';
import { Target, Zap, Users, ShieldCheck, Heart, Globe } from 'lucide-react';

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
    description: "Whether you are a local startup or a global enterprise, our solutions are built to scale and perform worldwide."
  }
];

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Go",
  "React Native", "Flutter", "AWS", "PostgreSQL",
  "GraphQL", "Tailwind CSS", "Figma", "MongoDB", "Firebase", "Supabase"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-slate-800/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-lychy-400 font-bold tracking-wide uppercase text-sm mb-3">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              More Than Just Code. We Are Your Digital Partners.
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
                At Lychy, we bridge the gap between complex technology and human experience. 
                We don't just write code; we architect solutions that drive growth, efficiency, and user satisfaction.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {values.map((item, index) => (
              <div 
                key={index}
                className="group bg-slate-800/30 backdrop-blur-xl p-8 rounded-2xl shadow-lg shadow-black/20 border border-slate-700/50 hover:shadow-2xl hover:shadow-lychy-400/30 hover:border-lychy-400/50 transition-all duration-300 hover:-translate-y-2"
              >
                  <div className="w-14 h-14 bg-slate-700/50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-lychy-600 group-hover:text-white transition-colors duration-300 mb-6">
                      <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-lychy-400 transition-colors">
                      {item.title}
                  </h4>
                  <p className="text-white/80 leading-relaxed text-sm">
                      {item.description}
                  </p>
              </div>
            ))}
        </div>

        {/* Tech Stack / Skills Section */}
        <div className="text-center relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-slate-700 z-0 hidden sm:block"></div>
            <span className="relative z-10 bg-slate-900 px-6 text-slate-500 font-bold tracking-widest uppercase text-xs mb-8 inline-block">
                Our Tech Stack
            </span>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mt-6 relative z-10">
                {skills.map((skill, index) => (
                    <span 
                        key={skill}
                        className="px-5 py-2.5 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 text-white/90 font-semibold rounded-full shadow-sm hover:shadow-lg hover:border-lychy-400/50 hover:text-lychy-400 hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;