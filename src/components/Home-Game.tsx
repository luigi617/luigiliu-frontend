import React from 'react';
import styles from '../css/Home-Game.module.scss'

import testImage from '../assets/images/ds.jpg';
import GameCard from './GameCard';
import { Link } from 'react-router-dom';


const HomeGame: React.FC = () => {
  return (
    <div className={styles.homeGameContainer}>
      <div className={styles.gameListContainer}>
      <div className={styles.pageTitleContainer}>
        <h1 className={styles.pageTitle}>Interactive Showcase of Algorithms.</h1>
        <Link to="/games">discover more</Link>
      </div>
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
