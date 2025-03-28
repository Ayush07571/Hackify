import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './PasswordChallenge.css';

const PasswordChallenge = () => {
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  const validatePassword = () => {
    let tempScore = 0;

    // Check length
    if (password.length >= 12) {
      tempScore += 20;
    } else if (password.length >= 8) {
      tempScore += 10;
    } else {
      setFeedback('Password is too short! Minimum length is 8 characters.');
      setScore(tempScore);
      return;
    }

    // Check for uppercase
    if (/[A-Z]/.test(password)) {
      tempScore += 20;
    } else {
      setFeedback('Password should include at least one uppercase letter.');
      setScore(tempScore);
      return;
    }

    // Check for lowercase
    if (/[a-z]/.test(password)) {
      tempScore += 20;
    } else {
      setFeedback('Password should include at least one lowercase letter.');
      setScore(tempScore);
      return;
    }

    // Check for numbers
    if (/\d/.test(password)) {
      tempScore += 20;
    } else {
      setFeedback('Password should include at least one number.');
      setScore(tempScore);
      return;
    }

    // Check for special characters
    if (/[!@#$%^&*]/.test(password)) {
      tempScore += 20;
    } else {
      setFeedback('Password should include at least one special character (!@#$%^&*).');
      setScore(tempScore);
      return;
    }

    // Final feedback for strong passwords
    setScore(tempScore);
    setFeedback('Great password! Your password score is ' + tempScore + '/100');
  };

  const handleRestart = () => {
    setPassword('');
    setFeedback('');
    setScore(0);
  };

  return (
    <div className="password-challenge">
      <h2>Password Strength Challenge</h2>
      <p>Create a password and test its strength.</p>
      <input
        type="text"
        className="password-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={validatePassword} className="validate-button">Test Password</button>
      {feedback && <p className="feedback">{feedback}</p>}
      <p>Your Score: {score} / 100</p>
      <button onClick={handleRestart} className="restart-button">Restart</button>
      <Link to="/" className="return-home">Return to Homepage</Link> {/* Align below Restart */}
    </div>
  );
};

export default PasswordChallenge;
