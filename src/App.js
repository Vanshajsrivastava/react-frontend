import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./App.css";
import {
  SiAmazoncloudwatch,
  SiAmazoneks,
  SiAmazonrds,
  SiAmazonroute53,
  SiAmazonwebservices,
  SiArgo,
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiGrafana,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiPrometheus,
  SiPython,
  SiTerraform,
} from "react-icons/si";
import { FaAws, FaCodeBranch, FaLinux } from "react-icons/fa";
import { LuWorkflow } from "react-icons/lu";

const profile = {
  name: "Vanshaj Srivastava",
  title: "DevOps, Cloud Platform & Operations Engineer",
  subtitle:
    "I design secure cloud infrastructure, build CI/CD systems, and deliver reliable Kubernetes workloads with GitOps and automation.",
  location: "United Kingdom",
  github: "https://github.com/Vanshajsrivastava",
  linkedin: "https://www.linkedin.com/in/vanshaj-srivastava",
  email: "mailto:srivastavanshaj10@gmail.com",
};

const stackBadges = [
  { label: "AWS", Icon: FaAws },
  { label: "Terraform", Icon: SiTerraform },
  { label: "Kubernetes", Icon: SiKubernetes },
  { label: "Docker", Icon: SiDocker },
];

const experiences = [
  {
    role: "DevOps Engineer Intern",
    company: "AppInventiv",
    period: "Sep 2025 - Present",
    location: "Remote, UK",
    highlights: [
      "Built and optimized 10+ CI/CD pipelines with Jenkins and GitHub Actions.",
      "Provisioned and operated containerized services on Amazon EKS with autoscaling.",
      "Automated infra with Terraform/CloudFormation and improved deployment consistency.",
      "Implemented observability with CloudWatch, Grafana, and Loki.",
    ],
  },
  {
    role: "IT Functional Consultant",
    company: "Andapp Digital",
    period: "May 2023 - Oct 2023",
    location: "Pune, India",
    highlights: [
      "Delivered Oracle HCM implementations across HR, Payroll, and Talent modules.",
      "Reduced rollout errors using repeatable configuration patterns and sandbox workflows.",
      "Created process documentation and stakeholder training assets.",
    ],
  },
];

const skills = {
  Cloud: [
    { name: "AWS (EC2, VPC, IAM, S3, CloudWatch, SNS)", Icon: FaAws },
    { name: "Amazon EKS", Icon: SiAmazoneks },
    { name: "Amazon RDS", Icon: SiAmazonrds },
    { name: "Route 53", Icon: SiAmazonroute53 },
  ],
  DevOps: [
    { name: "Terraform", Icon: SiTerraform },
    { name: "GitHub Actions", Icon: SiGithubactions },
    { name: "Jenkins", Icon: SiJenkins },
    { name: "Argo CD / Rollouts", Icon: SiArgo },
    { name: "CodePipeline / CodeBuild", Icon: LuWorkflow },
  ],
  Programming: [
    { name: "Python", Icon: SiPython },
    { name: "Bash", Icon: FaLinux },
    { name: "JavaScript", Icon: SiGithub },
  ],
  Tools: [
    { name: "Docker", Icon: SiDocker },
    { name: "Kubernetes", Icon: SiKubernetes },
    { name: "Helm", Icon: SiHelm },
    { name: "CloudWatch", Icon: SiAmazoncloudwatch },
    { name: "Prometheus", Icon: SiPrometheus },
    { name: "Grafana", Icon: SiGrafana },
  ],
};

