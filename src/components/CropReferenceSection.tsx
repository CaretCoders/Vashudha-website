import React, { useState } from "react";
import { CROP_REFERENCE_DATA, CROP_FIELD_IMAGE } from "../data/vashudhaData";
import { Sprout, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

export const CropReferenceSection: React.FC = () => {
  const [selectedCropId, setSelectedCropId] = useState("wheat");
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);

  const selectedCrop =
    CROP_REFERENCE_DATA.find((c) => c.id === selectedCropId) || CROP_REFERENCE_DATA[0];
  const selectedStage = selectedCrop.growthStages[selectedStageIndex] || selectedCrop.growthStages[0];

  return (
    <section className="py-24 lg:py-32 bg-[#3D2F26] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-amber-300 bg-white/10 border border-white/20 backdrop-blur-md uppercase">
            07 — CROP-SPECIFIC REFERENCE CONDITIONS (E-HORIZON MINERAL MATRIX 0.7m)
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-normal">
            Every crop has a different story.
          </h2>
          <p className="text-base sm:text-lg text-neutral-200 font-sans">
            A healthy field cannot be defined by a single universal number. We are researching how soil composition and environmental conditions relate to crop development across different crops and growth stages.
          </p>
        </div>

        {/* Visual Flow Diagram Banner */}
        <div className="mb-12 p-5 rounded-3xl bg-black/30 backdrop-blur-2xl border border-white/20">
          <div className="text-[11px] font-mono text-amber-300 uppercase tracking-widest mb-3">
            RESEARCH VECTOR
          </div>
          <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono text-white whitespace-nowrap pb-2">
            <span className="px-3.5 py-1 bg-emerald-800 text-white rounded-full font-semibold border border-emerald-400/30">Crop</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300/60" />
            <span className="px-3.5 py-1 bg-white/10 border border-white/20 rounded-full">Growth Stage</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300/60" />
            <span className="px-3.5 py-1 bg-white/10 border border-white/20 rounded-full">Soil</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300/60" />
            <span className="px-3.5 py-1 bg-white/10 border border-white/20 rounded-full">Environment</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300/60" />
            <span className="px-3.5 py-1 bg-white/10 border border-white/20 rounded-full">Observed Response</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300/60" />
            <span className="px-3.5 py-1 bg-amber-600 text-white rounded-full font-semibold border border-amber-400/30">Reference Range</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300/60" />
            <span className="px-3.5 py-1 bg-emerald-900 text-white rounded-full border border-emerald-400/40">Recommendation</span>
          </div>
        </div>

        {/* Interactive Crop Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Crop Selector */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-300">
              Select Research Crop
            </div>
            <div className="space-y-2">
              {CROP_REFERENCE_DATA.map((crop) => (
                <button
                  key={crop.id}
                  onClick={() => {
                    setSelectedCropId(crop.id);
                    setSelectedStageIndex(0);
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer backdrop-blur-2xl ${
                    selectedCropId === crop.id
                      ? "bg-emerald-800/90 text-white border-emerald-400 shadow-[0_8px_24px_rgba(16,185,129,0.3)]"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-medium">{crop.cropName}</span>
                    <span className="text-[10px] font-mono opacity-90 px-2.5 py-0.5 rounded-full bg-white/20 border border-white/20">
                      {crop.category}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-amber-200 mt-1 italic">
                    {crop.scientificName}
                  </div>
                </button>
              ))}
            </div>

            {/* Generated Editorial Crop Photo Thumbnail */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 mt-6 shadow-md">
              <img
                src={CROP_FIELD_IMAGE}
                alt="Research crop plot in morning light"
                referrerPolicy="no-referrer"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white">
                RESEARCH FIELD PLOT / CROP SCIENCE
              </div>
            </div>
          </div>

          {/* Right Reference Conditions Viewer */}
          <div className="lg:col-span-8 p-8 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 space-y-6 shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <h3 className="font-serif text-2xl text-white font-medium">
                  {selectedCrop.cropName}
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Research Stage Matrix
                </span>
              </div>
              <p className="text-xs font-mono text-neutral-200 italic leading-relaxed">
                "{selectedCrop.researchNote}"
              </p>
            </div>

            {/* Stage Selector Tabs */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-amber-300 uppercase tracking-wider">
                Select Growth Stage Milestone
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCrop.growthStages.map((stage, idx) => (
                  <button
                    key={stage.stageName}
                    onClick={() => setSelectedStageIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer backdrop-blur-md ${
                      selectedStageIndex === idx
                        ? "bg-amber-500 text-white font-semibold shadow-md border border-amber-300"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    Stage {idx + 1}: {stage.stageName}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Detail Card */}
            <div className="p-6 rounded-2xl bg-black/30 backdrop-blur-2xl border border-white/20 space-y-6">
              <div>
                <h4 className="font-serif text-xl font-medium text-white mb-1">
                  {selectedStage.stageName}
                </h4>
                <p className="text-sm text-neutral-200 font-sans">
                  {selectedStage.description}
                </p>
              </div>

              {/* Reference Ranges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/20">
                  <div className="text-[10px] font-mono text-amber-300">SOIL MOISTURE</div>
                  <div className="font-mono text-base font-bold text-emerald-300 mt-1">
                    {selectedStage.targetMoistureRange[0]}–{selectedStage.targetMoistureRange[1]}%
                  </div>
                  <div className="text-[9px] font-mono text-neutral-300">Target Volumetric</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/20">
                  <div className="text-[10px] font-mono text-amber-300">SOIL TEMP</div>
                  <div className="font-mono text-base font-bold text-emerald-300 mt-1">
                    {selectedStage.targetSoilTempRange[0]}–{selectedStage.targetSoilTempRange[1]} °C
                  </div>
                  <div className="text-[9px] font-mono text-neutral-300">Root Zone Temp</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/20">
                  <div className="text-[10px] font-mono text-amber-300">SOIL pH</div>
                  <div className="font-mono text-base font-bold text-emerald-300 mt-1">
                    {selectedStage.targetPhRange[0]}–{selectedStage.targetPhRange[1]}
                  </div>
                  <div className="text-[9px] font-mono text-neutral-300">Acidity Index</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/20">
                  <div className="text-[10px] font-mono text-amber-300">EC (SALINITY)</div>
                  <div className="font-mono text-base font-bold text-emerald-300 mt-1">
                    {selectedStage.targetEcRange[0]}–{selectedStage.targetEcRange[1]}
                  </div>
                  <div className="text-[9px] font-mono text-neutral-300">mS/cm Ion Proxy</div>
                </div>
              </div>

              {/* Key Nutrient Focus & Intervention Risk */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/15 text-xs">
                <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-400/30">
                  <span className="font-mono font-semibold text-emerald-300 block mb-1">
                    Key Nutrient Assimilation Focus:
                  </span>
                  <span className="text-neutral-200">{selectedStage.keyNutrientFocus}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-950/60 border border-amber-400/30">
                  <span className="font-mono font-semibold text-amber-300 block mb-1">
                    Common Blanket Intervention Risk:
                  </span>
                  <span className="text-neutral-200">{selectedStage.typicalInterventionRisk}</span>
                </div>
              </div>
            </div>

            {/* Credible R&D Wording Callout */}
            <div className="p-4 rounded-2xl bg-black/50 text-white text-xs font-mono flex items-center gap-3 border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
              <span>
                <strong>Important R&D Note:</strong> We are actively researching crop-specific reference conditions across varied regional soil series through field trial validation.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
