import React from "react";
import { TrendingUp, ShieldCheck, Sprout, ArrowUpRight } from "lucide-react";

interface GoalSectionProps {
  onOpenPartnerModal: () => void;
}

export const GoalSection: React.FC<GoalSectionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="py-24 lg:py-36 bg-[#1B332A] text-[#FAF8F5] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-[#FAF8F5]/10 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-[#FAF8F5]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-xs font-mono tracking-widest text-[#E6CBB3] uppercase mb-8">
          13 — OUR LONG-TERM GOAL
        </div>

        {/* Huge High-Impact Headline */}
        <div className="max-w-5xl space-y-8 mb-16">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#FAF8F5]">
            Same harvest. Less dependency. Healthier soil.
          </h2>

          <p className="text-lg sm:text-2xl font-sans text-[#D9D2C5] font-light max-w-4xl leading-relaxed">
            Our long-term goal is to help farmers maintain crop productivity within the same cultivation period while progressively reducing unnecessary dependence on synthetic chemical inputs through precise, scientifically guided interventions.
          </p>
        </div>

        {/* Three Impact Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 rounded-2xl bg-[#2D4A3E] border border-[#FAF8F5]/15 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/10 flex items-center justify-center text-[#E6CBB3]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#FAF8F5]">
              Harvest Parity
            </h3>
            <p className="text-sm text-[#D9D2C5] font-sans leading-relaxed">
              Ensuring yield volumes and farm revenue are never compromised during input optimization.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#2D4A3E] border border-[#FAF8F5]/15 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/10 flex items-center justify-center text-[#E6CBB3]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#FAF8F5]">
              Reduced Synthetic Dependency
            </h3>
            <p className="text-sm text-[#D9D2C5] font-sans leading-relaxed">
              Targeting unnecessary chemical applications to cut input costs and reduce environmental runoff.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#2D4A3E] border border-[#FAF8F5]/15 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/10 flex items-center justify-center text-[#E6CBB3]">
              <Sprout className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#FAF8F5]">
              Soil Health Trajectory
            </h3>
            <p className="text-sm text-[#D9D2C5] font-sans leading-relaxed">
              Building long-term soil organic carbon, moisture retention, and microbial biodiversity.
            </p>
          </div>
        </div>

        {/* Call To Action */}
        <div className="pt-4 flex items-center gap-4">
          <button
            onClick={onOpenPartnerModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E6CBB3] text-[#1B332A] text-sm font-semibold hover:bg-[#FAF8F5] transition-all cursor-pointer shadow-md"
          >
            <span>Partner In Our Field Trials</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
