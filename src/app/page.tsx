"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParticlesBackground } from "@/components/home/ParticlesBackground";
import { HeroSection } from "@/components/home/HeroSection";
import { TimelineList } from "@/components/timeline/TimelineList";
import { StoryGrid } from "@/components/story/StoryGrid";
import { QuizHub } from "@/components/quiz/QuizHub";
import { GameHub } from "@/components/game/GameHub";

export default function Page() {
  const [activeSection, setActiveSection] = React.useState<string>("home");

  // Handles smooth scroll-to-top on section change
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection onSectionChange={handleSectionChange} />;
      case "timeline":
        return <TimelineList />;
      case "stories":
        return <StoryGrid />;
      case "quiz":
        return <QuizHub onGoToTimeline={() => handleSectionChange("timeline")} />;
      case "games":
        return <GameHub />;
      default:
        return <HeroSection onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden selection:bg-amber-600/30 selection:text-amber-200">
      {/* Dynamic Animated Particle Canvas Background */}
      <ParticlesBackground />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Main SPA Content Container */}
      <main className="flex-1 flex flex-col items-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full flex-1 flex flex-col"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
