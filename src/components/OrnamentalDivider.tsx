import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'gold' | 'purple' | 'light';
  symbol?: 'heart' | 'star' | 'floral' | 'cross';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  variant = 'gold',
  symbol = 'floral',
}) => {
  const lineColor =
    variant === 'gold'
      ? 'from-transparent via-[#D6AA54]/60 to-transparent'
      : variant === 'purple'
      ? 'from-transparent via-[#54158C]/40 to-transparent'
      : 'from-transparent via-white/40 to-transparent';

  const iconColor =
    variant === 'gold'
      ? 'text-[#D6AA54]'
      : variant === 'purple'
      ? 'text-[#54158C]'
      : 'text-amber-200';

  return (
    <div
      className={`flex items-center justify-center gap-2 sm:gap-3 my-6 sm:my-8 select-none max-w-full px-2 ${className}`}
      aria-hidden="true"
    >
      <div className={`h-[1px] w-8 xs:w-14 sm:w-28 max-w-[80px] sm:max-w-none bg-gradient-to-r ${lineColor}`} />

      {symbol === 'floral' && (
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${iconColor}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2C13.5 5 15 7.5 18 8C15 8.5 13.5 11 12 14C10.5 11 9 8.5 6 8C9 7.5 10.5 5 12 2Z" fill="currentColor" fillOpacity="0.25" />
          <path d="M12 14C13.5 17 15 19.5 18 20C15 20.5 13.5 23 12 26" stroke="none" />
          <circle cx="12" cy="14" r="1.5" fill="currentColor" />
        </svg>
      )}

      {symbol === 'heart' && (
        <svg
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${iconColor}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          fillOpacity="0.3"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )}

      {symbol === 'star' && (
        <svg
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${iconColor}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
        </svg>
      )}

      {symbol === 'cross' && (
        <svg
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${iconColor}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3v18M7 8h10" strokeLinecap="round" />
        </svg>
      )}

      <div className={`h-[1px] w-8 xs:w-14 sm:w-28 max-w-[80px] sm:max-w-none bg-gradient-to-l ${lineColor}`} />
    </div>
  );
};
