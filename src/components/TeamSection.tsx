import React, { useState } from "react";
import { TEAM_MEMBERS } from "../data/vashudhaData";
import { Users, Code, Sprout, Microchip, FlaskConical } from "lucide-react";
import { TeamMember } from "../types";

interface TeamSectionProps {
  onSelectMember: (member: TeamMember) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectMember }) => {
  return (
    <section className="py-24 lg:py-32 bg-[#1D140D] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-amber-300 bg-white/10 border border-white/20 backdrop-blur-md uppercase">
            <Users className="w-4 h-4 text-emerald-400" />
            16 — TEAM & PEOPLE (C-HORIZON REGOLITH 2.0m)
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-normal">
            A young team trying to solve an old problem.
          </h2>
          <div className="text-xs font-mono tracking-widest text-emerald-300 font-semibold uppercase bg-white/10 px-4 py-2 rounded-full inline-block border border-white/20 backdrop-blur-md">
            Agriculture × Technology × Research × Experimentation
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              onClick={() => onSelectMember(member)}
              className="p-7 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 hover:border-emerald-400/50 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-semibold uppercase border border-amber-400/30">
                    {member.pillar}
                  </span>
                  <span className="text-xs font-mono text-neutral-300 group-hover:text-emerald-300 transition-colors">
                    View Bio →
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-medium text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-amber-300 mt-1">
                    {member.role}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 block font-semibold">
                    Specific R&D Responsibility:
                  </span>
                  <p className="text-xs text-neutral-200 font-sans leading-relaxed">
                    {member.buildingResponsibility}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/15 text-[11px] font-mono text-neutral-300 line-clamp-3">
                {member.bio}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
