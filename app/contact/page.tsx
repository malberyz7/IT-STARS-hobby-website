"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Контакты"
        title="Давайте познакомимся"
        description="У вас тоже есть хобби, которое изменило вашу жизнь? Напишите мне!"
      />

      <Card className="max-w-2xl">
        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input required placeholder="Ваше имя" className="rounded-lg border border-slate-300 px-4 py-2" />
          <input type="email" required placeholder="Ваш email" className="rounded-lg border border-slate-300 px-4 py-2" />
          <textarea
            required
            placeholder="Ваше сообщение"
            rows={4}
            className="rounded-lg border border-slate-300 px-4 py-2"
          />
          <Button type="submit" className="w-fit">
            Отправить сообщение
          </Button>
          {sent && <p className="text-sm text-primary">Сообщение отправлено! (Демо-режим, но мотивация самая настоящая.)</p>}
        </form>
      </Card>
    </div>
  );
}
