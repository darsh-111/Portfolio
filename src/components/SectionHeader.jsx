export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="section-head" data-reveal>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
