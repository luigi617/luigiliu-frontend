import React from 'react';
import styles from '../css/ArticleCard.module.scss';

interface ArticleCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, category, date }) => {
  return (
    <div className={styles.articleCard}>
      <img src={image} alt={title} className={styles.articleImage} />
      <h3 className={styles.articleTitle}>{title}</h3>
      
      {/* Category and Date in the same line */}
      <div className={styles.articleInfo}>
        <p className={styles.articleCategory}>{category}</p>
        <p className={styles.articleDate}>{date}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
