import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './AttackSimulator.css';

const scenarios = [
  {
    id: 1,
    attackType: 'Phishing Email',
    description: 'You receive an email from "support@bank-secure.com" asking you to verify your account details.',
    options: ['Click the link', 'Ignore the email', 'Reply with account details', 'Report as phishing'],
    correctOption: 'Report as phishing',
    explanation: 'Always report phishing emails to protect yourself and others from cyber threats.',
  },
  {
    id: 2,
    attackType: 'Ransomware Infection',
    description: 'Your computer displays a message demanding payment to unlock your files.',
    options: ['Pay the ransom', 'Run antivirus', 'Shut down your computer', 'Call IT support'],
    correctOption: 'Run antivirus',
    explanation: 'Running antivirus can help detect and remove ransomware from your system.',
  },
  {
    id: 3,
    attackType: 'Suspicious Login',
    description: 'You notice multiple failed login attempts to your account.',
    options: ['Do nothing', 'Change your password', 'Share your credentials', 'Log out of all devices'],
    correctOption: 'Change your password',
    explanation: 'Changing your password immediately helps secure your account from unauthorized access.',
  },
  {
    id: 4,
    attackType: 'USB Drive Attack',
    description: 'You find an unmarked USB drive on your desk. What should you do?',
    options: ['Plug it in to check the contents', 'Ignore it', 'Give it to IT for analysis', 'Throw it away'],
    correctOption: 'Give it to IT for analysis',
    explanation: 'Unmarked USB drives may contain malicious software. Always let IT analyze them.',
  },
  {
    id: 5,
    attackType: 'Social Engineering Call',
    description: 'A caller pretending to be from IT support asks for your password to fix an issue.',
    options: ['Share the password', 'Hang up immediately', 'Confirm their identity', 'Ask them to send an email'],
    correctOption: 'Hang up immediately',
    explanation: 'Never share your password over the phone. Always report suspicious calls.',
  },
  // (Add more scenarios here to expand the pool...)
  {
    id: 6,
    attackType: 'Malware Download',
    description: 'You accidentally downloaded a suspicious file from an untrusted website.',
    options: ['Open the file', 'Delete the file', 'Run a virus scan', 'Restart your computer'],
    correctOption: 'Run a virus scan',
    explanation: 'Running a virus scan helps identify and remove any malicious software in the downloaded file.',
  },
  {
    id: 7,
    attackType: 'Shoulder Surfing',
    description: 'You notice someone looking over your shoulder while you type your password.',
    options: ['Ignore them', 'Cover your screen', 'Confront the person', 'Change your password later'],
    correctOption: 'Cover your screen',
    explanation: 'Covering your screen prevents unauthorized people from seeing sensitive information.',
  },
  {
    id: 8,
    attackType: 'Fake Software Update',
    description: 'A pop-up on your screen claims your software is outdated and prompts you to download an update.',
    options: ['Download and install the update', 'Ignore the pop-up', 'Verify the source of the update', 'Restart your computer'],
    correctOption: 'Verify the source of the update',
    explanation: 'It’s important to verify the source of the update to avoid downloading fake or malicious software.',
  },
  {
    id: 9,
    attackType: 'Unsecured Wi-Fi',
    description: 'You connect to public Wi-Fi at a coffee shop. What should you avoid doing?',
    options: ['Check your email', 'Log into your bank account', 'Browse social media', 'Download an attachment'],
    correctOption: 'Log into your bank account',
    explanation: 'Avoid performing sensitive actions like banking on public Wi-Fi as they can be intercepted by attackers.',
  },
  {
    id: 10,
    attackType: 'Outdated Software',
    description: 'Your operating system prompts you to install an important security update.',
    options: ['Ignore the update', 'Postpone the update', 'Install the update immediately', 'Ask IT for approval'],
    correctOption: 'Install the update immediately',
    explanation: 'Installing security updates promptly helps protect your system from known vulnerabilities.',
  },
  {
    id: 11,
    attackType: 'Tailgating',
    description: 'Someone follows you into a secure area without using their key card.',
    options: ['Let them in', 'Ask them to show their ID', 'Report it to security', 'Ignore them'],
    correctOption: 'Report it to security',
    explanation: 'Reporting tailgating ensures that unauthorized individuals do not access secure areas.',
  },
  {
    id: 12,
    attackType: 'Password Reuse',
    description: 'You are tempted to use the same password for multiple accounts. What should you do?',
    options: ['Use the same password', 'Use a password manager', 'Write passwords down on paper', 'Change all passwords weekly'],
    correctOption: 'Use a password manager',
    explanation: 'A password manager helps you create and store unique and strong passwords for each account securely.',
  },
  {
    id: 13,
    attackType: 'Imposter Email',
    description: 'You receive an email claiming to be from your CEO asking for sensitive information.',
    options: ['Reply with the information', 'Verify the sender’s identity', 'Delete the email', 'Forward it to your colleagues'],
    correctOption: 'Verify the sender’s identity',
    explanation: 'Always verify the identity of the sender before sharing sensitive information, especially in suspicious emails.',
  },
  {
    id: 14,
    attackType: 'Locked Account',
    description: 'You’re locked out of your account after multiple failed login attempts.',
    options: ['Request a password reset', 'Contact IT support', 'Try all possible passwords', 'Create a new account'],
    correctOption: 'Contact IT support',
    explanation: 'IT support can help securely restore access to your account and investigate the cause of the lockout.',
  },
  {
    id: 15,
    attackType: 'Malware Link',
    description: 'A colleague shares a suspicious link with you in a chat message.',
    options: ['Click the link', 'Ignore the message', 'Verify the link with your colleague', 'Report the message as spam'],
    correctOption: 'Verify the link with your colleague',
    explanation: 'Verify links before clicking them, even when sent by a trusted contact, as their account may have been compromised.',
  },
];

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const AttackSimulator = () => {
  const [scenariosList, setScenariosList] = useState(shuffle(scenarios).slice(0, 10)); // Select 10 random questions
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [feedback, setFeedback] = useState('');

  const currentScenario = scenariosList[currentScenarioIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === currentScenario.correctOption) {
      setFeedback('Correct! Well done!');
      setScore(score + 10);
    } else {
      setFeedback(`Incorrect. The correct option was: ${currentScenario.correctOption}`);
      setIncorrectAnswers([
        ...incorrectAnswers,
        { scenario: currentScenario, chosenOption: selectedOption },
      ]);
    }

    setTimeout(() => {
      if (currentScenarioIndex + 1 < scenariosList.length) {
        setCurrentScenarioIndex(currentScenarioIndex + 1);
        setSelectedOption('');
        setFeedback('');
      } else {
        setFeedback('Game Over! You have completed all scenarios.');
      }
    }, 2000);
  };

  const restartGame = () => {
    setScenariosList(shuffle(scenarios).slice(0, 10));
    setCurrentScenarioIndex(0);
    setSelectedOption('');
    setScore(0);
    setIncorrectAnswers([]);
    setFeedback('');
  };

  return (
    <div className="attack-simulator">
      <h2>Attack Simulator</h2>
      <p>Score: {score}</p>
      {feedback && currentScenarioIndex + 1 === scenariosList.length && feedback.includes('Game Over') ? (
        <div>
          <h3>Final Results</h3>
          <p>Total Correct: {score / 10}</p>
          <p>Total Incorrect: {incorrectAnswers.length}</p>
          {incorrectAnswers.length > 0 && (
            <div className="incorrect-details">
              <h4>Review Incorrect Answers:</h4>
              {incorrectAnswers.map((item, index) => (
                <div key={index}>
                  <p><strong>Scenario:</strong> {item.scenario.attackType}</p>
                  <p><strong>Your Choice:</strong> {item.chosenOption}</p>
                  <p><strong>Explanation:</strong> {item.scenario.explanation}</p>
                  <hr />
                </div>
              ))}
            </div>
          )}
          <div className="button-container">
            <button className="restart-btn" onClick={restartGame}>Restart Game</button>
            <Link to="/" className="back-button">
              Return to Homepage
            </Link>
          </div>
        </div>
      ) : feedback ? (
        <p className="feedback">{feedback}</p>
      ) : (
        <div>
          <h3>Scenario: {currentScenario.attackType}</h3>
          <p>{currentScenario.description}</p>
          <div className="options">
            {currentScenario.options.map((option, index) => (
              <button
                key={index}
                className={`option ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="button-container">
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={!selectedOption}
            >
              Submit
            </button>
            <Link to="/" className="back-button">
              Return to Homepage
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttackSimulator;
