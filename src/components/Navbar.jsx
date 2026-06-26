import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <motion.span whileHover={{ rotate: -4, scale: 1.04 }} style={{ display: "inline-block" }}>
            {profile.firstName}
            <span className="navbar__brand-dot">.</span>
          </motion.span>
        </Link>

        <nav className="navbar__links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " navbar__link--active" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact">
            <motion.span
              className="navbar__cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact
            </motion.span>
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
