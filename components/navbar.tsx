"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О моем хобби" },
  { href: "/story", label: "Моя история" },
  { href: "/impact", label: "Польза и влияние" },
  { href: "/gallery", label: "Галерея" },
  { href: "/interactive", label: "Интерактив" },
  { href: "/contact", label: "Контакты" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-extrabold text-primary">
            ХоббиСвет
          </Link>

          <button
            className="rounded-lg p-2 text-slate-700 md:hidden"
            aria-label="Открыть меню"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu size={22} />
          </button>

          <ul className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-secondary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {open && (
          <ul className="mt-4 grid gap-2 md:hidden">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-secondary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button className="w-full">Исследовать мое хобби</Button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
