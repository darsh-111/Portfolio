import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { profile } from "../data/profile.js";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <a href="#home" className="logo">
            YD<span className="logo-dot">.</span>
          </a>
          <ul className="footer-links">
            <li><a href="#about">{t.footer.about}</a></li>
            <li><a href="#skills">{t.footer.skills}</a></li>
            <li><a href="#projects">{t.footer.projects}</a></li>
            <li><a href="#contact">{t.footer.contact}</a></li>
          </ul>
          <div className="footer-socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#home" className="back-top" aria-label="Back to top">
              <FaArrowUp />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {profile.name}. {t.footer.builtWith}{" "}
            <span className="heart">♥</span>. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
