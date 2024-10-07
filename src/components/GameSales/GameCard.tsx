
import React from "react";
import styles from "./BestSellers.module.css";

interface GameCardProps {
  imageSrc: string;
  name: string;
  oldPrice: string;
  newPrice: string;
}

const GameCard: React.FC<GameCardProps> = ({
  imageSrc,
  name,
  oldPrice,
  newPrice,
}) => {
  return (
    <article className={styles.productCard}>
      <img src={imageSrc} alt={name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.oldPrice}>{oldPrice}</span>
          <span className={styles.newPrice}>{newPrice}</span>
        </div>
      </div>
    </article>
  );
};

export default GameCard;
