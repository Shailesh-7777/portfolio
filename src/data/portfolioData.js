export const personalInfo = {
  name: "Shailesh Kumar",
  monogram: "SK",
  title: "Full Stack Developer",
  subTitle: "Full Stack Developer | Problem Solver",
  location: "Bettiah, Bihar, India",
  email: "kumsailesh782@gmail.com",
  github: "https://github.com/Shailesh-7777",
  linkedin: "https://www.linkedin.com/in/shailesh-kumar-507324353",
  leetcode: "https://leetcode.com/u/Shailesh-7777",
  status: "Open for Opportunities",
  bio: "Full Stack Developer specializing in responsive React frontends, robust Node.js/Express and Java backends, and practical software applications.",
  heroSummary: "Building responsive web applications, scalable REST APIs, and practical software products with a sharp focus on clean code, intuitive UX, and reliable architectures."
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" }
];

export const skillCategories = [
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Building responsive, component-driven, and accessible client interfaces.",
    skills: [
      { name: "HTML5", highlight: "Semantic & SEO" },
      { name: "CSS3", highlight: "Responsive & Flex/Grid" },
      { name: "JavaScript", highlight: "ES6+, Async, DOM" },
      { name: "React.js", highlight: "Hooks & Component Architecture" },
      { name: "Vite", highlight: "Fast Build & HMR" }
    ]
  },
  {
    category: "Backend Development",
    icon: "Server",
    description: "Engineering secure server logic, route handling, and RESTful architectures.",
    skills: [
      { name: "Node.js", highlight: "Event-driven runtime" },
      { name: "Express.js", highlight: "Middleware & Routing" },
      { name: "REST APIs", highlight: "CRUD, Auth & Status Codes" }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    description: "Designing schema structures, models, and data persistence layers.",
    skills: [
      { name: "MongoDB", highlight: "Document-oriented NoSQL" },
      { name: "Mongoose", highlight: "Schema Validation & ODM" }
    ]
  },
  {
    category: "Programming & Tools",
    icon: "Wrench",
    description: "Core algorithms, developer tooling, version control, and API testing.",
    skills: [
      { name: "Java", highlight: "OOP & Backend Services" },
      { name: "Data Structures & Algorithms", highlight: "Problem Solving & Logic" },
      { name: "Git", highlight: "Branching & Version Control" },
      { name: "GitHub", highlight: "Collaboration & Repositories" },
      { name: "Postman", highlight: "API Testing & Validation" },
      { name: "VS Code", highlight: "Primary Development IDE" }
    ]
  }
];

