'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// NEW SECTION — Magazine Spotlight (example)

export default function Magazine() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-32 bg-paper text-dark overflow-hidden" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Example Badge */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
            <span>✦</span>
            <span>Example Section — This is a preview of what this section could look like on your site</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="section-title text-dark">
              The Signature <br />
              <span className="text-gold italic">Edition</span>
            </h2>
            <p className="text-dark/60 text-lg font-light leading-relaxed max-w-xl">
              A quarterly look at Austin&apos;s luxury market — featuring exclusive property previews, design trends, neighborhood spotlights, and conversations with the people shaping the communities we call home. Each issue is crafted for the Austin buyer and seller who wants context, not just listings.
            </p>
            <div className="pt-8">
              <a href="#" className="btn-luxury border-dark text-dark hover:bg-dark hover:text-white">
                Read the Latest Issue
              </a>
            </div>
          </motion.div>

          {/* Magazine Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[320px] aspect-[3/4] rounded-sm shadow-2xl overflow-hidden">
              <Image
                src="/images/luxury-interior-2.png"
                alt="The Signature Edition — Austin Market Magazine"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark/10 to-transparent" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-10 -right-10 bg-dark p-6 text-white hidden md:block"
            >
              <p className="text-gold font-serif text-lg mb-1">Quarterly</p>
              <p className="text-[10px] uppercase tracking-widest text-white/60">Austin Market Edition</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
