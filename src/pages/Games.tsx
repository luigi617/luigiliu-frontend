import React from 'react';
import GameCard from '../components/GameCard';
import game2048Image from '../assets/images/2048_logo.png';
import typingImage from '../assets/images/typing.jpg';
import styles from '../css/Games.module.scss'

const Games: React.FC = () => {
  return (
    <div className={styles.gameContainer}>
        <div className={styles.gameGrid}>
            <GameCard
            image={game2048Image}
            title="2048"
            url='/games/2048'
            />
            <GameCard
            image={typingImage}
            title="Typing"
            url='/games/typing'
            />
        </div>
    </div>
  );
};

export default Games;
