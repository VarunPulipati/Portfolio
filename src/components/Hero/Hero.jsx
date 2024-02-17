import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../../../react-portfolio/src/utils";

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
          Software Engineer with 3+ years of expertise in designing and
          maintaining advanced applications with Python, Django, and data
          analytics tools. Proven success in full-stack development and
          analytics, with a keen aptitude for problem-solving.
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

        {showPopup.skills &&
          (console.log("Contact popup should show"),
          (
            <div className={styles.popup}>
              <div className={styles.popupContent}>
                <span className={styles.closeBtn} onClick={closePopup}>
                  &times;
                </span>
                <h2>My Skills</h2>
                <p>
                  <h3>Languages & Frameworks:</h3> Python, Java, C, SQL, Django,
                  Flask, React.js, Angular. <h3>Web Development & Cloud :</h3>
                  HTML, CSS, JavaScript, AWS, GCP, Azure, SDLC, Agile.
                  <h3>Machine Learning & Analytics:</h3> Power BI, Comprehensive
                  ML, JMP, Tableau, Spark, MATLAB.
                  <h3>Data Management :</h3> MySQL, PostgreSQL, MongoDB, Big
                  Data: HADOOP, Apache tools, Jira. <h3>IDEs and Tools:</h3>
                  <p>
                    Git, Jupyter, VS code, Docker, Kuberntes, CI/CD, RESTful API
                    development.
                  </p>
                </p>
              </div>
            </div>
          ))}

        {showPopup.education && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <span className={styles.closeBtn} onClick={closePopup}>
                &times;
              </span>
              <h2>Education</h2>
              <h3>
                University of Missouri, College of Engineering Columbia,
                Missouri
              </h3>{" "}
              <p>Masters in Computer Science </p>
              <p>2022-2024</p>
              <h3>
                Cherabuddi Venkata RaghavaRao College of Engineering Hyderabad,
                India
              </h3>
              <p>Bachelor’s in Electronics and Communication Engineering</p>
              <p>2016-2020</p>
            </div>
          </div>
        )}
      </div>
      <img
        src={getImageUrl("hero/pp.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
