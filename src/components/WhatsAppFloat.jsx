import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/profile.js";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hi Youssef, I saw your portfolio and I'd like to talk about a project."
  );

  return (
    <a
      href={`https://wa.me/${profile.contact.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
