'use client';

import React from 'react';
import Image from 'next/image';

interface TravelFrameProps {
  currentAsset: string;
  maskMode: 'right' | 'left'; // 'right' = image on right (sculpted left), 'left' = image on left (sculpted right)
  maskCrossfadeRatio?: number; // 0 (pure right) -> 1 (pure left)
  className?: string;
}

export const TravelFrame: React.FC<TravelFrameProps> = ({
  currentAsset,
  maskMode,
  maskCrossfadeRatio = 0,
  className = '',
}) => {
  // Compute smooth opacities for the two static SVG mask layers
  // When ratio = 0: rightMask = 1, leftMask = 0
  // When ratio = 1: rightMask = 0, leftMask = 1
  const rightOpacity = Math.max(0, Math.min(1, 1 - maskCrossfadeRatio * 1.8));
  const leftOpacity = Math.max(0, Math.min(1, (maskCrossfadeRatio - 0.2) * 1.8));

  return (
    <div className={`relative w-full h-full bg-transparent overflow-visible pointer-events-none ${className}`}>
      {/* Static SVG ClipPath Definitions */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* RIGHT VISUAL: Sculpted Architectural Curve on LEFT, Full-Bleed Straight on Right */}
          <clipPath id="gasgenicsRightClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.16 0.0 C 0.04 0.22, 0.20 0.48, 0.02 0.76, 0.12 1.0 L 1.0 1.0 L 1.0 0.0 Z" />
          </clipPath>

          {/* LEFT VISUAL: Sculpted Architectural Curve on RIGHT, Full-Bleed Straight on Left */}
          <clipPath id="gasgenicsLeftClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.0 0.0 L 0.84 0.0 C 0.96 0.22, 0.80 0.48, 0.98 0.76, 0.88 1.0 L 0.0 1.0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Layer 1: Static RIGHT MASK Layer */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-300 pointer-events-auto"
        style={{
          opacity: rightOpacity,
          clipPath: 'url(#gasgenicsRightClip)',
          WebkitClipPath: 'url(#gasgenicsRightClip)',
          filter: 'drop-shadow(-12px 14px 24px rgba(14,34,56,0.18))',
        }}
      >
        <Image
          src={currentAsset}
          alt="Gasgenics visual"
          fill
          sizes="50vw"
          priority
          className="object-cover object-top filter brightness-[1.02] contrast-[1.02]"
        />
      </div>

      {/* Layer 2: Static LEFT MASK Layer */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-300 pointer-events-auto"
        style={{
          opacity: leftOpacity,
          clipPath: 'url(#gasgenicsLeftClip)',
          WebkitClipPath: 'url(#gasgenicsLeftClip)',
          filter: 'drop-shadow(12px 14px 24px rgba(14,34,56,0.18))',
        }}
      >
        <Image
          src={currentAsset}
          alt="Gasgenics visual"
          fill
          sizes="50vw"
          priority
          className="object-cover object-top filter brightness-[1.02] contrast-[1.02]"
        />
      </div>
    </div>
  );
};
