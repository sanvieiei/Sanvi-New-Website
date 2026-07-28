import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, Sparkles } from 'lucide-react';



export default function FolderAnimation({ onAnimationComplete, children }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-140px)] px-2 overflow-hidden">
      

      {/* Background Animated Folder Flap Graphic */}
      <motion.div
        initial={{ scale: 0.8, rotateX: 60, opacity: 0 }}
        animate={{ scale: 1, rotateX: 0, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onAnimationComplete={onAnimationComplete}
        className="w-full relative flex flex-col items-center z-10"
      >
        {/* Paper Drop Showcase Container */}
        <motion.div
          initial={{ y: -40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, type: "spring", stiffness: 120, damping: 15 }}
          className="w-full relative z-20"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}