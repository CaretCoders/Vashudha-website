import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { VASHUDHA_LOGO } from "../data/vashudhaData";

interface NavbarProps {
  onOpenResearchModal?: () => void;
  onOpenPartnerModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResearchModal, onOpenPartnerModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/40 dark:bg-black/40 backdrop-blur-2xl border-b border-white/30 dark:border-white/10 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
          : "bg-white/20 dark:bg-black/20 backdrop-blur-xl border-b border-white/20 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-12 sm:pl-16 lg:pl-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm border border-emerald-600/30 backdrop-blur-md">
              <img 
                src={VASHUDHA_LOGO} 
                alt="Vashudha Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                  Vashudha
                </span>
              </div>
              <span className="block text-[10px] tracking-wide text-neutral-600 dark:text-neutral-300 font-normal -mt-1">
                A project by Caretcoders LLP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-white/30 dark:bg-white/10 border border-white/30 dark:border-white/15 backdrop-blur-2xl shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-normal tracking-wider text-neutral-800 dark:text-neutral-200 hover:text-emerald-700 dark:hover:text-emerald-300 px-3 py-1.5 rounded-full hover:bg-white/40 dark:hover:bg-white/15 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#contact"
              className="text-xs font-normal tracking-wide px-4 py-2 rounded-full border border-neutral-900/20 dark:border-white/20 text-neutral-900 dark:text-white bg-white/20 dark:bg-white/10 backdrop-blur-xl hover:bg-white/40 transition-all cursor-pointer shadow-xs"
            >
              Talk to Us
            </a>
            <a
              href="#contact"
              className="text-xs font-normal tracking-wide px-4 py-2 rounded-full bg-emerald-800/90 text-white hover:bg-emerald-700 backdrop-blur-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer border border-emerald-500/30"
            >
              <span>Join the Journey</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href="#contact"
              className="sm:hidden text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#1B332A] text-[#FAF8F5]"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2B2724] dark:text-white hover:bg-[#2B2724]/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] dark:bg-[#150F0A] border-b border-[#2B2724]/10 px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#2B2724] dark:text-neutral-200 hover:text-emerald-700 py-1.5 border-b border-[#2B2724]/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-semibold py-2.5 rounded-full border border-[#2B2724]/20 text-[#2B2724] dark:text-white"
            >
              Talk to Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-semibold py-2.5 rounded-full bg-emerald-800 text-white"
            >
              Join the Journey
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
