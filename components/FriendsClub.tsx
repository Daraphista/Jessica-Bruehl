'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// NEW SECTION — Custom Services: Friends & Family Club (include)

export default function FriendsClub() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-32 bg-dark text-white overflow-hidden" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="section-title text-white">
              The Friends &amp; <br />
              <span className="text-gold italic">Family Club</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-white/60 font-light max-w-2xl">
              <p>
                The relationship doesn&apos;t end at closing. The Friends &amp; Family Club is Signature Residential Group&apos;s monthly perks program for past clients, referral partners, and the broader community built around the team since 2003.
              </p>
              <p>
                Members receive exclusive market insights, curated local resources, and access to a network that reflects the same trust-first values the team has always operated by.
              </p>
              <p className="text-white/40 italic font-serif text-xl">
                It&apos;s not a newsletter — it&apos;s the inner circle.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 pt-8">
              <a href="/friends-family" className="btn-luxury">Join the Club</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/images/luxury-exterior-6.png"
                alt="Friends & Family Club — Signature Residential Group"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Detail */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-10 -left-10 bg-paper p-8 text-dark hidden md:block"
            >
              <p className="text-gold font-serif text-4xl mb-1">98%</p>
              <p className="text-[10px] uppercase tracking-widest text-dark/60">Repeat &amp; Referral Business</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
