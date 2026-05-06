"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bolt, Brain, Camera, HeartHandshake, Lightbulb, Sparkles, Star } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { InteractiveHub } from "@/components/interactive-hub";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const hobbyCards = [
  {
    title: "Эмоции в одном кадре",
    text: "Фотография учит видеть не только форму, но и чувства: в глазах, жестах и свете."
  },
  {
    title: "Дисциплина через практику",
    text: "Чтобы поймать лучший момент, нужно терпение, регулярность и готовность пробовать снова."
  },
  {
    title: "Креативное мышление",
    text: "Каждая съемка - это вопрос: как рассказать историю так, чтобы ее захотелось почувствовать?"
  }
];

const timeline = [
  {
    step: "01",
    title: "Первый интерес",
    text: "Все началось с обычной камеры телефона и большого любопытства к деталям вокруг."
  },
  {
    step: "02",
    title: "Осознанная практика",
    text: "Я изучил композицию, работу со светом и начал регулярно тренировать визуальное мышление."
  },
  {
    step: "03",
    title: "Личностный рост",
    text: "Хобби помогло мне стать увереннее, глубже смотреть на мир и вдохновлять одноклассников."
  }
];

const benefits = [
  {
    icon: Lightbulb,
    title: "Вдохновение каждый день",
    text: "Даже обычная прогулка превращается в поиск необычного ракурса."
  },
  {
    icon: Brain,
    title: "Концентрация и внимание",
    text: "Фотография развивает наблюдательность и учит работать с деталями."
  },
  {
    icon: HeartHandshake,
    title: "Командная работа",
    text: "Совместные проекты учат слушать, поддерживать и создавать общее видение."
  },
  {
    icon: Bolt,
    title: "Уверенная самопрезентация",
    text: "Снимать и показывать свои работы - это путь к уверенности в себе."
  }
];

const gallery = [
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1516031190212-da133013de50?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1400&q=80"
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <section id="hero" className="hero-glow relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.28),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.2),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.25),transparent_45%)]" />
        <div className="section-container flex min-h-screen flex-col justify-center py-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 w-fit rounded-full border border-white/40 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur-xl"
          >
            Школьный конкурс - 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="max-w-4xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-7xl"
          >
            <span className="gradient-text">Моё хобби</span> как источник вдохновения и личностного роста
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 max-w-2xl text-lg text-slate-700"
          >
            А что, если один кадр может изменить мышление? Мое хобби - фотография. Через объектив я учусь видеть
            глубже, чувствовать тоньше и расти быстрее.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="#interactive">
              <Button className="group h-12 rounded-2xl px-7 text-base">
                Пройти квиз вдохновения
                <Sparkles className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
              </Button>
            </Link>
            <Link href="#gallery">
              <Button variant="outline" className="h-12 rounded-2xl px-7 text-base">
                Посмотреть галерею
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <AnimatedSection id="about" className="section-container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">О хобби</p>
            <h2 className="section-title">Почему именно фотография?</h2>
          </div>
          <p className="max-w-xl text-slate-600">
            Это не просто снимки. Это язык, который помогает выражать идеи, сохранять моменты и искать вдохновение в
            каждом дне.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {hobbyCards.map((item, index) => (
            <motion.div key={item.title} whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.25 }}>
              <Card className="premium-card h-full">
                <p className="mb-4 text-sm font-semibold text-indigo-600">0{index + 1}</p>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="story" className="section-container grid items-center gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1400&q=80"
            alt="Фотограф за работой"
            width={1400}
            height={900}
            className="h-full min-h-[340px] w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Моя история</p>
          <h2 className="section-title">Путь от интереса к уверенности</h2>
          <div className="mt-6 space-y-4">
            {timeline.map((item) => (
              <Card key={item.step} className="premium-card">
                <p className="mb-1 text-xs font-semibold tracking-[0.2em] text-slate-500">{item.step}</p>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="benefits" className="section-container grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Польза</p>
          <h2 className="section-title">Как хобби меняет меня каждый день</h2>
          <p className="mt-4 text-slate-600">
            Что вы развиваете через свое хобби прямо сейчас? Фотография помогает мне быть внимательнее, спокойнее и
            смелее в идеях.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((item) => (
            <motion.div key={item.title} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <Card className="premium-card h-full">
                <item.icon className="mb-3 h-5 w-5 text-indigo-500" />
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="gallery" className="section-container">
        <p className="eyebrow">Галерея</p>
        <h2 className="section-title">Моменты, которые вдохновляют</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src, index) => (
            <div key={src} className="group relative overflow-hidden rounded-3xl">
              <Image
                src={src}
                alt={`Фотография из галереи ${index + 1}`}
                width={1200}
                height={900}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="interactive" className="section-container">
        <p className="eyebrow">Интерактив</p>
        <h2 className="section-title">Проверьте свой стиль роста</h2>
        <InteractiveHub />
      </AnimatedSection>

      <AnimatedSection id="contacts" className="section-container grid gap-6 lg:grid-cols-2">
        <Card className="premium-card">
          <p className="eyebrow">Контакты</p>
          <h3 className="text-2xl font-bold text-slate-900">Готовы поделиться своим хобби?</h3>
          <p className="mt-3 text-slate-600">Какое занятие вдохновляет вас становиться лучше каждый день?</p>
          <div className="mt-5 space-y-2 text-slate-700">
            <p>Почта: diego.dittadi@gmail.com</p>
            <p>Локация: Lakeview School Almaty</p>
            <p>Класс: 11</p>
          </div>
        </Card>
        <Card className="premium-card">
          <p className="eyebrow">Авторы проекта</p>
          <ul className="space-y-3 text-lg font-semibold text-slate-900">
            <li>Мейрамбек Алимжан</li>
            <li>Луканин Алан</li>
            <li>Диттади Диего</li>
          </ul>
          <div className="mt-5 rounded-2xl border border-white/50 bg-white/70 p-4 text-sm text-slate-700">
            <p>Название школы - Lakeview School Almaty</p>
            <p>Класс - 11</p>
            <p>Дата - 06.05.2026</p>
          </div>
        </Card>
      </AnimatedSection>

      <section id="footer-anchor" className="pb-10" />
      <div className="floating-dot left-[12%] top-[18%]" />
      <div className="floating-dot right-[16%] top-[34%] delay-1000" />
      <div className="floating-dot left-[22%] bottom-[16%] delay-500" />
      <div className="floating-dot right-[22%] bottom-[20%] delay-700" />
      <Camera className="pointer-events-none absolute right-8 top-[20%] hidden h-7 w-7 text-violet-300/60 lg:block" />
    </div>
  );
}
