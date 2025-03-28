import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Challenges.css';

const challenges = [
  {
    id: 1,
    title: 'Security Quiz',
    desc: 'Test your knowledge about social engineering attacks and threats.',
    icon: '../sx.png', // Icon file name in public/
    path: '/games/security-quiz',
    isNew: false,
    rules: 'Answer 10 questions within 60 seconds each. Correct answers earn 10 points. No penalties for wrong answers.',
  },
  {
    id: 2,
    title: 'Cyber Escape Room',
    desc: 'Solve puzzles to escape a hacker’s trap.',
    icon: '../escape-room-icon.png', // Icon file name in public/assets
    path: '/games/escape-room',
    isNew: false,
    rules: 'Solve 5 cybersecurity riddles. Each correct solution unlocks the next step. Finish within 15 minutes.',
  },
  {
    id: 3,
    title: 'Master the Passwords',
    desc: 'Learn how to create strong and secure passwords while testing your password strength.',
    icon: '../password-icon.png', // Icon file name in public/assets
    path: '/games/password-challenge',
    isNew: false,
    rules: 'Enter passwords to evaluate their strength. Learn tips for improving security. No time limit.',
  },
  {
    id: 4,
    title: 'Attack Simulator',
    desc: 'React to threats in real-time.',
    icon: '../attack-sim-icon.png', // Icon file name in public/assets
    path: '/games/attack-sim',
    isNew: false,
    rules: 'React to 10 different attack scenarios by choosing the correct action within 10 seconds. Earn 20 points for correct choices.',
  },
  {
    id: 5,
    title: 'Hack The Hacker',
    desc: 'Decrypt messages and analyze vulnerabilities.',
    icon: '../hack-the-hacker.png', // Icon file name in public/assets
    path: '/games/hack-hacker',
    isNew: false,
    rules: 'Decrypt 3 messages and identify vulnerabilities. Each task earns 30 points.',
  },
  {
    id: 6,
    title: 'Security Resources',
    desc: 'Access articles, tools, and guides to improve your cybersecurity knowledge.',
    icon: '../resources.png', // Icon file name in public/assets
    path: '/resources',
    isNew: false,
    rules: 'Explore resources and tools at your own pace. No points or scoring involved.',
  },
];

function Challenges() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const openPreview = (challenge) => setSelectedChallenge(challenge);
  const closePreview = () => setSelectedChallenge(null);

  return (
    <div className="challenges">
      <h2>Explore Challenges</h2>
      <div className="challenges-grid">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            {challenge.isNew && <span className="new-label">NEW</span>}
            <img src={`/assets/${challenge.icon}`} alt={challenge.title} className="challenge-icon" />
            <h3>{challenge.title}</h3>
            <p>{challenge.desc}</p>
            <div className="challenge-buttons">
              <button onClick={() => openPreview(challenge)} className="preview-btn">Preview</button>
              <Link to={challenge.path} className="start-btn">Start Challenge</Link>
            </div>
          </div>
        ))}
      </div>

      {selectedChallenge && (
        <div className="preview-modal">
          <div className="preview-content">
            <h3>{selectedChallenge.title}</h3>
            <p><strong>Description:</strong> {selectedChallenge.desc}</p>
            <p><strong>Rules:</strong> {selectedChallenge.rules}</p>
            <button onClick={closePreview} className="close-btn">Close</button>
            <Link to={selectedChallenge.path} className="start-btn">Start Now</Link>
            {/* <Link to={selectedChallenge.path} className="selectedChallenge-link">
              Start Challenge →
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Challenges;
