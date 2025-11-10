import React from 'react';
import { motion } from 'framer-motion';

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md p-8 bg-neutral-900/50 border border-white/6 rounded-xl">
        <h2 className="text-2xl font-bold">Login</h2>

        <form className="mt-6 flex flex-col gap-4">
          <div className="input-floating">
            <input type="email" id="email" placeholder=" " required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-floating">
            <input type="password" id="password" placeholder=" " required />
            <label htmlFor="password">Password</label>
          </div>

          <div className="flex items-center justify-between mt-2">
            <label className="text-white/70 text-sm">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a className="text-sm text-accent2">Forgot?</a>
          </div>

          <button type="submit" className="mt-3 px-4 py-2 bg-accent2 rounded text-white">Sign in</button>
        </form>
      </motion.div>
    </main>
  );
}
