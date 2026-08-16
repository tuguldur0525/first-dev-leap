'use client';

import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

import { usePortfolioContent } from '@/hooks/usePortfolioContent';
import { Reveal, Section } from './Section';
import { Project } from '@/data/portfolio';
import { ProjectDialog } from './ProjectDialog';

export function Projects() {
  const { data, t } = usePortfolioContent();
  const { projects } = data;

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);

  const updateActiveIndex = () => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const cards = Array.from(
      container.querySelectorAll('[data-project-card]')
    );

    if (!cards.length) return;

    const containerCenter =
      container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const element = card as HTMLElement;

      const cardCenter =
        element.offsetLeft + element.offsetWidth / 2;

      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToProject = (index: number) => {
    if (!carouselRef.current) return;

    const cards = carouselRef.current.querySelectorAll(
      '[data-project-card]'
    );

    const card = cards[index] as HTMLElement | undefined;

    if (!card) return;

    const container = carouselRef.current;

    const target =
      card.offsetLeft -
      container.clientWidth / 2 +
      card.offsetWidth / 2;

    container.scrollTo({
      left: target,
      behavior: 'smooth',
    });

    setActiveIndex(index);
  };

  const scrollNext = () => {
    scrollToProject(
      Math.min(activeIndex + 1, projects.length - 1)
    );
  };

  const scrollPrevious = () => {
    scrollToProject(Math.max(activeIndex - 1, 0));
  };

  return (
    <Section
      id="projects"
      label={t['projectsLabel'] ?? ''}
      title={t['projectsTitle'] ?? ''}
      intro={t['projectsIntro'] ?? ''}
    >
      <div className="relative">
        {/* Top controls */}
        <div className="mb-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(projects.length).padStart(2, '0')}
          </motion.div>

          <div className="flex gap-2">
            <motion.button
              type="button"
              onClick={scrollPrevious}
              disabled={activeIndex === 0}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous project"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-card
                transition-colors
                hover:border-primary/60
                hover:text-primary
                disabled:pointer-events-none
                disabled:opacity-30
              "
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>

            <motion.button
              type="button"
              onClick={scrollNext}
              disabled={activeIndex === projects.length - 1}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next project"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-border
                bg-card
                transition-colors
                hover:border-primary/60
                hover:text-primary
                disabled:pointer-events-none
                disabled:opacity-30
              "
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          onScroll={updateActiveIndex}
          className="
            flex
            cursor-grab
            gap-5
            overflow-x-auto
            overscroll-x-contain
            pb-8
            active:cursor-grabbing
            snap-x
            snap-mandatory
            scroll-smooth
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {/* Left spacing */}
          <div className="shrink-0 w-[calc((100vw-100%)/2)]" />

          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              t={t}
              isActive={i === activeIndex}
              onOpen={() => setSelected(project)}
            />
          ))}

          {/* Right spacing */}
          <div className="shrink-0 w-[calc((100vw-100%)/2)]" />
        </div>

        {/* Progress indicator */}
        <div className="mt-2 flex justify-center gap-1.5">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => scrollToProject(i)}
              aria-label={`Go to project ${i + 1}`}
              animate={{
                width: i === activeIndex ? 28 : 6,
                opacity: i === activeIndex ? 1 : 0.35,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
              }}
              className="h-1.5 rounded-full bg-primary"
            />
          ))}
        </div>

        {/* Swipe hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          Drag to explore
        </motion.div>
      </div>

      <ProjectDialog
        project={selected}
        t={t}
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      />
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Project Card                                                               */
/* -------------------------------------------------------------------------- */

function ProjectCard({
  project,
  index,
  t,
  isActive,
  onOpen,
}: {
  project: Project;
  index: number;
  t: Record<string, string>;
  isActive: boolean;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 20,
  });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

  const imageX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Reveal delay={index * 0.05}>
      <motion.article
        ref={cardRef}
        data-project-card
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        animate={{
          scale: isActive ? 1 : 0.94,
          opacity: isActive ? 1 : 0.55,
          y: isActive ? 0 : 6,
        }}
        whileHover={{
          scale: isActive ? 1.015 : 0.96,
          y: -6,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 22,
          },
        }}
        transition={{
          type: 'spring',
          stiffness: 280,
          damping: 28,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onOpen}
        role="button"
        tabIndex={0}
        aria-label={`${project.name} — ${t['viewDetails'] ?? 'View details'}`}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onOpen();
          }
        }}
        className="
          group
          relative
          cursor-pointer
          flex
          w-[82vw]
          max-w-[380px]
          shrink-0
          snap-center
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-card
          shadow-sm
          sm:w-[350px]
          lg:w-[370px]
        "
      >
        {/* Active glow */}
        <motion.div
          animate={{
            opacity: isActive ? 0.5 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="
            pointer-events-none
            absolute
            -inset-px
            rounded-2xl
            bg-primary/10
            blur-xl
          "
        />

        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
          <motion.img
            src={project.image}
            alt={`${project.name} interface preview`}
            width={1200}
            height={800}
            loading="lazy"
            style={{
              x: imageX,
              y: imageY,
              width: 'calc(100% + 16px)',
              height: 'calc(100% + 10px)',
              left: '-8px',
              top: '-5px',
            }}
            animate={{
              scale: isActive ? 1.03 : 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute object-cover"
          />

          {/* Image gradient */}
          <motion.div
            animate={{
              opacity: isActive ? 1 : 0.5,
            }}
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/35
              via-transparent
              to-transparent
            "
          />

          {/* Project number */}
          <div
            className="
              absolute
              right-4
              top-4
              rounded-full
              border
              border-white/20
              bg-black/30
              px-2.5
              py-1
              font-mono
              text-[9px]
              text-white
              backdrop-blur-md
            "
          >
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col p-5">
          <motion.h3
            animate={{
              x: isActive ? 0 : 2,
            }}
            className="text-lg font-semibold"
          >
            {project.name}
          </motion.h3>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Technologies */}
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((tech: string, techIndex: number) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, y: 5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: techIndex * 0.03,
                }}
                className="
                  rounded-md
                  border
                  border-border
                  px-2
                  py-1
                  font-mono
                  text-[10px]
                  text-muted-foreground
                  transition-colors
                  group-hover:border-primary/30
                "
              >
                {tech}
              </motion.li>
            ))}
          </ul>

          {/* Features */}
          <div className="mt-5">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              {t['keyFeatures'] ?? ''}
            </h4>

            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              {project.features
                .slice(0, 3)
                .map((feature: string, featureIndex: number) => (
                  <motion.li
                    key={feature}
                    initial={{
                      opacity: 0,
                      x: -6,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.1 + featureIndex * 0.05,
                    }}
                    className="flex gap-2"
                  >
                    <span className="text-primary">—</span>
                    <span className="line-clamp-1">
                      {feature}
                    </span>
                  </motion.li>
                ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
            <motion.button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onOpen();
              }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-md
                border
                border-primary/40
                px-3
                py-2
                text-xs
                font-medium
                text-primary
                transition-colors
                hover:bg-primary/10
              "
            >
              <Maximize2 className="h-3.5 w-3.5" />
              {t['viewDetails'] ?? 'View details'}
            </motion.button>
            {project.github ? (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                onClick={(event) => event.stopPropagation()}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-md
                  border
                  border-border
                  px-3
                  py-2
                  text-xs
                  transition-colors
                  hover:border-primary/60
                  hover:text-primary
                "
              >
                <Github className="h-3.5 w-3.5" />
                {t['github'] ?? ''}
              </motion.a>
            ) : null}

            {project.demo ? (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                onClick={(event) => event.stopPropagation()}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-md
                  bg-primary
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-primary-foreground
                "
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {t['liveDemo'] ?? ''}
              </motion.a>
            ) : null}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}