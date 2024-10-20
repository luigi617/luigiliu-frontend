import React from 'react';
import testImage from '../assets/images/ds.jpg';
import styles from '../css/Articles.module.scss';
import ArticleCard from '../components/ArticleCard';

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
  {
    image: testImage,
    title: 'LINEAR REGRESSION',
    category: 'Programming',
    date: 'Dec 19 2023',
  },
  {
    image: testImage,
    title: 'LINEAR REGRESSION',
    category: 'Programming',
    date: 'Dec 19 2023',
  },
  {
    image: testImage,
    title: 'LINEAR REGRESSION',
    category: 'Programming',
    date: 'Dec 19 2023',
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
            />
          ))}
        </div>
    </div>
  );
};

export default Articles;
