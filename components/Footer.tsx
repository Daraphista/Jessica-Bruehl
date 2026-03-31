'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const linkGroups = [
  {
    label: 'Explore',
    links: ['Home Search', 'Active Listings', 'Communities', 'Recently Sold'],
    hrefs: ['/properties', '/properties/active', '/communities', '/properties/sold'],
  },
  {
    label: 'Company',
    links: ['Our Team', 'Reviews', 'Blog', 'Friends & Family Club'],
    hrefs: ['/about', '/reviews', '/blog', '/friends-family'],
  },
  {
    label: 'Connect',
    links: ['Contact Us', 'Request a Valuation', 'Relocation Support', 'Investment Advisory'],
    hrefs: ['/contact', '/properties/valuation', '/relocation', '/invest'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-32 pb-12 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/" className="block">
              <span className="font-serif text-3xl tracking-tighter block">SIGNATURE</span>
              <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-bold block mt-1">Residential Group</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Austin&apos;s most trusted real estate team — built on referrals, driven by results, serving the community since 2003.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {linkGroups.map((group) => (
            <div key={group.label}>
              <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-8">{group.label}</h4>
              <ul className="space-y-4">
                {group.links.map((item, i) => (
                  <li key={item}>
                    <Link href={group.hrefs[i]} className="text-white/60 hover:text-white text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-widest text-white/20">
            <span>© 2026 Signature Residential Group. All Rights Reserved.</span>
            <span>Each office is independently owned and operated.</span>
            <span>Keller Williams Austin Southwest. Licensed in Texas.</span>
            <Link href="#" className="hover:text-white transition-colors">TREC Consumer Protection Notice</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          <div className="flex items-center gap-8 opacity-20 grayscale">
            <span className="text-xs font-bold tracking-tighter">KELLER WILLIAMS</span>
            <span className="text-xs font-bold tracking-tighter">REALTOR®</span>
            <span className="text-xs font-bold tracking-tighter">EQUAL HOUSING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
