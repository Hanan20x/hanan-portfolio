import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__dotgrid" aria-hidden="true" />

      <div className="hero__blobs" aria-hidden="true">
        <motion.div
          className="hero__blob hero__blob--green"
          animate={{
            x: [0, 30, -10, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__blob hero__blob--gold"
          animate={{
            x: [0, -25, 18, 0],
            y: [0, 18, -22, 0],
            scale: [1, 0.92, 1.06, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__blob hero__blob--soft"
          animate={{
            x: [0, 18, -22, 0],
            y: [0, -14, 10, 0],
            scale: [1, 1.05, 0.98, 1],
            rotate: [0, 12, -8, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="hero__name-row">
            <span className="hero__im">I'm</span>
            <span className="hero__name-badge">
              {profile.firstName}
              <motion.span
                className="hero__name-badge-arrow"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                »
              </motion.span>
            </span>
          </div>

          <h1 className="hero__headline">
            {["welcome", "to", "my", "portfolio"].map((word, i) => (
              <motion.span
                key={word}
                className="hero__headline-word"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.12,
                  ease: "easeOut",
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h1>

          <p className="hero__role">
            Final Year Software Engineering Student at Universiti Teknologi
            Malaysia (UTM)
          </p>

          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              View my work <span className="btn__arrow">↗</span>
            </Link>
          </div>

          <div className="hero__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
              </svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.11 20.45H3.56V9h3.55v11.45z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__photo-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="hero__photo-frame">
            <img
              src="/profile-photo.jpg"
              alt={profile.name}
              className="hero__photo"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            <div className="hero__photo-placeholder">
              Add your photo at /public/profile-photo.jpg
            </div>
          </div>

          <motion.div
            className="hero__stat-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="hero__stat-number">4+</span>
            <span className="hero__stat-label">Years Coding</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero__stats-row container">
        <div className="hero__stat">
          <span className="hero__stat-ghost">8+</span>
          <h3>Projects Shipped</h3>
          <p>From healthcare AI agents to autonomous drone swarms.</p>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-ghost">Top 20</span>
          <h3>VHACK 2026 Finalist</h3>
          <p>Drone Swarm Management System, placed in the competition's top 20.</p>
        </div>
      </div>
    </section>
  );
}
