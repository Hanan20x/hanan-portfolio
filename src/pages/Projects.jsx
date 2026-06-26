import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/profile";
import "./Projects.css";

export default function Projects() {
  return (
    <main className="projects-page">
      <motion.section
        className="container projects-hero"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="eyebrow">Selected Projects</span>
        <h1 className="projects-hero__title">Selected Projects</h1>
        <p className="projects-hero__sub">
          From a multi-agent healthcare platform to a swarm of autonomous
          drones — here's what I've shipped, and what I learned shipping it.
        </p>
      </motion.section>

      <section className="container projects-grid-section">
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.08, 0.32) }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
