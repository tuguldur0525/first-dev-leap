/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — no JSX changes needed.
 */
import autonationImg from "@/assets/project-autonation.jpg";
import campus360Img from "@/assets/project-campus360.jpg";
import immerseImg from "@/assets/project-immerse.jpg";
import shieldImg from "@/assets/project-shield.jpg";

export const profile = {
  name: "Tuguldur Turmunkh",
  role: "Junior Software Developer",
  location: "Sukhbaatar District, Ulaanbaatar, Mongolia",
  email: "tuguldur.turmunkhmb@gmail.com", // [YOUR EMAIL]
  github: "https://github.com/tuguldur0525", // [YOUR GITHUB]
  githubUsername: "tuguldur0525", // [YOUR GITHUB USERNAME]
  linkedin: "https://linkedin.com/in/tuguldur-turmunkh", // [YOUR LINKEDIN]
  phone: "+976 80758785", // [YOUR PHONE]
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
    "My background includes programming, web development, Adobe tools, Unreal Engine, Unity, OpenCV, image processing, and machine learning. I’m comfortable working independently or as part of a team, and I’m looking for my first full-time developer role where I can contribute, learn from experienced developers, and keep growing.",
    "While I don’t have extensive professional experience yet, I’m eager to learn, gain real-world experience, and take on new challenges. I’m ready to work hard, learn from experienced developers, and continuously improve my skills as I grow into my first full-time developer role.",
  ],
  highlights: [
    "Recent Multimedia Technology graduate, currently seeking a full-time junior developer role",
    "Built several university and personal projects using JavaScript and modern web technologies",
    "Comfortable learning new tools, frameworks, and existing codebases",
    "Approach technical problems by breaking them down into smaller, manageable tasks and solving them step by step",
  ],
};

export const skillGroups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Python", "C", "C++"] },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "Tailwind CSS", "Responsive Design", "Framer Motion"],
  },
  {
    title: "Backend & Database",
    items: ["Node.js", "REST APIs", "MongoDB", "SQL", "Supabase", "Auth & JWT"],
  },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Adobe Suite"] },
  {
    title: "Interactive & Multimedia",
    items: ["360 Virtual Tours", "Three.js", "OpenCV", "Computer Vision", "Unreal Engine", "Unity"],
  },
  {
    title: "Other",
    items: ["Mapbox", "WebGL", "SEO & Performance Optimization"],
  },
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
    name: "Immerse Mongolia",
    description:
      "A Full-stacked web platform concept for discovering and showcasing Mongolian businesses and destinations through interactive listings, maps, reviews, and immersive 360° experiences..",
    image: immerseImg,
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Supabase", "REST API", "Mapbox"],
    features: [
      "Business and destination listings",
      "Interactive maps and location-based browsing",
      "360° virtual tour integration",
      "Reviews and ratings",
      "Category-based discovery",
      "Bilingual interface (Mongolian / English)",
      "Responsive mobile-friendly design",
    ],
    github: "https://github.com/tuguldur0525/immersemongolia",
    demo: "https://immersemongolia.vercel.app/",
  },

  {
    name: "SITE Campus 360 Virtual Tour",
    description:
      "A web-based 360° virtual tour developed as a university diploma project for the School of Information Technology and Electronics, allowing users to explore campus buildings and indoor spaces interactively.",
    image: campus360Img,
    tech: ["React", "Next.js", "Three.js", "Photo Sphere Viewer", "Tailwind CSS"],
    features: [
      "Interactive 360° panoramic navigation",
      "Multi-floor building navigation",
      "Scene-to-scene transitions",
      "Interactive navigation markers",
      "Organized campus and room structure",
      "Responsive interface for desktop and mobile",
      "Optimized 360° image assets for web performance",
    ],
    github: "https://github.com/tuguldur0525/mtes-tour",
    demo: "https://mtes-tour.vercel.app/",
  },

  {
    name: "AutoNation.mn",
    description:
      "An automotive marketplace web application that allows users to browse, search and filter vehicle listings, submit their own listings, and manage listings through an administrative approval workflow.",
    image: autonationImg,
    tech: ["Next.js", "React", "MongoDB", "REST API"],
    features: [
      "Dynamic vehicle listing and detail pages",
      "Search and filtering by vehicle attributes",
      "Location-based filtering",
      "User accounts and listing submission",
      "Admin listing approval workflow",
      "Responsive interface",
    ],
    github: "https://github.com/your-username/autonation",
  },
  {
    name: "Shield Nirun LLC Website",
    description:
      "A responsive corporate website developed for Shield Nirun LLC to present its company information and security services with a clear and professional online presence.",
    image: shieldImg,
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    features: [
      "Company information and service pages",
      "Responsive design across devices",
      "Contact and enquiry functionality",
      "Structured content presentation",
    ],
    github: "https://github.com/tuguldur0525/shield-nirun-web",
    demo: "https://shield-nirun-web.vercel.app/",
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
      "Graphics Designing & Adobe Suite",
      "Artificial Intelligence",
      "Game Development Using Unreal Engine and Unity",
      "Computer Vision & OpenCV",
      "Machine Learning Fundamentals",
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
      "Deepening TypeScript, API design, databases and testing through documentation, small builds and code reading.",
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
    title: "Web Development",
    description:
      "Build responsive web applications and websites using React, Next.js, JavaScript, and TypeScript.",
    icon: "Layout",
  },
  {
    title: "Full-Stack Development",
    description:
      "Build complete features by working with REST APIs, databases, authentication, and backend services.",
    icon: "Layers",
  },
  {
    title: "Interactive & Multimedia",
    description:
      "Create interactive 360° virtual tours and immersive digital experiences using Three.js and multimedia technologies.",
    icon: "Box",
  },
  {
    title: "Graphic & UI Design",
    description:
      "Create clean visual designs, UI concepts, and digital content using Figma and Adobe Creative tools.",
    icon: "Palette",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    role: "Graphic Designer & Web Developer",
    company: "Shield Nirun LLC",
    period: "[2025/12] – [2026/03]",
    description:
      "Developed a responsive corporate website for a security services company, focusing on clear content presentation, usability, and multi-device compatibility.",
    achievements: [
      "Developed a responsive corporate website using Next.js, React, and Tailwind CSS.",
      "Built structured company and service pages with a focus on clear content presentation and usability.",
      "Implemented responsive layouts for desktop, tablet, and mobile devices.",
      "Integrated contact/enquiry functionality and organized website content for easy navigation.",
      "Applied basic SEO and web performance practices to improve the site's accessibility and user experience.",
    ],
  },
  {
    role: "Photo grapher & Customer Service Representative",
    company: "Hollywood Pictures LLC",
    period: "[2025/05] – [2025/09]",
    description:
      "Worked in a fast-paced customer-facing environment, building strong communication, teamwork, and time-management skills that transfer directly into collaborative development work.",
    achievements: [
      "Worked in a fast-paced customer-facing environment while maintaining consistent service standards.",
      "Communicated effectively with coworkers and customers from different backgrounds.",
      "Managed daily responsibilities independently and adapted to changing work situations.",
      "Strengthened teamwork, communication, time-management, and problem-solving skills.",
    ],
  },
];
