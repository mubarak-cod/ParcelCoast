"use client"

import React from "react";
import styles from "./HeroPromo.module.css";
import { PhoneCall, BanknoteArrowUp, Package } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeroPromo = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <PhoneCall className={styles.icon} />
          <div>
            <p className={styles.title}>Call to Order</p>
            {/* <span className={styles.text}>090383838383</span>
          <span className={styles.text}>080838373833</span> */}
          </div>
        </div>

        <div className={styles.card}>
          <BanknoteArrowUp className={styles.icon} />
          <div>
            <p className={styles.title}>Hire am errand person</p>
            <span className={styles.text}>Book a service easily</span>
          </div>
        </div>

        <div className={styles.card}>
          <Package className={styles.icon} />
          <div>
            <p className={styles.title}>Send Your Packages</p>
            <span className={styles.text}>Fast & secure delivery</span>
          </div>
        </div>
      </div>

      <div className={styles.lottie}>
        <DotLottieReact
          src="https://lottie.host/3b030381-6001-47c0-84e9-1886b5426837/mZfWuds7Md.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default HeroPromo;
