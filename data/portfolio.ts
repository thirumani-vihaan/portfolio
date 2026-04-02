export type Project = {
  title: string;
  description: string;
  tech: string[];
  linkLabel: string;
  linkHref: string;
  image: string;
};

export const portfolioData = {
  name: "T Varaprasad",
  title: "IT Undergraduate | Flutter Developer | Software Engineering Enthusiast",
  bio: "Second-year Information Technology undergraduate with strong foundations in computer science and hands-on experience building real-world software applications. Motivated to learn across software engineering, product thinking, and program management.",
  contact: {
    email: "arjunthirumani02@gmail.com",
    mobile: "+91 8008036429",
    location: "Hyderabad, India"
  },
  socials: {
    github: "https://github.com/varaprasad-t",
    linkedin: "https://linkedin.com/in/varaprasad-t"
  },
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
  skills: {
    Languages: ["Dart", "C", "C++", "Java", "Python"],
    Frameworks: ["Flutter", "Firebase", "REST APIs", "JSON", "Hive", "Material Design"],
    "Tools & CS": ["Git", "GitHub", "VS Code", "Android Studio", "DSA", "OOPS", "DBMS", "OS"]
  }
};
