'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const pressItems = [
  {
    title: 'Top Residential Real Estate Agents in Austin: 2021 Rankings',
    media: 'Austin Business Journal',
    image: '/images/luxury-interior-2.png',
    link: '#',
  },
  {
    title: 'Building a Referral-First Business in a Competitive Market',
    media: 'The Real Estate Advisory',
    image: '/images/luxury-interior-3.png',
    link: '#',
  },
  {
    title: 'The Agents Who Know Austin Best',
    media: 'Austin Lifestyle Magazine',
    image: '/images/luxury-interior-4.png',
    link: '#',
  },
];

export default function Press() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-dark mb-4">
              As Seen <span className="text-gold italic">In</span>
            </h2>
            <p className="text-dark/40 uppercase tracking-[0.2em] text-sm">
              Press & Media Highlights
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <a href="/media" className="btn-luxury border-dark text-dark hover:bg-dark hover:text-white">
              View All Press
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pressItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group block space-y-6"
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="space-y-3">
                <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">
                  {item.media}
                </p>
                <h3 className="text-2xl font-serif leading-snug group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-dark/40 text-[10px] uppercase tracking-widest pt-4">Read Article →</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
