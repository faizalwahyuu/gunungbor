import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc,
  alt,
  aspectRatio = '16 / 10',
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#171D18] ${className}`}
      style={{ aspectRatio }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#111713] animate-pulse flex items-center justify-center">
          <div className="text-[11px] font-mono tracking-widest text-[#A7AEA5]/40 uppercase">
            LOADING TELEMETRY ASSET...
          </div>
        </div>
      )}

      {hasError && !fallbackSrc ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#171D18] border border-white/10">
          <div className="w-8 h-8 mb-2 rounded-full border border-[#D8FF3E]/40 flex items-center justify-center text-[#D8FF3E] text-xs font-mono">
            RIG
          </div>
          <span className="text-xs uppercase font-mono tracking-wider text-[#A7AEA5]">
            {alt || 'PROJECT FIELD ASSET'}
          </span>
          <span className="text-[10px] font-mono text-[#D8FF3E] mt-1">
            TERRADRILL TECHNICAL ARCHIVE
          </span>
        </div>
      ) : (
        <img
          src={imgSrc}
          alt={alt}
          loading={loading}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          {...props}
        />
      )}

      {/* Subtle bottom gradient for industrial contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D]/70 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
