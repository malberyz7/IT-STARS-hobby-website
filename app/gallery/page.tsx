"use client";

import { useMemo, useState } from "react";
import { SafeImage } from "@/components/safe-image";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";

const photos = [
  {
    src: "/images/football-1.png",
    type: "football",
    title: "Футбол: игровой момент"
  },
  {
    src: "/images/football-2.png",
    type: "football",
    title: "Футбол: командная игра"
  },
  {
    src: "/images/football-3.png",
    type: "football",
    title: "Футбол: на тренировке"
  },
  {
    src: "/images/gallery-sport-1.png",
    type: "football",
    title: "Футбол: удар по мячу"
  },
  {
    src: "/images/gallery-sport-2.png",
    type: "football",
    title: "Футбол: игровой эпизод"
  },
  {
    src: "/images/gallery-sport-3.png",
    type: "basketball",
    title: "Баскетбол: владение мячом"
  },
  {
    src: "/images/gallery-sport-4.png",
    type: "basketball",
    title: "Баскетбол: бросок"
  },
  {
    src: "/images/gallery-sport-5.png",
    type: "basketball",
    title: "Баскетбол: матч"
  },
  {
    src: "/images/gallery-sport-6.png",
    type: "football",
    title: "Футбол: командный эпизод"
  },
  {
    src: "/images/basketball-real-1.png",
    type: "basketball",
    title: "Баскетбол: турнирная фотография"
  },
  {
    src: "/images/basketball-real-2.png",
    type: "basketball",
    title: "Баскетбол: тренировка с тренером"
  },
  {
    src: "/images/basketball-real-3.png",
    type: "basketball",
    title: "Баскетбол: игровой коллаж"
  },
  {
    src: "/images/volleyball-real-1.png",
    type: "volleyball",
    title: "Волейбол: прием мяча"
  },
  {
    src: "/images/volleyball-real-2.png",
    type: "volleyball",
    title: "Волейбол: портрет после розыгрыша"
  },
  {
    src: "/images/gallery-volleyball-1.png",
    type: "volleyball",
    title: "Волейбол: прием в защите"
  },
  {
    src: "/images/gallery-volleyball-2.png",
    type: "volleyball",
    title: "Волейбол: подготовка к подаче"
  },
  {
    src: "/images/gallery-volleyball-3.png",
    type: "volleyball",
    title: "Волейбол: атака у сетки"
  },
  {
    src: "/images/gallery-volleyball-4.png",
    type: "volleyball",
    title: "Волейбол: игровой момент"
  },
  {
    src: "/images/team-sport-photo.png",
    type: "football",
    title: "Командное фото на поле"
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const filteredPhotos = useMemo(() => {
    if (filter === "all") {
      return photos;
    }
    return photos.filter((item) => item.type === filter);
  }, [filter]);

  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Галерея"
        title="Командные спортивные моменты"
        description="Живые кадры футбола, баскетбола и волейбола: дисциплина, эмоции и характер в каждом эпизоде."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {[
          { key: "all", label: "Все" },
          { key: "football", label: "Футбол" },
          { key: "basketball", label: "Баскетбол" },
          { key: "volleyball", label: "Волейбол" }
        ].map((item) => (
          <Button key={item.key} variant={filter === item.key ? "default" : "outline"} onClick={() => setFilter(item.key)}>
            {item.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPhotos.map((item, index) => (
          <div key={item.src} className="group relative overflow-hidden rounded-2xl">
            <SafeImage
              src={item.src}
              alt={`${item.title} - изображение ${index + 1}`}
              width={900}
              height={700}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <p className="absolute bottom-3 left-3 rounded-lg bg-black/45 px-2 py-1 text-xs font-medium text-white">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
