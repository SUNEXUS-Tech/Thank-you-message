import React, { useState } from 'react';
import { Check, Copy, MessageCircle } from 'lucide-react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const BlessingInteraction: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const sampleMessages = [
    "Amen, Mummy Kolleade! We thank God for your healing, narrow escape, and miraculous recovery! God bless you abundantly!",
    "Amen! Nothing missing, nothing broken in your life, Mummy Kolleade! We love and celebrate you so much!",
    "Amen! May God's grace continue to keep you in radiant strength, divine health, and overflowing joy!",
  ];

  const handleCopyMessage = (msg: string, index: number) => {
    navigator.clipboard.writeText(msg);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2500);
  };

  const handleSendWhatsAppToMummy = (customText?: string) => {
    const text =
      customText ||
      "Amen, Mummy Kolleade! We read your heartfelt gratitude message and thank God Almighty for your narrow escape and miraculous healing! May God keep blessing you and the family abundantly. Nothing missing, nothing broken!";
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="blessings"
      className="py-16 md:py-24 bg-[#FBF5EC] dark:bg-[#120718] border-t-2 border-[#D6AA54]/30 dark:border-[#D6AA54]/20 relative transition-colors duration-300"
      aria-label="Send Prayers and Blessings"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Strong Typography */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#54158C] dark:text-[#E5BE6C] mb-2">
            Fellowship &amp; Love
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B0A3D] dark:text-white">
            Send Your Prayers &amp; Warm Wishes
          </h2>
          <OrnamentalDivider variant="gold" symbol="heart" className="my-3" />
          <p className="text-lg sm:text-xl text-[#1E1424] dark:text-[#E9DDF4] font-medium leading-relaxed">
            Return the love Omo Kolleade has shown by sharing a personal message of thanksgiving, prayer, and celebration.
          </p>
        </div>

        {/* Send Love or Reply to Omo Kolleade */}
        <div className="bg-[#FFF8EF] dark:bg-[#1A0A24] rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] border-[#D6AA54]/50 dark:border-[#D6AA54]/40 p-6 sm:p-10 shadow-sm transition-colors duration-300">
          <div className="flex items-center gap-3 mb-3">
            <MessageCircle className="w-7 h-7 text-[#54158C] dark:text-[#E5BE6C]" />
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2B0A3D] dark:text-white">
              Send a Warm Reply to Omo Kolleade
            </h3>
          </div>
          <p className="text-base sm:text-lg text-[#1E1424] dark:text-[#E9DDF4] font-medium mb-8 leading-relaxed">
            Want to send a prayer or loving reply back to Omo Kolleade or share in family groups?
            Choose a message below to copy or open directly on WhatsApp:
          </p>

          <div className="space-y-4">
            {sampleMessages.map((msg, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#251034] p-5 sm:p-6 rounded-xl border-2 border-[#D6AA54]/30 dark:border-[#D6AA54]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D6AA54] dark:hover:border-[#E5BE6C] transition-colors shadow-xs"
              >
                <p className="text-base sm:text-lg text-[#1E1424] dark:text-[#EDE3F2] font-semibold italic leading-relaxed">
                  &ldquo;{msg}&rdquo;
                </p>
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                  <button
                    onClick={() => handleCopyMessage(msg, index)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg bg-[#FBF5EC] dark:bg-[#321544] hover:bg-[#E9DDF4] dark:hover:bg-[#431d5b] text-[#54158C] dark:text-[#E5BE6C] border border-[#D6AA54]/40 transition-colors"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleSendWhatsAppToMummy(msg)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white border border-[#25D366] transition-colors shadow-xs active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
