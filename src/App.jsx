import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundGrid from './components/BackgroundGrid';
import HeroDesktop from './components/HeroDesktop';
import FolderAnimation from './components/FolderAnimation';
import IntroCard from './components/IntroCard';
import ProjectCard from './components/ProjectCard';
import NavControls from './components/NavControls';
import { projectsData } from './data/projectsData';

export default function App() {
  // Step State:
  // 0: Desktop Home (HeroDesktop with mac-folder.png)
  // 1: About & Skills Card
  // 2: Project 01 Showcase
  // 3: Project 02 Showcase
  // 4: Project 03 Showcase
  const [currentStep, setCurrentStep] = useState(0);

  // Flag to know if we are currently on the Hero screen
  const isHero = currentStep === 0;

  const totalSteps = 1 + 1 + projectsData.length; // 5 steps total

  const stepLabels = [
    "Desktop Home",
    "About & Skills",
    `Project 1: ${projectsData[0].title}`,
    `Project 2: ${projectsData[1].title}`,
    `Project 3: ${projectsData[2].title}`
  ];

  const handleNext = (targetIndex) => {
    if (typeof targetIndex === 'number') {
      setCurrentStep(targetIndex);
    } else {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleGoHome = () => {
    setCurrentStep(0);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-between bg-mac-desktop text-[#3a2725] font-sans">
      {/* Pass the isHero flag to BackgroundGrid */}
      <BackgroundGrid isHero={isHero} />

      {/* Main Content Area */}
      <main className="relative z-10 w-full flex-1 flex items-center justify-center pt-2 pb-4 px-4">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="hero-desktop"
              className="w-full flex justify-center"
            >
              <HeroDesktop onOpenFolder={() => handleNext(1)} />
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="intro-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-5xl"
            >
              <FolderAnimation>
                <IntroCard onNextStep={() => handleNext(2)} />
              </FolderAnimation>
            </motion.div>
          )}

          {currentStep >= 2 && currentStep < totalSteps && (
            <motion.div
              key={`project-${projectsData[currentStep - 2].id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-5xl"
            >
              <FolderAnimation>
                <ProjectCard project={projectsData[currentStep - 2]} />
              </FolderAnimation>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation Bar — hidden on Step 0 (Desktop Home) */}
      {currentStep > 0 && (
        <NavControls
          currentStep={currentStep}
          totalSteps={totalSteps}
          onPrev={handlePrev}
          onNext={handleNext}
          onGoHome={handleGoHome}
          stepLabels={stepLabels}
        />
      )}
    </div>
  );
}