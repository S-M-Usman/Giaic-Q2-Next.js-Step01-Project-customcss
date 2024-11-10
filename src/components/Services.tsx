import styles from "@/styles/Services.module.css";

export default function Services() {
  const services = [
    {
      icon: "flaticon-idea",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus assumenda voluptas",
    },
    {
      icon: "flaticon-translation",
      title: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus assumenda voluptas",
    },
    {
      icon: "flaticon-controls",
      title: "Programming",
      description:
        "Passionate Programming with Python, JavaScript & TypeScript",
    },
    {
      icon: "flaticon-quality",
      title: "Creative Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus assumenda voluptas",
    },
    {
      icon: "flaticon-support",
      title: "24 X 7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus assumenda voluptas",
    },
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>My Services</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceSingle}>
              <div className={styles.iconBox}>
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
