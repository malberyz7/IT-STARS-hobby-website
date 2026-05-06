"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";

const quizQuestions = [
  {
    question: "Что самое важное в хорошей фотографии?",
    options: ["Дорогая камера", "Свет и история кадра", "Случайные фильтры", "Сделать 1000 фото за 2 минуты"],
    answer: "Свет и история кадра"
  },
  {
    question: "Как фотография помогает мне расти?",
    options: ["Развивает терпение и наблюдательность", "Только тратит время", "Полезна только блогерам", "Пользы нет"],
    answer: "Развивает терпение и наблюдательность"
  }
];

const galleryItems = [
  { id: 1, type: "nature", typeLabel: "природа", title: "Утренний свет в парке" },
  { id: 2, type: "people", typeLabel: "люди", title: "Улыбки между уроками" },
  { id: 3, type: "city", typeLabel: "город", title: "Дождливый вечер на улице" },
  { id: 4, type: "nature", typeLabel: "природа", title: "Листья в золотой час" },
  { id: 5, type: "city", typeLabel: "город", title: "Ночная прогулка в неоне" }
];

export function InteractiveHub() {
  const [selected, setSelected] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useState<number | null>(null);
  const [hours, setHours] = useState(4);
  const [weeks, setWeeks] = useState(8);
  const [filter, setFilter] = useState("all");
  const [cinematicMode, setCinematicMode] = useState(true);

  const growthScore = useMemo(() => Math.round(hours * weeks * 1.8), [hours, weeks]);

  const filteredItems = useMemo(() => {
    if (filter === "all") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.type === filter);
  }, [filter]);

  const toggleAnswer = (qIndex: number, value: string) => {
    const next = [...selected];
    next[qIndex] = value;
    setSelected(next);
  };

  const calculateQuiz = () => {
    let score = 0;
    quizQuestions.forEach((q, i) => {
      if (selected[i] === q.answer) {
        score += 1;
      }
    });
    setQuizResult(score);
  };

  return (
    <Tabs
      items={[
        {
          id: "quiz",
          label: "Квиз о хобби",
          content: (
            <Card className="border-none bg-transparent p-0 shadow-none">
              <div className="space-y-6">
                {quizQuestions.map((q, i) => (
                  <motion.div key={q.question} whileHover={{ y: -2 }} className="rounded-2xl border border-white/50 bg-white/70 p-4">
                    <p className="mb-3 font-semibold">{q.question}</p>
                    <div className="grid gap-2">
                      {q.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => toggleAnswer(i, opt)}
                          className={`rounded-xl border px-3 py-2 text-left text-sm transition ${
                            selected[i] === opt
                              ? "border-indigo-400 bg-indigo-50 text-indigo-900"
                              : "border-slate-200 bg-white hover:bg-slate-50"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}
                <Button onClick={calculateQuiz}>Проверить результат</Button>
                {quizResult !== null && (
                  <p className="text-sm font-semibold text-indigo-600">
                    Результат: {quizResult}/{quizQuestions.length}.{" "}
                    {quizResult === quizQuestions.length
                      ? "Поздравляем! Вы мыслите как настоящий визуальный сторителлер."
                      : "Хороший старт. Наблюдательность и практика обязательно приведут к сильным кадрам."}
                  </p>
                )}
              </div>
            </Card>
          )
        },
        {
          id: "calculator",
          label: "Калькулятор практики",
          content: (
            <div className="space-y-4">
              <p className="text-slate-700">
                Хотите понять, как практика влияет на хобби? Введите часы в неделю и посмотрите примерный индекс роста.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm">
                  Часов в неделю
                  <input
                    type="number"
                    min={1}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                  />
                </label>
                <label className="text-sm">
                  Количество недель
                  <input
                    type="number"
                    min={1}
                    value={weeks}
                    onChange={(e) => setWeeks(Number(e.target.value))}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                  />
                </label>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/50 bg-white/70 p-4">
                <div>
                  <p className="text-sm text-slate-600">Примерный индекс роста</p>
                  <p className="text-2xl font-bold text-slate-900">{growthScore}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setCinematicMode((prev) => !prev)}
                  className={`relative h-8 w-14 rounded-full transition ${cinematicMode ? "bg-indigo-500" : "bg-slate-300"}`}
                  aria-label="Переключить кинематографичный режим"
                >
                  <span
                    className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                      cinematicMode ? "left-7" : "left-1"
                    }`}
                  />
                </button>
              </div>
              <p className="flex items-center gap-2 text-sm text-slate-600">
                {cinematicMode ? <Check className="h-4 w-4 text-emerald-500" /> : <Sparkles className="h-4 w-4 text-amber-500" />}
                {cinematicMode
                  ? "Кинематографичный режим включен: фокус на атмосфере и эмоциях."
                  : "Режим практики включен: фокус на технике и повторяемости."}
              </p>
            </div>
          )
        },
        {
          id: "filter",
          label: "Фильтр галереи",
          content: (
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  { key: "all", label: "все" },
                  { key: "nature", label: "природа" },
                  { key: "people", label: "люди" },
                  { key: "city", label: "город" }
                ].map((item) => (
                  <Button
                    key={item.key}
                    variant={filter === item.key ? "default" : "outline"}
                    onClick={() => setFilter(item.key)}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {filteredItems.map((item) => (
                  <motion.div key={item.id} whileHover={{ scale: 1.02 }} className="rounded-2xl border border-white/50 bg-white/70 p-4">
                    <p className="text-sm uppercase tracking-wide text-slate-500">{item.typeLabel}</p>
                    <p className="font-semibold">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        }
      ]}
    />
  );
}
