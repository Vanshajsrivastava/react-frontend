import { useEffect, useMemo, useState } from "react";
import "./App.css";

const profile = {
  name: "Vanshaj Srivastava",
  role: "DevOps, Automation & Cloud Operations Engineer",
  location: "United Kingdom",
  intro:
    "I build secure, scalable, and automation-driven cloud platforms with a strong focus on reliability, deployment safety, and operational excellence.",
  github: "https://github.com/Vanshajsrivastava",
  linkedin: "https://www.linkedin.com/in/vanshaj-srivastava",
  email: "mailto:srivastavanshaj10@gmail.com",
};

const focusAreas = [
  "DevOps Engineering",
  "Automation Engineering",
  "Cloud Operations Engineering",
  "Site Reliability Engineering",
  "Linux Administration",
];

const experiences = [
  {
    title: "DevOps Engineer Intern",
    company: "AppInventiv",
    location: "Remote, UK",
    period: "Sep 2025 - Present",
    highlights: [
      "Executed end-to-end DevOps tasks independently across sandbox and pre-production environments.",
      "Built, maintained, and optimized 10+ CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 35%.",
      "Designed and configured AWS services (EC2, VPC, IAM, Auto Scaling), improving environment stability and security compliance.",
      "Provisioned and operated 15+ containerized microservices on Amazon EKS with Horizontal Pod Autoscaling (HPA).",
      "Established monitoring and alerting with CloudWatch, Grafana, and Loki, reducing incident response time by 30%.",
      "Automated infrastructure provisioning using Terraform and CloudFormation, improving deployment consistency by 45%.",
      "Orchestrated GitOps workflows using ArgoCD, enabling automated and auditable Kubernetes deployments.",
      "Integrated automated test suites (PyTest and Robot Framework) into CI/CD pipelines to validate builds before deployment.",
    ],
  },
  {
    title: "IT Functional Consultant",
    company: "Andapp Digital",
    location: "Pune, India",
    period: "May 2023 - Oct 2023",
    highlights: [
      "Led full-lifecycle implementation of Oracle Fusion HCM across Core HR, Payroll, and Talent modules for enterprise users in India and the UAE.",
      "Streamlined configuration and deployment by customizing processes with HDL files and Sandbox environments, reducing rollout errors and delivery time.",
      "Authored process documentation and training materials to improve knowledge transfer and onboarding efficiency.",
      "Worked within Agile delivery models to collaborate continuously with business stakeholders and iterate quickly on SaaS configurations.",
    ],
  },
];

const education = [
  {
    degree: "MSc in Cloud Computing",
    school: "University of Leicester",
    location: "Leicester, United Kingdom",
    period: "Jan 2024 - Jul 2025",
  },
  {
    degree: "BE in Computer Science & Engineering",
    school: "Savitribai Phule Pune University",
    location: "Pune, India",
    period: "Aug 2019 - Jun 2023",
  },
  {
    degree: "Higher Secondary",
    school: "St John's School",
    location: "Varanasi, India",
    period: "2018 - 2019",
  },
];

const skillGroups = [
  {
    title: "Cloud",
    items: ["AWS (EC2, VPC, IAM, S3, CloudWatch, SNS)", "Azure"],
  },
  {
    title: "IaC",
    items: ["Terraform", "CloudFormation"],
  },
  {
    title: "CI/CD",
    items: ["GitHub Actions", "Jenkins", "AWS CodePipeline", "CodeDeploy"],
  },
  {
    title: "Containers & Kubernetes",
    items: ["Docker", "Amazon EKS", "ArgoCD", "Helm"],
  },
  {
    title: "Monitoring",
    items: ["CloudWatch", "Prometheus", "Grafana", "Loki", "Promtail", "Node Exporter"],
  },
  {
    title: "NLP & Reasoning",
    items: [
      "spaCy",
      "medSpaCy",
      "NER",
      "Dependency Parsing",
      "NetworkX",
      "Groove (Graph Rewriting)",
      "Explainable AI (XAI)",
      "OpenAI GPT-3.5 API",
    ],
  },
  {
    title: "Languages & Scripting",
    items: ["Bash", "Python", "JavaScript", "Ruby"],
  },
];

