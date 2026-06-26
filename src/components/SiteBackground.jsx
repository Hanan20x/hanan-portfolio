import { motion } from "framer-motion";
import "./SiteBackground.css";

// Each circle gets a real travel path across the viewport (in vw/vh units
// so it scales with screen size), not just a small jitter in place.
const circles = [
  {
    className: "site-bg__circle--1",
    duration: 38,
    path: { x: ["0vw", "-22vw", "10vw", "-8vw", "0vw"], y: ["0vh", "30vh", "55vh", "20vh", "0vh"] },
  },
  {
    className: "site-bg__circle--2",
    duration: 46,
    path: { x: ["0vw", "25vw", "40vw", "12vw", "0vw"], y: ["0vh", "25vh", "-10vh", "-30vh", "0vh"] },
  },
  {
    className: "site-bg__circle--3",
    duration: 33,
    path: { x: ["0vw", "-18vw", "-35vw", "-15vw", "0vw"], y: ["0vh", "-22vh", "10vh", "32vh", "0vh"] },
  },
  {
    className: "site-bg__circle--4",
    duration: 42,
    path: { x: ["0vw", "20vw", "38vw", "18vw", "0vw"], y: ["0vh", "35vh", "60vh", "30vh", "0vh"] },
  },
  {
    className: "site-bg__circle--5",
    duration: 36,
    path: { x: ["0vw", "-28vw", "-12vw", "15vw", "0vw"], y: ["0vh", "-15vh", "-40vh", "-18vh", "0vh"] },
  },
  {
    className: "site-bg__circle--6",
    duration: 50,
    path: { x: ["0vw", "15vw", "-10vw", "-25vw", "0vw"], y: ["0vh", "-28vh", "-50vh", "-20vh", "0vh"] },
  },
  {
    className: "site-bg__circle--7",
    duration: 30,
    path: { x: ["0vw", "-15vw", "18vw", "30vw", "0vw"], y: ["0vh", "20vh", "38vh", "10vh", "0vh"] },
  },
  {
    className: "site-bg__circle--8",
    duration: 44,
    path: { x: ["0vw", "22vw", "5vw", "-18vw", "0vw"], y: ["0vh", "-30vh", "-55vh", "-25vh", "0vh"] },
  },
];

export default function SiteBackground() {
  return (
    <div className="site-bg-circles" aria-hidden="true">
      {circles.map((c, i) => (
        <motion.div
          key={c.className}
          className={`site-bg__circle ${c.className}`}
          animate={{
            x: c.path.x,
            y: c.path.y,
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: c.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
        />
      ))}
    </div>
  );
}
