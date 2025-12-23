import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "font-sans font-medium transition-all duration-300 uppercase tracking-wider";
  
  const variants = {
    primary: "bg-luxury-black text-luxury-white hover:bg-luxury-black border-2 border-luxury-black",
    secondary: "bg-luxury-white text-luxury-black border-2 border-luxury-black hover:bg-luxury-white",
    outline: "border-2 border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-luxury-white",
    ghost: "text-luxury-black hover:text-luxury-black hover:bg-luxury-white",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

