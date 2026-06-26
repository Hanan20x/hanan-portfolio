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
  status: "Open to internships — Jul/Aug 2026",
  email: "your-email@example.com", // TODO: replace with real email
  github: "https://github.com/Hanan20x",
  linkedin: "https://linkedin.com/in/hanan-salah",
  resumeUrl: "/resume.pdf", // TODO: drop your resume PDF into /public as resume.pdf
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
    image: null, // TODO: add screenshot or architecture diagram
    gallery: [], // TODO: add more images/diagrams
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
    image: null,
    gallery: [],
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
    image: null,
    gallery: [],
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
    image: null,
    gallery: [],
    video: null,
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
    image: null,
    gallery: [],
    video: null,
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
    image: null,
    gallery: [],
    video: null,
  },
];

export const skills = [
  { name: "React", level: 90 },
  { name: "Python / FastAPI", level: 88 },
  { name: "LangChain / AI Agents", level: 85 },
  { name: "Java / Spring", level: 75 },
];

export const involvements = [
  {
    org: "AIROST",
    role: "Member / Workshop Organizer",
    description:
      "Served as PIC and Mentor for the 'RAG For Everyone' workshop with IEEE UTM — planned the schedule, briefed the speaker, and built live demo pipelines.",
    image: null,
  },
  {
    org: "GDG on Campus UTM",
    role: "Member",
    description: "Active member of Google Developer Groups on Campus at UTM.",
    image: null,
  },
  {
    org: "AIESEC",
    role: "Multiple Roles",
    description: "Held several roles within AIESEC's UTM chapter.",
    image: null,
  },
  {
    org: "IndabaX Sudan / ISS-SUDAN",
    role: "Community Member",
    description: "Maintains community ties supporting Sudanese students and the AI community.",
    image: null,
  },
];

export const hackathons = [
  {
    name: "VHACK 2026",
    result: "Top 20 Finalist",
    project: "Drone Swarm Management System",
  },
  {
    name: "myAI Future Hackathon",
    result: "Organizing Team",
    project: "Promotional design & event coordination",
  },
];
