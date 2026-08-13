import { Check } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';
import { Reveal, Section } from './Section';
import { usePortfolioContent } from '@/hooks/usePortfolioContent';

export function About() {
  const { data, t } = usePortfolioContent();
  const { about, profile } = data;

  return (
    <Section id="about" label={t['aboutLabel'] ?? ''} title={t['aboutTitle'] ?? ''}>
      <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-xl border border-border" />
            <img
              src={profileImg}
              alt={`Portrait of ${profile.name}`}
              width={768}
              height={960}
              loading="lazy"
              className="aspect-4/5 w-full rounded-lg object-cover"
            />
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              [Tuguldur Turmunkh, 2025]
            </p>
          </div>
        </Reveal>

        <div>
          {about.paragraphs.map((p, i) => (
            <Reveal key={p} delay={i * 0.08}>
              <p className="mb-5 text-base leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
