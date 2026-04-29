import { motion } from 'motion/react';

export function LoadingState() {
  return (
    <motion.div 
      className="absolute inset-0 bg-white pointer-events-none z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 1.5, // Total duration of 1.5s
        times: [0, 0.2, 1], // Fade out in 0.3s (20%), fade in over 1.2s (80%)
        ease: 'easeInOut'
      }}
    />
  );
}