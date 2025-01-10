
import React from 'react';
import styles from '../../../css/games/nba/NBAGameCard.module.scss';
import { getMonthName } from '../../../utils/date';
import moment from 'moment-timezone';

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

const ET_TIMEZONE = 'America/New_York';

const NBACard: React.FC<NBAGameCardProps> = (game) => {

    const getQuarterName = (q: number) => {
        if (q <= 4){
            return "Q" + q;
        }
        return "OT" + (q - 4)
    }
    
    const formatDate = (date_string: string) => {
        const parsedDate = new Date(date_string);
        const day = String(parsedDate.getDate()).padStart(2, '0');
        const month = getMonthName(parsedDate.getMonth()+1)
        const year = parsedDate.getFullYear();
    
        return `${month} ${day} ${year}`;
    };
    
    const gameStatus = (status: string, date_string: string) => {
        const parsedETDate = moment.utc(date_string).tz("America/New_York");

        if (game.game_status == "Scheduled"){
            // const hour24 = String(parsedETDate.hour()).padStart(2, '0');
            const hour24 = parsedETDate.hour()
            const minuteStr = String(parsedETDate.minute()).padStart(2, '0');
            
            var hour = hour24;
            var clock12 = "AM";
            if (hour24 >= 12){
                hour = hour24 - 12;
                clock12 = "PM";
            }
            const hourStr = String(hour);
            return `${hourStr}:${minuteStr} ${clock12} ET`
        }
        return status;
    }
      
    return (
        <div className={styles.nbaCard}>
        {/* Header */}
        <div className={styles.header}>
            <span className={styles.league}>{formatDate(game.game_date)}</span>
            <span className={styles.status}>{gameStatus(game.game_status, game.game_date)}</span>
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
        {!game.is_future_game && game.home_team_info.qtr_points.length > 0 &&
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
