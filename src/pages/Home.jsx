import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SkillBars from "../components/SkillBars";
import ProjectCard from "../components/ProjectCard";
import AmbientBlobs from "../components/AmbientBlobs";
import { projects, involvements } from "../data/profile";
import "./Home.css";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <main>
      <Hero />
      <SkillBars />

      <section className="container section">
        <div className="section__header">
          <span className="eyebrow">Selected Projects</span>
          <h2 className="section__title">A couple of projects I've built</h2>
        </div>

        <div className="featured-grid">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="section__cta">
          <Link to="/projects" className="btn btn--outline">
            See all projects →
          </Link>
        </div>
      </section>

      <section className="involvement-band">
        <AmbientBlobs variant="dark" position="left" />
        <div className="container">
          <motion.div
            className="section__header"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow eyebrow--light">Beyond the code</span>
            <h2 className="section__title section__title--light">
              Building community, not just software
            </h2>
          </motion.div>

          <div className="involvement-grid">
            {involvements.map((item, i) => (
              <motion.div
                key={item.org}
                className="involvement-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6, borderColor: "rgba(244,233,208,0.3)" }}
              >
                <div className="involvement-card__photo">
                  {item.image ? (
                    <img src={item.image} alt={item.org} />
                  ) : (
                    <span>Photo coming soon</span>
                  )}
                </div>
                <h3>{item.org}</h3>
                <p className="involvement-card__role">{item.role}</p>
                <p className="involvement-card__desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
