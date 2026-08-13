import { motion } from 'motion/react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { usePortfolioContent } from '@/hooks/usePortfolioContent';

export function Hero() {
  const { data, t } = usePortfolioContent();
  const { profile, terminalLines } = data;

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 mask-[radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mono-label">{t['availableForRoles'] ?? ''}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            {t['greetingPrefix'] ?? ''} {profile.name}
          </h1>
          <p className="mt-3 font-mono text-base text-primary sm:text-lg">{profile.role}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.tagline} {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {t['viewProjects'] ?? ''}
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Download className="h-4 w-4" /> {t['downloadResume'] ?? ''}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-transparent px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> {t['contactMe'] ?? ''}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={t['githubProfileAria'] ?? ''}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={t['linkedinProfileAria'] ?? ''}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="font-mono text-xs text-muted-foreground">{profile.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-xl border border-border bg-terminal shadow-2xl shadow-black/20"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
            <span className="ml-2 font-mono text-xs text-terminal-foreground/60">
              ~/portfolio — zsh
            </span>
          </div>
          <div className="space-y-5 p-5 font-mono text-sm leading-relaxed text-terminal-foreground sm:p-6">
            {terminalLines.map((line) => (
              <div key={line.prompt}>
                <p className="text-primary">{line.prompt}</p>
                {line.output.map((out) => (
                  <p key={out} className="text-terminal-foreground/80">
                    {out}
                  </p>
                ))}
              </div>
            ))}
            <p className="text-primary">
              $ <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 w-full max-w-6xl px-5 sm:px-8">
        <a
          href="#about"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowDown className="h-3.5 w-3.5" /> {t['scroll'] ?? ''}
        </a>
      </div>
    </section>
  );
}
