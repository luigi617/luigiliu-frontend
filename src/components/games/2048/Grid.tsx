// src/components/games/2048/Grid.tsx

import React from 'react';
import Tile from './Tile';
import styles from '../../../css/games/2048/Grid.module.scss';

interface TileType {
  id: string;
  value: number;
  position: [number, number];
  previousPosition?: [number, number];
}

interface GridProps {
  tiles: TileType[];
  gridSize: number;
}

const Grid: React.FC<GridProps> = ({ tiles, gridSize }) => {
  const gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  const gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  const cells = [];
  for (let i = 0; i < gridSize * gridSize - tiles.length; i++) {
    cells.push(<div key={i} className={styles.cell} />);
  }

  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
      }}
    >
      {cells}
      {tiles.map(tile => (
        <Tile
          key={tile.id}
          value={tile.value}
          position={tile.position}
          isMerged={tile.previousPosition ? true : false}
        />
      ))}
    </div>
  );
};

export default Grid;
