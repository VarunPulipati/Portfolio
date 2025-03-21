import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faRobot } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutimage.png")}
          alt="Varun working on a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <FontAwesomeIcon
              icon={faBrain}
              size="2x"
              className={styles.icon}
              style={{ marginRight: "15px" }} // Added spacing
            />
            <div className={styles.aboutItemText}>
              <h3>Data Scientist</h3>
              <p>
                Data Scientist with expertise in AI/ML-driven insights,
                predictive analytics, and automation. Proven track record in
                developing self-learning models that enhance decision-making and
                optimize business strategies. Skilled in TensorFlow, PyTorch,
                Scikit-learn, and NLP, with experience in deploying scalable
                solutions on AWS, Azure, and Kubernetes.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <FontAwesomeIcon
              icon={faRobot}
              size="2x"
              className={styles.icon}
              style={{ marginRight: "15px" }} // Added spacing
            />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Engineer</h3>
              <p>
                Experienced in building end-to-end machine learning pipelines,
                from data processing to deployment. Specialized in model
                optimization, feature engineering, and big data processing using
                Apache Spark and Kafka. Adept at integrating AI models into
                production environments, ensuring high-performance and scalable
                ML solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
