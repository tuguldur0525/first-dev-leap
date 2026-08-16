'use client';

import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

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

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    trackRef.current?.scrollTo({ left: 0 });
  }, [project?.name]);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
    setActiveImage(index);
  }, []);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track || !track.clientWidth) return;
    setActiveImage(Math.round(track.scrollLeft / track.clientWidth));
  };

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] gap-0 overflow-y-auto p-0 sm:max-w-2xl">
        {/* Swipeable gallery */}
        <div className="relative border-b border-border bg-muted/40">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {images.map((src, i) => (
              <div
                key={src}
                className="aspect-[16/9] max-h-[42vh] w-full shrink-0 snap-center"
              >
                <img
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => scrollTo(Math.max(activeImage - 1, 0))}
                disabled={activeImage === 0}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-opacity hover:text-primary disabled:opacity-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  scrollTo(Math.min(activeImage + 1, images.length - 1))
                }
                disabled={activeImage === images.length - 1}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-opacity hover:text-primary disabled:opacity-0"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => scrollTo(i)}
                    aria-label={`${t['gallery'] ?? 'Gallery'} ${i + 1}`}
                    className={`h-1.5 rounded-full bg-primary transition-all ${
                      i === activeImage ? 'w-6 opacity-100' : 'w-1.5 opacity-40'
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="space-y-5 p-6">
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
