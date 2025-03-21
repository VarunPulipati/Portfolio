import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      {/* 🔴 Source Code Button at Top Right */}
      {project.source && (
        <div className={styles.sourceCodeContainer}>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceCodeLink}
          >
            Source Code
          </a>
        </div>
      )}

      {/* Project Image */}
      <img
        src={getImageUrl(project.imageSrc)}
        alt={`Image of ${project.title}`}
        className={styles.image}
      />

      {/* Title */}
      <div className={styles.projectTitle}>{project.title}</div>

      {/* Description */}
      <p className={styles.projectDescription}>{project.description}</p>

      {/* Live Demo Button (if available) */}
      {project.demo && (
        <div className={styles.projectLinks}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink + " " + styles.demo}
          >
            Live Demo
          </a>
        </div>
      )}
    </div>
  );
};
