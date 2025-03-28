import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Challenges from './Challenges';
import Leaderboard from './Leaderboard';
import About from './About';
import Resources from './Resources';
import SecurityQuiz from './SecurityQuiz';
import CyberEscapeRoom from './CyberEscapeRoom';
import PasswordChallenge from './PasswordChallenge'; // Import Password Challenge
import AttackSimulator from './AttackSimulator';
import HackTheHacker from './HackTheHacker'; // Fixed typo in import
import HackTheHackerComplete from './HackTheHackerComplete';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/" className="nav-logo" >Hackify</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/challenges">Challenges</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resources">Resources</Link></li>
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
          <Route path="/games/password-challenge" element={<PasswordChallenge />} /> {/* Replaced CaptureTheFlag */}
          <Route path="/games/attack-sim" element={<AttackSimulator />} />
          <Route path="/games/hack-hacker" element={<HackTheHacker />} />
          <Route path="/games/hack-hacker/complete" element={<HackTheHackerComplete />} /> {/* Added route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
