# Shailesh Kumar — Futuristic 3D Developer Portfolio

A futuristic, neon-powered, 3D developer portfolio engineered with **React 18**, **Vite 6**, **Tailwind CSS**, and **Framer Motion**. Designed as a high-end cyberpunk developer showcase with a deep space atmosphere, neon cyan & purple lighting, floating 3D project cards, and a secure Owner Management Dashboard.

---

## 🌟 Futuristic 3D Architecture & Key Highlights

1. **Futuristic Visual Design & 3D Atmosphere**:
   - Deep space dark navy and black background (`#030712`, `#050816`) with electric cyan (`#00F5FF`) and neon purple (`#A855F7`) glowing lighting.
   - Interactive 3D Canvas Particle Universe with mouse-responsive camera parallax and neural network mesh.
   - Cyberpunk perspective grid floor horizon with neon scanline textures.
   - Glassmorphic panels with backdrop blur and animated neon borders.

2. **Hero Section (Cyberpunk 3D Presentation)**:
   - Header overline: `SHAILESH KUMAR | FULL STACK DEVELOPER`
   - Main heading: `BUILDING DIGITAL EXPERIENCES`
   - Subtitle: `Full Stack Developer | React | Node.js | Java | MongoDB | AWS`
   - Interactive 3D profile presentation with dual neon rotating rings, mouse-responsive 3D tilt, and orbiting technology badges (React, Node.js, Java, MongoDB, AWS).
   - Action buttons: **View My Projects**, **Download Resume**, and **Contact Me**.

3. **Floating 3D Project Showcase**:
   - Real-time 3D perspective rotation tilt with dynamic holographic glare and depth layers (`Tilt3DCard`).
   - 4 Featured Projects:
     - **Wedding Wagon**: Full-Stack MERN marketplace with 3-sided RBAC and booking workflows.
     - **AI Interview System**: Full-Stack AI platform with Java 21, Spring Boot 3, MySQL, and React.
     - **Khoj – Missing Person Assistance Platform**: AI-based social impact platform with DPDP Act 2023 compliance.
     - **AI-Based Clothing Recommendation System (StyleSense AI)**: Two-stage gender-aware outfit curation with MediaPipe pose landmarks.
   - Action buttons on each card: **Live Demo** (opens in new tab or displays status modal), **GitHub** repository link, and **View Details** architectural modal.

4. **3D Skills Section (13 Core Technologies)**:
   - Interactive 3D technology cards for: **React.js, JavaScript, HTML, CSS, Node.js, Express.js, MongoDB, Java, Spring Boot, MySQL, Git, GitHub, and AWS**.
   - Dual view modes: **3D Hologram Cards** and **Categorized Breakdown**.

5. **Futuristic Academic Timeline**:
   - Glowing neon circuit connections with animated pulse nodes.
   - **B.Tech CSE (2024–2028 | Currently Pursuing)** at Maharishi Markandeshwar University.
   - **Class 12th (2023 | 75%)** at R.L.S.Y. College, Bettiah.
   - **Class 10th (2021 | 80.6%)** at Sahu Jain High School, Lauriya.

6. **Verified Certificate Gallery & Owner Dashboard**:
   - Public visitors only see verified published credentials (e.g. CodeSoft Web Development Internship Certificate).
   - **Owner Management Dashboard**:
     - Secured by Owner Master Passcode (`shailesh@2026`).
     - Full CRUD: Add, edit, delete, upload screenshots/certificates, update GitHub/Live Demo links, and toggle Publish/Unpublish.
     - Data persists across sessions via `localStorage`.

7. **Futuristic Floating Navigation**:
   - Floating glass navigation panel: **Home, About, Projects, Skills, Education, Certificates, Contact**.
   - Smooth scrolling with active section indicator and Owner Mode quick access.

---

## 📁 Folder Structure

```text
shailesh-portfolio/
├── public/
│   ├── favicon.svg                 # Branded glowing SK monogram
│   ├── profile.jpg                 # Profile picture (drop your photo here)
│   ├── profile-placeholder.svg     # Default developer vector portrait
│   ├── resume.pdf                  # Resume PDF file
│   ├── cert-placeholder.svg        # Certificate vector graphic
│   ├── project-wedding-wagon.svg   # Wedding Wagon architectural mockup
│   ├── project-ai-interview.svg    # AI Interview System architectural mockup
│   ├── project-khoj.svg            # Khoj platform architectural mockup
│   └── project-stylesense.svg      # StyleSense AI architectural mockup
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Fixed header with active scroll spy & drawer
│   │   ├── Footer.jsx              # Footer with links, copyright, and back-to-top
│   │   ├── Preloader.jsx           # Fast loading splash animation
│   │   ├── ScrollProgress.jsx      # Top viewport scroll progress indicator
│   │   ├── ParticleBackground.jsx  # HTML5 Canvas starfield particles
│   │   ├── BackToTop.jsx           # Floating back to top button
│   │   ├── MarqueeTicker.jsx       # Infinite tech stack ticker
│   │   ├── ResumeModal.jsx         # Interactive CV preview & download dialog
│   │   ├── LiveDemoModal.jsx       # Live deployment status dialog
│   │   ├── ProjectDetailModal.jsx  # Detailed architecture & code modal
│   │   └── CertificateModal.jsx    # Certificate viewer & live editor
│   ├── sections/
│   │   ├── HeroSection.jsx         # Hero greeting, avatar, CTAs, and IDE window
│   │   ├── AboutSection.jsx        # Professional narrative, journey, & strengths
│   │   ├── EducationSection.jsx    # Chronological academic qualifications
│   │   ├── SkillsSection.jsx       # Technical skills matrix & category filters
│   │   ├── ProjectsSection.jsx     # Featured projects cards with modal triggers
│   │   ├── CertificationsSection.jsx # 10+ certificates gallery with add/edit tools
│   │   ├── ExperienceSection.jsx   # CodeSoft internship timeline & achievements
│   │   ├── InterestsRoadmapSection.jsx # Passions & interactive roadmap progress
│   │   └── ContactSection.jsx      # Validated contact form, click-to-call/email
│   ├── data/
│   │   └── portfolioData.js        # Centralized data file for all content
│   ├── styles/
│   │   └── index.css               # Tailwind CSS layers, glassmorphism, & animations
│   ├── App.jsx                     # Top-level orchestration & modal state
│   └── main.jsx                    # React entrypoint
├── index.html                      # HTML template with SEO tags & Google Fonts
├── package.json                    # Dependencies & build scripts
├── tailwind.config.js              # Theme extensions & custom keyframes
└── vite.config.js                  # Vite bundler configuration
```

