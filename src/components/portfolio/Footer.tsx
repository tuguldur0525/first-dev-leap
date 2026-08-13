import { Github, Linkedin, Mail } from 'lucide-react';
import { usePortfolioContent } from '@/hooks/usePortfolioContent';

export function Footer() {
  const { data, t } = usePortfolioContent();
  const { profile } = data;

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium">
            {profile.name} — <span className="text-muted-foreground">{profile.role}</span>
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t['githubProfileAria'] ?? ''}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t['linkedinProfileAria'] ?? ''}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
