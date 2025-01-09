import React, { useState } from 'react';
import styles from '../../../css/games/nba/NBAStanding.module.scss';

interface StandingTeamInfo {
  rank: number;
  team_name: string;
  team_logo: string;
  pct: string;
  wins: number;
  losses: number;
  home: string;
  away: string;
  ll10: string;
}

interface StandingData {
  east: StandingTeamInfo[];
  west: StandingTeamInfo[];
}

interface NBAStandingsProps {
  standings: StandingData;
}

const NBAStandings: React.FC<NBAStandingsProps> = ({ standings }) => {
  const [selectedConference, setSelectedConference] = useState<'east' | 'west'>('east');

  // Table Header
  const renderTableHeader = () => (
    <thead>
      <tr>
        <th className={styles.tableHeaderRank}>Rank</th>
        <th className={styles.tableHeaderTeam}>Team</th>
        <th>W</th>
        <th>L</th>
        <th>Pct</th>
        <th>Home</th>
        <th>Away</th>
        <th>Last 10</th>
      </tr>
    </thead>
  );

  // Table Body
  const renderTableBody = (teams: StandingTeamInfo[]) => (
    <tbody>
      {teams.map((team) => (
        <tr key={`${team.team_name}-${team.rank}`}>
          <td className={styles.tableDataRank}>{team.rank}</td>
          <td className={styles.tableDataTeam}>
            <img src={team.team_logo} alt={team.team_name} className={styles.logo} />
            {team.team_name}
          </td>
          <td>{team.wins}</td>
          <td>{team.losses}</td>
          <td>{team.pct}</td>
          <td>{team.home}</td>
          <td>{team.away}</td>
          <td>{team.ll10}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className={styles.standingsContainer}>
      {/* Conference Toggle Buttons */}
      <div className={styles.conferenceButtons}>
        <button
          className={`${styles.conferenceButton} ${
            selectedConference === 'east' ? styles.active : ''
          }`}
          onClick={() => setSelectedConference('east')}
        >
          Eastern Conference
        </button>
        <button
          className={`${styles.conferenceButton} ${
            selectedConference === 'west' ? styles.active : ''
          }`}
          onClick={() => setSelectedConference('west')}
        >
          Western Conference
        </button>
      </div>

      {/* Eastern Conference Table */}
      {selectedConference === 'east' && (
        <>
          <table className={styles.standingsTable}>
            {renderTableHeader()}
            {renderTableBody(standings.east)}
          </table>
        </>
      )}

      {/* Western Conference Table */}
      {selectedConference === 'west' && (
        <>
          <table className={styles.standingsTable}>
            {renderTableHeader()}
            {renderTableBody(standings.west)}
          </table>
        </>
      )}
    </div>
  );
};

export default NBAStandings;
