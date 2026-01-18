"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { heroSlides } from "../data/heroSlides";
import styles from "./HeroSlider.module.css";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className={styles.slider}
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id} className={styles.slide}>
          <Image
            src={slide.image}
            alt="Hero banner"
           fill
            priority
            className={styles.image}
          />
        </SwiperSlide>
      ))} 
    </Swiper>
  );
}