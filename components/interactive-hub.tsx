"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";

const quizQuestions = [
  {
    question: "Как вам комфортнее достигать результата?",
    options: ["Через тактику и командные комбинации", "Через быстрые решения и драйв", "Через координацию и чувство партнера"],
    answer: "Через тактику и командные комбинации"
  },
  {
    question: "Какой тип нагрузки вам ближе?",
    options: ["Выносливость и длинная игра", "Скорость и реакция", "Прыжки и резкие перемещения"],
    answer: "Скорость и реакция"
  }
];

const galleryItems = [
  { id: 1, type: "football", typeLabel: "футбол", title: "Пас в одно касание и рывок к воротам" },
  { id: 2, type: "basketball", typeLabel: "баскетбол", title: "Быстрый прорыв и точный бросок" },
  { id: 3, type: "volleyball", typeLabel: "волейбол", title: "Идеальный прием и мощная атака" },
  { id: 4, type: "football", typeLabel: "футбол", title: "Командный прессинг в центре поля" },
  { id: 5, type: "volleyball", typeLabel: "волейбол", title: "Блок и мгновенный переход в нападение" }
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

  const scrollToQuiz = () => {
    document.getElementById("quiz-start")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="space-y-5">
      <Button onClick={scrollToQuiz} className="h-11 rounded-2xl px-6 text-base">
        Пройти тест
      </Button>
      <Tabs
        items={[
        {
          id: "quiz",
          label: "Спорт-квиз",
          content: (
            <Card className="border-none bg-transparent p-0 shadow-none">
              <div id="quiz-start" className="space-y-7">
                {quizQuestions.map((q, i) => (
                  <motion.div
                    key={q.question}
                    whileHover={{ y: -2 }}
                    className="rounded-2xl border border-white/50 bg-white/70 p-5 dark:border-slate-700 dark:bg-slate-800/70"
                  >
                    <p className="mb-3 text-base font-semibold dark:text-slate-100">{q.question}</p>
                    <div className="grid gap-2.5">
                      {q.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => toggleAnswer(i, opt)}
                          className={`rounded-xl border px-4 py-3 text-left text-base transition ${
                            selected[i] === opt
                              ? "border-indigo-400 bg-indigo-50 text-indigo-900"
                              : "border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}
                <Button onClick={calculateQuiz} className="h-11 rounded-2xl px-6 text-base">
                  Узнать результат
                </Button>
                {quizResult !== null && (
                  <p className="text-base font-semibold text-indigo-600 dark:text-indigo-300">
                    Результат: {quizResult}/{quizQuestions.length}.{" "}
                    {quizResult === quizQuestions.length
                      ? "Вам отлично подходит футбол: стратегическое мышление и командная дисциплина на высоте."
                      : quizResult === 1
                        ? "Вам близок баскетбол: скорость реакции и гибкость решений."
                        : "Вам подходит волейбол: координация, командность и ритм движения."}
                  </p>
                )}
              </div>
            </Card>
          )
        },
        {
          id: "calculator",
          label: "Калькулятор тренировок",
          content: (
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Хотите понять, как тренировки влияют на прогресс? Введите часы в неделю и посмотрите индекс роста.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm dark:text-slate-200">
                  Часов в неделю
                  <input
                    type="number"
                    min={1}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                  />
                </label>
                <label className="text-sm dark:text-slate-200">
                  Количество недель
                  <input
                    type="number"
                    min={1}
                    value={weeks}
                    onChange={(e) => setWeeks(Number(e.target.value))}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                  />
                </label>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/50 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Примерный индекс роста</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{growthScore}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setCinematicMode((prev) => !prev)}
                  className={`relative h-8 w-14 rounded-full transition ${
                    cinematicMode ? "bg-indigo-500" : "bg-slate-300 dark:bg-slate-600"
                  }`}
                  aria-label="Переключить кинематографичный режим"
                >
                  <span
                    className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                      cinematicMode ? "left-7" : "left-1"
                    }`}
                  />
                </button>
              </div>
              <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                {cinematicMode ? <Check className="h-4 w-4 text-emerald-500" /> : <Sparkles className="h-4 w-4 text-amber-500" />}
                {cinematicMode
                  ? "Соревновательный режим включен: фокус на результате и темпе."
                  : "Тренировочный режим включен: фокус на технике и стабильности."}
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
                  { key: "football", label: "футбол" },
                  { key: "basketball", label: "баскетбол" },
                  { key: "volleyball", label: "волейбол" }
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
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl border border-white/50 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-800/70"
                  >
                    <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.typeLabel}</p>
                    <p className="font-semibold dark:text-slate-100">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        }
        ]}
      />
    </div>
  );
}
