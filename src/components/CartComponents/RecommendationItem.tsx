
import React from "react";
import styles from "./Cart.module.css";

interface RecommendationItemProps {
  title: string;
  price: number;
  image: string;
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({
  title,
  price,
  image,
}) => {
  return (
    <article className={styles.recommendationItem}>
      <img src={image} alt={title} className={styles.recommendationImage} />
      <h3 className={styles.recommendationTitle}>{title}</h3>
      <p className={styles.recommendationPrice}>
        <span className={styles.cartPriceHighlight}>{price}</span>{" "}
        <span className={styles.cartPriceCurrency}>₽</span>
      </p>
      <button className={styles.addButton}>добавить</button>
    </article>
  );
};

export default RecommendationItem;
