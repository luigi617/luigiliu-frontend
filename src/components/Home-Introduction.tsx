import React from 'react';
import CustomButton from './CustomButton';
import styles from '../css/Home-Introduction.module.scss';
import profileLightImage from '../assets/images/home.png';
import profileDarkImage from '../assets/images/home-dark.png';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const HomeIntroduction: React.FC = () => {
  const navigate = useNavigate();
  const { isLightTheme } = useTheme(); // Use the global theme from ThemeContext
  const profileImage = isLightTheme() ? profileLightImage : profileDarkImage;

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div className={styles.homeIntroductionContainer}>
      <div className={styles.luigiLiuContainer}>
        <img className={styles.profileImage} src={profileImage} alt="Luigi Liu" />
        <hr />
        {/* Subtitle */}
        <p className={styles.subtitle}>
          TEST Student in Computer Science @ Columbia University, New York | Focusing on Software Development and Machine Learning
        </p>
        <hr />
        <div className={styles.aboutMeButtonContainer}>
          <CustomButton
            text="About Me"
            onClick={handleClick}
            className={styles.aboutMeButton}
          />
        </div>
      </div>

      {/* Scroll down for more */}
      <div className={styles.scrollDownContainer}>
        <p>Scroll down for more</p>
        <div className={styles.arrowDown}>&#8595;</div>
      </div>
    </div>
  );
};

export default HomeIntroduction;
