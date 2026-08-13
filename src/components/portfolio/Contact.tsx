import { Github, Linkedin, Mail, Send, Phone } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Reveal, Section } from './Section';
import { usePortfolioContent } from '@/hooks/usePortfolioContent';

type Errors = {
  name?: string | undefined,
  email?: string | undefined,
  message?: string | undefined,
};

export function Contact() {
  const { data, t } = usePortfolioContent();
  const { profile } = data;
  const ui = t as unknown as Record<string, string>;
  const contactLabel = ui['contactLabel'] ?? '';
  const contactTitle = ui['contactTitle'] ?? '';
  const contactIntro = ui['contactIntro'] ?? '';
  const linkedinLabel = ui['linkedin'] ?? '';
  const githubLabel = ui['github'] ?? '';
  const formNameLabel = ui['formName'] ?? '';
  const formEmailLabel = ui['formEmail'] ?? '';
  const formMessageLabel = ui['formMessage'] ?? '';
  const formCopyLabel = ui['formCopy'] ?? '';
  const formSentNotice = ui['formSentNotice'] ?? '';
  const formCopiedNotice = ui['formCopiedNotice'] ?? '';
  const errNameRequiredMsg = ui['errNameRequired'] ?? '';
  const errEmailInvalidMsg = ui['errEmailInvalid'] ?? '';
  const errMessageShortMsg = ui['errMessageShort'] ?? '';
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const validate = () => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = errNameRequiredMsg;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = errEmailInvalidMsg;
    if (values.message.trim().length < 10) next.message = errMessageShortMsg;
    return next;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    const subject = `Portfolio enquiry from ${values.name}`;
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body,
    )}`;
    window.location.href = mailto;
    setSent(true);
  };

  const onCopy = async () => {
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    const subject = `Portfolio enquiry from ${values.name}`;
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    try {
      await navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    } catch {
      // ignore clipboard failures silently
    }
  };

  const field =
    'mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary';

  return (
    <Section id="contact" label={contactLabel} title={contactTitle} intro={contactIntro}>
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
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50"
              >
                <Phone className="h-4 w-4 text-primary" /> {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50"
              >
                <Linkedin className="h-4 w-4 text-primary" /> {linkedinLabel}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50"
              >
                <Github className="h-4 w-4 text-primary" /> {githubLabel}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  {formNameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  className={field}
                  value={values.name}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
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
                  {formEmailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={field}
                  value={values.email}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
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
                {formMessageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={field}
                value={values.message}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              />
              {errors.message ? (
                <p id="message-error" className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                <Send className="h-4 w-4" /> Open Mail Client
              </button>

              <button
                type="button"
                onClick={onCopy}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-primary/50"
              >
                {formCopyLabel}
              </button>
            </div>

            <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
              {sent ? formSentNotice : ''}
              {copySuccess ? formCopiedNotice : ''}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
