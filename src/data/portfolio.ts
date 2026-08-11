/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — no JSX changes needed.
 */
import autonationImg from "@/assets/project-autonation.jpg";
import immerseImg from "@/assets/project-immerse.jpg";
import shieldImg from "@/assets/project-shield.jpg";

export const profile = {
  name: "Tuguldur Turmunkh",
  role: "Junior Software Developer",
  location: "Ulaanbaatar, Mongolia",
  email: "tuguldur@example.com", // [YOUR EMAIL]
  github: "https://github.com/your-username", // [YOUR GITHUB]
  githubUsername: "your-username", // [YOUR GITHUB USERNAME]
  linkedin: "https://linkedin.com/in/your-profile", // [YOUR LINKEDIN]
  resumeUrl: "/resume.pdf",
  tagline:
    "I'm a recent Multimedia Technology graduate from the National University of Mongolia, passionate about building useful, reliable and user-friendly software.",
  intro:
    "I enjoy turning ideas into real applications and continuously improving my development skills.",
};

export const terminalLines = [
  { prompt: "$ whoami", output: [profile.name, profile.role] },
  {
    prompt: "$ cat goals.txt",
    output: ["> Building things.", "> Learning continuously.", "> Solving problems."],
  },
];

export const about = {
  paragraphs: [
    "I recently graduated from the National University of Mongolia with a degree in Multimedia Technology, where I built a strong foundation in programming, algorithms and web development.",
    "Most of what I know comes from building: university coursework, personal side projects and real client-style websites. I like understanding how a product works end to end — from the interface a user touches to the API and database behind it.",
    "I'm comfortable working independently and just as happy inside a team: reviewing code, asking questions and shipping small improvements consistently. I'm looking for my first full-time developer role where I can contribute, learn from experienced engineers and grow into a dependable professional.",
  ],
  highlights: [
    "Recent university graduate, open to full-time junior roles",
    "Hands-on experience with full-stack JavaScript projects",
    "Strong willingness to learn new tools and codebases",
    "Enjoys breaking technical problems into small, testable steps",
  ],
};

export const skillGroups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Python", "C", "C++"] },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend & Database",
    items: ["Node.js", "REST APIs", "MongoDB", "SQL", "Supabase"],
  },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Docker"] },
];

export type Project = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "AutoNation.mn",
    description:
      "A full-stack car marketplace where users can browse, filter and post vehicle listings, with an admin approval flow before listings go live.",
    image: autonationImg,
    tech: ["Next.js", "React", "MongoDB", "REST API"],
    features: [
      "Car listings with dynamic detail pages",
      "Search, filtering and location filtering",
      "User accounts and listing submission",
      "Admin approval system",
    ],
    github: "https://github.com/your-username/autonation", // [PROJECT REPO]
    demo: "https://autonation.mn", // [LIVE DEMO]
  },
  {
    name: "Immerse Mongolia",
    description:
      "[PROJECT DESCRIPTION] A platform concept for showcasing Mongolian travel and cultural experiences with rich media and curated itineraries.",
    image: immerseImg,
    tech: ["React", "Node.js", "REST API"], // [TECHNOLOGIES]
    features: [
      "Media-rich experience pages",
      "Curated itinerary browsing",
      "Responsive, mobile-first layout",
    ],
    github: "https://github.com/your-username/immerse-mongolia", // [PROJECT REPO]
  },
  {
    name: "Shield Nirun LLC Website",
    description:
      "[PROJECT DESCRIPTION] A corporate website for a security services company, focused on clear service presentation and lead enquiries.",
    image: shieldImg,
    tech: ["Next.js", "Tailwind CSS"], // [TECHNOLOGIES]
    features: [
      "Company and services pages",
      "Contact / enquiry form",
      "SEO-friendly, fast-loading pages",
    ],
    github: "https://github.com/your-username/shield-nirun", // [PROJECT REPO]
  },
];

export const education = [
  {
    degree: "Bachelor's Degree in Multimedia Technology",
    school: "National University of Mongolia",
    period: "2022 — 2026",
    description:
      "Focused on software development, web technologies and interactive media, combining programming fundamentals with design-oriented coursework.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Web Development",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Computer Graphics",
    ],
  },
];

export const journey = [
  {
    title: "University Foundation",
    period: "2022 — 2026",
    description:
      "Studied Multimedia Technology at the National University of Mongolia, building fundamentals in programming, algorithms, databases and computer graphics.",
  },
  {
    title: "Building Real Projects",
    period: "2023 — 2026",
    description:
      "Moved from coursework into full applications — a car marketplace, client-style company sites and personal experiments with React, Next.js and Node.js.",
  },
  {
    title: "Continuous Learning",
    period: "Ongoing",
    description:
      "Deepening TypeScript, API design, databases and testing through documentation, small builds and code reading. [ADD INTERNSHIPS / HACKATHONS / OPEN SOURCE HERE]",
  },
  {
    title: "Open to Opportunities",
    period: "Now",
    description:
      "Actively looking for a junior developer role or internship where I can contribute to a real product and grow alongside an experienced team.",
  },
];

export const capabilities = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible and interactive web interfaces.",
    icon: "Layout",
  },
  {
    title: "Full-Stack Development",
    description: "Creating complete applications with frontend, backend, APIs and databases.",
    icon: "Layers",
  },
  {
    title: "Problem Solving",
    description: "Breaking complex problems into smaller, manageable solutions.",
    icon: "Puzzle",
  },
  {
    title: "Continuous Learning",
    description: "Quickly picking up new technologies and sharpening existing skills.",
    icon: "GraduationCap",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
