"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Portfolio.module.css";

export default function Portfolio() {
  const [filter, setFilter] = useState("*");

  const portfolioItems = [
    {
      id: 1,
      category: "designing",
      image: "/images/portfolio-1.jpg",
      title: "Project Title",
      description: "Designing",
    },
    {
      id: 2,
      category: "designing",
      image: "/images/portfolio-2.jpg",
      title: "Project Title",
      description: "Designing",
    },
    {
      id: 3,
      category: "websites",
      image: "/images/portfolio-3.jpg",
      title: "Project Title",
      description: "Websites",
    },
    {
      id: 4,
      category: "graphic",
      image: "/images/portfolio-4.jpg",
      title: "Project Title",
      description: "Graphic",
    },
    {
      id: 5,
      category: "graphic",
      image: "/images/portfolio-5.jpg",
      title: "Project Title",
      description: "Graphic",
    },
    {
      id: 6,
      category: "designing",
      image: "/images/portfolio-6.jpg",
      title: "Project Title",
      description: "Designing",
    },
    {
      id: 7,
      category: "graphic",
      image: "/images/portfolio-7.jpg",
      title: "Project Title",
      description: "Graphic",
    },
    {
      id: 8,
      category: "websites",
      image: "/images/portfolio-8.jpg",
      title: "Project Title",
      description: "Websites",
    },
  ];

  const filteredItems =
    filter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Portfolio</h2>
          <p>See My Works - Lorem ipsum dolor</p>
        </div>

        <div className={styles.portfolioNav}>
          <ul>
            <li>
              <button
                className={filter === "*" ? styles.active : ""}
                onClick={() => setFilter("*")}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={filter === "designing" ? styles.active : ""}
                onClick={() => setFilter("designing")}
              >
                Designing
              </button>
            </li>
            <li>
              <button
                className={filter === "graphic" ? styles.active : ""}
                onClick={() => setFilter("graphic")}
              >
                Graphic
              </button>
            </li>
            <li>
              <button
                className={filter === "websites" ? styles.active : ""}
                onClick={() => setFilter("websites")}
              >
                Websites
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.portfolioGrid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.portfolioItem}>
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
              />
              <div className={styles.portfolioOverlay}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
