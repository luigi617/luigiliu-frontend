import React from 'react';
import styles from '../../../css/games/typing/Statistics.module.scss';

interface StatisticsProps {
  wpm: string;
  netWpm: string;
  accuracy: string;
}

const Statistics: React.FC<StatisticsProps> = ({ wpm, netWpm, accuracy }) => {
  return (
    <div className={styles.statistics}>
      <div>WPM: <span>{wpm}</span></div>
      <div>Net WPM: <span>{netWpm}</span></div>
      <div>Accuracy: <span>{accuracy}</span></div>
    </div>
  );
};

export default Statistics;
