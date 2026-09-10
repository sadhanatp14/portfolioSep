// ─── Portfolio Content Data ───────────────────────────────────────────────────

export const personal = {
  name: "Sadhana T P",
  firstName: "Sadhana",
  title: "Full Stack Developer",
  subtitle: "& AI/ML Engineer",
  tagline: "Building things\nthat work &\nlook stunning.",
  bio: [
    "I'm a Computer Science student at Amrita Vishwa Vidyapeetham with a CGPA of 9.29, passionate about bridging the gap between robust backend systems and pixel-perfect frontends. I believe great software should be both powerful and beautiful.",
    "From deploying quantized ML models on edge devices to designing intuitive dashboards for underserved communities — I bring a full-picture perspective to every project. My work spans AI/ML pipelines, NLP systems, and full-stack web applications.",
    "When I'm not coding, I'm a district & state-level Silambam practitioner, NSS volunteer, and R&D member of Tensor AI Club. Discipline, focus, and craft — both in martial arts and software.",
  ],
  email: "sadhana.aquaris@gmail.com",
  phone: "+91-9345987025",
  github: "https://github.com/sadhanatp14",
  linkedin: "https://linkedin.com/in/sadhana-tp",
  location: "Coimbatore, Tamil Nadu",
  available: true,
};

export const stats = [
  { label: "GPA", value: 9.29, suffix: "/10", isDecimal: true },
  { label: "Projects Shipped", value: 5, suffix: "+" },
  { label: "Certifications", value: 3, suffix: "+" },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills = {
  frontend: {
    label: "Frontend",
    color: "blush",
    items: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  backend: {
    label: "Backend & APIs",
    color: "lavender",
    items: [
      { name: "Python / FastAPI", level: 90 },
      { name: "Flask", level: 85 },
      { name: "Node.js", level: 72 },
      { name: "MySQL / Databases", level: 80 },
    ],
  },
  aiml: {
    label: "AI & ML",
    color: "gold",
    items: [
      { name: "TensorFlow / PyTorch", level: 88 },
      { name: "NLP & RAG", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "SHAP / Explainability", level: 75 },
    ],
  },
  tools: {
    label: "Tools & DevOps",
    color: "rose",
    items: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 72 },
      { name: "Power BI", level: 68 },
      { name: "TensorFlow Lite", level: 82 },
    ],
  },
};

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: "01",
    name: "SakhiCircle",
    category: "Full Stack · AI/ML · FinTech",
    description:
      "A role-based microservice credit risk platform for women's Self-Help Groups. Built with FastAPI, JWT-secured multi-tenant access, SHAP-explainable Random Forest scoring, and real-time audit logging — making financial decisions transparent and accountable.",
    highlights: [
      "Random Forest regression model with SHAP-based local explainability",
      "Transparent 0–100 credit scores for decision-level risk assessment",
      "JWT-secured multi-tenant access control with audit logging",
    ],
    tech: ["Python", "FastAPI", "Scikit-Learn", "SHAP", "JWT", "Docker"],
    github: "https://github.com/sadhanatp14",
    live: null,
    image: "/images/project-sakhicircle.jpg",
    featured: true,
    accent: "rose",
  },
  {
    id: "02",
    name: "CowKin",
    category: "IoT · ML · Edge AI",
    description:
      "Smart cattle behavior monitoring using a leakage-free CNN-LSTM pipeline with 90% accuracy, deployed as a quantized TensorFlow Lite Micro model on Sony Spresense for fully on-device, low-latency inference.",
    highlights: [
      "32×6 sliding-window segmentation with 75% overlap and SMOTE balancing",
      "Benchmarked 6 architectures; CNN-LSTM achieved 90% accuracy",
      "On-device inference on Sony Spresense under tight RAM constraints",
    ],
    tech: ["Python", "TensorFlow", "TFLite Micro", "Sony Spresense", "CNN-LSTM"],
    github: "https://github.com/sadhanatp14",
    live: null,
    image: "/images/project-cowkin.jpg",
    featured: false,
    accent: "gold",
  },
  {
    id: "03",
    name: "PillPal",
    category: "NLP · Full Stack · Healthcare",
    description:
      "An AI-powered pharmacist's assistant that converts unstructured prescription images into normalized medical entities using an OCR → NLP → parsing pipeline, with real-time alternative medicine suggestions.",
    highlights: [
      "Google Vision OCR + NLP pipeline for prescription parsing",
      "Heuristic + AI fallback extraction for improved accuracy",
      "Real-time alternative drug suggestions for unavailable medicines",
    ],
    tech: ["Python", "Flask", "Google Vision API", "NLP", "OpenCV"],
    github: "https://github.com/sadhanatp14",
    live: null,
    image: "/images/project-pillpal.jpg",
    featured: false,
    accent: "lavender",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience = [
  {
    company: "Infosys Springboard",
    role: "Project Intern",
    period: "Aug 2025 – Oct 2025",
    current: true,
    description:
      "Built a role-constrained, multi-agent LLM architecture separating planning, retrieval, and synthesis to enhance grounding, traceability, and reasoning quality in automated research workflows.",
    achievements: [
      "Designed multi-agent architecture for automated research workflows",
      "Separated planning, retrieval, and synthesis agents for better traceability",
      "Enhanced reasoning quality through role-constrained LLM pipelines",
    ],
    tech: ["LLMs", "RAG", "Multi-Agent Systems", "Python", "LangChain"],
  },
  {
    company: "Education New Zealand | DESTRO",
    role: "Virtual Intern — AI/ML",
    period: "Jul 2025",
    current: false,
    description:
      "Engineered an NLP-to-ranking pipeline that converts brand missions and ambassador bios into semantic embeddings and TF-IDF signals, fused with engagement features, optimized via a LightGBM LambdaRank model.",
    achievements: [
      "Built NLP-to-ranking pipeline for ambassador selection optimization",
      "Converted brand missions into semantic embeddings + TF-IDF signals",
      "Optimized ambassador selection via LightGBM LambdaRank model",
    ],
    tech: ["NLP", "LightGBM", "TF-IDF", "Semantic Embeddings", "Python"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education = {
  institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
  degree: "B.Tech, Computer Science and Engineering",
  period: "2023 – Present",
  gpa: "9.29",
  rollNo: "CB.SC.U4CSE23441",
};

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications = [
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services" },
];

// ─── Organizations ────────────────────────────────────────────────────────────

export const organizations = [
  {
    name: "Tensor AI Club",
    role: "R&D Member",
    period: "Jul 2025 – Present",
  },
  {
    name: "National Service Scheme (NSS)",
    role: "Community Volunteer",
    period: "Jun 2024 – Jun 2025",
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────

export const achievements = [
  "District & State Level Player — Silambam (Martial Art)",
  "Sports Team Captain — Led school sports team in intra-school competitions",
];

// ─── Tech Stack Marquee ───────────────────────────────────────────────────────

export const marqueeItems = [
  "Python",
  "React",
  "Next.js",
  "TypeScript",
  "TensorFlow",
  "FastAPI",
  "Node.js",
  "Docker",
  "PyTorch",
  "Tailwind",
  "SHAP",
  "LLMs",
  "RAG",
  "OpenCV",
  "Scikit-Learn",
];
