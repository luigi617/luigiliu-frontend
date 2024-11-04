import React from 'react';
import styles from '../css/Home-Game.module.scss'
import GameCard from './GameCard';

import game2048Image from '../assets/images/2048_logo.png';
import typingImage from '../assets/images/typing.jpg';
import tictactoeImage from '../assets/images/Tic_tac_toe.svg';
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
            image={game2048Image}
            title="2048"
            url='/games/2048'
            />
            <GameCard
            image={typingImage}
            title="Typing"
            url='/games/typing'
            />
            <GameCard
            image={tictactoeImage}
            title="TicTacToe"
            url='/games/tictactoe'
            />
        </div>
      </div>
    </div>
  );
};

export default HomeGame;
