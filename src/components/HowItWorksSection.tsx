import React, { useState } from "react";
import { 
  Sparkles, 
  Maximize2, 
  Download, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Cpu, 
  Activity, 
  Brain, 
  Target, 
  RefreshCw, 
  Layers, 
  X,
  ArrowRight,
  Sprout
} from "lucide-react";
import { DEEP_ROOTS_EARTH_BG, STORYBOARD_IMAGE } from "../data/vashudhaData";

export const HowItWorksSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const handleZoomIn = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoomLevel(1);
  };

  const steps = [
    {
      num: "01",
      tag: "We Listen",
      title: "Custom IoT Sensor Network",
      description: "We build our own sensor network to understand what is happening in the field.",
      icon: Cpu,
      color: "emerald",
    },
    {
      num: "02",
      tag: "We Collect",
      title: "Real-Time Agricultural Data Collection",
      description: "We collect real-time soil and farm data to understand how conditions change over time.",
      icon: Activity,
      color: "sky",
    },
    {
      num: "03",
      tag: "We Learn",
      title: "Data & ML",
      description: "We combine current and previous data with ML to find patterns and understand what the farm is telling us.",
      icon: Brain,
      color: "purple",
    },
    {
      num: "04",
      tag: "We Understand",
      title: "Intelligence",
      description: "We turn these patterns into useful insights to identify better conditions for healthy soil and productive crops.",
      icon: Sparkles,
      color: "amber",
    },
    {
      num: "05",
      tag: "We Recommend",
      title: "Field-Specific Recommendations",
      description: "We use these insights to create a farming plan based on what each field actually needs — including when, how and how much to use.",
      icon: Target,
      color: "emerald",
    },
    {
      num: "06",
      tag: "We Learn Again",
      title: "Continuous Feedback & Learning",
      description: "We observe what happens after each decision. The new data and results go back into the system, helping it learn and improve for the next cycle.",
      icon: RefreshCw,
      color: "teal",
    },
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-20 lg:py-28 bg-[#1A120D] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Navigation Anchors */}
      <div id="process" className="absolute -top-24 left-0 w-full h-1 pointer-events-none" />
      <div id="technology" className="absolute -top-24 left-0 w-full h-1 pointer-events-none" />

      {/* Atmospheric Soil Texture */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url(${DEEP_ROOTS_EARTH_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#241812]/95 via-[#1A120D]/90 to-[#120B07]/95 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-link font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Process Architecture</span>
            </div>
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
              Vashudha Process Storyboard
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-emerald-200/90 tracking-wide font-normal">
              &ldquo;Let the Soil Speak.&rdquo;
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-link border border-white/15 backdrop-blur-md transition-all shadow-sm cursor-pointer"
            >
              <Maximize2 className="w-4 h-4 text-emerald-400" />
              <span>Full Screen View</span>
            </button>
            <a
              href={STORYBOARD_IMAGE}
              download="Vashudha_Process_Storyboard.png"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs sm:text-sm font-link border border-emerald-500/30 backdrop-blur-md transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Save Image</span>
            </a>
          </div>
        </div>

        {/* Storyboard Presentation Card */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-stone-900 shadow-[0_24px_70px_rgba(0,0,0,0.7)] group">
          {/* Top Info Strip */}
          <div className="px-5 py-3.5 bg-stone-950/90 border-b border-white/10 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2.5 text-xs font-link text-neutral-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">Closed-Loop Precision Framework</span>
              <span className="text-neutral-500 hidden sm:inline">•</span>
              <span className="text-neutral-400 hidden sm:inline">6 Core Operational Steps</span>
            </div>

            {/* Interactive Image Tools */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.8}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 disabled:opacity-30 border border-white/10 transition-all cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-link font-medium text-neutral-400 px-1 min-w-10 text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.0}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 disabled:opacity-30 border border-white/10 transition-all cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 border border-white/10 transition-all cursor-pointer ml-1"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Storyboard Image Stage */}
          <div 
            onClick={() => setIsLightboxOpen(true)}
            className="relative w-full overflow-auto bg-[#F7F6F2] p-3 sm:p-6 lg:p-8 flex items-center justify-center cursor-zoom-in transition-all select-none min-h-[380px] sm:min-h-[500px]"
          >
            <div 
              className="transition-transform duration-300 ease-out origin-center flex items-center justify-center max-w-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={STORYBOARD_IMAGE}
                alt="Vashudha Process Storyboard - Let the Soil Speak"
                className="w-full h-auto max-h-[800px] object-contain rounded-2xl shadow-xl border border-stone-300/80 pointer-events-auto"
                loading="eager"
              />
            </div>

            {/* Click to Enlarge Hover Pill */}
            <div className="absolute bottom-6 right-6 z-20 pointer-events-none bg-stone-900/85 backdrop-blur-md text-white text-xs font-link font-medium px-4 py-2 rounded-full border border-white/20 shadow-lg flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Click image to expand full-screen</span>
            </div>
          </div>

          {/* Bottom Loop Indicator Banner */}
          <div className="p-4 sm:p-5 bg-stone-950 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-link text-emerald-300 font-semibold">
              <Sprout className="w-4 h-4 text-emerald-400" />
              <span>OUR GOAL:</span>
              <span className="text-neutral-300 font-normal">
                To help farmers grow better while gradually reducing their dependence on synthetic chemicals.
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-link font-medium text-amber-200 bg-amber-950/40 px-3.5 py-1.5 rounded-full border border-amber-500/20">
              <span>🌾 Healthier Soil</span>
              <span>•</span>
              <span>Better Decisions</span>
              <span>•</span>
              <span>Better Yield</span>
            </div>
          </div>
        </div>

        {/* 6 Step Interactive Breakdown Cards */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-xs font-link uppercase tracking-widest text-emerald-400 font-bold">
            <Layers className="w-4 h-4" />
            <span>Process Breakdown & Methodology</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(isSelected ? null : idx)}
                  className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? "bg-emerald-950/80 border-emerald-400 shadow-lg ring-1 ring-emerald-400/50" 
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-emerald-400/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-link font-bold px-2.5 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/10">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-link uppercase tracking-wider font-semibold text-neutral-400">
                      {step.tag}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <IconComp className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  <h4 className="font-title text-base font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 font-paragraph leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Complete Closed Loop Cycle Strip */}
        <div className="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-500/20 backdrop-blur-md">
          <div className="text-xs font-link text-emerald-400 font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>The Continuous Complete Loop</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm font-link text-neutral-200">
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 font-semibold text-emerald-300">1. Sense</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 font-semibold text-sky-300">2. Collect</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 font-semibold text-purple-300">3. Learn</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 font-semibold text-amber-300">4. Understand</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 font-semibold text-emerald-300">5. Recommend</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 font-semibold text-teal-300">6. Observe</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 font-bold text-emerald-200">Learn Again ↺</span>
          </div>
        </div>

      </div>

      {/* High-Resolution Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Top Bar */}
          <div 
            className="w-full max-w-7xl flex items-center justify-between text-white pb-4 border-b border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <div>
                <h3 className="font-title text-base sm:text-lg font-bold text-white">
                  Vashudha Process Storyboard
                </h3>
                <p className="text-xs text-neutral-400 font-link">Let the Soil Speak • High Resolution View</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={STORYBOARD_IMAGE}
                download="Vashudha_Process_Storyboard.png"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer flex items-center gap-2 text-xs font-link px-3"
                title="Download High-Res Storyboard"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </a>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-rose-900/40 text-neutral-300 hover:text-white border border-white/15 transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Container */}
          <div 
            className="w-full max-w-7xl flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 my-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={STORYBOARD_IMAGE}
              alt="Vashudha Process Storyboard"
              className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/20 bg-white"
            />
          </div>

          <div className="text-xs text-neutral-400 font-link text-center pt-2">
            Press anywhere outside or click Close to return.
          </div>
        </div>
      )}
    </section>
  );
};
