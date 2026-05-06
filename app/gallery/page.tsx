import { SectionTitle } from "@/components/section-title";
import { SafeImage } from "@/components/safe-image";

const photos = [
  "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
];

export default function GalleryPage() {
  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Галерея"
        title="Моменты, которые я поймал в кадр"
        description="Визуальная коллекция сцен, которые меня вдохновляют. Да, иногда я действительно жду идеальный свет по 15 минут."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((src, index) => (
          <div key={src} className="group relative overflow-hidden rounded-2xl">
            <SafeImage
              src={src}
              alt={`Фотография хобби ${index + 1}`}
              width={900}
              height={700}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-xl font-semibold">Видео-вдохновение</h3>
        <div className="aspect-video overflow-hidden rounded-2xl">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/7ZVyNjKSr0M"
            title="Видео о вдохновении в фотографии"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
