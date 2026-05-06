export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-container py-8 text-sm text-slate-600">
        <p className="mb-2 font-semibold text-slate-700">Проект: «Мое хобби как источник вдохновения и личностного роста»</p>
        <p>Авторы: Мейрамбек Алимжан, Луканин Алан, Диттади Диего</p>
        <p>Школа: ГБОУ «Название школы» | Класс: 10-А | Дата создания: 6 мая 2026</p>
        <p className="mt-2">
          Примечание об ИИ: сайт разработан с использованием AI-инструментов для помощи в программировании и дизайне.
        </p>
        <p className="mt-2">
          Источники медиа: изображения —{" "}
          <a className="text-primary underline" href="https://unsplash.com" target="_blank" rel="noreferrer">
            Unsplash
          </a>
          ; видео —{" "}
          <a className="text-primary underline" href="https://www.youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
