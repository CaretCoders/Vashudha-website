import React from "react";
import { Clock } from "lucide-react";
import { DEEP_ROOTS_EARTH_BG } from "../data/vashudhaData";

export const RoadmapSection: React.FC = () => {
  const phases = [
    {
      num: "01",
      phase: "Research",
      desc: "Understanding the problem, exploring agricultural conditions, studying relevant technologies and building our foundation.",
      status: "Current",
      isCurrent: true,
    },
    {
      num: "02",
      phase: "Prototype",
      desc: "Building and testing the first Vashudha sensing and intelligence system.",
      status: "Upcoming",
      isCurrent: false,
    },
    {
      num: "03",
      phase: "Field Testing",
      desc: "Taking the system into real farming conditions and learning what works, what doesn't and what needs to change.",
      status: "Planned",
      isCurrent: false,
    },
    {
      num: "04",
      phase: "Pilot Farms",
      desc: "Working with selected farms to test Vashudha across real growing cycles and gather meaningful feedback.",
      status: "Planned",
      isCurrent: false,
    },
    {
      num: "05",
      phase: "Scale",
      desc: "Taking what we learn and building a system that can support more farms, crops and agricultural conditions.",
      status: "Planned",
      isCurrent: false,
    },
  ];

  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-[#1A130E] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Deep Soil Roots Overlay */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url(${DEEP_ROOTS_EARTH_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#201712]/90 via-[#18110D]/85 to-[#120D0A]/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4 mb-16">
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-bold">
            From an Idea to the Field
          </h2>
          <p className="lead font-lead text-xl sm:text-2xl text-amber-200 font-normal">
            We are starting small, testing carefully and learning from the ground up.
          </p>
        </div>

        {/* 5 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {phases.map((p) => (
            <div
              key={p.num}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 backdrop-blur-2xl ${
                p.isCurrent
                  ? "bg-emerald-800/90 text-white border-emerald-400 shadow-[0_8px_24px_rgba(16,185,129,0.3)] ring-2 ring-amber-400"
                  : "bg-white/10 dark:bg-white/5 text-white border-white/20 hover:bg-white/15"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-link">
                  <span
                    className={`text-xs font-bold ${
                      p.isCurrent ? "text-amber-300" : "text-amber-200/80"
                    }`}
                  >
                    PHASE {p.num}
                  </span>
                  {p.isCurrent ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  ) : (
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  )}
                </div>

                <h3 className="font-title text-xl font-bold mb-2 leading-snug text-white">
                  {p.phase}
                </h3>

                <div className="mb-3">
                  <span
                    className={`text-[9px] px-2.5 py-0.5 rounded-full font-normal font-link border ${
                      p.isCurrent
                        ? "bg-amber-400/20 text-amber-300 border-amber-400/40"
                        : "bg-white/10 text-neutral-300 border-white/20"
                    }`}
                  >
                    Status: {p.status}
                  </span>
                </div>

                <p
                  className={`text-xs leading-relaxed font-paragraph font-bold ${
                    p.isCurrent ? "text-emerald-100" : "text-neutral-200"
                  }`}
                >
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/15 text-[9px] uppercase tracking-wider text-amber-300 font-link font-normal">
                Phase {p.num} Milestone
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="p-8 sm:p-10 rounded-3xl bg-black/40 text-white backdrop-blur-2xl border border-white/20 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-link text-emerald-400 uppercase tracking-widest block font-semibold">
              OUR MISSION
            </span>
            <p className="font-title text-2xl sm:text-3xl font-bold text-white">
              “Our goal is to help farmers grow better while gradually reducing their dependence on synthetic chemicals.”
            </p>
          </div>
          <div className="shrink-0 px-5 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs text-emerald-300 backdrop-blur-md font-link font-medium">
            SUSTAINABLE AGRICULTURE
          </div>
        </div>
      </div>
    </section>
  );
};
