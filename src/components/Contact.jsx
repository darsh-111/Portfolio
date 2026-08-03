import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "sending" | "sent" | "error" | "email"

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = profile.contact.formEndpoint;

    if (!endpoint) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
      setStatus("email");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio inquiry from ${form.name}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeader
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="contact-grid">
          <div className="contact-info" data-reveal>
            <a
              className="contact-card"
              href={`mailto:${profile.contact.email}`}
            >
              <span className="contact-icon">
                <FaEnvelope />
              </span>
              <div>
                <h4>{t.contact.email}</h4>
                <p>{profile.contact.email}</p>
              </div>
            </a>
            <a className="contact-card" href={`tel:${profile.contact.phoneFull}`}>
              <span className="contact-icon">
                <FaPhoneAlt />
              </span>
              <div>
                <h4>{t.contact.phone}</h4>
                <p>{profile.contact.phone}</p>
              </div>
            </a>
            <a
              className="contact-card"
              href={`https://wa.me/${profile.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon contact-whatsapp">
                <FaWhatsapp />
              </span>
              <div>
                <h4>{t.contact.whatsapp}</h4>
                <p>{profile.contact.phone}</p>
              </div>
            </a>
            <div className="contact-card">
              <span className="contact-icon">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h4>{t.contact.location}</h4>
                <p>{profile.contact.location}</p>
              </div>
            </div>
            <div className="contact-socials">
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

          <form className="card contact-form" data-reveal onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t.contact.yourName}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.contact.namePh}
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.contact.yourEmail}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.contact.emailPh}
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder={t.contact.msgPh}
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={status === "sending"}
            >
              {status === "sending" ? t.contact.sending : t.contact.send}
              <FaPaperPlane />
            </button>
            {status === "sent" && <p className="form-note form-success">{t.contact.success}</p>}
            {status === "error" && <p className="form-note form-error">{t.contact.error}</p>}
            {status === "email" && <p className="form-note">{t.contact.emailNote}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
