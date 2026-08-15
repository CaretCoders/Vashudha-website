import React, { useState } from "react";
import { X, Send, CheckCircle, Mail, Sprout, Building, ArrowUpRight } from "lucide-react";
import { JournalPost, TeamMember, ModalType } from "../types";
import { VASHUDHA_LOGO } from "../data/vashudhaData";

interface ModalsProps {
  modalType: ModalType;
  selectedPost: JournalPost | null;
  selectedMember: TeamMember | null;
  onClose: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  modalType,
  selectedPost,
  selectedMember,
  onClose,
}) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!modalType) return null;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1C1A]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#2B2724]/20 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#2B2724] hover:bg-[#2B2724]/10 rounded-full transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. Research Newsletter Modal */}
        {modalType === "research_newsletter" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/10 border border-emerald-800/20 shadow-xs flex items-center justify-center">
                <img src={VASHUDHA_LOGO} alt="Vashudha Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C87D55]">
                <Mail className="w-4 h-4" />
                <span>VASHUDHA OPEN RESEARCH BULLETIN</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1C1A]">
                Follow Our Field Research & Benchmarks
              </h3>
              <p className="text-sm text-[#3B342F] mt-2 leading-relaxed font-bold">
                Receive quarterly open science dispatches, sensor calibration papers, crop reference condition updates, and field trial yield parity reports directly in your inbox.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#1B332A] text-[#FAF8F5] text-center space-y-3">
                <CheckCircle className="w-8 h-8 text-[#E6CBB3] mx-auto" />
                <h4 className="text-xl font-bold">You are subscribed to Vashudha Research.</h4>
                <p className="text-xs text-[#D9D2C5] font-bold">
                  We sent a confirmation email to <strong>{email}</strong>. We publish quarterly without spam.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs px-4 py-2 bg-[#FAF8F5] text-[#1B332A] rounded-full font-normal cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs text-[#2B2724] mb-1 font-normal">Work / Institutional Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="researcher@university.edu or farmer@agri.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EB] border border-[#2B2724]/15 text-sm text-[#2B2724] focus:outline-none focus:border-[#1B332A] font-normal"
                  />
                </div>

                <div className="p-3 rounded-lg bg-[#F5F2EB] border border-[#2B2724]/10 text-[11px] text-[#6E655F] font-normal">
                  ✓ Zero commercial spam • Pure agricultural science & open datasets
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1B332A] text-[#FAF8F5] text-xs font-normal tracking-wider uppercase hover:bg-[#2D4A3E] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Subscribe to Research Dispatches</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        )}

        {/* 2. Partner Modal */}
        {modalType === "partner_form" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/10 border border-emerald-800/20 shadow-xs flex items-center justify-center">
                <img src={VASHUDHA_LOGO} alt="Vashudha Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C87D55]">
                <Building className="w-4 h-4" />
                <span>PARTNER WITH VASHUDHA</span>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1C1A]">
                Institutional & Field Collaboration
              </h3>
              <p className="text-sm text-[#3B342F] font-sans mt-2 leading-relaxed">
                We partner with agricultural universities, research stations, grower co-operatives, and hardware partners to validate soil sensing and precision chemical reduction.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#1B332A] text-[#FAF8F5] text-center space-y-3">
                <CheckCircle className="w-8 h-8 text-[#E6CBB3] mx-auto" />
                <h4 className="font-serif text-xl font-medium">Partnership Inquiry Logged</h4>
                <p className="text-xs font-mono text-[#D9D2C5]">
                  Our field operations lead will follow up within 2 business days.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs font-mono px-4 py-2 bg-[#FAF8F5] text-[#1B332A] rounded-full font-semibold cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-mono text-[#2B2724] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@institution.org"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EB] border border-[#2B2724]/15 text-sm text-[#2B2724] focus:outline-none focus:border-[#1B332A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#2B2724] mb-1">Collaboration Proposal</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your research farm location, crop focus, or technology integration goals..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F2EB] border border-[#2B2724]/15 text-sm text-[#2B2724] focus:outline-none focus:border-[#1B332A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1B332A] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase hover:bg-[#2D4A3E] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Submit Partnership Proposal</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        )}

        {/* 3. Journal Detail Modal */}
        {modalType === "journal_post" && selectedPost && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#2B2724]/10 pb-4">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#E6CBB3]/50 text-[#5C4233] font-semibold uppercase">
                {selectedPost.category}
              </span>
              <span className="text-xs font-mono text-[#8C827A]">{selectedPost.date}</span>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1C1A] leading-snug">
                {selectedPost.title}
              </h3>
              <p className="text-xs font-mono text-[#C87D55] mt-1">Author: {selectedPost.author}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#2B2724]/10 text-sm text-[#3B342F] leading-relaxed font-sans font-normal space-y-3">
              <p className="font-medium text-[#1E1C1A]">{selectedPost.summary}</p>
              <p>{selectedPost.content}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {selectedPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-[#1B332A]/5 text-[#1B332A] text-[10px] font-mono border border-[#1B332A]/15"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[#2B2724]/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#1B332A] text-[#FAF8F5] text-xs font-mono font-semibold cursor-pointer"
              >
                Close Journal Entry
              </button>
            </div>
          </div>
        )}

        {/* 4. Team Member Detail Modal */}
        {modalType === "team_member" && selectedMember && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#2B2724]/10 pb-4">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#C87D55]/20 text-[#5C4233] font-semibold uppercase">
                {selectedMember.pillar} Pillar
              </span>
              <span className="text-xs font-mono text-[#8C827A]">Vashudha R&D Team</span>
            </div>

            <div>
              <h3 className="font-serif text-3xl font-medium text-[#1E1C1A]">{selectedMember.name}</h3>
              <p className="text-xs font-mono text-[#C87D55] mt-1">{selectedMember.role}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#2B2724]/10 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6E655F] font-semibold">
                Building & Research Responsibility:
              </div>
              <p className="text-sm text-[#2B2724] font-sans leading-relaxed">
                {selectedMember.buildingResponsibility}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6E655F] font-semibold">
                Background & Bio:
              </div>
              <p className="text-sm text-[#3B342F] font-sans leading-relaxed">{selectedMember.bio}</p>
            </div>

            <div className="pt-4 border-t border-[#2B2724]/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#1B332A] text-[#FAF8F5] text-xs font-mono font-semibold cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
