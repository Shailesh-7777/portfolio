# Shailesh Kumar — Premium Developer Portfolio

A modern, high-performance developer portfolio website engineered with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, inspired by the sleek visual design language, subtle gradient aesthetics, and interactive experience of modern developer showcases.

![Portfolio Preview](./public/favicon.svg)

---

## 🌟 Features & Highlights

- **Aesthetic Visual Architecture**: Futuristic dark theme with deep slate background (`#08090D`), vibrant purple, cyan, and blue radial ambient glows, and hairline glassmorphic cards.
- **Original Interactive IDE / Code Editor**: Tabbed code preview window in the Hero section showcasing real code snippets in **React (`App.jsx`)**, **Node.js (`api.routes.js`)**, and **Java 21 (`InterviewService.java`)** with syntax highlighting and 1-click clipboard copy.
- **Continuous Marquee Ticker**: Infinite scrolling technology ticker highlighting core competencies with pause-on-hover.
- **Honest & Verified Skills Inventory**: Categorized cleanly into **Frontend**, **Backend**, **Databases**, and **Programming & Tools** without arbitrary progress percentages.
- **Rich Project Showcases**:
  - **Wedding Wagon**: Luxury wedding services marketplace concept with 3-sided RBAC and dynamic pricing engine.
  - **AI Interview System**: Interactive interview prep platform with timed questions and evaluation history (verified active repo on GitHub).
  - **Business Ordering App**: Multi-role B2B ordering and inventory management platform (in active development).
  - Includes interactive **Code Snippet Peeks** on each card to view actual controller/service logic.
- **Milestone-Driven Learning Journey**: Transparent development timeline tracking full-stack project building, Java & DSA algorithmic practice, and production deployments without fabricated work history.
- **Functional Contact Section**:
  - Live client-side field validation for Name, Email, and Message.
  - Native `mailto` pre-fill generation for guaranteed delivery to `kumsailesh782@gmail.com`.
  - 1-click "Copy Email" button with instant feedback toast.
- **Accessibility & Performance**:
  - Semantic HTML5 landmark structure (`header`, `nav`, `main`, `section`, `footer`).
  - `@media (prefers-reduced-motion: reduce)` support.
  - Custom branded SVG favicon and Open Graph / Twitter SEO meta tags.
  - Fully responsive across mobile, tablet, and ultra-wide screens.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Tooling & Bundler**: Vite 6
- **Styling**: Tailwind CSS 3.4 with custom glassmorphism, gradients, and keyframes
- **Icons**: Lucide React
- **Animations & Transitions**: CSS GPU-accelerated transforms & smooth scroll

---

## 📁 Project Structure

```text
shailesh-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Glowing geometric SK monogram favicon
│   └── resume.pdf              # (Optional) Drop your resume here for direct download
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphic header with active section spy & mobile drawer
│   │   ├── HeroSection.jsx     # Hero greeting, verified socials, and interactive IDE window
│   │   ├── MarqueeTicker.jsx   # Infinite running stack ticker
│   │   ├── AboutSection.jsx    # 2-column narrative & 4 engineering pillar cards
│   │   ├── SkillsSection.jsx   # Categorized skills matrix with tech badges
│   │   ├── ProjectsSection.jsx # Project cards with visual mockups & code peek toggles
│   │   ├── JourneySection.jsx  # Continuous learning milestones
│   │   ├── ContactSection.jsx  # Contact form with live validation & mailto fallback
│   │   ├── Footer.jsx          # Copyright, socials, and back-to-top button
│   │   ├── ResumeModal.jsx     # Transparent resume status dialog
│   │   └── LiveDemoModal.jsx   # Project execution and deployment status dialog
│   ├── data/
│   │   └── portfolioData.js    # Centralized, honest portfolio data & links
│   ├── styles/
│   │   └── index.css           # Tailwind layers, glassmorphism, and scrollbar styles
│   ├── App.jsx                 # Main application component
│   └── main.jsx                # React DOM entrypoint
├── dist/                       # Production-ready static output
├── index.html                  # HTML5 template with SEO and Google Fonts
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind theme extensions & custom animations
├── vercel.json                 # Vercel static rewrites and security headers
└── vite.config.js              # Vite build configuration with relative base support
```

---

## 🚀 Running Locally on macOS

### 1. Navigate to the project directory:
```bash
cd /Users/shaileshkumar/.gemini/antigravity/scratch/shailesh-portfolio
```

### 2. Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production:
```bash
npm run build
```
The optimized static bundle is generated in the `dist/` directory.

### 4. Preview the Production Build:
```bash
npm run preview
```

---

## 🌐 Free Public Deployment Instructions

### Option A: Free Deployment via Vercel (Recommended — 2 Minutes)

1. Push this project folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete premium developer portfolio"
   git branch -M main
   git remote add origin https://github.com/Shailesh-7777/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Within 45 seconds, your live production portfolio will be accessible at:
   `https://<your-project-name>.vercel.app`

---

### Option B: Free Deployment via GitHub Pages

1. Push the code to your repository:
   ```bash
   git remote add origin https://github.com/Shailesh-7777/portfolio.git
   git push -u origin main
   ```
2. On GitHub, navigate to your repository **Settings** -> **Pages**.
3. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically run, build the Vite app, and publish it to:
   `https://shailesh-7777.github.io/portfolio/`

---

## ✏️ Customization Guide

- **Adding Your Resume PDF**:
  Drop your `resume.pdf` file into the `public/` directory (`public/resume.pdf`). Once present, visitors can click Resume to download it directly.
- **Updating Social Links & Details**:
  Open `src/data/portfolioData.js` to update emails, GitHub URLs, LinkedIn profile links, or project descriptions at any time.

---

## 🔒 Privacy & Honesty Standards

This portfolio intentionally collects zero user telemetry and sets no tracking cookies. All project statuses, repository links, and milestones are honestly represented without fabricated statistics.
