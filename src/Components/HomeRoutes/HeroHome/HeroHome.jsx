import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "./HeroHome.css";

const kayakVariants = [
  { name: "Sunrise Yellow" },
];

const HeroHome = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      id="hero-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* Background */}
      <div className="BeachTopViewImage">
        <img
          src="/Images/IllustrationImages/BeachTopViewImage.png"
          alt="Beach background"
        />
      </div>

      {/* Kayak Slider */}
      <div className="kayak-slider-section">
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={true}
          speed={650}
          grabCursor={true}
          className="kayak-swiper"
        >
          {kayakVariants.map((variant, index) => (
            <SwiperSlide key={index}>
              <div className="kayak-slide">
                <img
                  src="/Images/IllustrationImages/Untitled design.png"
                  alt={`${variant.name} Kayak`}
                  className="kayak-image"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Overlay */}
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Kayaking
        </motion.h1>

        {/* Bottom info row */}
        <div className="hero-bottom">
          {/* Left: product info */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          >
            <h2 className="hero-product-name">Safe & Secure Rafting Adventure</h2>
            <p className="hero-description">
            Enjoy an exciting rafting adventure with certified guides, safety gear, and expert supervision for a fun and secure journey on the river.
            </p>
            
          </motion.div>

          {/* Right: specs */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          >
            <span className="hero-spec">
              Weight: 20kg &nbsp;|&nbsp; Length: 4.9m
            </span>
            <span className="hero-spec">
              Beam (Width): 57cm &nbsp;|&nbsp; Cockpit Size: 77.5cm
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroHome;
