import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <header className="navbar">
      <nav className="nav-container">
        <a
          href="#home"
          className="logo"
          aria-label="Home"
          onClick={() => setOpen(false)}
        >
          YD<span className="logo-dot">.</span>
        </a>

        <ul className={open ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-mobile-cta">
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              onClick={() => setOpen(false)}
            >
              {t.nav.hireMe}
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            {lang === "en" ? "ع" : "EN"}
          </button>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <a href="#contact" className="btn btn-primary btn-sm nav-hire">
            {t.nav.hireMe}
          </a>
          <button
            className="hamburger"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}
