import { FaGithub, FaExternalLinkAlt, FaComment, FaShoppingCart } from "react-icons/fa";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

const projectIcons = {
  chat: <FaComment />,
  cart: <FaShoppingCart />,
};

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured projects"
          subtitle="Real projects I've built with React.js and Next.js."
        />
        <div className="projects-grid">
          {profile.projects.map((project) => (
            <article className="card project-card" data-reveal key={project.title}>
              <div
                className="project-preview"
                style={{ background: `linear-gradient(135deg, ${project.accent}, #06b6d4)` }}
              >
                <div className="project-mock">
                  {projectIcons[project.icon]}
                </div>
                <span className="project-tag">{project.subtitle}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
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
                    Live Demo <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    <FaGithub /> Code
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
