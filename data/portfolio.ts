export type Project = {
  title: string;
  description: string;
  period: string;
  tech: string[];
  highlights: string[];
  linkLabel: string;
  linkHref: string;
  image: string;
  imageMode?: "cover" | "contain";
};

export const portfolioData = {
  name: "T Vihaan",
  shortName: "Vihaan",
  title:
    "IT Undergraduate | Backend & Mobile Engineer | Competitive Programmer",
  tagline:
    "Building backend systems and high-performance mobile applications with Kotlin, Go, and C++.",
  bio: "Information Technology undergraduate building backend systems and high-performance mobile applications with Kotlin, Go, and C++. Active competitive programmer (500+ problems solved) with strong foundations in concurrent systems, REST API design, and clean architecture.",
  aboutIntro:
    "My name is T Vihaan, and I am from Hyderabad, India. I am currently pursuing my B.Tech in Information Technology at VNR Vignana Jyothi Institute of Engineering and Technology. I build backend systems and performant mobile apps, solve competitive programming challenges, and care deeply about clean architecture and product thinking.",
  contact: {
    email: "thirumanivihaan@gmail.com",
    mobile: "+91 8008036429",
    location: "Hyderabad, India",
  },
  socials: {
    github: "https://github.com/thirumani-vihaan",
    linkedin: "https://linkedin.com/in/thirumani-vihaan",
  },
  stats: [
    { label: "Hackathon", value: "🏆 Winner" },
    { label: "DSA Problems Solved", value: "500+" },
    { label: "Primary Focus", value: "Backend + Mobile" },
  ],
  achievements: [
    {
      title: "Hackathon Winner",
      detail:
        "Secured 1st place at the Build & Break Hackathon by the Internet Society.",
    },
    {
      title: "500+ Problems Solved",
      detail:
        "LeetCode contest rating in the top percentile; specializing in DP, graph algorithms, and advanced data structures in C++.",
    },
    {
      title: "Strong CS Foundations",
      detail:
        "Deep understanding of System Design, Concurrency, Low-Level Design, Design Patterns, DBMS, and Operating Systems.",
    },
  ],
  education: [
    {
      institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
      detail:
        "Bachelor of Technology in Information Technology (Expected 2028) • Hyderabad, India",
      period: "Aug 2024 – Present",
    },
    {
      institution: "Narayana Junior College",
      detail: "Class 12: 93% • Hyderabad, India",
      period: "2022 – 2024",
    },
  ],
  projects: [
    {
      title: "ImpactForge — Volunteer Management Platform",
      description:
        "Engineered a cross-platform volunteer management application with real-time task allocation, impact analytics, gamification, and secure serverless backend.",
      period: "May 2026 – Jun 2026",
      tech: [
        "Flutter",
        "Dart",
        "Firebase",
        "Cloud Firestore",
        "GetX",
        "Material 3",
      ],
      highlights: [
        "Engineered a cross-platform volunteer management application using Flutter and GetX for reactive state management, enabling real-time task allocation and community engagement across web and mobile.",
        "Architected a serverless backend utilizing Cloud Firestore and Firebase Storage, enforcing Attribute-Based Access Control (ABAC) via granular security rules for secure multimedia task verification.",
        "Developed an impact analytics dashboard and gamification engine, leveraging real-time NoSQL data streams to render live charts, global leaderboards, and volunteer milestones.",
        "Designed a clean-architecture presentation layer featuring a responsive Material 3 UI with custom glassmorphic components, strictly decoupling business logic from cloud data sources.",
      ],
      linkLabel: "GitHub: ImpactForge",
      linkHref: "https://github.com/thirumani-vihaan/ImpactForge",
      image: "/impactforge-icon.svg",
      imageMode: "contain",
    },
    {
      title: "Smart Trip Planner — AI-Powered Itinerary App",
      description:
        "Built an AI-powered itinerary app with concurrent API aggregation, lazy-loading maps, and optimized POI discovery for practical travel workflows.",
      period: "Sep 2025 – Dec 2025",
      tech: [
        "Flutter",
        "Dart",
        "Firebase",
        "Gemini API",
        "Hive",
        "OpenStreetMap APIs",
        "REST APIs",
      ],
      highlights: [
        "Reduced AI response latency by 60% (55s to 20s) by designing a concurrent, multi-threaded API aggregation architecture that executes dependent requests in parallel via Scatter-Gather patterns.",
        "Optimized memory footprint by 35% through on-demand lazy-loading for map tiles, minimizing garbage collection overhead and eliminating redundant network calls across viewport updates.",
        "Improved POI discovery speed by 40% by implementing conditional lazy-state initialization and caching algorithms to eliminate redundant CPU-intensive viewport recalculations.",
      ],
      linkLabel: "GitHub: Smart-Trip-Planner",
      linkHref: "https://github.com/thirumani-vihaan/Smart-Trip-Planner",
      image: "/smart-trip-planner-icon.svg",
      imageMode: "contain",
    },
    {
      title: "Mind Scribe — Study Logger & Focus Timer",
      description:
        "Designed an offline-first productivity app combining focus workflows, study logs, and a reflective journal with sub-100ms load times.",
      period: "May 2025 – Jul 2025",
      tech: [
        "Flutter",
        "Dart",
        "Hive",
        "Local Notifications",
        "State Management",
        "Custom UI Animations",
      ],
      highlights: [
        "Achieved 40% faster data persistence and sub-100ms load times by architecting an offline-first NoSQL suite using Hive and optimized image compression to reduce storage footprint by 30%.",
        "Maintained a consistent 60 FPS during heavy data filtering by optimizing UI performance through custom animations and reactive state management.",
        "Engineered a backfillable study-logging engine with automated session validation, reducing manual entry errors by 25% via calendar-based filtering logic.",
        "Integrated a local notification system for focus sessions and routine reminders, resulting in a 15% increase in simulated user engagement.",
      ],
      linkLabel: "GitHub: Mind-Scribe",
      linkHref: "https://github.com/thirumani-vihaan/Mind-Scribe",
      image: "/mind-scribe-icon.svg",
      imageMode: "contain",
    },
  ] as Project[],
  skills: {
    Languages: ["Kotlin", "Go", "C++", "Java", "Dart", "SQL"],
    "Backend & Systems": [
      "Spring Boot",
      "REST APIs",
      "WebSockets",
      "PostgreSQL",
      "Redis",
      "Docker",
      "JUnit",
      "Mockito",
    ],
    "Mobile & Frontend": [
      "Flutter",
      "Jetpack Compose",
      "GetX",
      "Material 3",
      "Hive",
    ],
    Tools: ["Git", "GitHub", "Linux/Shell", "Postman", "IntelliJ IDEA", "VS Code"],
    "CS Fundamentals": [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "System Design",
      "Concurrency",
      "Low-Level Design",
      "Design Patterns",
    ],
  },
  strengths: [
    "Building performant backend systems with clean, scalable architecture",
    "Shipping cross-platform mobile apps from ideation to production",
    "Consistent competitive programming practice and algorithmic thinking",
    "Fast learning cycles and practical debugging habits",
  ],
  interests: [
    "Backend Engineering",
    "System Design",
    "Mobile Systems",
    "Competitive Programming",
    "Developer Experience",
  ],
};
