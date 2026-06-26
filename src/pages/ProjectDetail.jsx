import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/profile";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="detail">
      <section className="container detail__header">
        <Link to="/projects" className="detail__back">
          ← All projects
        </Link>

        {project.badge && <span className="detail__badge">{project.badge}</span>}
        <h1 className="detail__title">{project.title}</h1>
        <p className="detail__role">{project.role}</p>

        <div className="detail__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <motion.section
        className="container detail__hero-media"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.video ? (
          <video src={project.video} controls className="detail__media" />
        ) : project.image ? (
          <img src={project.image} alt={project.title} className="detail__media" />
        ) : (
          <div className="detail__media detail__media--placeholder">
            <span>Add a hero screenshot, diagram, or demo video for {project.title}</span>
          </div>
        )}
      </motion.section>

      <section className="container detail__body">
        <div className="detail__main">
          <h2>Overview</h2>
          <p>{project.description}</p>

          {project.challenges && project.challenges.length > 0 && (
            <>
              <h2>Challenges & decisions</h2>
              <ul className="detail__list">
                {project.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <>
              <h2>Gallery</h2>
              <div className="detail__gallery">
                {project.gallery.map((src, i) => (
                  <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} />
                ))}
              </div>
            </>
          )}
        </div>

        <aside className="detail__sidebar">
          <div className="detail__sidebar-card">
            <h3>Links</h3>
            <a href={project.github} target="_blank" rel="noreferrer" className="detail__link">
              View on GitHub →
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}
