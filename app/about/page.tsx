import { SectionTitle } from "@/components/section-title";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

export default function AboutPage() {
  return (
    <div className="section-container">
      <SectionTitle
        eyebrow="О моем хобби"
        title="Фотография — мой любимый способ собирать истории"
        description="Фотография помогает останавливать моменты, передавать эмоции и замечать красоту в обычных вещах."
      />

      <AnimatedSection className="grid gap-4 md:grid-cols-3">
        <Card>
          <h3 className="mb-2 text-xl font-semibold">Почему именно это хобби?</h3>
          <p className="text-slate-600">
            Мне нравится, что один кадр может сказать то, что сложно объяснить сотней слов. И да, камера никогда не
            говорит: «Я занята».
          </p>
        </Card>
        <Card>
          <h3 className="mb-2 text-xl font-semibold">На чем я фокусируюсь</h3>
          <p className="text-slate-600">Природа, городские сцены и искренние эмоции людей вокруг.</p>
        </Card>
        <Card>
          <h3 className="mb-2 text-xl font-semibold">Моя цель</h3>
          <p className="text-slate-600">
            Вдохновлять одноклассников замечать красоту, развивать креативность и сохранять свой путь роста.
          </p>
        </Card>
      </AnimatedSection>
    </div>
  );
}
