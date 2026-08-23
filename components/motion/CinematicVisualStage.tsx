'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { TravelFrame } from '../visual/TravelFrame';

interface CinematicVisualStageProps {
  trackRef: React.RefObject<HTMLDivElement | null>;
}

export const CinematicVisualStage: React.FC<CinematicVisualStageProps> = ({ trackRef }) => {
  const shouldReduceMotion = useReducedMotion();

  const [currentAsset, setCurrentAsset] = useState<string>('/images/engineer_boiler.png');
  const [maskMode, setMaskMode] = useState<'left' | 'right'>('right');
  const [maskCrossfadeRatio, setMaskCrossfadeRatio] = useState<number>(0);

  // Measure total page scroll progress across all alternating sections
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Spring smoothing for trackpad/wheel interactions & instant reverse scroll response
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 24,
    restDelta: 0.0005,
  });

  // Viewport X position calculation:
  // 53vw = RIGHT full-bleed (Hero, Services, About, Areas)
  // 0vw = LEFT full-bleed (Diagnostics, Why Gasgenics, Reviews)
  const leftPosTransform = useTransform(
    smoothProgress,
    [
      0,      0.12,   // Section 1: Hero (RIGHT 53vw)
      0.24,   0.36,   // Section 2: Diagnostics (LEFT 0vw)
      0.48,   0.60,   // Section 3: Services (RIGHT 53vw)
      0.72,   0.84,   // Section 4: Why Gasgenics (LEFT 0vw)
      0.92,   0.97,   // Section 5: About Darren (RIGHT 53vw)
      1.00            // Section 6: Release at Final CTA
    ],
    [
      '53vw', '53vw',
      '0vw',  '0vw',
      '53vw', '53vw',
      '0vw',  '0vw',
      '53vw', '53vw',
      '53vw'
    ]
  );

  // Scale stays large (1.00 -> 0.94 -> 1.00), never shrinking into a blade
  const scaleTransform = useTransform(
    smoothProgress,
    [0, 0.18, 0.30, 0.42, 0.54, 0.66, 0.78, 0.90, 0.97],
    [1, 0.94, 1, 0.94, 1, 0.94, 1, 0.94, 1]
  );

  // Fade out smoothly at Final CTA
  const opacityTransform = useTransform(
    smoothProgress,
    [0, 0.95, 0.98, 1.0],
    [1, 1, 0.2, 0]
  );

  // Track progress to set static mask crossfade ratio & asset selection
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (p) => {
      // Asset pairing selection
      if (p < 0.36) {
        setCurrentAsset('/images/engineer_boiler.png'); // Asset A (Hero & Diagnostics)
      } else if (p >= 0.36 && p < 0.68) {
        setCurrentAsset('/images/service_detail.png'); // Asset B (Services & Why Gasgenics)
      } else if (p >= 0.68 && p < 0.90) {
        setCurrentAsset('/images/workmanship.png'); // Asset C (About & Reviews)
      } else {
        setCurrentAsset('/images/local_heating.png'); // Asset D (Areas)
      }

      // Mask Crossfade Ratio calculation (0 = pure right mask, 1 = pure left mask)
      if (p <= 0.12) {
        setMaskMode('right');
        setMaskCrossfadeRatio(0);
      } else if (p > 0.12 && p < 0.24) {
        // Transition from Hero (Right) -> Diagnostics (Left)
        const ratio = (p - 0.12) / 0.12;
        setMaskMode(ratio > 0.5 ? 'left' : 'right');
        setMaskCrossfadeRatio(ratio);
      } else if (p >= 0.24 && p <= 0.36) {
        setMaskMode('left');
        setMaskCrossfadeRatio(1);
      } else if (p > 0.36 && p < 0.48) {
        // Transition from Diagnostics (Left) -> Services (Right)
        const ratio = 1 - (p - 0.36) / 0.12;
        setMaskMode(ratio > 0.5 ? 'left' : 'right');
        setMaskCrossfadeRatio(ratio);
      } else if (p >= 0.48 && p <= 0.60) {
        setMaskMode('right');
        setMaskCrossfadeRatio(0);
      } else if (p > 0.60 && p < 0.72) {
        // Transition from Services (Right) -> Why Gasgenics (Left)
        const ratio = (p - 0.60) / 0.12;
        setMaskMode(ratio > 0.5 ? 'left' : 'right');
        setMaskCrossfadeRatio(ratio);
      } else if (p >= 0.72 && p <= 0.84) {
        setMaskMode('left');
        setMaskCrossfadeRatio(1);
      } else if (p > 0.84 && p < 0.92) {
        // Transition from Why (Left) -> About (Right)
        const ratio = 1 - (p - 0.84) / 0.08;
        setMaskMode(ratio > 0.5 ? 'left' : 'right');
        setMaskCrossfadeRatio(ratio);
      } else {
        setMaskMode('right');
        setMaskCrossfadeRatio(0);
      }
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div className="fixed top-20 left-0 w-full h-[calc(100vh-80px)] pointer-events-none z-20 hidden lg:block bg-transparent overflow-hidden">
      <motion.div
        style={{
          left: leftPosTransform,
          scale: scaleTransform,
          opacity: opacityTransform,
        }}
        className="absolute top-4 w-[47vw] h-[calc(100vh-110px)] max-h-[720px] pointer-events-auto bg-transparent border-none shadow-none"
      >
        <TravelFrame
          currentAsset={currentAsset}
          maskMode={maskMode}
          maskCrossfadeRatio={maskCrossfadeRatio}
        />
      </motion.div>
    </div>
  );
};
