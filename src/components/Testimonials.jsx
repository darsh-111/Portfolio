import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SectionHeader from "./SectionHeader.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t.testimonials.items;

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <SectionHeader
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />
        <div className="testimonials-grid">
          {items.map((item, i) => (
            <div className="card testimonial-card" data-reveal key={item.name}>
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{item.name.charAt(0)}</div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
              <FaQuoteLeft className="testimonial-quote" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
