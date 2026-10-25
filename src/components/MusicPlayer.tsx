import React, { useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  Volume1,
  VolumeX,
  RotateCcw,
  Music,
  ChevronUp,
  ChevronDown,
  Repeat,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { useAudio } from '../context/AudioContext';

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export const MusicPlayer: React.FC = () => {
  const {
    isPlaying,
    isLoading,
    duration,
    currentTime,
    volume,
    isMuted,
    hasError,
    isAutoplayBlocked,
    isLooping,
    songTitle,
    artist,
    togglePlay,
    seek,
    setVolume,
    toggleMute,
    toggleLoop,
    restart,
  } = useAudio();

  // On mobile screens, start compact to be unobtrusive; user can expand anytime
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    seek(val);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
  };

  if (hasError) {
    return (
      <aside
        aria-label="Audio player status"
        className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] left-[calc(1rem+env(safe-area-inset-left,0px))] sm:bottom-6 sm:left-6 z-40 no-print"
      >
        <div className="bg-[#FFF8EF] dark:bg-[#1C0826] border border-amber-500/40 rounded-xl p-3 shadow-lg flex items-center gap-2 text-xs text-amber-800 dark:text-amber-200">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Audio currently unavailable</span>
        </div>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Background music player"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] left-[calc(1rem+env(safe-area-inset-left,0px))] sm:bottom-6 sm:left-6 z-40 max-w-[calc(100vw-5.5rem)] sm:max-w-sm transition-all duration-300 no-print"
    >
      {/* Autoplay prompt toast if browser blocked audio until gesture */}
      {isAutoplayBlocked && !isPlaying && (
        <div className="mb-2 animate-bounce flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#54158C] to-[#380E51] text-[#FFF8EF] text-xs font-semibold shadow-xl border border-[#D6AA54] max-w-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D6AA54] shrink-0 animate-pulse" />
          <button
            onClick={togglePlay}
            className="text-left hover:underline text-[#FFF8EF] flex-1 truncate"
            title="Play song"
          >
            Tap to hear &ldquo;{songTitle}&rdquo;
          </button>
        </div>
      )}

      {/* Main Player Container */}
      <div className="bg-white/95 dark:bg-[#1A0826]/95 backdrop-blur-md rounded-2xl border-2 border-[#D6AA54]/70 dark:border-[#D6AA54]/60 shadow-2xl p-3 sm:p-4 text-[#1E1424] dark:text-[#EDE3F2] transition-all">
        
        {/* COMPACT VIEW (Visible always, or as header in expanded mode) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Animated vinyl / music icon indicator */}
          <div
            className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 border border-[#D6AA54]/60 transition-transform ${
              isPlaying
                ? 'bg-gradient-to-br from-[#54158C] to-[#2B0A3D] text-[#D6AA54] shadow-md ring-2 ring-[#D6AA54]/40 animate-[spin_10s_linear_infinite]'
                : 'bg-[#E9DDF4] dark:bg-[#2D123F] text-[#54158C] dark:text-[#D6AA54]'
            }`}
            title={isPlaying ? 'Music playing' : 'Music paused'}
            aria-hidden="true"
          >
            <Music className="w-4 h-4 sm:w-5 sm:h-5" />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6AA54] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D6AA54]"></span>
              </span>
            )}
          </div>

          {/* Track Info & Current Time */}
          <div className="flex-1 min-w-0 pr-1">
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#54158C] dark:bg-[#D6AA54]"></span>
              <p className="text-xs sm:text-sm font-bold text-[#2B0A3D] dark:text-white truncate leading-tight">
                {songTitle}
              </p>
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#54158C] dark:text-[#D6AA54] font-medium mt-0.5">
              <span className="truncate">{artist}</span>
              <span className="tabular-nums font-mono text-[10px] sm:text-[11px] ml-2 text-stone-600 dark:text-stone-300">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Quick Play/Pause Action */}
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="w-10 h-10 sm:w-11 sm:h-11 min-h-[44px] min-w-[44px] rounded-full flex items-center justify-center bg-[#54158C] hover:bg-[#3D0E66] text-[#FFF8EF] shadow-md border border-[#D6AA54] transition-all hover:scale-105 active:scale-95 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54158C]"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            title={isPlaying ? 'Pause music' : 'Play music'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#D6AA54]" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#D6AA54] translate-x-0.5" />
            )}
          </button>

          {/* Expand/Collapse Toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-8 h-8 min-h-[44px] min-w-[36px] flex items-center justify-center text-[#54158C] dark:text-[#D6AA54] hover:bg-[#E9DDF4]/60 dark:hover:bg-[#2D123F] rounded-lg transition-colors shrink-0"
            aria-label={isExpanded ? 'Collapse audio player' : 'Expand full audio controls'}
            title={isExpanded ? 'Collapse player' : 'Expand audio controls'}
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* EXPANDED FULL CONTROLS VIEW */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-[#D6AA54]/30 dark:border-[#D6AA54]/20 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
            {/* Scrubber Progress Bar */}
            <div className="space-y-1">
              <div className="relative flex items-center">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeekChange}
                  aria-label="Seek track position"
                  className="w-full h-1.5 bg-[#E9DDF4] dark:bg-[#321544] rounded-lg appearance-none cursor-pointer accent-[#54158C] dark:accent-[#D6AA54] focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #54158C 0%, #D6AA54 ${progressPercent}%, #E5DEEE ${progressPercent}%, #E5DEEE 100%)`,
                  }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-stone-600 dark:text-stone-400">
                <span>{formatTime(currentTime)}</span>
                <span className="text-[10px] font-sans font-semibold text-[#54158C] dark:text-[#E5BE6C] uppercase tracking-wider">
                  {isPlaying ? 'Playing Dedication' : 'Paused'}
                </span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Expanded Controls Toolbar */}
            <div className="flex items-center justify-between gap-2 pt-1">
              {/* Left group: Replay & Loop */}
              <div className="flex items-center gap-1">
                <button
                  onClick={restart}
                  className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center text-[#54158C] dark:text-[#EDE3F2] hover:text-[#2B0A3D] dark:hover:text-[#D6AA54] hover:bg-[#E9DDF4]/60 dark:hover:bg-[#2D123F] rounded-lg transition-colors"
                  aria-label="Restart song from beginning"
                  title="Replay from start"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={toggleLoop}
                  className={`p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg transition-colors ${
                    isLooping
                      ? 'text-[#54158C] dark:text-[#D6AA54] bg-[#E9DDF4] dark:bg-[#2D123F] font-bold'
                      : 'text-stone-500 hover:text-[#54158C] dark:hover:text-[#EDE3F2]'
                  }`}
                  aria-label={isLooping ? 'Disable repeat' : 'Enable repeat'}
                  title={isLooping ? 'Repeat enabled' : 'Repeat disabled'}
                >
                  <Repeat className="w-4 h-4" />
                </button>
              </div>

              {/* Right group: Volume & Mute */}
              <div className="flex items-center gap-1.5 flex-1 max-w-[150px] justify-end">
                <button
                  onClick={toggleMute}
                  className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center text-[#54158C] dark:text-[#EDE3F2] hover:text-[#2B0A3D] dark:hover:text-[#D6AA54] hover:bg-[#E9DDF4]/60 dark:hover:bg-[#2D123F] rounded-lg transition-colors shrink-0"
                  aria-label={isMuted ? 'Unmute volume' : 'Mute volume'}
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-red-500 dark:text-red-400" />
                  ) : volume < 0.5 ? (
                    <Volume1 className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  aria-label="Adjust music volume"
                  className="w-16 sm:w-20 h-1.5 bg-[#E9DDF4] dark:bg-[#321544] rounded-lg appearance-none cursor-pointer accent-[#54158C] dark:accent-[#D6AA54]"
                />
              </div>
            </div>

            {/* Sub-label dedication banner */}
            <div className="text-[11px] text-center pt-1 text-stone-600 dark:text-stone-300 italic border-t border-[#D6AA54]/20">
              Personal vocal thanksgiving recording by Omolayo Kolleade
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
