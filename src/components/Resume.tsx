import styles from "@/styles/Resume.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";


export default function Resume() {
  const experiences = [
    {
      period: "2023-2024",
      title: "Responsive Website Design",
      description:
        "Web Site Design using HTML-5 and CSS together with BOOTSTRAP 5 AND TAILWIND CSS at Saylani SMIT",
    },
    {
      period: "2024-present",
      title: "Full Stack Development",
      description: "Frontend development at Saylani SMIT program",
    },
    {
      period: "2024 - Present",
      title: "Generative AI",
      description:
        "Part of the Governor Sindh Initiative of Gen AI Web 3.0 And Metaverse",
    },
  ];

  const education = [
    {
      period: "2020 - 2022",
      title: "Cambridge O Levels",
      institution: "Little Falks Paradise Cambridge School",
    },
    {
      period: "2022-2024",
      title: "HSC",
      institution: "Niams College, North Nazimabad, Karachi",
    },
  ];

  const skills = [
    { name: "HTML 5", rating: 5 },
    { name: "CSS 3", rating: 5 },
    { name: "TypeScript", rating: 5 },
    { name: "Bootstrap 5", rating: 5 },
    { name: "JavaScript", rating: 4.5 },
    { name: "Python", rating: 3.5 },
  ];

  return (
    <section className={styles.myResume} id="resume">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>My Resume</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

        <div className={styles.resumeContent}>
          <div className={styles.experience}>
            <h3 className={styles.subTitle}>
              <i className="fa fa-briefcase"></i> Experience
            </h3>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.experienceSingle}>
                <h5>{exp.period}</h5>
                <h4>{exp.title}</h4>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.education}>
            <h3 className={styles.subTitle}>
              <i className="fa fa-graduation-cap"></i> Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className={styles.experienceSingle}>
                <h5>{edu.period}</h5>
                <h4>{edu.title}</h4>
                <p>{edu.institution}</p>
              </div>
            ))}
          </div>

          <div className={styles.skill}>
            <h3 className={styles.subTitle}>
              <i className="fa fa-star-o"></i> My Skills
            </h3>
            <div className={styles.skillContent}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillSingle}>
                  <h5>{skill.name}</h5>
                  <div className={styles.skillRating}>
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa fa-star${i < skill.rating ? "" : "-o"}`}
                      ></i>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
