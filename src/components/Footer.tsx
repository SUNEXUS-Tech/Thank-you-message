import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface FooterProps {
  onOpenShare: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShare }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C0428] dark:bg-[#0D0312] text-white pt-16 pb-12 border-t-2 border-[#D6AA54]/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Dedication */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="font-script text-4xl sm:text-5xl text-[#D6AA54] dark:text-[#E5BE6C] mb-2 font-normal">
            Forever Grateful
          </p>
          <p className="font-serif-display text-2xl sm:text-4xl font-extrabold text-[#FFF8EF]">
            Omo Kolleade &amp; The Entire Family
          </p>
          <p className="text-sm sm:text-base text-[#E9DDF4] font-medium mt-3 leading-relaxed">
            Dedicated with everlasting appreciation to every prayer warrior, caregiver, friend, and well-wisher across Nigeria, the United States, and the diaspora.
          </p>

          <OrnamentalDivider variant="gold" symbol="floral" className="my-6" />

          {/* Scripture of Thanksgiving */}
          <blockquote className="font-serif-display italic text-[#FFF8EF] font-bold text-base sm:text-lg max-w-lg mx-auto">
            &ldquo;Give thanks to the Lord, for He is good; His love endures forever.&rdquo;
            <span className="block not-italic text-xs sm:text-sm text-[#D6AA54] dark:text-[#E5BE6C] mt-1.5 font-extrabold uppercase tracking-widest">
              Psalm 107:1
            </span>
          </blockquote>
        </div>

        {/* Links Ribbon without 'The Journey' */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm font-bold text-[#E9DDF4]">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
            <a href="#top" className="hover:text-[#D6AA54] dark:hover:text-[#E5BE6C] transition-colors">
              Home
            </a>
            <a href="#message" className="hover:text-[#D6AA54] dark:hover:text-[#E5BE6C] transition-colors">
              The Letter
            </a>
            <a href="#proclamation" className="hover:text-[#D6AA54] dark:hover:text-[#E5BE6C] transition-colors">
              Proclamation
            </a>
            <a href="#blessings" className="hover:text-[#D6AA54] dark:hover:text-[#E5BE6C] transition-colors">
              Send Wishes
            </a>
            <button
              onClick={onOpenShare}
              className="hover:text-[#D6AA54] dark:hover:text-[#E5BE6C] transition-colors text-left"
            >
              Share Card
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 shadow-xs active:scale-95"
            aria-label="Scroll back to top of the page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#D6AA54] dark:text-[#E5BE6C]" />
          </button>
        </div>

        {/* Quiet copyright */}
        <div className="mt-8 pt-6 text-center text-xs text-[#E9DDF4]/80 flex items-center justify-center gap-2 font-medium">
          <span>Made with love and gratitude</span>
          <Heart className="w-3.5 h-3.5 text-[#D6AA54] dark:text-[#E5BE6C] fill-[#D6AA54] dark:fill-[#E5BE6C]" aria-hidden="true" />
          <span>&middot; Nothing Missing, Nothing Broken &middot; All Glory to God</span>
        </div>

      </div>
    </footer>
  );
};
