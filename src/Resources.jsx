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
  {
    name: "Smishing",
    description:
      "SMS phishing involves sending text messages that appear to come from trusted sources to trick users into revealing sensitive information.",
  },
  {
    name: "Ransomware",
    description:
      "Malicious software that encrypts a victim's files, with attackers demanding payment to restore access.",
  },
  {
    name: "Watering Hole Attack",
    description:
      "Attackers compromise websites frequently visited by their targets to deliver malware.",
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
  "Use a password manager to maintain strong, unique passwords for all your accounts.",
  "Back up your important data regularly and keep backups offline or in a separate secure location.",
  "Use anti-virus and anti-malware software and keep it updated.",
  "Enable automatic updates for your operating system and applications.",
];

const indianGovernmentResources = [
  {
    name: "Indian Cyber Crime Coordination Centre (I4C)",
    url: "https://www.cybercrime.gov.in/",
    description: "Portal for reporting cybercrimes and getting assistance from authorities.",
  },
  {
    name: "National Critical Information Infrastructure Protection Centre (NCIIPC)",
    url: "https://nciipc.gov.in/",
    description: "Designated agency to protect nation's critical information infrastructure.",
  },
  {
    name: "CERT-In (Indian Computer Emergency Response Team)",
    url: "https://www.cert-in.org.in/",
    description: "Handles cybersecurity incidents and publishes advisories.",
  },
  {
    name: "Cyber Swachhta Kendra",
    url: "https://www.cyberswachhtakendra.gov.in/",
    description: "Provides information and tools for malware detection and prevention.",
  },
  {
    name: "Ministry of Electronics & Information Technology (MeitY)",
    url: "https://www.meity.gov.in/",
    description: "Official ministry overseeing electronics and IT governance in India.",
  },
];

const cybersecurityBlogs = [
  {
    name: "Krebs on Security",
    url: "https://krebsonsecurity.com/",
    description: "In-depth security news and investigation by Brian Krebs.",
  },
  {
    name: "The Hacker News",
    url: "https://thehackernews.com/",
    description: "Leading source of cybersecurity news and information.",
  },
  {
    name: "CSO Online",
    url: "https://www.csoonline.com/",
    description: "News, analysis and research on security and risk management.",
  },
  {
    name: "Security Week",
    url: "https://www.securityweek.com/",
    description: "Cybersecurity news, insights and analysis.",
  },
  {
    name: "BleepingComputer",
    url: "https://www.bleepingcomputer.com/",
    description: "Information security and technology news with a focus on practical solutions.",
  },
];

const cyberSecurityStats = [
  "India reported over 1.2 million cybercrime incidents in 2023.",
  "Phishing attacks account for more than 80% of reported security incidents globally.",
  "The average cost of a data breach in India is approximately ₹14 crore.",
  "It takes an average of 280 days to identify and contain a data breach.",
  "Over 60% of data breaches involve compromised credentials.",
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
            
            <h2>Cybersecurity: The First Line of Defense</h2>
            <p>
              In today's digital landscape, cybersecurity is no longer optional. It's the systematic approach to 
              protecting systems, networks, programs, devices, and data from digital attacks. These attacks are typically 
              aimed at accessing, changing, or destroying sensitive information, extorting money, or interrupting normal 
              business processes.
            </p>
            <p>
              The most effective cybersecurity strategy employs multiple layers of defense against cyber threats. 
              It combines technological solutions with user education, as people are often the weakest link in security systems.
            </p>
            
            <div className="stats-section">
              <h3>Cybersecurity by the Numbers</h3>
              <ul className="cyber-stats">
                {cyberSecurityStats.map((stat, index) => (
                  <li key={index}>{stat}</li>
                ))}
              </ul>
            </div>

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

            <h2>Indian Government Cybersecurity Resources</h2>
            <div className="resources-section">
              {indianGovernmentResources.map((resource, index) => (
                <div key={index} className="resource-card">
                  <h3>{resource.name}</h3>
                  <p>{resource.description}</p>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                    Visit Website
                  </a>
                </div>
              ))}
            </div>

            <h2>Stay Informed: Cybersecurity Blogs and News</h2>
            <div className="blog-section">
              {cybersecurityBlogs.map((blog, index) => (
                <div key={index} className="blog-card">
                  <h3>{blog.name}</h3>
                  <p>{blog.description}</p>
                  <a href={blog.url} target="_blank" rel="noopener noreferrer" className="blog-link">
                    Read Blog
                  </a>
                </div>
              ))}
            </div>

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