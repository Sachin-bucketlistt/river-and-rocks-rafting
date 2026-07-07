import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import HeaderData from "./HeaderData";
import { useBookingModal } from "../BookingModal/BookingModalContext";
import "./Header.css";

const Header = ({ data = HeaderData }) => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const { openBookingModal } = useBookingModal();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > data.scrollThreshold);
  });

  return (
    <motion.header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      initial={false}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="site-header__inner MaxWidthContainer MarginAuto"
        animate={{
          paddingTop: scrolled ? 8 : 16,
          paddingBottom: scrolled ? 8 : 16,
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <a href={data.logo.href} className="site-header__logo-link" aria-label={data.logo.alt}>
          <motion.img
            src={data.logo.src}
            alt={data.logo.alt}
            className="site-header__logo"
            animate={{
              height: scrolled ? 42 : 68,
            }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            draggable={false}
          />
        </a>

        <motion.button
          type="button"
          className="site-header__cta"
          onClick={() => openBookingModal()}
          animate={{
            paddingBlock: scrolled ? 9 : 12,
            paddingInline: scrolled ? 20 : 26,
            scale: scrolled ? 0.96 : 1,
          }}
          whileHover={{ scale: scrolled ? 1 : 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {data.cta.label}
        </motion.button>
      </motion.div>
    </motion.header>
  );
};

export default Header;
