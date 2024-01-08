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
  personalWebsiteUrl: "https://jarocki.me",
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
      end: "Present",
    },
  ],
  // work: [
  //   {
  //     company: "Medflux",
  //     link: "https://medflux.vercel.app",
  //     badges: ["Remote"],
  //     title: "Full Stack Developer",
  //     logo: ParabolLogo,
  //     start: "2023",
  //     end: "Present",
  //     description:
  //       "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
  //   },
  // ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/T3 App",
    "Express",
    "Tailwind CSS",
    "Node.js",
    "tRPC",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ],
  projects: [
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
        href: "https://lets-votely.com/",
      },
    },

    {
      title: "Kampus Tracker",
      techStack: ["Side Project", "TypeScript", "React"],
      description:
        "Track students and lecturers at all universities in Indonesia",
      link: {
        label: "kampus-tracker.vercel.app",
        href: "https://kampus-tracker.vercel.app/",
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
