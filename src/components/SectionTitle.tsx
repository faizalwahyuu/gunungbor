import React from 'react';

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  badge?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  badge,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {/* Eyebrow */}
      <div className={`inline-flex items-center gap-2 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="w-2 h-2 bg-[#D8FF3E] inline-block animate-pulse" />
        <span className="font-mono-tech text-xs tracking-[0.2em] text-[#D8FF3E] uppercase">
          {eyebrow}
        </span>
        {badge && (
          <span className="font-mono-tech text-[10px] px-2 py-0.5 border border-white/15 bg-[#171D18] text-[#A7AEA5] tracking-widest uppercase">
            {badge}
          </span>
        )}
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#F4F5F1] leading-[1.1] mb-5 font-heading">
        {title}
      </h2>

      {/* Optional Description */}
      {description && (
        <p className="text-base sm:text-lg text-[#A7AEA5] leading-relaxed font-normal">
          {description}
        </p>
      )}

      {/* Industrial Accent Rule */}
      <div className={`mt-6 flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="w-12 h-0.5 bg-[#D8FF3E]" />
        <div className="w-3 h-0.5 bg-white/20" />
        <div className="w-1.5 h-0.5 bg-white/20" />
      </div>
    </div>
  );
};
