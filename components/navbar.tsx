"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/mission", label: "Наша миссия" },
  { href: "/football", label: "Футбол" },
  { href: "/basketball", label: "Баскетбол" },
  { href: "/volleyball", label: "Волейбол" },
  { href: "/gallery", label: "Галерея" },
  { href: "/contact", label: "Контакты" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-white/25 bg-white/45 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.75)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/55 dark:shadow-[0_0_24px_-10px_rgba(129,140,248,0.9)]"
            : "border-white/30 bg-white/45 shadow-[0_16px_35px_-28px_rgba(15,23,42,0.75)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/55 dark:shadow-[0_0_20px_-12px_rgba(99,102,241,0.75)]"
        }`}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group rounded-xl px-2 py-1 text-base font-black tracking-[0.02em] transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="hidden bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(79,70,229,0.25)] transition-all duration-300 group-hover:from-indigo-600 group-hover:via-fuchsia-500 group-hover:to-cyan-500 dark:from-indigo-300 dark:via-fuchsia-300 dark:to-sky-300 dark:drop-shadow-[0_0_12px_rgba(129,140,248,0.65)] sm:inline">
              Хобби учеников 11 класса
            </span>
            <span className="bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(79,70,229,0.25)] transition-all duration-300 group-hover:from-indigo-600 group-hover:via-fuchsia-500 group-hover:to-cyan-500 dark:from-indigo-300 dark:via-fuchsia-300 dark:to-sky-300 dark:drop-shadow-[0_0_12px_rgba(129,140,248,0.65)] sm:hidden">
              Хобби 11 класса
            </span>
          </Link>
          <div className="hidden h-6 w-px bg-slate-300/70 dark:bg-slate-700 md:block" />
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`relative z-10 inline-flex rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-700 hover:scale-[1.03] hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
                {isActive ? (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-blue-500 shadow-[0_10px_30px_-15px_rgba(79,70,229,1)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : (
                  <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-1 ring-indigo-300/60 transition-opacity duration-300 hover:opacity-100 dark:ring-indigo-400/40" />
                )}
              </li>
            );
          })}
          <li className="ml-2">
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/35 bg-white/65 text-slate-800 backdrop-blur-xl transition hover:scale-105 hover:bg-white dark:border-slate-700 dark:bg-slate-800/75 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/75 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mx-4 mt-24 rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/95 via-indigo-950/65 to-fuchsia-950/55 p-5 shadow-[0_0_40px_-20px_rgba(129,140,248,0.95)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Навигация</p>
                <button
                  className="rounded-lg border border-white/20 p-2 text-slate-200"
                  onClick={() => setOpen(false)}
                  aria-label="Закрыть меню"
                >
                  <X size={18} />
                </button>
              </div>
              <ul className="grid gap-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-2xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-blue-500 text-white shadow-[0_10px_25px_-15px_rgba(99,102,241,1)]"
                            : "bg-white/5 text-slate-100 hover:scale-[1.02] hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <Link href="/#interactive">
                    <Button className="w-full">Пройти квиз</Button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
