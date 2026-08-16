/**
 * Single source of truth for all portfolio content, in English and Mongolian.
 * Edit `content.en` / `content.mn` below to update site copy — no JSX changes needed.
 */
import autonationImg from "@/assets/project-autonation.jpg";
import autonationImg2 from "@/assets/project-autonation-2.jpg";
import campus360Img from "@/assets/project-campus360.jpg";
import campus360Img2 from "@/assets/project-campus360-2.jpg";
import immerseImg from "@/assets/project-immerse.jpg";
import immerseImg2 from "@/assets/project-immerse-2.jpg";
import shieldImg from "@/assets/project-shield.jpg";
import baazImg from "@/assets/project-baaz.jpg";
import baazImg2 from "@/assets/project-baaz-2.jpg";
import type { Language } from "@/contexts/LanguageContext";

export type Project = {
  name: string;
  description: string;
  image: string;
  gallery?: string[];
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
};

export type PortfolioContent = {
  profile: {
    name: string;
    role: string;
    location: string;
    email: string;
    github: string;
    githubUsername: string;
    linkedin: string;
    phone: string;
    resumeUrl: string;
    tagline: string;
    intro: string;
  };
  terminalLines: { prompt: string; output: string[] }[];
  about: { paragraphs: string[]; highlights: string[] };
  skillGroups: { title: string; items: string[] }[];
  projects: Project[];
  education: {
    degree: string;
    school: string;
    period: string;
    description: string;
    coursework: string[];
  }[];
  journey: { title: string; period: string; description: string }[];
  capabilities: { title: string; description: string; icon: string }[];
  navLinks: { label: string; href: string }[];
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  }[];
};

// Shared, language-independent values
const sharedProfile = {
  name: "Tuguldur Turmunkh",
  email: "tuguldur.turmunkhmb@gmail.com", // [YOUR EMAIL]
  github: "https://github.com/tuguldur0525", // [YOUR GITHUB]
  githubUsername: "tuguldur0525", // [YOUR GITHUB USERNAME]
  linkedin: "https://linkedin.com/in/tuguldur-turmunkh", // [YOUR LINKEDIN]
  phone: "+976 80758785", // [YOUR PHONE]
  resumeUrl: "/resume.pdf",
};

