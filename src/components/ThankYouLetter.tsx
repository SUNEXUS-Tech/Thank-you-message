import React from 'react';
import { Heart, Quote } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const ThankYouLetter: React.FC = () => {
  return (
    <section
      id="message"
      className="py-10 sm:py-16 md:py-24 bg-[#FFF8EF] dark:bg-[#120819] relative stationery-texture transition-colors duration-300"
      aria-label="Gratitude Letter from Omo Kolleade"
    >
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Stationery Card Container with Regal Gold Bezel */}
        <div className="bg-white dark:bg-[#1A0A24] rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-[3px] border-[#D6AA54]/60 dark:border-[#D6AA54]/40 p-4 xs:p-6 sm:p-10 md:p-14 relative overflow-hidden transition-colors duration-300">
          
          {/* Subtle Decorative Golden Inset Frame */}
          <div
            className="absolute inset-1.5 sm:inset-3 rounded-xl sm:rounded-2xl border sm:border-2 border-[#D6AA54]/25 dark:border-[#D6AA54]/20 pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Attribution Bar */}
          <div className="flex items-center justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b-2 border-[#D6AA54]/30 dark:border-[#D6AA54]/20">
            <div>
              <p className="font-serif-display text-base sm:text-xl font-bold tracking-wide text-[#54158C] dark:text-[#E5BE6C]">
                From Omo Kolleade
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#1E1424] dark:text-[#E9DDF4] mt-0.5">
                Read with prayer, thanksgiving, and faith
              </p>
            </div>
            
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B5852A] dark:text-[#E5BE6C]">
              <span>Official Testimony</span>
              <span aria-hidden="true">·</span>
              <span>Personal Letter</span>
            </div>
          </div>

          {/* Bold, Sharp, Prominent Letter Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[11px] xs:text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B5852A] dark:text-[#E5BE6C] mb-2">
              TO EVERYONE WHO STOOD BY ME
            </p>
            <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2B0A3D] dark:text-white uppercase leading-[1.15] break-words">
              A Heartfelt Thank You To Everyone
            </h2>
            <OrnamentalDivider variant="gold" symbol="heart" className="my-3 sm:my-5" />
          </div>

          {/* Verbatim Letter Body with Generous, Legible Body Font Scale */}
          <article className="space-y-6 sm:space-y-8 md:space-y-9 text-base xs:text-lg sm:text-xl md:text-[22px] leading-relaxed sm:leading-[1.85] text-[#1E1424] dark:text-[#EDE3F2] font-medium break-words">
            
            {/* Opening Adage Callout with Strong Rich Framing */}
            <div className="bg-[#FFF8EF] dark:bg-[#251034] border-2 border-[#D6AA54]/70 dark:border-[#D6AA54]/50 p-4 xs:p-6 sm:p-9 rounded-2xl my-6 sm:my-8 shadow-sm">
              <p className="font-serif-display italic text-[#2B0A3D] dark:text-[#FFF8EF] text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center font-bold break-words">
                There is an adage that says,
                <br />
                <span
                  className="not-italic text-[#270e2d] bg-[#e9bfe4] font-extrabold mt-2 sm:mt-2.5 inline-block sm:block tracking-normal px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-xs break-words max-w-full text-lg xs:text-xl sm:text-2xl md:text-3xl"
                  style={{ color: '#270e2d', backgroundColor: '#e9bfe4' }}
                >
                  &ldquo;Pretend as if you are dead and see who will cry for you.&rdquo;
                </span>
              </p>
            </div>

            {/* Paragraph 1 */}
            <p
              className="font-extrabold text-[#dac0f4] tracking-wide text-xl xs:text-2xl sm:text-3xl md:text-4xl font-serif-display leading-tight break-words"
              style={{ color: '#dac0f4' }}
            >
              Words cannot adequately express how deeply touched and grateful I am!
            </p>

            {/* Paragraph 2 */}
            <p className="text-[#1E1424] dark:text-[#EDE3F2]">
              From the bottom of my heart, I sincerely appreciate everyone who stood by me during my difficult period—physically, financially, morally, spiritually, and through your prayers, calls, messages, and every other form of support.
            </p>

            {/* Paragraph 3 */}
            <p className="text-[#1E1424] dark:text-[#EDE3F2]">
              You did not allow me to face this difficult journey alone. Your love, kindness, and generosity gave me strength and hope when I needed them most. I am eternally grateful to each and every one of you.
            </p>

            {/* Pull Quote 1: The Narrow Escape */}
            <div className="my-8 sm:my-10 py-6 sm:py-8 px-4 xs:px-6 sm:px-12 border-y-[3px] border-[#D6AA54] bg-[#FAF3E8] dark:bg-[#1E0B2C] rounded-xl text-center relative shadow-xs">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#D6AA54] mx-auto mb-2 sm:mb-3" aria-hidden="true" />
              <blockquote className="font-serif-display text-xl xs:text-2xl sm:text-3xl lg:text-4xl italic text-[#2B0A3D] dark:text-[#FFF8EF] font-bold leading-relaxed break-words">
                &ldquo;Although this unexpected accident in Nigeria has left me with a lifelong injury, I remain thankful to God Almighty for His infinite mercy and grace upon my life. It was truly a narrow escape, and I cannot thank God enough for sparing my precious life.&rdquo;
              </blockquote>
            </div>

            {/* Paragraph 4 */}
            <p className="text-[#1E1424] dark:text-[#EDE3F2]">
              My journey to Nigeria was meant to celebrate the union of my two lovely children, whom the Lord brought together in love. Little did I know that I would face such an unexpected and life-changing ordeal.
            </p>

            {/* Paragraph 5 */}
            <p className="text-[#1E1424] dark:text-[#EDE3F2]">
              I was rushed back to the United States for emergency surgery, and the recovery journey was far from easy. For over six months, I was confined to a recliner chair, enduring a difficult period that tested my strength, patience, and faith.
            </p>

            {/* Pull Quote 2: Community & Family Love */}
            <div className="my-8 sm:my-10 py-6 sm:py-8 px-4 xs:px-6 sm:px-12 border-y-[3px] border-[#D6AA54] bg-[#FAF3E8] dark:bg-[#1E0B2C] rounded-xl text-center relative shadow-xs">
              <blockquote className="font-serif-display text-xl xs:text-2xl sm:text-3xl lg:text-4xl italic text-[#2B0A3D] dark:text-[#FFF8EF] font-bold leading-relaxed break-words">
                &ldquo;If not for God, my family, and my wonderful friends, I might not have survived this ordeal. Your unwavering love and support made a tremendous difference in my life, and I will never take your kindness for granted.&rdquo;
              </blockquote>
            </div>

            {/* Paragraph 6 */}
            <p className="text-[#1E1424] dark:text-[#EDE3F2] font-semibold">
              Above all, I give all the glory, honour, and adoration to God Almighty, whose grace has sustained me through it all.
            </p>

            {/* Paragraph 7 */}
            <p className="text-[#1E1424] dark:text-[#EDE3F2]">
              On behalf of my family and myself, I sincerely thank you all for standing with me, showing me genuine love, and supporting me through one of the most challenging periods of my life.
            </p>

            {/* Blessing Box with Sacred Benediction Treatment */}
            <div className="my-8 sm:my-12 p-5 xs:p-7 sm:p-12 bg-gradient-to-br from-[#E9DDF4] via-[#F6EEFA] to-[#FFF8EF] dark:from-[#2A103D] dark:via-[#35154D] dark:to-[#1E0B2C] rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] border-[#54158C]/40 dark:border-[#D6AA54]/60 shadow-lg transition-colors duration-300">
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-3 sm:mb-4 text-[#54158C] dark:text-[#E5BE6C]">
                <Heart className="w-5 h-5 sm:w-7 sm:h-7 fill-[#54158C] dark:fill-[#E5BE6C]" aria-hidden="true" />
                <span className="font-serif-display text-lg sm:text-2xl font-extrabold tracking-wide uppercase">
                  A Blessing Upon You
                </span>
              </div>
              <p className="font-serif-display text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#2B0A3D] dark:text-white text-center italic font-bold leading-relaxed break-words">
                &ldquo;May the Almighty God continue to protect, bless, strengthen, and uphold every one of you and your families. May you never lack help in your own times of need, and may the love you have shown me return to you in countless blessings.&rdquo;
              </p>
            </div>

            {/* Refined Signature Block - Omo Kolleade */}
            <div className="pt-8 sm:pt-10 mt-8 sm:mt-12 border-t-2 border-[#D6AA54]/40 dark:border-[#D6AA54]/30 text-center">
              <p className="font-script text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#54158C] dark:text-[#E5BE6C] mb-1.5 sm:mb-2 font-normal">
                With a heart full of gratitude and love,
              </p>
              <p className="font-serif-display text-2xl xs:text-3xl sm:text-5xl font-extrabold text-[#2B0A3D] dark:text-white tracking-wide uppercase break-words">
                OMO KOLLEADE
              </p>
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#B5852A] dark:text-[#E5BE6C] font-extrabold mt-2 sm:mt-2.5">
                Eternally Thankful &amp; Blessed
              </p>
            </div>

          </article>
        </div>

      </div>
    </section>
  );
};
