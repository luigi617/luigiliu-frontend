

import React from 'react';
import styles from '../../../css/games/tictactoe/TicTacToe.module.scss';

interface CellProps {
  value: number;
  onClick: () => void;
  isDisabled: boolean;
}

const Cell: React.FC<CellProps> = ({ value, onClick, isDisabled }) => {
  const displayValue = value === 1 ? 'X' : value === -1 ? 'O' : '';
  
  return (
    <button className={styles.cell} onClick={onClick} disabled={isDisabled}>
      {displayValue}
    </button>
  );
};

export default Cell;
