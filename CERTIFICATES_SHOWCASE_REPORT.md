# Certifications & Achievements Showcase — Implementation & Testing Report

**Candidate:** Shailesh Kumar  
**Professional Title:** Full Stack Developer | Software Developer  
**Location:** Bettiah, West Champaran, Bihar, India  
**Live Canonical Domain:** [https://shailesh-portfolio.onrender.com](https://shailesh-portfolio.onrender.com)  
**GitHub Repository:** [https://github.com/Shailesh-7777/portfolio](https://github.com/Shailesh-7777/portfolio)  
**Report Timestamp:** November 11, 2026  

---

## 1. Executive Summary

A professional **"Certifications & Achievements"** showcase section and a secure, persistent **Owner Management Console** have been built and integrated into Shailesh Kumar's developer portfolio.

The system is architected to guarantee:
1. **Public Visitor Security:** Visitors have read-only access to published, accredited credentials with category filtering, full-screen document viewing, PDF embedding, and direct verification links.
2. **Owner Administrative Power:** The owner can upload PDF or high-resolution image certificates, assign/create categories, edit metadata, replace proof files, delete credentials, toggle public visibility, and reorder display priorities.
3. **Storage Reliability:** Employs an **IndexedDB persistent storage layer** (`shailesh_portfolio_db`) capable of storing multi-megabyte PDFs and images without running into `localStorage` quota limitations, coupled with graceful fallback.
4. **Search Engine Visibility:** Formatted with Schema.org `EducationalOccupationalCredential` structured data linked to the `Person` graph in `index.html`, along with deep links and Google image metadata in `sitemap.xml`.

---

## 2. Core Components & Visual Architecture

### 2.1 "Certifications & Achievements" Section (`#certifications`)
- **Title Display:** `CERTIFICATIONS & ACHIEVEMENTS` with cyan-to-purple gradient text and cyberpunk ambient glows.
- **Integrity Policy:** Highlights that only accredited, verifiable credentials are published to visitors.
- **Dynamic Category Filter Pills:**
  - `All` (displays aggregate count).
  - Categorized pills: `Web Development`, `Full Stack Development`, `Java Programming`, `Cloud Computing`, `AWS`, `Database Management`, `Artificial Intelligence`, `Internship`, `Hackathons`, `Other Achievements`, plus any owner-created categories.
  - Active pills glow with electric cyan and purple outlines and real-time count badges.
- **Futuristic 3D Certificate Cards (`Tilt3DCard`):**
  - **Document Preview:**
    - **PDF Documents:** Custom holographic PDF card thumbnail featuring icon, title, and "PDF DOC" badge.
    - **Image Documents:** Full-resolution preview with subtle scanlines, fallback handling (`onError`), and holographic zoom overlay on hover.
  - **Category Badge:** Highlighted domain category pill.
  - **Title & Issuer:** Kanit bold title with issuer building icon and date.
  - **Credential ID:** Dedicated HUD badge with **one-click copy to clipboard** and live feedback checkmark.
  - **Action Controls:**
    - `View Certificate` button opening the full-screen modal viewer.
    - `Verify` button linking directly to the official credential issuer.
    - *(Owner mode only)* Quick `Edit` button opening the admin console.

### 2.2 Full-Screen Document Viewer Modal (`CertificateModal.jsx`)
- **Dual Engine Viewer:**
  - **For PDF Certificates:** Renders an interactive `<iframe />` viewer embedded directly into the modal, with dedicated toolbar buttons: `Open in New Tab` and `Download PDF`.
  - **For Image Certificates:** Crisp, high-resolution container with dynamic click-to-zoom controls (Zoom In / Zoom Out).
- **Metadata Sidebar:** Displays issuing organization, date of issue, domain category, credential ID (with 1-click copy), verified competencies note, and official verification URL button.
- **Keyboard & Accessibility Controls:** Supports `Escape` key dismissal and backdrop click-to-close.

### 2.3 Secure Owner-Only Management Console (`OwnerDashboardModal.jsx`)
- **Authentication Protection:** Access gated behind owner passcode validation.
- **File Upload Engine:**
  - Supports `.pdf`, `.jpg`, `.jpeg`, `.png`, and `.webp` documents.
  - Enforces a 10MB maximum file size limit.
  - Blocks executable or unsupported file types.
- **Dynamic Category Assignment:**
  - Select from standard engineering categories or click `+ Create New Category...` to generate custom categories on the fly.
- **Display Sequence Reordering:**
  - Each certificate card in the dashboard features **Move Up (`▲`)** and **Move Down (`▼`)** controls.
  - Reordering instantly updates the sequence number (`#1`, `#2`, `#3`) and synchronizes with the public gallery.
- **Draft / Published Toggle:** One-click `Publish` / `Hide` switch keeping unverified drafts private.

---

## 3. Persistent Storage Engine (`certificateStorage.js`)

| Feature | Specification |
| :--- | :--- |
| **Primary Engine** | Browser Native IndexedDB (`shailesh_portfolio_db`, version 1, store `certificates_store`) |
| **Secondary Backup** | `localStorage` with base64 payload size checks to prevent `QUOTA_EXCEEDED_ERR` |
| **Max Upload Size** | 10 MB per certificate document |
| **Supported File Types** | `application/pdf`, `image/png`, `image/jpeg`, `image/jpg`, `image/webp` |
| **Missing File Fallback** | Fallback placeholder SVG (`/cert-placeholder.svg`) displayed automatically if asset is missing |

---

## 4. Default Verified Credentials in System

| Title | Issuer | Category | Credential ID | Official Verification URL |
| :--- | :--- | :--- | :--- | :--- |
| **AWS Academy Graduate – Cloud Foundations** | AWS Academy | Cloud Computing | `uuzQvcvn` | [Credly Verification](https://www.credly.com/go/uuzQvcvn) |
| **Web Development Virtual Internship Certificate** | CodSoft | Internship | `7072c87` | [CodSoft Official](https://www.codsoft.in) |
| **GenAI Powered Data Analytics Job Simulation** | TATA & Forage | Artificial Intelligence | `Ys7qmoqsokuBCMKgW` | [Forage Verification](https://www.theforage.com) |
| **Web Design & Development Online Skilling Course** | NSDC Skill India | Web Development | `SIDH-WD-2026` | [Skill India Digital](https://www.skillindiadigital.gov.in) |

---

## 5. Google SEO & Structured Data Implementation

1. **Schema.org JSON-LD:**
   - Embedded four `EducationalOccupationalCredential` nodes inside the `hasCredential` array of the `Person` schema in `index.html`:
     - Schema Type: `EducationalOccupationalCredential`
     - Properties: `name`, `credentialCategory`, `recognizedBy`, `url`.
2. **Sitemap Configuration (`/public/sitemap.xml`):**
   - Direct deep link: `https://shailesh-portfolio.onrender.com/#certifications` (Priority `0.85`).
   - Image metadata entries:
     - `https://shailesh-portfolio.onrender.com/certificates/cert-aws.png`
     - `https://shailesh-portfolio.onrender.com/certificates/cert-codsoft.png`
     - `https://shailesh-portfolio.onrender.com/certificates/cert-tata.png`
     - `https://shailesh-portfolio.onrender.com/certificates/cert-nsdc.png`
3. **Robots Directives (`/public/robots.txt`):**
   - Explicitly allows search engine crawlers to index `/certificates/` and public assets while protecting `/admin` and private state.

---

## 6. Automated Verification Test Suite

An automated test suite was developed and executed using Node.js ([`scripts/test_certificate_system.js`](file:///Users/shaileshkumar/.gemini/antigravity/scratch/shailesh-portfolio/scripts/test_certificate_system.js)).

### Test Execution Results:
```txt
--- STARTING CERTIFICATE SHOWCASE SYSTEM TESTS ---

[PASS] Test 1.1: AWS Academy Graduate credential verification (Badge ID: uuzQvcvn)
[PASS] Test 1.2: CodSoft Web Development Internship verification (Cert ID: 7072c87)
[PASS] Test 1.3: TATA & Forage GenAI Data Analytics verification (Code: Ys7qmoqsokuBCMKgW)
[PASS] Test 1.4: NSDC Skill India skilling course verification (SIDH genuine credential)
[PASS] Test 2.1: Valid PNG image upload (Allows PNG within 10MB)
[PASS] Test 2.2: Valid PDF upload (Allows PDF within 10MB)
[PASS] Test 2.3: Valid WebP upload (Allows WebP format)
[PASS] Test 2.4: Reject oversized file (>10MB)
[PASS] Test 2.5: Reject malicious non-document file (.exe rejected)
[PASS] Test 3.1: Move certificate up in order sequence (Sequence updated)
[PASS] Test 4.1: Public visitors only see published certificates (Drafts hidden)
[PASS] Test 5.1: Category filter returns matching items (Counts matched)
[PASS] Test 6.1: Schema.org EducationalOccupationalCredential in index.html
[PASS] Test 7.1: Sitemap.xml contains certificates deep link and image metadata
[PASS] Test 8.1: Physical existence of all certificate proof files in public/certificates/

--- ALL CERTIFICATE SYSTEM TESTS COMPLETED ---
Summary: 15/15 Tests Passed.
```

---

## 7. Deployment Status

- **Build Output:** Vite production build completed with 0 errors (`✓ built in 2.33s`).
- **Git Commit:** `6547b1c` (*feat: implement professional Certifications & Achievements showcase with IndexedDB persistent storage and admin reordering*).
- **Remote Branch:** Pushed to GitHub `main` branch.
- **Continuous Deployment:** Render will automatically build and publish the latest commit.