const projects = [
  {
    title: "Terraform AWS VPC + EC2",
    problem: "Provision repeatable networking and compute environments quickly.",
    stack: ["Terraform", "AWS VPC", "EC2", "IAM", "SSM"],
    impact: "Reduced manual provisioning effort and standardized environment setup.",
    repo: "https://github.com/Vanshajsrivastava/Infra-automation-portfolio/tree/main/terraform-vpc-ec2",
  },
  {
    title: "S3 Static Website + CloudFront + OAC",
    problem: "Serve static applications securely with low latency globally.",
    stack: ["S3", "CloudFront", "OAC"],
    impact: "Improved frontend delivery performance and tightened origin security.",
    repo: "https://github.com/Vanshajsrivastava/Infra-automation-portfolio/tree/main/s3-static-website",
  },
  {
    title: "CloudWatch Monitoring + SNS Alerting",
    problem: "Detect service failures and notify teams before user impact grows.",
    stack: ["CloudWatch", "SNS", "Metrics", "Alarms"],
    impact: "Enabled proactive alerting and faster issue response.",
    repo: "https://github.com/Vanshajsrivastava/Infra-automation-portfolio/tree/main/cloudwatch-monitoring",
  },
  {
    title: "Bash Automation Toolkit",
    problem: "Eliminate repetitive operations tasks across Linux environments.",
    stack: ["Bash", "Cron", "System utilities"],
    impact: "Improved operational consistency for routine maintenance and cleanup tasks.",
    repo: "https://github.com/Vanshajsrivastava/Infra-automation-portfolio/tree/main/bash-automation",
  },
  {
    title: "NLP Interface for Rule-Based Reasoning (Dissertation)",
    problem: "Convert unstructured text into explainable, rule-backed inferences in family and medical domains.",
    stack: ["Python", "spaCy", "medSpaCy", "NetworkX", "Groove", "GPT-3.5"],
    impact: "Built an end-to-end XAI pipeline from natural language input to graph reasoning and human-readable explanations.",
    repo: "https://github.com/Vanshajsrivastava/nlp-rule-based-reasoning-engine",
  },
];

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored || "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          VS
        </a>

        <nav aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle color theme"
          title="Toggle theme"
        >
          <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
        </button>
      </header>

      <main>
        <section id="home" className="hero reveal">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="eyebrow">DevOps Portfolio</p>
              <h1>{profile.name}</h1>
              <p className="role">{profile.role}</p>
              <p className="intro">{profile.intro}</p>
              <p className="location">{profile.location}</p>

              <div className="hero-cta">
                <a className="btn btn-primary" href="#projects">
                  View Projects
                </a>
                <a className="btn btn-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
                  Download CV
                </a>
              </div>
            </div>

            <div className="hero-photo-wrap" aria-label="Profile photo">
              <img
                className="hero-photo"
                src="/profile-photo.jpg"
                alt="Vanshaj Srivastava"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/profile-placeholder.svg";
                }}
              />
            </div>
          </div>
        </section>

        <section id="about" className="section island reveal">
          <h2>About</h2>
          <p>
            I am focused on building a long-term career in DevOps Engineering, Automation Engineering,
            Cloud Operations Engineering, Site Reliability Engineering, and Linux Administration. My goal is to
            contribute to high-performing engineering teams by improving platform reliability, release quality,
            and operational efficiency through automation and robust cloud practices.
          </p>
          <p>
            Based in the United Kingdom and open to opportunities worldwide, I hold a Graduate Route visa
            valid until 25 September 2027.
          </p>

          <div className="focus-grid">
            {focusAreas.map((item) => (
              <span className="focus-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="section island reveal">
          <h2>Experience</h2>
          <div className="experience-list">
            {experiences.map((exp) => (
              <article className="experience-card" key={`${exp.company}-${exp.title}`}>
                <div className="exp-head">
                  <h3>{exp.title}</h3>
                  <span>{exp.period}</span>
                </div>
                <p className="exp-meta">
                  {exp.company} · {exp.location}
                </p>
                <ul>
                  {exp.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>


        <section id="education" className="section island reveal">
          <h2>Education</h2>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-card" key={`${item.degree}-${item.school}`}>
                <h3>{item.degree}</h3>
                <p className="edu-school">{item.school}</p>
                <p className="edu-meta">
                  {item.location} · {item.period}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section island reveal">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section island reveal">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.problem}</p>
                <p>
                  <strong>Stack:</strong> {project.stack.join(", ")}
                </p>
                <p>
                  <strong>Impact:</strong> {project.impact}
                </p>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  View Repository
                </a>
              </article>
            ))}
          </div>
        </section>


        <section id="blogs" className="section island reveal">
          <h2>Blogs</h2>
          <div className="blog-placeholder">
            <h3>Technical blogs are coming soon</h3>
            <p>
              I will start publishing articles on DevOps practices, cloud operations, CI/CD patterns,
              Kubernetes, and automation playbooks.
            </p>
          </div>
        </section>

        <section id="contact" className="section island reveal">
          <h2>Contact</h2>
          <p>Open to DevOps, SRE, Cloud Ops, and platform engineering opportunities.</p>
          <div className="contact-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.email}>Email</a>
          </div>
        </section>
      </main>

      <footer>
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
