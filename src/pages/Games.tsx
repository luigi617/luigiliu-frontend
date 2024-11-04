import React from 'react';
import GameCard from '../components/GameCard';
import game2048Image from '../assets/images/2048_logo.png';
import typingImage from '../assets/images/typing.jpg';
import styles from '../css/Games.module.scss'
import restaurantsImage from '../assets/images/restaurants.webp';
import tictactoeImage from '../assets/images/Tic_tac_toe.svg';

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
            <GameCard
            image={restaurantsImage}
            title="Nearby Restaurants"
            url='/games/nearby-restaurants'
            />
            <GameCard
            image={tictactoeImage}
            title="TicTacToe"
            url='/games/tictactoe'
            />
        </div>
    </div>
  );
};

export default Games;
