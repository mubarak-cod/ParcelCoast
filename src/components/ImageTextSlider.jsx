"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


import Image from "next/image";
import styles from "./ImageTextSlider.module.css";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766426964/9f8daecc-be07-4042-be45-7cea700a8630.png",
    text: "Spiritual growth and fellowship",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766426983/29dbd585-6dfe-4e46-86e5-2f933467e0bb.png",
    text: "A place of deep worship",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766426994/23f7f83b-ed6c-453f-aeb4-f71dd3c586cd.png",
    text: "Moments that shape destiny",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766427005/c6ba21d1-61e7-4b2a-844f-cf9b37f96832.png",
    text: "Gathered in faith and unity",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766427021/6481c72c-94f9-467c-a850-3af12378b05e.png",
    text: "Encountering God’s presence",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766427026/62001570-5637-4071-84ec-70ba267bd293.png",
    text: "A legacy of prayer",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766427037/8b1b043b-ae93-416d-a228-5b89ccac8693.png",
    text: "Worship beyond words",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766427042/8fe3aafd-8000-4e6d-bdba-e99c3cbf60d0.png",
    text: "Lives transformed daily",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766427059/928a9ced-c6e2-4cd8-bb43-dd4cc77bdc1d.png",
    text: "Faith that stands strong",
  },
  // {
  //   id: 10,
  //   image: "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766427059/928a9ced-c6e2-4cd8-bb43-dd4cc77bdc1d.png",
  //   text: "Moments of divine encounter",
  // },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766427069/62e722e4-eddc-4164-bbe4-8cb6e0543dda.png",
    text: "Together as one body",
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/dmtfdnuap/image/upload/v1766427073/cc79ff6b-3439-4c46-b36d-573750099153.png",
    text: "Hope, faith and love",
  },
];

export default function ImageTextSlider() {
  return (
    <div className={styles.wrapper}>
      <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  loop
  spaceBetween={10}
  slidesPerView={1}
  breakpoints={{
    0: {
      slidesPerView: 1.2,
    },
    360: {
      slidesPerView: 3.5,
    },
    468: {
      slidesPerView: 4.1, 
    },
    768: {
      slidesPerView: 4.2,
    },
    1024: {
      slidesPerView: 5.2,
    },
  }}
  grabCursor
  className={styles.swiper}
>

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={slide.image}
                  alt={slide.text}
                  fill
                  className={styles.image}
                />
              </div>

              <p className={styles.text}>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
