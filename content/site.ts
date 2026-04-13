export const site = {
  name: "Monica Hicks",
  title: "Monica Hicks — Software Engineer",
  description:
    "Monica Hicks is a software engineer focused on thoughtful, reliable systems.",
  url: "https://monicahicks.net",
} as const;

export const hero = {
  role: "Software Engineer",
  // TODO
  intro:
    "I feel incredibly lucky to have found a career that brings me so much joy. I care deeply about building great systems and writing detailed documentation.",
  primaryCta: { label: "View work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
} as const;

/**
 * Files go in `public/hero/`. `src` must be the **URL** from the site root (leading `/`), e.g.
 * `/hero/photo.jpg` → `public/hero/photo.jpg`. Not `public/...` or `monicahicks-net/...` on disk.
 * Use `null` for a placeholder slot.
 */
export const heroGalleryImages: { src: string | null; alt: string }[] = [
  { src: "/hero/RedditHeadshotCropped.jpg", alt: "Monica Hicks" },
  { src: "/hero/ShanghaiSelfie.jpg", alt: "Monica Hicks" },
  { src: "/hero/AndrewYang.jpg", alt: "Monica Hicks" },
];

export const about = {
  paragraphs: [
    "I am a backend software engineer who enjoys turning ideas into plans and plans into reality. Recently, my work has been focused on data ETL pipelines and data quality. It is extremely important to me to build well-designed systems that are easy to test, maintain, and extend.",
    "I love working with others whether it is live brainstorming, async planning, or pair programming, but I also appreciate uninterrupted blocks where I can put in my headphones and lock in. Right now my job is fully remote-friendly, but I go into the office 3+ times a week for a sense of community and because who doesn't like to get dressed up for ice coffee, yogurt bowls, and lunch?",
    "Outside of work, I value creative and physical activities to keep me grounded and inspired. I recently ran my first half marathon, and I love sewing, reading, lifting weights, and Pilates. I'm always down to see live comedy in NYC and can ocasionally be convinced to get up during open mic.",
  ],
} as const;

/** Degrees and programs — easy to extend with more entries. */
export const education = [
  {
    degree: "B.S. Computer Science",
    institution: "Stanford University",
    period: "2021 — 2025",
    description:
    "Focused on information systems, studying how data is stored, transmitted, and processed in large-scale systems. Developed strong foundations in databases, distributed systems, and data-driven application design.",
    highlights: ["Algorithms", "Information Science", "Data Management", "Distributed Systems", "Networking", "Operating Systems"],
  },
  {
    degree: "M.S. Computer Science",
    institution: "Stanford University",
    period: "2025 - Present",
    description:
    "Focused on human-computer interaction and machine learning, with an emphasis on building user-centered, data-driven applications. Explored applied ML, NLP, and product design through project-based coursework. I'm wrapping up my final two classes alongside my work as a full-time SWE at Reddit.",
    highlights: ["Human-Computer Interaction", "Machine Learning", "NLP", "Product Design", "Data-Driven Applications"],
  },
] as const;

export const selectedWork = [
  {
    title: "Software Engineer Intern",
    org: "Reddit",
    period: "Summer 2024",
    description:
    "Built backend systems on Reddit’s SEO team to automate alt-text generation for images using OCR and internal ML models, improving accessibility and search indexing. Developed pipelines that generated alt-text on Post Detail Page render, integrating with Kafka consumers and PostgreSQL services.",
    tags: ["Python", "Backend", "PostgreSQL", "Kafka", "OCR", "Machine Learning"],
  },
  {
    title: "Coordinator for CS Department",
    org: "Stanford University",
    period: "March 2024-June 2025",
    description:
    "Partnered with two co-coordinators to manage operations for 100+ section leaders each term. Led hiring for 200+ applicants per quarter across written, whiteboarding, and debugging interviews; conducted performance reviews; coordinated section room assignments, tutoring schedules, and exam grading; and presented quarterly program outcomes to department leadership.",
    tags: ["Operations", "Leadership", "Hiring", "Mentorship", "Program Management"],
  },
  {
    title: "Software Engineering Intern",
    org: "Recidiviz",
    period: "Summer 2023",
    description:
    "Built internal dashboards using React and TypeScript to automate eligibility workflows for correctional caseworkers, replacing manual review processes. Implemented SQL-based logic to evaluate eligibility criteria and auto-populated key data while surfacing case notes in a sidebar to streamline decision-making.",
    tags: ["React", "TypeScript", "Dashboards", "SQL", "Data Systems", "Frontend"],
  },
] as const;

export const projects = [
  {
    title: "Astrophysics Publication",
    summary:"Built Python tools for an astrophysics research project (published in the Astrophysical Journal) to measure extragalactic contamination in simulated maps of the sky. Helped validate improved models used in cosmic microwave background (CMB) research by analyzing correlations between emission and galaxy distributions.",
    stack: ["Python", "NumPy", "SciPy", "Data Analysis", "Scientific Computing"],
    links: {
      github: "https://github.com/MonicaHicks/QuantifyExtragalacticContamination",
      demo: "https://ui.adsabs.harvard.edu/abs/2025ApJ...991...23P/abstract",
    },
  },
  {
    title: "CS+SocialGood Education Outreach Curriculum",
    summary:
      "Led development of a Python curriculum for CS education outreach, creating beginner-friendly lessons and project-based exercises to introduce core programming concepts. Designed materials to support scalable instruction and enable club members to teach students with little to no prior coding experience.",
    stack: ["Python", "Curriculum Design", "Education", "Program Development"],
    links: {
      github: "https://github.com/MonicaHicks/CS-SG-Education-Outreach-Python-Curriculum",  demo: null
    },
  },
  {
    title: "Phatty App",
    summary:
      "Frustrated with fitness tracking apps that didn’t meet my standards, I started building my own. This app focuses on simplicity and ease of use to support consistency, with core features including exercise and rep tracking and custom interval workout creation.",
    stack: ["TypeScript", "React Native", "Expo", "Supabase", "Fitness", "Hobby"],
    links: { github: "https://github.com/MonicaHicks/PhattyApp", demo: null },
  },
] as const;

export const beyondWork = {
  items: [
    { label: "Sewing", detail: "I start with vision boards in Figma then bring my designs to life!" },
    { label: "Comedy", detail: "I watch standup for laughs and do standup to build bravery and humility." },
    { label: "Reading", detail: "I read nonfiction to start my day and fiction on the subway and before bed." },
    { label: "Running", detail: "I am a proud slow runner! I ran the NYC Half at a steady 12 min pace (2:40:42)." },
    { label: "Lifting", detail: "I alternate the same two workouts (upper + lower) 5 days a week. I love routine!" },
    { label: "Fitness Classes", detail: "I love Barry's Bootcamp, OrangeTheory and Pilates." },
  ],
} as const;

export const contact = {
  /** Two short lines shown under the contact heading (edit each string independently). */
  invitation: [
    "You don't need a good reason to reach out!",
    "I like meeting new people and would love to connect.",
  ],
  email: { label: "monicadianellc@gmail.com", href: "mailto:monicadianellc@gmail.com" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/monica-d-hicks/" },
  github: { label: "GitHub", href: "https://github.com/MonicaHicks" },
} as const;
