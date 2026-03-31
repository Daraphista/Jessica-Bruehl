'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// NEW SECTION — App Spotlight (example)

export default function App() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-32 bg-dark text-white overflow-hidden" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Example Badge */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
            <span>✦</span>
            <span>Example Section — This is a preview of what this section could look like on your site</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-[260px] aspect-[9/19] rounded-[3rem] bg-white/10 border border-white/20 shadow-2xl flex items-center justify-center">
              <span className="text-white/30 text-xs uppercase tracking-widest rotate-0">Phone Mockup</span>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-10 -right-10 bg-paper p-6 text-dark hidden md:block"
            >
              <p className="text-gold font-serif text-2xl mb-1">Real-Time</p>
              <p className="text-[10px] uppercase tracking-widest text-dark/60">Listing Alerts</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <h2 className="section-title text-white">
              Search <br />
              <span className="text-gold italic">Smarter</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Browse active listings, save your favorites, and receive real-time alerts when new properties hit the market. The Signature Home Search app gives you direct access to the team&apos;s inventory with local context the major portals can&apos;t provide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a href="#" className="btn-luxury">
                Download on the App Store
              </a>
              <a href="#" className="btn-luxury border-white/20 text-white/60 hover:border-gold hover:text-gold">
                Get it on Google Play
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
