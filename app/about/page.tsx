import { SectionTitle } from "@/components/section-title";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

export default function AboutPage() {
  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="О проекте"
        title="Командный проект о спорте и личностном росте"
        description="Мы показываем, как футбол, баскетбол и волейбол формируют характер, дисциплину и мотивацию в жизни."
      />

      <AnimatedSection className="grid gap-4 md:grid-cols-3">
        <Card className="premium-card">
          <h3 className="mb-2 text-xl font-semibold text-emerald-500">Футбол - Алан</h3>
          <p className="text-slate-600 dark:text-slate-300">Выносливость, командное взаимодействие и ответственность на поле.</p>
        </Card>
        <Card className="premium-card">
          <h3 className="mb-2 text-xl font-semibold text-orange-500">Баскетбол - Алимжан</h3>
          <p className="text-slate-600 dark:text-slate-300">Скорость решений, реакция и игровое мышление под давлением.</p>
        </Card>
        <Card className="premium-card">
          <h3 className="mb-2 text-xl font-semibold text-sky-500">Волейбол - Диего</h3>
          <p className="text-slate-600 dark:text-slate-300">Координация, прыжковая мощь и доверие к партнерам в каждой атаке.</p>
        </Card>
      </AnimatedSection>
    </div>
  );
}
