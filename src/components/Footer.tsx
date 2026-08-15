import React from "react";
import { VASHUDHA_LOGO } from "../data/vashudhaData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0704] text-white border-t border-white/10 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20 relative z-10 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl overflow-hidden bg-white/10 border border-white/15 shadow-sm flex items-center justify-center">
              <img 
                src={VASHUDHA_LOGO} 
                alt="Vashudha Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-white font-title">
                Vashudha
              </div>
              <p className="text-xs text-neutral-400 font-paragraph">
                Let the Soil Speak • A project by Caretcoders LLP
              </p>
            </div>
          </div>

          <div className="text-xs font-link text-neutral-400">
            Built with curiosity. Rooted in purpose.
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-link text-neutral-500">
          <div>
            Connected Sensing • Agricultural Science • Data Intelligence
          </div>
          <div>
            © {new Date().getFullYear()} Caretcoders LLP. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

