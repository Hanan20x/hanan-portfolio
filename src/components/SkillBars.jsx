import { motion } from "framer-motion";
import { skills } from "../data/profile";
import "./SkillBars.css";

export default function SkillBars() {
  return (
    <section className="container skills-section">
      <div className="section__header">
        <span className="eyebrow">About me</span>
        <h2 className="section__title">My technical skills</h2>
      </div>

      <div className="skills-pills">
        {skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            className="skill-pill"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            whileHover={{ y: -3 }}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
