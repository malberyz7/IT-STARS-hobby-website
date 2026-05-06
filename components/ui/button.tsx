"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600 text-primary-foreground hover:from-indigo-500 hover:via-blue-500 hover:to-fuchsia-500 shadow-[0_12px_35px_-15px_rgba(99,102,241,0.95)] dark:shadow-[0_0_28px_-8px_rgba(168,85,247,0.95)]",
  outline:
    "border border-indigo-300/80 bg-white/70 text-indigo-700 backdrop-blur-md hover:border-indigo-400 hover:bg-indigo-50/80 dark:border-indigo-400/50 dark:bg-slate-800/60 dark:text-indigo-200 dark:hover:border-indigo-300 dark:hover:bg-slate-700/70",
  ghost: "bg-transparent text-foreground hover:bg-muted dark:text-slate-200 dark:hover:bg-slate-800/70"
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
