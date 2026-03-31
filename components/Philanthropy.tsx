'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// NEW SECTION — Philanthropy (include)

const causes = [
  'Armstrong Community Music School',
  'Austin Sunshine Camps',
  'Austin Children\'s Shelter',
  'Keller Williams Cares',
  'Austin Under 40 — Former Chair',
];

export default function Philanthropy() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-32 bg-paper text-dark overflow-hidden" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/images/luxury-exterior-7.png"
                alt="Jessica Bruehl — Community Involvement"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <h2 className="section-title text-dark">
              Invested in <br />
              <span className="text-gold italic">Austin</span>
            </h2>
            <p className="text-dark/60 text-lg font-light leading-relaxed max-w-xl">
              Jessica has been involved in Austin&apos;s community as long as she has been selling homes in it. She volunteers routinely, sits on several charity boards, and served as a former Chair of Austin Under 40.
            </p>
            <p className="text-dark/60 text-lg font-light leading-relaxed max-w-xl">
              Her current philanthropic focus includes organizations that reflect a commitment to the city&apos;s most important asset: the people who live here.
            </p>

            <ul className="space-y-4 pt-4">
              {causes.map((cause, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-gold shrink-0" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-dark/70">{cause}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <a href="/philanthropy" className="btn-luxury border-dark text-dark hover:bg-dark hover:text-white">
                Learn About Our Involvement
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
