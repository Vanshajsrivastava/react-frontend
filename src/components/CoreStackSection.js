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
  SiLinux,
  SiPrometheus,
  SiTerraform,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
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
  linux: { Icon: SiLinux, color: "#f7c61d" },
};

function CoreStackSection({ id = "core-stack", title = "Core Stack", technologies = [] }) {
  const visibleTechnologies = technologies.filter((technology) => iconRegistry[technology.iconKey]);
  const marqueeTechnologies = [...visibleTechnologies, ...visibleTechnologies];

  return (
    <div id={id} className="core-stack-band reveal" role="region" aria-label={title}>
      <div className="core-stack-band-head">
        <span>{title}</span>
      </div>

      <div className="core-stack-marquee" aria-live="off">
        <div className="core-stack-track">
          {marqueeTechnologies.map((technology, index) => {
            const { Icon, color } = iconRegistry[technology.iconKey];

            return (
              <div
                key={`${technology.iconKey}-${technology.label}-${index}`}
                className="core-stack-pill"
                style={{ "--brand-color": color }}
                aria-label={technology.label}
              >
                <span className="core-stack-pill-icon" aria-hidden="true">
                  <Icon className="core-stack-icon" />
                </span>
                <span className="core-stack-pill-label">{technology.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CoreStackSection;
