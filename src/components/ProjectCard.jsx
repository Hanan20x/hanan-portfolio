import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{ rest: { y: 0 }, hover: { y: -6 } }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Link to={`/projects/${project.id}`} className="project-card">
        <div className="project-card__image">
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          ) : (
            <div className="project-card__placeholder">
              <span>Add screenshot</span>
            </div>
          )}
          {project.badge && (
            <motion.span
              className="project-card__badge"
              variants={{ rest: { y: 0 }, hover: { y: -2 } }}
            >
              {project.badge}
            </motion.span>
          )}
        </div>

        <motion.div
          className="project-card__body"
          variants={{ rest: { y: 0 }, hover: { y: -2 } }}
          transition={{ duration: 0.25 }}
        >
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__summary">{project.summary}</p>

          <div className="project-card__tags">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <motion.span
            className="project-card__link"
            variants={{
              rest: { gap: "4px" },
              hover: { gap: "10px" },
            }}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            View case study
            <motion.span
              variants={{ rest: { x: 0 }, hover: { x: 4 } }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
