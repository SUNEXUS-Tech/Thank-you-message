import React, { useState } from 'react';
import { X, Check, Copy, Share2, Printer, QrCode } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = "Omo Kolleade's Gratitude – A Heartfelt Thank You";
  const shareText = "“Your love carried me through. Your prayers strengthened me. God's grace sustained me.” Read Omo Kolleade's personal testimony of gratitude and God's mercy.";

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
        onClose();
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          handleCopy();
        }
      }
    } else {
      handleCopy();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback
    });
  };

  const handleWhatsApp = () => {
    const text = `${shareText}\n\n${currentUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank', 'noopener,noreferrer');
  };

  const handlePrint = () => {
    onClose();
    setTimeout(() => {
      window.print();
    }, 200);
  };

  // QR Code URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentUrl)}&color=54-21-140`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card with Strong Frame */}
      <div className="relative w-full max-w-md bg-white dark:bg-[#1A0A24] rounded-2xl shadow-2xl border-2 sm:border-[3px] border-[#D6AA54] p-6 sm:p-7 z-10 overflow-hidden transition-colors duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#1E1424] dark:text-[#E9DDF4] hover:text-[#54158C] dark:hover:text-[#E5BE6C] hover:bg-[#E9DDF4] dark:hover:bg-[#2F1541] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Strong Typography */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#E9DDF4] dark:bg-[#2A113C] text-[#54158C] dark:text-[#E5BE6C] mb-3 border border-[#54158C]/20 dark:border-[#D6AA54]/30 shadow-xs">
            <Share2 className="w-6 h-6" />
          </div>
          <h3 id="share-modal-title" className="font-serif-display text-2xl sm:text-3xl font-extrabold text-[#2B0A3D] dark:text-white">
            Share Omo Kolleade&apos;s Message
          </h3>
          <p className="text-xs sm:text-sm text-[#1E1424] dark:text-[#E9DDF4] font-medium mt-1">
            Spread this testimony of gratitude and God&apos;s unfailing grace with family and friends.
          </p>
        </div>

        {/* Quick Social Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md transition-colors active:scale-95"
          >
            <span>WhatsApp</span>
          </button>

          {/* Facebook */}
          <button
            onClick={handleFacebook}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#1877F2] hover:bg-[#1567d3] text-white font-bold text-xs sm:text-sm shadow-md transition-colors active:scale-95"
          >
            <span>Facebook</span>
          </button>
        </div>

        {/* Native Web Share button (if supported) */}
        {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
          <button
            onClick={handleNativeShare}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#54158C] hover:bg-[#380E51] text-white font-bold text-xs sm:text-sm mb-4 transition-colors shadow-sm border border-[#D6AA54] active:scale-95"
          >
            <Share2 className="w-4 h-4 text-[#D6AA54]" />
            <span>Open System Share Menu</span>
          </button>
        )}

        {/* Copy Link Input Box */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-[#54158C] dark:text-[#E5BE6C] uppercase tracking-wider mb-1.5">
            Card Link
          </label>
          <div className="flex items-center gap-2 bg-[#FBF5EC] dark:bg-[#251034] border-2 border-[#D6AA54]/50 rounded-xl p-1.5 pl-3">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#1E1424] dark:text-white focus:outline-none select-all"
            />
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#54158C] hover:bg-[#380E51] text-white text-xs font-bold rounded-lg shrink-0 transition-colors shadow-xs active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          {copied && (
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1 text-center animate-fade-in">
              Link copied to your clipboard! Ready to paste into chat or status.
            </p>
          )}
        </div>

        {/* Secondary Actions: Print Keepsake & QR Code */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-[#D6AA54]/30 text-xs sm:text-sm font-bold">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-[#54158C] dark:text-[#E5BE6C] hover:underline"
          >
            <Printer className="w-4 h-4 text-[#D6AA54]" />
            <span>Print Keepsake Card</span>
          </button>

          <button
            onClick={() => setShowQR(!showQR)}
            className="inline-flex items-center gap-1.5 text-[#54158C] dark:text-[#E5BE6C] hover:underline"
          >
            <QrCode className="w-4 h-4 text-[#D6AA54]" />
            <span>{showQR ? 'Hide QR Code' : 'Show QR Code'}</span>
          </button>
        </div>

        {/* QR Code view */}
        {showQR && (
          <div className="mt-4 p-4 bg-[#FBF5EC] dark:bg-[#251034] rounded-xl text-center border-2 border-[#D6AA54]/40 animate-fade-in">
            <p className="text-xs sm:text-sm font-semibold text-[#1E1424] dark:text-[#EDE3F2] mb-2">
              Scan with phone camera to view on mobile:
            </p>
            <img
              src={qrCodeUrl}
              alt="QR Code linking to Omo Kolleade's thank you website"
              className="w-40 h-40 mx-auto rounded-lg shadow-sm border-2 border-[#D6AA54] bg-white p-1"
              loading="lazy"
            />
          </div>
        )}

      </div>
    </div>
  );
};
