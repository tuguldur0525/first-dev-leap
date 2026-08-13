import { ExternalLink, Github } from 'lucide-react';
import { usePortfolioContent } from '@/hooks/usePortfolioContent';
import { Reveal, Section } from './Section';

export function Projects() {
  const { data, t } = usePortfolioContent();
  const { projects } = data;

  return (
    <Section
      id="projects"
      label={t['projectsLabel'] ?? ''}
      title={t['projectsTitle'] ?? ''}
      intro={t['projectsIntro'] ?? ''}
    >
      <div className="grid gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <article className="group grid overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 lg:grid-cols-2">
              <div className="relative aspect-16/10 overflow-hidden border-b border-border lg:aspect-auto lg:h-full lg:min-h-95 lg:border-b-0 lg:border-r">
                <img
                  src={project.image}
                  alt={`${project.name} interface preview`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tItem) => (
                    <li
                      key={tItem}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tItem}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-primary">
                  {t['keyFeatures'] ?? ''}
                </h4>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-primary">—</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm transition-colors hover:border-primary/60 hover:text-primary"
                    >
                      <Github className="h-4 w-4" /> {t['github'] ?? ''}
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-4 w-4" /> {t['liveDemo'] ?? ''}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
