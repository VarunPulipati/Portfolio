import React, { useState, useEffect } from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  // State to hold the active skills
  const [activeSkills, setActiveSkills] = useState([]);

  // Effect to randomly update active skills
  useEffect(() => {
    const shuffleSkills = () => {
      // Create a shuffled copy of the skills array
      const shuffledSkills = [...skills].sort(() => 0.5 - Math.random());
      // Choose 2 or 3 skills to show
      setActiveSkills(
        shuffledSkills.slice(0, Math.floor(Math.random() * 2) + 2)
      );
    };

    // Initial shuffle
    shuffleSkills();

    // Interval to shuffle skills every 3 seconds
    const intervalId = setInterval(shuffleSkills, 3000);

    // Clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>{skills.map((skill, id) => {})}</div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
