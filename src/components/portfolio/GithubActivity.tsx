import { Github } from 'lucide-react';
import { usePortfolioContent } from '@/hooks/usePortfolioContent';
import { Reveal, Section } from './Section';

export function GithubActivity() {
  const { data, t } = usePortfolioContent();
  const { profile } = data;

  return (
    <Section
      id="github"
      label={t['githubActivityLabel'] ?? ''}
      title={t['githubActivityTitle'] ?? ''}
      intro={t['githubActivityIntro'] ?? ''}
    >
      <div className="grid gap-5">
        <Reveal>
          <div className="h-full rounded-xl border border-border bg-card p-4 sm:p-6">
            <Github className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">@{profile.githubUsername}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t['githubBlurbPrefix'] ?? ''}{' '}
              <code className="font-mono text-xs text-primary">githubUsername</code>{' '}
              {t['githubBlurbSuffix'] ?? ''}
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4" /> {t['viewGithubProfile'] ?? ''}
            </a>
            <div className="mt-6 overflow-hidden rounded-md">
              <img
                src={`https://ghchart.rshah.org/${profile.githubUsername}`}
                alt={`GitHub contribution graph for ${profile.githubUsername}`}
                loading="lazy"
                className="mx-auto w-full max-w-[940px] rounded-md opacity-80"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
