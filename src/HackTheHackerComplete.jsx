import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import "./HackTheHackerComplete.css";

// Icons (placeholders; replace with actual icons if desired)
const Terminal = () => <span>🖥️</span>;
const Share2 = () => <span>📤</span>;
const ArrowLeft = () => <span>←</span>;
const Home = () => <span>🏠</span>;
const Back = () => <span>🔙</span>;

function HackTheHackerComplete() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setLoading(false);

    // Award badge and points if not already awarded
    const existingBadges = JSON.parse(localStorage.getItem("userBadges") || "[]");
    if (!existingBadges.includes("master_hacker")) {
      localStorage.setItem("userBadges", JSON.stringify([...existingBadges, "master_hacker"]));

      // Update user points
      const currentPoints = Number.parseInt(localStorage.getItem("userPoints") || "0");
      localStorage.setItem("userPoints", (currentPoints + 600).toString());
    }
  }, []);

 

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <Terminal className="loading-icon" />
          <h1 className="loading-text">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="hack-the-hacker-complete">
      <div className="complete-container">
        <div className="complete-card">
          <div className="card-header">
            <div className="icon-container">
              <Terminal className="terminal-icon" />
            </div>
            <h1 className="card-title">Mission Accomplished!</h1>
            <p className="card-subtitle">You've successfully completed all hacking challenges</p>
          </div>
          <div className="card-content">
            <div className="achievement-box">
              <div className="achievement-label">Achievement</div>
              <div className="achievement-title">Master Hacker</div>
            </div>
            <div className="skills-box">
              <div className="skills-title">Skills Acquired</div>
              <ul className="skills-list">
                <li>Command Line Investigation</li>
                <li>Cryptography & Decryption</li>
                <li>Steganography</li>
                <li>Network Traffic Analysis</li>
                <li>Security Configuration</li>
              </ul>
              <div className="points-text">+600 points added to your profile</div>
            </div>
          </div>
          <div className="card-footer">
            <div className="action-buttons">
              <button onClick={() => navigate(-1)} className="go-back-btn">
                <Back className="btn-icon" />
                Go Back
              </button>
              <Link to="/games/hack-hacker" className="play-again-btn">
                <ArrowLeft className="btn-icon" />
                Play Again
              </Link>
              <Link to="/" className="home-btn">
                <Home className="btn-icon" />
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackTheHackerComplete;