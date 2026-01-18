import React from "react";
import styles from "./ServiceHighlights.module.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { servicehighlights } from "@/data/servicehighlights";

const ServiceHighlights = () => {
  return (
    <section className={styles.servicehighlights}>
      {/* HEADER */}
      <div className={styles.serviceheader}>
        <h2>Service Highlights</h2>

        <Link href="/services" className={styles.seeall}>
          See all <ArrowRightIcon size={18} />
        </Link>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {servicehighlights.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.id}
              href={service.href}
              className={`${styles.card} ${styles[service.accent]}`}
            >
              {/* ILLUSTRATION */}
              <div className={styles.imageWrap}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.image}
                />
              </div>

              {/* ICON BADGE */}
              <div className={styles.iconWrap}>
                <Icon size={24} />
              </div>

              {/* TEXT */}
              <div className={styles.text}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span className={styles.arrow}>
                <ArrowRightIcon size={18} />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceHighlights;
