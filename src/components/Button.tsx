import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent-outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-mono-tech uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D8FF3E] focus:ring-offset-2 focus:ring-offset-[#0B0F0D] disabled:opacity-50 disabled:cursor-not-allowed select-none active:translate-y-px";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5 min-h-[36px]",
    md: "text-xs md:text-sm px-5 py-2.5 gap-2 min-h-[44px]",
    lg: "text-sm md:text-base px-7 py-3.5 gap-2.5 min-h-[50px]"
  };

  const variantStyles = {
    primary: "bg-[#D8FF3E] hover:bg-[#c9f22e] text-[#0B0F0D] shadow-[0_0_20px_rgba(216,255,62,0.25)] hover:shadow-[0_0_30px_rgba(216,255,62,0.4)] border border-[#D8FF3E]",
    secondary: "bg-[#171D18] hover:bg-[#202720] text-[#F4F5F1] border border-white/15 hover:border-[#D8FF3E]/70 hover:text-white",
    ghost: "bg-transparent hover:bg-[#171D18]/60 text-[#A7AEA5] hover:text-[#F4F5F1] border border-transparent hover:border-white/10",
    'accent-outline': "bg-transparent text-[#D8FF3E] border border-[#D8FF3E] hover:bg-[#D8FF3E]/10"
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span className="whitespace-nowrap tracking-wide">{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
