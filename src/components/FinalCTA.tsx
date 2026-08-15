import React from "react";
import { ArrowRight, Sprout } from "lucide-react";

interface FinalCTAProps {
  onOpenResearchModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenResearchModal }) => {
  return (
    <section className="py-28 lg:py-40 bg-[#120D09] text-white border-b border-white/10 text-center relative overflow-hidden">
      {/* Background Decorative Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20 relative z-10 space-y-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-amber-300 bg-white/10 border border-white/20 backdrop-blur-md uppercase">
            <Sprout className="w-3.5 h-3.5 text-emerald-400" />
            <span>19 — VASHUDHA INITIATIVE (R-HORIZON BEDROCK BASE 2.5m+)</span>
          </div>

          {/* Massive Typography */}
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-white leading-none">
            Let the Soil Speak.
          </h2>

          {/* Small Supporting Line */}
          <p className="text-lg sm:text-2xl font-serif italic text-neutral-200 max-w-xl mx-auto font-light">
            We're building the tools to listen.
          </p>

          {/* Primary CTA */}
          <div className="pt-6">
            <button
              onClick={onOpenResearchModal}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-semibold tracking-wide transition-all cursor-pointer shadow-[0_10px_30px_rgba(16,185,129,0.4)] group"
            >
              <span>Follow Vashudha's journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
