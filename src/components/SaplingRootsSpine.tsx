import React, { useEffect, useState } from "react";
import { Sprout, Activity } from "lucide-react";
import { VASHUDHA_LOGO } from "../data/vashudhaData";

interface SoilLayerIndicator {
  depth: string;
  horizon: string;
  label: string;
}

export const SaplingRootsSpine: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHorizon, setActiveHorizon] = useState("O-HORIZON");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(currentProgress);

        if (currentProgress < 0.15) setActiveHorizon("O-HORIZON");
        else if (currentProgress < 0.35) setActiveHorizon("A-HORIZON");
        else if (currentProgress < 0.55) setActiveHorizon("E-HORIZON");
        else if (currentProgress < 0.72) setActiveHorizon("B-HORIZON");
        else if (currentProgress < 0.88) setActiveHorizon("C-HORIZON");
        else setActiveHorizon("R-HORIZON");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to calculate stroke-dashoffset for branch growth based on scroll progress
  const getBranchOffset = (startProgress: number, length: number) => {
    if (scrollProgress < startProgress) return length;
    const progressInBranch = Math.min((scrollProgress - startProgress) / 0.15, 1);
    return length * (1 - progressInBranch);
  };

  return (
    <div className="fixed left-2 sm:left-5 lg:left-8 top-0 bottom-0 h-screen w-14 sm:w-20 z-40 pointer-events-none flex flex-col items-center justify-between py-4 sm:py-6">
      {/* Top Sapling Sprout Badge (Clean translucent glass capsule with logo) */}
      <div className="relative pointer-events-auto mt-16 sm:mt-20 shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden bg-white/40 dark:bg-white/15 backdrop-blur-xl border border-white/40 dark:border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] flex items-center justify-center">
          <img 
            src={VASHUDHA_LOGO} 
            alt="Vashudha Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Vertical Organic Root SVG Trunk - Scaled to fit 100% on current visible screen */}
      <div className="relative flex-1 w-full min-h-0 my-2 overflow-visible">
        <svg
          viewBox="0 0 100 1000"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background Guide Root Path */}
          <path
            d="M 50 0 C 50 100, 30 200, 50 350 C 70 500, 30 650, 50 800 C 65 900, 35 950, 50 1000"
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="3"
            strokeDasharray="6 6"
          />

          {/* Main Growing Central Taproot */}
          <path
            d="M 50 0 C 50 100, 30 200, 50 350 C 70 500, 30 650, 50 800 C 65 900, 35 950, 50 1000"
            fill="none"
            stroke="url(#taprootGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              strokeDasharray: "1050",
              strokeDashoffset: 1050 * (1 - scrollProgress),
              transition: "stroke-dashoffset 0.05s linear",
            }}
          />

          {/* --- TOP / SHALLOW ROOT BRANCHES (A & E HORIZONS) --- */}
          {/* Branch 1 Left */}
          <path
            d="M 48 120 Q 25 140, 10 160"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: "60",
              strokeDashoffset: getBranchOffset(0.1, 60),
              opacity: scrollProgress >= 0.1 ? 1 : 0,
            }}
          />
          {/* Branch 1 Right */}
          <path
            d="M 52 180 Q 75 195, 88 215"
            fill="none"
            stroke="#34D399"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: "60",
              strokeDashoffset: getBranchOffset(0.15, 60),
              opacity: scrollProgress >= 0.15 ? 1 : 0,
            }}
          />

          {/* --- MID-SUBSOIL LATERAL ROOTS (B HORIZON) --- */}
          {/* Branch 2 Left */}
          <path
            d="M 45 380 Q 20 410, 5 435"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: "70",
              strokeDashoffset: getBranchOffset(0.35, 70),
              opacity: scrollProgress >= 0.35 ? 1 : 0,
            }}
          />
          {/* Branch 2 Right */}
          <path
            d="M 55 450 Q 80 475, 95 500"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: "70",
              strokeDashoffset: getBranchOffset(0.45, 70),
              opacity: scrollProgress >= 0.45 ? 1 : 0,
            }}
          />

          {/* --- DEEP / EXPANSIVE SUBSTRATUM ROOTS (C HORIZON) --- */}
          {/* Branch 3 Left - Spreading */}
          <path
            d="M 46 620 Q 15 650, -10 690"
            fill="none"
            stroke="#C87D55"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              strokeDasharray: "90",
              strokeDashoffset: getBranchOffset(0.6, 90),
              opacity: scrollProgress >= 0.6 ? 1 : 0,
            }}
          />
          {/* Branch 3 Right - Spreading */}
          <path
            d="M 54 680 Q 85 710, 110 750"
            fill="none"
            stroke="#C87D55"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              strokeDasharray: "90",
              strokeDashoffset: getBranchOffset(0.68, 90),
              opacity: scrollProgress >= 0.68 ? 1 : 0,
            }}
          />

          {/* --- BOTTOM LARGER ANCHOR ROOTS (R HORIZON DEEP BEDROCK) --- */}
          {/* Large Deep Anchor Root Left 1 */}
          <path
            d="M 48 820 C 20 850, -15 890, -35 940"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              strokeDasharray: "140",
              strokeDashoffset: getBranchOffset(0.78, 140),
              opacity: scrollProgress >= 0.78 ? 1 : 0,
            }}
          />
          {/* Large Deep Anchor Root Right 1 */}
          <path
            d="M 52 850 C 80 880, 115 915, 135 960"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              strokeDasharray: "140",
              strokeDashoffset: getBranchOffset(0.82, 140),
              opacity: scrollProgress >= 0.82 ? 1 : 0,
            }}
          />

          {/* Massive Deep Root Network Base (Spreading at the end of scroll) */}
          <path
            d="M 50 900 C 25 930, 0 960, -25 990"
            fill="none"
            stroke="#10B981"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: "120",
              strokeDashoffset: getBranchOffset(0.88, 120),
              opacity: scrollProgress >= 0.88 ? 1 : 0,
            }}
          />
          <path
            d="M 50 920 C 75 950, 100 975, 125 1000"
            fill="none"
            stroke="#34D399"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: "120",
              strokeDashoffset: getBranchOffset(0.9, 120),
              opacity: scrollProgress >= 0.9 ? 1 : 0,
            }}
          />
          <path
            d="M 50 950 Q 30 980, 10 1000"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              strokeDasharray: "80",
              strokeDashoffset: getBranchOffset(0.93, 80),
              opacity: scrollProgress >= 0.93 ? 1 : 0,
            }}
          />
          <path
            d="M 50 950 Q 70 980, 90 1000"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              strokeDasharray: "80",
              strokeDashoffset: getBranchOffset(0.95, 80),
              opacity: scrollProgress >= 0.95 ? 1 : 0,
            }}
          />

          {/* Active Growing Sensor Tip Node */}
          <circle
            cx={50 + Math.sin(scrollProgress * Math.PI * 4) * 8}
            cy={1000 * scrollProgress}
            r="6"
            fill="#10B981"
            className="animate-ping opacity-80"
          />
          <circle
            cx={50 + Math.sin(scrollProgress * Math.PI * 4) * 8}
            cy={1000 * scrollProgress}
            r="4.5"
            fill="#34D399"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="taprootGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="25%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="75%" stopColor="#C87D55" />
              <stop offset="100%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Translucent iOS Soil Depth Indicator Capsule */}
      <div className="pointer-events-auto shrink-0 flex flex-col items-center gap-1 p-2 rounded-2xl bg-white/20 dark:bg-black/40 backdrop-blur-2xl border border-white/30 dark:border-white/15 shadow-xl text-center">
        <Activity className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: "8s" }} />
        <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-semibold uppercase">
          {(scrollProgress * 3.8).toFixed(1)}m
        </span>
        <span className="text-[8px] font-mono tracking-tighter text-neutral-300 font-medium uppercase px-1.5 py-0.5 rounded-full bg-white/10 border border-white/20">
          {activeHorizon.replace("-HORIZON", "")}
        </span>
      </div>
    </div>
  );
};
