"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Dumbbell, Goal, Sparkles, Trophy, Users } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SafeImage } from "@/components/safe-image";
import { InteractiveHub } from "@/components/interactive-hub";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const sportCards = [
  {
    title: "⚽ Футбол - Алан",
    text: "Футбол научил Алана командной работе, выносливости и умению брать ответственность в решающий момент.",
    href: "/football",
    accent: "text-emerald-500"
  },
  {
    title: "🏀 Баскетбол - Алимжан",
    text: "Баскетбол развивает у Алимжана скорость мышления, реакцию и дисциплину на тренировках.",
    href: "/basketball",
    accent: "text-orange-500"
  },
  {
    title: "🏐 Волейбол - Диего",
    text: "Волейбол формирует у Диего координацию, прыжковую мощь и чувство сильной командной поддержки.",
    href: "/volleyball",
    accent: "text-sky-500"
  }
];

const timeline = [
  {
    step: "01",
    title: "Спорт с детства",
    text: "Мы начали тренироваться еще в школьные годы и быстро поняли, что спорт - это не временное увлечение."
  },
  {
    step: "02",
    title: "Дисциплина каждый день",
    text: "Постоянные тренировки, режим и командная ответственность научили нас держать слово и идти к цели."
  },
  {
    step: "03",
    title: "Успех в учебе и жизни",
    text: "Спорт усилил концентрацию, уверенность и мотивацию. Эти навыки помогают нам не только на площадке."
  }
];

const benefits = [
  {
    icon: Goal,
    title: "Характер победителя",
    text: "Мы учимся не сдаваться после неудач и сохранять фокус на результате."
  },
  {
    icon: Brain,
    title: "Быстрое мышление",
    text: "Спорт тренирует реакцию, стратегию и мгновенное принятие решений."
  },
  {
    icon: Users,
    title: "Командность",
    text: "Мы поддерживаем друг друга, учимся слышать партнеров и играть на общий успех."
  },
  {
    icon: Dumbbell,
    title: "Дисциплина и режим",
    text: "Регулярность тренировок формирует внутренний порядок и силу воли."
  }
];

const gallery = [
  "/images/gallery-sport-1.png",
  "/images/gallery-sport-2.png",
  "/images/gallery-sport-3.png",
  "/images/gallery-sport-4.png",
  "/images/gallery-sport-5.png",
  "/images/gallery-sport-6.png"
];

const revealStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const revealItem = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="layered-grid pointer-events-none absolute inset-0 -z-20" />
      <section id="hero" className="hero-glow relative isolate min-h-screen overflow-hidden">
        <div className="hero-orb left-[-90px] top-[10%] -z-10 h-56 w-56 bg-fuchsia-500/50" />
        <div className="hero-orb right-[-110px] top-[22%] -z-10 h-64 w-64 bg-cyan-500/50" />
        <div className="hero-orb bottom-[-100px] left-[28%] -z-10 h-72 w-72 bg-orange-500/45" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.28),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.2),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.25),transparent_45%)]" />
        <div className="section-container grid min-h-screen items-center gap-8 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 w-fit rounded-full border border-white/40 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur-xl dark:border-white/20 dark:bg-slate-800/55 dark:text-slate-200"
          >
            IT-Stars 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="max-w-5xl text-4xl font-black leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-7xl"
          >
            <span className="gradient-text">Спорт - это не просто хобби.</span> Это наш образ жизни.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 max-w-2xl text-lg text-slate-700 dark:text-slate-300"
          >
            Мы занимаемся спортом всю жизнь, и именно он формирует наш характер, дисциплину и стремление к успеху.
            Футбол, баскетбол и волейбол стали для нас школой лидерства и мотивации.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="#team">
              <Button className="glow-button group h-12 rounded-2xl px-7 text-base">
                Наша спортивная команда
                <Sparkles className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
              </Button>
            </Link>
            <Link href="#gallery">
              <Button variant="outline" className="h-12 rounded-2xl px-7 text-base">
                Смотреть галерею спорта
              </Button>
            </Link>
          </motion.div>
          </div>

          <motion.div
            variants={revealStagger}
            initial="hidden"
            animate="show"
            className="relative hidden gap-4 lg:grid"
          >
            <motion.div variants={revealItem} className="neon-card premium-card ml-6 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">Футбол</p>
              <p className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">Алан</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Выносливость, стратегия и командное мышление на поле.</p>
            </motion.div>
            <motion.div variants={revealItem} className="neon-card premium-card mr-8 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Баскетбол</p>
              <p className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">Алимжан</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Реакция, скорость решений и лидерство в напряженных матчах.</p>
            </motion.div>
            <motion.div variants={revealItem} className="neon-card premium-card ml-14 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Волейбол</p>
              <p className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">Диего</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Координация, прыжковая сила и взаимное доверие внутри команды.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection id="team" className="section-container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Наша команда</p>
            <h2 className="section-title">Три спорта, одна философия роста</h2>
          </div>
          <p className="max-w-xl text-slate-600 dark:text-slate-300">
            Мы разные по виду спорта, но едины в главном: дисциплина, мотивация и движение вперед каждый день.
          </p>
        </div>
        <motion.div variants={revealStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 md:grid-cols-3">
          {sportCards.map((item, index) => (
            <motion.div key={item.title} variants={revealItem} whileHover={{ y: -8, scale: 1.03 }} transition={{ duration: 0.25 }}>
              <Card className="neon-card premium-card h-full">
                <p className={`mb-4 text-sm font-semibold ${item.accent}`}>0{index + 1}</p>
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{item.text}</p>
                <Link href={item.href} className="mt-4 inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                  Перейти на страницу →
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection id="story" className="section-container grid items-center gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl">
          <SafeImage
            src="/images/team-sport-photo.png"
            alt="Командная фотография спортсменов на поле"
            width={1400}
            height={900}
                className="h-full min-h-[340px] w-full object-cover brightness-[0.98] dark:brightness-75"
          />
        </div>
        <div>
          <p className="eyebrow">Моя история</p>
          <h2 className="section-title">Наш путь в спорте: от детства к цели</h2>
          <div className="mt-6 space-y-4">
            {timeline.map((item) => (
              <Card key={item.step} className="premium-card">
                <p className="mb-1 text-xs font-semibold tracking-[0.2em] text-slate-500 dark:text-slate-400">{item.step}</p>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="benefits" className="section-container grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Польза</p>
          <h2 className="section-title">Как спорт меняет наш характер каждый день</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            А вы замечали, как спорт меняет мышление? Мы стали организованнее, увереннее и научились работать ради
            общего результата.
          </p>
        </div>
        <motion.div variants={revealStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="grid gap-4 sm:grid-cols-2">
          {benefits.map((item) => (
            <motion.div key={item.title} variants={revealItem} whileHover={{ scale: 1.04, y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="neon-card premium-card h-full">
                <item.icon className="mb-3 h-5 w-5 text-indigo-500" />
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection id="gallery" className="section-container">
        <p className="eyebrow">Галерея</p>
        <h2 className="section-title">Моменты футбола, баскетбола и волейбола</h2>
        <motion.div variants={revealStagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src, index) => (
            <motion.div key={src} variants={revealItem} className="group relative overflow-hidden rounded-3xl">
              <SafeImage
                src={src}
                alt={`Спортивный момент ${index + 1}`}
                width={1200}
                height={900}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/25 via-transparent to-orange-500/35 opacity-0 transition duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection id="interactive" className="section-container">
        <p className="eyebrow">Интерактив</p>
        <h2 className="section-title mb-8">Какой вид спорта подходит именно вам?</h2>
        <InteractiveHub />
      </AnimatedSection>

      <AnimatedSection id="contacts" className="section-container grid gap-6 lg:grid-cols-2">
        <Card className="neon-card premium-card">
          <p className="eyebrow">Контакты</p>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Готовы рассказать о своем спорте?</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Как спорт влияет на ваш характер, дисциплину и успех?</p>
          <div className="mt-5 space-y-2 text-slate-700 dark:text-slate-200">
            <p>Почта: sport_solutions2026@mail.ru</p>
            <p>Локация: Lakeview School Almaty</p>
            <p>Класс: 11</p>
          </div>
        </Card>
        <Card className="neon-card premium-card">
          <p className="eyebrow">Авторы проекта</p>
          <ul className="space-y-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
            <li>Алан - Футбол</li>
            <li>Алимжан - Баскетбол</li>
            <li>Диего - Волейбол</li>
          </ul>
          <div className="mt-5 rounded-2xl border border-white/50 bg-white/70 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200">
            <p>Название школы - Lakeview School Almaty</p>
            <p>Класс - 11</p>
            <p>Дата - 06.05.2026</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Trophy className="h-4 w-4 text-amber-500" />
            <span>Командный спортивный проект для школьного конкурса.</span>
          </div>
        </Card>
      </AnimatedSection>

      <section id="footer-anchor" className="pb-10" />
      <div className="floating-dot left-[12%] top-[18%]" />
      <div className="floating-dot right-[16%] top-[34%] delay-1000" />
      <div className="floating-dot left-[22%] bottom-[16%] delay-500" />
      <div className="floating-dot right-[22%] bottom-[20%] delay-700" />
      <Goal className="pointer-events-none absolute right-8 top-[20%] hidden h-7 w-7 text-violet-300/60 lg:block" />
    </div>
  );
}
