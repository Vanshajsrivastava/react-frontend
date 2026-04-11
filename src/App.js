import { useEffect, useMemo, useState } from "react";
import "./App.css";
import CoreStackSection from "./components/CoreStackSection";
import coreStackTechnologies from "./data/coreStackTechnologies";
import {
  SiAmazoncloudwatch,
  SiAmazondynamodb,
  SiAmazoneks,
  SiAmazoniam,
  SiAmazonrds,
  SiAmazonroute53,
  SiAmazons3,
  SiArgo,
  SiDocker,
  SiGithub,
  SiHelm,
  SiKubernetes,
  SiLinux,
  SiPostgresql,
  SiTerraform,
  SiPython,
  SiJavascript,
  SiRuby,
  SiDjango,
  SiJenkins,
  SiGithubactions,
  SiGrafana,
  SiGooglecloud,
  SiPrometheus,
  SiOpenai,
  SiSpacy,
} from "react-icons/si";
import { LuWorkflow } from "react-icons/lu";
import { FiArrowRight, FiCloud, FiSearch } from "react-icons/fi";
import { FaAws, FaCodeBranch, FaShieldAlt, FaNetworkWired, FaKey, FaBell, FaCogs } from "react-icons/fa";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

const profile = {
  name: "Vanshaj Srivastava",
  role: "DevOps, Automation, Cloud Platform & Operations Engineer",
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
  "Cloud Platform Engineering",
  "Cloud Operations Engineering",
  "Site Reliability Engineering",
  "Linux Administration",
];

const heroTech = ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "Linux"];

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
    period: "Nov 2022 - Nov 2023",
    highlights: [
      "Led full-lifecycle implementation of Oracle Fusion HCM across Core HR, Payroll, and Talent modules for enterprise users in India and the UAE.",
      "Automated SaaS configuration and data migration workflows using HDL scripting, reducing deployment errors across cloud-hosted Oracle Fusion HCM environments.",
      "Managed sandbox and staging environments for iterative testing, applying environment lifecycle practices aligned with DevOps principles.",
      "Authored process documentation and training materials to improve knowledge transfer and onboarding efficiency.",
      "Collaborated within Agile delivery frameworks to iterate rapidly on cloud SaaS configurations and ensure continuous delivery of platform features.",
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
    items: ["AWS (EC2, VPC, IAM, S3, CloudWatch, SNS)", "Azure", "Google Cloud Platform (GCP)"],
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
  {
    title: "Web Apps & Security",
    items: [
      "Django",
      "Role-Based Access Control (RBAC)",
      "Authentication & Authorization",
      "CRUD Workflows",
      "Markdown Content Management",
      "Vercel Deployment",
    ],
  },
];

const certifications = [
  {
    title: "Python Course Certification",
    issuer: "Udemy",
    status: "Completed",
    link: "https://www.udemy.com/certificate/UC-fa8b1aa9-61a9-4a21-8aa2-1160d0883388/",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Ongoing Progress",
    link: "",
  },
];

const projects = [
  {
    title: "WikiRead AWS Platform & GitOps Delivery",
    problem:
      "Provision and operate the AWS platform for WikiRead with repeatable Terraform workflows, GitOps-based Kubernetes delivery, and safer rollout orchestration.",
    stack: [
      "Terraform",
      "AWS VPC",
      "Amazon EKS",
      "RDS PostgreSQL",
      "CodePipeline",
      "CodeBuild",
      "Argo CD",
      "Argo Rollouts",
      "Helm",
      "Secrets Manager",
      "CloudWatch",
    ],
    impact:
      "Built a production-oriented delivery platform with private networking, approval-governed infrastructure changes, automated image promotion, and blue/green application releases on EKS.",
    infrastructurePreset: "wikiread",
    repo: "https://github.com/Vanshajsrivastava/Wikiread",
    demo: "https://wikiread-lib.vercel.app/",
  },
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
    problem:
      "Convert unstructured clinical and family-domain text into explainable, rule-backed inferences through an end-to-end NLP and graph-reasoning pipeline.",
    stack: ["Python", "spaCy", "medSpaCy", "NetworkX", "Groove", "GPT-3.5"],
    impact:
      "Built an end-to-end XAI workflow that extracts entities and relationships, transforms them into graph structures, applies rule-based reasoning, and returns human-readable explanations for downstream analysis.",
    repo: "https://github.com/Vanshajsrivastava/nlp-rule-based-reasoning-engine",
  },
];

