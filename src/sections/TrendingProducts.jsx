import React from "react";
import styles from "./TrendingProducts.module.css";
import { ArrowRightIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { trendingProducts } from "@/data/trending";

const TrendingProducts = () => {
  return (
    <section className={styles.featuredproducts}>
      {/* Header */}
      <div className={styles.featuredheader}>
        <h2>Featured / Trending Products</h2>

        <Link href="/products" className={styles.seeall}>
          See all <ArrowRightIcon size={18} />
        </Link>
      </div>

      {/* Products Grid */}
      <div className={styles.productsGrid}>
        {trendingProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            {/* Discount Badge */}
            {product.discountPercentage && (
              <span className={styles.discountBadge}>
                -{product.discountPercentage}%
              </span>
            )}

            {/* Product Image */}
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.name}
                width={220}
                height={220}
              />
            </div>

            {/* Product Info */}
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>

              {/* Rating */}
              <div className={styles.rating}>
                <Star size={14} fill="#facc15" stroke="none" />
                <span>
                  {product.rating} ({product.reviewCount})
                </span>
              </div>

              {/* Price */}
              <div className={styles.price}>
                {product.discountPrice ? (
                  <>
                    <span className={styles.discountPrice}>
                      ₦{product.discountPrice.toLocaleString()}
                    </span>
                    <span className={styles.oldPrice}>
                      ₦{product.price.toLocaleString()}
                    </span>
                  </>
                ) : (
                  <span className={styles.discountPrice}>
                    ₦{product.price.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Button */}
              <button className={styles.cartBtn}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
