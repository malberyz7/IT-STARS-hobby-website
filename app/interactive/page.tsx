import { InteractiveHub } from "@/components/interactive-hub";
import { SectionTitle } from "@/components/section-title";

export default function InteractivePage() {
  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Интерактив"
        title="Определите свой спортивный стиль"
        description="Пройдите квиз, посчитайте тренировочный индекс и посмотрите спортивные сценарии через фильтр."
      />
      <InteractiveHub />
    </div>
  );
}
