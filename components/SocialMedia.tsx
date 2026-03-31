'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const platforms = [
  { name: 'Instagram', icon: Instagram, handle: '@signature_residential_group', href: '#' },
  { name: 'YouTube', icon: Youtube, handle: '@SignatureResidentialGroup', href: '#' },
  { name: 'Facebook', icon: Facebook, handle: 'Signature Residential Group', href: '#' },
  { name: 'LinkedIn', icon: Linkedin, handle: 'Signature Residential Group', href: '#' },
];

export default function SocialMedia() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-paper text-dark overflow-hidden" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Example Badge */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
            <span>✦</span>
            <span>Example Section — This is a preview of what this section could look like on your site</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:col-span-1 space-y-12"
          >
            <h2 className="section-title text-dark">
              Let&apos;s Get <br />
              <span className="text-gold italic">Social</span>
            </h2>

            <p className="text-dark/50 text-sm font-light leading-relaxed max-w-sm">
              Social media accounts exist but current follower counts are below the threshold for a dedicated section. Revisit once the Signature Residential brand accounts are established.
            </p>

            <div className="pt-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-luxury border-dark text-dark hover:bg-dark hover:text-white">
                Follow @signature_residential_group
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {platforms.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col items-center justify-center p-12 bg-dark/5 border border-dark/10 hover:border-gold transition-all duration-500 rounded-sm"
              >
                <social.icon size={32} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{social.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-dark/40 font-bold text-center">{social.handle}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
