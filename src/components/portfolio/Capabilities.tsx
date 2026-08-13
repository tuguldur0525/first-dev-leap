import { GraduationCap, Layers, Layout, Puzzle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { usePortfolioContent } from '@/hooks/usePortfolioContent';
import { Reveal, Section } from './Section';

const icons: Record<string, LucideIcon> = { Layout, Layers, Puzzle, GraduationCap };

export function Capabilities() {
  const { data, t } = usePortfolioContent();
  const { capabilities } = data;

  return (
    <Section
      id="capabilities"
      label={t['capabilitiesLabel'] ?? ''}
      title={t['capabilitiesTitle'] ?? ''}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((cap, i) => {
          const Icon = icons[cap.icon] ?? Layout;
          return (
            <Reveal key={cap.title} delay={i * 0.07}>
              <div className="h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-base font-semibold">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
