import React from "react";
import { ArrowRight, Layers } from "lucide-react";
import { SOIL_TEXTURE_BG } from "../data/vashudhaData";

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 lg:py-32 bg-[#D1C2A5] text-[#2B2724] border-b border-black/10 relative overflow-hidden">
      {/* Background Soil Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${SOIL_TEXTURE_BG})` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Title & Subtitle */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl text-[#231A12] leading-snug font-bold">
              We know what we put into the soil. But do we know what the soil needs?
            </h2>

            <p className="lead font-lead text-xl sm:text-2xl text-[#524132] font-normal">
              Farmers need to protect crop yield, but current agricultural practices can require significant chemical inputs, while farmers lack reliable field-level intelligence to determine when and where those inputs are truly necessary.
            </p>

            <div className="pt-4 font-link">
              <a
                href="#solution"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3D2E20] hover:bg-[#2A1E14] text-white text-xs font-normal uppercase tracking-wider transition-all shadow-md group cursor-pointer font-link"
              >
                <span>Why It Matters</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-300" />
              </a>
            </div>
          </div>

          {/* Content Card with Glassmorphism */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_16px_48px_rgba(0,0,0,0.08)] space-y-6">
            <div className="flex items-center gap-2 text-xs font-link text-[#524132] uppercase tracking-wider font-semibold border-b border-black/10 pb-3">
              <Layers className="w-4 h-4 text-[#8C5E3C]" />
              <span>Current Farming reality</span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#382B1E] leading-relaxed font-paragraph">
              <div className="space-y-1">
                <p className="font-bold text-[#231A12]">1. Chemical dependency</p>
                <p className="font-normal text-xs sm:text-sm text-[#4A3B2C]">
                  Modern agriculture relies heavily on synthetic chemical inputs to protect crop productivity, but increasing dependence creates rising costs, environmental concerns, and long-term sustainability challenges.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-black/10">
                <p className="font-bold text-[#231A12]">2. The farmer's dilemma</p>
                <p className="font-normal text-xs sm:text-sm text-[#4A3B2C]">
                  Farmers cannot simply reduce chemical inputs because insufficient pest and disease control can directly threaten crop yield, leaving them caught between increasing chemical use and the risk of crop loss.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-black/10">
                <p className="font-bold text-[#231A12]">3. Diminishing effectiveness</p>
                <p className="font-normal text-xs sm:text-sm text-[#4A3B2C]">
                  Pests and weeds can adapt to repeated chemical treatments, forcing farmers to increase or change chemical applications while facing rising input costs and uncertain effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
