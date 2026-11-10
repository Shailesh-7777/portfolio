/**
 * Shailesh Kumar - Master Portfolio Data Source
 * Centralized data repository for easy maintenance and updates.
 */

export const personalInfo = {
  name: "Shailesh Kumar",
  monogram: "SK",
  title: "Full Stack Developer | Software Developer",
  roleTagline: "Building Modern, Scalable & Secure Web Applications",
  location: "Bettiah, West Champaran, Bihar, India",
  email: "kumsailesh784@gmail.com",
  phone: "+91 9972505004",
  phoneFormatted: "+91 99725 05004",
  educationStatus: "Currently pursuing B.Tech in Computer Science and Engineering (2024–2028)",
  status: "Available for Hire & Internships",
  statusBadge: "Open to Opportunities",
  profileImage: "/profile.jpg",
  profileImageWebp: "/profile.webp",
  ogImage: "/og-image.jpg",
  canonicalUrl: "https://shailesh-portfolio.onrender.com",
  hasRealPhoto: true,
  github: "https://github.com/Shailesh-7777",
  linkedin: "https://www.linkedin.com/in/shailesh-kumar-507324353",
  leetcode: "https://leetcode.com/u/Shailesh-7777",
  resumePath: "/resume/Shailesh_Kumar_Resume.pdf",
  resumeDocxPath: "/resume/Shailesh_Kumar_Resume.docx",
  resumeFileName: "Shailesh_Kumar_Resume.pdf",
  heroGreeting: "Hello, I'm Shailesh Kumar.",
  heroSubGreeting: "Full Stack Developer | Building Modern Web Applications.",
  heroDescription: "I am passionate about developing scalable, secure and user-friendly applications using modern web technologies.",
  aboutParagraphs: [
    "I am Shailesh Kumar, a Computer Science and Engineering student and aspiring Full Stack Developer. I enjoy building modern web applications, solving programming problems and exploring emerging technologies.",
    "My interests include Full Stack Development, Artificial Intelligence, Cloud Computing, Software Engineering and Data Structures and Algorithms.",
    "I continuously work on practical projects to improve my technical knowledge and develop real-world problem-solving skills.",
    "My goal is to become a professional software developer and contribute to innovative technology solutions."
  ],
  journey: "Beginning with algorithmic problem solving in Java and foundational web standards, I evolved toward building full-stack distributed web applications with React, Node.js, Express, and Spring Boot. Today, I focus on building robust, real-world software products that combine clean UI architectures with secure, production-grade backends.",
  strengths: [
    "Full-Stack System Architecture (React, Node.js, Java)",
    "Rigorous Algorithmic Problem Solving (DSA in Java)",
    "Clean REST API Design & JWT Authentication",
    "Database Modeling (MongoDB, MySQL)",
    "Rapid Adaptability to Emerging Technologies"
  ],
  careerObjectives: "To secure a challenging role as a Software Developer / Full Stack Engineer at an innovative technology organization where I can architect resilient web platforms, solve complex engineering problems, and create positive impact.",
  developmentGoals: [
    "Master advanced Distributed System Design & Microservices",
    "Deepen AWS Cloud architecture & DevOps CI/CD automation",
    "Consistently solve complex DSA problems on LeetCode",
    "Actively contribute to impactful open-source software"
  ]
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Experience", href: "#experience" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

export const heroTypewriterPhrases = [
  "Full Stack Developer",
  "MERN Stack Specialist",
  "Java & Spring Boot Engineer",
  "RESTful API Architect",
  "DSA & Problem Solver",
  "Modern React & Tailwind UI Craftsman"
];

export const educationList = [
  {
    id: "btech",
    institution: "Maharishi Markandeshwar (Deemed to be University)",
    location: "Mullana, Ambala, Haryana, India",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    duration: "2024 – 2028",
    status: "Currently Pursuing",
    badge: "Undergraduate Degree",
    isCurrent: true,
    highlights: [
      "Core coursework in Data Structures, Algorithms, Object-Oriented Programming (Java), DBMS, and Operating Systems",
      "Actively building full-stack applications and participating in developer coding challenges",
      "Focusing on scalable software design, API security, and cloud deployment pipelines"
    ]
  },
  {
    id: "class12",
    institution: "R.L.S.Y. College",
    location: "Bettiah, West Champaran, Bihar, India",
    degree: "Class 12th (Senior Secondary)",
    branch: "Science Stream (PCM)",
    duration: "Passing Year: 2023",
    percentage: "75.0%",
    status: "Completed",
    badge: "Intermediate",
    isCurrent: false,
    highlights: [
      "Strong foundation in Mathematics, Physics, and analytical logic",
      "Developed problem-solving mindset and interest in computer science fundamentals"
    ]
  },
  {
    id: "class10",
    institution: "Sahu Jain High School",
    location: "Lauriya, West Champaran, Bihar, India",
    degree: "Class 10th (Secondary School)",
    branch: "General Sciences & Mathematics",
    duration: "Passing Year: 2021",
    percentage: "80.6%",
    status: "Completed",
    badge: "High School Matriculation",
    isCurrent: false,
    highlights: [
      "Achieved 80.6% in State Board Matriculation examinations",
      "Consistent academic excellence in Mathematics and Science"
    ]
  }
];

export const skillCategories = [
  {
    category: "Programming",
    icon: "Code2",
    description: "Core languages for building performant software and backend applications.",
    skills: [
      { name: "Java", level: "Core / Advanced", focus: "OOP, Multithreading & Spring Boot" },
      { name: "JavaScript", level: "Proficient", focus: "ES6+, Async/Await & DOM APIs" },
      { name: "HTML5", level: "Core", focus: "Semantic markup, SEO & Accessibility" },
      { name: "CSS3", level: "Core", focus: "Flexbox, Grid, Animations & Media Queries" }
    ]
  },
  {
    category: "Frontend",
    icon: "Layout",
    description: "Modern component-driven libraries for building responsive, fluid user interfaces.",
    skills: [
      { name: "React.js", level: "Proficient", focus: "Hooks, State Management & Reusable Components" },
      { name: "Vite", level: "Proficient", focus: "Fast HMR, Build Optimization & Bundling" },
      { name: "Tailwind CSS", level: "Proficient", focus: "Utility-First, Responsive Design & Dark Mode" },
      { name: "Bootstrap", level: "Familiar", focus: "Rapid Prototyping & Grid Systems" }
    ]
  },
  {
    category: "Backend",
    icon: "Server",
    description: "Server runtimes, frameworks, and microservices for resilient distributed backends.",
    skills: [
      { name: "Node.js", level: "Proficient", focus: "Event-driven architecture & asynchronous I/O" },
      { name: "Express.js", level: "Proficient", focus: "Routing, Middleware & Controller Pipelines" },
      { name: "Spring Boot", level: "Working Knowledge", focus: "Dependency Injection & REST Services" },
      { name: "REST APIs", level: "Proficient", focus: "CRUD schemas, HTTP semantics & Status Codes" }
    ]
  },
  {
    category: "Database",
    icon: "Database",
    description: "Relational and NoSQL persistence engines for scalable data modeling.",
    skills: [
      { name: "MongoDB", level: "Proficient", focus: "Document aggregation & index optimization" },
      { name: "Mongoose", level: "Proficient", focus: "Schema validation, relations & middleware" },
      { name: "MySQL", level: "Working Knowledge", focus: "Relational joins, constraints & ACID queries" }
    ]
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    description: "Industry-standard developer tooling for version control, debugging, and packaging.",
    skills: [
      { name: "Git", level: "Proficient", focus: "Branching, rebasing & merge workflows" },
      { name: "GitHub", level: "Proficient", focus: "Remote repositories, PR reviews & Actions" },
      { name: "VS Code", level: "Primary IDE", focus: "Extensions, debugging & workspace configs" },
      { name: "Postman", level: "Proficient", focus: "API endpoint testing, envs & mock servers" },
      { name: "npm", level: "Proficient", focus: "Package dependency management & scripting" }
    ]
  },
  {
    category: "Cloud & DevOps (Learning)",
    icon: "Cloud",
    description: "Currently acquiring infrastructure provisioning, containerization, and deployment skills.",
    skills: [
      { name: "AWS", level: "Learning", focus: "Cloud fundamentals & infrastructure" },
      { name: "EC2", level: "Learning", focus: "Compute instance provisioning & security groups" },
      { name: "S3", level: "Learning", focus: "Object storage, static hosting & bucket policies" },
      { name: "IAM", level: "Learning", focus: "Roles, policies & least-privilege security" },
      { name: "Docker", level: "Learning", focus: "Containerization, Dockerfiles & networking" },
      { name: "CI/CD", level: "Learning", focus: "Automated test & deployment pipelines" }
    ]
  },
  {
    category: "Data Structures & Algorithms",
    icon: "Cpu",
    description: "Algorithmic foundation practiced daily in Java for optimal runtime performance.",
    skills: [
      { name: "Arrays", level: "Active Practice", focus: "Sliding window, two pointers & prefix sums" },
      { name: "Strings", level: "Active Practice", focus: "Pattern matching & manipulation" },
      { name: "Sorting", level: "Active Practice", focus: "MergeSort, QuickSort & custom comparators" },
      { name: "Searching", level: "Active Practice", focus: "Linear and systematic space reduction" },
      { name: "Binary Search", level: "Active Practice", focus: "Search in rotated arrays & range queries" },
      { name: "Problem Solving", level: "Active Practice", focus: "Time/space complexity analysis & logic" }
    ]
  }
];

export const projects = [
  {
    id: "wedding-wagon",
    title: "Wedding Wagon",
    category: "Full Stack MERN Application",
    badge: "Production Concept",
    shortDescription: "A wedding services marketplace connecting customers with curated wedding service providers.",
    detailedOverview: "Wedding Wagon is a comprehensive, multi-sided marketplace designed to bridge couples with certified wedding vendors (photographers, decorators, banquet halls, caterers, and bridal artists). It features strict three-tiered Role-Based Access Control (RBAC) separating Customers, Vendors, and Administrators, an automated pricing and availability calculation engine, advance token payment workflows, and real-time vendor booking analytics.",
    tags: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "Tailwind CSS"],
    image: "/project-wedding-wagon.svg",
    githubUrl: "https://github.com/Shailesh-7777",
    liveUrl: null, // Update when deployed publicly
    statusNotice: "Full-stack marketplace concept with role-based workflows and inquiry management.",
    screenshots: [
      { title: "Marketplace Homepage", caption: "Curated wedding vendors directory with location & category filters" },
      { title: "Vendor Service Catalog", caption: "Package tiers, date availability calendar, and pricing calculators" },
      { title: "Customer Booking Workflow", caption: "Booking inquiry pipeline, shopping cart, and advance payment checkout" },
      { title: "Admin & Vendor Dashboards", caption: "Booking approval system, earnings analytics, and review management" }
    ],
    features: [
      "Customer, Vendor and Admin role-segregated dashboards",
      "Dynamic wedding service listings with tiered package pricing",
      "Booking management and real-time date availability checks",
      "Shopping cart with multi-service inquiry aggregation",
      "Advance payment and deposit tracking workflow",
      "Vendor earnings dashboard with dispute & approval logging",
      "Customer reviews, 5-star rating matrix, and feedback",
      "Full service catalog management with rich media uploads"
    ],
    architectureHighlights: [
      "JWT-authenticated stateless session architecture with secure HTTP-only cookies",
      "Mongoose models with compound indexes for vendor date collision detection",
      "Modular MVC pattern: Express controllers, service layers, and schema validations"
    ],
    codeSnippet: `// Wedding Wagon - Booking Collision & Reservation Controller
export const reserveVendorBooking = async (req, res) => {
  const { vendorId, serviceDate, packageId } = req.body;
  const existingBooking = await Booking.findOne({
    vendor: vendorId,
    eventDate: serviceDate,
    status: { $in: ['CONFIRMED', 'ADVANCE_PAID'] }
  });

  if (existingBooking) {
    return res.status(409).json({ error: 'Vendor is already booked on this date' });
  }

  const booking = await Booking.create({
    customer: req.user.id,
    vendor: vendorId,
    eventDate: serviceDate,
    package: packageId,
    status: 'PENDING_VENDOR_APPROVAL'
  });

  return res.status(201).json({ success: true, booking });
};`
  },
  {
    id: "ai-interview-system",
    title: "AI Interview System",
    category: "Full Stack AI-Based Application",
    badge: "Active GitHub Repository",
    shortDescription: "An AI-powered interview preparation platform that helps students practice technical and HR interviews.",
    detailedOverview: "Built to empower engineering students to excel in recruitment drives, the AI Interview System provides structured, timed mock interview sessions across Data Structures, Algorithms, System Design, Java, and HR behavioral categories. It features dual role support for candidates and administrators, dynamic question generation, structured rubric evaluation, historical performance archiving, and resume-based question generation.",
    tags: ["React.js", "Java", "Spring Boot", "MySQL", "REST APIs", "Tailwind CSS", "JWT Auth", "AI Integration"],
    image: "/project-ai-interview.svg",
    githubUrl: "https://github.com/Shailesh-7777/Ai-Interview-System",
    liveUrl: null, // Update when deployed publicly
    statusNotice: "Active repository on GitHub featuring a complete frontend client, Spring Boot REST API, and question evaluation schemas.",
    screenshots: [
      { title: "Candidate Dashboard", caption: "Mock session selector across Technical & HR interview categories" },
      { title: "Live Timed Session", caption: "Interactive question screen with response timer and answer formulation" },
      { title: "Evaluation & Scoring", caption: "Multi-parameter evaluation breakdown, feedback, and improvement tips" },
      { title: "History & Resume Profile", caption: "Historical evaluation archive and candidate progress analytics" }
    ],
    features: [
      "Secure student authentication and role authorization",
      "Multiple interview categories: Technical (DSA, Java, Web) and HR Behavioral",
      "Dynamic question delivery with progressive difficulty levels",
      "Interactive session countdown timer with automatic response submission",
      "Answer evaluation with multi-criteria rubric scoring",
      "Detailed qualitative feedback, score summaries, and strengths assessment",
      "Interview history archive tracking performance over time",
      "Candidate resume upload and profile parsing integration"
    ],
    architectureHighlights: [
      "Full-stack split: React 19 frontend paired with Java 21 / Spring Boot 3 REST API",
      "MySQL transactional persistence ensuring candidate session score integrity",
      "AI evaluation bridge adapter allowing local or LLM provider scoring hooks"
    ],
    codeSnippet: `// AI Interview System - Spring Boot Session Evaluation Service
@Service
public class InterviewEvaluationService {

    @Transactional(readOnly = true)
    public SessionEvaluation evaluateCandidateSession(SessionSubmission submission) {
        int technicalScore = evaluateTechnicalAnswers(submission.getAnswers());
        int clarityScore = evaluateResponseClarity(submission.getAnswers());
        String feedback = generateStrengthsFeedback(technicalScore, clarityScore);

        return SessionEvaluation.builder()
            .sessionId(submission.getSessionId())
            .candidateId(submission.getCandidateId())
            .totalScore((technicalScore + clarityScore) / 2)
            .status(EvaluationStatus.GRADED)
            .feedback(feedback)
            .build();
    }
}`
  },
  {
    id: "khoj-missing-person",
    title: "Khoj – Missing Person Assistance Platform",
    category: "AI-Based Social Impact Project Concept",
    badge: "Concept & Prototype",
    shortDescription: "A technology-based missing-person assistance concept designed to support identification, reporting and coordination between families and authorities.",
    detailedOverview: "Khoj is an open-architecture humanitarian engineering concept developed to assist families, verified NGOs, and designated authorities in locating missing individuals. Built strictly around the Digital Personal Data Protection (DPDP) Act 2023, Khoj introduces privacy-preserving case tracking, EXIF metadata stripping, community sighting crowdsourcing, and a decoupled biometric face search interface that guarantees human verification and ethical data stewardship.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Sharp EXIF Stripper", "DPDP Act 2023", "Social Impact"],
    image: "/project-khoj.svg",
    githubUrl: "https://github.com/Shailesh-7777",
    liveUrl: null,
    statusNotice: "Concept & prototype architecture designed for humanitarian NGO coordination. Does not claim real government integration.",
    screenshots: [
      { title: "Public Search Bulletin", caption: "Filtered missing person notices with privacy safeguards and consent logging" },
      { title: "Case Submission Dossier", caption: "Family reporter intake form with verified statutory DPDP consent checks" },
      { title: "Community Sighting Portal", caption: "Public sighting upload pipeline with automated GPS coordinate sanitization" },
      { title: "Caseworker Review Desk", caption: "Audit queue for authorized human caseworker verification before publication" }
    ],
    features: [
      "Structured missing person dossier reporting with physical attributes",
      "Public community sighting submission with location and time logging",
      "Image-based matching concept with strict human caseworker verification",
      "Unpredictable cryptographically secure Case Reference IDs (MP-YYYY-XXXXXXXX)",
      "Automated Sharp image processing stripping EXIF metadata & GPS coordinates",
      "Role-based moderation workflow for NGO caseworkers & designated reviewers",
      "Family notification workflow concept for verified sighting leads",
      "Full compliance with India's DPDP Act 2023 Section 12 Right-to-Erasure"
    ],
    architectureHighlights: [
      "Zero unreviewed leakage: Cases marked pending_review are excluded from public search",
      "Decoupled face recognition adapter disabled by default for privacy civil liberties",
      "Physical data segregation keeping private family addresses out of public responses"
    ],
    codeSnippet: `// Khoj - Image EXIF Sanitization & Security Pipeline
export const sanitizeUploadImage = async (buffer) => {
  // Strip all GPS coordinates, camera model tags, and embedded personal metadata
  const sanitizedBuffer = await sharp(buffer)
    .rotate() // Auto-orient based on EXIF before stripping
    .withMetadata({ exif: false, icc: false })
    .jpeg({ quality: 85, progressive: true })
    .toBuffer();

  return sanitizedBuffer;
};`
  },
  {
    id: "stylesense-ai",
    title: "AI-Based Clothing Recommendation System",
    category: "AI-Based Application",
    badge: "Architected System",
    shortDescription: "An intelligent clothing recommendation concept that suggests appropriate outfits based on gender, preferences and occasions.",
    detailedOverview: "StyleSense AI addresses the high return rates and poor fit in digital fashion through a two-stage recommendation architecture. It couples real-time 33-landmark pose detection (MediaPipe Pose) for anatomical proportion analysis with a strict Two-Stage filtering algorithm that eliminates cross-gender product leakage, ranks ensembles based on color harmony and silhouette fit, and includes a virtual try-on concept.",
    tags: ["React.js", "Vite", "Node.js", "Express.js", "Python FastAPI", "MediaPipe Pose", "MongoDB"],
    image: "/project-stylesense.svg",
    githubUrl: "https://github.com/Shailesh-7777",
    liveUrl: null,
    statusNotice: "Completed recommendation algorithm, proportion estimator, and catalog models. Virtual try-on neural warping in active development.",
    screenshots: [
      { title: "AI Anatomical Scanner", caption: "MediaPipe pose tracker estimating shoulder-to-waist and torso proportions" },
      { title: "Two-Stage Recommendation", caption: "Gender-aware outfit ensembles filtered by silhouette, occasion & color palette" },
      { title: "Curated Fashion Catalog", caption: "Multi-facet wardrobe directory with Men, Women, and Unisex classifications" },
      { title: "Virtual Try-On Concept", caption: "Interactive split slider comparing original photo and warped garment concept" }
    ],
    features: [
      "Comprehensive Men's and Women's fashion catalog with distinct taxonomies",
      "Two-Stage Gender-Aware Recommendation Engine with zero cross-gender leakage",
      "AI Anatomical proportion estimator using 33 skeletal landmarks",
      "Intelligent outfit curation harmonizing shirts, blazers, trousers, and ethnic wear",
      "Occasion-based filtering (Formal, Casual, Festive, Athletic, Party)",
      "Personalized 'Why Recommended' breakdown explaining silhouette synergy",
      "Interactive Virtual Try-On studio concept with before/after comparison",
      "Multi-role support: Customer fashion profiles, Seller atelier, and Master admin"
    ],
    architectureHighlights: [
      "Strict Stage 1 gender segregation derived server-side from user session token",
      "Stage 2 multi-factor heuristic scoring proportion harmony (0.0 to 1.0)",
      "Microservice split: Express REST API coupled with Python AI inference endpoints"
    ],
    codeSnippet: `// StyleSense AI - Two-Stage Gender Recommendation Filter
export const filterCatalogByProfile = (products, userProfile) => {
  const { fashionPreference, bodyType } = userProfile;

  // Stage 1: Strict Gender Isolation (Zero cross-gender leakage)
  const eligibleProducts = products.filter(product => {
    if (fashionPreference === 'men') {
      return product.fashionCategory === 'men' || product.fashionCategory === 'unisex';
    }
    if (fashionPreference === 'women') {
      return product.fashionCategory === 'women' || product.fashionCategory === 'unisex';
    }
    return product.fashionCategory === 'unisex';
  });

  // Stage 2: Proportion & Occasion Synergy Scoring
  return eligibleProducts.sort((a, b) => b.harmonyScore - a.harmonyScore);
};`
  }
];

