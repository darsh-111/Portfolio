import { FaGithub, FaExternalLinkAlt, FaComment, FaShoppingCart } from "react-icons/fa";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const projectIcons = {
  chat: <FaComment />,
  cart: <FaShoppingCart />,
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />
        <div className="projects-grid">
          {profile.projects.map((project, i) => (
            <article className="card project-card" data-reveal key={project.title}>
              <div
                className="project-preview"
                style={{ background: `linear-gradient(135deg, ${project.accent}, #06b6d4)` }}
              >
                {project.image ? (
                  <>
                    <img
                      src={`${import.meta.env.BASE_URL}${project.image}`}
                      alt={`${project.title} screenshot`}
                      className="project-shot"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="project-overlay" />
                  </>
                ) : (
                  <div className="project-mock">
                    {projectIcons[project.icon]}
                  </div>
                )}
                <span className="project-tag">
                  {t.projects.items[i]?.subtitle || project.subtitle}
                </span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{t.projects.items[i]?.desc || project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    {t.projects.live} <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    <FaGithub /> {t.projects.code}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
