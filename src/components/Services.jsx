import { FaGlobe, FaCode, FaShoppingCart } from "react-icons/fa";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const iconMap = {
  globe: <FaGlobe />,
  code: <FaCode />,
  cart: <FaShoppingCart />,
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />
        <div className="services-grid">
          {profile.services.map((service, i) => (
            <div className="card service-card" data-reveal key={i}>
              <div className="service-icon">{iconMap[service.icon]}</div>
              <h3 className="service-title">{t.services.list[i]?.title || service.title}</h3>
              <p className="service-desc">{t.services.list[i]?.desc || service.description}</p>
              <a href="#contact" className="service-link">
                {t.services.start} <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
