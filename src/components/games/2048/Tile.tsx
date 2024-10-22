// src/components/games/2048/Tile.tsx

import React, { useEffect, useState } from 'react';
import styles from '../../../css/games/2048/Tile.module.scss';

interface TileProps {
  value: number;
  position: [number, number];
  isMerged?: boolean;
}

const Tile: React.FC<TileProps> = ({ value, position, isMerged }) => {
  const [merged, setMerged] = useState(false);

  useEffect(() => {
    if (isMerged) {
      setMerged(true);
      const timer = setTimeout(() => setMerged(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isMerged]);

  const getClass = () => {
    let classes = `${styles.tile} ${styles[`tile-${value}`]}`;
    if (merged) {
      classes += ` ${styles.merged}`;
    }
    return classes;
  };

  const gridRow = position[0] + 1;
  const gridColumn = position[1] + 1;
  return (
    <div
      className={getClass()}
      style={{
        gridRow: gridRow,
        gridColumn: gridColumn,
      }}
    >
      {value !== 0 ? value : ''}
    </div>
  );
};

export default Tile;
