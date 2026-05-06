"use client";

import { useMemo, useState } from "react";
import { SafeImage } from "@/components/safe-image";
import { SectionTitle } from "@/components/section-title";
import { Card } from "@/components/ui/card";

const basketballGallery = [
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&w=1200&q=80"
];

export default function BasketballPage() {
  const [intensity, setIntensity] = useState(6);
  const [focus, setFocus] = useState(7);

  const iqScore = useMemo(() => Math.round((intensity * 1.4 + focus * 1.6) * 7), [intensity, focus]);

  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Баскетбол - Алимжан"
        title="Баскетбол научил меня думать быстрее и действовать смелее"
        description="Для меня баскетбол - это игра скорости, решений под давлением и постоянного личного роста."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="premium-card">
          <h3 className="mb-2 text-lg font-semibold text-orange-500">Личная история</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Я начал с простых бросков на школьной площадке, а позже баскетбол стал моим способом развивать характер.
          </p>
        </Card>
        <Card className="premium-card">
          <h3 className="mb-2 text-lg font-semibold text-orange-500">Почему баскетбол</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Эта игра сочетает атлетику, тактику и креативность. Каждый эпизод требует мгновенного анализа ситуации.
          </p>
        </Card>
        <Card className="premium-card">
          <h3 className="mb-2 text-lg font-semibold text-orange-500">Развитие навыков</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Реакция, скорость принятия решений, координация и устойчивость к стрессу - ключевые навыки, которые я развил.
          </p>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">Галерея баскетбола</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {basketballGallery.map((src, index) => (
            <div key={src} className="group overflow-hidden rounded-2xl">
              <SafeImage
                src={src}
                alt={`Баскетбол - момент ${index + 1}`}
                width={1200}
                height={800}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <Card className="premium-card mt-8 max-w-2xl">
        <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">Интерактив: индекс игрового мышления</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-slate-700 dark:text-slate-300">
            Интенсивность тренировок: {intensity}
            <input
              type="range"
              min={1}
              max={10}
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="mt-2 w-full"
            />
          </label>
          <label className="text-sm text-slate-700 dark:text-slate-300">
            Концентрация в игре: {focus}
            <input
              type="range"
              min={1}
              max={10}
              value={focus}
              onChange={(e) => setFocus(Number(e.target.value))}
              className="mt-2 w-full"
            />
          </label>
        </div>
        <p className="mt-4 font-semibold text-indigo-600 dark:text-indigo-300">Ваш индекс баскетбольного IQ: {iqScore}</p>
      </Card>
    </div>
  );
}
