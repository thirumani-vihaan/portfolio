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
  title: "IT Undergraduate | Flutter Developer | Software Engineering Enthusiast",
  tagline: "Building focused digital products with thoughtful interaction design.",
  bio: "Second-year Information Technology undergraduate with strong foundations in computer science and hands-on experience building real-world software applications. Experienced in collaborative development, feature implementation, and problem-solving using modern tools and programming languages. Motivated to learn across software engineering, product thinking, and program management while contributing to impactful, user-focused solutions.",
  aboutIntro:
    "My name is T Vihaan, and I am from Hyderabad, India. I am currently pursuing my B.Tech in Information Technology at VNR Vignana Jyothi Institute of Engineering and Technology. I enjoy building mobile applications, solving DSA problems, and learning how product decisions shape user experience.",
  contact: {
    email: "arjunthirumani02@gmail.com",
    mobile: "+91 8008036429",
    location: "Hyderabad, India"
  },
  socials: {
    github: "https://github.com/thirumani-vihaan",
    linkedin: "https://linkedin.com/in/thirumani-vihaan"
  },
  stats: [
    { label: "CodeChef Rating", value: "2 Star" },
    { label: "DSA Problems Solved", value: "500+" },
    { label: "Primary Focus", value: "Mobile + DSA" }
  ],
  achievements: [
    {
      title: "2 Star on CodeChef",
      detail: "Consistent competitive programming participation with steady rating improvements."
    },
    {
      title: "500+ DSA Problems Solved",
      detail: "Combined problem solving across platforms including LeetCode, CodeChef, and others."
    },
    {
      title: "Strong CS Foundations",
      detail: "Hands-on understanding of OOPS, DBMS, OS, and practical debugging workflows."
    }
  ],
  education: [
    {
      institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
      detail: "Bachelor of Technology in Information Technology • Hyderabad, India",
      period: "Aug 2024 - Present"
    },
    {
      institution: "Narayana Junior College",
      detail: "Class 12: 93% • Hyderabad, India",
      period: "2022 - 2024"
    }
  ],
  projects: [
    {
      title: "Smart Trip Planner - AI-Powered Travel Itinerary App",
      description:
        "Built an AI-powered itinerary app with split-screen planning and live-map navigation optimized for practical travel workflows.",
      period: "Jul 2025 - Sep 2025",
      tech: ["Flutter", "Dart", "Firebase", "Gemini AI", "Hive", "OpenStreetMap APIs", "REST APIs"],
      highlights: [
        "Reduced AI response latency by 60% (55s to 20s) by re-engineering backend requests into a concurrent multi-call architecture.",
        "Optimized application memory footprint by 35% using lazy-loading for map tiles based on viewport coordinates.",
        "Improved POI discovery speed by 40% through conditional detail fetching only on user selection.",
        "Engineered a prompt pipeline to convert raw user input into day-wise localized itineraries with Gemini AI and Hive offline persistence.",
        "Integrated OpenStreetMap services to resolve AI-generated locations into precise coordinates for real-time navigation.",
        "Developed route optimization logic to reduce redundant travel time in generated itineraries."
      ],
      linkLabel: "GitHub: Smart-Trip-Planner",
      linkHref: "https://github.com/thirumani-vihaan/Smart-Trip-Planner",
      image: "/smart-trip-planner-icon.svg",
      imageMode: "contain"
    },
    {
      title: "Mind Scribe - Study Logger + Focus Timer + Local Journal App",
      description:
        "Designed an offline-first productivity app combining focus workflows, study logs, and a local reflective journal.",
      period: "May 2025 - Jul 2025",
      tech: ["Flutter", "Dart", "Hive", "flutter_local_notifications", "State Management", "Custom UI Animations"],
      highlights: [
        "Achieved 40% faster data persistence with sub-100ms load times by architecting an offline-first Hive data suite.",
        "Reduced storage footprint by 30% through optimized image compression strategies.",
        "Maintained 60 FPS during heavy filtering via custom animations and reactive state management.",
        "Engineered a backfillable study-logging engine with automated validation, reducing manual entry errors by 25%.",
        "Integrated local notifications for focus sessions and reminders, increasing simulated engagement by 15%."
      ],
      linkLabel: "GitHub: Mind-Scribe",
      linkHref: "https://github.com/thirumani-vihaan/Mind-Scribe",
      image: "/mind-scribe-icon.svg",
      imageMode: "contain"
    },
    {
      title: "Chocolate Shopping App",
      description:
        "Developed a minimalist shopping app focused on clear navigation, product discovery, and basic cart logic.",
      period: "May 2024 - Jun 2025",
      tech: ["Flutter", "Dart", "Material Design", "State Management"],
      highlights: [
        "Built clean product listing, detail screens, and cart interactions using Flutter state management.",
        "Strengthened understanding of Flutter layout widgets including GridView, Stack, Card, and ListView."
      ],
      linkLabel: "GitHub: shopping-app",
      linkHref: "https://github.com/thirumani-vihaan/shopping-app",
      image: "/chocolate-shopping-icon.svg",
      imageMode: "contain"
    }
  ] as Project[],
  skills: {
    Languages: ["Dart", "C", "C++", "Java", "Python"],
    "Frameworks & Technologies": [
      "Flutter",
      "Firebase",
      "REST APIs",
      "JSON",
      "Hive",
      "Material Design",
      "State Management"
    ],
    "Tools & CS Fundamentals": [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "Data Structures & Algorithms",
      "OOPS",
      "DBMS",
      "Operating Systems"
    ]
  },
  strengths: [
    "User-centric feature thinking from ideation to implementation",
    "Consistent delivery through clean structure and reusable components",
    "Fast learning cycles and practical debugging habits"
  ],
  interests: ["Product Engineering", "Mobile Systems", "Developer Experience", "AI-Assisted Apps"]
};
