'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const accolades = [
  'Ranked #7 — Austin Business Journal',
  'Top 1% of REALTORS® Nationwide',
  'Member of the Elite 25',
  'NAR 30 Under 30 Recipient',
  '$555M+ in Career Sales',
  '1,200+ Homes Closed',
  'KW #1 Most Closed Volume — Individual',
  'KW #1 Most Closed Properties — Individual',
  'Member, Agents\' Leadership Council',
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative py-32 overflow-hidden bg-paper text-dark" ref={ref}>
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
        <span className="text-[40rem] font-serif font-bold whitespace-nowrap select-none">SIGNATURE</span>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="section-title text-dark">
              Jessica Bruehl — <br />
              <span className="text-gold italic">Top 1% Nationwide</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-dark/70 font-light max-w-2xl">
              <p>
                Jessica Bruehl has been the standard for real estate advisory in Austin since 2003. As founder and Broker of Signature Residential Group, she built a team of specialists — each focused on a distinct part of the transaction process — so that no client ever gets a generalist when they need an expert.
              </p>
              <p>
                With over $555M in career sales and 1,200+ homes closed, Jessica personally oversees every client relationship and transaction the team touches. Her investor&apos;s lens — built since purchasing her first property as a UT Austin student on an athletic scholarship — informs every pricing strategy, negotiation, and market call she makes on behalf of her clients.
              </p>
              <p>
                Jessica and her team serve buyers, sellers, investors, and relocating clients — from Austin locals to those moving from across the country or internationally — with the same advisory depth and attention to detail that has kept 98% of the team&apos;s business coming from repeat clients and personal referrals.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <a href="/about" className="btn-luxury border-dark text-dark hover:bg-dark hover:text-white">
                Meet the Full Team
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-xl mx-auto overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/images/luxury-interior.png"
                alt="Jessica Bruehl — Founder, Signature Residential Group"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-10 -left-10 bg-dark p-8 text-white hidden md:block"
            >
              <p className="text-gold font-serif text-4xl mb-1">$555M+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/60">Career Sales Volume</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Accolades Banner */}
        <div className="mt-40 pt-20 border-t border-dark/10 overflow-hidden">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-dark/40 mb-12">Awards & Recognition</p>
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex whitespace-nowrap"
          >
            {[...accolades, ...accolades].map((item, i) => (
              <span key={i} className="text-xl md:text-3xl font-serif font-bold tracking-tighter text-dark/40 mx-12">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
