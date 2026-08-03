import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/profile.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something great together"
          subtitle="Have a project in mind? I'm one message away."
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
                <h4>Email</h4>
                <p>{profile.contact.email}</p>
              </div>
            </a>
            <a className="contact-card" href={`tel:${profile.contact.phoneFull}`}>
              <span className="contact-icon">
                <FaPhoneAlt />
              </span>
              <div>
                <h4>Phone</h4>
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
                <h4>WhatsApp</h4>
                <p>{profile.contact.phone}</p>
              </div>
            </a>
            <div className="contact-card">
              <span className="contact-icon">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h4>Location</h4>
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
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@email.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Send Message <FaPaperPlane />
            </button>
            {sent && (
              <p className="form-note">
                Your email app should open — hit send and I'll reply ASAP!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
