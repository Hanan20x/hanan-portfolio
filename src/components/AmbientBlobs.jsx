import { motion } from "framer-motion";
import "./AmbientBlobs.css";

/**
 * Lightweight ambient background motion for sections outside the hero.
 * variant: "light" (for cream/white sections) or "dark" (for the green involvement band)
 * position: "left" | "right" — which side the blob anchors to
 */
export default function AmbientBlobs({ variant = "light", position = "right" }) {
  return (
    <div
      className={`ambient-blobs ambient-blobs--${variant} ambient-blobs--${position}`}
      aria-hidden="true"
    >
      <motion.div
        className="ambient-blobs__shape"
        animate={{
          x: [0, 24, -16, 0],
          y: [0, -18, 14, 0],
          scale: [1, 1.06, 0.97, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
