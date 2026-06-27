// Edit this file to update site content — components read from here.

export const profile = {
  name: "Hanan Osama Salah",
  firstName: "Hanan",
  title: "Final Year Software Engineering Student at Universiti Teknologi Malaysia (UTM)",
  tagline: "I build AI systems that solve real problems.",
  bio: "Final-year Software Engineering student at Universiti Teknologi Malaysia, building multi-agent health platforms, autonomous drone systems, and the occasional hackathon-winning prototype.",
  location: "Kuala Lumpur, Malaysia ↔ Jazan, Saudi Arabia",
  university: "Universiti Teknologi Malaysia — Class of 2027",
  languages: ["Arabic", "English"],
  status: "Seeking August Internship 2026",
  email: "slahhnan040@gmail.com",
  graduateEmail: "hussein.h@graduate.utm.my",
  phone: "+60187782179",
  github: "https://github.com/Hanan20x",
  linkedin: "https://linkedin.com/in/hanan-salah",
  resumeUrl: "/resume.pdf", 
};

export const projects = [
  {
    id: "healthprime",
    title: "HealthPrime",
    badge: "Final Year Project",
    summary:
      "A multi-agent health information system for Alraith Primary Healthcare Centre in Jazan, Saudi Arabia — featuring an AI diagnostic assistant with confidence scoring and a clinical scheduling/triage agent.",
    description:
      "HealthPrime is a bilingual (Arabic/English) healthcare platform designed for a primary care clinic in Jazan. It combines a React + TypeScript frontend with a FastAPI + PostgreSQL backend, and uses LangChain-based AI agents for two core workflows: diagnostic assistance and clinical scheduling. The diagnostic agent uses a five-signal confidence scoring system — symptom-criteria match, lab/vital alignment, RAG similarity, self-consistency, and comorbidity priors — to support (not replace) clinical decision-making. The scheduling agent follows a form-first, AI-assist-second model so nurses and admins stay in control while the AI flags urgency and suggests doctor assignment.",
    role: "Solo full-stack developer & system designer (FYP)",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "LangChain", "RAG"],
    challenges: [
      "Designing a confidence-scoring system that's transparent enough for clinicians to trust and override.",
      "Supporting full Arabic/English bilingual UI with proper RTL layout.",
      "Balancing AI assistance with human-in-the-loop control for clinical safety.",
    ],
    github: "https://github.com/Hanan20x/health-prime",
    image: "/projects/healthprime/landing.png",
    gallery: [
      "/projects/healthprime/patient-emr.png",
      "/projects/healthprime/diagnosis-input.png",
      "/projects/healthprime/ai-diagnostic-assistant.png",
    ],
    video: null, // TODO: add demo video URL
  },
  {
    id: "drone-swarm",
    title: "Drone Swarm Management System",
    badge: "VHACK 2026 — Top 20 Finalist",
    summary:
      "A full-stack command and control platform for coordinating autonomous drone swarms, combining a hybrid LLM planner with real-time 3D visualization.",
    description:
      "Project Overlord is a drone swarm management system built for VHACK 2026, where it placed in the Top 20. It pairs a Laravel + PHP backend with a Three.js-powered 3D control interface, and uses a hybrid planner (Gemini 2.5 Flash + local Ollama models) alongside YOLOv8n for object detection and A* pathfinding for navigation. A Node.js MCP server exposes swarm controls as callable tools, letting the LLM planner issue real commands to the simulated fleet.",
    role: "Full-stack developer — backend, 3D interface, AI planner integration",
    tags: ["Laravel", "Three.js", "Gemini 2.5", "YOLOv8n", "Node.js", "A* Pathfinding"],
    challenges: [
      "Integrating a hybrid cloud/local LLM planner that could issue real-time, safe commands to multiple drones.",
      "Building a performant 3D visualization with draggable obstacles and live orbit/zoom controls.",
      "Designing for command-link security (identified encryption as a key gap against NIST/STANAG standards).",
    ],
    github: "https://github.com/CQ0113/drone-management-system",
    image: "/projects/drone-swarm/before-swarm.png",
    gallery: ["/projects/drone-swarm/after-swarm.png"],
    video: null,
  },
  {
    id: "mindbloom",
    title: "MindBloom",
    badge: null,
    summary: "A web application built with Spring MVC and Thymeleaf.",
    description:
      "MindBloom is a web application focused on mental wellness support, built using a classic server-rendered Java stack.",
    role: "Developer",
    tags: ["Spring MVC", "Thymeleaf", "Java"],
    challenges: [],
    github: "https://github.com/Hanan20x",
    image: "/projects/mindbloom/login-page.png",
    gallery: ["/projects/mindbloom/counselor-dashboard.png"],
    video: null,
  },
  {
    id: "learnloop",
    title: "LearnLoop",
    badge: null,
    summary: "A cross-platform learning companion app built with Flutter.",
    description:
      "LearnLoop is a mobile learning app built with Flutter and Dart, designed to help students track and reinforce study habits.",
    role: "Developer",
    tags: ["Flutter", "Dart"],
    challenges: [],
    github: "https://github.com/Hanan20x",
    image: "/projects/learnloop/poster.png",
    gallery: [],
    video: "/projects/learnloop/demo.mp4",
  },
  {
    id: "speedtrials2d",
    title: "SpeedTrials2D",
    badge: "Real-Time Systems",
    summary:
      "A ROS 2-inspired 2D car simulator built for Real-Time Software Engineering — featuring a perception module for scene detection, lane offset, and brightness analysis.",
    description:
      "SpeedTrials2D is a 2D autonomous-driving simulator built as part of a Real-Time Software Engineering (RTSE) team project, structured around ROS 2-style node communication. My contribution was the perception module — scene_detector.py — which handles real-time lane offset estimation, low-brightness detection, and trailing-car detection from simulated sensor data. The project followed a full Git workflow with feature branches and AI-disclosure commits, working under real-time constraints typical of embedded/autonomous systems.",
    role: "Member C — Perception module developer",
    tags: ["Python", "ROS 2", "Real-Time Systems", "Git"],
    challenges: [
      "Implementing lane offset estimation that stays within real-time processing constraints.",
      "Detecting low-brightness/night conditions reliably from simulated camera input.",
      "Coordinating a multi-member Git workflow with feature branches across the team's ROS 2-inspired architecture.",
    ],
    github: "https://github.com/Hanan20x",
    image: "/projects/rtse/simulator.jpg",
    gallery: [],
    video: "/projects/rtse/demo.mp4",
  },
  {
    id: "dhl-incident-reporting",
    title: "AI-Enhanced Incident Reporting System",
    badge: "DHL DAC 3.0 Challenge",
    summary:
      "A full-stack incident reporting platform built for the DHL DAC 3.0 Challenge — combining a Laravel REST API, a React frontend, and a UiPath RPA workflow for automated processing.",
    description:
      "Built for the DHL DAC 3.0 Challenge, this system streamlines incident reporting and triage for logistics operations. The backend is a Laravel 13 REST API on PostgreSQL 16 with Sanctum authentication, paired with a React frontend for report submission and tracking. A UiPath RPA workflow automates downstream processing of submitted incidents, reducing manual handling. The project also included a full Word report with embedded screenshots documenting the system end-to-end.",
    role: "Full-stack developer — backend API, frontend, and RPA integration",
    tags: ["Laravel", "PostgreSQL", "React", "UiPath RPA", "Sanctum Auth"],
    challenges: [
      "Resolving PHP extension and environment issues to get the Laravel API running reliably.",
      "Bridging local development with ngrok so the UiPath RPA workflow could reach the live API.",
      "Implementing secure Sanctum-based authentication between the frontend and backend.",
      "Working around GitHub Classroom push restrictions under competition time pressure.",
    ],
    github: "https://github.com/Hanan20x",
    image: "/projects/dhl/landing.png",
    gallery: ["/projects/dhl/reporting.png"],
    video: "/projects/dhl/demo.mp4",
  },
];

