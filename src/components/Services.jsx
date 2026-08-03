import { FaGlobe, FaCode, FaShoppingCart } from "react-icons/fa";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

const iconMap = {
  globe: <FaGlobe />,
  code: <FaCode />,
  cart: <FaShoppingCart />,
};

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeader
          eyebrow="What I Offer"
          title="Services built to help your business grow"
          subtitle="From landing pages to full web apps — I deliver quality work your clients will love."
        />
        <div className="services-grid">
          {profile.services.map((service) => (
            <div className="card service-card" data-reveal key={service.title}>
              <div className="service-icon">{iconMap[service.icon]}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <a href="#contact" className="service-link">
                Start a project <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
