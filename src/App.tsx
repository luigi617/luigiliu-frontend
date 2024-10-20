import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
