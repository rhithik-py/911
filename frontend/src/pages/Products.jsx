import React from 'react';
import ProductGrid from '../components/ProductGrid';

export default function Products() {
  return (
    <main className="min-h-screen pt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Products</h2>
        <p className="text-white/70 mt-2">Browse our curated collection.</p>
      </div>

      <section className="mt-6">
        <ProductGrid />
      </section>
    </main>
  );
}
