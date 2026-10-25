import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface ClosingProclamationProps {
  onOpenShare: () => void;
}

export const ClosingProclamation: React.FC<ClosingProclamationProps> = ({ onOpenShare }) => {
  return (
    <section
      id="proclamation"
      className="relative py-14 sm:py-20 md:py-28 text-white overflow-hidden bg-gradient-to-b from-[#321044] via-[#240833] to-[#15021e]"
      aria-label="Solemn Proclamation of Faith and Victory"
    >
      {/* Radiant golden backdrop aura */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, #D6AA54 0%, transparent 65%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Decorative gold crest */}
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#54158C] border-2 border-[#D6AA54] mb-6 sm:mb-8 shadow-xl">
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#D6AA54] fill-[#D6AA54]/40" aria-hidden="true" />
        </div>

        {/* Eyebrow */}
        <p className="text-[11px] xs:text-xs sm:text-sm font-extrabold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#D6AA54] mb-3 sm:mb-4">
          Victory &middot; Restoration &middot; Testimony
        </p>

        {/* The Grand Proclamation with Strong Serif Display */}
        <h2 className="font-serif-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 uppercase leading-tight break-words">
          <span className="block text-[#FFF8EF]">NOTHING MISSING,</span>
          <span className="block gold-shimmer font-black mt-1 drop-shadow-sm">NOTHING BROKEN!</span>
        </h2>

        {/* Ornamental Divider on Dark Background */}
        <OrnamentalDivider variant="gold" symbol="star" className="my-4 sm:my-6" />

        {/* Hallelujah Script Highlight with Strong Subtitle */}
        <div className="my-6 sm:my-8">
          <p className="font-script text-4xl xs:text-5xl sm:text-7xl lg:text-8xl text-[#D6AA54] mb-2 sm:mb-3 leading-none drop-shadow-xs font-normal">
            Hallelujah!
          </p>
          <p className="font-serif-display text-base xs:text-lg sm:text-2xl md:text-3xl text-[#FFF8EF] tracking-wider uppercase font-extrabold break-words">
            TO GOD ALONE BE ALL THE GLORY!
          </p>
        </div>

        {/* Final Benediction */}
        <div className="max-w-2xl mx-auto mt-6 sm:mt-9 pt-6 sm:pt-8 border-t-2 border-[#D6AA54]/30">
          <p className="text-base sm:text-lg md:text-xl text-[#E9DDF4] font-medium mb-2">
            With a heart full of gratitude and love,
          </p>
          <p className="font-serif-display text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-[#FFF8EF] font-extrabold tracking-wide break-words">
            THANK YOU ALL, AND GOD BLESS YOU ABUNDANTLY.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#D6AA54] font-extrabold tracking-widest uppercase mt-2.5 sm:mt-3">
            — Omo Kolleade
          </p>
        </div>

        {/* Action button inside climax */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 min-h-[48px] bg-[#D6AA54] hover:bg-[#e4be6b] text-[#240833] font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
          >
            <Sparkles className="w-5 h-5 text-[#240833] shrink-0" />
            <span>Share This Testimony</span>
          </button>
        </div>

      </div>
    </section>
  );
};
