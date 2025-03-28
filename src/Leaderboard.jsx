import React from 'react';
import './Leaderboard.css';

const leaderboardData = [
  { rank: 1, username: 'CyberMaster', score: 450 },
  { rank: 2, username: 'HackSnipe', score: 420 },
  { rank: 3, username: 'SecureNinja', score: 390 },
  { rank: 4, username: 'CodeBreaker', score: 350 },
  { rank: 5, username: 'FirewallX', score: 320 },
];

function Leaderboard() {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div className="podium">
        <div className="podium-item silver">
          <span>2nd</span>
          <p>{leaderboardData[1].username}</p>
          <p>{leaderboardData[1].score}</p>
        </div>
        <div className="podium-item gold">
          <span>1st</span>
          <p>{leaderboardData[0].username}</p>
          <p>{leaderboardData[0].score}</p>
        </div>
        <div className="podium-item bronze">
          <span>3rd</span>
          <p>{leaderboardData[2].username}</p>
          <p>{leaderboardData[2].score}</p>
        </div>
      </div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map(player => (
            <tr key={player.rank}>
              <td>{player.rank}</td>
              <td>{player.username}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;