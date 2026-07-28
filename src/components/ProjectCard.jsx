import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Film, Play, Pause, Sparkles } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = (e) => {
    e.stopPropagation();
    const video = document.getElementById(`project-video-${project.id}`);
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative w-full bg-white/95 rounded-2xl p-5 md:p-8 border border-pink-200/80 shadow-paper-lg font-sans overflow-hidden">
      {/* Decorative Sticky Tape on top corners */}
      <div className="absolute -top-3 left-12 w-28 h-7 tape-strip-pink rotate-[-2deg] z-30" />
      <div className="absolute -top-3 right-14 w-24 h-7 tape-strip rotate-[3deg] z-30" />

      {/* Top Header Bar & Stamp */}
      <div className="flex items-center justify-between border-b border-pink-100 pb-3 mb-5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 bg-rose-100 text-rose-800 rounded-md font-mono text-xs font-bold border border-rose-200">
            PROJECT {project.number}
          </span>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            {project.category} • {project.year}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200 text-xs font-semibold">
            ★ {project.badge}
          </span>
        </div>
      </div>

      {/* Dual Column Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

        {/* Left Column: Project Details (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              {project.title}
            </h2>
            <p className="font-pinyon text-2xl md:text-3xl text-pink-400 font-normal mt-0.5">
              "{project.cursiveAccent}"
            </p>
          </div>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Tech Stack & Architecture
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-pink-50 border border-pink-200/80 rounded-md text-xs font-mono text-pink-800 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* What I Learned (Matching Tech Stack Styling) */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
              <span>What I Learned</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {(project.learned || []).map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-amber-50/80 border border-amber-200/80 rounded-md text-xs font-mono text-amber-900 font-medium"
                >
                  ✨ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links & Demo Buttons (Render only if links exist) */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex items-center gap-3 pt-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold border border-rose-600 shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold border border-slate-300 flex items-center gap-1.5 active:scale-95 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Source</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right Column: macOS Embedded Video Player (6 Cols) */}
        <div className="lg:col-span-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mac-window overflow-hidden relative shadow-md group"
          >
            {/* macOS Window Title Bar */}
            <div className="bg-slate-100 px-3.5 py-2 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400 border border-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-300 border border-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-300 border border-emerald-400" />
              </div>

              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-600 font-semibold">
                <Film className="w-3 h-3 text-pink-600" />
                <span>preview_{project.id}.mp4</span>
              </div>

              <button
                onClick={togglePlay}
                className="text-[11px] font-mono text-slate-700 hover:text-pink-700 flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-slate-300 shadow-2xs"
              >
                {isPlaying ? <Pause className="w-3 h-3 text-pink-600" /> : <Play className="w-3 h-3 text-pink-600" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
            </div>

            {/* Embedded Video Container */}
            <div className="relative w-full h-56 sm:h-64 bg-slate-900 flex items-center justify-center overflow-hidden">
              <video
                key={project.videoUrl}
                id={`project-video-${project.id}`}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                poster={project.poster}
                className="w-full h-full object-cover"
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Seamless Video Badge Overlay */}
              <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/70 rounded-md border border-white/20 text-white text-[10px] font-mono flex items-center gap-1.5 pointer-events-none z-10">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Looping Video Demo</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}