export const projects = [
  {
    id: "wedding-wagon",
    title: "Wedding Wagon",
    badge: "Production Concept",
    category: "Full Stack Marketplace",
    description: "A comprehensive wedding services marketplace connecting couples with curated vendors (venues, caterers, photographers, planners, and decorators) and platform administrators.",
    detailedOverview: "Engineered with three-sided role workflows: customers browse and submit booking inquiries, vendors manage booking requests and catalogs, while platform admins oversee verifications and operations. Implements an automated pricing engine and responsive dashboards.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
    githubUrl: "https://github.com/Shailesh-7777",
    liveUrl: null, // Set to live URL when deployed publicly
    statusNotice: "Full-stack marketplace concept with role-based workflows and inquiry management.",
    features: [
      "Customer, Vendor & Admin role-based views",
      "Dynamic wedding service catalog with package tiers",
      "Booking inquiry pipeline and response tracking",
      "Responsive customer portal and management dashboards"
    ],
    codePreviewSnippet: `// Wedding Wagon - Booking Inquiry Controller
export const createInquiry = async (req, res) => {
  const { vendorId, serviceType, eventDate, guests } = req.body;
  const inquiry = await BookingInquiry.create({
    userId: req.user.id,
    vendorId,
    serviceType,
    eventDate,
    status: 'PENDING_VENDOR_REVIEW'
  });
  return res.status(201).json({ success: true, inquiry });
};`
  },
  {
    id: "ai-interview-system",
    title: "AI Interview System",
    badge: "Active Repository",
    category: "AI & EdTech Platform",
    description: "An intelligent interview preparation and practice application designed to help job seekers and students simulate technical and HR interview rounds with structured evaluation.",
    detailedOverview: "Built with a responsive React frontend and robust Java/Spring Boot & Node.js backend. Features timed interview questions, role-based access for students and administrators, curated question banks, and session history tracking.",
    tags: ["React.js", "TypeScript", "Java / Spring Boot", "REST APIs", "Tailwind CSS", "JWT Auth"],
    githubUrl: "https://github.com/Shailesh-7777/Ai-Interview-System",
    liveUrl: null, // Set to live URL when deployed publicly
    statusNotice: "Active repository on GitHub with working frontend, backend REST API, and question banks.",
    features: [
      "Technical and HR mock interview question simulation",
      "Timed response sessions with progress indicators",
      "Question bank management categorized by difficulty & topic",
      "Student performance metrics and historical evaluation archive"
    ],
    codePreviewSnippet: `// AI Interview System - Session Evaluator Endpoint
@PostMapping("/sessions/{id}/evaluate")
public ResponseEntity<EvaluationResult> evaluateSession(
    @PathVariable Long id,
    @RequestBody SessionSubmission submission) {
  EvaluationResult result = interviewService.scoreResponses(submission);
  return ResponseEntity.ok(result);
}`
  },
  {
    id: "business-ordering-app",
    title: "Business Ordering App",
    badge: "In Development",
    category: "B2B Commerce & Inventory",
    description: "An enterprise ordering, inventory management, and payment tracking application tailored for distributors, vendors, and business customers.",
    detailedOverview: "Designed with strict Role-Based Access Control (RBAC) across Admin, Distributor, Vendor, and Customer tiers. Manages product catalogs, purchase orders, real-time inventory deductions, sales summaries, and payment status tracking.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "Inventory Logic"],
    githubUrl: "https://github.com/Shailesh-7777",
    liveUrl: null, // In active development
    statusNotice: "Currently in active development: core ordering workflow and RBAC models implemented.",
    features: [
      "Multi-role access hierarchy (Admin, Distributor, Vendor, Customer)",
      "Automated stock level tracking and purchase order workflows",
      "Sales performance reports and balance settlement logs",
      "Mobile-friendly product catalog and order placement UI"
    ],
    codePreviewSnippet: `// Business Ordering App - Inventory Deduction Middleware
export const processOrderStock = async (items) => {
  for (const item of items) {
    await Product.findByIdAndUpdate(item.productId, {
      $inc: { stockQty: -item.quantity }
    });
  }
};`
  }
];

export const journeyMilestones = [
  {
    id: "milestone-1",
    title: "Full-Stack Project Building",
    tag: "Core Engineering",
    description: "Architecting end-to-end applications from scratch. Combining React on the frontend with Node.js, Express, and MongoDB on the backend to deliver functional three-tier web products with clean state management.",
    highlights: ["React component lifecycle & hooks", "State management & routing", "Responsive UI implementation"]
  },
  {
    id: "milestone-2",
    title: "Java & DSA Practice",
    tag: "Problem Solving",
    description: "Deepening algorithmic fundamentals and logical rigor through structured practice in Java. Focusing on arrays, strings, hashing, linked lists, trees, recursion, and analyzing time-space complexity.",
    highlights: ["Object-Oriented Programming principles", "Data structures & algorithmic patterns", "Disciplined daily coding problem solving"]
  },
  {
    id: "milestone-3",
    title: "API Development & Debugging",
    tag: "Backend & Systems",
    description: "Engineering scalable RESTful APIs with clean request/response schemas, input validation, JWT token security, and thorough testing using Postman. Honing systematic debugging and error isolation techniques.",
    highlights: ["REST architectural standards", "JWT authentication & middleware", "Postman validation & status code rigor"]
  },
  {
    id: "milestone-4",
    title: "Deployment, Security & Modern Tooling",
    tag: "Production Readiness",
    description: "Mastering modern software engineering workflows: Git branch management, semantic versioning, environment variable isolation, static hosting on Vercel, and adhering to web accessibility and performance standards.",
    highlights: ["Git & GitHub collaboration workflows", "Zero-secret-leak environment configuration", "Vercel / GitHub Pages deployment pipelines"]
  }
];

export const marqueeTechnologies = [
  "React.js",
  "Node.js",
  "JavaScript (ES6+)",
  "Express.js",
  "MongoDB",
  "Java",
  "REST APIs",
  "Vite",
  "Mongoose",
  "Data Structures & Algorithms",
  "Git & GitHub",
  "Postman",
  "Tailwind CSS"
];
