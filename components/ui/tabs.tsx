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
      <div className="mb-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              active === item.id ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-secondary"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>
        {items.map((item) =>
          item.id === active ? (
            <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5">
              {item.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
