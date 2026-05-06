"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function MissionPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="hero-glow relative isolate overflow-hidden">
        <div className="hero-orb left-[-80px] top-[12%] -z-10 h-56 w-56 bg-fuchsia-500/45" />
        <div className="hero-orb right-[-100px] top-[24%] -z-10 h-72 w-72 bg-cyan-500/40" />
        <div className="section-container py-20">
          <motion.p {...reveal} className="eyebrow">
            Наша миссия
          </motion.p>
          <motion.h1
            {...reveal}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="max-w-5xl text-4xl font-black leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl"
          >
            <span className="gradient-text">Мы хотим, чтобы вы стали лучше нас.</span> Начни раньше - достигни большего.
          </motion.h1>
          <motion.p
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-3xl text-lg text-slate-700 dark:text-slate-300"
          >
            Мы - ученики 11 класса <strong>Lakeview School</strong>. Мы прошли путь через тренировки, школьные турниры,
            победы и поражения. Теперь наша цель - передать этот опыт младшим и показать, что спорт реально меняет жизнь.
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="section-container">
        <p className="eyebrow">Наша история</p>
        <h2 className="section-title">Как мы пришли в спорт и почему не остановились</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="premium-card">
            <h3 className="mb-2 text-lg font-semibold text-emerald-500">Футбол - Алан</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Начал с дворовых игр, затем вошел в школьную команду и стал регулярно участвовать в турнирах.
            </p>
          </Card>
          <Card className="premium-card">
            <h3 className="mb-2 text-lg font-semibold text-orange-500">Баскетбол - Алимжан</h3>
            <p className="text-slate-600 dark:text-slate-300">
              От первых бросков на площадке до соревнований, где важны скорость реакции и хладнокровие.
            </p>
          </Card>
          <Card className="premium-card">
            <h3 className="mb-2 text-lg font-semibold text-sky-500">Волейбол - Диего</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Через тренировки и школьные матчи развил координацию, прыжок и чувство сильной командной поддержки.
            </p>
          </Card>
        </div>
        <Card className="premium-card mt-4">
          <p className="text-slate-700 dark:text-slate-200">
            Мы не раз участвовали в школьных соревнованиях и выигрывали призовые места. Эти победы доказали: дисциплина
            и ежедневная работа дают реальный результат.
          </p>
        </Card>
      </AnimatedSection>

      <AnimatedSection className="section-container">
        <p className="eyebrow">Почему это важно</p>
        <h2 className="section-title">Спорт формирует личность</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card className="premium-card">
            <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Дисциплина и характер</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Ты учишься держать режим, выполнять обещания и идти вперед даже когда тяжело.
            </p>
          </Card>
          <Card className="premium-card">
            <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Уверенность и команда</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Ты становишься увереннее, учишься поддерживать других и работать ради общей цели.
            </p>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container">
        <p className="eyebrow">К кому мы обращаемся</p>
        <h2 className="section-title">К тем, кто только начинает</h2>
        <Card className="premium-card mt-6">
          <p className="text-lg text-slate-700 dark:text-slate-200">
            Мы обращаемся к ученикам начальных классов, к тем, кто только думает начать и к тем, кто сомневается.
          </p>
          <p className="mt-3 text-lg font-semibold text-indigo-600 dark:text-indigo-300">Не жди идеального момента. Начни сейчас.</p>
        </Card>
      </AnimatedSection>

      <AnimatedSection className="section-container">
        <p className="eyebrow">Наше послание</p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Ты можешь больше, чем думаешь",
            "Каждая тренировка делает тебя сильнее",
            "Мы начинали так же, как и ты"
          ].map((quote, index) => (
            <motion.div key={quote} {...reveal} transition={{ duration: 0.6, delay: 0.08 * index }}>
              <Card className="premium-card neon-card h-full">
                <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">«{quote}»</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container pb-24">
        <Card className="premium-card neon-card">
          <p className="eyebrow">Твой следующий шаг</p>
          <h2 className="section-title">Попробуй спорт уже сегодня</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Выбери свой путь: футбол, баскетбол или волейбол. Главное - сделать первый шаг.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/football">
              <Button className="glow-button h-11 rounded-2xl px-6">⚽ Футбол</Button>
            </Link>
            <Link href="/basketball">
              <Button className="glow-button h-11 rounded-2xl px-6">🏀 Баскетбол</Button>
            </Link>
            <Link href="/volleyball">
              <Button className="glow-button h-11 rounded-2xl px-6">🏐 Волейбол</Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
            Lakeview School | 11 класс | Мейрамбек Алимжан, Луканин Алан, Диттади Диего
          </p>
        </Card>
      </AnimatedSection>
    </div>
  );
}
