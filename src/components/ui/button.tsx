"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", size = "md", isLoading, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer tracking-wider uppercase text-xs";
    
    const variants = {
      primary: "bg-brand-primary hover:bg-[#80001f] text-white shadow-md shadow-brand-primary/10 border border-brand-primary/10",
      secondary: "border border-brand-gold bg-transparent hover:bg-brand-gold/10 text-brand-gold",
      outline: "border border-brand-outline bg-transparent hover:bg-brand-container text-brand-on-surface-variant",
      ghost: "hover:bg-brand-container hover:text-brand-primary text-brand-on-surface-variant",
      danger: "bg-brand-error hover:bg-brand-error/90 text-white shadow-md shadow-brand-error/10",
    };

    const sizes = {
      sm: "h-9 px-4 text-[10px] tracking-widest",
      md: "h-11 px-6 text-xs",
      lg: "h-12 px-8 text-sm",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
