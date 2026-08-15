import React, { useState } from "react";
import { Send, CheckCircle, Sprout, Handshake, Microscope, Code, Mail, Phone, MapPin, Building2 } from "lucide-react";

interface JoinSectionProps {
  onOpenPartnerModal: () => void;
}

export const JoinSection: React.FC<JoinSectionProps> = ({ onOpenPartnerModal }) => {
  const [activeFormTab, setActiveFormTab] = useState<
    "partner" | "researcher" | "farmer" | "careers"
  >("partner");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    region: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="join-journey" className="py-24 lg:py-32 bg-[#150F0A] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest text-amber-300 bg-white/10 border border-white/20 backdrop-blur-md uppercase">
              <span>18 — JOIN THE JOURNEY (R-HORIZON BEDROCK CONTACT 2.2m)</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-normal">
              There is a lot left to learn.
            </h2>

            <p className="text-base sm:text-lg text-neutral-200 font-sans leading-relaxed">
              We're looking for farmers, agronomists, researchers, engineers, institutions and partners willing to help us test what is possible.
            </p>

            {/* Caretcoders LLP Direct Contact Box */}
            <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 space-y-3 font-mono text-xs shadow-xl">
              <div className="text-xs uppercase tracking-widest text-amber-300 font-bold flex items-center gap-2 border-b border-white/15 pb-2">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>Contact Caretcoders LLP</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-200">
                <a
                  href="mailto:contact@caretcoders.com"
                  className="flex items-center gap-2 hover:text-emerald-300 transition-colors p-2 rounded-xl bg-white/5 border border-white/10"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">contact@caretcoders.com</span>
                </a>

                <a
                  href="tel:+919179795954"
                  className="flex items-center gap-2 hover:text-emerald-300 transition-colors p-2 rounded-xl bg-white/5 border border-white/10"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+91 9179795954</span>
                </a>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Address: Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Quick Intent Tabs */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-300 block font-semibold">
                Select Your Collaboration Pathway:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setActiveFormTab("farmer");
                    setFormSubmitted(false);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer backdrop-blur-md ${
                    activeFormTab === "farmer"
                      ? "bg-emerald-800/90 text-white border-emerald-400 shadow-[0_8px_24px_rgba(16,185,129,0.3)]"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                  }`}
                >
                  <Sprout className="w-4 h-4 mb-2 text-amber-300" />
                  <div className="font-serif text-base font-medium">Become a Pilot Partner</div>
                  <div className="text-[11px] font-mono opacity-80 mt-0.5 text-neutral-200">For growers & farm owners</div>
                </button>

                <button
                  onClick={() => {
                    setActiveFormTab("researcher");
                    setFormSubmitted(false);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer backdrop-blur-md ${
                    activeFormTab === "researcher"
                      ? "bg-emerald-800/90 text-white border-emerald-400 shadow-[0_8px_24px_rgba(16,185,129,0.3)]"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                  }`}
                >
                  <Microscope className="w-4 h-4 mb-2 text-amber-300" />
                  <div className="font-serif text-base font-medium">Collaborate on Research</div>
                  <div className="text-[11px] font-mono opacity-80 mt-0.5 text-neutral-200">For agronomists & labs</div>
                </button>

                <button
                  onClick={() => {
                    setActiveFormTab("partner");
                    setFormSubmitted(false);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer backdrop-blur-md ${
                    activeFormTab === "partner"
                      ? "bg-emerald-800/90 text-white border-emerald-400 shadow-[0_8px_24px_rgba(16,185,129,0.3)]"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                  }`}
                >
                  <Handshake className="w-4 h-4 mb-2 text-amber-300" />
                  <div className="font-serif text-base font-medium">Work With Us</div>
                  <div className="text-[11px] font-mono opacity-80 mt-0.5 text-neutral-200">For institutions & co-ops</div>
                </button>

                <button
                  onClick={() => {
                    setActiveFormTab("careers");
                    setFormSubmitted(false);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer backdrop-blur-md ${
                    activeFormTab === "careers"
                      ? "bg-emerald-800/90 text-white border-emerald-400 shadow-[0_8px_24px_rgba(16,185,129,0.3)]"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/15"
                  }`}
                >
                  <Code className="w-4 h-4 mb-2 text-amber-300" />
                  <div className="font-serif text-base font-medium">Join the Team</div>
                  <div className="text-[11px] font-mono opacity-80 mt-0.5 text-neutral-200">For hardware/ML engineers</div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-white">
                  Thank you for reaching out.
                </h3>
                <p className="text-sm text-neutral-200 max-w-md mx-auto">
                  We have received your collaboration inquiry for <strong>{activeFormTab}</strong>. The Caretcoders LLP R&D team will review your details and connect shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono text-emerald-300 hover:text-emerald-200 underline cursor-pointer pt-2"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-xs font-mono uppercase text-amber-300 font-semibold">
                    Inquiry Mode: {activeFormTab.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-300">Caretcoders LLP Desk</span>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-200 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Ramesh Kumar / Sarah Jenkins"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/20 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-200 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.org"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/20 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-neutral-200 mb-1">Organization / Farm</label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Farm Name or Institution"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/20 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-200 mb-1">Agricultural Region / Crops Grown</label>
                  <input
                    type="text"
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    placeholder="e.g. Telangana Rice Belt / Punjab Wheat-Paddy"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/20 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-200 mb-1">How can we collaborate?</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your farm size, current soil challenges, or research field trial interests..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/20 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_8px_24px_rgba(16,185,129,0.3)]"
                >
                  <span>Submit Inquiry to Caretcoders LLP</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

