import React from "react";
import { HelpCircle, Sparkles } from "lucide-react";

export const QuestionSection: React.FC = () => {
  return (
    <section id="why-vashudha" className="py-24 lg:py-32 bg-gradient-to-b from-[#E1EBE0] via-[#2B231D] to-[#211B17] text-white border-b border-white/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.3)] text-center space-y-8">
          {/* Horizon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-amber-300 bg-white/10 border border-white/20 backdrop-blur-md uppercase">
            <span>02 — PHILOSOPHY (O-HORIZON → A-HORIZON 0.1m TOPSOIL)</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto font-normal">
            What if the field could tell us what it needs?
          </h2>

          {/* Supporting Copy */}
          <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg text-neutral-200 font-sans leading-relaxed">
            <p>
              Farming decisions are often made with incomplete information. Soil conditions change. Crops change. Weather changes. What worked yesterday may not be what the field needs tomorrow.
            </p>
            <p className="font-medium text-emerald-300 text-lg sm:text-xl font-serif italic p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              “We believe the next generation of farming should be able to listen before it acts.”
            </p>
          </div>

          {/* Minimal visual line */}
          <div className="pt-4 flex justify-center">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