const architectureBlocks = [
  {
    title: "Global Ingress Flow",
    items: [
      { name: "Route 53", Icon: SiAmazonroute53, note: "DNS routing", color: "#8b5cf6" },
      { name: "AWS WAF", Icon: FaShieldAlt, note: "L7 filtering", color: "#ef4444" },
      { name: "NLB (wikiread-active)", Icon: FaNetworkWired, note: "Public entrypoint", color: "#ea580c" },
    ],
  },
  {
    title: "Primary Region VPC (Multi-AZ)",
    items: [
      { name: "Amazon EKS", Icon: SiAmazoneks, note: "Managed control plane", color: "#f59e0b" },
      { name: "Kubernetes Pods", Icon: SiKubernetes, note: "Django app runtime", color: "#326ce5" },
      { name: "RDS PostgreSQL", Icon: SiAmazonrds, note: "Private database tier", color: "#ca8a04" },
      { name: "PostgreSQL Engine", Icon: SiPostgresql, note: "Relational data store", color: "#336791" },
      { name: "IAM Roles", Icon: SiAmazoniam, note: "Access control", color: "#f97316" },
      { name: "Secrets Manager", Icon: FaKey, note: "App secrets delivery", color: "#10b981" },
    ],
  },
  {
    title: "Integrated DevOps Pipeline",
    items: [
      { name: "GitHub", Icon: SiGithub, note: "Source of truth", color: "#111827" },
      { name: "CodePipeline", Icon: FaCodeBranch, note: "Release orchestration", color: "#16a34a" },
      { name: "CodeBuild", Icon: FaCogs, note: "Build/deploy jobs", color: "#0ea5e9" },
      { name: "Amazon ECR", Icon: SiDocker, note: "Container image registry", color: "#0ea5e9" },
      { name: "Terraform", Icon: SiTerraform, note: "Infrastructure as code", color: "#7c3aed" },
      { name: "Argo CD + Rollouts", Icon: SiArgo, note: "GitOps and blue/green", color: "#f97316" },
      { name: "Helm", Icon: SiHelm, note: "Cluster package manager", color: "#0f766e" },
      { name: "S3 + DynamoDB", Icon: SiAmazondynamodb, note: "Terraform state + lock", color: "#ca8a04" },
      { name: "S3 Plan Artifacts", Icon: SiAmazons3, note: "Plan review storage", color: "#ea580c" },
    ],
  },
  {
    title: "Observability & Scaling",
    items: [
      { name: "CloudWatch", Icon: SiAmazoncloudwatch, note: "Logs and metrics", color: "#f59e0b" },
      { name: "metrics-server", Icon: SiKubernetes, note: "K8s resource metrics", color: "#2563eb" },
      { name: "HPA", Icon: SiKubernetes, note: "Horizontal autoscaling", color: "#22c55e" },
      { name: "SNS Approval Alerts", Icon: FaBell, note: "Plan notifications", color: "#eab308" },
    ],
  },
];

