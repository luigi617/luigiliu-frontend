import React from 'react';
import styles from '../css/About-Education-RowComponent.module.scss'

interface RowComponentProps {
  text: React.ReactNode;
  imageSrc: string;
  reverse?: boolean;
}

const TextImageRowComponent: React.FC<RowComponentProps> = ({ text, imageSrc, reverse = false }) => {
  return (
    <div className={`${styles.rowComponent} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.textSection}>
        {text}
      </div>
      <div className={styles.imageSection}>
        <img src={imageSrc} alt="Row visual" className={styles.image} />
      </div>
    </div>
  );
};

export default TextImageRowComponent;