export const defaultCertificateCategories = [
  "Web Development",
  "Full Stack Development",
  "Java Programming",
  "Cloud Computing",
  "AWS",
  "Database Management",
  "Artificial Intelligence",
  "Internship",
  "Hackathons",
  "Other Achievements"
];

export const certifications = [
  {
    id: "cert-aws-cloud-foundations",
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    category: "Cloud Computing",
    date: "11/10/2026",
    credentialId: "uuzQvcvn",
    verificationUrl: "https://www.credly.com/go/uuzQvcvn",
    image: "/certificates/cert-aws.png",
    fileUrl: "/certificates/cert-aws.png",
    fileType: "image",
    order: 1,
    isPlaceholder: false,
    published: true,
    note: "Official AWS Training Badge representing 20 hours of comprehensive cloud coursework covering global cloud infrastructure, core compute (EC2), storage (S3), IAM security, and architecture."
  },
  {
    id: "cert-codsoft-webdev",
    title: "Web Development Virtual Internship Certificate",
    issuer: "CodSoft",
    category: "Internship",
    date: "08/06/2026",
    credentialId: "7072c87",
    verificationUrl: "https://www.codsoft.in",
    image: "/certificates/cert-codsoft.png",
    fileUrl: "/certificates/cert-codsoft.png",
    fileType: "image",
    order: 2,
    isPlaceholder: false,
    published: true,
    note: "Awarded for successfully completing 4 weeks virtual internship in Web Development (05/05/2026 to 05/06/2026) with wonderful remarks, building production-grade web components in HTML5, CSS3, and JavaScript."
  },
  {
    id: "cert-tata-genai-analytics",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA & Forage",
    category: "Artificial Intelligence",
    date: "July 26th, 2025",
    credentialId: "Ys7qmoqsokuBCMKgW",
    verificationUrl: "https://www.theforage.com",
    image: "/certificates/cert-tata.png",
    fileUrl: "/certificates/cert-tata.png",
    fileType: "image",
    order: 3,
    isPlaceholder: false,
    published: true,
    note: "Completed practical simulation tasks in exploratory data analysis and risk profiling, predicting delinquency with AI, and implementing an AI-driven collections strategy."
  },
  {
    id: "cert-nsdc-skill-india",
    title: "Web Design & Development Online Skilling Course",
    issuer: "NSDC & Skill India Digital Hub (SIDH)",
    category: "Web Development",
    date: "May 02, 2026",
    credentialId: "SIDH-WD-2026",
    verificationUrl: "https://www.skillindiadigital.gov.in",
    image: "/certificates/cert-nsdc.png",
    fileUrl: "/certificates/cert-nsdc.png",
    fileType: "image",
    order: 4,
    isPlaceholder: false,
    published: true,
    note: "Online skilling course on Web Design & Development offered by National Skill Development Corporation (NSDC) through Skill India Digital Hub (SIDH)."
  }
];

