import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../css/games/nba/NBA.module.scss'
import customAxios from '../../utils/CustomAxios';
import NBACard from '../../components/games/nba/NBAGameCard';
import NBAStanding from '../../components/games/nba/NBAStanding';


interface TeamInfo {
  team_id: number;
  team_name: string;
  team_full_name: string;
  team_abbr_name: string;
  logo: string;
  qtr_points: Array<number>;
  point: number;
  team_wins_losses: number;
}

interface GameData {
  game_id: string;
  game_date: string;
  game_status: string;
  is_future_game: boolean;
  home_team_info: TeamInfo;
  away_team_info: TeamInfo;
}

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

const domainURL = import.meta.env.VITE_DOMAIN_URL;
const apiUrl = import.meta.env.VITE_API_URL;

const NBA: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [games, setGames] = useState<GameData[]>([])
  const [nextGamesUrl, setNextGamesUrl] = useState<string | null>(apiUrl + "/nba/games/")
  const [prevGamesUrl, setPrevGamesUrl] = useState<string | null>(null)

  const [standing, setStanding] = useState<StandingData | null>(null)

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [selectedComponent, setSelectedComponent] = useState<'games' | 'standing'>('games');
  const isDesktop = windowWidth > 992;


  const getGames = useCallback(async (url: string | null, dir: string) => {
    if (url === null){
      return;
    }
    try {
      const response = await customAxios.get(url);
      if (response.status != 200){
        setError("Error while fetching games")
      }
      var result = response.data
      
      var gameData = result["data"]
      
      if (dir == "next"){
        setNextGamesUrl(result["next_link"]);
      } else if (dir == "prev"){
        setPrevGamesUrl(result["prev_link"]);
      } else {
        setNextGamesUrl(result["next_link"]);
        setPrevGamesUrl(result["prev_link"]);
      }
      
      for (let i = 0; i < gameData.length; i++){
        
        var awayTeamLogo =  domainURL + gameData[i]["away_team_info"]["logo"]
        var homeTeamLogo = domainURL + gameData[i]["home_team_info"]["logo"]
        
        gameData[i]["away_team_info"]["logo"] = awayTeamLogo
        gameData[i]["home_team_info"]["logo"] = homeTeamLogo
      }
      let newGames: GameData[];
      if (dir == "next"){
        newGames = [...games, ...gameData];
      } else {
        newGames = [...gameData, ...games];
      }
      
      setGames(newGames)
    } catch (error) {
      setError("Error while fetching games: " + error)
    }
  }, [games])

  const updateLiveGames = useCallback((liveGames: Record<string, GameData>) => {
    setGames((prevGames) => {
  
      const newGames = [...prevGames];
      
      for (let i = 0; i < newGames.length; i++) {
        if (newGames[i].game_id in liveGames){
          newGames[i]["away_team_info"]["point"] = liveGames[newGames[i].game_id]["away_team_info"]["point"];
          newGames[i]["away_team_info"]["qtr_points"] = liveGames[newGames[i].game_id]["away_team_info"]["qtr_points"];
          newGames[i]["home_team_info"]["point"] = liveGames[newGames[i].game_id]["home_team_info"]["point"];
          newGames[i]["home_team_info"]["qtr_points"] = liveGames[newGames[i].game_id]["home_team_info"]["qtr_points"];
          newGames[i]["game_status"] = liveGames[newGames[i].game_id]["game_status"];
          newGames[i]["is_future_game"] = liveGames[newGames[i].game_id]["is_future_game"];
        }
      }
  
      return newGames;
    });
  }, [])

  const getStanding = useCallback(async () => {
    try {
      const response = await customAxios.get("/nba/standing/");
      if (response.status != 200){
        setError("Error while fetching standing")
      }
      var standingData = response.data
      for (let conf of ["east", "west"]){
        for (let i = 0; i < standingData[conf].length; i++){
          var teamLogo =  domainURL + standingData[conf][i]["team_logo"]
          standingData[conf][i]["team_logo"] = teamLogo
        }
      }
      
      setStanding(response.data)
    } catch (error) {
      setError("Error while fetching standing: " + error)
    }
  }, [])

  const getLiveGames = useCallback(async () => {
    
    try {
      const response = await customAxios.get("/nba/live-games/");
      if (response.status != 200){
        setError("Error while fetching live games")
      }
      
      var liveGamesData = response.data
      updateLiveGames(liveGamesData);
    } catch (error) {
      setError("Error while fetching live games: " + error)
    }
  }, [])

  useEffect(() => {
    getGames(nextGamesUrl, "today")
    getStanding()
    const interval = setInterval(getLiveGames, 10000); // Poll every 10 seconds

    return () => clearInterval(interval); 
    
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);




  return (
    <div className={styles.nbaContainer} >
      {error && <p className={styles.errorMessage}>{error}</p>}
      {!isDesktop && 
        <div className={styles.conferenceButtons}>
        <button
          className={`${styles.conferenceButton} ${
            selectedComponent === 'games' ? styles.active : ''
          }`}
          onClick={() => setSelectedComponent('games')}
        >
          Games
        </button>
        <button
          className={`${styles.conferenceButton} ${
            selectedComponent === 'standing' ? styles.active : ''
          }`}
          onClick={() => setSelectedComponent('standing')}
        >
          Standing
        </button>
      </div>
      }
      <div className={styles.columns}>
        {(isDesktop || selectedComponent == "games") &&
        <div className={styles.gamesColumn}>
          {prevGamesUrl && (
            <div
              className={styles.loadGames}
              onClick={() => getGames(prevGamesUrl, "prev")}
            >
              Load Previous Games
            </div>
          )}
          {games && games.map((game, index) => (
            <NBACard
              key={index}
              game_id={game.game_id}
              game_date={game.game_date}
              game_status={game.game_status}
              is_future_game={game.is_future_game}
              home_team_info={game.home_team_info}
              away_team_info={game.away_team_info}
            />
          ))}
          {nextGamesUrl && (
            <div
              className={styles.loadGames}
              onClick={() => getGames(nextGamesUrl, "next")}
            >
              Load Future Games
            </div>
          )}
        </div>
        }
        {(isDesktop || selectedComponent == "standing") &&
        <div className={styles.standingsColumn}>
          {standing &&
          <NBAStanding standings={standing} />
          }
        </div>
        }
      </div>

    </div>
  );
};

export default NBA;
