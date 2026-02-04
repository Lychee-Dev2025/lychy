
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "4dd019b4-4845-43b1-9348-921e6ccecf3c");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Success! Thanks for your message! We'll be in touch soon.");
        setFormState({ name: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        setResult("Error: Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setResult('Error: Failed to send message. Please contact us directly at lychydev@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lychy-900/30 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 mb-4 bg-lychy-900/50 rounded-full border border-lychy-600/30">
            <span className="px-3 py-1 text-xs font-bold text-lychy-400 uppercase tracking-widest">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Let's Build Something <br className="hidden md:block" />Amazing Together</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Ready to start your digital transformation? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-black/30 overflow-hidden p-8 md:p-12 border border-slate-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
               {/* Hidden field to specify recipient email */}
               <input type="hidden" name="from_name" value="Lychy Contact Form" />
               <input type="hidden" name="subject" value="New Contact Form Submission - Lychy Website" />
               <input type="hidden" name="redirect" value="false" />
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-300">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your Good Name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 focus:bg-slate-900 focus:border-lychy-500 focus:ring-4 focus:ring-lychy-500/10 outline-none transition-all text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-300">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="name@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 focus:bg-slate-900 focus:border-lychy-500 focus:ring-4 focus:ring-lychy-500/10 outline-none transition-all text-white placeholder:text-slate-500"
                    />
                  </div>
               </div>

               <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-slate-300">Subject</label>
                     <select 
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 focus:bg-slate-900 focus:border-lychy-500 focus:ring-4 focus:ring-lychy-500/10 outline-none transition-all text-white"
                     >
                       <option>General Inquiry</option>
                       <option>Project Proposal</option>
                       <option>Support</option>
                       <option>Other</option>
                     </select>
               </div>

               <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-300">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    placeholder="Tell us about your project..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 focus:bg-slate-900 focus:border-lychy-500 focus:ring-4 focus:ring-lychy-500/10 outline-none transition-all resize-none text-white placeholder:text-slate-500"
                  ></textarea>
               </div>

               <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-lychy-600 hover:bg-lychy-700 text-white font-bold rounded-xl shadow-md shadow-lychy-600/20 hover:shadow-lg hover:shadow-lychy-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
               >
                 {isSubmitting ? 'Sending...' : 'Send Message'}
                 {!isSubmitting && <Send size={18} />}
               </button>

               {result && (
                 <div className={`mt-4 p-4 rounded-xl text-center font-semibold ${
                   result.startsWith('Success') 
                     ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                     : 'bg-red-500/10 text-red-400 border border-red-500/30'
                 }`}>
                   {result}
                 </div>
               )}
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
