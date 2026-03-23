import "./CoreStackSection.css";
import {
  SiArgo,
  SiDocker,
  SiGithubactions,
  SiGooglecloud,
  SiGrafana,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiPrometheus,
  SiTerraform,
} from "react-icons/si";
import { FaAws, FaLinux } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const iconRegistry = {
  aws: { Icon: FaAws, color: "#ff9900" },
  azure: { Icon: VscAzure, color: "#0078d4" },
  gcp: { Icon: SiGooglecloud, color: "#4285f4" },
  terraform: { Icon: SiTerraform, color: "#7b42bc" },
  kubernetes: { Icon: SiKubernetes, color: "#326ce5" },
  docker: { Icon: SiDocker, color: "#2496ed" },
  jenkins: { Icon: SiJenkins, color: "#d24939" },
  "github-actions": { Icon: SiGithubactions, color: "#2088ff" },
  argocd: { Icon: SiArgo, color: "#ef7b4d" },
  helm: { Icon: SiHelm, color: "#0f1689" },
  prometheus: { Icon: SiPrometheus, color: "#e6522c" },
  grafana: { Icon: SiGrafana, color: "#f46800" },
  linux: { Icon: FaLinux, color: "#f7c61d" },
};

function CoreStackSection({
  id = "core-stack",
  title = "Core Stack",
  description = "Platforms and tools I use to design, automate, deploy, and operate modern cloud workloads.",
  technologies = [],
}) {
  const visibleTechnologies = technologies.filter((technology) => iconRegistry[technology.iconKey]);

  return (
    <section id={id} className="section island reveal core-stack-section" aria-labelledby={`${id}-title`}>
      <div className="core-stack-surface">
        <div className="core-stack-header">
          <p className="core-stack-eyebrow">Core Stack</p>
          <h2 id={`${id}-title`}>{title}</h2>
          <p>{description}</p>
        </div>

        <ul className="core-stack-grid" aria-label="Primary technology stack">
          {visibleTechnologies.map((technology, index) => {
            const { Icon, color } = iconRegistry[technology.iconKey];

            return (
              <li
                key={`${technology.iconKey}-${technology.label}`}
                className="core-stack-item"
                style={{
                  "--brand-color": color,
                  "--stack-delay": `${index * 65}ms`,
                  "--float-duration": `${4.6 + (index % 4) * 0.35}s`,
                  "--float-delay": `${(index % 5) * 0.24}s`,
                }}
              >
                <div className="core-stack-card" aria-label={technology.label}>
                  <span className="core-stack-icon-shell" aria-hidden="true">
                    <Icon className="core-stack-icon" />
                  </span>
                  <span className="core-stack-label">{technology.label}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default CoreStackSection;
