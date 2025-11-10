import React from 'react';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import ProductGrid from '../components/ProductGrid';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
        <ProductCarousel />
      </motion.section>

      <section className="pt-6 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Latest Additions</h3>
        </div>
        <ProductGrid />
      </section>
    </main>
  );
}
