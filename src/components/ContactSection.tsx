import React from "react";
import { Mail, Phone, Linkedin, Twitter, Building2, MapPin, ArrowUpRight, MessageSquare, Handshake } from "lucide-react";
import { DEEP_ROOTS_EARTH_BG } from "../data/vashudhaData";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#120B07] text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle Earth Texture Background */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url(${DEEP_ROOTS_EARTH_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#180E09]/90 via-[#120B07]/95 to-[#0B0704] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header & Subtitle */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-link font-semibold uppercase tracking-wider">
              <Handshake className="w-3.5 h-3.5 text-emerald-400" />
              <span>Connect & Collaborate</span>
            </div>

            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-bold">
              Ready to Listen?
            </h2>

            <p className="lead font-lead text-xl sm:text-2xl text-amber-200 font-normal">
              Vashudha is growing, and we'd like to grow with the right people.
            </p>
          </div>

          {/* Narrative Content Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl space-y-6 text-center">
            <div className="space-y-4 text-base sm:text-lg text-neutral-200 leading-relaxed font-paragraph max-w-2xl mx-auto">
              <p className="font-bold">
                We are looking to connect with farmers, researchers, agricultural institutions, technology partners, mentors and people who believe that better farming starts with better understanding.
              </p>
              <p className="font-bold text-neutral-300">
                If you'd like to collaborate, explore a pilot, support our research or simply learn more about what we're building, reach out directly to our team.
              </p>
            </div>

            {/* Direct Contact Grid */}
            <div className="pt-6 border-t border-white/15">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {/* Email */}
                <a
                  href="mailto:contact@caretcoders.in"
                  className="p-5 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/15 hover:border-emerald-400/50 transition-all duration-300 group flex flex-col justify-between font-link shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-200/80 uppercase font-semibold tracking-wider">Email Us</div>
                    <div className="text-sm font-normal text-white truncate mt-0.5">contact@caretcoders.in</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919179795954"
                  className="p-5 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/15 hover:border-emerald-400/50 transition-all duration-300 group flex flex-col justify-between font-link shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30 group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-200/80 uppercase font-semibold tracking-wider">Direct Call</div>
                    <div className="text-sm font-normal text-white mt-0.5">+91 9179795954</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/caretcoders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/15 hover:border-emerald-400/50 transition-all duration-300 group flex flex-col justify-between font-link shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-200/80 uppercase font-semibold tracking-wider">LinkedIn</div>
                    <div className="text-sm font-normal text-white truncate mt-0.5">Caretcoders LLP</div>
                  </div>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/caretcoders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/15 hover:border-emerald-400/50 transition-all duration-300 group flex flex-col justify-between font-link shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30 group-hover:scale-110 transition-transform">
                      <Twitter className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-200/80 uppercase font-semibold tracking-wider">X (Twitter)</div>
                    <div className="text-sm font-normal text-white truncate mt-0.5">@caretcoders</div>
                  </div>
                </a>
              </div>

              {/* Office Location & Parent Entity */}
              <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-link text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <Building2 className="w-3.5 h-3.5 text-amber-300" />
                  <span>Caretcoders LLP Research & Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

