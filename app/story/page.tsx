import { SectionTitle } from "@/components/section-title";
import { Card } from "@/components/ui/card";

const timeline = [
  {
    year: "2022",
    title: "Все началось с камеры телефона",
    text: "На школьной поездке я сделал несколько случайных снимков и понял, что люблю ловить моменты, которые другие не замечают."
  },
  {
    year: "2023",
    title: "От случайных кадров к осознанной съемке",
    text: "Я изучил основы композиции, света и обработки по обучающим видео и, конечно, через постоянную практику."
  },
  {
    year: "2024-2026",
    title: "Делиться и вдохновлять",
    text: "Я начал помогать одноклассникам в фотопроектах и создавать визуальные истории для школьных мероприятий."
  }
];

export default function StoryPage() {
  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Моя история"
        title="Как я начал и почему не остановился"
        description="Любое хобби начинается с маленького шага. У меня все началось с любопытства и переросло в настоящее увлечение."
      />

      <div className="space-y-4">
        {timeline.map((item) => (
          <Card key={item.year} className="relative pl-8">
            <div className="absolute left-3 top-8 h-3 w-3 rounded-full bg-primary" />
            <p className="text-sm font-semibold text-primary">{item.year}</p>
            <h3 className="mb-1 text-xl font-semibold">{item.title}</h3>
            <p className="text-slate-600">{item.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
