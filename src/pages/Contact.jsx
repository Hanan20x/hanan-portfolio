import { motion } from "framer-motion";
import { profile } from "../data/profile";
import "./Contact.css";

const cards = [
  { key: "email", label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { key: "linkedin", label: "LinkedIn", value: "Connect with me →", href: profile.linkedin, external: true },
  { key: "github", label: "GitHub", value: "See my code →", href: profile.github, external: true },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <motion.section
        className="container contact-hero"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="eyebrow">Get in touch</span>
        <h1 className="contact-hero__title">Let's build something together.</h1>
        <p className="contact-hero__sub">
          Looking for an intern who can pick up an ambiguous problem and ship
          a working system? I'd love to hear from you.
        </p>
      </motion.section>

      <section className="container contact-cards">
        {cards.map((card, i) => (
          <motion.a
            key={card.key}
            href={card.href}
            target={card.external ? "_blank" : undefined}
            rel={card.external ? "noreferrer" : undefined}
            className="contact-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -14px rgba(28,43,34,0.22)" }}
          >
            <span className="contact-card__label">{card.label}</span>
            <span className="contact-card__value">{card.value}</span>
          </motion.a>
        ))}
      </section>

      <motion.section
        className="container contact-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div>
          <h3>Location</h3>
          <p>{profile.location}</p>
        </div>
        <div>
          <h3>Currently</h3>
          <p>{profile.status}</p>
        </div>
      </motion.section>
    </main>
  );
}
