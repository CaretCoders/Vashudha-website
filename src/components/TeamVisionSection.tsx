import React from "react";
import { HeartHandshake, Sprout, ArrowRight } from "lucide-react";

interface TeamVisionSectionProps {
  onOpenPartnerModal?: () => void;
}

export const TeamVisionSection: React.FC<TeamVisionSectionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="team" className="py-24 lg:py-32 bg-[#1C140F] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column — Team */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.3)] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs text-amber-300 uppercase tracking-wider font-semibold border-b border-white/15 pb-3">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>ABOUT OUR TEAM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl text-white leading-tight font-bold">
                Built With Curiosity. Rooted in Purpose.
              </h2>

              <p className="lead text-lg sm:text-xl text-amber-200 font-normal">
                We are a young team exploring how technology can help us understand farming better.
              </p>

              <div className="space-y-4 text-sm sm:text-base text-neutral-200 leading-relaxed">
                <p className="font-bold">
                  We believe meaningful technology starts with understanding the real problem.
                </p>
                <p className="font-bold">
                  Vashudha brings together software, AI/ML, hardware research and a willingness to learn from the field.
                </p>
                <p className="text-lg text-white font-bold pt-2 border-t border-white/15">
                  “We are not trying to replace the farmer's knowledge. We want to give it better information.”
                </p>
              </div>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-normal uppercase tracking-wider transition-all shadow-md group cursor-pointer border border-emerald-400/30"
              >
                <span>Meet the Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-300" />
              </a>
            </div>
          </div>

          {/* Right Column — Vision */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-emerald-950/80 backdrop-blur-2xl border border-emerald-400/40 shadow-[0_16px_48px_rgba(0,0,0,0.4)] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs text-amber-300 uppercase tracking-wider font-semibold border-b border-white/15 pb-3">
                <Sprout className="w-4 h-4 text-emerald-400" />
                <span>OUR LONG-TERM VISION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl text-white leading-tight font-bold">
                Work With Nature. Understand It Better.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-neutral-200 leading-relaxed">
                <p className="font-bold">
                  We imagine a future where every field can be understood on its own terms.
                </p>
                <p className="font-bold">
                  Where technology helps farmers make informed decisions, reduce unnecessary inputs and protect the health of the soil for the seasons ahead.
                </p>
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-amber-200 text-xs space-y-1">
                  <div className="font-bold text-white uppercase tracking-wider">Vashudha Journey</div>
                  <div className="font-normal">Vashudha is still at the beginning. We are here to listen, learn and build.</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-amber-300 font-normal">
              <span>CARETS OF KNOWLEDGE</span>
              <span>CARETCODERS R&D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
