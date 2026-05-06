"use client";

import { useState } from "react";
import { SafeImage } from "@/components/safe-image";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const volleyballGallery = [
  { src: "/images/volleyball-page-1.png", objectPosition: "center 24%" },
  { src: "/images/volleyball-page-2.png", objectPosition: "center 34%" }
];

export default function VolleyballPage() {
  const [mode, setMode] = useState<"coordination" | "teamwork">("coordination");

  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Волейбол - Диего"
        title="Волейбол дал мне координацию, ритм и уверенность в команде"
        description="Это спорт, где каждая секунда зависит от точности движений и доверия между игроками."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="premium-card">
          <h3 className="mb-2 text-lg font-semibold text-sky-500">Моя история</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Волейбол привлек меня динамикой и атмосферой взаимной поддержки. Здесь важен каждый касание и каждое решение.
          </p>
        </Card>
        <Card className="premium-card">
          <h3 className="mb-2 text-lg font-semibold text-sky-500">Почему волейбол</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Я люблю скорость розыгрышей и необходимость мгновенно перестраиваться между защитой и атакой.
          </p>
        </Card>
        <Card className="premium-card">
          <h3 className="mb-2 text-lg font-semibold text-sky-500">Что развивает</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Прыжки, координацию, чувство дистанции, командность и спокойствие в решающих мячах.
          </p>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">Галерея волейбола</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {volleyballGallery.map((item, index) => (
            <div key={item.src} className="group overflow-hidden rounded-2xl">
              <SafeImage
                src={item.src}
                alt={`Волейбол - момент ${index + 1}`}
                width={1200}
                height={800}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: item.objectPosition }}
              />
            </div>
          ))}
        </div>
      </div>

      <Card className="premium-card mt-8 max-w-2xl">
        <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">Интерактивный режим волейбола</h3>
        <p className="mb-4 text-slate-600 dark:text-slate-300">Выберите, что хотите прокачать в первую очередь:</p>
        <div className="flex flex-wrap gap-2">
          <Button variant={mode === "coordination" ? "default" : "outline"} onClick={() => setMode("coordination")}>
            Координация
          </Button>
          <Button variant={mode === "teamwork" ? "default" : "outline"} onClick={() => setMode("teamwork")}>
            Командность
          </Button>
        </div>
        <p className="mt-4 font-semibold text-indigo-600 dark:text-indigo-300">
          {mode === "coordination"
            ? "Фокус тренировки: работа ног, скорость перемещения и контроль прыжка."
            : "Фокус тренировки: коммуникация, взаимостраховка и синхронные комбинации."}
        </p>
      </Card>
    </div>
  );
}
