import { useEffect, useMemo, useState } from "react";
import "./App.css";

const profile = {
  name: "Vanshaj Srivastava",
  role: "DevOps & Automation Engineer",
  location: "Leicester, UK",
  intro:
    "I build reliable cloud platforms with Terraform, Kubernetes, CI/CD automation, and production-grade observability.",
  github: "https://github.com/Vanshajsrivastava",
  linkedin: "https://www.linkedin.com/in/vanshaj-srivastava",
  email: "mailto:srivastavanshaj10@gmail.com",
};

const skillGroups = [
  {
    title: "Cloud",
    items: ["AWS (EC2, VPC, IAM, S3, CloudWatch, SNS)", "Azure basics"],
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
    items: ["Docker", "Amazon EKS", "ArgoCD", "Helm basics"],
  },
  {
    title: "Monitoring",
    items: ["Prometheus", "Grafana", "Loki", "Promtail", "Node Exporter"],
  },
  {
    title: "Scripting",
    items: ["Bash", "Python", "Linux automation"],
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
    stack: ["S3", "CloudFront", "OAC", "Route-ready architecture"],
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
    problem: "Eliminate repetitive ops tasks across Linux environments.",
    stack: ["Bash", "Cron", "System utilities"],
    impact: "Improved operational consistency for routine maintenance tasks.",
    repo: "https://github.com/Vanshajsrivastava/Infra-automation-portfolio/tree/main/bash-automation",
  },
  {
    title: "NLP Interface for Rule-Based Reasoning (Dissertation)",
    problem: "Convert unstructured text into explainable, rule-backed inferences for real-world domains.",
    stack: ["Python", "spaCy", "medSpaCy", "NetworkX", "Groove", "GPT-3.5"],
    impact: "Built an end-to-end XAI pipeline from language input to graph reasoning and human-readable explanations.",
    repo: "https://github.com/Vanshajsrivastava/vs272",
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
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
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
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle color theme"
        >
          {theme === "dark" ? "Light" : "Dark"}
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
            I focus on practical cloud automation: infrastructure as code, secure delivery pipelines,
            and observable systems that are easy to operate.
          </p>
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
          <p>Open to DevOps and Cloud engineering opportunities.</p>
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
        <p>© {year} {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
