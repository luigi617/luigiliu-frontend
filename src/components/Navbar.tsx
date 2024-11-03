import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.scss';
import { useTheme } from './ThemeContext';

import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";


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
        <Classic
          onToggle={toggleTheme}
          placeholder={null}
          onPointerEnterCapture={null}
          onPointerLeaveCapture={null}
          className={styles.themeDesktopToggle}
          duration={750}
          />
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
        <Classic
          onToggle={toggleTheme}
          placeholder={null}
          onPointerEnterCapture={null}
          onPointerLeaveCapture={null}
          className={styles.themeMobileToggle}
          />
      </div>
    </nav>
  );
};

export default Navbar;
