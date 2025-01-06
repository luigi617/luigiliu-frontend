import React from 'react';
import GameCard from '../components/GameCard';
import game2048Image from '../assets/images/games/2048_logo.png';
import typingImage from '../assets/images/games/typing.jpg';
import restaurantsImage from '../assets/images/games/restaurants.webp';
import tictactoeImage from '../assets/images/games/Tic_tac_toe.svg';
import nbaImage from '../assets/images/games/nba-logo.jpg';
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
            <GameCard
            image={nbaImage}
            title="NBA"
            url='/games/nba'
            />
        </div>
    </div>
  );
};

export default Games;
