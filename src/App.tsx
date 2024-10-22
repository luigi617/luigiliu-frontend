import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import Articles from './pages/Articles';
import Game2048 from './pages/Game-2048';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/2048" element={<Game2048 />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
