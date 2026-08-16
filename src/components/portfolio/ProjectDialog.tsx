'use client';

import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Project } from '@/data/portfolio';

export function ProjectDialog({
  project,
  t,
  open,
  onOpenChange,
}: {
  project: Project | null;
  t: Record<string, string>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const images = project
    ? project.gallery?.length
      ? project.gallery
      : [project.image]
    : [];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project?.name]);

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] gap-0 overflow-y-auto p-0 sm:max-w-3xl">
        {/* Gallery */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted">
          <motion.img
            key={images[activeImage]}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            src={images[activeImage]}
            alt={`${project.name} screenshot ${activeImage + 1}`}
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        {images.length > 1 ? (
          <div className="flex gap-2 border-b border-border p-3">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(i)}
                aria-label={`${t['gallery'] ?? 'Gallery'} ${i + 1}`}
                className={`h-14 w-24 shrink-0 overflow-hidden rounded-md border transition-colors ${
                  i === activeImage
                    ? 'border-primary'
                    : 'border-border opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        ) : null}

        <div className="space-y-6 p-6">
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="text-xl">{project.name}</DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          {/* Tech */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              {t['techStack'] ?? 'Tech stack'}
            </h4>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              {t['allFeatures'] ?? 'What it does'}
            </h4>
            <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-primary">—</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Github className="h-3.5 w-3.5" />
                {t['github'] ?? 'GitHub'}
              </a>
            ) : null}

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {t['liveDemo'] ?? 'Live Demo'}
              </a>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
