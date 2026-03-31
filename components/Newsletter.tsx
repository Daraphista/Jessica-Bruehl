'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Newsletter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    marketUpdates: false,
    listingAlerts: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing. Welcome to the list the Austin market pays attention to.');
    setFormData({ firstName: '', email: '', marketUpdates: false, listingAlerts: false });
  };

  return (
    <section className="py-32 bg-paper text-dark border-t border-dark/5" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="section-title text-dark mb-6">
              Insider <span className="text-gold italic">Updates</span>
            </h2>
            <p className="text-dark/60 text-lg font-light leading-relaxed">
              Receive exclusive market news and local insights before they go public. Join the list the Austin market pays attention to.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                required
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="flex-1 bg-white border border-dark/10 px-8 py-4 outline-none focus:border-gold transition-colors text-sm uppercase tracking-widest"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="flex-1 bg-white border border-dark/10 px-8 py-4 outline-none focus:border-gold transition-colors text-sm uppercase tracking-widest"
              />
              <button type="submit" className="btn-luxury bg-dark text-white hover:bg-gold hover:text-dark border-dark">
                Subscribe
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-left">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.marketUpdates}
                  onChange={(e) => setFormData({ ...formData, marketUpdates: e.target.checked })}
                  className="w-4 h-4 accent-gold"
                />
                <span className="text-dark/50 text-xs uppercase tracking-wide">I&apos;d like to receive monthly market updates</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.listingAlerts}
                  onChange={(e) => setFormData({ ...formData, listingAlerts: e.target.checked })}
                  className="w-4 h-4 accent-gold"
                />
                <span className="text-dark/50 text-xs uppercase tracking-wide">I&apos;d like to receive new listing alerts</span>
              </label>
            </div>
          </motion.form>

          <p className="text-[10px] uppercase tracking-widest text-dark/30">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
}
