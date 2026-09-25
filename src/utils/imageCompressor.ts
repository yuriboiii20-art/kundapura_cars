/**
 * Image compression utility for web optimization
 * Resizes high-resolution smartphone/camera photos to web-friendly dimensions
 * and compresses them to reduce file size from ~10MB down to ~150-250KB.
 */

export interface CompressionResult {
  blob: Blob;
  dataUrl: string;
  originalSize: number;
  compressedSize: number;
  width: number;
  height: number;
}

export async function compressImageFile(
  file: File,
  maxWidth = 1400,
  maxHeight = 1050,
  quality = 0.78
): Promise<CompressionResult> {
  return new Promise((resolve, reject) => {
    const originalSize = file.size;
    const reader = new FileReader();

    reader.onerror = () => reject(new Error('Failed to read image file'));

    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Failed to load image into memory'));

      img.onload = () => {
        let { width, height } = img;

        // Calculate aspect ratio preserving dimensions
        if (width > maxWidth || height > maxHeight) {
          const widthRatio = maxWidth / width;
          const heightRatio = maxHeight / height;
          const ratio = Math.min(widthRatio, heightRatio);

          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get canvas 2D rendering context'));
          return;
        }

        // Fill background white in case of transparent PNG/WebP
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);

        // Use high quality image rendering on canvas
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Canvas toBlob conversion failed'));
              return;
            }

            resolve({
              blob,
              dataUrl,
              originalSize,
              compressedSize: blob.size,
              width,
              height,
            });
          },
          'image/jpeg',
          quality
        );
      };

      img.src = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  });
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

