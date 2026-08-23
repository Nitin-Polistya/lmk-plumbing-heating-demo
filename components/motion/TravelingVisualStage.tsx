'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

interface TravelingVisualStageProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const TravelingVisualStage: React.FC<TravelingVisualStageProps> = ({ containerRef }) => {
  const shouldReduceMotion = useReducedMotion();

  // Track scroll progress across Hero -> Diagnostics container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth out scroll transforms with spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Position transform: 0 (Hero Right) -> 0.65 (Diagnostics Left) -> 1.0 (Fade out after Diagnostics)
  // X Translate: Desktop moves from 0 (Right column slot) to -52vw (Left column slot in Diagnostics)
  const xTransform = useTransform(smoothProgress, [0, 0.2, 0.6, 0.85], ['0vw', '0vw', '-48vw', '-48vw']);
  const yTransform = useTransform(smoothProgress, [0, 0.2, 0.6, 0.85], ['0px', '20px', '40px', '40px']);
  const scaleTransform = useTransform(smoothProgress, [0, 0.2, 0.6, 0.85], [1, 0.98, 0.92, 0.9]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.75, 0.9, 1], [1, 1, 0.2, 0]);

  // Clip-path transformation: Hero organic architectural left cut -> Diagnostics rounded rectangle
  const clipPathTransform = useTransform(
    smoothProgress,
    [0, 0.35, 0.65],
    [
      'polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)',
      'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
      'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    ]
  );

  const borderRadiusTransform = useTransform(
    smoothProgress,
    [0, 0.4, 0.65],
    ['0.75rem 0 0 2.5rem', '1.5rem 0 0 2rem', '1.75rem 1.75rem 1.75rem 1.75rem']
  );

  if (shouldReduceMotion) {
    return (
      <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/images/engineer_boiler.png"
          alt="Gasgenics Heating Engineer diagnosing gas boiler"
          fill
          priority
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none sticky top-20 z-30 h-0 overflow-visible w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating Travelling Visual Canvas Slot */}
      <div className="relative w-full flex justify-end">
        <motion.div
          style={{
            x: xTransform,
            y: yTransform,
            scale: scaleTransform,
            opacity: opacityTransform,
          }}
          className="w-full lg:w-[46%] h-[480px] lg:h-[580px] pointer-events-auto shadow-2xl relative transition-shadow duration-500"
        >
          {/* Integrated Image Frame */}
          <motion.div
            style={{
              clipPath: clipPathTransform,
              borderRadius: borderRadiusTransform,
            }}
            className="relative w-full h-full overflow-hidden bg-[#0E2238] border-l-2 border-y-2 border-[#1666D9]/30"
          >
            <Image
              src="/images/engineer_boiler.png"
              alt="Gasgenics Heating Engineer diagnosing gas boiler"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              priority
              className="object-cover object-top filter brightness-[1.02]"
            />
            {/* Subtle Gradient Inset */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0E2238]/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
