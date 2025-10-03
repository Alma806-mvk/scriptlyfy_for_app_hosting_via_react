import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "secondary" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))]/90",
  outline: "border border-slate-300 bg-white hover:bg-slate-50 text-slate-700",
  ghost: "hover:bg-slate-100",
  link: "text-[hsl(var(--brand))] underline-offset-4 hover:underline",
  secondary: "bg-slate-800 text-white hover:bg-slate-700",
  destructive: "bg-rose-600 text-white hover:bg-rose-700",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-10 px-4",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button as default };
