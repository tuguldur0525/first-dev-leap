import { usePortfolioContent } from '@/hooks/usePortfolioContent';
import { Reveal, Section } from './Section';

export function Skills() {
  const { data, t } = usePortfolioContent();
  const { skillGroups } = data;

  return (
    <Section
      id="skills"
      label={t['skillsLabel'] ?? ''}
      title={t['skillsTitle'] ?? ''}
      intro={t['skillsIntro'] ?? ''}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.07}>
            <div className="h-full rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
