'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone } from 'lucide-react';

// NEW SECTION — Office Locations (example)

const offices = [
  {
    city: 'Austin (Westlake)',
    address: '1801 S Mopac Expy Ste 100, Austin, TX 78746',
    phone: '(512) 532-5005',
    image: '/images/luxury-exterior-8.png',
  },
  {
    city: 'Round Rock',
    address: '100 Commerce Blvd, Suite 200, Round Rock, TX 78664',
    phone: '(512) 555-0182',
    image: '/images/luxury-exterior-2.webp',
  },
  {
    city: 'Cedar Park',
    address: '900 N Bell Blvd, Suite 110, Cedar Park, TX 78613',
    phone: '(512) 555-0197',
    image: '/images/luxury-exterior.webp',
  },
];

export default function Offices() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-32 bg-dark text-white" ref={ref}>
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
            <h2 className="section-title text-white mb-4">
              Our <span className="text-gold italic">Offices</span>
            </h2>
            <p className="text-white/40 uppercase tracking-[0.2em] text-sm">
              Only one confirmed office location exists at this time.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-10 bg-white/5 border border-white/10 hover:border-gold transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-8">
                <Image
                  src={office.image}
                  alt={office.city}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/10 px-4 py-1.5 text-white text-[10px] uppercase tracking-widest font-bold backdrop-blur-sm">
                  {office.city}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={16} className="text-gold shrink-0 mt-1" />
                  <p className="text-white/60 text-sm leading-relaxed">{office.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={16} className="text-gold shrink-0" />
                  <p className="text-white/60 text-sm">{office.phone}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <a href="#" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-gold transition-colors flex items-center gap-2">
                    Get Directions <MapPin size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
