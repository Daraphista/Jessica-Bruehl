'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Home, MapPin, Truck, TrendingUp } from 'lucide-react';

// NEW SECTION — Guides (example)

const guides = [
  { name: 'First-Time Buyer\'s Guide to Austin', icon: Home, href: '/guides/first-time-buyers' },
  { name: 'Seller\'s Roadmap: From Listing to Closing', icon: Home, href: '/guides/sellers' },
  { name: 'Neighborhood Guide to Westlake & Eanes ISD', icon: MapPin, href: '/guides/westlake' },
  { name: 'Relocation Guide to the Austin Metroplex', icon: Truck, href: '/guides/relocation' },
  { name: 'Investment Property Primer: Austin Market Edition', icon: TrendingUp, href: '/guides/investment' },
];

export default function Guides() {
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:col-span-1 space-y-8"
          >
            <BookOpen size={40} className="text-gold" />
            <h2 className="section-title text-white">
              Your Austin <br />
              <span className="text-gold italic">Playbook</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Everything you need to navigate the Austin market — whether you&apos;re buying, selling, investing, or relocating.
            </p>
            <div className="pt-8">
              <a href="/guides" className="btn-luxury">Browse All Guides</a>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guides.map((guide, index) => (
              <motion.a
                key={guide.name}
                href={guide.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-white/5 border border-white/10 hover:border-gold transition-all duration-500 flex items-center justify-between"
              >
                <div className="flex items-center gap-6">
                  <guide.icon size={24} className="text-gold group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-gold transition-colors leading-relaxed">
                    {guide.name}
                  </span>
                </div>
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-gold transition-all duration-500 shrink-0 ml-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
