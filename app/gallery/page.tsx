"use client";

import { useMemo, useState } from "react";
import { SafeImage } from "@/components/safe-image";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    type: "football",
    title: "Футбол: матчевый темп"
  },
  {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    type: "basketball",
    title: "Баскетбол: игра под кольцом"
  },
  {
    src: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&w=1200&q=80",
    type: "volleyball",
    title: "Волейбол: командный блок"
  },
  {
    src: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1200&q=80",
    type: "football",
    title: "Футбол: борьба за мяч"
  },
  {
    src: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80",
    type: "basketball",
    title: "Баскетбол: концентрация и точность"
  },
  {
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80",
    type: "volleyball",
    title: "Волейбол: синхронная атака"
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
