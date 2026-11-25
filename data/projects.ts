export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlight?: string;
  live?: string;
  image?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    name: "Momentum AI",
    tagline: "AI personal productivity assistant",
    description:
      "A multi-user AI workspace with a Gemini-powered assistant. Modular FastAPI backend on PostgreSQL with 14 versioned migrations and forced row-level security, so each user can only touch their own data. The assistant proposes actions; the user approves them.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Gemini", "React", "TypeScript", "Docker"],
    highlight: "75+ Pytest tests covering permissions and data isolation",
    live: "https://momentum-ai-lilac.vercel.app",
    image: "/projects/momentum.webp",
    github: "https://github.com/Sammycode332/momentum-ai",
  },
  {
    name: "WhatsApp AI Bot",
    tagline: "Voice and text assistant on WhatsApp",
    description:
      "Transcribes voice notes with Whisper, extracts intent with GPT and scores its confidence, then falls back to rule-based handling when confidence is low. Conversations persist through Prisma.",
    stack: ["Node.js", "Whisper", "OpenAI GPT", "Prisma"],
    github: "https://github.com/Sammycode332/WhatsappChatBot-BackendSquadCO",
  },
  {
    name: "Edison Learn",
    tagline: "AI voice tutoring platform",
    description:
      "An AI voice tutor that teaches students through spoken conversation. Built with a team; I built its AI prompt logic and data model.",
    stack: ["TODO"],
    highlight: "Top 5 - Nigeria SDG Hackathon 2025",
    live: "https://edison-learn.vercel.app",
    image: "/projects/edison.webp",
  },
  {
    name: "Koya Clinic Booking",
    tagline: "Clinic appointment booking API",
    description:
      "A FastAPI + PostgreSQL booking API with a React frontend. The frontend calls the API through a serverless proxy, so the API key never reaches the browser.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Vite"],
    live: "https://koya-clinic-booking-smoky.vercel.app",
    image: "/projects/koya.webp",
    github: "https://github.com/Sammycode332/koya-clinic-booking",
  },
  {
    name: "Eventify",
    tagline: "Event registration platform",
    description:
      "Express REST API with JWT auth and role-based access for attendees, organizers and admins. Database transactions with row-level locks (SELECT … FOR UPDATE) stop simultaneous registrations from overbooking an event.",
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Supabase Auth", "React"],
    live: "https://event-registration-system-mu-eight.vercel.app",
    image: "/projects/eventify.webp",
    github: "https://github.com/Sammycode332/event-registration-system",
  },
  {
    name: "PoliteScraper",
    tagline: "Book data pipeline (FlyRank)",
    description:
      "A TypeScript scraping pipeline built to respect the target server: identifying user-agent, request delays, timeouts, one retry, HTML caching and URL deduplication. Every record is validated with Zod.",
    stack: ["TypeScript", "Node.js", "Zod"],
    highlight: "60 valid records, 0 invalid, 0 failed pages",
    github: "https://github.com/Sammycode332/PoliteScraper",
  },
  {
    name: "Ecommerce Store",
    tagline: "Live storefront with payments",
    description:
      "A working storefront with products managed in a headless CMS and checkout handled by Stripe.",
    stack: ["Next.js", "React", "Sanity CMS", "Stripe"],
    live: "https://ecommerce-sanity-stripe-gold.vercel.app",
    image: "/projects/ecommerce.webp",
    github: "https://github.com/Sammycode332/ecommerce-sanity-stripe",
  },
];