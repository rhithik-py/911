import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
