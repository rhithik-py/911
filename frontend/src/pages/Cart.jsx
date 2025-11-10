import React from 'react';
import { motion } from 'framer-motion';

export default function Cart() {
  // Demo: static cart UI. Connect to global state or backend in real app.
  const cartItems = [
    { id: 'p1', title: 'Porsche 911 GT3 RS', price: 129.99, qty: 1 },
    { id: 'p2', title: 'Ferrari 488 Pista', price: 149.99, qty: 2 }
  ];

  const total = cartItems.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <main className="min-h-screen pt-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-neutral-900/50 border border-white/6 p-4 rounded-xl">
            <ul className="flex flex-col gap-4">
              {cartItems.map((it) => (
                <li key={it.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{it.title}</div>
                    <div className="text-sm text-white/70">Qty: {it.qty}</div>
                  </div>
                  <div className="text-accent2 font-bold">${(it.price * it.qty).toFixed(2)}</div>
                </li>
              ))}
            </ul>
          </div>

          <motion.aside className="bg-neutral-900/50 border border-white/6 p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="text-white/70">Subtotal</div>
              <div className="font-bold text-xl">${total.toFixed(2)}</div>
            </div>

            <div className="mt-6">
              <button className="w-full py-3 bg-accent2 rounded text-white font-semibold">Checkout</button>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}
