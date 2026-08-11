import { Download, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Section";

export function Resume() {
  return (
    <section id="resume" className="border-t border-border/70 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="rounded-xl border border-border bg-card p-8 sm:p-12">
            <p className="mono-label">08 / Resume</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Want to know more about my experience and skills?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Download my resume to learn more about my education, projects, technical skills and
              background.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
              >
                <FileText className="h-4 w-4" /> View Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
