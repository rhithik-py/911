import React from 'react';
import { motion } from 'framer-motion';
import products from '../data/products';

export default function ProductCarousel() {
  const [index, setIndex] = React.useState(0);
  const length = products.length;

  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % length), 4000);
    return () => clearInterval(id);
  }, [length]);

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Featured Collectibles</h3>
          <div className="flex gap-2">
            <button onClick={() => setIndex((i) => (i - 1 + length) % length)} className="px-3 py-1 border rounded border-white/6">Prev</button>
            <button onClick={() => setIndex((i) => (i + 1) % length)} className="px-3 py-1 border rounded border-white/6">Next</button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: -index * 100 + '%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="flex"
            style={{ width: `${length * 100}%` }}
          >
            {products.map((p) => (
              <div key={p.id} className="w-full md:w-1/3 px-2">
                <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900/60 border border-white/6 rounded-xl p-4">
                  <div className="h-48 flex items-center justify-center overflow-hidden rounded-lg">
                    <img src={p.image} alt={p.title} className="object-contain h-full" />
                  </div>
                  <h4 className="mt-3 font-semibold">{p.title}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-sm text-white/70">{p.brand}</div>
                    <div className="text-accent2 font-bold">${p.price.toFixed(2)}</div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
