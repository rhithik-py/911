import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 320, damping: 30 } },
  exit: { x: '100%', transition: { ease: 'easeInOut', duration: 0.2 } }
};

export default function MobileMenu({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          className="fixed inset-y-0 right-0 w-72 bg-neutral-900/96 backdrop-blur-md border-l border-white/6 z-50"
        >
          <div className="p-5 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-bold text-lg">911</div>
                <div className="text-xs text-white/60">Diecast Cars</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/60">Close</button>
            </div>

            <nav className="flex flex-col gap-3 mt-4">
              <Link to="/" onClick={() => setOpen(false)} className="py-2 text-white/80">Home</Link>
              <Link to="/products" onClick={() => setOpen(false)} className="py-2 text-white/80">Products</Link>
              <Link to="/community" onClick={() => setOpen(false)} className="py-2 text-white/80">Community</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="py-2 text-white/80">Contact</Link>
              <Link to="/cart" onClick={() => setOpen(false)} className="py-2 text-white/80">Cart</Link>
            </nav>

            <div className="mt-auto">
              <Link to="/login" onClick={() => setOpen(false)} className="block py-2 text-center border border-white/6 rounded">Login</Link>
              <Link to="/register" onClick={() => setOpen(false)} className="block mt-3 py-2 text-center bg-accent2 rounded text-white">Sign Up</Link>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
