
import React from 'react';
import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-semibold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variantClasses = {
      primary: "bg-terra-gold text-terra-charcoal hover:bg-terra-gold/90",
      secondary: "bg-terra-off-white text-terra-charcoal border border-terra-charcoal hover:bg-terra-off-white/90",
      ghost: "bg-transparent text-terra-charcoal hover:bg-terra-off-white/20",
      outline: "bg-transparent text-terra-off-white border border-terra-off-white/30 hover:bg-terra-off-white/10 hover:border-terra-gold"
    };

    const sizeClasses = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-6 text-lg"
    };

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
