import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { cardHover } from '../utils/motionVariants';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardHover}
      className="bg-neutral-900/50 border border-white/6 rounded-xl p-4 hover:cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="h-44 flex items-center justify-center overflow-hidden rounded-lg">
        <img src={product.image} alt={product.title} className="object-contain h-full" />
      </div>
      <h5 className="mt-3 font-semibold text-white">{product.title}</h5>
      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-white/70">{product.brand}</div>
        <div className="text-accent2 font-bold">${product.price.toFixed(2)}</div>
      </div>
      <div className="mt-4 flex gap-2">
        <motion.button whileHover={{ scale: 1.03 }} className="px-3 py-1 bg-accent2 rounded text-white text-sm">
          Add to cart
        </motion.button>
        <motion.button whileHover={{ scale: 1.03 }} className="px-3 py-1 border border-white/6 rounded text-white/80 text-sm">
          Quick view
        </motion.button>
      </div>
    </motion.div>
  );
}
