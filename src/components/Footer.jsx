import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <a href="#home" className="logo">
            YD<span className="logo-dot">.</span>
          </a>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
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
            © {new Date().getFullYear()} {profile.name}. Built with React &
            lots of <span className="heart">♥</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
