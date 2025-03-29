import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Challenges from './Challenges';
import Leaderboard from './Leaderboard';
import About from './About';
import Resources from './Resources';
import SecurityQuiz from './SecurityQuiz';
import CyberEscapeRoom from './CyberEscapeRoom';
import PasswordChallenge from './PasswordChallenge';
import AttackSimulator from './AttackSimulator';
import HackTheHacker from './HackTheHacker';
import HackTheHackerComplete from './HackTheHackerComplete';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app">
        <h1 className="heading">Hello</h1>
        <nav className="navbar">
          <Link to="/" className="nav-logo">Hackify</Link>
          <button className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/challenges" onClick={toggleMenu}>Challenges</Link></li>
            <li><Link to="/leaderboard" onClick={toggleMenu}>Leaderboard</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/resources" onClick={toggleMenu}>Resources</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/games/security-quiz" element={<SecurityQuiz />} />
          <Route path="/games/escape-room" element={<CyberEscapeRoom />} />
          <Route path="/games/password-challenge" element={<PasswordChallenge />} />
          <Route path="/games/attack-sim" element={<AttackSimulator />} />
          <Route path="/games/hack-hacker" element={<HackTheHacker />} />
          <Route path="/games/hack-hacker/complete" element={<HackTheHackerComplete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