export const experienceList = [
  {
    id: "codesoft-internship",
    organization: "CodeSoft",
    role: "Web Development Intern",
    duration: "30-Day Web Development Internship",
    timelineBadge: "Internship",
    status: "Completed",
    responsibilities: [
      "Engineered responsive and accessible web applications using HTML5, CSS3, and modern JavaScript",
      "Built dynamic UI components with interactive DOM manipulation and event-driven architectures",
      "Practiced strict Git version control workflows, creating feature branches and structured commit histories",
      "Conducted cross-browser compatibility testing and resolved responsive mobile viewport edge cases"
    ],
    skillsLearned: [
      "Responsive Web Design",
      "JavaScript (ES6+)",
      "Component-Driven Development",
      "Git & GitHub Workflow",
      "Frontend Debugging & DevTools"
    ],
    certificateProof: {
      status: "Verified Completion",
      note: "Certificate issued upon successful submission of assigned web development milestones."
    }
  }
];

export const interestsList = [
  {
    title: "Full Stack Development",
    icon: "Layers",
    description: "Designing end-to-end architectures connecting reactive client interfaces with high-throughput REST and GraphQL backends."
  },
  {
    title: "Artificial Intelligence",
    icon: "Brain",
    description: "Integrating intelligent LLM inference, computer vision pose tracking, and recommendation heuristics into practical software."
  },
  {
    title: "AWS Cloud Computing",
    icon: "Cloud",
    description: "Exploring scalable cloud infrastructure across AWS EC2, S3 bucket storage, IAM access control, and serverless architectures."
  },
  {
    title: "Data Structures & Algorithms",
    icon: "Cpu",
    description: "Sharpening mathematical problem-solving skills, algorithmic efficiency, and optimal time-space computational complexity in Java."
  },
  {
    title: "Software Engineering",
    icon: "Code",
    description: "Adhering to clean code principles, SOLID design patterns, modular codebases, and maintainable software lifecycles."
  },
  {
    title: "Backend Development",
    icon: "Server",
    description: "Engineering resilient APIs with Node.js, Express, and Spring Boot, focusing on transaction safety, JWT auth, and middleware."
  },
  {
    title: "DevOps and Deployment",
    icon: "Terminal",
    description: "Automating development lifecycles with Docker containers, CI/CD testing pipelines, and zero-downtime hosting environments."
  },
  {
    title: "Open Source Development",
    icon: "GitBranch",
    description: "Collaborating with global developer communities, studying mature codebases, and contributing high-quality pull requests."
  }
];

