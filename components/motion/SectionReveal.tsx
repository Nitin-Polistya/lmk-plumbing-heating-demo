'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  sectionRef?: React.RefObject<HTMLElement | null>;
  delay?: number;
  className?: string;
  isHero?: boolean;
}

const easeCurve = [0.22, 1, 0.36, 1] as const;

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  sectionRef,
  delay = 0,
  className = '',
  isHero = false,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll(
    sectionRef ? { target: sectionRef, offset: ['start end', 'end start'] } : {}
  );

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.9,
  });

  // Scroll Exit motion (0.72 -> 0.92): opacity 1 -> 0.25, y 0 -> -14px
  const exitOpacity = useTransform(smoothProgress, [0.72, 0.92], [1, 0.25]);
  const exitY = useTransform(smoothProgress, [0.72, 0.92], [0, -14]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (!sectionRef) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-15%' }}
        transition={{ duration: 0.6, delay, ease: easeCurve }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{
        opacity: exitOpacity,
        y: exitY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ContentItemProps {
  children: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement | null>;
  type: 'eyebrow' | 'heading' | 'paragraph' | 'features' | 'cta';
  className?: string;
  isHero?: boolean;
}

export const ContentItem: React.FC<ContentItemProps> = ({
  children,
  sectionRef,
  type,
  className = '',
  isHero = false,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.9,
  });

  // Scroll-linked exit fade
  const exitOpacity = useTransform(smoothProgress, [0.72, 0.92], [1, 0.25]);
  const exitY = useTransform(smoothProgress, [0.72, 0.92], [0, -14]);

  // Entrance motion configuration:
  // eyebrow: y 12 -> 0, duration 0.45s, delay 0.0s
  // heading: y 28 -> 0, duration 0.65s, delay 0.08s
  // paragraph: y 20 -> 0, duration 0.55s, delay 0.16s
  // features: y 18 -> 0, duration 0.55s, delay 0.22s
  // cta: y 12 -> 0, scale 0.98 -> 1, duration 0.50s, delay 0.30s
  const animConfig = {
    eyebrow: { initialY: 12, duration: 0.45, delay: 0.0, scale: 1 },
    heading: { initialY: 28, duration: 0.65, delay: 0.08, scale: 1 },
    paragraph: { initialY: 20, duration: 0.55, delay: 0.16, scale: 1 },
    features: { initialY: 18, duration: 0.55, delay: 0.22, scale: 1 },
    cta: { initialY: 12, duration: 0.50, delay: 0.30, scale: 0.98 },
  };

  const { initialY, duration, delay, scale: initialScale } = animConfig[type];

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      style={{
        opacity: exitOpacity,
        y: exitY,
      }}
      className={className}
    >
      <motion.div
        initial={{ opacity: 0, y: initialY, scale: initialScale }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: isHero, margin: '-15%' }}
        transition={{
          duration,
          delay,
          ease: easeCurve,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
