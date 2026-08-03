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
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeader
          eyebrow="My Skills"
          title="Technologies I work with"
          subtitle="The tools I use every day to build fast, modern and responsive interfaces."
        />
        <div className="skills-grid">
          {profile.skills.map((skill) => (
            <div className="card skill-card" data-reveal key={skill.name}>
              <div className="skill-card-top">
                {iconMap[skill.icon] || <FaCode className="skill-icon" />}
                <h3 className="skill-name">{skill.name}</h3>
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
