"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-primary text-primary-foreground hover:bg-blue-700",
  outline: "border border-primary bg-white text-primary hover:bg-secondary",
  ghost: "bg-transparent text-foreground hover:bg-muted"
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
