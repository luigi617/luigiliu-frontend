
import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from '../../css/games/2048/Game2048.module.scss';
import Grid from '../../components/games/2048/Grid';
import { v4 as uuidv4 } from 'uuid';

interface TileType {
  id: string;
  value: number;
  position: [number, number];
  previousPosition?: [number, number];
}


const getRandomEmptyCell = (tiles: TileType[], gridSize: number): [number, number] | null => {
  const occupiedPositions = tiles.map(tile => tile.position.toString());
  const emptyCells: [number, number][] = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (!occupiedPositions.includes([row, col].toString())) {
        emptyCells.push([row, col]);
      }
    }
  }
  if (emptyCells.length > 0) {
    const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    return [row, col];
  }
  return null;
};

const addRandomTile = (tiles: TileType[], gridSize: number): TileType[] => {
  const cell = getRandomEmptyCell(tiles, gridSize);
  if (cell) {
    const [row, col] = cell;
    const newTile: TileType = {
      id: uuidv4(),
      value: Math.random() < 0.9 ? 2 : 4,
      position: [row, col],
    };
    return [...tiles, newTile];
  }
  return tiles;
};

const initializeTiles = (gridSize: number): TileType[] => {
  let tiles: TileType[] = [];
  tiles = addRandomTile(tiles, gridSize);
  tiles = addRandomTile(tiles, gridSize);
  return tiles;
};

const checkGameOver = (tiles: TileType[], gridSize: number): boolean => {
  if (getRandomEmptyCell(tiles, gridSize)) return false;

  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
  tiles.forEach(tile => {
    grid[tile.position[0]][tile.position[1]] = tile.value;
  });

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize - 1; col++) {
      if (grid[row][col] === grid[row][col + 1]) {
        return false;
      }
    }
  }

  for (let col = 0; col < gridSize; col++) {
    for (let row = 0; row < gridSize - 1; row++) {
      if (grid[row][col] === grid[row + 1][col]) {
        return false;
      }
    }
  }

  return true;
};

const checkGameWon = (tiles: TileType[]): boolean => {
  return tiles.some(tile => tile.value >= 2048);
};

const moveLeft = (
  tiles: TileType[],
  gridSize: number,
  setScore: React.Dispatch<React.SetStateAction<number>>
): TileType[] => {
  const grid: number[][] = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
  tiles.forEach(tile => {
    grid[tile.position[0]][tile.position[1]] = tile.value;
  });

  let newScore = 0;
  const newGrid: number[][] = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));

  for (let row = 0; row < gridSize; row++) {
    let current = grid[row].filter(val => val !== 0);
    for (let col = 0; col < current.length; col++) {
      if (current[col] === current[col + 1]) {
        current[col] *= 2;
        newScore += current[col];
        current[col + 1] = 0;
      }
    }
    current = current.filter(val => val !== 0);
    while (current.length < gridSize) {
      current.push(0);
    }
    newGrid[row] = current;
  }

  setScore(prev => prev + newScore);

  const newTiles: TileType[] = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (newGrid[row][col] !== 0) {
        newTiles.push({
          id: uuidv4(),
          value: newGrid[row][col],
          position: [row, col],
        });
      }
    }
  }

  return newTiles;
};

const moveRight = (
  tiles: TileType[],
  gridSize: number,
  setScore: React.Dispatch<React.SetStateAction<number>>
): TileType[] => {
  const grid: number[][] = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
  tiles.forEach(tile => {
    grid[tile.position[0]][tile.position[1]] = tile.value;
  });

  let newScore = 0;
  const newGrid: number[][] = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));

  for (let row = 0; row < gridSize; row++) {
    let current = grid[row].filter(val => val !== 0).reverse();
    for (let col = 0; col < current.length; col++) {
      if (current[col] === current[col + 1]) {
        current[col] *= 2;
        newScore += current[col];
        current[col + 1] = 0;
      }
    }
    current = current.filter(val => val !== 0);
    while (current.length < gridSize) {
      current.push(0);
    }
    newGrid[row] = current.reverse();
  }

  setScore(prev => prev + newScore);

  const newTiles: TileType[] = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (newGrid[row][col] !== 0) {
        newTiles.push({
          id: uuidv4(),
          value: newGrid[row][col],
          position: [row, col],
        });
      }
    }
  }

  return newTiles;
};

const moveUp = (
  tiles: TileType[],
  gridSize: number,
  setScore: React.Dispatch<React.SetStateAction<number>>
): TileType[] => {
  const grid: number[][] = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
  tiles.forEach(tile => {
    grid[tile.position[0]][tile.position[1]] = tile.value;
  });

  let newScore = 0;
  const newGrid: number[][] = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));

  for (let col = 0; col < gridSize; col++) {
    let current = [];
    for (let row = 0; row < gridSize; row++) {
      if (grid[row][col] !== 0) {
        current.push(grid[row][col]);
      }
    }
    for (let row = 0; row < current.length; row++) {
      if (current[row] === current[row + 1]) {
        current[row] *= 2;
        newScore += current[row];
        current[row + 1] = 0;
      }
    }
    current = current.filter(val => val !== 0);
    while (current.length < gridSize) {
      current.push(0);
    }
    for (let row = 0; row < gridSize; row++) {
      newGrid[row][col] = current[row];
    }
  }

  setScore(prev => prev + newScore);

  const newTiles: TileType[] = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (newGrid[row][col] !== 0) {
        newTiles.push({
          id: uuidv4(),
          value: newGrid[row][col],
          position: [row, col],
        });
      }
    }
  }

  return newTiles;
};

