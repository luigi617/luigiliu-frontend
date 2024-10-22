import React from 'react';
import styles from '../css/Footer.module.scss';
import Spacer from './Spacer';

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <Spacer height={20} background_color='var(--theme-navbar-background)' />
      <div className={styles.footerContentContainer}>
        <p>
          Still not satisfied? Hit me up on{' '}
          <a href='https://www.linkedin.com/in/luigi401/'
            className={styles.externalLink}
            target='_blank'
            rel='noopener noreferrer'>
            LinkedIn
          </a>{' '}
          or{' '}
          <a href='https://www.instagram.com/luigi_617/'
            className={styles.externalLink}
            target='_blank'
            rel='noopener noreferrer'>
            Instagram
          </a>.
        </p>
      </div>
      <Spacer height={50} background_color='var(--theme-navbar-background)' />
    </div>
  );
};

export default Footer;
