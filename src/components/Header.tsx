import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.navbarBrand}>
            <h1>
              <span>S.M.</span> Usman
            </h1>
          </Link>

          <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
              <Link href="#home" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#services" className={styles.navLink}>
                Services
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#resume" className={styles.navLink}>
                Resume
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#portfolio" className={styles.navLink}>
                Portfolio
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
