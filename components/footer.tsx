export function Footer() {
  return (
    <footer className="border-t border-white/30 bg-white/50 backdrop-blur-xl">
      <div className="section-container py-8 text-sm text-slate-600">
        <p className="mb-2 font-semibold text-slate-900">
          Проект: «Моё хобби как источник вдохновения и личностного роста»
        </p>
        <p>Авторы: Мейрамбек Алимжан, Луканин Алан, Диттади Диего</p>
        <p>Название школы: Lakeview School Almaty | Класс: 11 | Дата: 06.05.2026</p>
        <p className="mt-2 font-medium text-slate-700">Сайт создан с использованием ИИ</p>
        <p className="mt-2">
          Визуальные материалы:{" "}
          <a className="text-indigo-600 underline" href="https://unsplash.com" target="_blank" rel="noreferrer">
            Unsplash
          </a>
        </p>
      </div>
    </footer>
  );
}
