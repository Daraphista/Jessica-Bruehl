'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Home, MapPin, TrendingUp, Truck, BarChart3, Globe, Users, Mail } from 'lucide-react';

const services = [
  { name: 'Search All Listings', icon: Search, href: '/properties' },
  { name: 'Sell Your Home', icon: Home, href: '/sell' },
  { name: 'Buy in Austin', icon: MapPin, href: '/buy' },
  { name: 'Investment Advisory', icon: TrendingUp, href: '/invest' },
  { name: 'Relocation Support', icon: Truck, href: '/relocation' },
  { name: 'Request a Home Valuation', icon: BarChart3, href: '/properties/valuation' },
  { name: 'Explore Our Communities', icon: Globe, href: '/communities' },
  { name: 'Meet the Team', icon: Users, href: '/about' },
  { name: 'Connect With Us', icon: Mail, href: '/contact' },
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-dark text-white" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:col-span-1 space-y-8"
          >
            <h2 className="section-title text-white">
              How We Can <br />
              <span className="text-gold italic">Help</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Whether you&apos;re buying, selling, investing, or relocating — the team is built to handle every dimension of your transaction.
            </p>
            <div className="pt-8">
              <a href="/contact" className="btn-luxury">Connect With Us</a>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.a
                key={service.name}
                href={service.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-white/5 border border-white/10 hover:border-gold transition-all duration-500 flex items-center justify-between"
              >
                <div className="flex items-center gap-6">
                  <service.icon size={24} className="text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-gold transition-colors">
                    {service.name}
                  </span>
                </div>
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-gold transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
