import React from 'react';
import styles from '../css/Home-Game.module.scss'

import testImage from '../assets/images/ds.jpg';
import GameCard from './GameCard';


const HomeGame: React.FC = () => {
  return (
    <div className={styles.homeGameContainer}>
      <div className={styles.gameListContainer}>
        <h1 className={styles.pageTitle}>Interactive Showcase of Algorithms.</h1>
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
    </div>
  );
};

export default HomeGame;
