import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { WorkExperience } from "@/components/portfolio/WorkExperience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Journey } from "@/components/portfolio/Journey";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { GithubActivity } from "@/components/portfolio/GithubActivity";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { profile } from "@/data/portfolio";

const title = `${profile.name} — Junior Software Developer`;
const description =
  "Portfolio of Tuguldur Turmunkh, a junior software developer and recent Multimedia Technology graduate building full-stack web applications with React, Next.js and Node.js.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: `mailto:${profile.email}`,
          alumniOf: "National University of Mongolia",
          sameAs: [profile.github, profile.linkedin],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <Projects />
        <Education />
        <Journey />
        <Capabilities />
        <GithubActivity />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
