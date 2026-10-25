import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';

export interface AudioContextType {
  isPlaying: boolean;
  isLoading: boolean;
  duration: number;
  currentTime: number;
  volume: number;
  isMuted: boolean;
  hasError: boolean;
  isAutoplayBlocked: boolean;
  isLooping: boolean;
  songTitle: string;
  artist: string;
  togglePlay: () => void;
  play: () => Promise<void>;
  pause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  toggleLoop: () => void;
  restart: () => void;
  dismissAutoplayNotice: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const SONG_SRC = '/assets/aistudio/Thank_You__My_People_b4b5939f.m4a';
const SONG_TITLE = 'Thank You, My People';
const SONG_ARTIST = 'Omolayo Kolleade';

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolumeState] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState<boolean>(false);
  const [isLooping, setIsLooping] = useState<boolean>(true);

  // User explicitly paused the song (so first interaction shouldn't auto-start if user chose to pause)
  const userManuallyPausedRef = useRef<boolean>(false);

  useEffect(() => {
    // Create single Audio element instance
    const audio = new Audio(SONG_SRC);
    audioRef.current = audio;
    audio.preload = 'metadata';
    audio.loop = true;
    audio.volume = 0.8;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
      setIsLoading(false);
    };

    const handleDurationChange = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setIsAutoplayBlocked(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      console.warn('Audio playback encountered an issue with source:', SONG_SRC);
      setHasError(true);
      setIsLoading(false);
      setIsPlaying(false);
    };

    const handleEnded = () => {
      if (!audio.loop) {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    // Attempt autoplay immediately
    const attemptAutoplay = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsAutoplayBlocked(false);
          })
          .catch((err) => {
            // Browser blocked unmuted autoplay without user gesture
            console.info('Browser autoplay policy prevented audio playback without user gesture:', err.name);
            setIsAutoplayBlocked(true);
            setIsPlaying(false);
          });
      }
    };

    attemptAutoplay();

    // Set up one-time listener to start playback on user's first interaction if blocked
    const handleFirstInteraction = () => {
      if (audioRef.current && !userManuallyPausedRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setIsAutoplayBlocked(false);
          })
          .catch((err) => {
            console.warn('Interaction play attempt warning:', err);
          });
      }
    };

    const interactionEvents: (keyof WindowEventMap)[] = ['click', 'touchstart', 'keydown'];
    interactionEvents.forEach((evt) => {
      window.addEventListener(evt, handleFirstInteraction, { once: true, passive: true });
    });

    return () => {
      interactionEvents.forEach((evt) => {
        window.removeEventListener(evt, handleFirstInteraction);
      });
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const play = useCallback(async () => {
    userManuallyPausedRef.current = false;
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setIsAutoplayBlocked(false);
    } catch (err) {
      console.warn('Playback error:', err);
      setIsAutoplayBlocked(true);
    }
  }, []);

  const pause = useCallback(() => {
    userManuallyPausedRef.current = true;
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const seek = useCallback((time: number) => {
    if (!audioRef.current) return;
    const clampedTime = Math.max(0, Math.min(time, audioRef.current.duration || 0));
    audioRef.current.currentTime = clampedTime;
    setCurrentTime(clampedTime);
  }, []);

  const setVolume = useCallback((newVolume: number) => {
    if (!audioRef.current) return;
    const clamped = Math.max(0, Math.min(1, newVolume));
    audioRef.current.volume = clamped;
    setVolumeState(clamped);
    if (clamped > 0 && isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    const newMuted = !audioRef.current.muted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
  }, []);

  const toggleLoop = useCallback(() => {
    if (!audioRef.current) return;
    const newLoop = !audioRef.current.loop;
    audioRef.current.loop = newLoop;
    setIsLooping(newLoop);
  }, []);

  const restart = useCallback(() => {
    seek(0);
    play();
  }, [seek, play]);

  const dismissAutoplayNotice = useCallback(() => {
    setIsAutoplayBlocked(false);
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isLoading,
        duration,
        currentTime,
        volume,
        isMuted,
        hasError,
        isAutoplayBlocked,
        isLooping,
        songTitle: SONG_TITLE,
        artist: SONG_ARTIST,
        togglePlay,
        play,
        pause,
        seek,
        setVolume,
        toggleMute,
        toggleLoop,
        restart,
        dismissAutoplayNotice,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
