import React from 'react';
import { motion } from 'framer-motion';

// Cute Floating Doodles
function BackgroundDoodles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-60">
      {/* Sparkle 1 - Top Left */}
      <motion.svg
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[12%] left-[8%] w-7 h-7 fill-pink-400"
        viewBox="0 0 24 24"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </motion.svg>

      {/* Sparkle 2 - Top Right */}
      <motion.svg
        animate={{ scale: [1, 1.15, 1], rotate: [0, -12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-[15%] right-[10%] w-8 h-8 fill-amber-300"
        viewBox="0 0 24 24"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </motion.svg>

      {/* Heart - Mid Left */}
      <motion.svg
        animate={{ y: [0, -6, 0], rotate: [-10, -5, -10] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[50%] left-[5%] w-6 h-6 fill-rose-300"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </motion.svg>

      {/* Heart - Bottom Right */}
      <motion.svg
        animate={{ y: [0, -8, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-[20%] right-[8%] w-7 h-7 fill-pink-300"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </motion.svg>

      {/* Cute Squiggle Doodle */}
      <svg className="absolute bottom-[22%] left-[8%] w-10 h-10 stroke-emerald-300 fill-none stroke-[2.5] stroke-linecap-round" viewBox="0 0 24 24">
        <path d="M3 12c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-4-1.8-4-4 1.8-4 4-4 2 0.9 2 2" />
      </svg>

      {/* Cross Stars / Pluses */}
      <span className="absolute top-[32%] left-[14%] text-amber-400 text-xl font-bold select-none animate-pulse">+</span>
      <span className="absolute bottom-[38%] right-[12%] text-emerald-400 text-2xl font-bold select-none animate-pulse">+</span>
      <span className="absolute top-[22%] right-[22%] text-pink-300 text-lg font-bold select-none">✦</span>
    </div>
  );
}

export default function BackgroundGrid({ isHero = false }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-mac-desktop">
      {/* Soft plain light desktop ambient warmth */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-3xl" />

      {/* Only render doodles if NOT on hero page */}
      {!isHero && <BackgroundDoodles />}
    </div>
  );
}