import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Muhammad Taufik Hidayat",
  initials: "MTH",
  location: "Yogyakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/yogyakarta",
  about:
    "Full Stack Web Developer focused on quality, performance, and maintainability.",
  summary:
    "As a Full Stack Web Developer with experience building a website using React, Next.js, Typescript, and Tailwind CSS. I have a passion for building beautiful, responsive, and performant websites.",
  avatarUrl: "/my-photo.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "muhtopik07@gmail.com",
    tel: "+6281717240455",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/iamtaufik",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/iamtaufik/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University AMIKOM Yogyakarta",
      degree: "Computer Science",
      start: "2021",
      end: "2025",
    },
    {
      school: "SMK Negeri 1 Saptosari",
      degree: "Network Engineering",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Naturindo Fit",
      link: "https://naturindofit.com",
      badges: ["Remote"],
      title: "Fullstack Web Developer",
      start: "2024",
      end: "2025",
      description:
        "Built a complete full-stack application, including database design, CI/CD pipeline setup, and VPS management.",
    },
    {
      company: "University AMIKOM Yogyakarta",
      link: "https://amikom.ac.id",
      badges: ["Remote"],
      title: "Fullstack Web Developer",
      start: "2023",
      end: "2024",
      description:
        "Developed full-stack applications with API integration, UI/UX implementation, and production deployment.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Golang",
    "Node.js",
    "Express.js",
    "React.js",
    "Vue.js",
    "Next.js",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ],
  projects: [
    {
      title: "Book Wise",
      techStack: [
        "Side Project",
        "JavaScript",
        "Golang",
        "Fiber",
        "GORM",
        "Vue.js",
        "Pinia",
        "Tailwind CSS",
        "JWT",
      ],
      description: "A platform to write book reviews and manage your books.",
      link: {
        label: "book-wise.sgp.dom.my.id",
        href: "https://book-wise.sgp.dom.my.id",
      },
    },
    {
      title: "Guess The Song",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js (Custom Server)",
        "Tailwind CSS",
        "Socket.io",
        "Redis",
        "Web Socket",
      ],
      description: "A web-based multiplayer game to guess songs.",
      link: {
        label: "gues-song-beta.sgp.dom.my.id",
        href: "https://gues-song-beta.sgp.dom.my.id/",
      },
    },
    {
      title: "Takon Opo",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "NextAuth.js",
      ],
      description: "A platform to help you engage in Q&A with your followers.",
      link: {
        label: "takonopo.vercel.app",
        href: "https://takonopo.vercel.app",
      },
    },
    {
      title: "Rumah Kreatif",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "NextAuth.js",
      ],
      description:
        "A collaborative initiative to empower local SMEs, culture, and education in Gunungkidul.",
      link: {
        label: "rumahkreatifgk.com",
        href: "https://rumahkreatifgk.com",
      },
    },
    {
      title: "Medflux",
      techStack: ["Side Project", "TypeScript", "Next.js", "Tailwind CSS"],
      description: "A platform for machine learning in medical",
      link: {
        label: "medflux.vercel.app",
        href: "https://medflux.vercel.app",
      },
    },
    {
      title: "CourseHub",
      techStack: ["Side Project", "Express", "PostgreSQL", "React"],
      description: "A MOOC platform to learn anything about programming",
      link: {
        label: "coursehub-dun.vercel.app",
        href: "https://coursehub-dun.vercel.app",
      },
    },
    {
      title: "Forum Amikom",
      techStack: ["Side Project", "TypeScript", "T3 App"],
      description:
        "A platform for students AMIKOM to discuss and share information",
      link: {
        label: "forum-amikom.vercel.app",
        href: "https://forum-amikom.vercel.app",
      },
    },
    {
      title: "Votely",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "NextAuth.js",
      ],
      description: "A platform to voting for your favorite things",
      link: {
        label: "lets-votely.com",
        href: "https://lets-votely.vercel.app/",
      },
    },
    {
      title: "OpenForm",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "Clerk",
        "MongoDB",
      ],
      description:
        "A user-friendly platform for creating interactive forms and collecting meaningful feedback.",
      link: {
        label: "openform.vercel.app",
        href: "https://open-form.vercel.app/",
      },
    },
    {
      title: "Cendhake",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "NextAuth.js",
      ],
      description: "Web Application to shorter your link",
      link: {
        label: "cendhake.vercel.app",
        href: "https://cendhake.vercel.app/",
      },
    },
    {
      title: "Kobokan Weather App",
      techStack: ["Side Project", "HTML", "CSS", "JavaScript"],
      description: "A simple weather app with vtuber character Kobo Kanaeru",
      link: {
        label: "iamtaufik.github.io/KobokanWeatherApp",
        href: "https://iamtaufik.github.io/KobokanWeatherApp/",
      },
    },
    {
      title: "Suxz",
      techStack: ["Side Project", "React", "Tailwind CSS"],
      description:
        "Slicing UI Design from codedesign.dev to React and Tailwind CSS",
      link: {
        label: "codedesign-suxz.vercel.app",
        href: "https://codedesign-suxz.vercel.app/",
      },
    },
    {
      title: "HoloScrap",
      techStack: ["Side Project", "Node.js", "Express"],
      description:
        "RESTful API with scraping data from hololivepro.com website",
      link: {
        label: "holoscrap.vercel.app",
        href: "https://holoscrap.vercel.app",
      },
    },
  ],
} as const;
