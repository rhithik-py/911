import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/40 border-b border-white/6">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-accent1/10 to-accent2/8 border border-white/6 shadow-neon-red">
              {/* simple car icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M3 13h18l1 3v3H2v-3l1-3z" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 13V9C5 7.895 5.895 7 7 7h10c1.105 0 2 .895 2 2v4" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold tracking-wide">911</div>
              <div className="text-xs text-white/60 -mt-1">Diecast Cars</div>
            </div>
          </motion.div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium px-2 py-1 rounded ${isActive ? 'text-accent2' : 'text-white/80'} hover:text-accent2 transition`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <button
            onClick={() => navigate('/cart')}
            className="text-sm px-3 py-2 border border-white/6 rounded hover:shadow-neon-blue transition"
          >
            Cart
          </button>

          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/login')} className="text-sm text-white/80 hover:text-white">
              Login
            </button>
            <button onClick={() => navigate('/register')} className="px-3 py-1 bg-accent2 rounded text-white text-sm shadow-neon-red">
              Sign up
            </button>
          </div>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="menu"
            onClick={() => setOpen((s) => !s)}
            className="w-10 h-10 rounded flex items-center justify-center border border-white/6"
          >
            <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.25 }}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </motion.div>
          </button>
        </div>
      </div>

      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}
