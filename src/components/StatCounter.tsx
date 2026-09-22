import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  customDisplay?: string; // For 24/7
  duration?: number;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  label,
  sublabel,
  customDisplay,
  duration = 1800,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);

          if (customDisplay) {
            return;
          }

          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated, customDisplay]);

  return (
    <div
      ref={containerRef}
      className="relative p-6 sm:p-8 bg-[#111713] border border-white/10 hover:border-[#D8FF3E]/40 transition-colors duration-300 group"
    >
      {/* Corner technical accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#D8FF3E]/60 group-hover:border-[#D8FF3E] transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/20 group-hover:border-[#D8FF3E] transition-colors" />

      {/* Metric value */}
      <div className="flex items-baseline gap-1 mb-2">
        <span className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F4F5F1] tracking-tight group-hover:text-[#D8FF3E] transition-colors">
          {customDisplay || `${prefix}${count}${suffix}`}
        </span>
      </div>

      {/* Primary Label */}
      <h3 className="font-heading font-bold text-base sm:text-lg text-[#F4F5F1] uppercase tracking-wide mb-1">
        {label}
      </h3>

      {/* Sublabel */}
      {sublabel && (
        <p className="font-mono-tech text-xs text-[#A7AEA5] tracking-wider uppercase">
          {sublabel}
        </p>
      )}

      {/* Decorative technical line */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-[#A7AEA5]/60">
        <span>STATUS: VERIFIED</span>
        <span className="text-[#D8FF3E]">● OPTIMAL</span>
      </div>
    </div>
  );
};
