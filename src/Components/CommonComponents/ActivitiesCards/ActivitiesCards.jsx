import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import "./ActivitiesCards.css";

const ActivityCard = ({
  title = "Activity",
  description = "",
  price = "$0",
  image = "",
  imageAlt = "",
  colors = [],
  onBook,
}) => {
  const cardRef = useRef(null);

  /* ── Raw pointer position normalised to [-0.5, 0.5] ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* ── 3-D tilt — spring-smoothed for a physical feel ── */
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 22,
  });

  /* ── Shimmer radial-gradient that tracks the cursor ── */
  const shimmerLeft = useTransform(mouseX, [-0.5, 0.5], ["10%", "90%"]);
  const shimmerTop  = useTransform(mouseY, [-0.5, 0.5], ["10%", "90%"]);
  const shimmerBg   = useMotionTemplate`radial-gradient(circle at ${shimmerLeft} ${shimmerTop}, rgba(255,255,255,0.35) 0%, transparent 55%)`;

  function handleMouseMove(e) {
    const r = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      className="activity-card-perspective"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="activity-card"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      >

        {/* ── Kayak watermark: clipped + gently bobbing on water ──────── */}
        <div className="activity-card__deco-layer" aria-hidden="true">
          <motion.img
            className="activity-card__kayak-deco"
            src="/Images/IllustrationImages/CardIllustrationImage.png"
            alt=""
            draggable={false}
            animate={{
              y: [0, -10, 0],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
        </div>

        {/* ── Holographic shimmer follows the mouse ───────────────────── */}
        <motion.div
          className="activity-card__shimmer"
          style={{ background: shimmerBg }}
          aria-hidden="true"
        />

        {/* Image area */}
        <div className="activity-card__image-wrap">
          {image && (
            <motion.img
              src={image}
              alt={imageAlt || title}
              className="activity-card__image"
              whileHover={{ rotate: -2, scale: 1.04, transition: { duration: 0.35 } }}
              draggable={false}
            />
          )}
        </div>

        {/* Body */}
        <div className="activity-card__body">
          <div className="activity-card__title-row">
            <h3 className="activity-card__title">{title}</h3>
            <span className="activity-card__price">{price}</span>
          </div>

          <p className="activity-card__desc">{description}</p>

          <div className="activity-card__footer">
            <motion.button
              className="activity-card__book-btn"
              onClick={onBook}
              whileHover={{ scale: 1.12, backgroundColor: "var(--brand-color)" }}
              whileTap={{ scale: 0.93 }}
              transition={{ duration: 0.2 }}
              aria-label={`Book ${title}`}
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ActivityCard;
