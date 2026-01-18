import React from "react";
import styles from "./ProductCategory.module.css";
import { homepageCategories } from "@/data/categoryAdapters";
import Link from "next/link";
import Image from "next/image";

const ProductCategory = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Browse by Category</h2>
        <p>Find products from popular categories</p>
      </div>

      <div className={styles.categoryGrid}>
        {homepageCategories.map((category, index) => {
          const Icon = category.icon;
          
          return (
            <Link
              href={category.href}
              key={category.id}
              className={styles.categoryCard}
            >
              <div
                className={styles.iconWrapper}
                style={{ backgroundColor: ICON_BG_COLORS[index % ICON_BG_COLORS.length] }}
              >
                <Icon
                  size={28}
                  style={{ color: ICON_COLORS[index % ICON_COLORS.length] }}
                />
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src={category.image}
                  alt={category.title}
                  width={120}
                  height={120}
                />
              </div>

              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span>{category.totalProducts}+ items</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCategory;

// 🎨 Icon colors for the products.
const ICON_COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#9333ea",
  "#ea580c",
  "#0d9488",
];

const ICON_BG_COLORS = [
  "#eff6ff",
  "#ecfdf5",
  "#fef2f2",
  "#faf5ff",
  "#fff7ed",
  "#f0fdfa",
];
