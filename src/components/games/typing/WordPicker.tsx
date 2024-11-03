import React from 'react';
import styles from '../../../css/games/typing/WordPicker.module.scss';

interface WordPickerProps {
  wordsNum: number;
  setWordsNum: (num: number) => void;
}

const WordPicker: React.FC<WordPickerProps> = ({ wordsNum, setWordsNum }) => {
  const handleWordsNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWordsNum(parseInt(e.target.value, 10));
  };

  return (
    <div className={styles.wordPicker}>
      <label>
        Words: <span>{wordsNum}</span>
      </label>
      <input
        type="range"
        min="1"
        max="50"
        step="1"
        value={wordsNum}
        onChange={handleWordsNumChange}
      />
    </div>
  );
};

export default WordPicker;
