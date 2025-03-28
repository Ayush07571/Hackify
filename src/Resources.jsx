import React from "react";
import { Link } from "react-router-dom"; // Changed to standard React Link
import "./Resources.css"; // Importing CSS for styling

const attackTypes = [
  {
    name: "Phishing",
    description:
      "Attackers send fraudulent emails that appear to be from reputable sources to steal sensitive data like login credentials and credit card numbers.",
  },
  {
    name: "Pretexting",
    description:
      "Attackers create a fabricated scenario to engage a victim and obtain information or influence behavior.",
  },
  {
    name: "Baiting",
    description: "Attackers offer something enticing to an end user in exchange for information or access to systems.",
  },
  {
    name: "Quid Pro Quo",
    description:
      "Attackers request personal information in exchange for a service, such as IT assistance or software installation.",
  },
  {
    name: "Tailgating",
    description: "Attackers follow authorized personnel into a restricted area or system to gain unauthorized access.",
  },
  {
    name: "Vishing",
    description:
      "Voice phishing uses phone calls to deceive individuals into revealing critical financial or personal information.",
  },
];

const protectionTips = [
  "Be skeptical of unsolicited communications asking for personal information.",
  "Verify the identity of anyone requesting sensitive information, even if they appear legitimate.",
  "Don't click on links or download attachments from unknown or suspicious sources.",
  "Use multi-factor authentication whenever possible.",
  "Keep your software and systems updated with the latest security patches.",
  "Create strong, unique passwords for each of your accounts.",
  "Be cautious about what information you share on social media.",
  "Educate yourself and stay informed about the latest social engineering tactics.",
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <main className="about-main">
        <div className="about-content">
          <Link to="/" className="back-home">
            &#x2190; Back to Home
          </Link>
          <div className="header-section">
            <h1>About This Quiz</h1>
            <p>Learn how to protect yourself from social engineering attacks</p>
          </div>
          <div className="info-section">
            <p>
              Social engineering attacks are manipulation techniques that exploit human error to gain private
              information, access, or valuables. In cybersecurity, these attacks use psychological manipulation to trick
              users into making security mistakes or giving away sensitive information.
            </p>
            <h2>Common Types of Attacks</h2>
            <div className="attack-grid">
              {attackTypes.map((attack, index) => (
                <div key={index} className="attack-card">
                  <h3>{attack.name}</h3>
                  <p>{attack.description}</p>
                </div>
              ))}
            </div>
            <h2>How to Protect Yourself</h2>
            <ul className="protection-tips">
              {protectionTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
            <div className="quiz-promo">
              <h3>Ready to Test Your Knowledge?</h3>
              <p>Take our interactive quiz to see how well you can identify and respond to social engineering attacks.</p>
              <Link to="/games/security-quiz" className="start-quiz">
                Start Quiz Now
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="about-footer">
        <p>© {new Date().getFullYear()} Cybersecurity Awareness Quiz. All rights reserved.</p>
      </footer>
    </div>
  );
}
