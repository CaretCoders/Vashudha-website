import React from "react";
import { Cpu, Network, Brain, Target, RefreshCw, ArrowRight } from "lucide-react";
import { SMART_FARM_AERIAL_BG } from "../data/vashudhaData";

interface TechnologySectionProps {
  onOpenPartnerModal?: () => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ onOpenPartnerModal }) => {
  const features = [
    {
      num: "01",
      title: "IoT",
      subheading: "Listen to the Field",
      description: "Connected sensing forms the bridge between Vashudha and the physical farm, helping us observe changing conditions in real time.",
      icon: Cpu,
    },
    {
      num: "02",
      title: "Data Intelligence",
      subheading: "Understand the Bigger Picture",
      description: "Different observations can mean more when they are understood together. Vashudha brings data together to reveal patterns and changes over time.",
      icon: Network,
    },
    {
      num: "03",
      title: "AI / ML",
      subheading: "Find the Patterns",
      description: "Machine learning helps us explore relationships within agricultural data and build a deeper understanding of how farms behave.",
      icon: Brain,
    },
    {
      num: "04",
      title: "Precise Recommendations",
      subheading: "Turn Insight Into Action",
      description: "The goal is not simply to collect more data. It is to turn useful information into practical, field-specific decisions.",
      icon: Target,
    },
    {
      num: "05",
      title: "Continuous Learning",
      subheading: "Improve With Every Cycle",
      description: "Farms change over time. New observations and feedback can help Vashudha continuously improve its understanding.",
      icon: RefreshCw,
    },
  ];

  return (
    <section id="technology" className="py-24 lg:py-32 bg-[#201712] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url(${SMART_FARM_AERIAL_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#251A14]/90 via-[#1E1510]/85 to-[#17100B]/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4 mb-16">
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-bold">
            Built to Listen. Designed to Learn.
          </h2>
          <p className="lead font-lead text-xl sm:text-2xl text-amber-200 font-normal">
            Five connected capabilities form the foundation of Vashudha.
          </p>
        </div>

        {/* 5 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.num}
                className="p-8 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 hover:border-emerald-400/50 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.3)] group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <span className="text-xs font-link text-amber-300 uppercase font-semibold">
                      FEATURE {feature.num}
                    </span>
                    <Icon className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <h3 className="font-title text-2xl text-white font-bold mb-1">
                      {feature.title}
                    </h3>
                    <p className="lead font-lead text-xs text-amber-200 font-normal uppercase tracking-wider">
                      {feature.subheading}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-200 leading-relaxed font-paragraph font-bold">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between font-link">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-emerald-200 font-normal uppercase tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer font-link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Closing Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-black/40 text-white backdrop-blur-2xl border border-white/20 shadow-xl text-center space-y-4 max-w-4xl mx-auto">
          <p className="font-title text-3xl sm:text-4xl text-white font-bold">
            “The more we listen, the better we understand.”
          </p>
          <div className="text-xs font-link text-amber-300 uppercase tracking-widest font-semibold">
            — VASHUDHA ENGINEERING PRINCIPLE
          </div>
        </div>
      </div>
    </section>
  );
};