---

## 🚀 Installation & Local Development

### Prerequisites
- Node.js (v18.x or v20.x+)
- npm or yarn

### 1. Clone or Open the Repository:
```bash
cd /Users/shaileshkumar/.gemini/antigravity/scratch/shailesh-portfolio
```

### 2. Install Dependencies (if not already installed):
```bash
npm install
```

### 3. Run Development Server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production:
```bash
npm run build
```
Generates an optimized static bundle in `dist/`.

### 5. Preview Production Build Locally:
```bash
npm run preview
```

---

## 📝 Customization & Maintenance Guide

All portfolio content is decoupled from UI components inside:
📂 `src/data/portfolioData.js`

### 1. How to Change Your Profile Picture
1. Place your photo file inside `public/` and name it `profile.jpg` (or `.png`).
2. If using a different file name, open `src/data/portfolioData.js` and update:
   ```javascript
   export const personalInfo = {
     // ...
     profileImage: "/your-photo-name.jpg",
   };
   ```
3. Alternatively, you can hover over the avatar in the Hero section and click the camera icon to test any photo from your computer instantly!

### 2. How to Add or Update Projects
Open `src/data/portfolioData.js` and edit the `projects` array:
```javascript
export const projects = [
  {
    id: "your-project-id",
    title: "Your Project Title",
    category: "Full Stack MERN Application",
    badge: "Production Ready",
    shortDescription: "A brief one-sentence description.",
    detailedOverview: "Full architectural breakdown of your project.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/project-image.svg", // place in public/
    githubUrl: "https://github.com/Shailesh-7777/your-repo",
    liveUrl: "https://your-demo-url.com",
    features: [
      "Feature 1 description",
      "Feature 2 description"
    ],
    codeSnippet: `// Your code snippet here`
  }
];
```

### 3. How to Add or Edit Certificates
- **Method A (Interactive in the browser)**:
  1. Scroll down to the **Certifications Gallery** section on the website.
  2. Click the **"Add New Certification Slot"** button, or click the **Edit icon** on any certificate card.
  3. Enter the Title, Issuing Organization, Issue Date, Credential ID, Verification URL, and upload your certificate image.
  4. Click **"Save Certificate"** (or click **"Copy JSON"** to paste it into `portfolioData.js`).
- **Method B (Directly in code)**:
  1. Open `src/data/portfolioData.js`.
  2. Add an entry to `certifications`:
     ```javascript
     {
       id: "cert-aws-cloud",
       title: "AWS Certified Cloud Practitioner",
       issuer: "Amazon Web Services",
       date: "2024",
       credentialId: "AWS-987654321",
       verificationUrl: "https://aws.amazon.com/verification/...",
       image: "/aws-cert.png",
       isPlaceholder: false
     }
     ```

### 4. How to Update Resume PDF
1. Export your latest CV as a PDF file named `resume.pdf`.
2. Save it directly into the `public/` folder:
   `public/resume.pdf`
3. The "Download Resume" button on the hero screen and in the navigation bar automatically downloads this file.

### 5. How to Update Contact Details
In `src/data/portfolioData.js`, modify `personalInfo`:
```javascript
export const personalInfo = {
  name: "Shailesh Kumar",
  email: "kumsailesh784@gmail.com",
  phone: "+91 9972505004",
  location: "Bettiah, West Champaran, Bihar, India",
  github: "https://github.com/Shailesh-7777",
  linkedin: "https://www.linkedin.com/in/shailesh-kumar-507324353",
  leetcode: "https://leetcode.com/u/Shailesh-7777"
};
```

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New"** > **"Project"**.
3. Import your GitHub repository (`shailesh-portfolio`).
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your portfolio will be live in under 60 seconds with SSL and global CDN!

### Deploying to GitHub Pages
The project includes a ready-to-use GitHub Actions workflow in `.github/workflows/deploy.yml`:
1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment**, set the Source to **GitHub Actions**.
3. Push to `main` branch; GitHub Actions will automatically build and publish your portfolio.

### Deploying to Netlify
1. Drag and drop the `dist/` folder onto the [Netlify Drop](https://app.netlify.com/drop) page, or
2. Connect your GitHub repository, set Build Command to `npm run build`, and Publish Directory to `dist`.

---

## 📄 License
This portfolio is created for Shailesh Kumar. All rights reserved.
