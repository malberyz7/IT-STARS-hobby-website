type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
