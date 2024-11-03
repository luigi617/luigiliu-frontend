

import React, { useState, useEffect, useCallback } from 'react';
import styles from '../css/games/typing/Typing.module.scss'
import TypingInput from '../components/games/typing/TypingInput';
import WordPicker from '../components/games/typing/WordPicker';
import Statistics from '../components/games/typing/Statistics';
import wordsData from '../assets/json/english_words.json'


const GameTyping: React.FC = () => {
  const [wordsNum, setWordsNum] = useState(20);
  const [wpm, setWpm] = useState('--');
  const [netWpm, setNetWpm] = useState('--');
  const [accuracy, setAccuracy] = useState('--');
  const [generatedWords, setGeneratedWords] = useState<string[]>([]);
  const [charCount, setCharCount] = useState(0);
  const [wrongWordCount, setWrongWordCount] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  const generateWords = useCallback(() => {
    const shuffledWords = [...wordsData].sort(() => 0.5 - Math.random());
    const selectedWords = shuffledWords.slice(0, wordsNum);
    setGeneratedWords(selectedWords);
    setCharCount(selectedWords.join(' ').length);
    setWrongWordCount(0);
    setStartTime(null);
  }, [wordsNum]);

  useEffect(() => {
    generateWords();
  }, [generateWords]);

  const showStatistics = (grossWpm: number, netWpm: number, accuracy: number) => {
    setWpm(grossWpm.toFixed(2));
    setNetWpm(netWpm.toFixed(2));
    setAccuracy(accuracy.toFixed(2) + '%');
  };

  return (
    <div className={styles.typingContainer}>
      <div className={styles.game}>
        <div className={styles.gameInfo}>
            <WordPicker wordsNum={wordsNum} setWordsNum={setWordsNum} />
            <Statistics wpm={wpm} netWpm={netWpm} accuracy={accuracy} />
        </div>
        <div className={styles.typingArea}>
            <TypingInput
              words={generatedWords}
              charCount={charCount}
              wrongWordCount={wrongWordCount}
              setWrongWordCount={setWrongWordCount}
              showStatistics={showStatistics}
              startTime={startTime}
              setStartTime={setStartTime}
              setWordsNum={setWordsNum}
            />
        </div>
      </div>
    </div>
  );
};

export default GameTyping;
