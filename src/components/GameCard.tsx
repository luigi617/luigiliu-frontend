import React from 'react';
import styles from '../css/GameCard.module.scss';
import { Link } from 'react-router-dom';

interface GameCardProps {
  image: string;
  title: string;
  url: string;
}

const GameCard: React.FC<GameCardProps> = ({ image, title, url }) => {
  return (
    <Link to={url} className={styles.gameLink}>
      <div className={styles.gameCard}>
        <img src={image} alt={title} className={styles.gameImage} />
        <h3 className={styles.gameTitle}>{title}</h3>
      </div>
    </Link>
  );
};

export default GameCard;
