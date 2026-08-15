import React, { useState } from "react";
import { TestTube, ArrowRight, RefreshCw, CheckCircle } from "lucide-react";

export const ExperimentSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const experimentSteps = [
    {
      step: "01",
      title: "Hypothesis",
      desc: "Formulate soil-crop relationship assumptions based on agronomic theory.",
    },
    {
      step: "02",
      title: "Controlled Experiment",
      desc: "Test variables in greenhouse lysimeters and isolated micro-plots.",
    },
    {
      step: "03",
      title: "Measure",
      desc: "Capture multi-depth moisture, EC, soil tension, and leaf canopy response.",
    },
    {
      step: "04",
      title: "Compare",
      desc: "Benchmark observed outcomes against control plots and regional averages.",
    },
    {
      step: "05",
      title: "Validate",
      desc: "Verify yield parity, root vigor, and synthetic chemical reduction.",
    },
    {
      step: "06",
      title: "Deploy",
      desc: "Trial algorithms across partner pilot farms in diverse agro-climatic zones.",
    },
    {
      step: "07",
      title: "Observe",
      desc: "Track real-world farmer feedback, hardware endurance, and local anomalies.",
    },
    {
      step: "08",
      title: "Improve",
      desc: "Feed ground-truth outcomes back into reference models to refine guidance.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#2C2018] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-amber-300 bg-white/10 border border-white/20 backdrop-blur-md uppercase">
            <TestTube className="w-4 h-4 text-emerald-400" />
            10 — EXPERIMENTAL METHODOLOGY (B-HORIZON SUBSOIL CLAY 1.0m)
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-normal">
            We don't assume. We test.
          </h2>
        </div>

        {/* Horizontal Visual Experiment Loop */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {experimentSteps.map((s, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between backdrop-blur-2xl ${
                    isSelected
                      ? "bg-emerald-800/90 text-white border-emerald-400 shadow-[0_8px_24px_rgba(16,185,129,0.3)] scale-102"
                      : "bg-white/10 dark:bg-white/5 text-white border-white/20 hover:border-white/40 hover:bg-white/15"
                  }`}
                >
                  <div className="text-[10px] font-mono text-amber-300 font-semibold mb-2">
                    {s.step}
                  </div>
                  <h4 className="font-serif text-sm font-medium leading-snug mb-2 text-white">
                    {s.title}
                  </h4>
                  <div
                    className={`text-[9px] font-mono ${
                      isSelected ? "text-emerald-200" : "text-amber-200"
                    }`}
                  >
                    Click to inspect
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detail Box */}
        <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/20 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs font-mono text-amber-300 uppercase tracking-wider">
              Step {experimentSteps[activeStep].step}: {experimentSteps[activeStep].title}
            </span>
            <p className="text-base text-neutral-100 font-sans">
              {experimentSteps[activeStep].desc}
            </p>
          </div>
          <div className="text-xs font-mono px-4 py-2 rounded-full bg-white/20 border border-white/30 text-amber-200 backdrop-blur-md shrink-0">
            Methodology Phase {activeStep + 1} / 8
          </div>
        </div>

        {/* Supporting Copy Banner */}
        <div className="p-8 rounded-3xl bg-black/50 backdrop-blur-2xl text-white border border-white/20 shadow-2xl">
          <p className="text-base sm:text-lg lg:text-xl font-serif text-neutral-200 leading-relaxed max-w-4xl">
            “Every recommendation must eventually face the field. Our objective is to validate relationships between soil, environment, intervention and crop outcomes before turning them into reliable recommendations.”
          </p>
          <div className="mt-4 text-xs font-mono text-amber-300 uppercase tracking-widest">
            — R&D VALIDATION COMMITMENT
          </div>
        </div>
      </div>
    </section>
  );
};
