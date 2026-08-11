import { Github, Star } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

export function GithubActivity() {
  return (
    <Section
      id="github"
      label="07 / Code"
      title="See what I'm building"
      intro="Most of my work lives on GitHub — university projects, personal experiments and the applications featured above."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="h-full rounded-xl border border-border bg-card p-6 sm:p-8">
            <Github className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">@{profile.githubUsername}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Repositories, commit history and works in progress. Update{" "}
              <code className="font-mono text-xs text-primary">githubUsername</code> in the data
              file to point this at your account.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4" /> View GitHub Profile
            </a>
            <img
              src={`https://ghchart.rshah.org/${profile.githubUsername}`}
              alt={`GitHub contribution graph for ${profile.githubUsername}`}
              loading="lazy"
              className="mt-6 w-full rounded-md opacity-80"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="grid h-full gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <li
                key={p.name}
                className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="font-mono text-sm">{p.name}</span>
                </div>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 inline-block font-mono text-xs text-primary hover:underline"
                  >
                    view repository →
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
