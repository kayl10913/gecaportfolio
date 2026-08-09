import { useEffect, useState } from 'react';
import { profilePic } from '../assets/photos';

const CACHE_KEY = 'hero-portrait-cutout-v1';

function removeNearWhiteBackground(source, threshold = 238, softness = 22) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas unavailable'));
        return;
      }

      ctx.drawImage(img, 0, 0);
      const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const brightness = (r + g + b) / 3;
        const neutral = max - min < 28;

        if (neutral && brightness >= threshold - softness) {
          const t = Math.min(1, Math.max(0, (brightness - (threshold - softness)) / softness));
          data[i + 3] = Math.round(255 * (1 - t));
        }
      }

      ctx.putImageData(new ImageData(data, width, height), 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => reject(new Error('Failed to load portrait'));
    img.src = source;
  });
}

export function useHeroPortrait() {
  const [src, setSrc] = useState(() => {
    try {
      return sessionStorage.getItem(CACHE_KEY) || profilePic;
    } catch {
      return profilePic;
    }
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          if (!cancelled) {
            setSrc(cached);
            setReady(true);
          }
          return;
        }

        const cutout = await removeNearWhiteBackground(profilePic);
        if (cancelled) return;
        try {
          sessionStorage.setItem(CACHE_KEY, cutout);
        } catch {
          /* quota */
        }
        setSrc(cutout);
      } catch {
        if (!cancelled) setSrc(profilePic);
      } finally {
        if (!cancelled) setReady(true);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return { src, ready };
}
