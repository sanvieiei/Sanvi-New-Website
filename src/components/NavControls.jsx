import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

export default function NavControls({ currentStep, totalSteps, onPrev, onNext, onGoHome, stepLabels }) {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex items-center justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto relative bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-pink-200/80 shadow-md flex items-center gap-3 md:gap-5">

        {/* Left Sticky Tape Graphic */}
        <div className="absolute -top-3 left-6 w-12 h-4 tape-strip rotate-[-4deg]" />

        {/* Right Sticky Tape Graphic */}
        <div className="absolute -top-3 right-6 w-12 h-4 tape-strip-pink rotate-[4deg]" />

        {/* Home Desktop Button - Flat Solid Fill */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onGoHome}
          className={`p-2 rounded-full border transition-colors ${currentStep === 0
            ? 'bg-rose-500 text-white border-rose-600 shadow-2xs'
            : 'bg-slate-100 text-slate-700 hover:bg-pink-100 hover:text-pink-700 border-slate-300'
            }`}
          title="Return to Desktop"
        >
          <Home className="w-4 h-4" />
        </motion.button>

        <div className="h-4 w-px bg-slate-200" />

        {/* Styled "← Prev" Button - Flat Solid Soft Pink Fill, No Gradients */}
        <motion.button
          whileHover={currentStep > 0 ? { scale: 1.04, x: -2 } : {}}
          whileTap={currentStep > 0 ? { scale: 0.96 } : {}}
          onClick={onPrev}
          disabled={currentStep === 0}
          className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-1.5 transition-all border ${currentStep === 0
            ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
            : 'bg-pink-100 text-pink-800 hover:bg-pink-200 border-pink-300 shadow-2xs'
            }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span> Prev</span>
        </motion.button>

        {/* Step Indicator Pills */}
        <div className="hidden sm:flex items-center gap-1.5">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <button
              key={index}
              onClick={() => onNext(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentStep === index
                ? 'w-7 bg-rose-500 shadow-2xs'
                : 'w-2.5 bg-slate-200 hover:bg-pink-300'
                }`}
              title={stepLabels[index] || `Step ${index + 1}`}
            />
          ))}
        </div>

        {/* Step Label Counter */}
        <div className="text-xs font-mono font-bold text-slate-700 bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
          <span className="text-rose-600">{currentStep + 1}</span> / {totalSteps}
        </div>

        {/* Styled "Next →" Button - Flat Solid Soft Rose Fill, No Gradients */}
        <motion.button
          whileHover={currentStep < totalSteps - 1 ? { scale: 1.04, x: 2 } : {}}
          whileTap={currentStep < totalSteps - 1 ? { scale: 0.96 } : {}}
          onClick={() => onNext()}
          disabled={currentStep === totalSteps - 1}
          className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-1.5 transition-all border ${currentStep === totalSteps - 1
            ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
            : 'bg-rose-300 text-white hover:bg-rose-400 border-rose-400 shadow-2xs'
            }`}
        >
          <span>Next </span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </div>
  );
}
