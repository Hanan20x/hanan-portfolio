import { motion } from "framer-motion";
import { skillCategories } from "../data/profile";
import "./SkillBars.css";

export default function SkillBars() {
  return (
    <section className="container skills-section">
      <div className="section__header">
        <span className="eyebrow">About me</span>
        <h2 className="section__title">My technical skills</h2>
      </div>

      <div className="skills-categories">
        {skillCategories.map((group, gi) => (
          <motion.div
            key={group.category}
            className="skill-category"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: gi * 0.1 }}
          >
            <h3 className="skill-category__title">{group.category}</h3>
            <div className="skills-pills">
              {group.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skill-pill"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: gi * 0.1 + i * 0.04 }}
                  whileHover={{ y: -3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
