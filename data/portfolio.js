// ===== EDIT YOUR INFO HERE =====
export const SITE = {
  name: "Kim Janna I. Laya",
  brand: "Laya's Portfolio",
  major: "BS Information Technology · Cybersecurity",
  school: "De La Salle Lipa",
  email: "layakimjanna@gmail.com",
  phone: "09308492569",
  location: "Latag, Lipa City, Batangas",
  github: "https://github.com/kemjana",
  linkedin: "https://www.linkedin.com/in/kim-janna-laya-52a178388",
  resume: "/Laya-Resume.pdf", // file lives in /public
};

export const HERO_TAGS = ["Cybersecurity", "Vibe Coding", "Networking", "Cisco", "Proxmox"];

export const PROJECTS = [
  {
    title: "Ensemble-Based Phishing Threat Detection (Capstone)",
    icon: "shield",
    desc: "Ensemble-based Chrome extension and Node.js backend for real-time phishing detection, achieving 98.17% accuracy.",
    details:
      "Developed the admin web dashboard, PostgreSQL database, and REST API backend for our group capstone project for Total Risk Coverage (TRC) Corporation. The system integrates multi-layer threat evaluation rules with browser-level telemetry to inspect suspicious URLs, monitor flagged domains, and manage security alerts in real time.",
    tags: ["Node.js", "PostgreSQL", "Admin Dashboard", "REST API"],
    repo: "https://github.com/kemjana",
    live: "https://xtect-dashboard.vercel.app",
  },
  {
    title: "LabOps",
    icon: "server",
    desc: "Gamified Tier 1–3 IT help desk simulator with a browser PowerShell console and 30 Active Directory, GPO, and DNS/DHCP labs.",
    details:
      "Built with Next.js, TypeScript, Supabase, and the Google Gemini API. Users troubleshoot incidents in a simulated dual-host PowerShell environment (DC01 and WS01) with tab completion or on their own Windows Server VM via injection-safe setup scripts. Features server-verified checklist grading, a progressive hint ladder, daily shift debriefs, spaced-repetition reviews, and strict Supabase Row Level Security with isolated answer tables.",
    tags: ["Next.js", "TypeScript", "Supabase", "Gemini AI"],
    repo: "https://github.com/kemjana/LABOPS_Help-Desk-Simulator",
    live: "https://labops-help-desk-simulator.vercel.app/",
  },
  {
    title: "CyberLab",
    icon: "radar",
    desc: "Interactive cybersecurity training platform with AI phishing simulations, a password strength analyzer, and a prompt-injection CTF.",
    details:
      "Developed with Next.js, TypeScript, Supabase, and the Google Gemini API. Learners identify red flags in dynamically generated phishing emails, test password resilience with a client-side crack-time estimator, and extract hidden flags from three hardened AI helpdesk bots. Secured using AES-256-GCM encrypted answer keys, server-side flag checks, a defensive-only AI Security Coach, and a rate-limited PostgreSQL leaderboard.",
    tags: ["Next.js", "TypeScript", "Gemini AI"],
    repo: "https://github.com/kemjana/CYBERLAB_Learning-Lab",
    live: "https://cyberlab-learning-lab.vercel.app",
  },
  {
    title: "StudyIt",
    icon: "book",
    desc: "AI-powered study workspace that turns uploaded PDFs and course modules into page-cited reviewers, flashcards, and quizzes.",
    details:
      "Created with Next.js, TypeScript, Supabase, pdf.js, and the Google Gemini API. Documents are parsed locally in the browser so raw files are never uploaded, generating chapter outlines, flip-card decks, and timed exams from selected page ranges. Enforces strict source grounding by verifying every AI quote against the original text, alongside tolerant typed-answer grading, a source-restricted 'Explain simpler' tool, and private user workspaces with study streaks.",
    tags: ["Next.js", "TypeScript", "Supabase", "Gemini AI"],
    repo: "https://github.com/kemjana/STUDYIT_Reviewer-Maker",
    live: "https://studyit-reviewer-maker.vercel.app",
  },
];

export const CERTS = [
  {
    title: "Introduction to Cybersecurity",
    org: "Cisco Networking Academy",
    date: "09 Oct 2026",
    cert: "/certs/cybersecurity-cert.webp",
    badge: "/certs/cybersecurity-badge.webp",
  },
  {
    title: "Networking Basics",
    org: "Cisco Networking Academy",
    date: "15 Oct 2026",
    cert: "/certs/networking-basics-cert.webp",
    badge: "/certs/networking-basics-badge.webp",
  },
  {
    title: "Introduction to Modern AI",
    org: "Cisco Networking Academy",
    date: "11 Oct 2026",
    cert: "/certs/modern-ai-cert.webp",
    badge: "/certs/modern-ai-badge.webp",
  },
];

export const STACK = [
  { group: "Cybersecurity & Admin", items: [
    { name: "Active Directory", icon: "users" },
    { name: "Nessus", icon: "scan" },
    { name: "Pi-Hole", icon: "filter" },
    { name: "Tailscale", icon: "route" },
  ]},
  { group: "Networking & Virtualization", items: [
    { name: "Proxmox VE", icon: "server" },
    { name: "Cisco Packet Tracer", icon: "network" },
    { name: "Subnetting", icon: "split" },
    { name: "IP Addressing", icon: "network" },
  ]},
  { group: "Development & Databases", items: [
    { name: "Next.js", icon: "code" },
    { name: "TypeScript", icon: "code" },
    { name: "Node.js", icon: "terminal" },
    { name: "JavaScript", icon: "code" },
    { name: "HTML", icon: "globe" },
    { name: "C++", icon: "cpu" },
    { name: "SQL", icon: "database" },
    { name: "PostgreSQL", icon: "database" },
    { name: "Supabase", icon: "database" },
    { name: "REST APIs", icon: "plug" },
    { name: "phpMyAdmin", icon: "database" },
    { name: "Gemini AI API", icon: "sparkles" },
  ]},
  { group: "Tools", items: [
    { name: "VS Code", icon: "code" },
    { name: "GitHub", icon: "git" },
    { name: "Vercel", icon: "rocket" },
    { name: "Postman", icon: "send" },
    { name: "Power BI", icon: "chart" },
    { name: "Microsoft Office", icon: "briefcase" },
    { name: "Google Workspace", icon: "cloud" },
    { name: "XAMPP", icon: "hdd" },
  ]},
];
