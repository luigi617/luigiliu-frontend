
import React from 'react';
import Cell from './Cell';
import styles from '../../../css/games/tictactoe/TicTacToe.module.scss';

interface GridProps {
  board: number[];
  onCellClick: (index: number) => void;
  isGameOver: boolean;
}

const Grid: React.FC<GridProps> = ({ board, onCellClick, isGameOver }) => {
  return (
    <div className={styles.grid}>
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onClick={() => onCellClick(index)}
          isDisabled={cell !== 0 || isGameOver} // Disable if cell is occupied or game over
        />
      ))}
    </div>
  );
};

export default Grid;
