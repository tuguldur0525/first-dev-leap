import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

export function WorkExperience() {
  return (
    <Section
      id="experience"
      label="03 / Experience"
      title="Work experience"
      intro="My professional background — from web development to customer-facing roles that shaped my collaboration and communication skills."
    >
      <div className="space-y-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <div className="relative rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary sm:flex">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{job.role}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <p className="mt-1 font-mono text-xs text-primary sm:mt-0">{job.period}</p>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {job.achievements.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
