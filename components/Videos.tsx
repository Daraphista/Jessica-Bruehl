'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

// NEW SECTION — Featured Videos (example)

export default function Videos() {
  const [playing, setPlaying] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-32 bg-paper text-dark" ref={ref}>
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
              Inside the <br />
              <span className="text-gold italic">Properties</span>
            </h2>
            <p className="text-dark/60 text-lg font-light leading-relaxed max-w-xl">
              Step inside Austin&apos;s most compelling listings with cinematic property tours, neighborhood walkthroughs, and monthly market updates from the Signature Residential team.
            </p>
            <div className="pt-8">
              <a href="#" className="btn-luxury border-dark text-dark hover:bg-dark hover:text-white">
                Visit Our YouTube Channel
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-video rounded-sm overflow-hidden cursor-pointer group"
            onClick={() => setPlaying(!playing)}
          >
            <Image
              src="/images/luxury-interior-5.png"
              alt="Signature Residential Group property tour"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/10 transition-all duration-500" />
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                  <Play size={32} className="text-gold group-hover:text-dark ml-1 transition-colors duration-500" />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
