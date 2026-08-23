'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

interface SectionVisualProps {
  src: string;
  alt: string;
  side: 'left' | 'right';
  bgColor: string; // e.g. '#F7FAFD' | '#0E2238' | '#E8EFF6'
  sectionRef: React.RefObject<HTMLElement | null>;
  priority?: boolean;
  objectPosition?: string;
  isHero?: boolean;
  className?: string;
}

export const SectionVisual: React.FC<SectionVisualProps> = ({
  src,
  alt,
  side,
  bgColor,
  sectionRef,
  priority = false,
  objectPosition = 'object-top',
  isHero = false,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Measure section-level scroll progress relative to viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Soft spring response (stiffness: 60, damping: 24, mass: 1.0)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 24,
    mass: 1.0,
  });

  // Motion calculation: 0.00 -> 0.32 Enter, 0.32 -> 0.68 Hold, 0.68 -> 1.00 Exit
  const enterOffset = isHero ? 15 : side === 'right' ? 75 : -75;
  const exitOffset = side === 'right' ? 75 : -75;

  const xTransform = useTransform(
    smoothProgress,
    [0, 0.32, 0.68, 1],
    [`${enterOffset}%`, '0%', '0%', `${exitOffset}%`]
  );

  return (
    <>
      {/* Desktop Viewport Full-Bleed Section Visual Container
          NOTE: Outer container intentionally does NOT have overflow-hidden on the inner edge
          to eliminate GPU compositing clipping boundary lines at the 50/50 line! */}
      <div
        className={`hidden lg:block absolute top-0 bottom-0 ${
          side === 'right' ? 'right-0' : 'left-0'
        } w-[54vw] h-full z-10 bg-transparent pointer-events-none ${className}`}
      >
        <motion.div
          style={{
            x: shouldReduceMotion ? '0%' : xTransform,
          }}
          className="relative w-full h-full pointer-events-auto border-none outline-none"
        >
          {/* Photo Container (overflow-hidden clips ONLY the photo rectangular box) */}
          <div className="absolute inset-0 overflow-hidden border-none outline-none">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="54vw"
              priority={priority}
              className={`object-cover ${objectPosition} filter brightness-[1.02] contrast-[1.02] border-none outline-none`}
            />
          </div>

          {/* Reference Curve Overlay Element <i>:
              Extends freely past the inner edge into section background without container clipping.
              Completely seamless curve transition with ZERO vertical line! */}
          {side === 'right' ? (
            <i
              className="absolute top-[-15%] bottom-[-15%] z-2 pointer-events-none block border-none outline-none"
              style={{
                width: '28vw',
                left: '-14vw',
                backgroundColor: bgColor,
                borderRadius: '0 58% 58% 0 / 0 50% 50% 0',
              }}
            />
          ) : (
            <i
              className="absolute top-[-15%] bottom-[-15%] z-2 pointer-events-none block border-none outline-none"
              style={{
                width: '28vw',
                right: '-14vw',
                backgroundColor: bgColor,
                borderRadius: '58% 0 0 58% / 50% 0 0 50%',
              }}
            />
          )}
        </motion.div>
      </div>

      {/* Mobile & Tablet Responsive Visual (Stacked) */}
      <div className="lg:hidden w-full h-64 sm:h-80 relative my-6 rounded-2xl overflow-hidden shadow-lg z-10">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          priority={priority}
          className={`object-cover ${objectPosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E2238]/50 via-transparent to-transparent" />
      </div>
    </>
  );
};
