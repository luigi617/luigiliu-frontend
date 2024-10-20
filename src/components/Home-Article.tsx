import React from 'react';
import ArticleCard from './ArticleCard';
import styles from '../css/Home-Article.module.scss';

import testImage from '../assets/images/ds.jpg';
import { Link } from 'react-router-dom';

const articles = [
  {
    image: testImage,
    title: 'DATA STRUCTURE AND ALGORITHM CHEAT SHEET',
    category: 'Programming',
    date: 'Jun 26 2024',
  },
  {
    image: testImage,
    title: 'EIGENVALUES AND EIGENVECTORS',
    category: 'Mathematics',
    date: 'Dec 21 2023',
  },
  {
    image: testImage,
    title: 'LINEAR REGRESSION',
    category: 'Programming',
    date: 'Dec 19 2023',
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeArticle;
