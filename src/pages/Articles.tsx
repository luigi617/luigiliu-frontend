import React from 'react';
import articleHumanActivityRecognitionUsingObjectDetectionImage from '../assets/images/articles/articleHumanActivityRecognitionUsingObjectDetection.jpeg';
import articleRealGestureXImage from '../assets/images/articles/realgesturex_cover.jpeg';
import styles from '../css/Articles.module.scss';
import ArticleCard from '../components/ArticleCard';

const articles = [
  {
    image: articleHumanActivityRecognitionUsingObjectDetectionImage,
    title: 'Human Activity Recognition Using Object Detection',
    category: 'Computer Vision',
    date: 'Oct 23 2024',
    url: '/articles/human-activity-recognition-using-object-detection'
  },
  {
    image: articleRealGestureXImage,
    title: 'RealGestureX',
    category: 'Computer Vision',
    date: 'Dec 30 2024',
    url: '/articles/realgesturex'
  },
];

const Articles: React.FC = () => {
  return (
    <div className={styles.articleContainer}>
        <div className={styles.articleGrid}>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              image={article.image}
              title={article.title}
              category={article.category}
              date={article.date}
              url={article.url}
            />
          ))}
        </div>
    </div>
  );
};

export default Articles;
