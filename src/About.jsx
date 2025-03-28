import React from "react";
import { Link } from "react-router-dom"; // Using React Router Link for navigation
import "./About.css"; // Importing the CSS file

export default function AboutPage() {
  return (
    <div className="about-page">
      <main className="about-main">
        <div className="about-content">
          <Link to="/" className="back-home">
            &#x2190; Back to Home
          </Link>
          <div className="header-section">
            <h1>About Cyber Awareness Hub</h1>
            <p>Empowering individuals to defend against digital threats.</p>
          </div>
          <div className="info-section">
            <h2>Our Mission</h2>
            <p>
              The goal of Cyber Awareness Hub is to educate users about the ever-evolving risks of the digital world and to equip them with the knowledge and tools to protect their personal and professional data. 
            </p>
            <h2>Why This Platform Exists</h2>
            <p>
              With the increasing sophistication of cyber threats, everyone is a potential target. From phishing emails to ransomware attacks, understanding how to identify, avoid, and respond to these threats is crucial. 
              This platform is designed to make learning about cybersecurity engaging, informative, and actionable.
            </p>
            <h2>What You Can Do Here</h2>
            <ul className="platform-features">
              <li>Learn about common cyber threats through our resourceful guides and tips.</li>
              <li>Test your knowledge with interactive quizzes and simulations.</li>
              <li>Explore real-life examples of social engineering tactics and how to counter them.</li>
              <li>Enhance your understanding of cybersecurity best practices.</li>
            </ul>
            <div className="quiz-promo">
              <h3>Let’s Make the Internet Safer Together</h3>
              <p>
                Join our mission to create a community of digitally aware and cyber-resilient individuals. Start by exploring our resources or testing your skills through our challenges!
              </p>
              <Link to="/challenges" className="start-quiz">
                Explore Challenges
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="about-footer">
        <p>© {new Date().getFullYear()} Cyber Awareness Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
