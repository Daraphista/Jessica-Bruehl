'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/luxury-exterior.webp"
          alt="Austin luxury real estate"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark/80 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm font-bold block">
            Austin&apos;s Most Trusted Real Estate Team
          </span>
          <h1 className="text-6xl md:text-[10rem] font-serif leading-none text-white tracking-tighter">
            SIGNATURE<br />
            <span className="italic">Residential</span>
          </h1>
          <p className="text-white/60 uppercase tracking-[0.3em] text-sm md:text-xl font-light">
            Group
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="pt-12"
          >
            <a href="#listings" className="btn-luxury">
              View Active Listings
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 rotate-90 origin-left translate-x-3">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
