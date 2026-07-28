import React from 'react';
import { motion } from 'framer-motion';
import { personalBio } from '../data/projectsData';
import {
  Award, Code, Sparkles, Smile
} from 'lucide-react';

export default function IntroCard({ onNextStep }) {
  const funFacts = [
    "🏫 grade 12 ib student @ MMHS",
    "🤖 loves robotics + coding",
    "🛍️ amateur ugc creator",
    "🎉 2026 icdc qualifier (deca)"
  ];

  return (
    <div className="relative w-full bg-white/95 rounded-2xl p-5 md:p-8 border border-pink-200/80 shadow-paper-lg font-sans overflow-hidden">
      {/* Decorative Tape Strips on top corners */}
      <div className="absolute -top-3 left-10 w-24 h-7 tape-strip rotate-[-3deg] z-30" />
      <div className="absolute -top-3 right-12 w-28 h-7 tape-strip-pink rotate-[4deg] z-30" />

      {/* Main Grid Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">

        {/* Left Column: Cutout Image aligned to the base */}
        <div className="lg:col-span-4 flex flex-col justify-end items-center h-full min-h-[360px]">
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            className="relative flex justify-center items-end"
          >

            {/* Cutout Image with explicit height */}
            <img
              src="/assets/sanvi.png"
              alt="Sanvi profile cutout"
              className="h-84 md:h-96 w-100 md:w-96 object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.12)] z-10"
            />
          </motion.div>
        </div>

        {/* Right Column: Bio, Skills, Tools & Fun Facts (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Welcome to <span className="font-pinyon text-5xl text-rose-300 font-normal">Sanvi's Portfolio</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mt-2">
              hi! i’m sanvi, 16, from ontario! i started coding in 2024 and i build fun games, hardware projects, websites, and other applications with cute uis!
            </p>
          </div>

          {/* Skills Badges */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              <Code className="w-4 h-4 text-pink-500" />
              <span>Core Expertise & Crafts</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {personalBio.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-pink-200 rounded-lg shadow-sm text-xs font-medium text-slate-700 hover:border-pink-300 hover:bg-pink-50 transition-colors"
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Hardware Badges */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-rose-500" />
              <span>Toolbox & Environments</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {personalBio.tools.map((tool, i) => (
                <span key={i} className="px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded font-mono text-xs shadow-2xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Fun Facts Section */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              <Smile className="w-4 h-4 text-pink-500" />
              <span>Fun Facts About Me</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(personalBio.funFacts || funFacts).map((fact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 bg-rose-50/60 border border-rose-200/70 rounded-lg text-xs text-slate-700 font-medium shadow-2xs"
                >
                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}