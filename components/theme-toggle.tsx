"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-xl border border-white/30 bg-white/40 dark:border-white/10 dark:bg-slate-800/40" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-300/70 bg-white/80 text-indigo-700 transition-all duration-300 hover:scale-105 hover:border-indigo-400 hover:shadow-[0_0_24px_-8px_rgba(99,102,241,0.9)] dark:border-indigo-400/40 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:border-indigo-300 dark:hover:shadow-[0_0_24px_-6px_rgba(168,85,247,0.9)]"
      aria-label="Переключить тему"
    >
      <Sun
        className={`h-5 w-5 transition-all duration-300 ${
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-300 ${
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}
