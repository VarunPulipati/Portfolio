import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../../../react-portfolio/src/utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutimage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineer</h3>
              <p>
                Adept in full-stack web development, demonstrated through the
                creation of advanced applications and websites, including a
                real-time data display and storage platform, with a strong
                foundation in both backend and frontend technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                Proficient in leveraging Python for data analytics and machine
                learning, with a track record of improving data processing
                efficiency by 40%, contributing to healthcare service
                enhancements, and authoring research on ergonomic challenges in
                AR, showcasing a deep understanding of statistical analysis and
                data visualization.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
