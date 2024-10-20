import React from 'react';
import styles from '../css/Spacer.module.scss'
interface SpacerProps {
  height?: string | number; // Optional height
  width?: string | number;  // Optional width
}

const Spacer: React.FC<SpacerProps> = ({ height = 0, width = 0 }) => {
  return (
    <div className={styles.spacer}
      style={{
        height,
        width
      }}
    />
  );
};

export default Spacer;
