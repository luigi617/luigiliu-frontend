import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import Articles from './pages/Articles';
import Game2048 from './pages/Game-2048';
import GameTyping from './pages/Game-Typing';
import ArticleHumanActivityRecognitionUsingObjectDetection from './pages/articles/HumanActivityRecognitionUsingObjectDetection';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/games/*" element={<Games />} />
          <Route path="/games/2048/*" element={<Game2048 />} />
          <Route path="/games/typing/*" element={<GameTyping />} />
          <Route path="/articles/*" element={<Articles />} />
          <Route path="/articles/human-activity-recognition-using-object-detection/*"
                element={<ArticleHumanActivityRecognitionUsingObjectDetection />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
