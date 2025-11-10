import { useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Small wrapper that returns ref and inView boolean. Use with Framer Motion variants
 */
export default function useInViewAnimate(options = { once: true, amount: 0.15 }) {
  const ref = useRef(null);
  const inView = useInView(ref, options);
  return { ref, inView };
}
