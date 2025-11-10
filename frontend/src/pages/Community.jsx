import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  { id: 1, author: 'Alex', text: 'Picked up a mint Porsche 911 - amazing finish!', likes: 14 },
  { id: 2, author: 'Rina', text: 'Anyone know a good display case for 1:18 models?', likes: 8 }
];

export default function Community() {
  return (
    <main className="min-h-screen pt-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Community</h2>
        <p className="text-white/70 mt-1">Share finds, ask questions, and connect with collectors.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((p, i) => (
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={p.id} className="bg-neutral-900/50 p-4 rounded-xl border border-white/6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-white/8 flex items-center justify-center font-semibold">{p.author[0]}</div>
                <div>
                  <div className="font-semibold">{p.author}</div>
                  <div className="text-white/70 text-sm mt-1">{p.text}</div>
                  <div className="mt-3 text-white/60 text-sm">Likes: {p.likes}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
