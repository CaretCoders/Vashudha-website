import React from "react";
import { MEASUREMENT_CATEGORIES } from "../data/vashudhaData";
import { Activity, ShieldCheck } from "lucide-react";

export const MeasureSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#2B2724]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono tracking-widest text-[#6E655F] uppercase flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#C87D55]" />
            11 — WHAT WE MEASURE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1C1A] leading-tight font-normal">
            The field leaves signals. We're learning how to read them.
          </h2>
        </div>

        {/* Four Measurement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MEASUREMENT_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="p-7 rounded-2xl bg-[#F5F2EB] border border-[#2B2724]/10 hover:border-[#1B332A]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#2B2724]/10 pb-4">
                  <span className="font-mono text-xs text-[#8C827A] uppercase">
                    DOMAIN / {cat.categoryNumber}
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#1B332A] text-[#FAF8F5]">
                    {cat.title}
                  </span>
                </div>

                <p className="text-xs text-[#5C554E] font-sans leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono text-[#C87D55] uppercase tracking-wider block font-semibold">
                    Captured Field Signals:
                  </span>
                  <ul className="space-y-1.5">
                    {cat.signals.map((sig, i) => (
                      <li key={i} className="text-xs font-mono text-[#2B2724] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B332A]" />
                        <span>{sig}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2B2724]/10 text-[11px] font-mono text-[#6E655F]">
                {cat.fieldContext}
              </div>
            </div>
          ))}
        </div>

        {/* Protection / Disclaimer Note */}
        <div className="p-5 rounded-xl bg-[#F5F2EB] border border-[#2B2724]/15 flex items-center gap-3 text-xs font-mono text-[#5C554E]">
          <ShieldCheck className="w-4 h-4 text-[#385A4B] shrink-0" />
          <span>
            <strong>Note:</strong> The final sensing architecture will be determined through research, calibration and field validation.
          </span>
        </div>
      </div>
    </section>
  );
};
