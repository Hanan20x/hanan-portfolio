import { motion } from "framer-motion";
import { profile, hackathons, involvements, certificates } from "../data/profile";
import "./Resume.css";

const experience = [
  {
    role: "Final Year Project Developer",
    period: "2025 — 2026",
    org: "UTM — HealthPrime",
    desc: "Designing and building a multi-agent health information system for a primary care clinic in Jazan, Saudi Arabia.",
  }
];

export default function Resume() {
  return (
    <main className="resume-page">
      <motion.section
        className="container resume-hero"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="eyebrow">Resume</span>
        <h1 className="resume-hero__title">My work experience</h1>
        <p className="resume-hero__sub">
          Skim the highlights of my experience and qualifications below.
        </p>
      </motion.section>

      <section className="container experience-grid">
        {experience.map((item, i) => (
          <motion.div
            className="experience-card"
            key={item.role}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, boxShadow: "0 16px 32px -12px rgba(28,43,34,0.18)" }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <div className="experience-card__top">
              <span className="experience-card__dot" />
              <h3>{item.role}</h3>
              <span className="experience-card__period">{item.period}</span>
            </div>
            <p className="experience-card__org">{item.org}</p>
            <p className="experience-card__desc">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="container resume-grid">
        <div className="resume-block">
          <h2>Education</h2>
          <div className="resume-item">
            <div className="resume-item__row">
              <h3>BSc Computer Science (Software Engineering)</h3>
              <span className="resume-item__date">2023 — 2027</span>
            </div>
            <p className="resume-item__org">Universiti Teknologi Malaysia (UTM)</p>
            <p className="resume-item__desc">
              Faculty of Computing. Final-year project: HealthPrime — a multi-agent
              health information system for a primary care clinic in Jazan, Saudi Arabia.
            </p>
          </div>
        </div>

        <div className="resume-block">
          <h2>Languages</h2>
          <div className="resume-pills">
            {profile.languages.map((lang) => (
              <span key={lang} className="resume-pill">
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="resume-block">
          <h2>Hackathons & competitions</h2>
          {hackathons.map((h) => (
            <div className="resume-item" key={h.name}>
              <div className="resume-item__row">
                <h3>{h.name}</h3>
                <span className="resume-item__date">{h.result}</span>
              </div>
              <p className="resume-item__desc">{h.project}</p>
            </div>
          ))}
        </div>

        <div className="resume-block">
          <h2>Certificates</h2>
          {certificates.map((cert) => (
            <div className="resume-item" key={cert.name}>
              <div className="resume-item__row">
                <h3>{cert.name}</h3>
                {cert.date && <span className="resume-item__date">{cert.date}</span>}
              </div>
              <p className="resume-item__org">{cert.issuer}</p>
            </div>
          ))}
        </div>

        <div className="resume-block">
          <h2>Community & leadership</h2>
          {involvements.map((item) => (
            <div className="resume-item" key={item.org}>
              <div className="resume-item__row">
                <h3>{item.org}</h3>
              </div>
              <p className="resume-item__org">{item.role}</p>
              <p className="resume-item__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
