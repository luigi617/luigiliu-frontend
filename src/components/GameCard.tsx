import React from 'react';
import styles from '../css/GameCard.module.scss';

interface GameCardProps {
  image: string;
  title: string;
}

const GameCard: React.FC<GameCardProps> = ({ image, title }) => {
  return (
    <div className={styles.gameCard}>
      <img src={image} alt={title} className={styles.gameImage} />
      <h3 className={styles.gameTitle}>{title}</h3>
    </div>
  );
};

export default GameCard;
