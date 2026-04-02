export type Project = {
  title: string;
  description: string;
  tech: string[];
  linkLabel: string;
  linkHref: string;
  image: string;
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  highlights: string[];
};

export const portfolioData = {
  name: "T Vihaan",
  shortName: "Vihaan",
  title: "IT Undergraduate | Flutter Developer | Software Engineering Enthusiast",
  tagline: "Building focused digital products with thoughtful interaction design.",
  bio: "Second-year Information Technology undergraduate with strong foundations in computer science and hands-on experience building real-world software applications. Motivated to learn across software engineering, product thinking, and program management.",
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
      detail: "B.Tech in Information Technology",
      period: "Aug 2024 - Present"
    },
    {
      institution: "Narayana Junior College",
      detail: "Class 12 (93%)",
      period: "2022 - 2024"
    }
  ],
  projects: [
    {
      title: "Smart Trip Planner",
      description:
        "AI-Powered Travel Itinerary App generating day-wise plans based on user inputs. Features split-screen UI (itinerary + live map), route optimization, and POI discovery.",
      tech: ["Flutter", "Dart", "Firebase Auth", "Gemini AI API", "Hive", "OpenStreetMap APIs"],
      linkLabel: "GitHub: Smart-Trip-Planner",
      linkHref: "https://github.com/thirumani-vihaan/Smart-Trip-Planner",
      image:
        "https://raw.githubusercontent.com/thirumani-vihaan/Smart-Trip-Planner/main/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"
    },
    {
      title: "Mind Scribe",
      description:
        "Offline-first study productivity app integrating a focus timer, session logs, and a reflective journal with image uploads. Includes calendar filtering and local notifications.",
      tech: ["Flutter", "Dart", "Hive", "Local Notifications", "Custom UI Animations"],
      linkLabel: "GitHub: Mind-Scribe",
      linkHref: "https://github.com/thirumani-vihaan/Mind-Scribe",
      image:
        "https://raw.githubusercontent.com/thirumani-vihaan/Mind-Scribe/main/assets/images/nest.png"
    },
    {
      title: "Chocolate Shopping App",
      description:
        "Minimalist shopping UI focused on clean navigation, product listing, and cart logic using state management.",
      tech: ["Flutter", "Dart", "Material Design", "State Management"],
      linkLabel: "GitHub: shopping-app",
      linkHref: "https://github.com/thirumani-vihaan/shopping-app",
      image:
        "https://raw.githubusercontent.com/thirumani-vihaan/shopping-app/main/assets/images/app_icon.png"
    }
  ] as Project[],
  experience: [
    {
      role: "Student Developer",
      org: "Personal & Academic Projects",
      period: "2024 - Present",
      highlights: [
        "Designed and built Flutter apps with offline-first storage patterns and practical state management.",
        "Integrated AI APIs for itinerary and productivity workflows while optimizing UX for daily usage.",
        "Used GitHub-based workflows for versioning, issue tracking, and iterative feature releases."
      ]
    }
  ] as Experience[],
  certifications: [
    "Foundational DSA and Problem Solving",
    "Object-Oriented Programming Fundamentals",
    "DBMS and Operating Systems Coursework"
  ],
  skills: {
    Languages: ["Dart", "C", "C++", "Java", "Python"],
    Frameworks: ["Flutter", "Firebase", "REST APIs", "JSON", "Hive", "Material Design"],
    "Tools & CS": ["Git", "GitHub", "VS Code", "Android Studio", "DSA", "OOPS", "DBMS", "OS"]
  },
  strengths: [
    "User-centric feature thinking from ideation to implementation",
    "Consistent delivery through clean structure and reusable components",
    "Fast learning cycles and practical debugging habits"
  ],
  interests: ["Product Engineering", "Mobile Systems", "Developer Experience", "AI-Assisted Apps"]
};
