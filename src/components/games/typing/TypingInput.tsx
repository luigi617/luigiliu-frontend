import React, { useState, useEffect, useCallback } from 'react';
import styles from '../../../css/games/typing/TypingInput.module.scss';

interface TypingInputProps {
  words: string[];
  charCount: number;
  wrongWordCount: number;
  setWrongWordCount: React.Dispatch<React.SetStateAction<number>>;
  showStatistics: (grossWpm: number, netWpm: number, accuracy: number) => void;
  startTime: number | null;
  setStartTime: React.Dispatch<React.SetStateAction<number | null>>;
  setWordsNum: (num: number) => void;
}

const TypingInput: React.FC<TypingInputProps> = ({
  words,
  charCount,
  wrongWordCount,
  setWrongWordCount,
  showStatistics,
  startTime,
  setStartTime,
  setWordsNum
}) => {
  const [numberCurrentChar, setNumberCurrentChar] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [inputHistory, setInputHistory] = useState<{ char: string; isCorrect: boolean | null }[][]>([]);
  
  const get_word_with_space = useCallback((word: string, index: number) => (
    index === words.length - 1 ? word : word + ' '
  ), [words]);

  const resetGame = useCallback(() => {
    setInputHistory(
      words.map((word, wordIndex) =>
        get_word_with_space(word, wordIndex).split('').map((char) => ({ char, isCorrect: null }))
      )
    );
    setNumberCurrentChar(0);
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setWrongWordCount(0);
    setStartTime(null);
  }, [words, get_word_with_space, setStartTime, setWrongWordCount]);
  
  useEffect(() => {
    resetGame()
  }, [resetGame]);

  const get_display_char = useCallback((char: string) => (
    char === ' ' ? '\u00A0' : char
  ), []);
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        setWordsNum(words.length); // Trigger new game on Enter
        return;
      }
      if (currentWordIndex >= words.length){
        return;
      }
      const charCode = e.key;
      const currentWord = get_word_with_space(words[currentWordIndex], currentWordIndex);

      if (!startTime) setStartTime(performance.now());

      if (charCode === 'Backspace') {
        if (currentCharIndex > 0) {
          const newCharIndex = currentCharIndex - 1;
          setCurrentCharIndex(newCharIndex);
          if (inputHistory[currentWordIndex][newCharIndex].isCorrect === false) {
            setInputHistory((prev) => {
              const updatedHistory = [...prev];
            
              const currentWord = [...updatedHistory[currentWordIndex]];
              
              const updatedWord = [
                ...currentWord.slice(0, newCharIndex),
                ...currentWord.slice(newCharIndex + 1)
              ];
              updatedHistory[currentWordIndex] = updatedWord;
              return updatedHistory;
            });
            
          } else {
            setInputHistory((prev) => {
              const updatedHistory = [...prev];
              updatedHistory[currentWordIndex][newCharIndex].isCorrect = null;
              return updatedHistory;
            });
          }
        }
      }
      else if (charCode.length === 1) {
        const isCorrect = charCode === currentWord[currentCharIndex];
        const prevChar = inputHistory[currentWordIndex][currentCharIndex - 1]
        const canContinue = (prevChar === undefined) || (prevChar !== undefined && prevChar.isCorrect === true)
        if (isCorrect && canContinue) {
          setInputHistory((prev) => {
            const updatedHistory = [...prev];
            updatedHistory[currentWordIndex][currentCharIndex] = {
              char: currentWord[currentCharIndex],
              isCorrect: isCorrect,
            };
            return updatedHistory;
          });
          setNumberCurrentChar((val) => (val + 1));
          if (currentCharIndex + 1 === currentWord.length) {
            setCurrentWordIndex(currentWordIndex + 1);
            setCurrentCharIndex(0);
          } else {
            setCurrentCharIndex(currentCharIndex + 1);
          }
        } else {
          setInputHistory((prev) => {
            const updatedHistory = [...prev];
            const currentWord = [...updatedHistory[currentWordIndex]];
            const newCharObject = { char: charCode, isCorrect: false };
            const updatedWord = [
              ...currentWord.slice(0, currentCharIndex),
              newCharObject,
              ...currentWord.slice(currentCharIndex)
            ];
            updatedHistory[currentWordIndex] = updatedWord;
            return updatedHistory;
          });
          
          setCurrentCharIndex((prevIndex) => prevIndex + 1);
          setWrongWordCount((prev) => prev + 1);
        }

      }

      
      const timeElapsed = (performance.now() - startTime!) / 1000 / 60;
      const grossWpm = numberCurrentChar / 5 / timeElapsed;
      const netWpm = grossWpm - wrongWordCount / timeElapsed;
      const accuracy = Math.max(((numberCurrentChar - wrongWordCount) / numberCurrentChar) * 100, 0);
      showStatistics(grossWpm, netWpm, accuracy);
    },
    [
      numberCurrentChar,
      currentCharIndex,
      currentWordIndex,
      inputHistory,
      wrongWordCount,
      startTime,
      words,
      get_word_with_space,
      setStartTime,
      setWrongWordCount,
      showStatistics,
    ]
  );

  return (
    <div
      className={styles.typingInput}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {inputHistory.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className={styles.word}
        >
          {word.map((charObj, charIndex) => (
            <React.Fragment key={charIndex}>
              {/* {wordIndex === currentWordIndex && charIndex === currentCharIndex ? (
                <span className={styles.cursor}>|</span>
              ) : null} */}
              <span
                className={`
                  ${styles.charSpan}
                  ${charObj.isCorrect === null
                    ? ''
                    : charObj.isCorrect
                    ? styles.correctChar
                    : styles.wrongChar}
                  ${wordIndex === currentWordIndex && charIndex === currentCharIndex
                    ? styles.cursor : null
                  }
                `}
              >
                {get_display_char(charObj.char)}
              </span>
            </React.Fragment>
          ))}
        </span>
      ))}
    </div>
  );
};

export default TypingInput;
