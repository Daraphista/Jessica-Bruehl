'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const posts = [
  {
    title: 'Austin Market Update: What Buyers and Sellers Need to Know',
    excerpt: 'An in-depth look at current market conditions across the Austin metroplex — inventory, pricing trends, and what to watch for in the coming months.',
    date: 'March 2026',
    author: 'Jessica Bruehl',
    image: '/images/luxury-interior-3.png',
  },
  {
    title: 'Why Eanes ISD Continues to Drive Demand in SW Austin',
    excerpt: 'Families relocating to Austin consistently rank school access as a top priority. Here\'s what makes Eanes ISD one of the most sought-after addresses in the metro.',
    date: 'February 2026',
    author: 'Signature Residential Team',
    image: '/images/luxury-interior-4.png',
  },
  {
    title: 'The Investor\'s Guide to Austin Real Estate in 2026',
    excerpt: 'With 20+ years as an active investor, Jessica Bruehl shares her perspective on where Austin\'s best investment opportunities are emerging.',
    date: 'February 2026',
    author: 'Jessica Bruehl',
    image: '/images/luxury-interior-5.png',
  },
];

export default function Blog() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-dark text-white" ref={ref}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-white mb-4">
              Austin Market <br />
              <span className="text-gold italic">Insights</span>
            </h2>
            <p className="text-white/40 uppercase tracking-[0.2em] text-sm">
              Trends, Community Updates &amp; Real Estate Perspective
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <a href="/blog" className="btn-luxury">
              Visit the Blog
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group space-y-6"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-white/40">
                  <span>{post.date}</span>
                  <div className="w-4 h-[1px] bg-white/20" />
                  <span>By {post.author}</span>
                </div>
                <h3 className="text-2xl font-serif leading-snug group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-block text-[10px] uppercase tracking-widest text-gold font-bold pt-2 border-b border-gold/0 hover:border-gold transition-all">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
