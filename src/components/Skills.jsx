import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaMobileAlt,
  FaCode,
} from "react-icons/fa";
import { SiNextdotjs, SiPostman } from "react-icons/si";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const iconMap = {
  html: <FaHtml5 className="skill-icon skill-html" />,
  css: <FaCss3Alt className="skill-icon skill-css" />,
  js: <FaJs className="skill-icon skill-js" />,
  react: <FaReact className="skill-icon skill-react" />,
  next: <SiNextdotjs className="skill-icon skill-next" />,
  responsive: <FaMobileAlt className="skill-icon skill-resp" />,
  git: <FaGitAlt className="skill-icon skill-git" />,
  api: <SiPostman className="skill-icon skill-api" />,
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeader
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />
        <div className="skills-grid">
          {profile.skills.map((skill) => (
            <div className="card skill-card" data-reveal key={skill.icon}>
              <div className="skill-card-top">
                {iconMap[skill.icon] || <FaCode className="skill-icon" />}
                <h3 className="skill-name">{t.skills.names[skill.icon] || skill.name}</h3>
              </div>
              <div className="skill-bar">
                <span
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
