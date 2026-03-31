'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out. Someone from the team will follow up promptly.');
    setFormData({ fullName: '', phone: '', email: '', message: '' });
  };

  return (
    <section className="py-32 bg-dark text-white" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="section-title text-white">
                Let&apos;s <br />
                <span className="text-gold italic">Talk</span>
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
                Whether you&apos;re buying, selling, or simply exploring your options — reach out and someone from the team will follow up promptly.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gold bg-white/10 flex items-center justify-center">
                <span className="text-white/30 text-[10px] uppercase tracking-wide">Photo</span>
              </div>
              <div>
                <p className="text-white font-serif text-xl">Jessica Bruehl</p>
                <p className="text-gold text-[10px] uppercase tracking-widest font-bold">Founder & Broker, Signature Residential Group</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.4em]">Office</p>
              <p className="text-white/80 text-xl font-light">
                1801 S Mopac Expy Ste 100<br />
                Austin, TX 78746
              </p>
              <p className="text-white/60 text-lg font-light">(512) 532-5005</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="bg-white/5 p-12 md:p-16 border border-white/10"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:border-gold outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:border-gold outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:border-gold outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">How Can We Help You?</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:border-gold outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-8 flex justify-end">
                <button type="submit" className="group flex items-center gap-4 text-gold uppercase tracking-[0.3em] text-xs font-bold">
                  Send Message
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center group-hover:bg-gold group-hover:text-dark transition-all">
                    <Send size={16} />
                  </div>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
