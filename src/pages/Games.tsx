import React from 'react';
import GameCard from '../components/GameCard';
import testImage from '../assets/images/ds.jpg';
import styles from '../css/Games.module.scss'

const Games: React.FC = () => {
  return (
    <div className={styles.gameContainer}>
        <div className={styles.gameGrid}>
            <GameCard
            image={testImage}
            title="Awesome Game Title"
            />
            <GameCard
            image={testImage}
            title="Awesome Game Title"
            />
            <GameCard
            image={testImage}
            title="Awesome Game Title"
            />
        </div>
    </div>
  );
};

export default Games;
