import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Cute Aesthetic SVG Doodles Component
function BackgroundDoodles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70">
      {/* Sparkles / Four-point stars */}
      <svg className="absolute top-[12%] left-[8%] w-6 h-6 fill-pink-400 animate-pulse" viewBox="0 0 24 24">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
      <svg className="absolute top-[25%] right-[12%] w-8 h-8 fill-amber-300 animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '0.7s' }}>
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
      <svg className="absolute bottom-[20%] left-[15%] w-7 h-7 fill-emerald-300 animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '1.2s' }}>
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
      <svg className="absolute bottom-[28%] right-[22%] w-5 h-5 fill-pink-300 animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '0.4s' }}>
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      {/* Cute Little Hearts */}
      <svg className="absolute top-[48%] left-[6%] w-6 h-6 fill-rose-300 -rotate-12" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <svg className="absolute top-[18%] left-[45%] w-5 h-5 fill-pink-200 rotate-12" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      {/* Plus / Cross Stars */}
      <span className="absolute top-[35%] left-[28%] text-amber-400 text-xl font-bold select-none">+</span>
      <span className="absolute bottom-[35%] right-[10%] text-emerald-400 text-2xl font-bold select-none">+</span>
      <span className="absolute top-[10%] right-[32%] text-pink-300 text-lg font-bold select-none">✦</span>
    </div>
  );
}

// Fixed positions for floating background mini-folders
// 8 Scattered mini-folders (4 on left, 4 on right)
const BACKGROUND_FOLDERS = [
  // --- LEFT SIDE (4 Folders) ---
  { id: 1, src: '/assets/pink.png', label: 'about me', top: '10%', left: '5%', rotate: -6 },
  { id: 2, src: '/assets/green.png', label: 'projects', top: '32%', left: '11%', rotate: 8 },
  { id: 3, src: '/assets/yellow.png', label: 'designs', top: '55%', left: '4%', rotate: -10 },
  { id: 4, src: '/assets/pink.png', label: 'notes', top: '78%', left: '10%', rotate: 5 },

  // --- RIGHT SIDE (4 Folders) ---
  { id: 5, src: '/assets/yellow.png', label: 'photos', top: '12%', right: '6%', rotate: 7 },
  { id: 6, src: '/assets/pink.png', label: 'socials', top: '34%', right: '12%', rotate: -8 },
  { id: 7, src: '/assets/green.png', label: 'code', top: '58%', right: '5%', rotate: 12 },
  { id: 8, src: '/assets/yellow.png', label: 'art & stash', top: '80%', right: '11%', rotate: -5 },
];

// Individual falling page component
function FallingPage({ delay, rotate, x, y }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, rotate: rotate * 0.3, x }}
      animate={{ opacity: [0, 1, 1, 0], y: [y - 20, y + 40, y + 120, y + 260], rotate: [rotate * 0.3, rotate, rotate * 1.4, rotate * 1.8] }}
      transition={{ duration: 0.9, delay, ease: 'easeIn' }}
      className="absolute pointer-events-none z-30"
      style={{ top: '40%', left: '50%', marginLeft: x }}
    >
      <div className="w-28 h-36 bg-white border border-pink-200 rounded-sm shadow-md"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <div className="h-1 bg-pink-200 m-3 mb-1 rounded" />
        <div className="h-1 bg-slate-100 mx-3 mb-1 rounded" />
        <div className="h-1 bg-slate-100 mx-3 mb-1 rounded" />
        <div className="h-1 bg-pink-100 mx-3 rounded" />
      </div>
    </motion.div>
  );
}

