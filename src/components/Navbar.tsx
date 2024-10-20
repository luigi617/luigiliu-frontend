import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.scss';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemPrefersDark ? 'dark' : 'light');
    document.body.className = systemPrefersDark ? 'dark' : 'light';
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; // Apply the new theme by changing the body class
  };

  useEffect(() => {
    document.body.className = theme; // Update the class on the body element
  }, [theme]);

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
        {/* <Link to="/login" onClick={closeMobileMenu}>Log In</Link> */}
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className={styles.themeDesktopToggle}>
          {theme === 'light' ? '🌙 ' : '☀️'}
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
          {theme === 'light' ? '🌙 ' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
