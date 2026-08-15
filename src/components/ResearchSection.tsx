import React, { useState } from "react";
import { RESEARCH_DOMAINS } from "../data/vashudhaData";
import { BookOpen, ChevronRight, Check } from "lucide-react";

export const ResearchSection: React.FC = () => {
  const [selectedDomainId, setSelectedDomainId] = useState("01");

  const selectedDomain =
    RESEARCH_DOMAINS.find((r) => r.id === selectedDomainId) || RESEARCH_DOMAINS[0];

  return (
    <section id="research" className="py-24 lg:py-32 bg-[#231A13] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-amber-300 bg-white/10 border border-white/20 backdrop-blur-md uppercase">
            09 — RESEARCH (C-HORIZON REGOLITH PARENT MATERIAL 1.5m)
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-normal">
            Before we build, we research.
          </h2>
          <p className="text-base sm:text-lg text-neutral-200 font-sans">
            Our technology roadmap is grounded in rigorous scientific investigation across seven core agricultural research pillars.
          </p>
        </div>

        {/* Vertical Research Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vertical Timeline List */}
          <div className="lg:col-span-5 space-y-3 relative">
            {/* Timeline Vertical Guide Line */}
            <div className="absolute top-4 bottom-4 left-[23px] w-[1px] bg-white/20 hidden sm:block" />

            {RESEARCH_DOMAINS.map((domain) => {
              const isSelected = selectedDomainId === domain.id;
              return (
                <div
                  key={domain.id}
                  onClick={() => setSelectedDomainId(domain.id)}
                  className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 backdrop-blur-2xl ${
                    isSelected
                      ? "bg-emerald-800/90 text-white border-emerald-400 shadow-[0_8px_24px_rgba(16,185,129,0.3)] translate-x-1"
                      : "bg-white/10 dark:bg-white/5 text-white border-white/20 hover:bg-white/15"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs shrink-0 z-10 transition-colors ${
                      isSelected
                        ? "bg-amber-400 text-black font-bold"
                        : "bg-white/20 text-white border border-white/30"
                    }`}
                  >
                    {domain.number}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-medium leading-snug text-white">
                      {domain.title}
                    </h3>
                    <p
                      className={`text-xs line-clamp-2 mt-1 ${
                        isSelected ? "text-emerald-100" : "text-neutral-200"
                      }`}
                    >
                      {domain.description}
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                      isSelected ? "translate-x-1 text-amber-300" : "text-neutral-400"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Pillar Detail Focus Box */}
          <div className="lg:col-span-7 sticky top-28 p-8 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 space-y-6 shadow-[0_16px_48px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="text-xs font-mono text-amber-300 uppercase tracking-widest">
                PILLAR / {selectedDomain.number} FOCUS DETAIL
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-800 text-emerald-100 border border-emerald-400/40">
                Active Research
              </span>
            </div>

            <div>
              <h3 className="font-serif text-3xl font-medium text-white mb-3">
                {selectedDomain.title}
              </h3>
              <p className="text-base text-neutral-200 font-sans leading-relaxed">
                {selectedDomain.description}
              </p>
            </div>

            {/* Current R&D Focus Note */}
            <div className="p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold block">
                Current Lab & Field Benchmark:
              </span>
              <p className="text-xs font-mono text-neutral-100 font-medium">
                {selectedDomain.currentFocus}
              </p>
            </div>

            {/* Key Topics List */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-300 block">
                Core Scientific Investigation Vectors:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedDomain.keyTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2 text-xs font-sans text-neutral-100"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
