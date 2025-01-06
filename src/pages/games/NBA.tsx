import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../css/games/nba/NBA.module.scss'


type Restaurant = {
  name: string;
  type?: string;
  rating?: number;
  address?: string;
  googleMapURL: string;
  phoneNumber?: string;
  photos: string[];
  openNow?: boolean | string;
  reviews?: string[];
};


const NBA: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  // Fetch user location
  useEffect(() => {
    
  }, []);




  return (
    <div className={styles.nbaContainer} >
      <h1 className={styles.title}>Nearby Restaurants</h1>
      {error && <p className={styles.errorMessage}>{error}</p>}
      
    </div>
  );
};

export default NBA;
