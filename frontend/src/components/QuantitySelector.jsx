import React from 'react';
import { motion } from 'framer-motion';

export default function QuantitySelector({ value = 1, onChange }) {
  const [qty, setQty] = React.useState(value);
  React.useEffect(() => onChange?.(qty), [qty]);

  return (
    <div className="flex items-center gap-2">
      <motion.button whileTap={{ scale: 0.95 }} onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-10 h-10 rounded border flex items-center justify-center">
        -
      </motion.button>
      <div className="w-12 text-center">{qty}</div>
      <motion.button whileTap={{ scale: 0.95 }} onClick={() => setQty((q) => q + 1)} className="w-10 h-10 rounded border flex items-center justify-center">
        +
      </motion.button>
    </div>
  );
}
