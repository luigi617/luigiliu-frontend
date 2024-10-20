// MovingText.tsx
import React, { useEffect, useRef } from 'react';
import styles from '../css/MovingText.module.scss';

interface MovingTextProps {
  text: string;
}

const MovingText: React.FC<MovingTextProps> = ({ text }) => {
  const movingTextRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    if (movingTextRef.current && containerRef.current) {
      const textWidth = movingTextRef.current.offsetWidth;
      const containerWidth = containerRef.current.offsetWidth;

      const duration = 15000;

      const keyframes = [
        { transform: `translateX(${containerWidth}px)` },
        { transform: `translateX(${-textWidth}px)` },
      ];

      const timing = {
        duration: duration,
        iterations: Infinity,
        easing: 'linear',
      };

      const animation = movingTextRef.current.animate(keyframes, timing);
      animationRef.current = animation;
    }
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.updatePlaybackRate(0.3); // Slow down to 30% speed
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.updatePlaybackRate(1); // Reset to normal speed
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.movingTextContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={movingTextRef} className={styles.movingText}>
        {text}
      </span>
    </div>
  );
};

export default MovingText;
