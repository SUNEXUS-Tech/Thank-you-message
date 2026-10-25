import React, { useState } from 'react';
import { Menu, Moon, Share2, Sun, X } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8EF]/95 dark:bg-[#14081E]/95 backdrop-blur-md border-b border-[#D6AA54]/20 dark:border-[#D6AA54]/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-6">
        
        {/* Mobile Menu Toggle Button (Touch-friendly 44x44px target) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="md:hidden p-2.5 rounded-lg text-[#321044] dark:text-[#FFF8EF] hover:bg-[#E9DDF4]/60 dark:hover:bg-[#2A113C] border border-[#D6AA54]/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54158C]"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-[#54158C] dark:text-[#D6AA54]" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5 text-[#54158C] dark:text-[#D6AA54]" aria-hidden="true" />
          )}
        </button>

        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          onClick={closeMobileMenu}
          className="font-serif-display text-base xs:text-lg sm:text-2xl font-bold tracking-tight text-[#321044] dark:text-[#FFF8EF] hover:text-[#54158C] dark:hover:text-[#D6AA54] transition-colors truncate max-w-[180px] xs:max-w-[240px] sm:max-w-none shrink"
          aria-label="Omo Kolleade's Gratitude Home"
        >
          Omo Kolleade&apos;s Gratitude
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-[#1E1424] dark:text-[#E9DDF4]"
          aria-label="Primary desktop navigation"
        >
          <a
            href="#message"
            className="hover:text-[#54158C] dark:hover:text-[#D6AA54] transition-colors underline-offset-8 hover:underline decoration-[#D6AA54] decoration-2 whitespace-nowrap"
          >
            The Message
          </a>
          <a
            href="#proclamation"
            className="hover:text-[#54158C] dark:hover:text-[#D6AA54] transition-colors underline-offset-8 hover:underline decoration-[#D6AA54] decoration-2 whitespace-nowrap"
          >
            Proclamation
          </a>
          <a
            href="#blessings"
            className="hover:text-[#54158C] dark:hover:text-[#D6AA54] transition-colors underline-offset-8 hover:underline decoration-[#D6AA54] decoration-2 whitespace-nowrap"
          >
            Send Wishes
          </a>
        </nav>

        {/* Zone 3: Actions (Theme Toggle & Share Message) */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={onToggleTheme}
            type="button"
            className="p-2 sm:px-3 sm:py-2 min-h-[40px] min-w-[40px] rounded-lg text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 text-[#321044] dark:text-[#FFF8EF] bg-white/80 dark:bg-[#251034] hover:bg-white dark:hover:bg-[#321544] border border-[#D6AA54]/40 dark:border-[#D6AA54]/50 shadow-xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54158C]"
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
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 min-h-[40px] text-xs sm:text-sm font-semibold text-white bg-[#54158C] hover:bg-[#321044] dark:bg-[#54158C] dark:hover:bg-[#6c1dae] active:scale-[0.98] transition-all rounded-lg shadow-sm border border-[#D6AA54]/60 hover:border-[#D6AA54] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54158C]"
          >
            <Share2 className="w-3.5 h-3.5 text-[#D6AA54]" aria-hidden="true" />
            <span className="hidden xs:inline">Share</span>
            <span className="hidden sm:inline">Message</span>
            <span className="xs:hidden">Share</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8EF] dark:bg-[#1A0A24] border-b-2 border-[#D6AA54]/40 shadow-xl px-4 py-4 animate-fade-in transition-colors">
          <nav className="flex flex-col gap-1 text-base font-semibold" aria-label="Mobile navigation">
            <a
              href="#message"
              onClick={closeMobileMenu}
              className="py-3 px-3.5 rounded-lg text-[#321044] dark:text-[#FFF8EF] hover:bg-[#E9DDF4]/60 dark:hover:bg-[#2A113C] hover:text-[#54158C] dark:hover:text-[#D6AA54] transition-colors flex items-center justify-between"
            >
              <span>The Message</span>
              <span className="text-xs text-[#D6AA54] font-bold uppercase tracking-wider">Letter</span>
            </a>
            <a
              href="#proclamation"
              onClick={closeMobileMenu}
              className="py-3 px-3.5 rounded-lg text-[#321044] dark:text-[#FFF8EF] hover:bg-[#E9DDF4]/60 dark:hover:bg-[#2A113C] hover:text-[#54158C] dark:hover:text-[#D6AA54] transition-colors flex items-center justify-between"
            >
              <span>Proclamation</span>
              <span className="text-xs text-[#D6AA54] font-bold uppercase tracking-wider">Faith</span>
            </a>
            <a
              href="#blessings"
              onClick={closeMobileMenu}
              className="py-3 px-3.5 rounded-lg text-[#321044] dark:text-[#FFF8EF] hover:bg-[#E9DDF4]/60 dark:hover:bg-[#2A113C] hover:text-[#54158C] dark:hover:text-[#D6AA54] transition-colors flex items-center justify-between"
            >
              <span>Send Wishes</span>
              <span className="text-xs text-[#D6AA54] font-bold uppercase tracking-wider">Prayers</span>
            </a>
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenShare();
              }}
              className="mt-2 w-full py-3 px-3.5 rounded-lg bg-[#54158C] text-white font-bold text-sm flex items-center justify-center gap-2 border border-[#D6AA54]/60 shadow-sm"
            >
              <Share2 className="w-4 h-4 text-[#D6AA54]" />
              <span>Share Gratitude Card</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
