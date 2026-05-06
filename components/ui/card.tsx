import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-card p-6 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/70 dark:shadow-[0_0_0_1px_rgba(129,140,248,0.18)]",
        className
      )}
      {...props}
    />
  );
}
