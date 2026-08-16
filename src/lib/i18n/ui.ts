import type { Language } from "@/contexts/LanguageContext";

export const ui = {
  en: {
    availableForRoles: "Available for junior roles",
    greetingPrefix: "Hi, I'm",
    viewProjects: "View My Projects",
    downloadResume: "Download Resume",
    contactMe: "Contact Me",
    githubProfileAria: "GitHub profile",
    linkedinProfileAria: "LinkedIn profile",
    scroll: "scroll",

    aboutLabel: "01 / About",
    aboutTitle: "A junior developer who likes shipping",

    educationLabel: "02 / Education",
    educationTitle: "Education",

    experienceLabel: "03 / Experience",
    experienceTitle: "Work experience",
    experienceIntro:
      "My professional background — from web development to customer-facing roles that shaped my collaboration and communication skills.",

    skillsLabel: "04 / Skills",
    skillsTitle: "Technologies I work with",
    skillsIntro: "Tools I've used across university coursework, personal builds and client-style projects.",

    projectsLabel: "05 / Projects",
    projectsTitle: "Featured projects",
    projectsIntro: "Applications I designed and built end to end — from interface to API and database.",
    keyFeatures: "Key features",
    github: "GitHub",
    liveDemo: "Live Demo",
    viewDetails: "View details",
    projectOverview: "Overview",
    techStack: "Tech stack",
    allFeatures: "What it does",
    gallery: "Gallery",

    journeyLabel: "06 / Journey",
    journeyTitle: "My journey",
    journeyIntro: "University → projects → continuous learning → open to opportunities.",

    capabilitiesLabel: "06 / Contribution",
    capabilitiesTitle: "What I can do",

    githubActivityLabel: "07 / Code",
    githubActivityTitle: "See what I'm building",
    githubActivityIntro:
      "Most of my work lives on GitHub — university projects, personal experiments and the applications featured above.",
    githubBlurbPrefix: "Repositories, commit history and works in progress. Update",
    githubBlurbSuffix: "in the data file to point this at your account.",
    viewGithubProfile: "View GitHub Profile",
    viewRepository: "view repository →",

    resumeLabel: "08 / Resume",
    resumeTitle: "Want to know more about my experience and skills?",
    resumeIntro:
      "Download my resume to learn more about my education, projects, technical skills and background.",
    viewResume: "View Resume",

    contactLabel: "09 / Contact",
    contactTitle: "Let's build something together",
    contactIntro:
      "I'm currently looking for junior developer opportunities, internships and projects where I can contribute, learn and grow.",
    linkedin: "LinkedIn",

    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Open Mail Client",
    formCopy: "Copy Message",
    formSentNotice: "Your email client should now be open with the message ready to send.",
    formCopiedNotice: " Message copied to clipboard.",
    errNameRequired: "Please enter your name.",
    errEmailInvalid: "Enter a valid email.",
    errMessageShort: "Message should be at least 10 characters.",

    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    switchToMongolian: "Switch to Mongolian",
    switchToEnglish: "Switch to English",
  } as const,
  mn: {
    availableForRoles: "Junior түвшний ажлын байранд нээлттэй ",
    greetingPrefix: "Сайн уу, би бол",
    viewProjects: "Миний төслүүдийг үзэх",
    downloadResume: "Resume татах",
    contactMe: "Надтай холбогдох",
    githubProfileAria: "GitHub профайл",
    linkedinProfileAria: "LinkedIn профайл",
    scroll: "гүйлгэх",

    aboutLabel: "01 / Миний тухай",
    aboutTitle: "Санаагаа бодит бүтээгдэхүүн болгох дуртай Junior Developer",

    educationLabel: "02 / Боловсрол",
    educationTitle: "Боловсрол",

    experienceLabel: "03 / Ажлын туршлага",
    experienceTitle: "Ажлын туршлага",
    experienceIntro:
      "Миний мэргэжлийн туршлага — вэб хөгжүүлэлтээс эхлээд харилцаа, хамтын ажиллагааны ур чадварыг бүрдүүлсэн үйлчлүүлэгчидтэй харьцах ажлууд хүртэл.",

    skillsLabel: "04 / Ур чадвар",
    skillsTitle: "Ашигладаг технологиуд",
    skillsIntro: "Их сургуулийн хичээл, хувийн төсөл, үйлчлүүлэгчийн шинж чанартай ажлуудад ашигласан хэрэгслүүд.",

    projectsLabel: "05 / Төслүүд",
    projectsTitle: "Онцлох төслүүд",
    projectsIntro: "Интерфейсээс эхлээд API, өгөгдлийн сан хүртэл бүрэн дизайн хийж бүтээсэн аппликейшнүүд.",
    keyFeatures: "Гол онцлогууд",
    github: "GitHub",
    liveDemo: "Демо үзэх",
    viewDetails: "Дэлгэрэнгүй",
    projectOverview: "Тойм",
    techStack: "Технологи",
    allFeatures: "Юу хийдэг вэ",
    gallery: "Зургууд",

    journeyLabel: "06 / Замнал",
    journeyTitle: "Миний замнал",
    journeyIntro: "Их сургууль → төслүүд → тасралтгүй суралцах → боломжид нээлттэй.",

    capabilitiesLabel: "06 / Хувь нэмэр",
    capabilitiesTitle: "Би юу хийж чадах вэ",

    githubActivityLabel: "07 / Код",
    githubActivityTitle: "Миний бүтээж буй зүйлсийг харах",
    githubActivityIntro:
      "Миний ихэнх ажил GitHub дээр байдаг — их сургуулийн төслүүд, хувийн туршилтууд, дээр дурдсан аппликейшнүүд.",
    githubBlurbPrefix: "Репозиторууд, commit түүх, хийгдэж буй ажлууд. Өөрийн бүртгэл рүү заахын тулд",
    githubBlurbSuffix: "-г data файлд шинэчлээрэй.",
    viewGithubProfile: "GitHub профайл үзэх",
    viewRepository: "репозитор үзэх →",

    resumeLabel: "08 / Resume",
    resumeTitle: "Миний туршлага, ур чадварын талаар илүү мэдэхийг хүсэж байна уу?",
    resumeIntro:
      "Миний боловсрол, төслүүд, техникийн ур чадвар, туршлагын талаар илүү дэлгэрэнгүй мэдэхийн тулд Resumeмийг татаж авна уу.",
    viewResume: "Resume үзэх",

    contactLabel: "09 / Холбоо барих",
    contactTitle: "Хамтран ажиллахад бэлэн байна.",
    contactIntro:
      "Би одоогоор хувь нэмрээ оруулж, суралцаж, хөгжих боломжтой бага түвшний хөгжүүлэгчийн ажил, дадлага, төслүүдийг хайж байна.",
    linkedin: "LinkedIn",

    formName: "Нэр",
    formEmail: "Имэйл",
    formMessage: "Зурвас",
    formSubmit: "Мэйл клиент нээх",
    formCopy: "Зурвас хуулах",
    formSentNotice: "Таны имэйл клиент илгээхэд бэлэн зурвастай нээгдсэн байх ёстой.",
    formCopiedNotice: " Зурвас клипбоард руу хууллаа.",
    errNameRequired: "Нэрээ оруулна уу.",
    errEmailInvalid: "Зөв имэйл хаяг оруулна уу.",
    errMessageShort: "Зурвас дор хаяж 10 тэмдэгттэй байх ёстой.",

    openMenu: "Цэс нээх",
    closeMenu: "Цэс хаах",
    switchToLight: "Цайвар горимд шилжих",
    switchToDark: "Бараан горимд шилжих",
    switchToMongolian: "Монгол хэл рүү шилжих",
    switchToEnglish: "Англи хэл рүү шилжих",
  } as const,
} as const;

export type UI = { [K in keyof typeof ui.en]: string };

// Ensure `ui` matches Language keys at runtime for typing safety
const _assert: Record<Language, UI> = ui;
void _assert;
