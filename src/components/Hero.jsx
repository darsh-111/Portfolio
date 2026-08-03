import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";
import { profile } from "../data/profile.js";
import { useLanguage } from "../context/LanguageContext.jsx";

function useTypewriter(text, typeSpeed = 65, deleteSpeed = 32, holdTime = 1800) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timeout;

    const tick = () => {
      if (!deleting) {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          deleting = true;
          timeout = setTimeout(tick, holdTime);
          return;
        }
        timeout = setTimeout(tick, typeSpeed);
      } else {
        i -= 1;
        setDisplay(text.slice(0, i));
        if (i <= 0) {
          deleting = false;
          timeout = setTimeout(tick, 400);
          return;
        }
        timeout = setTimeout(tick, deleteSpeed);
      }
    };

    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, [text, typeSpeed, deleteSpeed, holdTime]);

  return display;
}

export default function Hero() {
  const { t } = useLanguage();
  const typedRole = useTypewriter(t.hero.role);
  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-avatar" data-reveal>
            <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt={profile.name} fetchpriority="high" decoding="async" />
            <span className="hero-avatar-dot" title={t.hero.availTitle} />
          </div>
          <span className="badge" data-reveal>
            <span className="badge-dot" /> {t.hero.badge}
          </span>
          <h1 className="hero-greeting" data-reveal>
            {t.hero.greeting}
          </h1>
          <h2 className="hero-name" data-reveal>
            {profile.name}
          </h2>
          <div className="hero-role" data-reveal>
            <span className="hero-role-text">{typedRole}</span>
            <span className="hero-cursor">|</span>
          </div>
          <p className="hero-desc" data-reveal>
            {t.hero.tagline}
          </p>
          <div className="hero-actions" data-reveal>
            <a href="#projects" className="btn btn-primary">
              {t.hero.viewWork} <FaArrowRight />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${profile.cvUrl}`}
              className="btn btn-outline"
              download
            >
              {t.hero.downloadCv}
            </a>
            <a href="#contact" className="btn btn-outline">
              {t.hero.contact}
            </a>
          </div>
          <div className="hero-socials" data-reveal>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a href={`mailto:${profile.contact.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="code-card">
            <div className="code-card-head">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="code-card-title">developer.js</span>
            </div>
            <pre className="code-card-body">
              <code>
                <span className="c-key">const</span>{" "}
                <span className="c-var">developer</span>{" "}
                <span className="c-op">=</span> {"{"}
                {"\n"}  name: <span className="c-str">"Youssef"</span>,
                {"\n"}  role: <span className="c-str">"Front-End Developer"</span>,
                {"\n"}  stack: [<span className="c-str">"React"</span>,{" "}
                <span className="c-str">"Next.js"</span>],
                {"\n"}  hireable: <span className="c-bool">true</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
          <div className="float-chip float-chip-1">⚛ React</div>
          <div className="float-chip float-chip-2">▲ Next.js</div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span className="mouse">
          <span className="wheel" />
        </span>
      </a>
    </section>
  );
}
