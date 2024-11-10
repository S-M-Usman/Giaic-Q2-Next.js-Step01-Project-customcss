"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Banner.module.css";

export default function Banner() {
  const [visibleWord, setVisibleWord] = useState(0);
  const words = ["Web Designer", "Web Developer", "Creative Thinker"];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className={styles.banner} id="home">
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.bannerContent}>
          <h2 className={styles.cdHeadline}>
            <span className={styles.beforeHeading}>Hello! I am Usman</span>
            <span className={styles.cdWordsWrapper}>
              {words.map((word, index) => (
                <b
                  key={word}
                  className={`${styles.cdWord} ${
                    index === visibleWord ? styles.isVisible : ""
                  }`}
                >
                  {word}
                </b>
              ))}
            </span>
          </h2>
          <p className={styles.subtitle}>
            Bringing Ideas to Life through Code and Design
          </p>
          <Link href="#" className={styles.btnDownload}>
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
}
