import { InteractiveHub } from "@/components/interactive-hub";
import { SectionTitle } from "@/components/section-title";

export default function InteractivePage() {
  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Интерактив"
        title="Попробуйте сами"
        description="Здесь никакой скучной статики: пройдите квиз, посчитайте прогресс и отфильтруйте мини-галерею."
      />
      <InteractiveHub />
    </div>
  );
}
