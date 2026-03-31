'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  {
    name: 'Home Search',
    href: '/properties',
    dropdown: [
      { name: 'Active Listings', href: '/properties/active' },
      { name: 'Recently Sold', href: '/properties/sold' },
      { name: 'Home Valuation', href: '/properties/valuation' },
    ],
  },
  { name: 'Communities', href: '/communities' },
  { name: 'Our Team', href: '/about' },
  { name: 'Active Listings', href: '/properties/active' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Blog', href: '/blog' },
  { name: 'Connect', href: '/contact' },
];

const burgerLinks = [
  { name: 'Home Search', href: '/properties' },
  { name: 'Active Listings', href: '/properties/active' },
  { name: 'Communities', href: '/communities' },
  { name: 'Our Team', href: '/about' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Blog', href: '/blog' },
  { name: 'Friends & Family Club', href: '/friends-family' },
  { name: 'Connect', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12',
          isScrolled ? 'bg-dark/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent'
        )}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span className="font-serif text-xl md:text-2xl tracking-tight text-white leading-none block">
              SIGNATURE
            </span>
            <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-bold block mt-0.5">
              Residential Group
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-gold transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={12} className="opacity-50" />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-4 w-48 bg-dark border border-white/10 p-4 flex flex-col space-y-3"
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="text-[9px] uppercase tracking-widest text-white/60 hover:text-gold transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Mega Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-dark flex flex-col"
          >
            <div className="flex-1 overflow-y-auto pt-32 pb-12 px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div className="space-y-6">
                  <h3 className="text-gold font-serif text-sm uppercase tracking-widest mb-8">Navigation</h3>
                  {burgerLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl md:text-5xl font-serif text-white hover:text-gold transition-colors block"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-gold font-serif text-sm uppercase tracking-widest mb-6">Contact</h3>
                    <p className="text-white/60 text-lg mb-2">(512) 532-5005</p>
                    <p className="text-white/60 text-lg">info@jkbrealty.com</p>
                    {/* TODO: Client to provide — confirm updated email under Signature Residential Group brand */}
                  </div>
                  <div>
                    <h3 className="text-gold font-serif text-sm uppercase tracking-widest mb-6">Office</h3>
                    <p className="text-white/60 text-lg">
                      1801 S Mopac Expy Ste 100<br />
                      Austin, TX 78746
                    </p>
                  </div>
                  <div className="flex space-x-6">
                    {['Instagram', 'Facebook', 'LinkedIn', 'YouTube'].map((social) => (
                      <a key={social} href="#" className="text-white/40 hover:text-gold text-sm uppercase tracking-widest">
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
