"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#hero", label: "Главная" },
  { href: "#about", label: "О хобби" },
  { href: "#story", label: "История" },
  { href: "#benefits", label: "Польза" },
  { href: "#gallery", label: "Галерея" },
  { href: "#interactive", label: "Интерактив" },
  { href: "#contacts", label: "Контакты" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/55 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/60">
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <Link href="#hero" className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
            ХоббиСвет
          </Link>

          <button
            className="rounded-lg p-2 text-slate-700 dark:text-slate-200 md:hidden"
            aria-label="Открыть меню"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu size={22} />
          </button>

          <ul className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/70 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800/70 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>

        {open && (
          <ul className="mt-4 grid gap-2 md:hidden">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/70 dark:text-slate-200 dark:hover:bg-slate-800/70"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <ThemeToggle />
            </li>
            <li>
              <Link href="#interactive" onClick={() => setOpen(false)}>
                <Button className="w-full">Пройти квиз</Button>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
