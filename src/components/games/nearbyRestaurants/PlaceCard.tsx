import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styles from '../../../css/games/nearbyRestaurants/PlaceCard.module.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface PlaceCardProps {
  images: string[]; // Update to accept multiple images
  name: string;
  url: string;
  type?: string;
  rating?: number;
  address?: string;
  phoneNumber?: string;
  openNow?: string;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ images, name, url, type, rating, address, phoneNumber, openNow }) => {
  // Slick settings for carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Link to={url} className={styles.placeLink}>
      <div className={styles.placeCard}>
        {/* Slider Component */}
        <Slider {...sliderSettings} className={styles.placeImageSlider}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${name} image ${index + 1}`} className={styles.placeImage} />
            </div>
          ))}
        </Slider>
        <div className={styles.placeContent}>
          <h3 className={styles.placeName}>{name}</h3>
          {type && <p className={styles.placeType}>{type}</p>}
          {rating && <p className={styles.placeRating}>Rating: {rating}</p>}
          {address && <p className={styles.placeAddress}>{address}</p>}
          {phoneNumber && <p className={styles.placePhone}>{phoneNumber}</p>}
          <p className={styles.placeOpenNow}>{openNow}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
