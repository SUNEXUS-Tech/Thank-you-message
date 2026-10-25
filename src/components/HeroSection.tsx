import React from 'react';
import { ArrowDown, Heart, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface HeroSectionProps {
  onOpenShare: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenShare,
  isAudioPlaying,
  onToggleAudio,
}) => {
  return (
    <section
      id="top"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden stationery-texture transition-colors duration-300"
      aria-label="Hero Introduction"
    >
      {/* Background radiant ambient light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[880px] h-[480px] bg-gradient-to-b from-[#E9DDF4]/40 via-[#D6AA54]/15 dark:from-[#54158C]/25 dark:via-[#D6AA54]/10 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Standard Professional Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Column 1: Editorial Text Presentation (Beside the image on desktop) */}
          <div className="lg:col-span-7 xl:col-span-7 order-2 lg:order-1 text-center lg:text-left flex flex-col justify-center">
            
            {/* Elegant Script Flourish */}
            <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#B5852A] dark:text-[#E5BE6C] mb-2 font-normal">
              From the bottom of my heart,
            </p>

            {/* Main Editorial Headline with Strong Bold Weight */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#2B0A3D] dark:text-white leading-[1.08] mb-5">
              A Heartfelt <br className="hidden sm:inline" />
              <span className="text-[#54158C] dark:text-[#D6AA54] italic font-serif-display">
                Thank You
              </span>
            </h1>

            {/* Ornamental Divider */}
            <div className="flex justify-center lg:justify-start">
              <OrnamentalDivider className="my-3 lg:mx-0" variant="gold" symbol="heart" />
            </div>

            {/* Core Emotional Statement */}
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif-display text-[#2B0A3D] dark:text-[#F3ECF8] font-bold italic leading-relaxed mb-6">
              &ldquo;Your love carried me through. Your prayers strengthened me. God&apos;s grace sustained me.&rdquo;
            </blockquote>

            {/* Supporting Narrative with Increased Font Size */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#1E1424] dark:text-[#E9DDF4] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              A personal testimony of thanksgiving, healing, and the boundless love
              of family and friends who stood as pillars of strength through a life-changing ordeal.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#message"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#54158C] hover:bg-[#380E51] dark:bg-[#54158C] dark:hover:bg-[#6e1cb2] text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all group border border-[#D6AA54]/60"
              >
                <span>Read Omo Kolleade&apos;s Letter</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform text-[#D6AA54]" />
              </a>

              <button
                onClick={onOpenShare}
                className="inline-flex items-center gap-2 px-6 py-4 bg-white dark:bg-[#251034] hover:bg-[#FFF8EF] dark:hover:bg-[#321544] text-[#321044] dark:text-white font-bold text-base rounded-xl border-2 border-[#D6AA54] shadow-sm hover:border-[#54158C] transition-all"
              >
                <Sparkles className="w-5 h-5 text-[#D6AA54]" />
                <span>Share Gratitude Card</span>
              </button>

              <button
                onClick={onToggleAudio}
                className="inline-flex items-center gap-2 px-5 py-4 bg-[#E9DDF4] dark:bg-[#2A113C] hover:bg-[#dfcff0] dark:hover:bg-[#36164d] text-[#54158C] dark:text-[#E5BE6C] text-sm font-bold rounded-xl transition-colors border border-[#54158C]/30 dark:border-[#D6AA54]/40 shadow-xs"
                title={isAudioPlaying ? 'Mute serene sound' : 'Play peaceful chime of gratitude'}
                aria-label={isAudioPlaying ? 'Mute audio' : 'Play reflection chimes'}
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2 className="w-5 h-5 text-[#54158C] dark:text-[#E5BE6C] animate-pulse" />
                    <span>Reflection Chimes Active</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-5 h-5 text-[#54158C] dark:text-[#E5BE6C]" />
                    <span>Serene Audio</span>
                  </>
                )}
              </button>
            </div>

            {/* Clean Unboxed Metadata */}
            <div className="mt-8 pt-6 border-t-2 border-[#D6AA54]/30 dark:border-[#D6AA54]/20 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 text-sm sm:text-base text-[#1E1424] dark:text-[#E9DDF4] font-bold">
              <span className="text-[#54158C] dark:text-[#E5BE6C]">Personal Letter</span>
              <span aria-hidden="true" className="text-[#D6AA54] font-bold">·</span>
              <span>Dedicated to All Well-Wishers</span>
              <span aria-hidden="true" className="text-[#D6AA54] font-bold">·</span>
              <span className="text-[#54158C] dark:text-[#E5BE6C] font-bold">To God Alone Be Glory</span>
            </div>
          </div>

          {/* Column 2: Full-Container Portrait Image (Fills container without unwanted whitespace) */}
          <div className="lg:col-span-5 xl:col-span-5 order-1 lg:order-2 w-full flex justify-center">
            <div className="relative w-full max-w-[480px] lg:max-w-none">
              
              {/* Outer Decorative Warm Gold Aura */}
              <div
                className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-b from-[#D6AA54]/40 via-[#54158C]/30 dark:from-[#D6AA54]/25 dark:via-[#54158C]/20 to-transparent -z-10 shadow-2xl blur-xs"
                aria-hidden="true"
              />

              {/* Regal Portrait Card: Edge-to-Edge Fill without empty borders */}
              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#1C0428] border-2 sm:border-[3px] border-[#D6AA54]">
                
                {/* Gold Corner Filigree Accents */}
                <div
                  className="absolute top-3.5 left-3.5 z-20 w-7 h-7 border-t-2 border-l-2 border-[#D6AA54] pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute top-3.5 right-3.5 z-20 w-7 h-7 border-t-2 border-r-2 border-[#D6AA54] pointer-events-none"
                  aria-hidden="true"
                />

                {/* Hero Portrait: Occupies 100% width and full height with object-cover */}
                <div className="relative w-full overflow-hidden bg-[#1C0428]">
                  <img
                    src="/big-mummy-portrait.webp"
                    alt="Omo Kolleade in royal purple traditional attire with gold accents and purple gele smiling with joyful gratitude"
                    className="w-full max-w-[600px] h-[480px] sm:h-[540px] lg:h-[580px] xl:h-[620px] object-cover object-[center_12%] transition-transform duration-700 hover:scale-[1.02] block mx-auto"
                    style={{ width: '600px' }}
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gentle Bottom Gradient Scrim for Visual Continuity */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C0428] via-[#1C0428]/60 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Dignified Royal Nameplate */}
                <div className="px-6 py-4 text-center bg-gradient-to-r from-[#2A093D] via-[#380E51] to-[#2A093D] border-t-2 border-[#D6AA54]">
                  <p className="font-serif-display text-2xl sm:text-3xl font-bold tracking-wide text-[#FFF8EF]">
                    Omo Kolleade
                  </p>
                  <p className="text-xs sm:text-sm text-[#D6AA54] font-bold tracking-widest uppercase mt-1">
                    Alive &amp; Sustained By Grace
                  </p>
                </div>
              </div>

              {/* Floating Glory Tag */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-[#FFF8EF] dark:bg-[#251034] border-2 border-[#D6AA54] rounded-full px-5 py-1.5 shadow-lg flex items-center gap-2 whitespace-nowrap text-xs sm:text-sm font-bold text-[#54158C] dark:text-[#E5BE6C]">
                <Heart className="w-4 h-4 fill-[#54158C] dark:fill-[#E5BE6C] text-[#54158C] dark:text-[#E5BE6C]" aria-hidden="true" />
                <span>To God Alone Be All Glory</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
