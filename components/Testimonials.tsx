'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Karen E.',
    role: 'Out-of-State Seller',
    text: 'Jessica and her team were fantastic. With both owners out of state, she handled everything — cleaning, staging, repairs, and check-ins — giving us total peace of mind. Her market expertise led to a full-price offer just four days after listing.',
  },
  {
    name: 'Rachael M.',
    role: 'Repeat Client',
    text: 'Jessica and her team at Signature Residential Group are the best. We\'ve worked with them for over eight years on both buying and selling, and their expertise, attention to detail, and local market knowledge are unmatched.',
  },
  {
    name: 'Charles D.',
    role: 'Seller',
    text: 'After our home sat on the market for months, the team gave us a smart, strategic plan. With their guidance on pricing and staging, we were under contract in just two weeks with an all-cash offer.',
  },
  {
    name: 'Verified Client',
    role: 'Past Client',
    text: 'Never have I seen the level of service, professionalism, and outright integrity Jessica exhibits. In a competitive market like Austin, you cannot afford to have anyone other than an expert working on your behalf.',
  },
  {
    name: 'Verified Client',
    role: 'Past Client',
    text: 'Jessica is the most amazing realtor I have met. Her attention to detail, customer service focus, and vision make her a truly different breed of realtor. She excelled in both selling and purchasing for us — two different skill sets, and with both she brought her full-service approach.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-dark text-white overflow-hidden" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="section-title text-white mb-8">
              What Clients <br />
              <span className="text-gold italic">Are Saying</span>
            </h2>
            <div className="flex gap-4">
              <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="pt-12">
              <a href="/reviews" className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-gold transition-colors">
                Read More Reviews →
              </a>
            </div>
          </motion.div>

          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <Quote size={48} className="text-gold opacity-30" />
                <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-white/80">
                  &quot;{testimonials[activeIndex].text}&quot;
                </p>
                <div>
                  <p className="text-gold font-bold uppercase tracking-widest text-sm mb-1">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-white/40 text-xs uppercase tracking-widest">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