function getSkillIcon(item) {
  const key = item.toLowerCase();

  if (key.includes("aws")) return FaAws;
  if (key.includes("azure")) return FiCloud;
  if (key.includes("gcp") || key.includes("google cloud")) return SiGooglecloud;
  if (key.includes("terraform")) return SiTerraform;
  if (key.includes("cloudformation")) return LuWorkflow;
  if (key.includes("ci/cd") || key.includes("ci cd")) return LuWorkflow;
  if (key.includes("github actions")) return SiGithubactions;
  if (key.includes("jenkins")) return SiJenkins;
  if (key.includes("codepipeline")) return FaCodeBranch;
  if (key.includes("codedeploy")) return FaCogs;
  if (key.includes("docker")) return SiDocker;
  if (key.includes("eks") || key.includes("kubernetes")) return SiKubernetes;
  if (key.includes("argocd")) return SiArgo;
  if (key.includes("helm")) return SiHelm;
  if (key.includes("cloudwatch")) return SiAmazoncloudwatch;
  if (key.includes("prometheus")) return SiPrometheus;
  if (key.includes("grafana")) return SiGrafana;
  if (key.includes("python")) return SiPython;
  if (key.includes("javascript")) return SiJavascript;
  if (key.includes("ruby")) return SiRuby;
  if (key.includes("linux") || key.includes("bash")) return SiLinux;
  if (key.includes("django")) return SiDjango;
  if (key.includes("rbac") || key.includes("authentication") || key.includes("authorization")) return MdSecurity;
  if (key.includes("spa")) return SiSpacy;
  if (key.includes("networkx") || key.includes("groove") || key.includes("dependency parsing")) return TbTopologyStarRing3;
  if (key.includes("openai") || key.includes("gpt")) return SiOpenai;
  return FaCodeBranch;
}

function getSkillColor(item) {
  const key = item.toLowerCase();

  if (key.includes("aws")) return "#ff9900";
  if (key.includes("azure")) return "#0078d4";
  if (key.includes("gcp") || key.includes("google cloud")) return "#4285f4";
  if (key.includes("terraform")) return "#7b42bc";
  if (key.includes("cloudformation")) return "#f59e0b";
  if (key.includes("ci/cd") || key.includes("ci cd")) return "#22c55e";
  if (key.includes("github actions")) return "#2088ff";
  if (key.includes("github")) return "#111827";
  if (key.includes("jenkins")) return "#d24939";
  if (key.includes("codepipeline")) return "#16a34a";
  if (key.includes("codedeploy")) return "#0284c7";
  if (key.includes("docker")) return "#2496ed";
  if (key.includes("eks") || key.includes("kubernetes")) return "#326ce5";
  if (key.includes("argocd")) return "#1f6feb";
  if (key.includes("helm")) return "#0f766e";
  if (key.includes("cloudwatch")) return "#f59e0b";
  if (key.includes("prometheus")) return "#e6522c";
  if (key.includes("grafana")) return "#f46800";
  if (key.includes("loki")) return "#f2cc0c";
  if (key.includes("promtail")) return "#22c55e";
  if (key.includes("python")) return "#3776ab";
  if (key.includes("javascript")) return "#f7df1e";
  if (key.includes("ruby")) return "#cc342d";
  if (key.includes("linux") || key.includes("bash")) return "#f7c61d";
  if (key.includes("django")) return "#092e20";
  if (key.includes("rbac") || key.includes("authentication") || key.includes("authorization")) return "#ef4444";
  if (key.includes("openai") || key.includes("gpt")) return "#10a37f";
  return "#64748b";
}

const infraFlow = [
  "GitHub",
  "CodePipeline",
  "CodeBuild",
  "Amazon ECR",
  "Argo CD",
  "Amazon EKS",
];

const cloudInfraKeywords = [
  "aws",
  "terraform",
  "cloud",
  "kubernetes",
  "eks",
  "docker",
  "argocd",
  "helm",
  "sns",
  "s3",
  "vpc",
  "ec2",
  "iam",
  "cloudwatch",
];