export default function HeroDesktop({ onOpenFolder }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleFolderClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpenFolder();
    }, 1100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-[calc(100vh-80px)] flex flex-col justify-between items-center px-6 py-2 overflow-hidden select-none"
    >
      {/* Doodle overlay (stars, sparkles, hearts) */}
      <BackgroundDoodles />

      {/* Scattered Mini Folders Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {BACKGROUND_FOLDERS.map((folder) => (
          <motion.div
            key={folder.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isOpening ? 0.2 : 0.85, scale: 1 }}
            transition={{ duration: 0.5, delay: folder.id * 0.05 }}
            className="absolute flex flex-col items-center group cursor-pointer pointer-events-auto"
            style={{
              top: folder.top,
              left: folder.left,
              right: folder.right,
              bottom: folder.bottom,
              transform: `rotate(${folder.rotate}deg)`,
            }}
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            <img
              src={folder.src}
              alt={folder.label}
              className="w-14 sm:w-20 md:w-24 h-auto drop-shadow-sm object-contain"
            />
            <span className="mt-4 text-sm font-medium text-[#7a5c54] tracking-wide font-sans pointer-events-none">
              {folder.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Top Categorical Desktop Header Labels */}
      <motion.div
        animate={{ opacity: isOpening ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="mt-4 text-sm font-medium text-[#7a5c54] tracking-wide font-sans pointer-events-none"
      >
        <span>software/</span>
        <span>hardware</span>
        <span> portfolio</span>
      </motion.div>

      {/* Central Desktop Workspace Area */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center z-20">

        {/* Text Overlay */}
        <motion.div
          animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? -20 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-20 text-center pointer-events-none"
        >
          {/* Name on top */}
          <span className="block font-pinyon text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-pink-400 font-normal italic tracking-wide mb-[-25px] sm:mb-[-40px] z-10 relative">
            sanvi takyar's
          </span>

          {/* PORTFOLIO underneath */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#3d2723] uppercase leading-none drop-shadow-sm">
            portfolio
          </h1>
        </motion.div>

        {/* Main Center Folder */}
        <motion.div
          onClick={handleFolderClick}
          whileHover={!isOpening ? { scale: 1.03 } : {}}
          whileTap={!isOpening ? { scale: 0.98 } : {}}
          animate={isOpening ? {
            y: -280,
            rotate: 180,
            scale: 1.05,
          } : { y: 0, rotate: 0, scale: 1 }}
          transition={isOpening ? { duration: 0.65, ease: [0.22, 1, 0.36, 1] } : { type: 'spring', stiffness: 300 }}
          className="relative cursor-pointer group flex flex-col items-center justify-center z-10 -mt-10 sm:-mt-14 md:-mt-18"
          style={{ transformOrigin: 'center center' }}
        >
          <div className="relative w-[240px] sm:w-[320px] md:w-[400px] lg:w-[450px] aspect-[4/3] flex items-center justify-center">
            <img
              src="\assets\mac-folder.png"
              alt="Portfolio Folder - Click to Open"
              className="w-full h-full object-contain mix-blend-multiply transition-all duration-200"
              style={{ filter: isOpening ? 'brightness(1.05)' : undefined }}
            />

            {!isOpening && (
              <motion.div
                animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute right-6 sm:right-12 bottom-8 sm:bottom-12 w-8 sm:w-11 h-8 sm:h-11 pointer-events-none z-30"
              >
                <svg viewBox="0 0 32 32" className="w-full h-full fill-white stroke-[#3d2723] stroke-[1.8]">
                  <path d="M6 2L22 18H14L19 28L15 30L10 20L4 26V2Z" />
                </svg>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Hint text */}
        <motion.p
          animate={{ opacity: isOpening ? 0 : 1, y: isOpening ? 10 : 0 }}
          transition={{ duration: 0.25 }}
          className="mt-4 text-sm font-medium text-[#7a5c54] tracking-wide font-sans pointer-events-none"
        >
          click the blue folder to learn about me!
        </motion.p>

        {/* Falling pages animation */}
        <AnimatePresence>
          {isOpening && (
            <>
              <FallingPage delay={0.4} rotate={-18} x={-90} y={0} />
              <FallingPage delay={0.5} rotate={5} x={-20} y={0} />
              <FallingPage delay={0.55} rotate={22} x={60} y={0} />
              <FallingPage delay={0.45} rotate={-8} x={-140} y={10} />
              <FallingPage delay={0.6} rotate={14} x={110} y={5} />
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}