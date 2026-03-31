'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Career Sales Volume', value: '$555M+' },
  { label: 'Homes Closed', value: '1,200+' },
  { label: 'Repeat & Referral Business', value: '98%' },
  { label: 'Years in the Austin Market', value: '20+' },
  { label: 'of REALTORS® Nationwide', value: 'Top 1%' },
  { label: 'Austin Business Journal Ranking', value: '#7' },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-32 bg-dark text-white overflow-hidden" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title text-white mb-6">
                The Numbers<br />
                <span className="text-gold italic">Behind the Name</span>
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                Since 2003, Signature Residential Group has operated on a single principle: every client&apos;s outcome matters more than the next transaction. The result is a business built almost entirely on trust — 98% of sales have come from repeat clients or personal referrals.
              </p>
              <div className="flex flex-col gap-4">
                <a href="/properties/sold" className="btn-luxury w-fit">View Portfolio</a>
                <a href="/properties/valuation" className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-gold transition-colors">Home Valuation Tool →</a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="space-y-2 border-l border-white/10 pl-8"
              >
                <div className="text-5xl md:text-7xl font-serif text-gold">
                  {stat.value}
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
