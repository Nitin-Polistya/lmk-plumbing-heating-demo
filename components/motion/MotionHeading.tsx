'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MotionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
}

export const MotionHeading: React.FC<MotionHeadingProps> = ({
  children,
  className = '',
  as: Component = 'h2',
  delay = 0.08,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.35, y: -15 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
};
