import React, { useState } from "react";
import { ArrowRight, RefreshCw, Layers, CheckCircle2, Cpu } from "lucide-react";

export const IntelligenceSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const flowNodes = [
    {
      id: "field",
      label: "FIELD",
      sub: "Physical Soil & Canopy",
      desc: "The living agro-ecosystem experiencing micro-climates, soil moisture dynamics, and biological nutrient exchange.",
    },
    {
      id: "sensors",
      label: "Sensors",
      sub: "In-situ Probes & Nodes",
      desc: "Custom multi-depth probes collecting volumetric water content, soil temperature, and EC.",
    },
    {
      id: "observations",
      label: "Real-time observations",
      sub: "Continuous Telemetry",
      desc: "Time-series stream capturing diurnal fluctuations and immediate root-zone reactions.",
    },
    {
      id: "knowledge",
      label: "Agricultural knowledge",
      sub: "Agronomic Baselines",
      desc: "Integrating soil science principles, crop phenology rules, and regional soil physics.",
    },
    {
      id: "reference",
      label: "Crop-specific reference conditions",
      sub: "Target Range Matching",
      desc: "Calibrated growth-stage reference ranges dictating optimal moisture tension and nutrient thresholds.",
    },
    {
      id: "models",
      label: "ML & analytical models",
      sub: "Contextual Pattern Analysis",
      desc: "Machine learning models identifying stress trajectories before visible plant wilting occurs.",
    },
    {
      id: "recommendation",
      label: "Recommendation",
      sub: "Precision Action Plan",
      desc: "Field-specific, minimal-intervention guidelines delivered directly to the farmer.",
    },
    {
      id: "response",
      label: "Field response",
      sub: "Observed Intervention Outcome",
      desc: "Monitoring plant vigor, soil tension recovery, and yield parity following action.",
    },
    {
      id: "newdata",
      label: "New data",
      sub: "Closed Feedback Loop",
      desc: "Validated field outcomes refine reference models and improve future recommendations.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#382B22] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-amber-300 bg-white/10 border border-white/20 backdrop-blur-md uppercase">
            <Cpu className="w-4 h-4 text-emerald-400" />
            06 — THE INTELLIGENCE LAYER (E-HORIZON ELUVIATED SILT 0.6m)
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-normal">
            From data to decisions.
          </h2>
        </div>

        {/* Horizontal Flow Container */}
        <div className="space-y-6">
          <div className="text-xs font-mono text-amber-200 uppercase tracking-widest flex items-center justify-between">
            <span>System Feedback Architecture</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Continuous Closed Loop
            </span>
          </div>

          {/* Flow Cards Carousel / Scrollable Row */}
          <div className="flex items-stretch gap-3 overflow-x-auto pb-6 pt-2 scrollbar-thin">
            {flowNodes.map((node, index) => {
              const isActive = activeStep === index;
              return (
                <React.Fragment key={node.id}>
                  <div
                    onClick={() => setActiveStep(index)}
                    className={`min-w-[210px] sm:min-w-[230px] p-5 rounded-3xl border transition-all duration-300 cursor-pointer shrink-0 flex flex-col justify-between backdrop-blur-2xl ${
                      isActive
                        ? "bg-emerald-800/90 text-white border-emerald-400 shadow-[0_8px_32px_rgba(16,185,129,0.3)] scale-102"
                        : "bg-white/10 dark:bg-white/5 text-white border-white/20 hover:border-white/40 hover:bg-white/15"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono mb-3">
                        <span className={isActive ? "text-emerald-200" : "text-amber-300"}>
                          STEP {index + 1}
                        </span>
                        {index === 0 && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[9px] font-semibold border border-amber-400/30">
                            ORIGIN
                          </span>
                        )}
                        {index === flowNodes.length - 1 && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[9px] font-semibold border border-emerald-400/30">
                            LOOP
                          </span>
                        )}
                      </div>
                      <h4 className="font-serif text-base font-medium mb-1 leading-snug text-white">
                        {node.label}
                      </h4>
                      <p
                        className={`text-[11px] font-mono ${
                          isActive ? "text-emerald-200" : "text-amber-200"
                        }`}
                      >
                        {node.sub}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/15 text-[11px] leading-relaxed line-clamp-2 text-neutral-200">
                      {node.desc}
                    </div>
                  </div>

                  {index < flowNodes.length - 1 && (
                    <div className="flex items-center justify-center shrink-0 text-amber-300/60">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Selected Step Explanation Card */}
        {activeStep !== null && (
          <div className="mt-6 p-6 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/20 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-300 uppercase tracking-wider">
                Flow Step {activeStep + 1} of 9 — {flowNodes[activeStep].label} ({flowNodes[activeStep].sub})
              </span>
              <p className="text-sm sm:text-base text-neutral-100 font-sans">
                {flowNodes[activeStep].desc}
              </p>
            </div>
            <button
              onClick={() => setActiveStep((activeStep + 1) % flowNodes.length)}
              className="shrink-0 text-xs font-mono font-semibold text-emerald-300 hover:text-emerald-200 hover:underline flex items-center gap-1 cursor-pointer bg-white/10 px-4 py-2 rounded-full border border-white/20"
            >
              Next Step in Flow →
            </button>
          </div>
        )}

        {/* Core Philosophy Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-black/50 backdrop-blur-2xl text-white border border-white/20 shadow-xl">
          <p className="text-base sm:text-lg lg:text-xl font-serif text-neutral-200 leading-relaxed">
            “Vashudha is designed as a feedback loop. Every observation helps us understand the field; every validated intervention provides another piece of evidence for future recommendations.”
          </p>
          <div className="mt-4 text-xs font-mono text-amber-300 uppercase tracking-widest">
            — THE INTELLIGENCE PRINCIPLE
          </div>
        </div>
      </div>
    </section>
  );
};
