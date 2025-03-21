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
          Data Scientist with a strong background in machine learning,
          predictive analytics, and full-stack development. Proven track record
          of improving business outcomes through AI-driven insights, automation,
          and scalable data solutions. Expertise in Python, TensorFlow, PyTorch,
          cloud platforms (AWS, Azure), and big data technologies like Apache
          Spark and Kafka. Passionate about leveraging data science to drive
          strategic decision-making and optimize operational efficiencies.
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

        {/* Social Links Section */}
        <div className={styles.socialRow}>
          <a
            href="https://www.linkedin.com/in/varunpulipati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://github.com/VarunPulipati"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://scholar.google.com/citations?user=yourID"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/Google_Scholar.png")}
              alt="Google Scholar"
              className={styles.socialIcon}
            />
          </a>
        </div>

        {showPopup.skills && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <span className={styles.closeBtn} onClick={closePopup}>
                &times;
              </span>
              <h2>My Skills</h2>
              <div className={styles.skillSection}>
                <h3>Languages & Programming:</h3>
                <p>
                  Python, SQL, Django, Flask, React, Big Data Tools (Apache
                  Spark, Kafka, Hadoop)
                </p>
              </div>
              <div className={styles.skillSection}>
                <h3>DevOps & Cloud:</h3>
                <p>
                  AWS, Azure, Docker, Kubernetes, SDLC, Agile, Git, CI/CD,
                  Jenkins, Linux, Shell scripting.
                </p>
              </div>
              <div className={styles.skillSection}>
                <h3>Machine Learning</h3>
                <p>
                  Scikit-learn, TensorFlow, Hugging Face, PyTorch, Open AI, NLP
                  & LLMs, Power BI, Tableau
                </p>
              </div>
              <div className={styles.skillSection}>
                <h3>Analytics & Modeling:</h3>
                <p>
                  Data Governance & Quality Assurance, A/B Testing, Predictive
                  Modeling, Feature Selection, Clustering, Statistical Analysis.
                </p>
              </div>
              <div className={styles.skillSection}>
                <h3>Data Management</h3>
                <p>
                  MySQL, PostgreSQL, MongoDB, ETL, Data Warehousing(Redshift).
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
                <h3>Master of Science in Computer Science</h3>
                <p>
                  University of Missouri, College of Engineering - Columbia,
                  Missouri (2022 - 2024)
                </p>
                <p>
                  <strong>Relevant Courses:</strong> Data Analysis, Cloud
                  Computing, Web Development, Big Data, Machine Learning,
                  Advanced NLP
                </p>
              </div>

              <div className={styles.educationSection}>
                <h3>
                  Bachelor of Technology in Electronic and Computer Engineering
                </h3>
                <p>
                  CVR College of Engineering - Hyderabad, India (2016 - 2020)
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
      <div className={styles.emailLink}>
        <a href="mailto:varunpulipati26@gmail.com">varunpulipati26@gmail.com</a>
      </div>
    </section>
  );
};
