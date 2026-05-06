import { SectionTitle } from "@/components/section-title";
import { Card } from "@/components/ui/card";

const timeline = [
  {
    year: "2022",
    title: "Первые секции и турниры",
    text: "Мы начали заниматься спортом в школьных секциях и полюбили атмосферу команды и движения к общей цели."
  },
  {
    year: "2023",
    title: "Режим и дисциплина",
    text: "Тренировки стали регулярными: мы научились планировать время, совмещать учебу и спорт."
  },
  {
    year: "2024-2026",
    title: "Лидерство и командный рост",
    text: "Спорт дал нам уверенность, взаимную поддержку и понимание, что успех рождается в системной работе."
  }
];

export default function StoryPage() {
  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Наша история"
        title="Как спорт стал нашей жизненной школой"
        description="Футбол, баскетбол и волейбол помогли нам вырасти не только как спортсменам, но и как личности."
      />

      <div className="space-y-4">
        {timeline.map((item) => (
          <Card key={item.year} className="premium-card relative pl-8">
            <div className="absolute left-3 top-8 h-3 w-3 rounded-full bg-primary" />
            <p className="text-sm font-semibold text-primary dark:text-indigo-300">{item.year}</p>
            <h3 className="mb-1 text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-300">{item.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
