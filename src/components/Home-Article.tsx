import React from 'react';
import ArticleCard from './ArticleCard';
import styles from '../css/Home-Article.module.scss';

import articleHumanActivityRecognitionUsingObjectDetectionImage from '../assets/images/articleHumanActivityRecognitionUsingObjectDetection.jpeg';
import articleRealGestureXImage from '../assets/images/realgesturex_cover.jpeg';
import { Link } from 'react-router-dom';

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

const HomeArticle: React.FC = () => {
  return (
    <div className={styles.homeArticleContainer}>
      <div className={styles.articleListContainer}>
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>Articles.</h1>
          <Link to="/articles">discover more</Link>
        </div>
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
    </div>
  );
};

export default HomeArticle;
