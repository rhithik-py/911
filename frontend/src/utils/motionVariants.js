export const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const cardHover = {
  rest: { scale: 1, boxShadow: '0 6px 24px rgba(0,0,0,0.45)' },
  hover: { scale: 1.02, boxShadow: '0 12px 40px rgba(0,0,0,0.6)', transition: { duration: 0.25 } }
};

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};