const moveDown = (
  tiles: TileType[],
  gridSize: number,
  setScore: React.Dispatch<React.SetStateAction<number>>
): TileType[] => {
  const grid: number[][] = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));
  tiles.forEach(tile => {
    grid[tile.position[0]][tile.position[1]] = tile.value;
  });

  let newScore = 0;
  const newGrid: number[][] = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));

  for (let col = 0; col < gridSize; col++) {
    let current = [];
    for (let row = gridSize - 1; row >= 0; row--) {
      if (grid[row][col] !== 0) {
        current.push(grid[row][col]);
      }
    }
    for (let row = 0; row < current.length; row++) {
      if (current[row] === current[row + 1]) {
        current[row] *= 2;
        newScore += current[row];
        current[row + 1] = 0;
      }
    }
    current = current.filter(val => val !== 0);
    while (current.length < gridSize) {
      current.push(0);
    }
    for (let row = 0; row < gridSize; row++) {
      newGrid[gridSize - 1 - row][col] = current[row];
    }
  }

  setScore(prev => prev + newScore);

  const newTiles: TileType[] = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (newGrid[row][col] !== 0) {
        newTiles.push({
          id: uuidv4(),
          value: newGrid[row][col],
          position: [row, col],
        });
      }
    }
  }

  return newTiles;
};

const Game2048: React.FC = () => {
  const [gridSize, setGridSize] = useState<number>(4);
  const [tiles, setTiles] = useState<TileType[]>(initializeTiles(4));
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);

  // Refs to store touch positions
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const minSwipeDistance = 50; // Minimum distance (px) for a swipe to be considered

  const performMove = useCallback(
    (direction: 'left' | 'right' | 'up' | 'down') => {
      if (gameOver || gameWon) return;

      let newTiles: TileType[] = [];
      if (direction === 'left') {
        newTiles = moveLeft(tiles, gridSize, setScore);
      } else if (direction === 'right') {
        newTiles = moveRight(tiles, gridSize, setScore);
      } else if (direction === 'up') {
        newTiles = moveUp(tiles, gridSize, setScore);
      } else if (direction === 'down') {
        newTiles = moveDown(tiles, gridSize, setScore);
      } else {
        return;
      }

      const tilesString = (arr: TileType[]) =>
        arr
          .map(tile => `${tile.value}-${tile.position}`)
          .sort()
          .join(',');

      if (tilesString(newTiles) !== tilesString(tiles)) {
        const updatedTiles = addRandomTile(newTiles, gridSize);
        setTiles(updatedTiles);

        if (checkGameWon(updatedTiles)) {
          setGameWon(true);
        } else if (checkGameOver(updatedTiles, gridSize)) {
          setGameOver(true);
        }
      }
    },
    [tiles, gameOver, gameWon, gridSize]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      let direction: 'left' | 'right' | 'up' | 'down' | null = null;

      if (e.key === 'ArrowLeft') {
        direction = 'left';
      } else if (e.key === 'ArrowRight') {
        direction = 'right';
      } else if (e.key === 'ArrowUp') {
        direction = 'up';
      } else if (e.key === 'ArrowDown') {
        direction = 'down';
      } else {
        return;
      }

      if (direction) {
        e.preventDefault(); // Prevent default scrolling
        performMove(direction);
      }
    },
    [performMove]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const resetGame = (size: number) => {
    setTiles(initializeTiles(size));
    setScore(0);
    setGameOver(false);
    setGameWon(false);
  };

  const handleGridSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = parseInt(e.target.value, 10);
    setGridSize(newSize);
    resetGame(newSize);
  };

  // Ref for the game container
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartX.current = touch.clientX;
      touchStartY.current = touch.clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      touchEndX.current = touch.clientX;
      touchEndY.current = touch.clientY;
      handleSwipe();
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent scrolling
    };

    const handleSwipe = () => {
      const deltaX = touchEndX.current - touchStartX.current;
      const deltaY = touchEndY.current - touchStartY.current;

      if (Math.abs(deltaX) < minSwipeDistance && Math.abs(deltaY) < minSwipeDistance) {
        // Swipe too short
        return;
      }

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 0) {
          // Swipe right
          performMove('right');
        } else {
          // Swipe left
          performMove('left');
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          // Swipe down
          performMove('down');
        } else {
          // Swipe up
          performMove('up');
        }
      }
    };

    const container = gameContainerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: false });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
        container.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [performMove]);

  return (
    <div
      ref={gameContainerRef}
      className={styles.game2048Container}
      // Remove onTouchStart, onTouchEnd, onTouchMove from here
    >
      <div className={styles.game}>
        <header className={styles.header}>
          <h1>2048</h1>
          <div className={styles.score}>Score: {score}</div>
        </header>
        <header className={styles.header}>
          <select value={gridSize} onChange={handleGridSizeChange} className={styles.gridSizeSelect}>
            <option value={3}>3x3</option>
            <option value={4}>4x4</option>
            <option value={5}>5x5</option>
            <option value={6}>6x6</option>
          </select>
          <button onClick={() => resetGame(gridSize)} className={styles.newGameButton}>
            New Game
          </button>
        </header>
        <Grid tiles={tiles} gridSize={gridSize} />
        {gameWon && (
          <div className={styles.overlay}>
            <div className={styles.message}>
              <h2>Congratulations! You won!</h2>
              <button onClick={() => resetGame(gridSize)} className={styles.restartButton}>
                Play Again
              </button>
            </div>
          </div>
        )}
        {gameOver && (
          <div className={styles.overlay}>
            <div className={styles.message}>
              <h2>Game Over!</h2>
              <button onClick={() => resetGame(gridSize)} className={styles.restartButton}>
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game2048;
