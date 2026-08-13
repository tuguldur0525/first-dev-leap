import { education } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label="02 / Education" title="Education">
      <div className="space-y-8">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 0.08}>
            <div className="relative rounded-xl border border-border bg-card p-6 sm:p-8">
              <p className="font-mono text-xs text-primary">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.coursework.map((c) => (
                  <li
                    key={c}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {c}
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
