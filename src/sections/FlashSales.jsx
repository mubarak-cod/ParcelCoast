"use client";

import React, { useEffect, useState } from "react";
import styles from "./FlashSales.module.css";
import { ArrowRightIcon, Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { flashSales } from "@/data/flashSales";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const FlashSales = () => {
  return (
    <section className={styles.flashSales}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h2>Flash Sales 🔥</h2>
          <p>Limited-time deals you don’t want to miss</p>

          
        </div>

        <div>
          <DotLottieReact
            src="https://lottie.host/e6433020-1d06-4d93-925a-606bfb1c1ed4/CY2LwqCu8c.lottie"
            loop
            autoplay
            className={styles.flashanimation}
          />
        </div>

        <Link href="/flash-sales" className={styles.seeAll}>
          See all <ArrowRightIcon size={18} />
        </Link>
      </div>

      {/* PRODUCTS GRID */}
      <div className={styles.grid}>
        {flashSales.map((product) => (
          <FlashCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSales;

/* ===============================
   FLASH SALE PRODUCT CARD
================================= */

const FlashCard = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState(product.saleEndsIn);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // convert seconds → hours, minutes, seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const stockPercent = (product.stockLeft / product.totalStock) * 100;

  return (
    <div className={styles.card}>
      {/* DISCOUNT BADGE */}
      <span className={styles.discount}>-{product.discountPercentage}%</span>

      {/* PRODUCT IMAGE */}
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className={styles.image}
        />
      </div>

      {/* PRODUCT NAME */}
      <h3 className={styles.title}>{product.name}</h3>

      {/* RATING */}
      <div className={styles.rating}>
        <Star size={16} fill="#facc15" stroke="none" />
        <span>{product.rating}</span>
        <small>({product.reviewCount})</small>
      </div>

      {/* PRICES */}
      <div className={styles.price}>
        <span className={styles.salePrice}>
          ₦{product.salePrice.toLocaleString()}
        </span>
        <span className={styles.originalPrice}>
          ₦{product.originalPrice.toLocaleString()}
        </span>
      </div>

      {/* COUNTDOWN TIMER */}
      <div className={styles.timer}>
        ⏳ {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>

      {/* STOCK PROGRESS */}
      <div className={styles.stock}>
        <div className={styles.stockBar}>
          <div style={{ width: `${stockPercent}%` }} />
        </div>
        <small>{product.stockLeft} items left</small>
      </div>

      {/* ADD TO CART */}
      <button className={styles.cartBtn}>
        <ShoppingCart size={18} />
        Add to cart
      </button>
    </div>
  );
};
