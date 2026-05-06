type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-indigo-300">{eyebrow}</p>
      <h2 className="mb-3 text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-4xl">{title}</h2>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
