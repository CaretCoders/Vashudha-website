import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { TeamVisionSection } from "./components/TeamVisionSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SaplingRootsSpine } from "./components/SaplingRootsSpine";

export default function App() {
  return (
    <div className="min-h-screen bg-[#150F0A] text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Sapling & Root Spine (Apple Translucent Spine) */}
      <SaplingRootsSpine />

      <main className="relative">
        {/* 01 — HERO */}
        <HeroSection />

        {/* 02 — THE PROBLEM */}
        <ProblemSection />

        {/* 03 — THE SOLUTION */}
        <SolutionSection />

        {/* 04 — PROCESS & TECHNOLOGY (COMBINED 1-5 CONTINUOUS 10S LOOP) */}
        <HowItWorksSection />

        {/* 05 — ROADMAP */}
        <RoadmapSection />

        {/* 06 — TEAM & VISION */}
        <TeamVisionSection />

        {/* 07 — CTA / CONTACT */}
        <ContactSection />
      </main>

      {/* 08 — FOOTER */}
      <Footer />
    </div>
  );
}
