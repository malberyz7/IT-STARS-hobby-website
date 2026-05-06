import { AnimatedSection } from "@/components/animated-section";
import { SectionTitle } from "@/components/section-title";
import { Card } from "@/components/ui/card";

export default function ImpactPage() {
  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="Польза и влияние"
        title="Как фотография помогает мне и другим"
        description="Это хобби развивает практические навыки, поддерживает эмоциональный баланс и укрепляет уверенность."
      />

      <AnimatedSection className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="mb-2 text-xl font-semibold">Для меня</h3>
          <ul className="space-y-2 text-slate-600">
            <li>- Развивает терпение и внимание к деталям</li>
            <li>- Формирует дисциплину через регулярную практику</li>
            <li>- Дает уверенность выражать идеи визуально</li>
          </ul>
        </Card>
        <Card>
          <h3 className="mb-2 text-xl font-semibold">Для одноклассников</h3>
          <ul className="space-y-2 text-slate-600">
            <li>- Помогает в презентациях и школьных проектах</li>
            <li>- Учит работать в команде в медиа-активностях</li>
            <li>- Делает школьные воспоминания ярче и ценнее</li>
          </ul>
        </Card>
      </AnimatedSection>

      <AnimatedSection className="mt-6">
        <Card className="bg-secondary">
          <p className="text-secondary-foreground">
            Небольшой вопрос: когда вы в последний раз останавливались и по-настоящему смотрели вокруг? Фотография учит этому каждый день.
          </p>
        </Card>
      </AnimatedSection>
    </div>
  );
}
