'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = ['Active Listings', 'Featured Properties', 'Recently Sold'];

const listings = [
  { id: 1, image: '/images/luxury-exterior-2.webp', label: 'Active Listing — Austin, TX' },
  { id: 2, image: '/images/luxury-exterior-3.jpg', label: 'Active Listing — Austin, TX' },
  { id: 3, image: '/images/luxury-exterior-4.webp', label: 'Active Listing — Austin, TX' },
  { id: 4, image: '/images/luxury-exterior-5.jpg', label: 'Featured Property — Austin, TX' },
];

export default function Listings() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="listings" className="py-32 px-6 md:px-12 bg-dark" ref={ref}>
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-white mb-4">
              Current <span className="text-gold italic">Listings</span>
            </h2>
            <p className="text-white/40 uppercase tracking-[0.2em] text-sm max-w-xl">
              Properties across Austin&apos;s most sought-after communities — from Westlake and Eanes ISD to the waterfront and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            {categories.map((cat) => (
              <Link key={cat} href="/properties/active" className="btn-luxury border-white/20 text-white/60 hover:border-gold hover:text-gold text-[10px]">
                {cat}
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={listing.image}
                  alt={listing.label}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gold font-serif text-2xl mb-2">Price Upon Request</p>
                  <h3 className="text-white text-lg font-medium mb-1">Austin Property</h3>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-4">{listing.label}</p>

                  <div className="h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-700 mb-4" />

                  <p className="text-white/40 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Details
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
