import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SMART_FARM_AERIAL_BG } from "../data/vashudhaData";

export const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-24 lg:py-32 bg-[#2D3F33] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Aerial Farm Image Overlay */}
      <div 
        className="absolute inset-0 opacity-25 bg-cover bg-center pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: `url(${SMART_FARM_AERIAL_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2E25]/90 via-[#253A2E]/80 to-[#1A2820]/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl text-white leading-snug font-bold">
              What if the farm could tell us what it needs?
            </h2>

            <p className="lead font-lead text-xl sm:text-2xl text-amber-200 font-normal">
              That's where Vashudha begins.
            </p>

            <div className="space-y-4 text-base sm:text-lg text-neutral-100 leading-relaxed font-paragraph">
              <p className="font-bold">
                Vashudha combines custom IoT sensing, agricultural science, and machine learning to understand field-specific conditions and provide actionable recommendations that help farmers maintain productivity while reducing unnecessary chemical inputs.
              </p>
            </div>

            <div className="pt-4 font-link">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-normal uppercase tracking-wider transition-all shadow-lg border border-emerald-400/30 group cursor-pointer font-link"
              >
                <span>Discover Vashudha</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-300" />
              </a>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.2)] space-y-6">
            <div className="flex items-center gap-2 text-xs font-link text-amber-300 uppercase tracking-wider font-semibold border-b border-white/15 pb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>CORE PHILOSOPHY</span>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
              <p className="font-title text-2xl sm:text-3xl text-white leading-tight font-bold">
                “Listen to the soil. Understand the farm. Make better decisions.”
              </p>
            </div>

            <div className="space-y-2 text-xs font-link text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Connected Sensing Devices</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Real-World Environmental Data</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-300" />
                <span>AI/ML Pattern Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
