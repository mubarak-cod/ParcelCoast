"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Gift, X } from "lucide-react";

import styles from "./Hero.module.css";
import HeroCategories from "./HeroCategories";
import HeroSlider from "./HeroSlider";
import HeroPromo from "./HeroPromo";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 28,
};

const Hero = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <section className={styles.hero}>
      {/* MOBILE BUTTONS */}
      <div className={styles.mobileControls}>
        <button onClick={() => setLeftOpen(true)}>
          <Menu size={20} />
        </button>

        <button onClick={() => setRightOpen(true)}>
          <Gift size={20} />
        </button>
      </div>

      {/* MAIN HERO LAYOUT */}
      <div className={styles.inner}>
        <div className={styles.left}>
          <HeroCategories />
        </div>

        <div className={styles.center}>
          <HeroSlider />
        </div>

        <div className={styles.right}>
          <HeroPromo />
        </div>
      </div>

      {/* LEFT SLIDE-IN */}
      <AnimatePresence>
        {leftOpen && (
          <motion.aside
            className={styles.slideLeft}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={spring}
          >
            <button
              className={styles.close}
              onClick={() => setLeftOpen(false)}
            >
              <X size={22} />
            </button>

            <HeroCategories />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* RIGHT SLIDE-IN */}
      <AnimatePresence>
        {rightOpen && (
          <motion.aside
            className={styles.slideRight}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={spring}
          >
            <button
              className={styles.close}
              onClick={() => setRightOpen(false)}
            >
              <X size={22} />
            </button>

            <HeroPromo />
          </motion.aside>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