const navLinks = [
  { id: "about", label: "About" },
  { id: "core-stack", label: "Core Stack" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const infraHighlights = [
  {
    title: "Runtime Architecture",
    points: [
      "Public ingress via internet-facing NLB service (`wikiread-active`).",
      "Django workloads run on EKS node groups in private app subnets.",
      "RDS PostgreSQL remains private in dedicated DB subnets.",
      "Secrets are sourced from AWS Secrets Manager and injected into Kubernetes.",
    ],
  },
  {
    title: "Infrastructure Delivery",
    points: [
      "Source -> Terraform Plan -> SNS notification -> Manual Approval -> Apply.",
      "Plan outputs stored in S3 for review and change auditability.",
      "Terraform state stored in S3 with DynamoDB state locking.",
      "Pipeline variables are injected via TF_VAR-based controls.",
    ],
  },
  {
    title: "GitOps Application Delivery",
    points: [
      "CodeBuild builds/pushes container image into Amazon ECR.",
      "Deploy stage updates Argo CD Application image reference.",
      "Argo CD syncs desired state from Git to EKS automatically.",
      "Argo Rollouts provides blue/green promotion via active/preview services.",
    ],
  },
  {
    title: "Reliability & Operations",
    points: [
      "Horizontal scaling enabled through HPA with metrics-server.",
      "CloudWatch observability addon provides runtime telemetry.",
      "Manual infra approval reduces unsafe production drift.",
      "Modular Terraform improves repeatability and maintainability.",
    ],
  },
];

function getCertificationVisual(cert) {
  const normalized = `${cert.title} ${cert.issuer}`.toLowerCase();
  if (normalized.includes("python")) {
    return {
      icons: [SiPython, FaCogs, LuWorkflow],
      tags: ["Python", "OOP", "Jupyter", "Projects"],
    };
  }
  if (normalized.includes("aws")) {
    return {
      icons: [FaAws, SiAmazons3, SiAmazoneks],
      tags: ["AWS", "Cloud", "Foundational"],
    };
  }
  return {
    icons: [LuWorkflow, SiTerraform, SiJenkins],
    tags: ["DevOps", "Automation", "CI/CD"],
  };
}

function parseRepoOwnerAndName(repoUrl) {
  try {
    const url = new URL(repoUrl);
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.length < 2) return null;
    return { owner: parts[0], repo: parts[1] };
  } catch {
    return null;
  }
}

function getRepoThumbnailUrl(repoUrl) {
  const parsed = parseRepoOwnerAndName(repoUrl);
  if (!parsed) return "";
  return `https://opengraph.githubassets.com/1/${parsed.owner}/${parsed.repo}`;
}

function getProjectStats(stack) {
  const stats = [];
  const lower = stack.join(" ").toLowerCase();
  if (lower.includes("terraform") || lower.includes("cloudformation")) stats.push("IaC");
  if (lower.includes("eks") || lower.includes("kubernetes") || lower.includes("docker")) stats.push("K8s");
  if (lower.includes("aws") || lower.includes("cloud")) stats.push("Cloud");
  if (lower.includes("argocd") || lower.includes("helm") || lower.includes("codepipeline")) stats.push("GitOps");
  if (lower.includes("jenkins") || lower.includes("actions") || lower.includes("codebuild")) stats.push("CI/CD");
  return stats.slice(0, 5);
}

function getProjectSnippet(stack) {
  const lower = stack.join(" ").toLowerCase();
  if (lower.includes("terraform")) return "terraform apply -auto-approve";
  if (lower.includes("kubernetes") || lower.includes("eks")) return "kubectl rollout status deploy/app";
  if (lower.includes("docker")) return "docker build -t app:latest .";
  if (lower.includes("cloudwatch")) return "aws cloudwatch put-metric-alarm ...";
  return "git push origin main";
}

function hasInfrastructureView(project) {
  const joined = project.stack.join(" ").toLowerCase();
  return Boolean(project.infrastructurePreset) || cloudInfraKeywords.some((keyword) => joined.includes(keyword));
}

function getProjectInfrastructure(project) {
  if (!project) return null;

  if (project.infrastructurePreset === "wikiread") {
    return {
      mode: "wikiread",
      title: "WikiRead Infrastructure",
      intro:
        "Production-grade multi-layer architecture for WikiRead on AWS.\nBuilt with Terraform, EKS, GitOps, approval-governed CI/CD, and observability-first operations.",
      flow: infraFlow,
      highlights: infraHighlights,
      blocks: architectureBlocks,
    };
  }

  const flow = ["GitHub", "CI/CD", "Terraform", "AWS Services"];
  const services = project.stack.slice(0, 8).map((name) => ({
    name,
    Icon: getSkillIcon(name),
    note: "Core project component",
    color: getSkillColor(name),
  }));

  const blocks = [
    {
      title: "Core Architecture",
      points: [
        `Stack: ${project.stack.join(", ")}`,
        project.problem,
        project.impact,
      ],
    },
    {
      title: "Delivery Model",
      points: [
        "Source-controlled infrastructure and code workflows.",
        "Automated build/deploy path aligned with project stack.",
        "Operational visibility and repeatable release behavior.",
      ],
    },
  ];

  return {
    mode: "generic",
    title: `${project.title} Infrastructure`,
    intro: "Infrastructure and delivery architecture view for this cloud project.",
    flow,
    blocks,
    services,
  };
}

function highlightExperienceText(text) {
  const pattern =
    /(\b\d+\+?\b|\b\d+%\b|CI\/CD pipelines?|AWS services?|AWS|EC2|VPC|IAM|Auto Scaling|Jenkins|GitHub Actions|CloudWatch|Grafana|Loki|Terraform|CloudFormation|ArgoCD|Kubernetes|EKS|PyTest|Robot Framework|microservices?)/gi;
  const parts = text.split(pattern);

  return parts.map((part, idx) => {
    if (!part) return null;
    if (part.match(/^\d+\+?$|^\d+%$/i)) {
      return (
        <span key={`${part}-${idx}`} className="metric-highlight-number">
          {part}
        </span>
      );
    }
    if (part.match(pattern)) {
      return (
        <span key={`${part}-${idx}`} className="metric-highlight-tech">
          {part}
        </span>
      );
    }
    return <span key={`${part}-${idx}`}>{part}</span>;
  });
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [selectedInfraProject, setSelectedInfraProject] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [skillQuery, setSkillQuery] = useState("");
  const [openSkills, setOpenSkills] = useState(() =>
    Object.fromEntries(skillGroups.map((group) => [group.title, false]))
  );

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    const revealVisibleElements = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= viewportHeight * 0.94 && rect.bottom >= 0) {
          element.classList.add("is-visible");
        }
      });
    };

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    revealVisibleElements();

    const syncRevealState = () => window.requestAnimationFrame(revealVisibleElements);
    const timeoutId = window.setTimeout(revealVisibleElements, 250);

    window.addEventListener("hashchange", syncRevealState);
    window.addEventListener("resize", syncRevealState);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", syncRevealState);
      window.removeEventListener("resize", syncRevealState);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);
  const filteredSkillGroups = useMemo(() => {
    const query = skillQuery.trim().toLowerCase();

    if (!query) return skillGroups;

    return skillGroups
      .map((group) => {
        const groupMatches = group.title.toLowerCase().includes(query);
        const items = groupMatches
          ? group.items
          : group.items.filter((item) => item.toLowerCase().includes(query));

        return {
          ...group,
          items,
        };
      })
      .filter((group) => group.items.length > 0);
  }, [skillQuery]);

  const skillColumns = useMemo(() => {
    const cols = [[], []];
    filteredSkillGroups.forEach((group, index) => {
      cols[index % 2].push(group);
    });
    return cols;
  }, [filteredSkillGroups]);
  const infraConfig = useMemo(
    () => getProjectInfrastructure(selectedInfraProject),
    [selectedInfraProject]
  );

  return (
    <div className="app-shell">
      <header className={`topbar ${isScrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home">
          VS
        </a>

        <nav aria-label="Primary">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
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

              <div className="hero-tech-row" aria-label="Key technologies">
                {heroTech.map((item) => {
                  const Icon = getSkillIcon(item);
                  return (
                    <span className="hero-tech-badge" key={item}>
                      <Icon className="hero-tech-icon" style={{ color: getSkillColor(item) }} aria-hidden="true" />
                      <span>{item}</span>
                    </span>
                  );
                })}
              </div>

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
              <div className="hero-photo-frame">
                <img
                  className="hero-photo"
                  src="/profile-photo.jpg?v=20260411"
                  alt="Vanshaj Srivastava"
                  loading="lazy"
                  decoding="async"
                  width="720"
                  height="720"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/profile-placeholder.svg";
                  }}
                />
              </div>
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

        <CoreStackSection technologies={coreStackTechnologies} />

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
                    <li key={point}>{highlightExperienceText(point)}</li>
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
          <div className="skills-toolbar">
            <label className="skills-search" htmlFor="skills-search">
              <FiSearch className="skills-search-icon" aria-hidden="true" />
              <input
                id="skills-search"
                type="search"
                value={skillQuery}
                onChange={(e) => setSkillQuery(e.target.value)}
                placeholder="Search skills, platforms, tools..."
                aria-label="Search skills"
              />
            </label>
          </div>
          <div className="skills-columns">
            {skillColumns.map((column, colIndex) => (
              <div className="skills-column" key={`skills-col-${colIndex}`}>
                {column.map((group) => (
                  <article className="skill-card skill-dropdown" key={group.title}>
                    <button
                      type="button"
                      className="skill-summary"
                      aria-expanded={skillQuery.trim().length > 0 || openSkills[group.title]}
                      onClick={() =>
                        setOpenSkills((prev) => ({
                          ...prev,
                          [group.title]: !prev[group.title],
                        }))
                      }
                    >
                      <h3>{group.title}</h3>
                      <IoChevronDown className="skill-chevron" aria-hidden="true" />
                    </button>
                    <ul className={`skill-list ${skillQuery.trim().length > 0 || openSkills[group.title] ? "open" : ""}`}>
                      {group.items.map((item) => (
                        <li key={item} className="skill-item">
                          {(() => {
                            const Icon = getSkillIcon(item);
                            return (
                              <Icon
                                className="skill-item-icon"
                                style={{ color: getSkillColor(item) }}
                                aria-hidden="true"
                              />
                            );
                          })()}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            ))}
          </div>
          {!filteredSkillGroups.length ? (
            <p className="skills-empty">No matching skills found. Try AWS, Terraform, Kubernetes, or GCP.</p>
          ) : null}
        </section>

        <section id="projects" className="section island reveal">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-thumb-wrap">
                  <img
                    className="project-thumb"
                    src={getRepoThumbnailUrl(project.repo)}
                    alt={`${project.title} repository thumbnail`}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="project-thumb-fallback" aria-hidden="true">
                    <span>{project.title}</span>
                  </div>
                </div>
                <div className="project-icon-strip" aria-label={`${project.title} service icons`}>
                  {project.stack.slice(0, 5).map((tech) => {
                    const Icon = getSkillIcon(tech);
                    return (
                      <span className="project-icon-chip" key={`${project.title}-icon-${tech}`}>
                        <Icon style={{ color: getSkillColor(tech) }} aria-hidden="true" />
                        <span>{tech}</span>
                      </span>
                    );
                  })}
                </div>
                <div className="project-stat-row" aria-label={`${project.title} quick stats`}>
                  {getProjectStats(project.stack).map((tag) => (
                    <span className="project-stat-chip" key={`${project.title}-stat-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <pre className="project-snippet" aria-label={`${project.title} example command`}>
                  <code>{getProjectSnippet(project.stack)}</code>
                </pre>
                <h3>{project.title}</h3>
                <p>{project.problem}</p>
                <p>
                  <strong>Stack:</strong> {project.stack.join(", ")}
                </p>
                <div className="project-stack-tags" aria-label={`${project.title} technologies`}>
                  {project.stack.map((tech) => (
                    <span className="project-stack-tag" key={`${project.title}-${tech}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <p>
                  <strong>Impact:</strong> {project.impact}
                </p>
                <div className="project-links">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    View Repository
                  </a>
                  {hasInfrastructureView(project) ? (
                    <button
                      type="button"
                      className="infra-open-btn"
                      onClick={() => setSelectedInfraProject(project)}
                    >
                      View Infrastructure
                    </button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section island reveal">
          <h2>Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert) => {
              const visual = getCertificationVisual(cert);
              const isAwsCert = cert.issuer === "Amazon Web Services";
              const isPythonCert = /python/i.test(cert.title);
              return (
              <article className="cert-card" key={cert.title}>
                <div
                  className={`cert-placeholder ${isAwsCert ? "cert-placeholder-aws" : ""} ${isPythonCert ? "cert-placeholder-python" : ""}`}
                  aria-hidden="true"
                >
                  <div className="cert-placeholder-icons">
                    {visual.icons.map((Icon, idx) => (
                      <span className="cert-icon-chip" key={`${cert.title}-icon-${idx}`}>
                        <Icon />
                      </span>
                    ))}
                  </div>
                  <div className="cert-placeholder-main">
                    <span className="cert-placeholder-label">{cert.issuer}</span>
                    <strong>{cert.title}</strong>
                  </div>
                  <div className="cert-placeholder-tags">
                    {visual.tags.map((tag) => (
                      <span className="cert-tag" key={`${cert.title}-${tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <p>{cert.status}</p>
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noreferrer">
                    View Certificate
                  </a>
                ) : (
                  <span className="cert-ongoing">In Progress</span>
                )}
              </article>
            );
            })}
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

      {infraConfig && (
        <div className="infra-modal-overlay" onClick={() => setSelectedInfraProject(null)}>
          <section
            id="wikiread-infra"
            className="infra-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="infra-modal-head">
              <h2>{infraConfig.title}</h2>
              <button
                type="button"
                className="infra-close-btn"
                onClick={() => setSelectedInfraProject(null)}
                aria-label="Close infrastructure view"
              >
                ✕
              </button>
            </div>

            <p className="infra-intro">
              {infraConfig.intro}
            </p>

            <div className="infra-flow-strip">
              {infraConfig.flow.map((step, idx) => (
                <div className="infra-flow-node" key={step}>
                  <span>{step}</span>
                  {idx < infraConfig.flow.length - 1 && <FiArrowRight className="infra-flow-arrow" aria-hidden="true" />}
                </div>
              ))}
            </div>

            <div className="infra-summary-grid">
              {infraConfig.highlights ? infraConfig.highlights.map((block) => (
                <article className="infra-summary-card" key={block.title}>
                  <h3>{block.title}</h3>
                  <ul>
                    {block.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              )) : infraConfig.blocks.map((block) => (
                <article className="infra-summary-card" key={block.title}>
                  <h3>{block.title}</h3>
                  <ul>
                    {block.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="infra-architecture-grid">
              {infraConfig.blocks && infraConfig.mode === "wikiread" ? infraConfig.blocks.map((block) => (
                <article className="infra-architecture-block" key={block.title}>
                  <h3>{block.title}</h3>
                  <div className="service-list">
                    {block.items.map((item) => (
                      <div className="service-item" key={item.name}>
                        <span className="service-icon-wrap">
                          <item.Icon className="service-icon" style={{ color: item.color }} aria-hidden="true" />
                        </span>
                        <div>
                          <p className="service-name">{item.name}</p>
                          <p className="service-note">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              )) : (
                <article className="infra-architecture-block">
                  <h3>Service Components</h3>
                  <div className="service-list">
                    {infraConfig.services?.map((item) => (
                      <div className="service-item" key={item.name}>
                        <span className="service-icon-wrap">
                          <item.Icon className="service-icon" style={{ color: item.color }} aria-hidden="true" />
                        </span>
                        <div>
                          <p className="service-name">{item.name}</p>
                          <p className="service-note">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              )}
            </div>
          </section>
        </div>
      )}

      <footer>
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
