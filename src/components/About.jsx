import { FaCheckCircle } from "react-icons/fa";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

const highlights = [
  "Clean, reusable & maintainable code",
  "Pixel-perfect responsive design",
  "Modern React & Next.js architecture",
  "Great attention to performance & detail",
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Turning ideas into polished web experiences"
        />
        <div className="about-grid">
          <div className="about-photo-frame" data-reveal>
            <div className="about-photo">
              <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt={profile.name} />
              <span className="about-photo-badge">
                <span className="badge-dot" /> Open to work
              </span>
            </div>
          </div>

          <div className="card about-card" data-reveal>
            <h3 className="about-card-title">Who I Am</h3>
            <p className="about-text">{profile.about}</p>
            <ul className="about-list">
              {highlights.map((item) => (
                <li key={item}>
                  <FaCheckCircle className="about-check" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card about-info" data-reveal>
            <h3 className="about-card-title">Quick Info</h3>
            <dl className="about-info-list">
              {profile.info.map((item) => (
                <div className="about-info-row" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={`mailto:${profile.contact.email}?subject=Work%20Opportunity`}
              className="btn btn-primary btn-block"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
