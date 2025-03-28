import React, { useState, useEffect } from 'react';
import './SecurityQuiz.css';

// Full pool of questions
const questionsPool = [
  {
    id: 1,
    question: 'What is phishing?',
    options: [
      { id: 'A', text: 'A type of fish' },
      { id: 'B', text: 'A cyberattack via email' },
      { id: 'C', text: 'A secure protocol' },
      { id: 'D', text: 'A programming language' },
    ],
    correctAnswer: 'B',
    explanation: 'Phishing is a type of cyberattack where attackers send fraudulent emails pretending to be from a legitimate source to trick users into providing sensitive information.',
    securityTip: 'Always verify the sender’s email address and avoid clicking on suspicious links in emails.',
},
{
    id: 2,
    question: 'What does a strong password typically include?',
    options: [
      { id: 'A', text: 'Your name and birth year' },
      { id: 'B', text: 'A combination of letters, numbers, and symbols' },
      { id: 'C', text: 'The word "password"' },
      { id: 'D', text: 'Only lowercase letters' },
    ],
    correctAnswer: 'B',
    explanation: 'A strong password includes a mix of letters, numbers, and special symbols to make it hard to crack.',
    securityTip: 'Use a password manager to generate and store complex passwords securely.',
},
{
    id: 3,
    question: 'What is two-factor authentication (2FA)?',
    options: [
      { id: 'A', text: 'A type of firewall' },
      { id: 'B', text: 'A second password' },
      { id: 'C', text: 'An extra layer of security using a second verification method' },
      { id: 'D', text: 'A type of malware' },
    ],
    correctAnswer: 'C',
    explanation: 'Two-factor authentication adds a layer of security by requiring a second form of verification.',
    securityTip: 'Enable 2FA on all your accounts to protect against unauthorized access.',
},
{
    id: 4,
    question: 'What is ransomware?',
    options: [
      { id: 'A', text: 'Software used to improve device performance' },
      { id: 'B', text: 'Malicious software that locks or encrypts your data until a ransom is paid' },
      { id: 'C', text: 'A secure way to back up files' },
      { id: 'D', text: 'A type of antivirus program' },
    ],
    correctAnswer: 'B',
    explanation: 'Ransomware locks your data and demands payment to regain access.',
    securityTip: 'Back up your important data to avoid being a victim of ransomware.',
},
{
    id: 5,
    question: 'Why should you avoid using public Wi-Fi for sensitive activities?',
    options: [
      { id: 'A', text: 'It’s usually slow' },
      { id: 'B', text: 'It may not be encrypted, making your data vulnerable' },
      { id: 'C', text: 'It requires a password' },
      { id: 'D', text: 'It’s only for public use' },
    ],
    correctAnswer: 'B',
    explanation: 'Public Wi-Fi networks are often unencrypted, allowing attackers to intercept your data, such as login credentials or personal information.',
    securityTip: 'Use a VPN (Virtual Private Network) when connecting to public Wi-Fi to encrypt your connection.',
},
{
    id: 6,
    question: 'What is a brute-force attack?',
    options: [
      { id: 'A', text: 'An attempt to physically break into a system' },
      { id: 'B', text: 'Trying all possible passwords to gain unauthorized access' },
      { id: 'C', text: 'A type of phishing' },
      { id: 'D', text: 'A high-speed system crash' },
    ],
    correctAnswer: 'B',
    explanation: 'A brute-force attack involves guessing passwords until the correct one is found.',
    securityTip: 'Use strong and unique passwords to resist brute-force attacks.',
},
{
    id: 7,
    question: 'What does HTTPS in a web address indicate?',
    options: [
      { id: 'A', text: 'A slow website' },
      { id: 'B', text: 'A website encrypted for secure communication' },
      { id: 'C', text: 'An outdated protocol' },
      { id: 'D', text: 'A free service' },
    ],
    correctAnswer: 'B',
    explanation: 'HTTPS ensures encrypted communication between your browser and the website.',
    securityTip: 'Always look for HTTPS before entering sensitive information.',
},
{
    id: 8,
    question: 'What is the purpose of a firewall?',
    options: [
      { id: 'A', text: 'To monitor and filter network traffic' },
      { id: 'B', text: 'To store backups' },
      { id: 'C', text: 'To increase internet speed' },
      { id: 'D', text: 'To detect malware' },
    ],
    correctAnswer: 'A',
    explanation: 'A firewall filters incoming and outgoing network traffic to protect against threats.',
    securityTip: 'Enable your firewall to block unauthorized access.',
},
{
    id: 9,
    question: 'What does social engineering refer to in cybersecurity?',
    options: [
      { id: 'A', text: 'Manipulating people into giving sensitive information' },
      { id: 'B', text: 'Building secure software' },
      { id: 'C', text: 'A programming technique' },
      { id: 'D', text: 'A firewall configuration' },
    ],
    correctAnswer: 'A',
    explanation: 'Social engineering exploits human psychology to gain unauthorized access.',
    securityTip: 'Be cautious of unsolicited requests for sensitive information.',
},
{
    id: 10,
    question: 'What should you do if your account is hacked?',
    options: [
      { id: 'A', text: 'Change your password immediately' },
      { id: 'B', text: 'Ignore suspicious activity' },
      { id: 'C', text: 'Share details with your friends' },
      { id: 'D', text: 'Deactivate the account' },
    ],
    correctAnswer: 'A',
    explanation: 'Changing your password quickly helps regain control of your account.',
    securityTip: 'Enable two-factor authentication to strengthen account security.',
},
{
    id: 11,
    question: 'What is the role of antivirus software?',
    options: [
      { id: 'A', text: 'Detects and removes viruses from your computer' },
      { id: 'B', text: 'Blocks all emails' },
      { id: 'C', text: 'Speeds up your internet' },
      { id: 'D', text: 'Improves system performance' },
    ],
    correctAnswer: 'A',
    explanation: 'Antivirus software is designed to detect and remove harmful programs like viruses and malware from your device.',
    securityTip: 'Always keep your antivirus software up-to-date for maximum protection.',
},
{
    id: 12,
    question: 'What is social engineering in cybersecurity?',
    options: [
      { id: 'A', text: 'Manipulating people into revealing sensitive information' },
      { id: 'B', text: 'An advanced hacking technique' },
      { id: 'C', text: 'Securing social media accounts' },
      { id: 'D', text: 'Improving user behavior online' },
    ],
    correctAnswer: 'A',
    explanation: 'Social engineering exploits human psychology to gain access to confidential information or systems.',
    securityTip: 'Be cautious of unexpected requests for sensitive data, even if they appear to come from a trusted source.',
},
{
    id: 13,
    question: 'What does a secure website typically include?',
    options: [
      { id: 'A', text: 'A lock icon and HTTPS in the address' },
      { id: 'B', text: 'Bright colors on the page' },
      { id: 'C', text: 'Lots of ads' },
      { id: 'D', text: 'Quick loading times' },
    ],
    correctAnswer: 'A',
    explanation: 'A secure website includes HTTPS and a lock icon, indicating that your connection is encrypted.',
    securityTip: 'Check for HTTPS in the URL before entering personal information on a website.',
},
{
    id: 14,
    question: 'Why are software updates important?',
    options: [
      { id: 'A', text: 'They add new features and improve security' },
      { id: 'B', text: 'They make your computer run faster' },
      { id: 'C', text: 'They help you store more files' },
      { id: 'D', text: 'They are only for aesthetics' },
    ],
    correctAnswer: 'A',
    explanation: 'Software updates often include patches that fix security vulnerabilities and improve functionality.',
    securityTip: 'Enable automatic updates to ensure your devices are secure at all times.',
},
{
  id: 15,
  question: 'What should you do if you receive an unexpected file attachment?',
  options: [
    { id: 'A', text: 'Open it immediately' },
    { id: 'B', text: 'Scan it with antivirus software first' },
    { id: 'C', text: 'Forward it to others' },
    { id: 'D', text: 'Delete it without notifying the sender' },
  ],
  correctAnswer: 'B',
  explanation: 'Unexpected file attachments might contain malware. It is important to scan them before opening.',
  securityTip: 'Ensure your antivirus software is active and updated to scan attachments effectively.',
},
{
  id: 16,
  question: 'What is ransomware?',
  options: [
    { id: 'A', text: 'A secure file storage system' },
    { id: 'B', text: 'Malicious software that locks or encrypts your data until payment is made' },
    { id: 'C', text: 'An antivirus software upgrade' },
    { id: 'D', text: 'A type of firewall' },
  ],
  correctAnswer: 'B',
  explanation: 'Ransomware blocks access to your system or data and demands a ransom for its release.',
  securityTip: 'Back up your data regularly and avoid clicking on suspicious links to prevent ransomware attacks.',
},
{
  id: 17,
  question: 'Why is it dangerous to use the same password for multiple accounts?',
  options: [
    { id: 'A', text: 'It takes longer to log in' },
    { id: 'B', text: 'If one account is breached, all linked accounts are at risk' },
    { id: 'C', text: 'It confuses attackers' },
    { id: 'D', text: 'It makes accounts easier to manage' },
  ],
  correctAnswer: 'B',
  explanation: 'Using the same password for multiple accounts increases vulnerability if one account is compromised.',
  securityTip: 'Use unique and strong passwords for every account and store them securely in a password manager.',
},
{
  id: 18,
  question: 'What is a VPN (Virtual Private Network)?',
  options: [
    { id: 'A', text: 'A tool to improve internet speed' },
    { id: 'B', text: 'A secure way to browse the web by encrypting your connection' },
    { id: 'C', text: 'An advanced hacking tool' },
    { id: 'D', text: 'A tool for tracking user activity' },
  ],
  correctAnswer: 'B',
  explanation: 'A VPN encrypts your internet connection, making your online activities private and secure.',
  securityTip: 'Use a VPN when accessing public Wi-Fi or sensitive websites to protect your data.',
},
{
  id: 19,
  question: 'What does "zero-day vulnerability" mean?',
  options: [
    { id: 'A', text: 'A software vulnerability actively exploited before it is patched' },
    { id: 'B', text: 'An outdated software error' },
    { id: 'C', text: 'An error found after the update' },
    { id: 'D', text: 'A type of firewall setting' },
  ],
  correctAnswer: 'A',
  explanation: 'Zero-day vulnerabilities refer to newly discovered flaws exploited before fixes are released.',
  securityTip: 'Always keep your system updated to minimize the risk of zero-day attacks.',
},
{
  id: 20,
  question: 'What is malware?',
  options: [
    { id: 'A', text: 'A type of harmless software' },
    { id: 'B', text: 'Malicious software designed to disrupt or harm systems' },
    { id: 'C', text: 'An outdated encryption method' },
    { id: 'D', text: 'A programming language' },
  ],
  correctAnswer: 'B',
  explanation: 'Malware refers to malicious software like viruses, worms, and ransomware.',
  securityTip: 'Avoid downloading files or software from untrusted sources to prevent malware infection.',
},
{
  id: 21,
  question: 'Why should you avoid oversharing personal information online?',
  options: [
    { id: 'A', text: 'It slows down your device' },
    { id: 'B', text: 'It increases your risk of identity theft' },
    { id: 'C', text: 'It decreases your internet speed' },
    { id: 'D', text: 'It attracts advertisements' },
  ],
  correctAnswer: 'B',
  explanation: 'Oversharing personal information online can lead to identity theft and fraud.',
  securityTip: 'Limit what you share on social media and adjust privacy settings to protect your information.',
},
{
  id: 22,
  question: 'What is a digital certificate?',
  options: [
    { id: 'A', text: 'A file that verifies the authenticity of websites or software' },
    { id: 'B', text: 'A tool for creating passwords' },
    { id: 'C', text: 'A program to detect malware' },
    { id: 'D', text: 'A document required for internet access' },
  ],
  correctAnswer: 'A',
  explanation: 'Digital certificates are used to verify the authenticity of websites and applications.',
  securityTip: 'Ensure that websites with digital certificates have HTTPS enabled for secure communication.',
},
{
  id: 23,
  question: 'How can you detect a phishing email?',
  options: [
    { id: 'A', text: 'Suspicious links or attachments' },
    { id: 'B', text: 'Grammatical errors and urgent language' },
    { id: 'C', text: 'Emails from unknown senders asking for sensitive information' },
    { id: 'D', text: 'All of the above' },
  ],
  correctAnswer: 'D',
  explanation: 'Phishing emails often include suspicious links, errors, urgency, and requests for sensitive information.',
  securityTip: 'Always verify emails before clicking on links or providing personal data.',
},
{
  id: 24,
  question: 'What is encryption?',
  options: [
    { id: 'A', text: 'A way to back up files' },
    { id: 'B', text: 'A method to scramble data to prevent unauthorized access' },
    { id: 'C', text: 'A type of malware' },
    { id: 'D', text: 'A programming technique' },
  ],
  correctAnswer: 'B',
  explanation: 'Encryption secures data by converting it into unreadable formats for unauthorized users.',
  securityTip: 'Use encryption tools to protect sensitive files and communication.',
},
{
  id: 25,
  question: 'What is the difference between encryption and hashing?',
  options: [
    { id: 'A', text: 'Encryption secures data for transmission, while hashing verifies data integrity' },
    { id: 'B', text: 'Hashing encrypts data for secure storage' },
    { id: 'C', text: 'Encryption and hashing are the same' },
    { id: 'D', text: 'Both are methods to slow down attackers' },
  ],
  correctAnswer: 'A',
  explanation: 'Encryption is used to secure data during transmission, while hashing creates a unique representation of data to verify its integrity.',
  securityTip: 'Understand when to use encryption versus hashing to secure your sensitive data appropriately.',
},
];

