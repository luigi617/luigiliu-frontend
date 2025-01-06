import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import Articles from './pages/Articles';
import Game2048 from './pages/games/2048';
import GameTyping from './pages/games/Typing';
import ArticleHumanActivityRecognitionUsingObjectDetection from './pages/articles/HumanActivityRecognitionUsingObjectDetection';
import ScrollToTop from './components/ScrollToTop';
import NearbyRestaurants from './pages/games/NearbyRestaurants';
import TicTacToe from './pages/games/TicTacToe';
import NBA from './pages/games/NBA';
import { fetchCsrfToken } from './utils/CustomAxios';
import RealGestureX from './pages/articles/RealGestureX';



const RemoveTrailingSlash: React.FC = () => {
  const location = useLocation();
  if (location.pathname.endsWith('/') && location.pathname !== '/') {
    return <Navigate to={location.pathname.slice(0, -1)} replace />;
  }
  return null;
};


const gooleMapKey = import.meta.env.VITE_GOOGLE_MAP_NEARBY_SEARCH_KEY;

const App: React.FC = () => {

  useEffect(() => {
    fetchCsrfToken();
  }, []);
  
  return (
    <Router>
      <RemoveTrailingSlash />
      <ScrollToTop />
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/2048" element={<Game2048 />} />
          <Route path="/games/typing" element={<GameTyping />} />
          <Route path="/games/tictactoe" element={<TicTacToe />} />
          <Route path="/games/nearby-restaurants" element={<NearbyRestaurants apiKey={gooleMapKey} />} />
          <Route path="/games/nba" element={<NBA />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/human-activity-recognition-using-object-detection"
                element={<ArticleHumanActivityRecognitionUsingObjectDetection />} />
          <Route path="/articles/realgesturex"
                element={<RealGestureX />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
