import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.scss';
import { useTheme } from './ThemeContext';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleTheme, isLightTheme } = useTheme(); // Use the global theme from ThemeContext

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
        LUIGILIU.COM
      </Link>

      {/* Navigation Links */}
      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
        <Link to="/about" onClick={closeMobileMenu}>About</Link>
        <Link to="/articles" onClick={closeMobileMenu}>Articles</Link>
        <Link to="/games" onClick={closeMobileMenu}>Games</Link>
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className={styles.themeDesktopToggle}>
          {isLightTheme() ? '🌙 ' : '☀️'}
        </button>
      </div>

      {/* Hamburger Menu */}
      <div className={styles.mobileMenu}>
        <div
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : styles.closed}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`${styles.iconBar} ${styles.topBar}`}></span>
          <span className={`${styles.iconBar} ${styles.middleBar}`}></span>
          <span className={`${styles.iconBar} ${styles.bottomBar}`}></span>
        </div>
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className={styles.themeMobileToggle}>
          {isLightTheme() ? '🌙 ' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
