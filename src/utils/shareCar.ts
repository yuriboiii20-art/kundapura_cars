import { Car } from '../types/car';
import { formatPrice } from './formatters';

export interface ShareResult {
  status: 'shared' | 'copied' | 'failed';
  message?: string;
}

export const shareCar = async (car: Car): Promise<ShareResult> => {
  const origin = window.location.origin;
  const pathname = window.location.pathname;
  const shareUrl = `${origin}${pathname}#car-${car.id}`;
  const shareTitle = `${car.year} ${car.brand} ${car.model} | Kundapura Cars`;
  const shareText = `Check out this certified ${car.year} ${car.brand} ${car.model} (${formatPrice(car.price)}) available at ${car.hubLocation}, Kundapura!\n\nView details: ${shareUrl}`;

  // 1. Try Native Web Share API (Mobile Devices / Supported Browsers)
  if (navigator.share) {
    try {
      // Try sharing with image file if available and supported
      if (car.images && car.images[0] && navigator.canShare) {
        try {
          const imgUrl = car.images[0].startsWith('http') 
            ? car.images[0] 
            : `${origin}${car.images[0]}`;
          
          const response = await fetch(imgUrl);
          const blob = await response.blob();
          const fileExtension = car.images[0].endsWith('.png') ? 'png' : 'jpg';
          const file = new File([blob], `${car.id}.${fileExtension}`, { type: blob.type || 'image/jpeg' });
          
          const shareDataWithFile = {
            title: shareTitle,
            text: shareText,
            url: shareUrl,
            files: [file]
          };

          if (navigator.canShare(shareDataWithFile)) {
            await navigator.share(shareDataWithFile);
            return { status: 'shared' };
          }
        } catch {
          // If file sharing fails or isn't supported, fall back to URL & text sharing
        }
      }

      // Standard Web Share with text & URL
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl,
      });
      return { status: 'shared' };
    } catch (err: any) {
      if (err?.name === 'AbortError') {
        // User cancelled the share dialog
        return { status: 'shared' };
      }
      // Fall through to clipboard copy if Web Share failed
    }
  }

  // 2. Clipboard Fallback (Desktop / Unsupported Browsers)
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(shareUrl);
      return { status: 'copied', message: 'Vehicle link copied to clipboard!' };
    } else {
      // Legacy fallback
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return { status: 'copied', message: 'Vehicle link copied to clipboard!' };
    }
  } catch {
    return { status: 'failed', message: 'Could not copy link.' };
  }
};
