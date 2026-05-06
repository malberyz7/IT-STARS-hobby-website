import { AnimatedSection } from "@/components/animated-section";
import { SectionTitle } from "@/components/section-title";
import { Card } from "@/components/ui/card";

export default function ImpactPage() {
  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Польза и влияние"
        title="Как спорт помогает нам и нашей команде"
        description="Футбол, баскетбол и волейбол развивают дисциплину, мотивацию и устойчивость к трудностям."
      />

      <AnimatedSection className="grid gap-4 md:grid-cols-2">
        <Card className="premium-card">
          <h3 className="mb-2 text-xl font-semibold">Для меня</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            <li>- Развивает характер и устойчивость к нагрузкам</li>
            <li>- Формирует дисциплину через системные тренировки</li>
            <li>- Повышает уверенность и самоорганизацию</li>
          </ul>
        </Card>
        <Card className="premium-card">
          <h3 className="mb-2 text-xl font-semibold">Для одноклассников</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            <li>- Учит работать в команде и поддерживать друг друга</li>
            <li>- Повышает мотивацию к школьным и спортивным целям</li>
            <li>- Формирует здоровую соревновательную культуру</li>
          </ul>
        </Card>
      </AnimatedSection>

      <AnimatedSection className="mt-6">
        <Card className="premium-card bg-secondary dark:bg-slate-800/70">
          <p className="text-secondary-foreground dark:text-slate-200">
            Вопрос к вам: какой спорт помогает вам становиться сильнее не только физически, но и внутренне?
          </p>
        </Card>
      </AnimatedSection>
    </div>
  );
}
