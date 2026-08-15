import React, { useState } from "react";
import { User, AlertCircle, Sparkles, Eye, ArrowDown } from "lucide-react";

export const FarmerSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const farmerSteps = [
    {
      num: "01",
      title: "Current field condition",
      icon: AlertCircle,
      indicators: [
        { label: "Soil moisture", trend: "↓ Depleting (-12% vs threshold)" },
        { label: "Nutrient availability", trend: "→ Stable in upper 15cm" },
        { label: "Environmental stress", trend: "↑ High VPD heat stress" },
      ],
      description: "In-situ sensors detect early root-zone drying before visual leaf wilting occurs.",
    },
    {
      num: "02",
      title: "System interpretation",
      icon: Sparkles,
      indicators: [
        { label: "Reference Range", trend: "Jointing Stage Target [70–85%]" },
        { label: "Observed Tension", trend: "42 kPa (Entering deficit)" },
        { label: "Deviation Score", trend: "Moderate Stress Alert" },
      ],
      description: "Field condition differs from the relevant growth-stage reference range.",
    },
    {
      num: "03",
      title: "Recommendation",
      icon: Sparkles,
      indicators: [
        { label: "Primary Action", trend: "Apply 15mm light pulse irrigation" },
        { label: "Chemical Spray", trend: "NO SYNTHETIC INPUT REQUIRED" },
        { label: "Cost & Resource Saved", trend: "Prevented unnecessary top-dressing" },
      ],
      description: "Take the most appropriate, field-validated minimal intervention.",
    },
    {
      num: "04",
      title: "Monitor",
      icon: Eye,
      indicators: [
        { label: "Post-Action Moisture", trend: "Recovered to 74% (Optimal)" },
        { label: "Canopy Temperature", trend: "-2.1 °C cooling observed" },
        { label: "Feedback Log", trend: "Intervention recorded in model" },
      ],
      description: "Observe how the field responds and validate continuous progress.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F5F2EB] border-b border-[#2B2724]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono tracking-widest text-[#6E655F] uppercase flex items-center gap-2">
            <User className="w-4 h-4 text-[#C87D55]" />
            12 — THE FARMER AT THE CENTER
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1C1A] leading-tight font-normal">
            Technology is only useful when it helps someone make a better decision.
          </h2>
        </div>

        {/* Farmer Decision Flow Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#6E655F]">
              Farmer Decision Cycle
            </div>
            {farmerSteps.map((s, idx) => {
              const isSelected = activeTab === idx;
              return (
                <div
                  key={s.num}
                  onClick={() => setActiveTab(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#1B332A] text-[#FAF8F5] border-[#1B332A] shadow-md scale-[1.01]"
                      : "bg-[#FAF8F5] text-[#2B2724] border-[#2B2724]/10 hover:bg-[#FAF8F5]/80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono ${
                        isSelected ? "text-[#D99B73]" : "text-[#8C827A]"
                      }`}
                    >
                      STEP / {s.num}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAF8F5]/10 text-[#E6CBB3]">
                        ACTIVE VIEW
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-1">{s.title}</h3>
                  <p
                    className={`text-xs font-sans ${
                      isSelected ? "text-[#D9D2C5]" : "text-[#5C554E]"
                    }`}
                  >
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Step Detail Card Simulation */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#1E1C1A] text-[#FAF8F5] border border-[#2B2724]/10 space-y-6">
            <div className="flex items-center justify-between border-b border-[#FAF8F5]/10 pb-4">
              <div>
                <span className="text-xs font-mono text-[#D99B73] uppercase tracking-widest block">
                  Simulated Field Decision Interface
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#FAF8F5] mt-1">
                  Step {farmerSteps[activeTab].num} — {farmerSteps[activeTab].title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/10 flex items-center justify-center text-[#D99B73]">
                <User className="w-5 h-5" />
              </div>
            </div>

            <p className="text-sm text-[#D9D2C5] font-sans leading-relaxed">
              {farmerSteps[activeTab].description}
            </p>

            {/* Simulated Live Indicators Box */}
            <div className="p-5 rounded-xl bg-[#2B2724] border border-[#FAF8F5]/10 space-y-3">
              <span className="text-[10px] font-mono text-[#A39990] uppercase tracking-wider block">
                Observed Field Signal Parameters
              </span>
              <div className="space-y-2">
                {farmerSteps[activeTab].indicators.map((ind, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-[#1E1C1A] border border-[#FAF8F5]/5 flex items-center justify-between text-xs font-mono"
                  >
                    <span className="text-[#D9D2C5]">{ind.label}</span>
                    <span className="text-[#E6CBB3] font-semibold">{ind.trend}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Farmer Center Guarantee */}
            <div className="p-4 rounded-xl bg-[#2D4A3E]/40 border border-[#2D4A3E] text-xs font-mono text-[#E6CBB3]">
              <strong>Farmer Agency Principle:</strong> Recommendations serve as clear, transparent recommendations. The farmer remains the ultimate decision-maker for their field.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
