import React from 'react';
import { Moon, Share2, Sun } from 'lucide-react';

interface NavbarProps {
  onOpenShare: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenShare,
  theme,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFF8EF]/95 dark:bg-[#14081E]/95 backdrop-blur-md border-b border-[#D6AA54]/20 dark:border-[#D6AA54]/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          className="font-serif-display text-lg sm:text-2xl font-bold tracking-tight text-[#321044] dark:text-[#FFF8EF] hover:text-[#54158C] dark:hover:text-[#D6AA54] transition-colors whitespace-nowrap shrink-0"
          aria-label="Omo Kolleade's Gratitude Home"
        >
          Omo Kolleade&apos;s Gratitude
        </a>

        {/* Zone 2: Navigation Links (Clean prose links without 'The Journey') */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#1E1424] dark:text-[#E9DDF4]"
          aria-label="Primary navigation"
        >
          <a
            href="#message"
            className="hover:text-[#54158C] dark:hover:text-[#D6AA54] transition-colors underline-offset-8 hover:underline decoration-[#D6AA54] decoration-2 whitespace-nowrap shrink-0"
          >
            The Message
          </a>
          <a
            href="#proclamation"
            className="hover:text-[#54158C] dark:hover:text-[#D6AA54] transition-colors underline-offset-8 hover:underline decoration-[#D6AA54] decoration-2 whitespace-nowrap shrink-0"
          >
            Proclamation
          </a>
          <a
            href="#blessings"
            className="hover:text-[#54158C] dark:hover:text-[#D6AA54] transition-colors underline-offset-8 hover:underline decoration-[#D6AA54] decoration-2 whitespace-nowrap shrink-0"
          >
            Send Wishes
          </a>
        </nav>

        {/* Zone 3: Actions (Theme Toggle & Share Message) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={onToggleTheme}
            type="button"
            className="p-2 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold inline-flex items-center gap-2 text-[#321044] dark:text-[#FFF8EF] bg-white/80 dark:bg-[#251034] hover:bg-white dark:hover:bg-[#321544] border border-[#D6AA54]/40 dark:border-[#D6AA54]/50 shadow-xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54158C]"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <>
                <Moon className="w-4 h-4 text-[#54158C]" aria-hidden="true" />
                <span className="hidden sm:inline">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-[#D6AA54]" aria-hidden="true" />
                <span className="hidden sm:inline">Light</span>
              </>
            )}
          </button>

          {/* Share Message Button */}
          <button
            onClick={onOpenShare}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#54158C] hover:bg-[#321044] dark:bg-[#54158C] dark:hover:bg-[#6c1dae] active:scale-[0.98] transition-all rounded-lg shadow-sm border border-[#D6AA54]/60 hover:border-[#D6AA54] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54158C]"
          >
            <Share2 className="w-3.5 h-3.5 text-[#D6AA54]" aria-hidden="true" />
            <span>Share Message</span>
          </button>
        </div>
      </div>
    </header>
  );
};
