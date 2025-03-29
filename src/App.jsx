import React, { useState, useEffect } from 'react';
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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Function to toggle the mobile side navbar
  const toggleMobileNav = () => {
    console.log("Hamburger icon clicked, toggling mobile nav:", !isMobileNavOpen);
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Debug state updates
  useEffect(() => {
    console.log("isMobileNavOpen updated:", isMobileNavOpen);
  }, [isMobileNavOpen]);

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          {/* Logo */}
          <Link to="/" className="nav-logo">Hackify</Link>

          {/* Hamburger Menu (visible on mobile only) */}
          <button
            className="nav-toggle"
            onClick={toggleMobileNav}
            aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileNavOpen ? '✕' : '☰'}
          </button>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMobileNavOpen ? 'active' : ''}`}>
            <li>
              <button
                className="nav-close"
                onClick={() => setIsMobileNavOpen(false)}
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </li>
            <li><Link to="/" onClick={() => setIsMobileNavOpen(false)}>Home</Link></li>
            <li><Link to="/challenges" onClick={() => setIsMobileNavOpen(false)}>Challenges</Link></li>
            <li><Link to="/leaderboard" onClick={() => setIsMobileNavOpen(false)}>Leaderboard</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileNavOpen(false)}>About</Link></li>
            <li><Link to="/resources" onClick={() => setIsMobileNavOpen(false)}>Resources</Link></li>
          </ul>
        </nav>

        {/* Main Content Routes */}
        <main className="content">
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
        </main>
      </div>
    </Router>
  );
}

export default App;