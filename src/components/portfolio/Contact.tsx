import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email.";
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    return next;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary";

  return (
    <Section
      id="contact"
      label="09 / Contact"
      title="Let's build something together"
      intro="I'm currently looking for junior developer opportunities, internships and projects where I can contribute, learn and grow."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50"
              >
                <Mail className="h-4 w-4 text-primary" /> {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50"
              >
                <Linkedin className="h-4 w-4 text-primary" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50"
              >
                <Github className="h-4 w-4 text-primary" /> GitHub
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} noValidate className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className={field}
                  value={values.name}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                />
                {errors.name ? (
                  <p id="name-error" className="mt-1.5 text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={field}
                  value={values.email}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                />
                {errors.email ? (
                  <p id="email-error" className="mt-1.5 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={field}
                value={values.message}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              />
              {errors.message ? (
                <p id="message-error" className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
              {sent ? "Your email client should now be open with the message ready to send." : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
