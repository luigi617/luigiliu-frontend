
import React from 'react';
import styles from '../../../css/games/nba/NBAGameCard.module.scss';

interface TeamInfo {
    logo: string;
    team_id: number;
    team_name: string;
    qtr_points: Array<number>;
    point: number;
    team_wins_losses: number;
}

interface NBAGameCardProps {
    key: number
    game_id: string;
    game_date: string;
    game_status: string;
    is_future_game: boolean;
    home_team_info: TeamInfo;
    away_team_info: TeamInfo;
}

const NBACard: React.FC<NBAGameCardProps> = (game) => {

    const getQuarterName = (q: number) => {
        if (q <= 4){
            return "Q" + q;
        }
        return "OT" + (q - 4)
    }
    return (
        <div className={styles.nbaCard}>
        {/* Header */}
        <div className={styles.header}>
            <span className={styles.league}>{game.game_date}</span>
            <span className={styles.status}>{game.game_status}</span>
        </div>

        {/* Scores Section */}
        <div className={styles.scoreSection}>
            {/* Home Team */}
            <div className={styles.team}>
            <img src={game.home_team_info.logo} alt={game.home_team_info.team_name} className={styles.logo} />
            <div>
                <div className={styles.teamName}>{game.home_team_info.team_name}</div>
                {!game.is_future_game &&
                <div className={styles.record}>({game.home_team_info.team_wins_losses})</div>
                }
            </div>
            </div>

            {/* Score */}
            <div className={styles.scores}>
            {!game.is_future_game &&
            <div className={styles.score}>{game.home_team_info.point}</div>
            }
            <span>-</span>
            {!game.is_future_game &&
            <div className={styles.score}>{game.away_team_info.point}</div>
            }
            </div>

            {/* Away Team */}
            <div className={styles.team}>
            <img src={game.away_team_info.logo} alt={game.away_team_info.team_name} className={styles.logo} />
            <div>
                <div className={styles.teamName}>{game.away_team_info.team_name}</div>
                {!game.is_future_game &&
                <div className={styles.record}>({game.away_team_info.team_wins_losses})</div>
                }
            </div>
            </div>
        </div>

        {/* Quarter Breakdown */}
        {!game.is_future_game &&
        <div className={styles.quarters}>
            <div className={styles.row}>
            <div className={styles.cell}>Team</div>
            {game.home_team_info.qtr_points.map((_, index) => (
                <div key={index} className={styles.cell}>
                {getQuarterName(index+1)}
                </div>
            ))}
            <div className={styles.cell}>T</div>
            </div>

            <div className={styles.row}>
            <div className={styles.cell}>{game.home_team_info.team_name}</div>
            {game.home_team_info.qtr_points.map((q, index) => (
                <div key={index} className={styles.cell}>
                {q}
                </div>
            ))}
            <div className={styles.cell}>{game.home_team_info.point}</div>
            </div>

            <div className={styles.row}>
            <div className={styles.cell}>{game.away_team_info.team_name}</div>
            {game.away_team_info.qtr_points.map((q, index) => (
                <div key={index} className={styles.cell}>
                {q}
                </div>
            ))}
            <div className={styles.cell}>{game.away_team_info.point}</div>
            </div>
        </div>
            }
        </div>
    );
};

export default NBACard;
