"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const fieldClassName =
    "rounded-lg border border-slate-300 bg-white/80 px-4 py-2 text-slate-900 placeholder:text-slate-500 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-indigo-300 dark:focus:ring-indigo-300/35";

  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Контакты"
        title="Связаться с нашей спортивной командой"
        description="У вас тоже спорт с детства? Напишите нам, как тренировки влияют на ваш характер и успех."
      />

      <Card className="max-w-2xl">
        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input required placeholder="Ваше имя" className={fieldClassName} />
          <input type="email" required placeholder="Ваш email" className={fieldClassName} />
          <textarea
            required
            placeholder="Ваше сообщение"
            rows={4}
            className={fieldClassName}
          />
          <Button type="submit" className="w-fit">
            Отправить сообщение
          </Button>
          {sent && <p className="text-sm text-primary">Сообщение отправлено! Спасибо за спортивную энергию и мотивацию.</p>}
        </form>
      </Card>
    </div>
  );
}
