import React from 'react';
import { motion } from 'framer-motion';

const carVariants = {
  float: { y: [0, -8, 0], transition: { yoyo: Infinity, duration: 3, ease: 'easeInOut' } },
  tilt: { rotate: [0, 2, -2, 0], transition: { yoyo: Infinity, duration: 6, ease: 'easeInOut' } }
};

export default function Hero() {
  return (
    <section className="pt-12 pb-14">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold neon-text"
          >
            911 <span className="text-accent2">Diecast</span> Cars
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-4 text-white/70 max-w-xl">
            Curated collectible diecast cars — precision finishes, limited runs, and museum-level presentation. Shop premium releases
            and join the community of enthusiasts.
          </motion.p>

          <div className="mt-6 flex gap-4">
            <motion.button whileHover={{ scale: 1.03 }} className="px-5 py-2 bg-accent2 rounded text-white shadow-neon-red">
              Shop Featured
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} className="px-5 py-2 border border-white/6 rounded text-white/90">
              Explore Collection
            </motion.button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <motion.div
            className="w-80 h-44 rounded-2xl flex items-center justify-center card-glow bg-gradient-to-br from-black/40 via-neutral-800/40 to-black/40 border border-white/6"
            variants={carVariants}
            animate="float"
          >
            {/* stylized car graphic */}
            <motion.svg width="320" height="140" viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" initial="tilt" animate="tilt" variants={carVariants}>
              <rect x="10" y="40" rx="20" ry="20" width="300" height="60" fill="url(#g)" stroke="rgba(255,255,255,0.06)" />
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#111827"/>
                  <stop offset="0.5" stopColor="#1F2937"/>
                  <stop offset="1" stopColor="#111827"/>
                </linearGradient>
              </defs>
              <g fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2">
                <path d="M40 60 L80 40 L240 40 L280 60" />
                <circle cx="80" cy="105" r="14" fill="#111827" stroke="rgba(255,255,255,0.08)" />
                <circle cx="240" cy="105" r="14" fill="#111827" stroke="rgba(255,255,255,0.08)" />
              </g>
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
