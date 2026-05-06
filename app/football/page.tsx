"use client";

import { useState } from "react";
import { SafeImage } from "@/components/safe-image";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const footballGallery = [
  "/images/football-1.png",
  "/images/football-2.png",
  "/images/football-3.png"
];

export default function FootballPage() {
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Футбол - Алан"
        title="Футбол научил меня играть не только ногами, но и характером"
        description="С детства футбол стал для меня школой дисциплины, уважения к команде и уверенности в сложных ситуациях."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="premium-card">
          <h3 className="mb-2 text-lg font-semibold text-emerald-600">Почему я выбрал футбол</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Футбол дает ощущение ритма игры, ответственности за каждого партнера и настоящей соревновательной энергии.
          </p>
        </Card>
        <Card className="premium-card">
          <h3 className="mb-2 text-lg font-semibold text-emerald-600">Мой путь</h3>
          <p className="text-slate-600 dark:text-slate-300">
            От дворовых матчей до школьных турниров - каждый этап добавлял уверенности, выносливости и тактического мышления.
          </p>
        </Card>
        <Card className="premium-card">
          <h3 className="mb-2 text-lg font-semibold text-emerald-600">Чему научил футбол</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Командная работа, дисциплина на тренировках, контроль эмоций и способность бороться до финального свистка.
          </p>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">Фото футбола</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {footballGallery.map((src, index) => (
            <div key={src} className="group overflow-hidden rounded-2xl">
              <SafeImage
                src={src}
                alt={`Футбол - момент ${index + 1}`}
                width={1200}
                height={800}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <Card className="premium-card mt-8 max-w-2xl">
        <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">Мини-квиз про футбол</h3>
        <p className="mb-4 text-slate-600 dark:text-slate-300">Что в футболе важнее всего для командного успеха?</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => setAnswer("skills")}>
            Только техника
          </Button>
          <Button variant="outline" onClick={() => setAnswer("team")}>
            Командная игра и дисциплина
          </Button>
          <Button variant="outline" onClick={() => setAnswer("luck")}>
            Только удача
          </Button>
        </div>
        {answer && (
          <p className="mt-4 font-semibold text-indigo-600 dark:text-indigo-300">
            {answer === "team"
              ? "Верно! Именно командная структура и дисциплина чаще всего решают исход матча."
              : "Интересный вариант, но в долгой дистанции футбол выигрывается командной дисциплиной."}
          </p>
        )}
      </Card>
    </div>
  );
}
