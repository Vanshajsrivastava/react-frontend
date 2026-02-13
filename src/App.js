import { useEffect, useMemo, useState } from "react";
import "./App.css";

const profile = {
  name: "Vanshaj Srivastava",
  role: "DevOps, Automation & Cloud Operations Engineer",
  location: "Leicester, UK",
  intro:
    "I design and operate reliable cloud platforms with Infrastructure as Code, CI/CD automation, and observability-first engineering.",
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
      "Built CI/CD pipelines with Jenkins and GitHub Actions to reduce deployment lead time.",
      "Provisioned AWS infrastructure (EC2, VPC, IAM, Auto Scaling) using Terraform and CloudFormation.",
      "Delivered containerized workloads on EKS and integrated monitoring with CloudWatch, Grafana, and Loki.",
      "Implemented automated test workflows (PyTest, Robot Framework) and improved release reliability.",
    ],
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
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
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
        </section>

        <section id="about" className="section reveal">
          <h2>About</h2>
          <p>
            I am actively building my career in DevOps, Automation, Cloud Operations, Site Reliability,
            and Linux Infrastructure Engineering. I specialize in creating secure, scalable, and highly
            observable delivery platforms that improve release confidence and operational stability.
          </p>
          <p>
            I am currently based in the UK, open to opportunities worldwide, and hold a Graduate Route
            visa valid until 25 September 2027.
          </p>

          <div className="focus-grid">
            {focusAreas.map((item) => (
              <span className="focus-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal">
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

        <section id="skills" className="section reveal">
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

        <section id="projects" className="section reveal">
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

        <section id="contact" className="section reveal">
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
