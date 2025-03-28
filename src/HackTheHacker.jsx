import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HackTheHacker.css";

// Icons (we'll use simple placeholders since Lucide icons need to be imported; you can replace with actual icons)
const ArrowLeft = () => <span>←</span>;
const Terminal = () => <span>🖥️</span>;
const CheckCircle = () => <span>✅</span>;
const XCircle = () => <span>❌</span>;
const AlertTriangle = () => <span>⚠️</span>;
const Search = () => <span>🔍</span>;
const FileText = () => <span>📄</span>;

const challenges = [
  {
    id: "terminal-1",
    title: "Command Line Investigation",
    description: "Explore the hacker's terminal to find the hidden password.",
    type: "terminal",
    difficulty: "easy",
    content: {
      initialText: "You've gained access to a hacker's terminal. Explore the files to find the secret password.",
      currentDirectory: "/home/hacker",
      files: ["notes.txt", "passwords.txt", ".hidden_dir", "script.sh"],
      fileContents: {
        "notes.txt":
          "Remember to move the password to a more secure location.\nCurrent tasks:\n- Update encryption\n- Move sensitive data\n- Delete logs",
        "passwords.txt": "Old passwords (DO NOT USE):\npassword123\nqwerty123\nhackerman",
        "script.sh":
          '#!/bin/bash\necho "Cleaning logs..."\nrm -rf /var/log/*\necho "Done!"\n# Note: The new password is in the hidden directory',
        ".hidden_dir/secret.txt": "The password is: CyberNinja2023",
      },
    },
    solution: "CyberNinja2023",
    hint: "Look for hidden directories and files. In Linux, hidden files and directories start with a dot (.).",
    explanation:
      "The password was hidden in a file within a hidden directory. By using the 'ls' command to list files, you could see the '.hidden_dir' directory. Then using 'cat .hidden_dir/secret.txt' would reveal the password 'CyberNinja2023'.",
  },
  {
    id: "decrypt-1",
    title: "Decode the Message",
    description: "The hacker used a simple encryption method. Can you crack it?",
    type: "decrypt",
    difficulty: "medium",
    content: {
      encryptedMessage: "Gur frperg pbqr gb gur onfrzrag vf: unpxre_qrpbqre",
      additionalInfo: "This appears to be a simple substitution cipher.",
    },
    solution: "The secret code to the basement is: hacker_decoder",
    hint: "This is a ROT13 cipher, where each letter is replaced by the letter 13 positions after it in the alphabet.",
    explanation:
      "The message was encrypted using ROT13, a simple letter substitution cipher that replaces a letter with the letter 13 positions after it in the alphabet. Decoding 'Gur frperg pbqr gb gur onfrzrag vf: unpxre_qrpbqre' gives 'The secret code to the basement is: hacker_decoder'.",
  },
  {
    id: "file-1",
    title: "Hidden in the Image",
    description: "The hacker hid information in this image file. Extract the hidden data.",
    type: "file",
    difficulty: "medium",
    content: {
      fileName: "vacation_photo.jpg",
      fileContent:
        "[BINARY IMAGE DATA]\n\nEXIF Data:\nCamera: Canon EOS 5D\nDate: 2023-06-15\nGPS: [REDACTED]\nAuthor: Anonymous\nComment: S3cr3tP@ssw0rd_1n_EXIF",
    },
    solution: "S3cr3tP@ssw0rd_1n_EXIF",
    hint: "Check the metadata of the image file. Hackers often hide information in EXIF data.",
    explanation:
      "The password was hidden in the EXIF metadata of the image, specifically in the Comment field. EXIF data contains information about the image such as camera settings, date, location, and can include custom fields like comments which are perfect for hiding information.",
  },
  {
    id: "network-1",
    title: "Suspicious Network Traffic",
    description: "Analyze this network traffic capture to find the suspicious data exfiltration.",
    type: "network",
    difficulty: "hard",
    content: {
      trafficData: `192.168.1.105 -> 8.8.8.8: DNS query for google.com
  192.168.1.105 -> 23.63.127.42: HTTP GET /index.html
  23.63.127.42 -> 192.168.1.105: HTTP 200 OK
  192.168.1.105 -> 45.33.32.156: HTTP POST /api/data
  45.33.32.156 -> 192.168.1.105: HTTP 200 OK
  192.168.1.105 -> 45.33.32.156: HTTP GET /images/logo.png
  192.168.1.105 -> 192.168.1.1: DNS query for dataexfil.evil.com
  192.168.1.105 -> 107.22.14.77: HTTP POST /submit.php?data=UGFzc3dvcmQ6IEV4ZmlsdHJhdGlvbjIwMjM=
  107.22.14.77 -> 192.168.1.105: HTTP 200 OK`,
    },
    solution: "Exfiltration2023",
    hint: "Look for unusual HTTP requests, especially those with encoded data. The Base64 encoded string might contain the password.",
    explanation:
      "The suspicious traffic is the HTTP POST to 107.22.14.77 with Base64 encoded data in the URL parameter. Decoding the Base64 string 'UGFzc3dvcmQ6IEV4ZmlsdHJhdGlvbjIwMjM=' reveals 'Password: Exfiltration2023'. This is a common technique used by attackers to exfiltrate data from compromised systems.",
  },
  {
    id: "terminal-2",
    title: "Firewall Configuration",
    description: "Configure the firewall rules to block the hacker's access.",
    type: "terminal",
    difficulty: "hard",
    content: {
      initialText:
        "You need to configure the firewall to block the hacker's IP address. Examine the logs to find their IP and block it.",
      currentDirectory: "/var/log",
      files: ["auth.log", "firewall.conf", "access.log", "iptables.rules"],
      fileContents: {
        "auth.log":
          "Jun 10 14:23:15 server sshd[12345]: Failed password for root from 192.168.1.1 port 54321\nJun 10 14:25:20 server sshd[12346]: Failed password for admin from 23.94.60.112 port 22\nJun 10 14:26:35 server sshd[12347]: Failed password for admin from 23.94.60.112 port 22\nJun 10 14:27:42 server sshd[12348]: Failed password for admin from 23.94.60.112 port 22\nJun 10 14:28:50 server sshd[12349]: Successful login for admin from 23.94.60.112 port 22",
        "firewall.conf":
          '# Firewall Configuration\n# Add IP addresses to block below\nBLOCK_IPS=""\n\n# The secret password is: FirewallMaster2023',
        "access.log":
          '192.168.1.105 - - [10/Jun/2023:14:20:22 +0000] "GET /admin HTTP/1.1" 403 213\n23.94.60.112 - - [10/Jun/2023:14:28:55 +0000] "GET /admin HTTP/1.1" 200 4523\n23.94.60.112 - - [10/Jun/2023:14:29:12 +0000] "POST /admin/settings HTTP/1.1" 200 152\n23.94.60.112 - - [10/Jun/2023:14:30:45 +0000] "GET /admin/users HTTP/1.1" 200 8721',
        "iptables.rules": "# iptables rules\n# Block IP example:\n# iptables -A INPUT -s IP_ADDRESS -j DROP",
      },
    },
    solution: "23.94.60.112",
    hint: "Look at the auth.log file for repeated failed login attempts followed by a successful login. This pattern often indicates a brute force attack.",
    explanation:
      "By examining the auth.log file, you can see multiple failed login attempts from IP address 23.94.60.112, followed by a successful login. This pattern suggests a brute force attack that eventually succeeded. The access.log confirms this IP accessed the admin area after the successful login. To protect the system, this IP should be blocked using the firewall.",
  },
];

