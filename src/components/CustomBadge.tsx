
import React from 'react';
import { cn } from "@/lib/utils";

interface CustomBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'featured' | 'rent' | 'sale' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

const CustomBadge = React.forwardRef<HTMLDivElement, CustomBadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";
    
    const variantClasses = {
      default: "bg-terra-gold/20 text-terra-gold",
      featured: "bg-terra-gold text-terra-charcoal",
      rent: "bg-blue-500/20 text-blue-500",
      sale: "bg-green-500/20 text-green-500",
      success: "bg-green-500/20 text-green-600",
      warning: "bg-yellow-500/20 text-yellow-600",
      error: "bg-red-500/20 text-red-600"
    };

    return (
      <div
        className={cn(
          baseClasses,
          variantClasses[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CustomBadge.displayName = "CustomBadge";

export default CustomBadge;