export const futureRoadmap = [
  {
    id: "goal-1",
    goal: "Improve Java and DSA",
    category: "Algorithmic Rigor",
    target: "Continuous Daily Practice",
    status: "In Active Progress",
    progress: 75,
    details: "Deepen mastery of advanced tree structures, graphs, dynamic programming, and competitive problem solving on LeetCode."
  },
  {
    id: "goal-2",
    goal: "Master Advanced React and Node.js",
    category: "Full Stack Mastery",
    target: "Production Web Applications",
    status: "In Active Progress",
    progress: 80,
    details: "Implement server components, advanced state caching, WebSockets real-time streaming, and high-load microservices."
  },
  {
    id: "goal-3",
    goal: "Learn AWS Cloud Architecture",
    category: "Cloud Engineering",
    target: "Cloud Practitioner & Solutions Architect",
    status: "In Active Progress",
    progress: 45,
    details: "Deploy production applications on AWS EC2, configure private S3 storage, API Gateways, Lambda functions, and VPC security."
  },
  {
    id: "goal-4",
    goal: "Learn Docker and CI/CD",
    category: "DevOps & Deployment",
    target: "Automated Deployment Pipelines",
    status: "In Active Progress",
    progress: 50,
    details: "Containerize multi-tier web applications with Docker Compose and build automated GitHub Actions testing workflows."
  },
  {
    id: "goal-5",
    goal: "Build Production-Ready Applications",
    category: "Product Engineering",
    target: "High Availability & UX",
    status: "Ongoing",
    progress: 85,
    details: "Deliver robust real-world products with zero-security leakage, comprehensive unit test suites, and fast lighthouse scores."
  },
  {
    id: "goal-6",
    goal: "Improve System Design and Security",
    category: "System Architecture",
    target: "High-Scale Architecture",
    status: "Learning",
    progress: 40,
    details: "Study rate limiting, load balancing, database sharding, caching tiers (Redis), and OWASP web application security standards."
  },
  {
    id: "goal-7",
    goal: "Contribute to Open-Source Projects",
    category: "Community Impact",
    target: "Meaningful PRs to Open Ecosystems",
    status: "Planned",
    progress: 30,
    details: "Engage with developer open-source communities, fix verified issues, and contribute utility tools for developer workflows."
  }
];

export const marqueeTechnologies = [
  "React.js",
  "Node.js",
  "JavaScript (ES6+)",
  "Express.js",
  "Java",
  "Spring Boot",
  "MongoDB",
  "Mongoose",
  "MySQL",
  "Tailwind CSS",
  "Vite",
  "REST APIs",
  "AWS (EC2 & S3)",
  "Docker",
  "Data Structures & Algorithms",
  "Git & GitHub",
  "Postman",
  "VS Code"
];