const projects = [
  {
    title: "Wikiread Platform (EKS + GitOps)",
    desc: "Multi-layer Django platform with Terraform-provisioned AWS infrastructure, Argo CD deployment flow, and blue/green rollouts.",
    stack: ["Terraform", "EKS", "Argo CD", "RDS", "CodePipeline"],
    repo: "https://github.com/Vanshajsrivastava/Wikiread",
    demo: "https://wikiread-lib.vercel.app/",
  },
  {
    title: "Terraform AWS VPC + EC2",
    desc: "Reusable IaC setup for network and compute provisioning with secure-by-default baselines.",
    stack: ["Terraform", "VPC", "EC2", "IAM", "SSM"],
    repo: "https://github.com/Vanshajsrivastava/Infra-automation-portfolio/tree/main/terraform-vpc-ec2",
  },
  {
    title: "CloudWatch Monitoring + SNS",
    desc: "Proactive monitoring and alerting pipeline to reduce detection and response time.",
    stack: ["CloudWatch", "SNS", "Metrics", "Alarms"],
    repo: "https://github.com/Vanshajsrivastava/Infra-automation-portfolio/tree/main/cloudwatch-monitoring",
  },
  {
    title: "S3 Static Website + CloudFront",
    desc: "Secure static hosting with CDN acceleration and hardened origin access.",
    stack: ["S3", "CloudFront", "OAC"],
    repo: "https://github.com/Vanshajsrivastava/Infra-automation-portfolio/tree/main/s3-static-website",
  },
  {
    title: "Bash Automation Toolkit",
    desc: "Operational scripts for recurring Linux maintenance and deployment tasks.",
    stack: ["Bash", "Cron", "Linux"],
    repo: "https://github.com/Vanshajsrivastava/Infra-automation-portfolio/tree/main/bash-automation",
  },
  {
    title: "NLP Reasoning Engine",
    desc: "Explainable NLP-to-rules pipeline for domain reasoning in medical/family use cases.",
    stack: ["Python", "spaCy", "NetworkX", "OpenAI"],
    repo: "https://github.com/Vanshajsrivastava/nlp-rule-based-reasoning-engine",
  },
];

const architectureFlow = [
  { name: "GitHub", Icon: SiGithub },
  { name: "CI/CD", Icon: FaCodeBranch },
  { name: "Docker", Icon: SiDocker },
  { name: "AWS", Icon: FaAws },
  { name: "Load Balancer", Icon: SiAmazonwebservices },
  { name: "EKS / EC2 Runtime", Icon: SiAmazoneks },
  { name: "RDS", Icon: SiAmazonrds },
];

const sectionIds = ["home", "about", "experience", "skills", "projects", "architecture", "contact"];

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const pos = window.scrollY + 120;
      let current = "home";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      });
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);
  const rise = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.45 },
      };

  return (
    <div className="portfolio-root">
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="brand" href="#home">
            VS
          </a>
          <nav>
            {sectionIds.map((id) => (
              <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""}>
                {id === "home" ? "Top" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <Section id="home">
        <motion.div className="hero" {...rise}>
          <p className="eyebrow">DevOps Portfolio 2025</p>
          <h1>
            Building <span className="gradient-text">reliable cloud platforms</span> with automation-first delivery
          </h1>
          <p className="hero-subtitle">{profile.title}</p>
          <p className="hero-copy">{profile.subtitle}</p>
          <p className="hero-location">{profile.location}</p>

          <div className="badge-row">
            {stackBadges.map(({ label, Icon }, idx) => (
              <motion.span
                key={label}
                className="tech-badge"
                animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                transition={reduceMotion ? undefined : { repeat: Infinity, duration: 2.4, delay: idx * 0.15 }}
              >
                <Icon /> {label}
              </motion.span>
            ))}
          </div>

          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>
        </motion.div>
      </Section>

      <Section id="about" title="About">
        <motion.p className="copy" {...rise}>
          {profile.name} is a DevOps and Cloud Engineer focused on secure infrastructure, deployment quality,
          and operational reliability through IaC, Kubernetes, and observability-driven engineering.
        </motion.p>
      </Section>

      <Section id="experience" title="Experience">
        <div className="timeline">
          {experiences.map((exp) => (
            <motion.article className="timeline-item card" key={`${exp.company}-${exp.role}`} {...rise}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p className="meta">
                  {exp.company} · {exp.location} · {exp.period}
                </p>
                <ul>
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <motion.article className="card skill-card" key={category} {...rise}>
              <h3>{category}</h3>
              <div className="badge-grid">
                {items.map(({ name, Icon }) => (
                  <span className="skill-badge" key={name}>
                    <Icon /> {name}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.article
              className="card project-card"
              key={project.title}
              {...rise}
              whileHover={reduceMotion ? undefined : { y: -6 }}
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tag-row">
                {project.stack.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="link-row">
                <a href={project.repo} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="architecture" title="Architecture">
        <motion.p className="copy" {...rise}>
          Reference deployment path for production delivery.
        </motion.p>
        <div className="arch-flow">
          {architectureFlow.map((node, i) => (
            <motion.div className="arch-node" key={node.name} {...rise}>
              <node.Icon />
              <span>{node.name}</span>
              {i < architectureFlow.length - 1 && <em>→</em>}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <motion.p className="copy" {...rise}>
          Open to DevOps, SRE, Cloud Ops, and Platform Engineering opportunities.
        </motion.p>
        <div className="link-row">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.email}>Email</a>
        </div>
      </Section>

      <footer className="footer">
        <div className="container">© {year} {profile.name}. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;

