import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [showPopup, setShowPopup] = useState({
    contact: false,
    skills: false,
    education: false,
  });

  const openPopup = (popup) => {
    // Close all popups first, then open the specified one
    setShowPopup({
      contact: false,
      skills: false,
      education: false,
      [popup]: true,
    });
  };

  const closePopup = () => {
    setShowPopup({ contact: false, skills: false, education: false });
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Varun Pulipati</h1>
        <p className={styles.description}>
          Software Engineer with over 4 years of experience designing, building,
          and deploying robust applications using Python, Django, and Flask.
          Proven expertise in full-stack development, cloud integrations, and
          RESTful API design.
        </p>
        <div className={styles.buttonRow}>
          <a
            href="mailto:varunpulipati26@gmail.com"
            className={styles.contactBtn}
          >
            Connect
          </a>
          <button
            onClick={() => openPopup("skills")}
            className={styles.contactBtn}
          >
            Skills
          </button>
          <button
            onClick={() => openPopup("education")}
            className={styles.contactBtn}
          >
            Education
          </button>
        </div>

        {showPopup.skills && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <span className={styles.closeBtn} onClick={closePopup}>
                &times;
              </span>
              <h2>My Skills</h2>
              <div className={styles.skillSection}>
                <h3>Languages & Frameworks:</h3>
                <p>
                  Python 3+, Django, Flask, FastAPI, Pytest, Celery,
                  Microservices, Kafka
                </p>
              </div>
              <div className={styles.skillSection}>
                <h3>Web Technologies:</h3>
                <p>
                  Django REST Framework, REST API, GraphQL, HTML5, CSS3,
                  JavaScript
                </p>
              </div>
              <div className={styles.skillSection}>
                <h3>Databases & Data Management:</h3>
                <p>
                  PostgreSQL, MySQL, MongoDB, SQLite, Redis, NoSQL, AWS RDS,
                  ETL, Data Warehousing (Redshift)
                </p>
              </div>
              <div className={styles.skillSection}>
                <h3>DevOps & Tools:</h3>
                <p>
                  AWS, Azure, Docker, Kubernetes, Git, GitHub, GitLab, CI/CD,
                  Jenkins, Linux, Shell scripting, Jira, Postman, PyCharm, VS
                  Code, Jupyter Notebook, NetBeans, IntelliJ
                </p>
              </div>
            </div>
          </div>
        )}

        {showPopup.education && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <span className={styles.closeBtn} onClick={closePopup}>
                &times;
              </span>
              <h2>Education</h2>
              <div className={styles.educationSection}>
                <h3>
                  University of Missouri, College of Engineering - Columbia,
                  Missouri
                </h3>
                <p>Master of Science in Computer Science (2022 - 2024)</p>
                <p>
                  <strong>Relevant Courses:</strong> Data Analysis, Cloud
                  Computing, Web Development, Big Data, Machine Learning,
                  Advanced NLP
                </p>
              </div>
              <div className={styles.educationSection}>
                <h3>CVR, College of Engineering - Hyderabad, India</h3>
                <p>
                  Bachelor of Technology in Electronic and Computer Engineering
                  (2016 - 2020)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <img
        src={getImageUrl("hero/pp.jpeg")}
        alt="Varun Pulipati"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