// Utility function to shuffle and select 5 random questions
const getRandomQuestions = (questionPool, count) => {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

function SecurityQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    // Get 5 random questions at the start
    const randomQuestions = getRandomQuestions(questionsPool, 5);
    setQuestions(randomQuestions);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (optionId) => {
    if (!isAnswered) {
      setSelectedOption(optionId);
    }
  };

  const handleSubmitAnswer = () => {
    if (!currentQuestion || selectedOption === null) return;

    setIsAnswered(true);
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    const randomQuestions = getRandomQuestions(questionsPool, 5);
    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsQuizComplete(false);
  };

  return (
    <div className="quiz-page">
      <main className="quiz-container">
        {isQuizComplete ? (
          <div className="final-score">
            <h3>Quiz Completed!</h3>
            <p>Your Score: {score} / {questions.length}</p>
            <button onClick={restartQuiz} className="restart-btn">
              Restart Quiz
            </button>
          </div>
        ) : currentQuestion ? (
          <>
            <div className="quiz-header">
              <a href="/" className="exit-link">
                <span className="arrow-left">←</span> Exit Quiz
              </a>
              <div className="question-counter">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
            </div>

            <div className="quiz-card">
              <div className="quiz-card-header">
                <h2>{currentQuestion.question}</h2>
              </div>
              <div className="quiz-card-content">
                <div className="options-grid">
                  {currentQuestion.options.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      className={`option-item ${
                        selectedOption === option.id ? 'selected' : ''
                      } ${
                        isAnswered
                          ? option.id === currentQuestion.correctAnswer
                            ? 'correct'
                            : selectedOption === option.id
                            ? 'incorrect'
                            : ''
                          : ''
                      }`}
                    >
                      <div className="option-label">{option.id}</div>
                      <div className="option-text">{option.text}</div>
                      {isAnswered && option.id === currentQuestion.correctAnswer && (
                        <span className="icon correct-icon">✔</span>
                      )}
                      {isAnswered && selectedOption === option.id && option.id !== currentQuestion.correctAnswer && (
                        <span className="icon incorrect-icon">✘</span>
                      )}
                    </div>
                  ))}
                </div>

                {isAnswered && (
                  <div className="feedback-section">
                    <div className="explanation">
                      <h4>Explanation:</h4>
                      <p>{currentQuestion.explanation}</p>
                    </div>
                    <div className="security-tip">
                      <h4>Security Tip:</h4>
                      <p>🛡️ {currentQuestion.securityTip}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="quiz-card-footer">
                {!isAnswered ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedOption}
                    className="submit-btn"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button onClick={handleNextQuestion} className="next-btn">
                    {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question '}
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <p>Loading questions...</p>
        )}
      </main>
    </div>
  );
}

export default SecurityQuiz;
