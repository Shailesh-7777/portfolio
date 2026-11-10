import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    HRFlowable,
    ListFlowable,
    ListItem
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

OUTPUT_DIR = "/Users/shaileshkumar/.gemini/antigravity/scratch/shailesh-portfolio/public/resume"
os.makedirs(OUTPUT_DIR, exist_ok=True)
PDF_PATH = os.path.join(OUTPUT_DIR, "Shailesh_Kumar_Resume.pdf")
DOCX_PATH = os.path.join(OUTPUT_DIR, "Shailesh_Kumar_Resume.docx")

def build_pdf():
    # 0.5 in margins = 36 pt
    doc = SimpleDocTemplate(
        PDF_PATH,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()

    # Custom styles
    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=23,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#0F172A')
    )

    title_style = ParagraphStyle(
        'ResumeTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#0284C7') # Professional electric blue
    )

    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#334155')
    )

    section_heading = ParagraphStyle(
        'ResumeSection',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0F172A'),
        spaceAfter=3,
        spaceBefore=7
    )

    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        alignment=TA_JUSTIFY,
        textColor=colors.HexColor('#1E293B')
    )

    item_title = ParagraphStyle(
        'ResumeItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12.5,
        textColor=colors.HexColor('#0F172A')
    )

    item_subtitle = ParagraphStyle(
        'ResumeItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#475569')
    )

    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#1E293B'),
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2
    )

    story = []

    # 1. HEADER
    story.append(Paragraph("SHAILESH KUMAR", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Full Stack Developer | Software Developer", title_style))
    story.append(Spacer(1, 3))
    
    contact_line = (
        "Bettiah, West Champaran, Bihar, India &nbsp;|&nbsp; "
        "<a href='mailto:kumsailesh784@gmail.com' color='#0284C7'><u>kumsailesh784@gmail.com</u></a> &nbsp;|&nbsp; "
        "<a href='tel:+919972505004' color='#0284C7'><u>+91 9972505004</u></a><br/>"
        "<a href='https://github.com/Shailesh-7777' color='#0284C7'><u>github.com/Shailesh-7777</u></a> &nbsp;|&nbsp; "
        "<a href='https://www.linkedin.com/in/shailesh-kumar-507324353' color='#0284C7'><u>linkedin.com/in/shailesh-kumar</u></a> &nbsp;|&nbsp; "
        "<a href='https://shailesh-portfolio.onrender.com' color='#0284C7'><u>shailesh-portfolio.onrender.com</u></a>"
    )
    story.append(Paragraph(contact_line, contact_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#CBD5E1'), spaceBefore=2, spaceAfter=4))

    # 2. PROFESSIONAL SUMMARY
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    summary_text = (
        "Computer Science and Engineering undergraduate (2024–2028) and aspiring Full Stack Developer with "
        "rigorous foundations in modern web architectures, algorithmic problem solving, and object-oriented software engineering. "
        "Hands-on experience developing responsive full-stack applications utilizing React.js, JavaScript, Node.js, Express.js, "
        "Java, Spring Boot, MongoDB, and MySQL. Proficient in designing secure RESTful APIs, relational and NoSQL database modeling, "
        "and exploring scalable cloud fundamentals with AWS."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#E2E8F0'), spaceBefore=4, spaceAfter=4))

    # 3. TECHNICAL SKILLS
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    skills = [
        "<b>Programming Languages:</b> Java, JavaScript (ES6+), HTML5, CSS3",
        "<b>Frontend Development:</b> React.js, Vite, Tailwind CSS, Bootstrap, Responsive UI, State Management",
        "<b>Backend Development:</b> Node.js, Express.js, Spring Boot, RESTful APIs, JWT Authentication",
        "<b>Databases & ORM:</b> MongoDB, Mongoose, MySQL, ACID Relational Queries",
        "<b>Developer Tools:</b> Git, GitHub, VS Code, Postman, npm",
        "<b>Cloud & Concepts (Learning):</b> AWS (EC2, S3, IAM), Cloud Foundations, System Design, DSA in Java"
    ]
    for s in skills:
        story.append(Paragraph(f"&bull;&nbsp;&nbsp;{s}", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#E2E8F0'), spaceBefore=4, spaceAfter=4))

    # 4. EDUCATION
    story.append(Paragraph("EDUCATION", section_heading))
    
    # B.Tech
    story.append(Paragraph("<b>Bachelor of Technology (B.Tech) – Computer Science and Engineering</b> <font color='#475569'>| 2024 – 2028 (Currently Pursuing)</font>", item_title))
    story.append(Paragraph("Maharishi Markandeshwar (Deemed to be University), Mullana, Ambala, Haryana", item_subtitle))
    story.append(Paragraph("&bull;&nbsp;&nbsp;<b>Core Coursework:</b> Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (DBMS), Operating Systems, Computer Networks.", bullet_style))
    story.append(Spacer(1, 2))

    # Class 12
    story.append(Paragraph("<b>Class 12th (Senior Secondary) – Science Stream (PCM)</b> <font color='#475569'>| Passing Year: 2023 | <b>75.0%</b></font>", item_title))
    story.append(Paragraph("R.L.S.Y. College, Bettiah, West Champaran, Bihar", item_subtitle))
    story.append(Spacer(1, 2))

    # Class 10
    story.append(Paragraph("<b>Class 10th (Secondary School Examination)</b> <font color='#475569'>| Passing Year: 2021 | <b>80.6%</b></font>", item_title))
    story.append(Paragraph("Sahu Jain High School, Lauriya, West Champaran, Bihar", item_subtitle))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#E2E8F0'), spaceBefore=4, spaceAfter=4))

    # 5. PROJECTS
    story.append(Paragraph("TECHNICAL PROJECTS", section_heading))

    # Wedding Wagon
    story.append(Paragraph("<b>Wedding Wagon – MERN Stack Wedding Services Marketplace</b> &nbsp;|&nbsp; <i>React.js, Node.js, Express.js, MongoDB, JWT</i>", item_title))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Architected a multi-sided marketplace connecting clients with wedding vendors with 3-tiered Role-Based Access Control (Customer, Vendor, Admin).", bullet_style))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Engineered vendor service catalog management, date collision availability checks, booking reservation pipelines, and advance deposit tracking.", bullet_style))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Implemented stateless JWT authentication, secure cookie handling, and responsive Tailwind CSS user interfaces.", bullet_style))
    story.append(Spacer(1, 3))

    # AI Interview System
    story.append(Paragraph("<b>AI Interview System – Mock Interview Platform</b> &nbsp;|&nbsp; <i>React.js, Java 21, Spring Boot 3, MySQL, REST APIs</i>", item_title))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Developed a recruitment preparation web platform conducting structured mock interviews across Technical (DSA, Java, Web) and HR behavioral categories.", bullet_style))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Implemented timed interview sessions, dynamic question delivery, multi-criteria rubric evaluation, and historical performance tracking.", bullet_style))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Coupled React frontend with Spring Boot REST services backed by transactional MySQL persistence and decoupled AI scoring adapters.", bullet_style))
    story.append(Spacer(1, 3))

    # AI Clothing Recommendation
    story.append(Paragraph("<b>AI-Based Clothing Recommendation System</b> &nbsp;|&nbsp; <i>React.js, Python FastAPI, MediaPipe Pose, MongoDB</i>", item_title))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Designed a two-stage outfit recommendation pipeline eliminating cross-gender catalog leakage and ranking ensembles by occasion and silhouette synergy.", bullet_style))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Integrated MediaPipe Pose skeletal tracking estimating anatomical torso-to-shoulder proportions for tailored fashion discovery.", bullet_style))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Built interactive prototype featuring split-view before/after try-on visualization and multi-category wardrobe filtering.", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#E2E8F0'), spaceBefore=4, spaceAfter=4))

    # 6. VIRTUAL INTERNSHIP & PRACTICAL EXPERIENCE
    story.append(Paragraph("VIRTUAL INTERNSHIP & PRACTICAL EXPERIENCE", section_heading))
    story.append(Paragraph("<b>CodeSoft – Web Development Intern</b> &nbsp;|&nbsp; <font color='#475569'>May 2026 – June 2026 | Credential ID: 7072c87</font>", item_title))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Engineered responsive and cross-browser accessible web pages utilizing semantic HTML5, modern CSS3 styling, and ES6+ JavaScript.", bullet_style))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Constructed interactive DOM components, handled client-side form validation, and adhered to mobile-first responsive design best practices.", bullet_style))
    story.append(Paragraph("&bull;&nbsp;&nbsp;Practiced Git version control workflows, creating feature branches, structured commit messages, and managing GitHub repositories.", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor('#E2E8F0'), spaceBefore=4, spaceAfter=4))

    # 7. CERTIFICATIONS & ACCREDITATIONS
    story.append(Paragraph("CERTIFICATIONS & ACCREDITATIONS", section_heading))
    certs = [
        "<b>AWS Academy Graduate – AWS Academy Cloud Foundations</b> | 20 Hours Coursework (Issued: 11/10/2026 | Digital Badge: credly.com/go/uuzQvcvn)",
        "<b>Web Development Virtual Internship Certificate</b> | CodeSoft (Credential ID: 7072c87 | Completed: June 2026)",
        "<b>Web Design & Development Online Skilling Course</b> | NSDC & Skill India Digital Hub (SIDH) (Completed: May 02, 2026)",
        "<b>GenAI Powered Data Analytics Job Simulation</b> | TATA & Forage (Completed: July 26, 2025)"
    ]
    for c in certs:
        story.append(Paragraph(f"&bull;&nbsp;&nbsp;{c}", bullet_style))

    doc.build(story)
    print("PDF build completed:", PDF_PATH)

