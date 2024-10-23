import React from 'react';
import articleHumanActivityRecognitionUsingObjectDetectionImage from '../assets/images/articleHumanActivityRecognitionUsingObjectDetection.jpeg';
import styles from '../css/Articles.module.scss';
import ArticleCard from '../components/ArticleCard';

const articles = [
  {
    image: articleHumanActivityRecognitionUsingObjectDetectionImage,
    title: 'Human Activity Recognition Using Object Detection',
    category: 'Computer Vision',
    date: 'Oct 23 2024',
    url: '/articles/human-activity-recognition-using-object-detection'
  }
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
