import Image from "next/image";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <section className={styles.aboutUs} id="about">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>About Me</h2>
          <p>Professional Profile - There Is All About Me</p>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/banner-img.png"
              alt="Shaikh Muhammad Usman"
              width={400}
              height={400}
            />
          </div>

          <div className={styles.aboutText}>
            <h3>I am Shaikh Muhammad Usman</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus assumenda, voluptas nostrum quasi eaque modi
              voluptatibus sed enim rem? Itaque veritatis eligendi, magnam
              doloremque vitae temporibus quae error odit.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
              sapiente illo, atque animi repellat blanditiis quisquam possimus
              repellendus! Temporibus ipsa ullam, ipsam delectus voluptatibus
              iure maiores laudantium doloremque!
            </p>

            <ul className={styles.personalInfo}>
              <li>
                <i className="flaticon-calendar"></i>
                <b>Date of birth:</b> 25 september 2004
              </li>
              <li>
                <i className="flaticon-flag"></i>
                <b>Nationality:</b> Pakistan
              </li>
              <li>
                <i className="flaticon-freelance"></i>
                <b>Freelance:</b> Available
              </li>
              <li>
                <i className="flaticon-phone-call"></i>
                <b>Phone:</b> +92 318 1420900
              </li>
              <li>
                <i className="flaticon-placeholder"></i>
                <b>Address:</b> Karachi, Pakistan
              </li>
              <li>
                <i className="flaticon-email"></i>
                <b>Email:</b> example@email.com
              </li>
              <li>
                <i className="flaticon-translation"></i>
                <b>Spoken Langages:</b> Urdu - English
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
