import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";
import { HERO_SOIL_IMAGE, SOIL_TEXTURE_BG } from "../data/vashudhaData";

interface HeroSectionProps {
  onOpenResearchModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-emerald-950/10 bg-[#EFF5EE]">
      {/* High-quality background image overlay with gentle opacity */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${SOIL_TEXTURE_BG})` }}
      />
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text Block */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="font-title text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-emerald-950 leading-[1.08]">
                Let the Soil Speak.
              </h1>

              <p className="lead font-lead text-xl sm:text-2xl text-emerald-900 font-normal">
                A smarter way to understand the farm, starting from the ground up.
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-emerald-950/90 leading-relaxed max-w-2xl font-paragraph">
              <p className="font-bold">Every field is different. Every soil has its own story.</p>
              <p className="font-bold">
                Vashudha is being built to listen to that story through connected sensing, data intelligence and AI/ML — helping us understand the farm better and make more precise decisions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 font-link">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-900 text-white text-sm font-medium tracking-wide hover:bg-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer border border-emerald-700/30 font-link group"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-black flex items-center justify-center transition-transform group-hover:scale-110">
                  <Sparkles className="w-3.5 h-3.5 text-black" />
                </div>
                <span>Process Storyboard</span>
              </a>
              <a
                href="#problem"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-emerald-900/20 text-emerald-950 bg-white/60 backdrop-blur-xl text-sm font-normal tracking-wide hover:bg-white/80 transition-all duration-200 cursor-pointer shadow-xs font-link"
              >
                <span>Explore Vashudha</span>
                <ArrowDown className="w-4 h-4 text-emerald-800" />
              </a>
            </div>

            {/* Flow Concept Pill */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-link text-emerald-900/80 border-t border-emerald-900/10">
              <span className="text-emerald-700 font-semibold">FLOW:</span>
              <span className="tracking-tight">soil</span>
              <span>→</span>
              <span className="tracking-tight">sensing</span>
              <span>→</span>
              <span className="tracking-tight">intelligence</span>
              <span>→</span>
              <span className="tracking-tight font-bold text-emerald-950">precise decisions</span>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-900/15 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group h-[460px] sm:h-[520px]">
              {/* Full Tile Fill Image */}
              <img
                src={HERO_SOIL_IMAGE}
                alt="Hands holding rich fertile agricultural soil in root zone"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