const en: PortfolioContent = {
  profile: {
    ...sharedProfile,
    role: "Junior Software Developer",
    location: "Sukhbaatar District, Ulaanbaatar, Mongolia",
    tagline:
      "I'm a recent Multimedia Technology graduate from the National University of Mongolia, passionate about building useful, reliable and user-friendly software.",
    intro:
      "I enjoy turning ideas into real applications and continuously improving my development skills.",
  },
  terminalLines: [
    { prompt: "$ whoami", output: ["Tuguldur Turmunkh", "Junior Software Developer"] },
    {
      prompt: "$ cat goals.txt",
      output: ["> Building things.", "> Learning continuously.", "> Solving problems."],
    },
  ],
  about: {
    paragraphs: [
      "I recently graduated from the National University of Mongolia with a degree in Multimedia Technology, where I built a strong foundation in programming, algorithms and web development.",
      "My background includes programming, web development, Adobe tools, Unreal Engine, Unity, OpenCV, image processing, and machine learning. I'm comfortable working independently or as part of a team, and I'm looking for my first full-time developer role where I can contribute, learn from experienced developers, and keep growing.",
      "While I don't have extensive professional experience yet, I'm eager to learn, gain real-world experience, and take on new challenges. I'm ready to work hard, learn from experienced developers, and continuously improve my skills as I grow into my first full-time developer role.",
    ],
  highlights: [
  "Experience across programming, web development, graphic design, and multimedia production",
  "Hands-on experience with Adobe tools, Figma, Unity, Unreal Engine, OpenCV, and 360° virtual tours",
  "Able to combine technical and creative skills to build interactive and visual digital projects",
  "Comfortable learning and working with different technologies depending on the needs of a project",
],
  },
  skillGroups: [
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
      items: [
        "360 Virtual Tours",
        "Three.js",
        "OpenCV",
        "Computer Vision",
        "Unreal Engine",
        "Unity",
      ],
    },
    { title: "Other", items: ["Mapbox", "WebGL", "SEO & Performance Optimization"] },
  ],
  projects: [
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
    name: "Baaz ERP",
    description:
      "A full-stack ERP system for Mongolian resort and camp management, covering room and reservation lifecycle, guest CRM, finance and billing, food service, and analytics — fully localized in Mongolian with role-based multi-organization access control.",
    image: baazImg,
    tech: ["React", "TypeScript", "Node.js", "Express", "tRPC", "Vite", "Tailwind CSS", "Drizzle ORM", "MySQL", "Vitest"],
    features: [
      "Room inventory, types, capacity and seasonal pricing management",
      "Reservation lifecycle: create, modify, cancel, check-in, check-out, cleaning",
      "Drag-and-drop room schedule calendar with booking timeline",
      "Guest registration, history, notes and contact management",
      "Invoices, discounts, payment methods and balance tracking",
      "Food menu, orders and extra services integrated into guest bills",
      "Revenue, occupancy and reservation reports with charts",
      "Role-based access control (admin, manager, reception, accountant, kitchen)",
      "Multi-organization data isolation at the server level",
      "Fully localized Mongolian interface",
    ],
    github: "https://github.com/tuguldur0525/resortERP",
    demo: "https://3000-ig52xf27oo3fil301m9kf-30b63c9a.us1.manus.computer/",
  },


    {
      name: "SITE Campus 360 Virtual Tour",
      description:
        "A web-based 360° virtual tour developed as a university diploma project for the School of Information Technology and Electronics, allowing users to explore campus buildings and indoor spaces interactively.",
      image: campus360Img,
      tech: ["React", "Next.js", "Three.js", "Photo Sphere Viewer", "Tailwind CSS"],
      features: [
        "Interactive 360° panoramic using Insta360",
        "Three.js Photo Sphere Viewer integration",
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
      tech: ["Next.js", "React", "MongoDB", "REST API", "Tailwind CSS", "TypeScript"],
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
      tech: ["Adobe Suite", "Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
      features: [
        "Company information and service pages",
        "Graphic content and visual design using Adobe Suite",
      ],
      github: "https://github.com/tuguldur0525/shield-nirun-web",
      demo: "https://shield-nirun-web.vercel.app/",
    },
  ],
  education: [
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
  ],
  journey: [
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
  ],
  capabilities: [
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
  ],
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  experience: [
    {
      role: "Graphic Designer & Web Developer",
      company: "Shield Nirun LLC",
      period: "[2025/12] – [2026/03]",
      description:
        "Developed a responsive corporate website for a security services company, focusing on clear content presentation, usability, and multi-device compatibility.",
      achievements: [
        "Developed a responsive corporate website using Next.js, React, and Tailwind CSS.",
        "Built structured company and service pages with a focus on clear content presentation and usability.",
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
        "Strengthened teamwork, communication, time-management, and problem-solving skills.",
      ],
    },
  ],
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const mn: PortfolioContent = {
  profile: {
    ...sharedProfile,
    role: "Программ хөгжүүлэгч",
    location: "Сүхбаатар дүүрэг, Улаанбаатар хот, Монгол улс",
    tagline:
      "Би Монгол Улсын Их Сургуулийг Мультимедиа технологийн чиглэлээр саяхан төгссөн. Хэрэглэгчдэд хэрэгтэй, найдвартай, ашиглахад хялбар программ хангамж бүтээх сонирхолтой.",
    intro:
      "Шинэ санааг бодит бүтээгдэхүүн, хэрэглээ болгох, мөн хөгжүүлэлтийн ур чадвараа тасралтгүй сайжруулах дуртай.",
  },

  terminalLines: [
    {
      prompt: "$ whoami",
      output: ["Tuguldur Turmunkh", "Программ хөгжүүлэгч"],
    },
    {
      prompt: "$ cat goals.txt",
      output: ["> Шинэ зүйл бүтээх.", "> Тасралтгүй суралцах.", "> Асуудлыг шийдэх."],
    },
  ],

  about: {
    paragraphs: [
      "Би Монгол Улсын Их Сургуулийг Мультимедиа технологийн чиглэлээр саяхан төгссөн. Суралцах хугацаандаа программчлал, алгоритм, өгөгдлийн сан болон вэб хөгжүүлэлтийн чиглэлээр суурь мэдлэг, практик туршлага хуримтлуулсан.",
      "Программчлал болон вэб хөгжүүлэлтээс гадна Adobe Suite, Unreal Engine, Unity, OpenCV, компьютерийн хараа, зураг боловсруулалт болон машин сургалтын чиглэлээр ажиллаж үзсэн. Бие даан болон багаар ажиллахад дасан зохицож чаддаг бөгөөд туршлагатай хөгжүүлэгчидтэй хамтран ажиллаж, бодит төсөл дээр суралцан хөгжих боломжийг хайж байна.",
      "Мэргэжлийн ажлын туршлагаа дөнгөж эхлүүлж байгаа ч шинэ зүйл хурдан суралцаж, мэдэхгүй зүйлээ судалж, асуудлыг шийдэх замаар өөрийгөө хөгжүүлэхийг хичээдэг. Анхны бүтэн цагийн ажлаараа бодит бүтээгдэхүүн дээр ажиллаж, багт өөрийн хувь нэмрээ оруулахын зэрэгцээ илүү туршлагатай хөгжүүлэгчдээс суралцах хүсэлтэй байна.",
    ],

    highlights: [
  "Программчлал, вэб хөгжүүлэлт, график дизайн болон мультимедиа чиглэлээр практик туршлагатай",
  "Adobe Suite, Figma, Unity, Unreal Engine, OpenCV болон 360° виртуал аялалын технологиуд дээр ажиллаж байсан",
  "Техникийн болон бүтээлч ур чадвараа хослуулан интерактив, харааны шийдэл бүхий дижитал төсөл боловсруулах чадвартай",
  "Төслийн шаардлагаас хамааран өөр өөр технологи, хэрэгслийг хурдан сурч, ажиллах чадвартай",
],
  },

  skillGroups: [
    {
      title: "Программчлалын хэл",
      items: ["JavaScript", "TypeScript", "Python", "C", "C++"],
    },
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "HTML",
        "Tailwind CSS",
        "Responsive Design",
        "Framer Motion",
      ],
    },
    {
      title: "Backend & Өгөгдлийн сан",
      items: [
        "Node.js",
        "REST APIs",
        "MongoDB",
        "SQL",
        "Supabase",
        "Auth & JWT",
      ],
    },
    {
      title: "Хэрэгслүүд",
      items: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Adobe Suite"],
    },
    {
      title: "Интерактив & Мультимедиа",
      items: [
        "360° Virtual Tours",
        "Three.js",
        "OpenCV",
        "Computer Vision",
        "Unreal Engine",
        "Unity",
      ],
    },
    {
      title: "Бусад",
      items: ["Mapbox", "WebGL", "SEO & Performance Optimization"],
    },
  ],

  projects: [
    {
      name: "Immerse Mongolia",
      description:
        "Монголын бизнес, аялал жуулчлалын газруудыг нэг дороос хайж олох, газрын зураг дээр үзэх, үнэлгээ болон сэтгэгдэлтэй танилцах, мөн 360° виртуал орчноор аялах боломжийг олгох зорилготой full-stack вэб платформын концепц.",
      image: immerseImg,
      tech: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "Supabase",
        "REST API",
        "Mapbox",
      ],
      features: [
        "Бизнес болон аялал жуулчлалын газруудын жагсаалт",
        "Интерактив газрын зураг болон байршлаар хайх боломж",
        "360° виртуал аяллын интеграц",
        "Үнэлгээ болон сэтгэгдлийн систем",
        "Ангиллаар хайх боломж",
        "Монгол / Англи хэлний интерфейс",
        "Гар утас болон бусад төхөөрөмжид тохирсон дизайн",
      ],
      github: "https://github.com/tuguldur0525/immersemongolia",
      demo: "https://immersemongolia.vercel.app/",
    },

    {
      name: "SITE Campus 360 Virtual Tour",
      description:
        "Мэдээллийн технологи, электроникийн сургуулийн дипломын ажлын хүрээнд хөгжүүлсэн вэбд суурилсан 360° виртуал аялал. Хэрэглэгчид сургуулийн байр, давхар болон дотоод орчныг интерактив байдлаар үзэж, нэг орчноос нөгөөд шилжих боломжтой.",
      image: campus360Img,
      tech: [
        "React",
        "Next.js",
        "Three.js",
        "Photo Sphere Viewer",
        "Tailwind CSS",
      ],
      features: [
        "Интерактив 360° панорама үзэх боломж",
        "Олон давхар барилгын навигаци",
        "Нэг орчноос нөгөөд шилжих боломж",
        "Интерактив навигацийн тэмдэглэгээ",
        "Кампус, байр болон өрөөнүүдийн зохион байгуулалттай бүтэц",
        "Desktop болон mobile төхөөрөмжид тохирсон интерфейс",
        "360° зураг болон контентыг вэбэд ашиглахад оновчилсон",
      ],
      github: "https://github.com/tuguldur0525/mtes-tour",
      demo: "https://mtes-tour.vercel.app/",
    },

    {
      name: "AutoNation.mn",
      description:
        "Хэрэглэгчид автомашины зар үзэх, хайх, шүүх, өөрийн машинаа зарлах боломжтой автомашины худалдааны вэб аппликейшн. Зар нэмэх болон админ баталгаажуулах үйл явцыг багтаасан.",
      image: autonationImg,
      tech: ["Next.js", "React", "MongoDB", "REST API", "Tailwind CSS", "TypeScript"],
      features: [
        "Автомашины зарын жагсаалт болон дэлгэрэнгүй хуудас",
        "Машины үзүүлэлтээр хайх болон шүүх",
        "Байршлаар хайх болон шүүх",
        "Хэрэглэгчийн бүртгэл болон зар нэмэх боломж",
        "Админ зар шалгаж, баталгаажуулах систем",
        "Бүх төхөөрөмжид тохирсон интерфейс",
      ],
      github: "https://github.com/your-username/autonation",
      
    },

    {
      name: "Shield Nirun LLC Website",
      description:
        "Shield Nirun ХХК-ийн үйл ажиллагаа болон аюулгүй байдлын үйлчилгээг танилцуулах зорилгоор хөгжүүлсэн responsive корпоратив вэбсайт. Компанийн мэдээллийг ойлгомжтой, мэргэжлийн байдлаар хүргэхэд анхаарч ажилласан.",
      image: shieldImg,
      tech: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Responsive Design",
      ],
      features: [
        "Компанийн мэдээлэл болон үйлчилгээний хуудсууд",
        "Desktop, tablet болон mobile төхөөрөмжид тохирсон дизайн",
        "Холбоо барих болон хүсэлт илгээх боломж",
        "Агуулгыг ойлгомжтой, эмх цэгцтэй байдлаар танилцуулах бүтэц",
      ],
      github: "https://github.com/tuguldur0525/shield-nirun-web",
      demo: "https://shield-nirun-web.vercel.app/",
    },
  ],

  education: [
    {
      degree: "Мультимедиа технологийн бакалавр",
      school: "Монгол Улсын Их Сургууль",
      period: "2022 — 2026",
      description:
        "Программ хангамжийн хөгжүүлэлт, вэб технологи болон интерактив медиад түлхүү анхаарч суралцсан. Программчлалын суурь мэдлэгийг дизайн болон мультимедиатай хослуулан эзэмшсэн.",
      coursework: [
        "Өгөгдлийн бүтэц ба алгоритм",
        "Өгөгдлийн сангийн систем",
        "Вэб хөгжүүлэлт",
        "График дизайн ба Adobe Suite",
        "Хиймэл оюун ухаан",
        "Unreal Engine болон Unity ашиглан тоглоом хөгжүүлэх",
        "Компьютерийн хараа ба OpenCV",
        "Машин сургалтын үндэс",
      ],
    },
  ],

  journey: [
    {
      title: "Их сургуулийн суурь",
      period: "2022 — 2026",
      description:
        "Монгол Улсын Их Сургуульд Мультимедиа технологийн чиглэлээр суралцаж, программчлал, алгоритм, өгөгдлийн сан, компьютерийн график болон мультимедиагийн суурь мэдлэг эзэмшсэн.",
    },
    {
      title: "Бодит төсөл дээр ажиллаж эхэлсэн",
      period: "2023 — 2026",
      description:
        "Хичээлийн төслүүдээс гадна бодит хэрэглээнд чиглэсэн веб аппликейшн болон вэбсайтууд хөгжүүлж эхэлсэн. Автомашины худалдааны платформ, компанийн вэбсайт болон React, Next.js, Node.js ашигласан хувийн төслүүд дээр ажилласан.",
    },
    {
      title: "Тасралтгүй суралцаж байна",
      period: "Одоо",
      description:
        "TypeScript, API хөгжүүлэлт, өгөгдлийн сан болон тестийн мэдлэгээ баримт бичиг судлах, жижиг төсөл хэрэгжүүлэх, бусдын кодыг уншиж ойлгох замаар тасралтгүй хөгжүүлж байна.",
    },
    {
      title: "Шинэ боломж хайж байна",
      period: "Одоо",
      description:
        "Бодит бүтээгдэхүүн дээр ажиллаж, багийнхаа ажилд хувь нэмрээ оруулахын зэрэгцээ туршлагатай хөгжүүлэгчдээс суралцах боломжтой программ хөгжүүлэгчийн ажил эсвэл дадлагын байр хайж байна.",
    },
  ],

  capabilities: [
    {
      title: "Вэб хөгжүүлэлт",
      description:
        "React, Next.js, JavaScript болон TypeScript ашиглан responsive вэбсайт болон вэб аппликейшн хөгжүүлдэг.",
      icon: "Layout",
    },
    {
      title: "Full-Stack хөгжүүлэлт",
      description:
        "REST API, өгөгдлийн сан, authentication болон backend үйлчилгээнүүдтэй ажиллаж, веб аппликейшний бүрэн хэмжээний функц хөгжүүлдэг.",
      icon: "Layers",
    },
    {
      title: "Интерактив & Мультимедиа",
      description:
        "Three.js болон мультимедиа технологи ашиглан интерактив 360° виртуал аялал болон immersive дижитал туршлага бүтээдэг.",
      icon: "Box",
    },
    {
      title: "График & UI дизайн",
      description:
        "Figma болон Adobe Creative Suite ашиглан UI концепц, график дизайн болон дижитал контент бүтээдэг.",
      icon: "Palette",
    },
  ],

  navLinks: [
    { label: "Нүүр", href: "#home" },
    { label: "Миний тухай", href: "#about" },
    { label: "Боловсрол", href: "#education" },
    { label: "Ажлын туршлага", href: "#experience" },
    { label: "Ур чадвар", href: "#skills" },
    { label: "Төслүүд", href: "#projects" },
    { label: "Холбоо барих", href: "#contact" },
  ],

  experience: [
    {
      role: "График дизайнер & Вэб хөгжүүлэгч",
      company: "Shield Nirun LLC",
      period: "[2025/12] – [2026/03]",
      description:
        "Аюулгүй байдлын үйлчилгээ үзүүлдэг компанийн корпоратив вэбсайтыг хөгжүүлсэн. Вэбсайтын мэдээллийг ойлгомжтой хүргэх, хэрэглэгч ашиглахад хялбар байх болон бүх төрлийн төхөөрөмжид зөв харагдахад анхаарч ажилласан.",
      achievements: [
        "Next.js, React болон Tailwind CSS ашиглан responsive корпоратив вэбсайт хөгжүүлсэн.",
        "Компанийн танилцуулга болон үйлчилгээний хуудсуудыг ойлгомжтой бүтэцтэйгээр боловсруулсан.",
        "Desktop, tablet болон mobile төхөөрөмжүүдэд тохирсон responsive layout хөгжүүлсэн.",
        "Холбоо барих болон хүсэлт илгээх боломжийг хэрэгжүүлж, вэбсайтын агуулгыг хэрэглэгчид хялбар олохоор зохион байгуулсан.",
        "Вэбсайтын хайлтын системд харагдах байдал болон гүйцэтгэлийг сайжруулах үндсэн SEO, performance практикуудыг хэрэгжүүлсэн.",
      ],
    },

    {
      role: "Гэрэл зурагчин & Харилцагчийн үйлчилгээний ажилтан",
      company: "Hollywood Pictures LLC",
      period: "[2025/05] – [2025/09]",
      description:
        "Харилцагчидтай өдөр тутам шууд ажилладаг, хурдацтай орчинд ажиллаж, харилцаа, багаар ажиллах, цагийн менежмент болон асуудал шийдвэрлэх чадвараа хөгжүүлсэн.",
      achievements: [
        "Харилцагчидтай шууд ажилладаг, хурдацтай орчинд тогтмол чанартай үйлчилгээ үзүүлсэн.",
        "Янз бүрийн хүмүүстэй ойлгомжтой, үр дүнтэй харилцаж ажилласан.",
        "Өдөр тутмын ажлын үүрэг хариуцлагаа бие даан зохион байгуулж, өөрчлөгдөж буй нөхцөлд хурдан дасан зохицсон.",
        "Багаар ажиллах, харилцах, цагийн менежмент болон асуудал шийдвэрлэх чадвараа хөгжүүлсэн.",
      ],
    },
  ],
};

export const content: Record<Language, PortfolioContent> = { en, mn };

// Backwards-compatible named exports (default to English) for components
// that still import specific pieces directly from the data file.
export const profile = content.en.profile;
export const about = content.en.about;
export const skillGroups = content.en.skillGroups;
export const projects = content.en.projects;
