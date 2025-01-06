import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlaceCard from '../../components/games/nearbyRestaurants/PlaceCard'; // Import the PlaceCard component
import styles from '../../css/games/nearbyRestaurants/NearbyRestaurants.module.scss'


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

type NearbyRestaurantsProps = {
  apiKey: string;
  radius?: number;
};

const NearbyRestaurants: React.FC<NearbyRestaurantsProps> = ({ apiKey, radius = 1500 }) => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => setError(`Error fetching location: ${err.message}`)
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  const tags = [
      "american_restaurant",
      "bar",
      "barbecue_restaurant",
      "brazilian_restaurant",
      "breakfast_restaurant",
      "brunch_restaurant",
      "cafe",
      "chinese_restaurant",
      "coffee_shop",
      "fast_food_restaurant",
      "french_restaurant",
      "greek_restaurant",
      "hamburger_restaurant",
      "indian_restaurant",
      "indonesian_restaurant",
      "italian_restaurant",
      "japanese_restaurant",
      "korean_restaurant",
      "lebanese_restaurant",
      "mediterranean_restaurant",
      "mexican_restaurant",
      "middle_eastern_restaurant",
      "pizza_restaurant",
      "ramen_restaurant",
      "restaurant",
      "sandwich_shop",
      "seafood_restaurant",
      "spanish_restaurant",
      "steak_house",
      "sushi_restaurant",
      "thai_restaurant",
      "turkish_restaurant",
      "vegan_restaurant",
      "vegetarian_restaurant",
      "vietnamese_restaurant",
  ]

  useEffect(() => {
    const fetchNearbyRestaurants = async () => {
      if (!location) return;

      const url = 'https://places.googleapis.com/v1/places:searchNearby';

      const data = {
        includedTypes: tags,
        locationRestriction: {
          circle: {
            center: {
              latitude: location.latitude,
              longitude: location.longitude,
            },
            radius: 1000.0,
          },
        },
      };

      const headers = {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.displayName,places.primaryType,places.rating,places.formattedAddress,places.googleMapsUri,places.internationalPhoneNumber,places.photos,places.regularOpeningHours,places.reviews',
      };

      
      
      try {
        const response = await axios.post(url, data, { headers });
        
        const results = response.data.places.sort((a: any, b: any) => b.rating - a.rating);

        
        const restaurantData = results.map((place: any) => ({
          name: place.displayName.text,
          type: place.primaryType,
          rating: place.rating,
          address: place.formattedAddress,
          googleMapURL: place.googleMapsUri,
          phoneNumber: place.internationalPhoneNumber,
          photos: place.photos.map((photo: any) => 
            `https://places.googleapis.com/v1/${photo.name}/media?key=${apiKey}&max_width_px=500`
          ),
          openNow: place.regularOpeningHours !== undefined ? place.regularOpeningHours.openNow : "Not Known",
          reviews: place.reviews.map((review: any) => review.originalText?.text ?? ""),
        }));
        
        setRestaurants(restaurantData);
      } catch (error) {
        console.error("Error fetching nearby places:", error);
        setError('Error fetching nearby restaurants');
      }
    };

    if (location) {
      fetchNearbyRestaurants();
    }
  }, [location, apiKey, radius]);

  return (
    <div className={styles.nearbyRestaurantsContainer} >
      <h1 className={styles.title}>Nearby Restaurants</h1>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {restaurants.length ? (
        <div className={styles.restaurantList}>
          {restaurants.map((restaurant, index) => (
            <PlaceCard
              key={index}
              images={restaurant.photos.slice(0, 3)} // Use first photo or default image
              name={restaurant.name}
              url={restaurant.googleMapURL}
              type={restaurant.type}
              rating={restaurant.rating}
              address={restaurant.address}
              phoneNumber={restaurant.phoneNumber}
              openNow={restaurant.openNow === "Not Known" ? restaurant.openNow : (restaurant.openNow ? "Open" : "Closed")} // Handle openNow status
            />
          ))}
        </div>
      ) : (
        <p className={styles.text}>Loading nearby restaurants...</p>
      )}
    </div>
  );
};

export default NearbyRestaurants;
