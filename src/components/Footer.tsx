import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.footerLogo}>
              <h1>
                <span>Shaikh Muhammad</span> Usman
              </h1>
            </div>

            <div className={styles.footerAbout}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className={styles.footerSocial}>
              <Link href="#" aria-label="Facebook">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link href="#" aria-label="Twitter">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link href="#" aria-label="Instagram">
                <i className="fa fa-instagram"></i>
              </Link>
              <Link href="#" aria-label="Pinterest">
                <i className="fa fa-pinterest-p"></i>
              </Link>
            </div>

            <div className={styles.footerCopyright}>
              <p>
                Copyright &copy; {new Date().getFullYear()} Untitled. All rights
                reserved. Design By{" "}
                <a
                  href="https://awaikenthemes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shaikh Muhammad Usman
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