function HackTheHacker() {
  const navigate = useNavigate();
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [terminalHistory, setTerminalHistory] = useState([]);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem("hackTheHackerProgress");
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setCompletedChallenges(progress.completedChallenges || []);
      setCurrentChallengeIndex(progress.currentChallengeIndex || 0);
    }
    setLoading(false);
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (!loading) {
      localStorage.setItem(
        "hackTheHackerProgress",
        JSON.stringify({
          completedChallenges,
          currentChallengeIndex,
        })
      );

      // Award badges based on progress
      const existingBadges = JSON.parse(localStorage.getItem("userBadges") || "[]");
      if (completedChallenges.length >= 3 && !existingBadges.includes("ethical_hacker")) {
        localStorage.setItem("userBadges", JSON.stringify([...existingBadges, "ethical_hacker"]));

        // Update user points
        const currentPoints = Number.parseInt(localStorage.getItem("userPoints") || "0");
        localStorage.setItem("userPoints", (currentPoints + 400).toString());
      }
    }
  }, [completedChallenges, currentChallengeIndex, loading]);

  const currentChallenge = challenges[currentChallengeIndex];
  const progress = (completedChallenges.length / challenges.length) * 100;

  const handleSubmitAnswer = () => {
    if (!userInput) return;

    setIsAnswered(true);

    // Check if answer is correct (case insensitive)
    const isCorrectAnswer = userInput.toLowerCase().trim() === currentChallenge.solution.toLowerCase().trim();
    setIsCorrect(isCorrectAnswer);

    if (isCorrectAnswer && !completedChallenges.includes(currentChallenge.id)) {
      setCompletedChallenges([...completedChallenges, currentChallenge.id]);

      // Award badge if all challenges are solved
      if (completedChallenges.length + 1 === challenges.length) {
        const existingBadges = JSON.parse(localStorage.getItem("userBadges") || "[]");
        if (!existingBadges.includes("master_hacker")) {
          localStorage.setItem("userBadges", JSON.stringify([...existingBadges, "master_hacker"]));

          // Update user points
          const currentPoints = Number.parseInt(localStorage.getItem("userPoints") || "0");
          localStorage.setItem("userPoints", (currentPoints + 600).toString());
        }
      }
    }
  };

  const handleNextChallenge = () => {
    if (currentChallengeIndex < challenges.length - 1) {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
      setUserInput("");
      setIsAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
      setTerminalHistory([]);
    } else if (completedChallenges.length === challenges.length) {
      // All challenges completed
      navigate("/games/hack-hacker/complete");
    }
  };
  const handlePreviousChallenge = () => {
    if (currentChallengeIndex > 0) {
      setCurrentChallengeIndex(currentChallengeIndex - 1);
      setUserInput("");
      setIsAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
      setTerminalHistory([]);
    }
  };

  const handleTerminalCommand = () => {
    if (!userInput) return;

    const command = userInput.trim().toLowerCase();
    let response = "";

    // Process terminal commands
    if (currentChallenge.type === "terminal") {
      if (command === "help") {
        response = "Available commands: ls, cat, cd, pwd, help";
      } else if (command === "ls") {
        response = currentChallenge.content.files.join("\n");
      } else if (command.startsWith("cat ")) {
        const fileName = command.substring(4).trim();
        const fileContent = currentChallenge.content.fileContents[fileName];
        response = fileContent ? fileContent : `File not found: ${fileName}`;
      } else if (command === "pwd") {
        response = currentChallenge.content.currentDirectory;
      } else if (command.startsWith("cd ")) {
        response = "Directory changed (simulated)";
      } else {
        response = `Command not found: ${command}`;
      }

      setTerminalHistory([...terminalHistory, `$ ${command}`, response]);
      setUserInput("");
    }
  };

  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset your progress? This cannot be undone.")) {
      localStorage.removeItem("hackTheHackerProgress");
      setCompletedChallenges([]);
      setCurrentChallengeIndex(0);
      setUserInput("");
      setIsAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
      setTerminalHistory([]);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "difficulty-easy";
      case "medium":
        return "difficulty-medium";
      case "hard":
        return "difficulty-hard";
      default:
        return "difficulty-default";
    }
  };

  // Render different challenge types
  const renderChallengeContent = () => {
    if (!currentChallenge) return null;

    switch (currentChallenge.type) {
      case "terminal":
        return (
          <div className="challenge-content">
            <div className="terminal-container">
              <div className="terminal-header">Terminal</div>
              <div className="terminal-body">
                {currentChallenge.content.initialText && (
                  <div className="terminal-text">{currentChallenge.content.initialText}</div>
                )}
                {terminalHistory.map((line, index) => (
                  <div
                    key={index}
                    className={line.startsWith("$") ? "terminal-command" : "terminal-response"}
                  >
                    {line}
                  </div>
                ))}
                <div className="terminal-input-container">
                  <span className="terminal-prompt">$</span>
                  <input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleTerminalCommand();
                      }
                    }}
                    placeholder="Type command here..."
                    className="terminal-input"
                  />
                </div>
              </div>
            </div>
            <div className="terminal-footer">
              <div className="terminal-hint">
                Type <span className="code">help</span> for available commands
              </div>
              <div>
                <button
                  onClick={() => {
                    setUserInput("");
                    setIsAnswered(true);
                    setShowHint(false);
                  }}
                  className="submit-final-btn"
                >
                  Submit Final Answer
                </button>
              </div>
            </div>
            {isAnswered && (
              <div className="answer-section">
                <div className="answer-label">Enter the secret password/flag:</div>
                <div className="answer-input-container">
                  <input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter your answer"
                    className="answer-input"
                  />
                  <button onClick={handleSubmitAnswer} className="submit-btn">
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        );

      case "decrypt":
        return (
          <div className="challenge-content">
            <div className="challenge-box">
              <div className="challenge-label">Encrypted message:</div>
              <div className="challenge-text">{currentChallenge.content.encryptedMessage}</div>
              {currentChallenge.content.additionalInfo && (
                <div className="challenge-info">
                  <span className="info-label">Additional info:</span>{" "}
                  {currentChallenge.content.additionalInfo}
                </div>
              )}
            </div>
            <div className="input-section">
              <div className="input-label">Enter the decrypted message:</div>
              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your answer here"
                className="challenge-input"
              />
            </div>
          </div>
        );

      case "file":
        return (
          <div className="challenge-content">
            <div className="challenge-box">
              <div className="challenge-header">
                <FileText />
                <div className="challenge-label">{currentChallenge.content.fileName}</div>
              </div>
              <div className="separator"></div>
              <div className="challenge-text">{currentChallenge.content.fileContent}</div>
            </div>
            <div className="input-section">
              <div className="input-label">Enter the hidden information:</div>
              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your answer here"
                className="challenge-input"
              />
            </div>
          </div>
        );

      case "network":
        return (
          <div className="challenge-content">
            <div className="challenge-box">
              <div className="challenge-header">
                <Search />
                <div className="challenge-label">Network Traffic Analysis</div>
              </div>
              <div className="separator"></div>
              <div className="challenge-text">{currentChallenge.content.trafficData}</div>
            </div>
            <div className="input-section">
              <div className="input-label">Enter your findings:</div>
              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your answer here"
                className="challenge-input"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <Terminal className="loading-icon" />
          <h1 className="loading-text">Loading challenges...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="hack-the-hacker">
      <main className="main-content">
        <div className="container">
          <div className="header">
            <Link to="/" className="exit-link">
              <ArrowLeft /><span>  Back</span>
            </Link>
            <div className="progress-text">
              <span className="progress-label">Challenges:</span>{" "}
              {completedChallenges.length}/{challenges.length}
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>

          <div className="challenge-card">
            <div className="card-header">
              <h2 className="card-title">{currentChallenge.title}</h2>
              <span className={`difficulty-badge ${getDifficultyColor(currentChallenge.difficulty)}`}>
                {currentChallenge.difficulty}
              </span>
            </div>
            <div className="card-description">
              <p>{currentChallenge.description}</p>
            </div>
            <div className="card-content">{renderChallengeContent()}</div>

            {isAnswered && (
              <div className="result-section">
                <div className="result-header">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="result-icon correct" />
                      <div className="result-text correct">Correct!</div>
                    </>
                  ) : (
                    <>
                      <XCircle className="result-icon incorrect" />
                      <div className="result-text incorrect">Incorrect</div>
                    </>
                  )}
                </div>
                <div className="explanation-section">
                  <div className="explanation-label">Explanation:</div>
                  <p className="explanation-text">{currentChallenge.explanation}</p>
                </div>
              </div>
            )}

            {showHint && !isAnswered && (
              <div className="hint-section">
                <div className="hint-content">
                  <AlertTriangle className="hint-icon" />
                  <div className="hint-text">{currentChallenge.hint}</div>
                </div>
              </div>
            )}

            <div className="card-footer">
              {!isAnswered ? (
                <>
                  <button
                  onClick={handlePreviousChallenge}
                  className="previous-btn"
                  title="Previous Challenge"
                >
                  <ArrowLeft />
                     <span>  Previous Challenge</span> 
                  </button>
                  <div className="action-buttons">
                    <button
                      onClick={handleResetProgress}
                      className="reset-btn"
                    >
                      Reset Progress
                    </button>
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={!userInput && currentChallenge.type !== "terminal"}
                      className="submit-btn"
                    >
                      Submit Answer
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={handleNextChallenge}
                  className="next-btn"
                >
                  {currentChallengeIndex < challenges.length - 1 || !isCorrect
                    ? "Next Challenge"
                    : "Complete All Challenges"}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HackTheHacker;