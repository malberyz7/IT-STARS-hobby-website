"use client";

import { cn } from "@/lib/utils";
import { type ReactNode, useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  items: Tab[];
};

export function Tabs({ items }: TabsProps) {
  const [active, setActive] = useState(items[0]?.id);

  return (
    <div className="w-full">
      <div className="mb-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              active === item.id
                ? "bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-blue-500 text-white shadow-[0_10px_26px_-12px_rgba(79,70,229,1)]"
                : "border border-white/60 bg-white/70 text-slate-700 hover:bg-white dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:bg-slate-800"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>
        {items.map((item) =>
          item.id === active ? (
            <div
              key={item.id}
              className="rounded-3xl border border-white/60 bg-gradient-to-br from-white/80 via-indigo-50/45 to-fuchsia-50/45 p-7 shadow-[0_18px_60px_-30px_rgba(79,70,229,0.6)] backdrop-blur-xl dark:border-slate-700 dark:bg-gradient-to-br dark:from-slate-900/90 dark:via-indigo-950/45 dark:to-fuchsia-950/35 dark:shadow-[0_0_30px_-10px_rgba(99,102,241,0.7)]"
            >
              {item.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
