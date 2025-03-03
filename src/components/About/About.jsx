import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

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
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Python Developer</h3>
              <p>
                Dedicated Python Developer with over 4 years of experience
                designing, building, and deploying robust backend systems.
                Expert in frameworks such as Django and Flask, with deep
                proficiency in RESTful API development and cloud integrations
                (AWS, Docker, Kubernetes).
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Engineer</h3>
              <p>
                Skilled in integrating backend logic with modern front-end
                frameworks to deliver comprehensive solutions. Proven track
                record in enhancing system performance, optimizing code quality,
                and driving scalable software delivery in Agile environments.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
