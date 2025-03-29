import React, { useState, useEffect } from "react";
import "./CyberEscapeRoom.css";

// ========================
// Questions Arrays
// ========================
const easyQuestions = [
  {
    question: 'You receive an email from "support@yourbank-secure.com" asking to verify your account. What should you do?',
    options: ['Click the link and enter details', 'Ignore it', 'Reply with account details', 'Call the number in the email'],
    correctAnswer: 'Ignore it',
  },
  {
    question: 'Which of the following is the strongest password?',
    options: ['password123', 'JohnDoe1985', 'P@ssw0rd!', 'Xj!4z$L8m&Nq'],
    correctAnswer: 'Xj!4z$L8m&Nq',
  },
  {
    question: 'What is the safest way to share sensitive data?',
    options: ['Via email without encryption', 'Through a secured connection', 'On social media', 'With a public cloud link'],
    correctAnswer: 'Through a secured connection',
  },
  {
    question: 'What should you do if your antivirus software warns you about malware?',
    options: ['Ignore the warning', 'Delete the file immediately', 'Run a full system scan', 'Restart your computer'],
    correctAnswer: 'Run a full system scan',
  },
  {
    question: 'What does HTTPS indicate in a website URL?',
    options: ['A secure connection', 'A fast website', 'A public Wi-Fi network', 'A fake website'],
    correctAnswer: 'A secure connection',
  },
];

const mediumQuestions = [
  {
    question: 'A stranger calls claiming to be IT support and asks to install remote access software. What do you do?',
    options: ['Install the software', 'Verify by calling IT department', 'Give them your password', 'Ignore and hang up'],
    correctAnswer: 'Verify by calling IT department',
  },
  {
    question: 'A phishing attack that redirects you to a fake login page is called?',
    options: ['Man-in-the-middle attack', 'SQL Injection', 'Spoofing', 'Pharming'],
    correctAnswer: 'Pharming',
  },
  {
    question: 'What does two-factor authentication (2FA) add?',
    options: ['A second password', 'An extra layer of security', 'Reduced account access', 'Faster login'],
    correctAnswer: 'An extra layer of security',
  },
  {
    question: 'What should you do if you receive an unexpected email attachment?',
    options: ['Open it immediately', 'Scan it with antivirus software', 'Forward it to your contacts', 'Reply to the sender'],
    correctAnswer: 'Scan it with antivirus software',
  },
  {
    question: 'How often should you update your passwords?',
    options: ['Every week', 'Every month', 'Every few months', 'Every few years'],
    correctAnswer: 'Every few months',
  },
];

const hardQuestions = [
  {
    question: 'What does a "zero-day exploit" mean?',
    options: ['An attack happening in zero seconds', 'A vulnerability with no fix yet', 'A virus that spreads in a day', 'A DoS attack'],
    correctAnswer: 'A vulnerability with no fix yet',
  },
  {
    question: 'What is ransomware?',
    options: ['A type of malware that encrypts your files and demands payment', 'Software used for data backups', 'An antivirus program', 'A type of firewall'],
    correctAnswer: 'A type of malware that encrypts your files and demands payment',
  },
  {
    question: 'How can you ensure the security of your Wi-Fi network?',
    options: ['Turn off encryption', 'Use a strong WPA2 password', 'Share the password publicly', 'Use open access points'],
    correctAnswer: 'Use a strong WPA2 password',
  },
  {
    question: 'What should you do after a suspected data breach?',
    options: ['Ignore it', 'Notify affected parties and change your passwords', 'Delete your accounts', 'Wait for further instructions'],
    correctAnswer: 'Notify affected parties and change your passwords',
  },
];

// ========================
// Utility Functions
// ========================

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function generateQuestions() {
  return [
    ...shuffle(easyQuestions).slice(0, 3),
    ...shuffle(mediumQuestions).slice(0, 2),
    ...shuffle(hardQuestions).slice(0, 2),
  ];
}

// ========================
// CyberEscapeRoom Component
// ========================
function CyberEscapeRoom() {
  const [questions, setQuestions] = useState(generateQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [completed, setCompleted] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    if (timeLeft > 0 && !completed) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !completed) {
      setCompleted(true);
      alert("Time’s up! You failed to escape.");
    }
  }, [timeLeft, completed]);

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    const isCorrect =
      selectedAnswer === questions[currentQuestionIndex].correctAnswer;
    const updatedCorrectCount = isCorrect ? correctCount + 1 : correctCount;
    setQuestionsAsked((prev) => prev + 1);

    if (isCorrect) {
      setCorrectCount(updatedCorrectCount);
    }

    if (updatedCorrectCount >= 5) {
      setCompleted(true);
      setTimeTaken(120 - timeLeft);
    } else {
      const nextIndex = (currentQuestionIndex + 1) % questions.length;
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
    }
  };

  const restartGame = () => {
    setQuestions(generateQuestions());
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectCount(0);
    setQuestionsAsked(0);
    setTimeLeft(120);
    setCompleted(false);
    setTimeTaken(0);
  };

  return (
    <div className="escape-room">
      <h2>Cyber Escape Room</h2>
      <p>
        Time Left: {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toString().padStart(2, "0")}
      </p>

      {completed ? (
        <div className="result">
          <h3>{correctCount >= 5 ? "You Escaped!" : "Game Over!"}</h3>
          <p>
            Final Score: {correctCount} Correct / {questionsAsked} Questions
            Asked
          </p>
          <p>
            Time Taken: {Math.floor(timeTaken / 60)}:
            {(timeTaken % 60).toString().padStart(2, "0")}
          </p>
          <div
            className="button-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <button onClick={restartGame}>Restart Game</button>
            <a href="/" className="back-button">
              Back to Homepage
            </a>
          </div>
        </div>
      ) : (
        <div className="puzzle">
          <p>
            <strong>{questions[currentQuestionIndex].question}</strong>
          </p>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => {
              let optionClass = "";
              if (selectedAnswer) {
                if (option === questions[currentQuestionIndex].correctAnswer) {
                  optionClass = "correct";
                } else if (option === selectedAnswer) {
                  optionClass = "incorrect";
                }
              }
              return (
                <div
                  key={index}
                  className={`option ${optionClass}`}
                  onClick={() =>
                    !selectedAnswer && handleOptionSelect(option)
                  }
                >
                  {option}
                </div>
              );
            })}
          </div>
          {selectedAnswer && (
            <p
              className={`feedback ${
                selectedAnswer ===
                questions[currentQuestionIndex].correctAnswer
                  ? "correct"
                  : "incorrect"
              }`}
            >
              {selectedAnswer === questions[currentQuestionIndex].correctAnswer
                ? "Correct Answer!"
                : "Wrong Answer!"}
            </p>
          )}
          <div
            className="button-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <button onClick={handleSubmit} disabled={!selectedAnswer}>
              Submit
            </button>
            <a href="/" className="back-button">
              Back to Homepage
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default CyberEscapeRoom;