export const skills = [
  { name: "React", level: 90 },
  { name: "Python / FastAPI", level: 88 },
  { name: "LangChain / AI Agents", level: 85 },
  { name: "Java / Spring", level: 75 },
];

export const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "Java", "C++", "PHP", "Dart", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Angular", "Node.js", "Django", "FastAPI", "Laravel", "Spring MVC", "Bootstrap"],
  },
  {
    category: "AI & ML",
    skills: ["LangChain", "Gemini API", "Claude API"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "Kubernetes", "MySQL", "PostgreSQL", "Figma"],
  },
];

export const involvements = [
  {
    org: "She Plus Tech",
    role: "Member (June 2026 - Present)",
    description: "Active member dedicated to fostering community and promoting women in technology.",
    image: "/involvements/she-plus-tech.jpg",
  },
  {
    org: "Airost UTM",
    role: "Event Unit Member (January 2026 - June 2026)",
    description: "Participated in events like the Varsity Hackathon (VHACK) and served as PIC & Mentor for the RAG For Everyone Workshop.",
    image: "/involvements/vhack-hackathon.jpg",
  },
  {
    org: "Google Developer Groups on Campus (GDG on Campus UTM)",
    role: "Creative Marketing Core Team Member (December 2025 - May 2026)",
    description: "Organized and promoted the my AI Future Hackathon and engaged with the Gemini Nexus event.",
    image: "/involvements/my-ai-future.jpg",
  },
  {
    org: "AIESEC",
    role: "Organizing Committee (April 2025 - August 2025)",
    description: "• Echo 7.0 Project: Supported planning and coordination, assisted with logistics and participant engagement.\n• Leadership Bootcamp 3.0: Coordinated venue arrangements and training materials.\n• Youth Speak Forum 2025: Conducted street interviews and produced creative content.",
    image: "/involvements/solar-energy.jpg",
  },
  {
    org: "ISS-SUDAN",
    role: "Head of Technical Support & Multiple Roles (1 year 2 months)",
    description: "• Head of Technical Support for SUDART event.\n• Organizer in Techno Coding Competition & Ramadan Iftar.\n• Main performer in Arabic Culture Day.\n• Member of the Academic Committee & Silver Member.",
    image: "/involvements/sudart.jpg",
  }
];

export const hackathons = [
  {
    name: "UM Technothon",
    result: "Participant",
    project: "Competitive coding and innovation",
  }
];

export const certificates = [
  {
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
  },
  {
    name: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
  },
  {
    name: "Generative AI for Everyone",
    issuer: "DeepLearning.AI",
  },
  {
    name: "Java Programming for Beginners",
    issuer: "IBM",
  },
  {
    name: "Intermediate Python",
    issuer: "DataCamp",
  },
  {
    name: "Intermediate Git",
    issuer: "DataCamp",
  }
];