def build_docx():
    doc = Document()

    # Margins 0.6 inch
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.5)
        section.bottom_margin = Inches(0.5)
        section.left_margin = Inches(0.5)
        section.right_margin = Inches(0.5)

    # Helper function for headings
    def add_sec_heading(title):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(8)
        p.paragraph_format.space_after = Pt(2)
        run = p.add_run(title)
        run.bold = True
        run.font.name = 'Arial'
        run.font.size = Pt(11)
        run.font.color.rgb = RGBColor(15, 23, 42)

    # 1. Header
    name_p = doc.add_paragraph()
    name_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    name_p.paragraph_format.space_before = Pt(0)
    name_p.paragraph_format.space_after = Pt(1)
    run_name = name_p.add_run("SHAILESH KUMAR")
    run_name.bold = True
    run_name.font.name = 'Arial'
    run_name.font.size = Pt(18)
    run_name.font.color.rgb = RGBColor(15, 23, 42)

    title_p = doc.add_paragraph()
    title_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title_p.paragraph_format.space_before = Pt(0)
    title_p.paragraph_format.space_after = Pt(2)
    run_title = title_p.add_run("Full Stack Developer | Software Developer")
    run_title.bold = True
    run_title.font.name = 'Arial'
    run_title.font.size = Pt(10.5)
    run_title.font.color.rgb = RGBColor(2, 132, 199)

    contact_p = doc.add_paragraph()
    contact_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    contact_p.paragraph_format.space_before = Pt(0)
    contact_p.paragraph_format.space_after = Pt(6)
    contact_text = (
        "Bettiah, West Champaran, Bihar, India | kumsailesh784@gmail.com | +91 9972505004\n"
        "github.com/Shailesh-7777 | linkedin.com/in/shailesh-kumar | shailesh-portfolio.onrender.com"
    )
    run_contact = contact_p.add_run(contact_text)
    run_contact.font.name = 'Arial'
    run_contact.font.size = Pt(8.5)
    run_contact.font.color.rgb = RGBColor(51, 65, 85)

    # 2. Summary
    add_sec_heading("PROFESSIONAL SUMMARY")
    sum_p = doc.add_paragraph()
    sum_p.paragraph_format.space_before = Pt(0)
    sum_p.paragraph_format.space_after = Pt(4)
    run_sum = sum_p.add_run(
        "Computer Science and Engineering undergraduate (2024–2028) and aspiring Full Stack Developer with "
        "rigorous foundations in modern web architectures, algorithmic problem solving, and object-oriented software engineering. "
        "Hands-on experience developing responsive full-stack applications utilizing React.js, JavaScript, Node.js, Express.js, "
        "Java, Spring Boot, MongoDB, and MySQL. Proficient in designing secure RESTful APIs, relational and NoSQL database modeling, "
        "and exploring scalable cloud fundamentals with AWS."
    )
    run_sum.font.name = 'Arial'
    run_sum.font.size = Pt(9)

    # 3. Skills
    add_sec_heading("TECHNICAL SKILLS")
    skills = [
        ("Programming Languages: ", "Java, JavaScript (ES6+), HTML5, CSS3"),
        ("Frontend Development: ", "React.js, Vite, Tailwind CSS, Bootstrap, Responsive UI, State Management"),
        ("Backend Development: ", "Node.js, Express.js, Spring Boot, RESTful APIs, JWT Authentication"),
        ("Databases & ORM: ", "MongoDB, Mongoose, MySQL, ACID Relational Queries"),
        ("Developer Tools: ", "Git, GitHub, VS Code, Postman, npm"),
        ("Cloud & Concepts (Learning): ", "AWS (EC2, S3, IAM), Cloud Foundations, System Design, DSA in Java")
    ]
    for label, val in skills:
        bp = doc.add_paragraph(style='List Bullet')
        bp.paragraph_format.space_before = Pt(0)
        bp.paragraph_format.space_after = Pt(1.5)
        rl = bp.add_run(label)
        rl.bold = True
        rl.font.name = 'Arial'
        rl.font.size = Pt(9)
        rv = bp.add_run(val)
        rv.font.name = 'Arial'
        rv.font.size = Pt(9)

    # 4. Education
    add_sec_heading("EDUCATION")
    
    # B.Tech
    edu1 = doc.add_paragraph()
    edu1.paragraph_format.space_before = Pt(2)
    edu1.paragraph_format.space_after = Pt(0)
    r1 = edu1.add_run("Bachelor of Technology (B.Tech) – Computer Science and Engineering | 2024 – 2028")
    r1.bold = True
    r1.font.name = 'Arial'
    r1.font.size = Pt(9.5)

    edu1_sub = doc.add_paragraph()
    edu1_sub.paragraph_format.space_before = Pt(0)
    edu1_sub.paragraph_format.space_after = Pt(2)
    r1_sub = edu1_sub.add_run("Maharishi Markandeshwar (Deemed to be University), Mullana, Ambala, Haryana (Currently Pursuing)")
    r1_sub.italic = True
    r1_sub.font.name = 'Arial'
    r1_sub.font.size = Pt(8.5)

    # Class 12
    edu2 = doc.add_paragraph()
    edu2.paragraph_format.space_before = Pt(2)
    edu2.paragraph_format.space_after = Pt(0)
    r2 = edu2.add_run("Class 12th (Senior Secondary) – Science Stream (PCM) | 2023 | 75.0%")
    r2.bold = True
    r2.font.name = 'Arial'
    r2.font.size = Pt(9.5)

    edu2_sub = doc.add_paragraph()
    edu2_sub.paragraph_format.space_before = Pt(0)
    edu2_sub.paragraph_format.space_after = Pt(2)
    r2_sub = edu2_sub.add_run("R.L.S.Y. College, Bettiah, West Champaran, Bihar")
    r2_sub.italic = True
    r2_sub.font.name = 'Arial'
    r2_sub.font.size = Pt(8.5)

    # Class 10
    edu3 = doc.add_paragraph()
    edu3.paragraph_format.space_before = Pt(2)
    edu3.paragraph_format.space_after = Pt(0)
    r3 = edu3.add_run("Class 10th (Secondary School Examination) | 2021 | 80.6%")
    r3.bold = True
    r3.font.name = 'Arial'
    r3.font.size = Pt(9.5)

    edu3_sub = doc.add_paragraph()
    edu3_sub.paragraph_format.space_before = Pt(0)
    edu3_sub.paragraph_format.space_after = Pt(4)
    r3_sub = edu3_sub.add_run("Sahu Jain High School, Lauriya, West Champaran, Bihar")
    r3_sub.italic = True
    r3_sub.font.name = 'Arial'
    r3_sub.font.size = Pt(8.5)

    # 5. Projects
    add_sec_heading("TECHNICAL PROJECTS")
    
    # Wedding Wagon
    p1 = doc.add_paragraph()
    p1.paragraph_format.space_before = Pt(2)
    p1.paragraph_format.space_after = Pt(1)
    rp1 = p1.add_run("Wedding Wagon – MERN Stack Wedding Services Marketplace | React, Node, Express, MongoDB")
    rp1.bold = True
    rp1.font.name = 'Arial'
    rp1.font.size = Pt(9.5)

    for b in [
        "Architected a multi-sided marketplace connecting clients with wedding vendors with 3-tiered Role-Based Access Control (Customer, Vendor, Admin).",
        "Engineered vendor service catalog management, date collision availability checks, booking reservation pipelines, and advance deposit tracking.",
        "Implemented stateless JWT authentication, secure cookie handling, and responsive Tailwind CSS user interfaces."
    ]:
        bp = doc.add_paragraph(style='List Bullet')
        bp.paragraph_format.space_before = Pt(0)
        bp.paragraph_format.space_after = Pt(1.5)
        run_b = bp.add_run(b)
        run_b.font.name = 'Arial'
        run_b.font.size = Pt(9)

    # AI Interview
    p2 = doc.add_paragraph()
    p2.paragraph_format.space_before = Pt(3)
    p2.paragraph_format.space_after = Pt(1)
    rp2 = p2.add_run("AI Interview System – Mock Interview Platform | React, Java 21, Spring Boot 3, MySQL")
    rp2.bold = True
    rp2.font.name = 'Arial'
    rp2.font.size = Pt(9.5)

    for b in [
        "Developed a recruitment preparation web platform conducting structured mock interviews across Technical (DSA, Java, Web) and HR behavioral categories.",
        "Implemented timed interview sessions, dynamic question delivery, multi-criteria rubric evaluation, and historical performance tracking.",
        "Coupled React frontend with Spring Boot REST services backed by transactional MySQL persistence and decoupled AI scoring adapters."
    ]:
        bp = doc.add_paragraph(style='List Bullet')
        bp.paragraph_format.space_before = Pt(0)
        bp.paragraph_format.space_after = Pt(1.5)
        run_b = bp.add_run(b)
        run_b.font.name = 'Arial'
        run_b.font.size = Pt(9)

    # AI Clothing
    p3 = doc.add_paragraph()
    p3.paragraph_format.space_before = Pt(3)
    p3.paragraph_format.space_after = Pt(1)
    rp3 = p3.add_run("AI-Based Clothing Recommendation System | React, Python FastAPI, MediaPipe, MongoDB")
    rp3.bold = True
    rp3.font.name = 'Arial'
    rp3.font.size = Pt(9.5)

    for b in [
        "Designed a two-stage outfit recommendation pipeline eliminating cross-gender catalog leakage and ranking ensembles by occasion and silhouette synergy.",
        "Integrated MediaPipe Pose skeletal tracking estimating anatomical torso-to-shoulder proportions for tailored fashion discovery.",
        "Built interactive prototype featuring split-view before/after try-on visualization and multi-category wardrobe filtering."
    ]:
        bp = doc.add_paragraph(style='List Bullet')
        bp.paragraph_format.space_before = Pt(0)
        bp.paragraph_format.space_after = Pt(1.5)
        run_b = bp.add_run(b)
        run_b.font.name = 'Arial'
        run_b.font.size = Pt(9)

    # 6. Internship
    add_sec_heading("VIRTUAL INTERNSHIP & PRACTICAL EXPERIENCE")
    exp = doc.add_paragraph()
    exp.paragraph_format.space_before = Pt(2)
    exp.paragraph_format.space_after = Pt(1)
    rexp = exp.add_run("CodeSoft – Web Development Intern | May 2026 – June 2026 | Credential ID: 7072c87")
    rexp.bold = True
    rexp.font.name = 'Arial'
    rexp.font.size = Pt(9.5)

    for b in [
        "Engineered responsive and cross-browser accessible web pages utilizing semantic HTML5, modern CSS3 styling, and ES6+ JavaScript.",
        "Constructed interactive DOM components, handled client-side form validation, and adhered to mobile-first responsive design best practices.",
        "Practiced Git version control workflows, creating feature branches, structured commit messages, and managing GitHub repositories."
    ]:
        bp = doc.add_paragraph(style='List Bullet')
        bp.paragraph_format.space_before = Pt(0)
        bp.paragraph_format.space_after = Pt(1.5)
        run_b = bp.add_run(b)
        run_b.font.name = 'Arial'
        run_b.font.size = Pt(9)

    # 7. Certifications
    add_sec_heading("CERTIFICATIONS & ACCREDITATIONS")
    certs = [
        "AWS Academy Graduate – AWS Academy Cloud Foundations | 20 Hours Coursework (Issued: 11/10/2026 | Digital Badge: credly.com/go/uuzQvcvn)",
        "Web Development Virtual Internship Certificate | CodeSoft (Credential ID: 7072c87 | Completed: June 2026)",
        "Web Design & Development Online Skilling Course | NSDC & Skill India Digital Hub (SIDH) (Completed: May 02, 2026)",
        "GenAI Powered Data Analytics Job Simulation | TATA & Forage (Completed: July 26, 2025)"
    ]
    for c in certs:
        bp = doc.add_paragraph(style='List Bullet')
        bp.paragraph_format.space_before = Pt(0)
        bp.paragraph_format.space_after = Pt(1.5)
        rc = bp.add_run(c)
        rc.font.name = 'Arial'
        rc.font.size = Pt(9)

    doc.save(DOCX_PATH)
    print("DOCX build completed:", DOCX_PATH)

if __name__ == '__main__':
    build_pdf()
    build_docx()
