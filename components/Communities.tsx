'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const communities = [
  {
    name: 'Downtown & The \'04',
    description: 'Urban Austin at its most vibrant. Condos, lofts, and walkable living in the heart of the city.',
    image: '/images/community-shot.png',
  },
  {
    name: 'Waterfront',
    description: 'Lake Austin and Lake Travis properties where the lifestyle is as valuable as the land.',
    image: '/images/luxury-exterior-6.png',
  },
  {
    name: 'Eanes ISD & SW Austin',
    description: 'The most sought-after school district in the metro, with established neighborhoods and exceptional homes.',
    image: '/images/luxury-exterior-7.png',
  },
  {
    name: 'East Austin & Easton Park',
    description: 'A dynamic, fast-evolving corridor blending new development with Austin\'s creative culture.',
    image: '/images/luxury-exterior-8.png',
  },
  {
    name: 'Texas Hill Country & Lake Travis ISD',
    description: 'Acreage, privacy, and wide-open spaces with strong school access and proximity to the city.',
    image: '/images/luxury-exterior-2.webp',
  },
  {
    name: 'North Central Austin',
    description: 'Established, character-rich neighborhoods with strong long-term value.',
    image: '/images/luxury-exterior-3.jpg',
  },
  {
    name: 'North Austin',
    description: 'A fast-growing corridor with excellent access, new construction, and strong investment fundamentals.',
    image: '/images/luxury-exterior-4.webp',
  },
  {
    name: 'Hays County',
    description: 'Southern expansion market with growing communities and compelling entry-level luxury options.',
    image: '/images/luxury-exterior-5.jpg',
  },
  {
    name: 'Williamson County',
    description: 'Northern growth hub offering space, value, and convenient access to the metro.',
    image: '/images/luxury-exterior.webp',
  },
];

export default function Communities() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-paper text-dark" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-dark mb-4">
              Where We <br />
              <span className="text-gold italic">Work</span>
            </h2>
            <p className="text-dark/40 uppercase tracking-[0.2em] text-sm">
              Deep Knowledge of Austin&apos;s Most Distinct Neighborhoods
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <a href="/communities" className="btn-luxury border-dark text-dark hover:bg-dark hover:text-white">
              Explore All Communities
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer"
            >
              <Image
                src={area.image}
                alt={area.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-50"
              />

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white font-serif text-2xl mb-4 group-hover:mb-2 transition-all duration-500">
                  {area.name}
                </h3>
                <div className="h-[1px] w-12 bg-gold group-hover:w-full transition-all duration-700 mb-4" />
                <p className="text-white/0 group-hover:text-white/80 text-sm leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
