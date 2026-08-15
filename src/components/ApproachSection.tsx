import React, { useState } from "react";
import { Radio, BrainCircuit, GitCompare, Sparkles, ArrowRight } from "lucide-react";

export const ApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const layers = [
    {
      num: "01",
      title: "Sense",
      tagline: "Listen to the field.",
      icon: Radio,
      description:
        "Custom IoT sensing will collect relevant soil and environmental information from the farm.",
      deepDive:
        "In-situ probes continuously record multi-depth volumetric water content, soil temperature, electrical conductivity (EC), and localized micro-climate parameters.",
    },
    {
      num: "02",
      title: "Understand",
      tagline: "Turn observations into knowledge.",
      icon: BrainCircuit,
      description:
        "Field data is collected, cleaned and interpreted alongside agricultural and historical information.",
      deepDive:
        "Automated data hygiene pipelines filter out ambient noise and probe calibration shifts, translating raw dielectric readings into water tension (kPa) and ionic availability proxies.",
    },
    {
      num: "03",
      title: "Compare",
      tagline: "Understand where the field is versus where it could be.",
      icon: GitCompare,
      description:
        "Research and experimentation will help establish crop- and growth-stage-specific reference conditions.",
      deepDive:
        "Comparing live field readings against empirical reference windows calibrated for specific crop phenotypes and growth stages (e.g., tillering vs grain filling).",
    },
    {
      num: "04",
      title: "Recommend",
      tagline: "Turn intelligence into action.",
      icon: Sparkles,
      description:
        "The system will aim to provide field-specific recommendations designed around the actual condition of the crop and soil.",
      deepDive:
        "Delivering actionable, minimal-intervention guidelines directly to the farmer—specifying micro-irrigation or targeted organic/synthetic inputs only when true stress is detected.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#2A211B] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-amber-300 bg-white/10 border border-white/20 backdrop-blur-md uppercase">
            <span>05 — THE VASHUDHA APPROACH (A-HORIZON TOPSOIL 0.4m)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-normal">
            We don't want to treat the field. We want to understand it.
          </h2>
        </div>

        {/* Four Connected Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, idx) => {
            const IconComponent = layer.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={layer.num}
                onClick={() => setActiveStep(idx)}
                className={`p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between backdrop-blur-2xl ${
                  isSelected
                    ? "bg-emerald-800/80 text-white border-emerald-400/80 shadow-[0_12px_40px_rgba(16,185,129,0.3)] scale-[1.02]"
                    : "bg-white/10 dark:bg-white/5 text-white border-white/20 hover:border-white/40 hover:bg-white/15 shadow-md"
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/20 pb-4">
                    <span
                      className={`font-mono text-xs tracking-wider ${
                        isSelected ? "text-amber-300" : "text-amber-200/80"
                      }`}
                    >
                      LAYER / {layer.num}
                    </span>
                    <IconComponent
                      className={`w-5 h-5 ${
                        isSelected ? "text-emerald-300" : "text-emerald-400"
                      }`}
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl font-medium mb-1 text-white">
                      {layer.title}
                    </h3>
                    <p
                      className={`text-xs font-mono tracking-wide ${
                        isSelected ? "text-emerald-200" : "text-amber-300"
                      }`}
                    >
                      {layer.tagline}
                    </p>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isSelected ? "text-white" : "text-neutral-200"
                    }`}
                  >
                    {layer.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? "text-emerald-200 font-semibold" : "text-neutral-300"}>
                    {isSelected ? "Active Layer" : "Click to view detail"}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "translate-x-1 text-emerald-200" : "text-neutral-400"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Layer Focus Box */}
        <div className="mt-8 p-8 rounded-3xl bg-black/40 backdrop-blur-2xl text-white border border-white/20 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="text-xs font-mono text-amber-300 uppercase tracking-widest">
                Layer {layers[activeStep].num} Deep Dive — {layers[activeStep].title}
              </div>
              <p className="text-base sm:text-lg text-neutral-200 font-sans">
                {layers[activeStep].deepDive}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full bg-white/20 border border-white/30 text-amber-200 backdrop-blur-md">
              <span>STEP {activeStep + 1} OF 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
