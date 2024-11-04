

import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import styles from '../../../css/games/tictactoe/TicTacToe.module.scss'
import customAxios from '../../../utils/CustomAxios';

type BoardState = number[]; // Array of integers representing the board (0 = empty, 1 = agent, -1 = opponent)
type GameResult = 'win' | 'lose' | 'draw' | 'continue';

const HumanPlayerSymbol = 1;
const AgentSymbol = -1;


const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(0));
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [isAgentTurn, setIsAgentTurn] = useState(false);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    setBoard(Array(9).fill(0));
    setGameResult(null);
    setIsAgentTurn(false);
  };

  const checkWin = (board: BoardState, player: number): boolean => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    return winningCombinations.some(combination =>
      combination.every(index => board[index] === player)
    );
  };
  
  const checkDraw = (board: BoardState): boolean => {
    return board.every(cell => cell !== 0);
  };


  const handleCellClick = async (index: number) => {
    
    if (board[index] !== 0 || isAgentTurn || gameResult) return;

    const newBoard = [...board];
    newBoard[index] = HumanPlayerSymbol;
    setBoard(newBoard);

    const result = takeAction(newBoard, index, HumanPlayerSymbol);
    if (result === 'continue') {
      setIsAgentTurn(true);
      agentMove(newBoard);
    } else {
      setGameResult(result);
    }
  };

  const agentMove = async (currentBoard: BoardState) => {
    try {
      const response = await customAxios.post('/tic-tac-toe/get-next-action/', {
        state: currentBoard.join('|'),
        available_actions: currentBoard.map((cell, idx) => (cell === 0 ? idx : null)).filter(Number.isInteger),
      });
      const agentAction = response.data.next_action;
      
      const newBoard = [...currentBoard];
      newBoard[agentAction] = AgentSymbol;
      setBoard(newBoard);

      const result = takeAction(newBoard, agentAction, AgentSymbol);
      
      if (result === 'continue') {
        setIsAgentTurn(false);
      } else {
        setGameResult(result);
      }
    } catch (error) {
      console.error('Failed to get agent action:', error);
    }
  };

  const takeAction = (currentBoard: BoardState, action: number, player: number): GameResult => {
    const newBoard = [...currentBoard];
    newBoard[action] = player;
    setBoard(newBoard);
  
    if (checkWin(newBoard, player)) {
      return player === -1 ? 'win' : 'lose';
    } else if (checkDraw(newBoard)) {
      return 'draw';
    } else {
      return 'continue';
    }
  };

  const handleRestart = () => {
    startGame();
  };

  return (
    <div className={styles.ticTacToe}>
      <h2 className={styles.title}>Tic-Tac-Toe</h2>
      <Grid board={board} onCellClick={handleCellClick} isGameOver={!!gameResult} />
      {gameResult && (
        <div className={styles.result}>
          <h3>Game Result: {gameResult === 'win' ? 'Agent Wins!' : gameResult === 'lose' ? 'You Win!' : 'Draw!'}</h3>
          <button onClick={handleRestart}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
