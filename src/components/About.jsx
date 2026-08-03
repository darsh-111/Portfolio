import { FaCheckCircle } from "react-icons/fa";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} />
        <div className="about-grid">
          <div className="about-photo-frame" data-reveal>
            <div className="about-photo">
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt={profile.name}
                loading="lazy"
                decoding="async"
              />
              <span className="about-photo-badge">
                <span className="badge-dot" /> {t.about.availability}
              </span>
            </div>
          </div>

          <div className="card about-card" data-reveal>
            <h3 className="about-card-title">{t.about.who}</h3>
            <p className="about-text">{t.about.text}</p>
            <ul className="about-list">
              {t.about.highlights.map((item) => (
                <li key={item}>
                  <FaCheckCircle className="about-check" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card about-info" data-reveal>
            <h3 className="about-card-title">{t.about.quickInfo}</h3>
            <dl className="about-info-list">
              {profile.info.map((item) => (
                <div className="about-info-row" key={item.label}>
                  <dt>{t.about.infoLabels[item.label.toLowerCase()] || item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="about-actions">
              <a
                href={`mailto:${profile.contact.email}?subject=Work%20Opportunity`}
                className="btn btn-primary"
              >
                {t.about.workTogether}
              </a>
              <a
                href={`${import.meta.env.BASE_URL}${profile.cvUrl}`}
                className="btn btn-outline"
                download
              >
                {t.about.downloadCv}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
