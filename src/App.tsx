/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ThankYouLetter } from './components/ThankYouLetter';
import { ClosingProclamation } from './components/ClosingProclamation';
import { BlessingInteraction } from './components/BlessingInteraction';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { MusicPlayer } from './components/MusicPlayer';
import { AudioProvider, useAudio } from './context/AudioContext';
import { ArrowUp, Share2 } from 'lucide-react';

function AppContent() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isPlaying, togglePlay } = useAudio();

  // Theme state with localStorage persistence and system preference default
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFF8EF] dark:bg-[#120819] text-[#1E1424] dark:text-[#EDE3F2] font-sans flex flex-col selection:bg-[#E9DDF4] selection:text-[#321044] transition-colors duration-300">
      {/* Top Navigation with Theme Toggle and Direct Section Links */}
      <Navbar
        onOpenShare={() => setIsShareModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Standard Professional Two-Column Hero Section */}
        <HeroSection
          onOpenShare={() => setIsShareModalOpen(true)}
          isAudioPlaying={isPlaying}
          onToggleAudio={togglePlay}
        />

        {/* The Verbatim Thank You Letter */}
        <ThankYouLetter />

        {/* Climax Section: "Nothing Missing, Nothing Broken!" */}
        <ClosingProclamation onOpenShare={() => setIsShareModalOpen(true)} />

        {/* Interactive Fellowship: Send Wishes & Warm Replies */}
        <BlessingInteraction />
      </main>

      {/* Footer */}
      <Footer onOpenShare={() => setIsShareModalOpen(true)} />

      {/* Share Modal Dialog */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* Dedicated Floating Background Music Player */}
      <MusicPlayer />

      {/* Floating Action Buttons (Sticky Quick Share & Back to Top) */}
      <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-[calc(1rem+env(safe-area-inset-right,0px))] sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2.5 no-print">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 sm:p-3.5 min-h-[48px] min-w-[48px] flex items-center justify-center bg-white/95 dark:bg-[#251034]/95 hover:bg-white dark:hover:bg-[#321544] text-[#54158C] dark:text-[#E5BE6C] rounded-full shadow-lg border border-[#D6AA54]/40 hover:border-[#54158C] transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54158C]"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={() => setIsShareModalOpen(true)}
          className="p-3 sm:p-3.5 min-h-[48px] min-w-[48px] flex items-center justify-center bg-[#54158C] hover:bg-[#321044] dark:bg-[#54158C] dark:hover:bg-[#6c1dae] text-[#D6AA54] hover:text-white rounded-full shadow-xl border border-[#D6AA54] transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54158C]"
          aria-label="Share this message"
          title="Share this gratitude card"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}
