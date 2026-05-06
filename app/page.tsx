import Link from "next/link";
import { Camera, Sparkles, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-cyan-100">
        <div className="section-container grid items-center gap-10 py-20 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary shadow">
              Школьный конкурс 2026
            </p>
            <h1 className="mb-5 text-4xl font-black leading-tight sm:text-5xl">
              Мое хобби как источник вдохновения и личностного роста
            </h1>
            <p className="mb-8 text-slate-700">
              Мое хобби — <strong>фотография</strong>. Все началось как «просто делать снимки», а теперь это помогает мне смотреть
              на мир внимательнее, терпеливее и креативнее. Неплохо для камеры, правда?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/about">
                <Button>О моем хобби</Button>
              </Link>
              <Link href="/interactive">
                <Button variant="outline">Попробовать интерактив</Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="glass animate-float">
              <div className="flex items-center gap-3">
                <Camera className="text-primary" />
                <div>
                  <p className="font-semibold">Творческий взгляд</p>
                  <p className="text-sm text-slate-600">Я замечаю детали, которые часто ускользают от других.</p>
                </div>
              </div>
            </Card>
            <Card className="glass">
              <div className="flex items-center gap-3">
                <Sparkles className="text-primary" />
                <div>
                  <p className="font-semibold">Вдохновение каждый день</p>
                  <p className="text-sm text-slate-600">Каждая прогулка превращается в мини-приключение.</p>
                </div>
              </div>
            </Card>
            <Card className="glass">
              <div className="flex items-center gap-3">
                <Trophy className="text-primary" />
                <div>
                  <p className="font-semibold">Личностный рост</p>
                  <p className="text-sm text-slate-600">Уровень уверенности: заметно выше, чем раньше.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-container">
        <h2 className="mb-6 text-3xl font-bold">Что вы найдете на этом сайте</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Личную историю о том, как все началось",
            "Реальную пользу для меня и моих одноклассников",
            "Интерактив: квиз, калькулятор и фильтры"
          ].map((item) => (
            <Card key={item}>
              <p className="font-medium">{item}</p>
            </Card>
          ))}
        </div>
        <Card className="mt-6 border-primary/20 bg-blue-50">
          <p className="font-semibold text-slate-800">Авторы проекта:</p>
          <p className="text-slate-700">Мейрамбек Алимжан, Луканин Алан, Диттади Диего</p>
          <p className="text-sm text-slate-600">
            Школа: ГБОУ «Название школы» | Класс: 10-А | Дата: 6 мая 2026
          </p>
        </Card>
      </AnimatedSection>
    </>
  );
}
