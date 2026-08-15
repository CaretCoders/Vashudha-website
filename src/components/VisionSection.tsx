import React from "react";
import { CheckCircle2, Sprout, ShieldCheck } from "lucide-react";

export const VisionSection: React.FC = () => {
  const coreObjectives = [
    {
      title: "Maintain productivity.",
      subtitle: "Protect harvest yields within the same cultivation timeframe.",
      icon: CheckCircle2,
      accent: "border-l-4 border-emerald-400",
    },
    {
      title: "Improve soil health.",
      subtitle: "Foster long-term organic carbon, moisture retention and biological vigor.",
      icon: Sprout,
      accent: "border-l-4 border-amber-400",
    },
    {
      title: "Reduce unnecessary chemical dependency.",
      subtitle: "Replace blanket synthetic sprays with field-validated, targeted actions.",
      icon: ShieldCheck,
      accent: "border-l-4 border-sky-400",
    },
  ];

  return (
    <section id="vision" className="py-24 lg:py-32 bg-[#241E1A] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Subtle Accent Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20 relative">
        {/* Horizon Annotation */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-amber-300 bg-white/10 border border-white/20 backdrop-blur-md uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>04 — OUR VISION (A-HORIZON TOPSOIL HUMUS 0.3m)</span>
        </div>

        {/* Massive Headline */}
        <div className="max-w-5xl space-y-8 mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] text-white">
            A farm that is understood before it is treated.
          </h2>

          <p className="text-lg sm:text-xl text-neutral-200 font-sans font-light max-w-3xl leading-relaxed">
            Our vision is to make farming more precise, sustainable and less dependent on unnecessary chemical inputs by helping farmers understand what their soil and crops actually need.
          </p>
        </div>

        {/* Visually Huge Statements Grid */}
        <div className="space-y-6 max-w-5xl">
          <div className="text-xs font-mono text-amber-300 uppercase tracking-widest border-b border-white/15 pb-3">
            Core Objectives
          </div>

          <div className="grid grid-cols-1 gap-6">
            {coreObjectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div
                  key={i}
                  className={`p-8 sm:p-10 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 hover:border-emerald-400/50 transition-all duration-300 ${obj.accent} flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.3)]`}
                >
                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-snug">
                      {obj.title}
                    </h3>
                    <p className="text-base text-neutral-300 font-sans font-normal">
                      {obj.subtitle}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-amber-300 backdrop-blur-md shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
