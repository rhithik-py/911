import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { motion } from 'framer-motion';
import QuantitySelector from '../components/QuantitySelector';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];

  return (
    <main className="min-h-screen pt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-neutral-900/40 p-6 rounded-xl">
            <div className="h-96 flex items-center justify-center">
              <img src={product.image} alt={product.title} className="object-contain h-full" />
            </div>
          </motion.div>

          <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.08 }}>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="text-white/70 mt-2">{product.brand}</div>
            <div className="text-accent2 font-bold text-2xl mt-4">${product.price.toFixed(2)}</div>

            <p className="mt-6 text-white/70">{product.description}</p>

            <div className="mt-6 flex items-center gap-4">
              <QuantitySelector />
              <button className="px-5 py-3 bg-accent2 rounded text-white font-semibold shadow-neon-red">Add to cart</button>
              <button className="px-4 py-3 border border-white/6 rounded text-white/80">Buy now</button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
