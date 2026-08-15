import React, { useState } from "react";
import { JOURNAL_POSTS } from "../data/vashudhaData";
import { JournalPost } from "../types";
import { BookOpen, Tag, ArrowRight, Filter } from "lucide-react";

interface JournalSectionProps {
  onSelectPost: (post: JournalPost) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onSelectPost }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "What we're researching",
    "What we're testing",
    "What we learned",
    "What changed our thinking",
    "What comes next",
  ];

  const filteredPosts =
    activeCategory === "All"
      ? JOURNAL_POSTS
      : JOURNAL_POSTS.filter((p) => p.category === activeCategory);

  return (
    <section id="journal" className="py-24 lg:py-32 bg-[#F5F2EB] border-b border-[#2B2724]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="text-xs font-mono tracking-widest text-[#6E655F] uppercase flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#C87D55]" />
            17 — RESEARCH JOURNAL
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1C1A] leading-tight font-normal">
            Building in the open.
          </h2>
          <p className="text-base sm:text-lg text-[#4A433D] font-sans">
            Documenting our agricultural experiments, failed assumptions, sensor calibrations, and field breakthroughs in real-time.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          <span className="text-xs font-mono text-[#8C827A] flex items-center gap-1 shrink-0 mr-2">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer shrink-0 ${
                activeCategory === cat
                  ? "bg-[#1B332A] text-[#FAF8F5] font-semibold shadow-xs"
                  : "bg-[#FAF8F5] text-[#2B2724] border border-[#2B2724]/15 hover:bg-[#FAF8F5]/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#2B2724]/10 hover:border-[#1B332A]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono border-b border-[#2B2724]/10 pb-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#E6CBB3]/50 text-[#5C4233] font-semibold">
                    {post.category}
                  </span>
                  <span className="text-[#8C827A]">{post.date}</span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#1E1C1A] group-hover:text-[#1B332A] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-[#3B342F] font-sans leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2B2724]/10 flex items-center justify-between text-xs font-mono text-[#5C554E]">
                <span>By {post.author}</span>
                <span className="text-[#1B332A] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Journal Entry →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
