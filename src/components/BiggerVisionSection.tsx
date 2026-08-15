import React from "react";
import { Compass, Leaf, Sparkles } from "lucide-react";

export const BiggerVisionSection: React.FC = () => {
  const manifestoPoints = [
    "We imagine a future where technology does not mean more intervention.",
    "It means better understanding.",
    "Where farmers don't treat the entire field because one part needs attention.",
    "Where decisions are informed by the field itself.",
    "Where healthier soil becomes part of the productivity equation.",
  ];

  return (
    <section id="the-bigger-vision" className="py-24 lg:py-36 bg-[#F5F2EB] border-b border-[#2B2724]/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 relative z-10">
        {/* Header Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-[#5C4233] bg-[#E6CBB3]/40 border border-[#C87D55]/30 uppercase">
          <Leaf className="w-3.5 h-3.5 text-[#385A4B]" />
          <span>15 — THE BIGGER VISION</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1E1C1A] leading-tight font-normal max-w-4xl mx-auto">
          Agriculture should work with nature, not against it.
        </h2>

        {/* Manifesto Cards */}
        <div className="space-y-4 max-w-3xl mx-auto text-left">
          {manifestoPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#2B2724]/10 hover:border-[#1B332A]/30 transition-all flex items-start gap-4 shadow-xs"
            >
              <div className="w-8 h-8 rounded-full bg-[#1B332A]/10 text-[#1B332A] flex items-center justify-center font-mono text-xs font-semibold shrink-0 mt-0.5">
                0{index + 1}
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#2B2724] leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Quote */}
        <div className="pt-8 text-xs font-mono text-[#6E655F] uppercase tracking-widest">
          — VASHUDHA MANIFESTO FOR PRECISION ECOLOGICAL FARMING
        </div>
      </div>
    </section>
  );
};
