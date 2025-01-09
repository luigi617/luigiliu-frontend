import React from 'react';
import GameCard from '../components/GameCard';
import game2048Image from '../assets/images/games/2048_logo.png';
import typingImage from '../assets/images/games/typing.jpg';
import restaurantsImage from '../assets/images/games/restaurants.webp';
import tictactoeImage from '../assets/images/games/Tic_tac_toe.svg';
import nbaImage from '../assets/images/games/nba-logo.jpg';
import styles from '../css/Games.module.scss'

import { isDesktop } from 'react-device-detect';

const games = [
  {
    image: game2048Image,
    title: "2048",
    url: '/games/2048',
    show: true
  },
  {
    image: typingImage,
    title: "Typing",
    url: '/games/typing',
    show: isDesktop
  },
  {
    image: restaurantsImage,
    title: "Nearby Restaurants",
    url: '/games/nearby-restaurants',
    show: true
  },
  {
    image: tictactoeImage,
    title: "TicTacToe",
    url: '/games/tictactoe',
    show: true
  },
  {
    image: nbaImage,
    title: "NBA",
    url: '/games/nba',
    show: true
  },
]

const visibleGames = games.filter(game => game.show);

const Games: React.FC = () => {
  return (
    <div className={styles.gameContainer}>
        <div className={styles.gameGrid}>
          {visibleGames && visibleGames.map((game, index) => (
            <GameCard
            key={index}
            image={game.image}
            title={game.title}
            url={game.url}
            />
          ))}
           
        </div>
    </div>
  );
};

export default Games;
