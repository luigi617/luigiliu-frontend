// DescriptionSkillsSection.tsx
import React from 'react';
import styles from '../css/About-Work-DescriptionSkillsSection.module.scss';

interface Skill {
  name: string;
  level: number; // Percentage (0-100)
}

interface DescriptionSkillsSectionProps {
  description: React.ReactNode;
  skills: Skill[];
}

const DescriptionSkillsSection: React.FC<DescriptionSkillsSectionProps> = ({ description, skills }) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.descriptionColumn}>
        {description}
      </div>
      <div className={styles.skillsColumn}>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              <span className={styles.skillName}>{skill.name}</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className={styles.skillLevel}>{skill.level}%</span>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default DescriptionSkillsSection;
