import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedMapIcon() {
  return (
    <motion.div initial={{ scale: 0.96 }} animate={{ scale: [0.96, 1.02, 0.96] }} transition={{ repeat: Infinity, duration: 4 }} className="w-40 h-40 rounded-lg flex items-center justify-center bg-neutral-900/40 border border-white/6">
      <svg width="70" height="70" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C14.8 2 17 4.2 17 7c0 5-5 9-5 9s-5-4-5-9c0-2.8 2.2-5 5-5z" stroke="#fff" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="1.6" fill="#D72638" />
      </svg>
    </motion.div>
  );
}
