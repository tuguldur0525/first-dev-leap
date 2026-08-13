import { usePortfolioContent } from '@/hooks/usePortfolioContent';
import { Reveal, Section } from './Section';

export function Journey() {
  const { data, t } = usePortfolioContent();
  const { journey } = data;

  return (
    <Section
      id="journey"
      label={t['journeyLabel'] ?? ''}
      title={t['journeyTitle'] ?? ''}
      intro={t['journeyIntro'] ?? ''}
    >
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
        {journey.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 0.07}>
              <span className="absolute -left-1.25 mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="font-mono text-xs text-primary">{step.period}</p>
              <h3 className="mt-1.5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
